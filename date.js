exports.getDate=getDate;
exports.getYesterdayDate=getYesterdayDate;
exports.getTomorrowDate=getTomorrowDate;
exports.getDay=getDay;
exports.getHours=getHours;
exports.getMinutes=getMinutes;
exports.getSeconds=getSeconds;

function getMinutes(){
    let today=new Date();
    return today.getMinutes();
}

function getHours(){
    let today=new Date();
    return today.getHours();
}

function getSeconds(){
    let today=new Date();
    return today.getSeconds();
}

function getYesterdayDate(){
    let today=new Date();
    let yesterday=new Date(today);
    yesterday.setDate(yesterday.getDate()-1);
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return yesterday.toLocaleDateString("en-US", options);
}

function getDate(){
    let today=new Date();
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

function getTomorrowDate(){
    let today=new Date();
    let tomorrow=new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1);
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return tomorrow.toLocaleDateString("en-US", options);
}

function getDay(){
        let today=new Date();
        let options={
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}
