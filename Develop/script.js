//sets the current date at the top of the page 
let currentDate= $("#currentDay");
let currentDateFromat=moment().format('MMMM Do YYYY, h:mm:ss a')
currentDate.text(currentDateFromat);


//comparing the time tag inside each textbox to the current time 
let momentTime=moment().format('LT');
let arrMomentTime= momentTime.split(":");
let timeSlot= ["9","10","11","12","1","2","3","4","5"];
let currentHour= arrMomentTime[0];


for (let i=0; i<timeSlot.length; i++){
    if (timeSlot[i]===currentHour){
        let inputField=$("#"+i);
        inputField.css("background-color", "yellow");
    }

    else if (timeSlot[i]>currentHour ){
        let inputField=$("#"+i);
        inputField.css("background-color", "green");
        let NineAm=$("#0");
        NineAm.css("background-color","orange");
    }

    else if (timeSlot[i]<currentHour){
        let inputField=$("#"+i);
        inputField.css("background-color", "orange");
    }

}


//Local Storage: when you update something on the form and refresh the page it saves 
//need an onclick function 
//key and value from the local stroage 
//display the local storage 
//lets firs save the first button 

let saveBtn= $(".input-group-append");
let inputSlot= $(".form-control"); //textbox
console.log(inputSlot+"input");
let timeBtn= $(".input-group-text");//this  is what I am passing in on 55  64  
console.log(timeBtn +"times");

let key=timeBtn.value;
console.log(key,"key");
let value=inputSlot.value;
window.localStorage;


saveBtn.on("click", function() { //find the value of time here , and the description=  two items need to be set to the
    console.log(inputSlot, 'INPUT SLOT');    
    setLS(timeBtn, inputSlot);//passing in a whole list of keys 
    getLS(timeBtn);
    storeInLocalStorage(timeBtn, inputSlot);



});

//setting the local storage 
function setLS(key,value){
    //console.log('THE KEY IS:', key);
    window.localStorage.setItem(key, JSON.stringify(value));

}

//changing the HTML values 
function getLS(key){
    let value= window.localStorage.getItem(key);
    let setString= JSON.parse(value);
    return setString;

}
