const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                
                const d = new Date();
                let da = weekday[d.getDay()];
                document.getElementById("demo").innerHTML = da;
//new line
              let currentTime = document.getElementById("utc")
let currentMsTime = Math.floor((new Date().getTime()/1000))
currentTime.textContent = currentMsTime 
console.log(currentTime)