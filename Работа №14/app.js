// ========== Home ==========
const cat_result = document.querySelector('#cat_result');
const dog_result = document.querySelector('#dog_result');
const cat_btn = document.querySelector('#cat_btn');
const dog_btn = document.querySelector('#dog_btn');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
      cat_result.innerHTML = `<img class="home-img" src="${data.file}" alt="">`;
    })
    .catch(console.log('fuck'));
}
function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      dog_result.innerHTML = `<img class="home-img" src="${data.message}" alt="">`;
    })
    .catch(err);
}

const select = document.querySelectorAll('.currency');
const number = document.getElementById('number');
const output = document.getElementById('output');
fetch('https://api.frankfurter.app/currencies')
  .then(data => data.json())
  .then(data => {
    display(data);
  });
function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
  }
}
function updatevalue() {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = number.value;
  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert('Выберите отличающиеся валюты');
  }
}
function convert(currency1, currency2, value) {
  const host = 'api.frankfurter.app';
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then(val => val.json())
    .then(val => {
      console.log(Object.values(val.rates)[0]);
      output.value = Object.values(val.rates)[0];
    });
}
