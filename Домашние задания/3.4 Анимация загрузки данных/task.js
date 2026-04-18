const loader = document.getElementById('loader');
const items = document.getElementById('items');

//Получаем данные о валютах
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  xhr.responseType = 'json';

  xhr.onload = function () {
    renderCurrencies(xhr.response.response.Valute);
    hideLoader();
  };

  xhr.send();
}

// Делаем HTML элемент для представления валюты на странице
function createCurrencyItem(currency) {
  const item = document.createElement('div');
  item.classList.add('item');

  const itemCode = document.createElement('div');
  itemCode.classList.add('item__code');
  itemCode.textContent = currency.CharCode;

  const itemValue = document.createElement('div');
  itemValue.classList.add('item__value');
  itemValue.textContent = currency.Value;

  const itemCurrency = document.createElement('div');
  itemCurrency.classList.add('item__currency');
  itemCurrency.textContent = 'руб.';

  item.append(itemCode);
  item.append(itemValue);
  item.append(itemCurrency);

  return item;
}

// Чистим контейнер и применяем прошлую функцию для всех валют что мы получили
function renderCurrencies(valuteObject) {
  items.innerHTML = '';
  const currencyValues = Object.values(valuteObject);

  for (let i = 0; i < currencyValues.length; i++) {
    const currency = currencyValues[i];
    const item = createCurrencyItem(currency);
    items.append(item);
  }
}

// Скрываем загрузку
function hideLoader() {
  loader.classList.remove('loader_active');
}

// Показываем загрузку
function showLoader() {
  loader.classList.add('loader_active');
}

// Инициализируем
function init() {
  showLoader();
  getData();
}

init();