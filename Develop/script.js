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
