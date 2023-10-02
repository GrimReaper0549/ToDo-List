
export function getMinutes(){
    let today=new Date();
    return today.getMinutes();
}

export function getHours(){
    let today=new Date();
    return today.getHours();
}

export function getSeconds(){
    let today=new Date();
    return today.getSeconds();
}

export function getYesterdayDate(){
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

export function getDate(){
    let today=new Date();
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

export function getTomorrowDate(){
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

export function getDay(){
        let today=new Date();
        let options={
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}
