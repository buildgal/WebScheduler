//sets the current date at the top of the page 
let currentDate= $("#currentDay");
let currentDateFromat=moment().format('MMMM Do YYYY, h:mm:ss a')
currentDate.text(currentDateFromat);


//comparing the time tag inside each textbox to the current time 
let momentTime=moment().format('LT');
let arrMomentTime= momentTime.split(":");
let timeSlot= ["9","10","11","12","1","2","3","4","5"];
let currentHour= arrMomentTime[0];
//let a= timeSlot[5];
//let c= $("#"+"5");
//if (a===currentHour){
  //  c.css("background-color", "yellow");
//}

for (let i=0; i<timeSlot.length; i++){
    if (timeSlot[i]===currentHour){
        let inputField=$("#"+i);
        inputField.css("background-color", "yellow");
    }

}


/*

if (timeSlot===currentHour){
    le

    $("input-group-text").css("background-color", "yellow");
} 
    
else{
    alert("dont do anything");

}
*/
    
/*
current time 1pm- 9-12: grey and 2-5: green 
curr onrent time 11am- 12-5 green and 9-10 grey
crent time 3pm- 
Q: What how do you change the color 
*/

//Local Storage: when you update something on the form and refresh the page it saves 
//need an onclick function 
//key and value from the local stroage 
//display the local storage 
