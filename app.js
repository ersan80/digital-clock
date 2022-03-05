let clock = document.querySelector("#clock");
let dayDate = document.querySelector(".day")


function digitalClock() {

     let now = new Date();
    
     let hour = now.getHours();
     let minutes = now.getMinutes();
     let seconds = now.getSeconds();
     clock.innerHTML = hour + ":" + ((minutes<10)? "0"+minutes : minutes) + ":" + ((seconds<10)? '0'+seconds: seconds) 
     




    
}

digitalClock()
setInterval(digitalClock,1000)


 
function day (){
let noww = new Date();
   let day = noww.getDay(); 

   if(day === 0){
       dayDate.innerHTML = "Sunday";
   }
   if(day === 1){
    dayDate.innerHTML = "Monday";
}
if(day === 2){
    dayDate.innerHTML = "Tuesday";
}
if(day === 3){
    dayDate.innerHTML = "Wednesday";
}
if(day === 4){
    dayDate.innerHTML = "Thursday";
}
if(day === 5){
    dayDate.innerHTML = "Friday";
}
if(day === 6){
    dayDate.innerHTML = "Saturday";
}


}

day();

setInterval(day,1000)



