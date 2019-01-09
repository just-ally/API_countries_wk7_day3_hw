const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:country-selected', (event) => {
    const index = event.detail;
    const foundCountry = this.findCountry(index);
    PubSub.publish('Countries:country-found', foundCountry);
  });
}

Countries.prototype.findCountry = function(index){
  return this.countries[index];
}

Countries.prototype.getData = function(){
  // Make request to API and publish data from in here.
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200){
      return;
    }
    const jsonString = xhr.responseText;
    // console.log('Response Text:', xhr.responseText);
    this.countries = JSON.parse(jsonString);
    // console.log('json String:', this.countries);
    PubSub.publish('Countries:all-data-loaded', this.countries);
  });

  xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
}

module.exports = Countries;
