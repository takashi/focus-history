'use strict';

var script = document.createElement('script');
script.innerHTML = "var alert = '<div style=position:fixed;bottom:0px;left:0px;>Focusing via focus history</div>';"

script.innerHTML += "$.hashChange(hideNoise);"

script.innerHTML +=  "function hideNoise() {"
script.innerHTML +=  "var referrer = document.referrer;"
script.innerHTML +=  "var isLocationValid = !!(location.href.indexOf('commit') !== -1);"
script.innerHTML +=  "var isReferrerValid = !!(!!referrer && referrer.indexOf('github.com') !== -1);"
script.innerHTML +=  "var files = document.querySelectorAll('.file');"
script.innerHTML +=  "if(isLocationValid && files.length != 0 && isReferrerValid) {"
script.innerHTML +=  "var filePath;"
script.innerHTML +=  "for(var i = 0, file; file = files[i]; i++){"
script.innerHTML +=  "var path = file.querySelector('div[data-path]');"
script.innerHTML +=  "filePath = path.getAttribute('data-path');"
script.innerHTML +=  "if(referrer.indexOf(filePath) === -1){"
script.innerHTML +=  "file.setAttribute('style', 'display:none;');"
script.innerHTML +=  "}"
script.innerHTML +=  "}"
script.innerHTML +=  "document.body.innerHTML += alert;"
script.innerHTML +=  "}"
script.innerHTML +=  "}"

console.log(script);
document.body.appendChild(script);
