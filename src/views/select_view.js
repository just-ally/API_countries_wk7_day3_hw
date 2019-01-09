const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:all-data-loaded', (event) => {
    this.populate(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    // console.log('Index of selected country:', selectedIndex);
    PubSub.publish('SelectView:country-selected', selectedIndex);
  })
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
