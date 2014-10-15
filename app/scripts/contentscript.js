'use strict';

var referrer = document.referrer || '';
var isLocationValid = !!(location.href.indexOf('commit') !== -1)
var isReferrerValid = !!(!!referrer && referrer.indexOf('github.com') !== -1)
var files = document.querySelectorAll('.file');
var alert = '<div style="position:fixed;bottom:0px;left:0px;">Focusing via focus history</div>'

if(isLocationValid && files.length != 0 && isReferrerValid) {
  var filePath;
  for(var i = 0, file; file = files[i]; i++){
    var path = file.querySelector('div[data-path]');
    filePath = path.getAttribute('data-path');
    if(referrer.indexOf(filePath) === -1){
      file.setAttribute('style', 'display:none;');
    }
  }
  document.body.innerHTML += alert;
}
