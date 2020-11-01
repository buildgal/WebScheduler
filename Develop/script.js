//sets the current date at the top of the page 
let currentDate= $("#currentDay");
let currentDateFromat=moment().format("MMM Do YY");
currentDate.text(currentDateFromat);


//comparing the time tag inside each textbox to the current time 
let workDayTime= $(this).attr("src",$(this).attr("time"));
let momentTime=moment().format('LT');
let arrMomentTime= momentTime.split();

if (workDayTime>arrMomentTime){ 
    //need to change the color of the box 
    alert("displays if current time"+ arrMomentTime)
}
else{
    alert("dont do anything");

}
    
/*
current time 1pm- 9-12: grey and 2-5: green 
curr onrent time 11am- 12-5 green and 9-10 grey
crent time 3pm- 
Q: What how do you change the color 
*/