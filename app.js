import express from 'express';
import bodyParser from 'body-parser';
import * as date from "./date.js";
const app=express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

let prevItems=[]
let items=[];
let nextItems=[]

let day=date.getDate();
let prev=date.getYesterdayDate();
let next=date.getTomorrowDate();

app.get("/", (req, res) => {
    const dataItems={prev: true, next: true, listTitlePrev: prev,  listTitle: day, listTitleNext: next, prevListItems: prevItems, listItems:items, nextListItems:nextItems, listName: "curr"};
    // res.sendFile(__dirname+"/in.txt");
    res.render('list', dataItems);
})

app.get("/yesterday", (req, res) => {
  const dataItems={prev: false, next: true, listTitlePrev: null,  listTitle: prev, listTitleNext: day, prevListItems: null, listItems:prevItems, nextListItems:items, listName: "prev"};
  res.render('list', dataItems);
});

app.get("/tomorrow", (req, res) => {
  const dataItems={prev: true, next: false, listTitlePrev: day,  listTitle: next, listTitleNext: null, prevListItems: items, listItems:nextItems, nextListItems:null,  listName: "next"};
  res.render('list', dataItems);
})

app.post("/", (req, res) => {
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

app.listen(PORT, () => {
  console.log("Server started at port 3000");
})
