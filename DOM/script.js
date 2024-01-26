const productsList = [
  {
    name: 'Apple iphone 15',
    price: 750000,
  },
  {
    name: 'Samsung S24 Ultra Pro Max',
    price: 300000,
  },
  {
    name: 'Vivo Y12',
    price: 59000,
  },
];

for (i = 0; i < productsList.length; i++) {
  let divTag = document.createElement('div');
  divTag.classList.add('product');

  let pName = document.createElement('h3');
  pName.innerText = productsList[i].name;

  let pPrice = document.createElement('h5');
  pPrice.innerText = productsList[i].price;

  divTag.appendChild(pName);
  divTag.appendChild(pPrice);

  console.log(divTag);
  document.getElementById('products').appendChild(divTag);
}
