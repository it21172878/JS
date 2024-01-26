let mL = 100;

setInterval(() => {
  document.getElementById('carousel').style.transition = '1s';
  document.getElementById('carousel').style.marginLeft = -mL + '%';
  mL += 100;

  if (mL > 400) {
    setTimeout(() => {
      document.getElementById('carousel').style.transition = '0s';
      document.getElementById('carousel').style.marginLeft = '0%';
      mL = 100;
    }, 1000);
  }
}, 3000);
