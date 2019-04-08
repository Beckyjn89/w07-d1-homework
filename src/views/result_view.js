const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('prime-checked', (event) =>{
    const isItPrime = event.detail;
    this.displayResult(isItPrime)
  })
};

ResultView.prototype.displayResult = function (isItPrime){
  const resultText = document.querySelector('#result');
  if (isItPrime === false) {
    resultText.textContent = `This number is not prime.`
  } else {
    resultText.textContent = `This number is prime.`
  };
};
module.exports = ResultView;
