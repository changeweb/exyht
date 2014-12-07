window.Exyht = Ember.Application.create({
    currentPath: '',
});

Exyht.deferReadiness();

Exyht.BaseURL = '/blog/';
Exyht.currentBaseUri = window.location.protocol+"//"+window.location.hostname+Exyht.BaseURL;
Exyht.gravatarVersion = 'identicon';

function addCss(cssString) {
  try{
    var head = document.getElementsByTagName('head')[0];

    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
  } catch(err) { return; }
} 
		
var currentDate = new Date();
Exyht.currentYear = currentDate.getFullYear();

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});