const PubSub = require('../helpers/pub_sub.js')

const CountryInfoView = function(container){
  this.container = container;
};

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:country-found', (event) => {
    this.render(event.detail);
  });
}

CountryInfoView.prototype.render = function(country){
  this.container.innerHTML = '';

  const countryName = document.createElement('h3');
  countryName.textContent = country.name;
  this.container.appendChild(countryName);

  const countryRegion = document.createElement('p');
  countryRegion.textContent = country.region;
  this.container.appendChild(countryRegion);

  const countryFlag = document.createElement('img');
  countryFlag.classList.add('flag-image');
  countryFlag.src = country.flag;
  this.container.appendChild(countryFlag);
}

module.exports = CountryInfoView;
