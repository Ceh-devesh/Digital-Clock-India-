

setInterval(() => {
    

console.log(h,m,s);
const hEl = document.getElementById('hours');
const mEl = document.getElementById('mins');
const sEl = document.getElementById('secs');
const ampmEl = document.getElementById('ampm');






var time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();
var am = time.getSeconds();
ampmEl.innerText = h > 12 ? 'PM' : 'AM'

// convert 24hr format to 12 hr format
h = h > 12 ? h % 12 : h;
// add 0(zero in the begening if hr is single digit)
h = h < 10 ? '0' + h : h;
m = m < 10 ? '0' + m : m;
s = s < 10 ? '0' + s : s;

hEl.innerText = h;
mEl.innerText = m;
sEl.innerText = s;
}, 1000);