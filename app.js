const express=require('express');
const bodyParser=require('body-parser');
const { render } = require('express/lib/response');
const app=express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let prevItems=[]
let items=[];
let nextItems=[]

const date=require(__dirname+'/date.js');
let day=date.getDate();
let prev=date.getYesterdayDate();
let next=date.getTomorrowDate();

app.get("/", function(req, res){
    const dataItems={prev: true, next: true, listTitlePrev: prev,  listTitle: day, listTitleNext: next, prevListItems: prevItems, listItems:items, nextListItems:nextItems, listName: "curr"};
    res.render('list', dataItems);
})

app.get("/yesterday", function(req, res){
  const dataItems={prev: false, next: true, listTitlePrev: null,  listTitle: prev, listTitleNext: day, prevListItems: null, listItems:prevItems, nextListItems:items, listName: "prev"};
  res.render('list', dataItems);
});

app.get("/tomorrow", function(req, res){
  const dataItems={prev: true, next: false, listTitlePrev: day,  listTitle: next, listTitleNext: null, prevListItems: items, listItems:nextItems, nextListItems:null,  listName: "next"};
  res.render('list', dataItems);
})

app.post("/", function(req, res){
  let varName=req.body.list;
  let item=req.body.newItem
  if(varName=="curr"){
    items.push(item);
    res.redirect("/");
  }
  else if(varName=="next"){
    nextItems.push(item);
    res.redirect("/tomorrow");
  }
  else if(varName=="prev"){
    prevItems.push(item);
    res.redirect("/yesterday");
  }
})

app.listen(PORT, function(){
  console.log("Server started at port 3000");
})
