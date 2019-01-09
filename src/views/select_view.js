const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:all-data-loaded', (event) => {
    this.populate(event.detail);
  });
};

SelectView.prototype.populate = function(countries){
  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = country.name;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
