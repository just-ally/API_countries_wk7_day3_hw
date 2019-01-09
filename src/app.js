const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryInfoView = require('./views/country_info_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const container = document.querySelector('#country');
  const countryInfoView = new CountryInfoView(container);
  countryInfoView.bindEvents();

  const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const countries = new Countries();
  countries.bindEvents();
  countries.getData();
});
