const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondeEl = document.getElementById("secondes")
const ampmEl = document.getElementById("ampm")

function startClock() {
 let h = new Date().getHours();         
 let m = new Date().getMinutes(); 
 let s = new Date().getSeconds();
 let ampm = "AM"
 
 
 if (h > 12) {
  h = h - 12;
  ampm= "PM"
}

hourEl.innerText = h;
minuteEl.innerText = m;
secondeEl.innerText = s;
ampmEl.innerText = ampm;


}

setInterval(startClock, 1000);




