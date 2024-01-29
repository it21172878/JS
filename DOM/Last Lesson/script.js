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

// create search method
document.getElementById('search').addEventListener('keyup', () => {
  let val = document.getElementById('search').value;

  filteredStudents = students.filter((student) => {
    return student.name.includes(val);
  });
  pagePagination(currentPage);
});

let noOfPages = Math.ceil(students.length / 8);
let currentPage = 1;

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < noOfPages) {
    currentPage++;
    pagePagination(currentPage);
  }
});
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    pagePagination(currentPage);
  }
});

// initial call to function
pagePagination(currentPage);

function pagePagination(pageNumber) {
  let startIndex = (pageNumber - 1) * 8; // Showing 8 items per page.
  let endIndex = startIndex + 8;
  let paginated = filteredStudents.slice(startIndex, endIndex);

  document.getElementById('tbody').innerHTML = '';

  for (let i = 0; i < paginated.length; i++) {
    let row = document.createElement('tr');
    let noTd = document.createElement('td');
    noTd.innerText = startIndex + i + 1;

    let nameTd = document.createElement('td');
    nameTd.innerText = paginated[i].name;

    let cityTd = document.createElement('td');
    cityTd.innerText = paginated[i].city;

    let ageTd = document.createElement('td');
    ageTd.innerText = paginated[i].age;

    let totTd = document.createElement('td');
    totTd.innerText = paginated[i].totalMarks;

    row.append(noTd, nameTd, cityTd, ageTd, totTd);

    document.getElementById('tbody').appendChild(row);
  }
}
