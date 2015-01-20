window.Exyht = Ember.Application.create({
    currentPath: '',
    BaseURL: '/blog/',
    gravatarVersion: 'identicon'
});

Exyht.deferReadiness();
var hostnameWithProtocolPort = window.location.protocol+"//"+window.location.hostname+(window.location.port ? ':' + window.location.port: '');
Exyht.currentBaseUri = hostnameWithProtocolPort+Exyht.BaseURL;

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