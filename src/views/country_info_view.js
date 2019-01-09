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

  const countryName = this.addElement('h2', `Country: ${country.name}`);
  this.container.appendChild(countryName);

  const countryRegion = this.addElement('p', `Region: ${country.region}`);
  this.container.appendChild(countryRegion);

  const languageListHeading = this.addElement('p', `In ${country.name}, the following languages are spoken:`);
  this.container.appendChild(languageListHeading);

  const countryLanguages = document.createElement('ul');
  country.languages.forEach((language) => {
    const listItem = this.addElement('li', language.name);
    countryLanguages.appendChild(listItem);
  });
  this.container.appendChild(countryLanguages);

  const imageLink = country.flag;
  document.body.style.backgroundImage = `url(${imageLink})`
  const countryFlag = document.createElement('img');
  countryFlag.classList.add('flag-image');
  countryFlag.src = imageLink;

}

CountryInfoView.prototype.addElement = function(type, text){
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

module.exports = CountryInfoView;
