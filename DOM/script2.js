let time = 1;
document.getElementById('startTime').addEventListener('click', () => {
  time = setTimeout(() => {
    console.log('Dilanka');
  }, 5000);
});

document.getElementById('stopTime').addEventListener('click', () => {
  clearTimeout(time);
});

let timer = 0;
let t = setInterval(() => {
  if (timer === 5) {
    clearInterval(t);
  } else {
    console.log('DP.Liyanagama');
    timer++;
  }
}, 1000);
