// console.log(window.location);

// document.getElementById('btn').addEventListener('click', () => {
//   window.location.reload();
//   window.location =
//     'https://dilanka-personal-portfolio-ld66bhymj-it21172878.vercel.app/';
//   window.location = '../';
// });

// document.getElementById('section1').addEventListener('click', () => {
//   document.getElementById('Section1').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section2').addEventListener('click', () => {
//   document.getElementById('Section2').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section3').addEventListener('click', () => {
//   document.getElementById('Section3').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section4').addEventListener('click', () => {
//   document.getElementById('Section4').scrollIntoView({ behavior: 'smooth' });
// });
// document.getElementById('section5').addEventListener('click', () => {
//   document.getElementById('Section5').scrollIntoView({ behavior: 'smooth' });
// });
let count = window.scrollIntoView;
console.log(count);
scrollSmoothSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
});
window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    document.getElementById('header').style.backgroundColor = 'white';
    document.getElementById('btt').style.display = 'flex';
  } else {
    document.getElementById('header').style.backgroundColor = '#8d5c00';
    document.getElementById('btt').style.display = 'none';
  }
});

document.getElementById('btt').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
