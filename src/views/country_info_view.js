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

  const countryName = document.createElement('h2');
  countryName.textContent = country.name;

  this.container.appendChild(countryName);
}

module.exports = CountryInfoView;
