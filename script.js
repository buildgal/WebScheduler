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
console.log(eleven);

let twelve=$("#3");
let one=$("#4");
let two=$("#5");

let three=$("#6");
let four=$("#7");
let five=$("#8");

//getting all the keys

let inputHr9=9;
let inputHr10=10;
let inputHr11=11;
let inputHr12=12;
let inputHr1=1;
let inputHr2=2;
let inputHr3=3;
let inputHr4=4;
let inputHr5=5;
 
window.localStorage;

nineBtns.on("click", function() { 
    setLS(inputHr9,nine);
    getLS(inputHr9);
    
});

tenBtn.on("click", function() { 
    setLS(inputHr10,ten);
    getLS(inputHr10);
    
});

elevenBtn.on("click", function() { 
    setLS(inputHr11, eleven);
    getLS(inputHr11);
    
});


twelveBtn.on("click", function() { 
    setLS(inputHr12,tweleve);
    getLS(inputHr12);
    
});

oneBtn.on("click", function() { 
    setLS(inputHr1,one);
    getLS(inputHr1);
    
});

twoBtn.on("click", function() { 
    setLS(inputHr2, two);
    getLS(inputHr2);
    
});


threeBtn.on("click", function() { 
    setLS(inputHr3, three);
    getLS(inputHr3);
    
});

fourBtn.on("click", function() { 
    setLS(inputHr4,four);
    getLS(inputHr4);
    
});

fiveBtn.on("click", function() { 
    setLS(inputHr5, five);
    getLS(inputHr5);
    
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

function storetoLS(key,value){
    let valLS=getLS(key);
    console.log(valsLS)
}

//not parsing through the values correctly