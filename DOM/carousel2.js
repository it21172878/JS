let currentSlide = 1;

goToSlide = (slideNumber) => {
  document.getElementById('carousel').style.transition = '1s';
  document.getElementById('carousel').style.marginLeft =
    -slideNumber * 100 + '%';
};

document.getElementById('next').addEventListener('click', () => {
  currentSlide++;
  console.log(currentSlide);
  goToSlide(currentSlide);

  if (currentSlide > 4) {
    setTimeout(() => {
      document.getElementById('carousel').style.transition = '0s';
      document.getElementById('carousel').style.marginLeft = '-100%';
      currentSlide = 1;
    }, 1000);
  }
});

document.getElementById('previous').addEventListener('click', () => {
  currentSlide--;
  console.log(currentSlide);
  goToSlide(currentSlide);

  if (currentSlide === 0) {
    setTimeout(() => {
      document.getElementById('carousel').style.transition = '0s';
      document.getElementById('carousel').style.marginLeft = '-400%';
      currentSlide = 4;
    }, 1000);
  }
});

// let mL = 100;

setInterval(() => {
  // document.getElementById('carousel').style.transition = '1s';
  // document.getElementById('carousel').style.marginLeft = -mL + '%';
  // mL += 100;
  currentSlide++;
  goToSlide(currentSlide);

  if (currentSlide > 4) {
    setTimeout(() => {
      document.getElementById('carousel').style.transition = '0s';
      document.getElementById('carousel').style.marginLeft = '-100%';
      currentSlide = 1;
    }, 1000);
  }
}, 3000);
