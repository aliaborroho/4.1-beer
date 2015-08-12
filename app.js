(function() {
  var beersEl = document.querySelector('.beers-main');
  var templateString = document.querySelector('#beers-template').innerHTML;
  var t = Handlebars.compile(templateString);

  var result = beerData.data.reduce(function(previous, beers) {
    return previous + t(beers);
  }, '');

  beersEl.innerHTML = result;

  var gridButtonEl = document.querySelector('.fa-th');
  var listButtonEl = document.querySelector('.fa-list-ul');

  listButtonEl.onclick = function() {
    beersEl.classList.remove('grid');
    beersEl.classList.add('list');
  };

  gridButtonEl.onclick = function() {
    beersEl.classList.remove('list');
    beersEl.classList.add('grid');
  };

})();
