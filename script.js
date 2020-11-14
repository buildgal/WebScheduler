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

let nineBtns=$("#nineBtn");


let tenBtn=$("#tenBtn");
let elevenBtn=$("#elevenBtn");

let twelveBtn=$("#twelveBtn");
let oneBtn=$("#oneBtn");
let twoBtn=$("#twoBtn");

let threeBtn=$("#threeBtn");
let fourBtn=$("#fourBtn");
let fiveBtn=$("#fiveBtn");



//getting all text
let nine=$("#0");
let ten=$("#1");
let eleven=$("#2");

let twelve=$("#3");
let one=$("#4");
let two=$("#5");

let three=$("#6");
let four=$("#7");
let five=$("#8");

//getting all the keys

let inputHr9="9";
let inputHr10="10";
let inputHr11="11";
let inputHr12="12";
let inputHr1="1";
let inputHr2="2";
let inputHr3="3";
let inputHr4="4";
let inputHr5="5";
 
window.localStorage;

nineBtns.on("click", function() { 
    getLS(inputHr9);
    setLS(inputHr9,nine.val());
    console.log(nine.val());

});

tenBtn.on("click", function() { 
    getLS(inputHr10);
    setLS(inputHr10, ten.val());   
});

elevenBtn.on("click", function() { 
    getLS(inputHr11);
    setLS(inputHr11, eleven.val());
});


twelveBtn.on("click", function() { 
    getLS(inputHr12);
    setLS(inputHr12, tweleve.val());
});

oneBtn.on("click", function() { 
    getLS(inputHr1);
    setLS(inputHr1, one.val());
    
});

twoBtn.on("click", function() { 
    getLS(inputHr2);
    setLS(inputHr2, two.val());
    
});


threeBtn.on("click", function() { 
    getLS(inputHr3);
    setLS(inputHr3, three.val());
    
});

fourBtn.on("click", function() { 
    getLS(inputHr4);
    setLS(inputHr4, four.val());
    
});

fiveBtn.on("click", function() { 
    getLS(inputHr5);
    setLS(inputHr5, five.val());
    
});

//setting the local storage 
function setLS(key,value){
    window.localStorage.setItem(key, JSON.stringify(value));

}

//changing the HTML values 
function getLS(key){
    let value= window.localStorage.getItem(key);
    let setString= JSON.parse(value);
    return setString;

}


//not parsing through the values correctly