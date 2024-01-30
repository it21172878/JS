let students = [
  { name: 'Bhimrao', city: 'Hubli', age: 25, totalMarks: 345 },
  { name: 'Ganesh', city: 'Hyderabad', age: 22, totalMarks: 200 },
  { name: 'Aqib', city: 'Baramulla', age: 21, totalMarks: 300 },
  { name: 'Navin', city: 'London', age: 27, totalMarks: 289 },
  { name: 'Shiva', city: 'Andhra Pradesh', age: 19, totalMarks: 350 },
  { name: 'Utpal', city: 'Ahemadabad', age: 22, totalMarks: 278 },
  { name: 'Nanda', city: 'Vizag', age: 28, totalMarks: 345 },
  { name: 'Justin', city: 'Hubli', age: 25, totalMarks: 345 },
  { name: 'Dale', city: 'Hyderabad', age: 22, totalMarks: 200 },
  { name: 'Shane', city: 'Baramulla', age: 21, totalMarks: 300 },
  { name: 'Abraham', city: 'London', age: 27, totalMarks: 289 },
  { name: 'Shahrukh', city: 'Andhra Pradesh', age: 19, totalMarks: 350 },
  { name: 'Hritik', city: 'Ahemadabad', age: 22, totalMarks: 278 },
  { name: 'Saif', city: 'Vizag', age: 28, totalMarks: 345 },
  { name: 'Thor', city: 'Hubli', age: 25, totalMarks: 345 },
  { name: 'Ironman', city: 'Hyderabad', age: 22, totalMarks: 200 },
  { name: 'Captain America', city: 'London', age: 27, totalMarks: 289 },
  { name: 'Hawkeye', city: 'Andhra Pradesh', age: 19, totalMarks: 350 },
  { name: 'Hulk', city: 'Ahemadabad', age: 22, totalMarks: 278 },
  { name: 'Black Widow', city: 'Vizag', age: 28, totalMarks: 345 },
  { name: 'Subhashini', city: 'Vizag', age: 28, totalMarks: 345 },
  { name: 'Shane', city: 'Melbourne', age: 21, totalMarks: 300 },
  { name: 'Abraham', city: 'Pretoria', age: 27, totalMarks: 289 },
  { name: 'Subhashini', city: 'Vizag', age: 28, totalMarks: 345 },
  { name: 'Shane', city: 'Melbourne', age: 21, totalMarks: 300 },
  { name: 'Abraham', city: 'Pretoria', age: 27, totalMarks: 289 },
];

let filteredStudents = students;
// Task 1-fetch data in html
// Task 2-create for loop for fetch data in html
// Task 3-create pagination using array slice method
// Task 4-create a function for pagination
// Task 5-create a next button pagination
// Task 6-create a previous button pagination
// Task 7-create search method
// Task 8-create pagination buttons

document.getElementById('search').addEventListener('keyup', () => {
  const value = document.getElementById('search').value;
  console.log(value);
  filteredStudents = students.filter((student) => {
    return student.name.includes(value);
  });
  console.log(filteredStudents);
  paginated(pageNumber);
});
document.getElementById('next').addEventListener('click', () => {
  if (noOfPage > pageNumber) {
    pageNumber++;
    paginated(pageNumber);
  }
});
document.getElementById('prev').addEventListener('click', () => {
  if (pageNumber > 1) {
    pageNumber--;
    paginated(pageNumber);
  }
});

let pageNumber = 1; // current page number
let noOfPage = students.length / 8; // total pages
noOfPage = Math.ceil(noOfPage); // round up to nearest whole number
console.log('Total Pages : ', noOfPage);

for (let i = 1; i <= noOfPage; i++) {
  let numButtons = document.createElement('button');
  numButtons.innerText = i;
  document.getElementById('numBtns').appendChild(numButtons);
  numButtons.addEventListener('click', () => {
    pageNumber = i;
    paginated(pageNumber);
  });
}

paginated(pageNumber);

function paginated(pgNumber) {
  let startIndex = (pgNumber - 1) * 8;
  let endIndex = startIndex + 8;
  let pagination = filteredStudents.slice(startIndex, endIndex);

  document.getElementById('tbody').innerHTML = '';
  document.getElementById('pages').innerHTML = pageNumber + ' of ' + noOfPage;

  for (let i = 0; i < pagination.length; i++) {
    let row = document.createElement('tr');

    let noTd = document.createElement('td');
    noTd.innerHTML = startIndex + i + 1;

    let nameTd = document.createElement('td');
    nameTd.innerHTML = pagination[i].name;

    let cityTd = document.createElement('td');
    cityTd.innerHTML = pagination[i].city;

    let ageTd = document.createElement('td');
    ageTd.innerHTML = pagination[i].age;

    let totalMarksTd = document.createElement('td');
    totalMarksTd.innerHTML = pagination[i].totalMarks;

    row.append(noTd, nameTd, cityTd, ageTd, totalMarksTd);
    document.getElementById('tbody').appendChild(row);
  }
}
