var Reservanto=Reservanto||{};Reservanto.ServerConfig=Reservanto.ServerConfig||{};Reservanto.ServerConfig.cs={baseUrl:"https://booking.reservanto.cz",stylesheet:"https://booking.reservanto.cz/Content/reservanto-style.min.css",personification:"https://booking.reservanto.cz/Personification/Index",iframe:"https://booking.reservanto.cz/form/",modal:"https://booking.reservanto.cz/Modal/",payment:"https://payments.reservanto.cz/Pay/{0}",xd:"https://booking.reservanto.cz/Scripts/xd.message.js",isMobile:!1,manageBookingUrl:"https://managebooking.reservanto.cz"};Reservanto.Config=Reservanto.Config||Reservanto.ServerConfig.cs;Reservanto.IframeWidget=function(n){function h(){c();f();y();l()}function c(){var r=window.location.hash.replace("#",""),n;return r==""?!1:(n=i.decode(r),n=="")?!1:n.indexOf("open=")!=0?!1:(t=n.substr(5),window.location.hash="_",!0)}function l(){var t=e("reservanto-iframe"),i,r;t.length!==0&&(i=t[0],r=n.getElementById("reservanto-personification-frame"),r==null&&(personframe=n.createElement("iframe"),personframe.id="reservanto-personification-frame",personframe.src=Reservanto.Config.personification+"?url="+encodeURIComponent(window.location.href)+"&id="+u,personframe.style.cssText="width:0;height:0;border:0;display:none;",i.appendChild(personframe)))}function a(n){var i,e,u;if(typeof n=="string")if(n.substring(0,4)=="Tab:"){var f=window.location.href,t=n.substring(4).split(/;(.+)?/,2),r=Reservanto.Config.payment.replace("{0}",t[0])+"?culture={culture}&p1={returnUrl}";t.length>1&&(t=t[1].split(/;(.+)?/,2),r=r.replace("{culture}",t[0]),t.length>1&&(f=t[1]));r=r.replace("{returnUrl}",encodeURIComponent(f));window.location=r}else n.substring(0,6)==="Event:"&&(i=n.indexOf(";"),i<0&&(i=n.length),i>6&&(e=n.substring(6,i),u=n.length>i?n.substring(i+1,n.length):null,u&&(u=JSON.parse(u)),v(e,u)))}function v(t,i){if(!(typeof window.CustomEvent=="function")){function r(t,i){i=i||{bubbles:!1,cancelable:!1,detail:null};var r=n.createEvent("CustomEvent");return r.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),r}r.prototype=window.Event.prototype;window.CustomEvent=r}var u="Reservanto"+t,f=new window.CustomEvent(u,{detail:i});n.dispatchEvent?n.dispatchEvent(f):n.fireEvent?n.fireEvent(element.fireEvent("on"+u,f)):logMessage("WARNING: Cannot triggerEvent")}function y(){if(!n.getElementById("reservanto-xd")){var i=new Date,t=n.createElement("script");t.id="reservanto-xd";t.type="text/javascript";t.src=Reservanto.Config.xd+"?t="+i.getTime();t.onload=function(){XD.receiveMessage(function(n){Reservanto.IframeWidget.catchMessage(n.data)},Reservanto.Config.baseUrl);XD.receiveMessage(function(n){Reservanto.IframeWidget.catchMessage(n.data)},Reservanto.Config.manageBookingUrl)};n.getElementsByTagName("head")[0].appendChild(t)}}function f(){for(var n,r,u,i=e("reservanto-iframe"),t=0;t<i.length;t++)if(n=i[t],n.className.indexOf("reservanto-iframe")!=-1){while(n.lastChild)n.removeChild(n.lastChild);r=p(n);u=w(r);n.appendChild(u)}}function p(n){for(var t,r,u={},f=n.attributes,i=0;i<f.length;i++)(t=f[i],t.name.indexOf("data-")===0)&&t.name.indexOf("data-color")!==0&&t.name!=="data-text"&&(r=t.name.replace("data-",""),u[s[r.toLowerCase()]||r]=t.value);return u}function w(t,i,u){var f,e;return i=i||"100%",u=u||"100%",f=n.createElement("iframe"),f.border=0,f.frameBorder=0,f.frameSpacing=0,e=k(t),f.src=e,f.style.cssText="width:"+i+";height:"+u+";border:0",g(f,"load",r),f}function b(){var r={},n=(window.location.search.split("?")[1]||"").split("&"),t,i;for(t in n)n.hasOwnProperty(t)&&(i=n[t].split("="),r[i[0]]=decodeURIComponent(i[1]||""));return r}function k(n){var f,r,e,i;n=n||{};f=b();for(r in f)f.hasOwnProperty(r)&&r.indexOf("utm_")===0&&(n[r]=f[r]);e=Reservanto.Config.iframe+"?id="+n.id;u=n.id;for(i in n)n.hasOwnProperty(i)&&i!=="id"&&n[i]&&(e+="&"+i+"="+n[i]);return t&&(e=t,t=null),e+("#"+encodeURIComponent(window.location.href))}function e(t,i){try{return i?o(i.getElementsByClassName(t)):o(n.getElementsByClassName(t))}catch(r){return d(t,i)}}function o(n){if(!n)return[];if("toArray"in Object(n))return n.toArray();for(var t=n.length||0,i=new Array(t);t--;)i[t]=n[t];return i}function d(t,i){var r,e;i||(i=n.getElementsByTagName("body")[0]);i||(i=n);var f=[],o=new RegExp("(^| )"+t+"( |$)"),u=i.getElementsByTagName("*");for(r=0,e=u.length;r<e;r++)o.test(u[r].className)&&f.push(u[r]);return f}function g(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent?(n["e"+t+i]=i,n[t+i]=function(){n["e"+t+i](window.event)},n.attachEvent("on"+t,n[t+i])):n["on"+t]=n["e"+t+i]}var t=null,r=function(){},u=0,s={id:"id",segment:"seg",resourceid:"rId",resourceids:"rIds",serviceid:"sId",allowedserviceids:"sIds",locationids:"lIds",appointmentid:"appId",culture:"culture",locationid:"lId",courseid:"cId"},i={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(n){var e="",o,t,r,h,c,s,u,f=0;for(n=i._utf8_encode(n);f<n.length;)o=n.charCodeAt(f++),t=n.charCodeAt(f++),r=n.charCodeAt(f++),h=o>>2,c=(o&3)<<4|t>>4,s=(t&15)<<2|r>>6,u=r&63,isNaN(t)?s=u=64:isNaN(r)&&(u=64),e=e+this._keyStr.charAt(h)+this._keyStr.charAt(c)+this._keyStr.charAt(s)+this._keyStr.charAt(u);return e},decode:function(n){var t="",o,s,h,c,f,u,e,r=0;for(n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");r<n.length;)c=this._keyStr.indexOf(n.charAt(r++)),f=this._keyStr.indexOf(n.charAt(r++)),u=this._keyStr.indexOf(n.charAt(r++)),e=this._keyStr.indexOf(n.charAt(r++)),o=c<<2|f>>4,s=(f&15)<<4|u>>2,h=(u&3)<<6|e,t=t+String.fromCharCode(o),u!=64&&(t=t+String.fromCharCode(s)),e!=64&&(t=t+String.fromCharCode(h));return i._utf8_decode(t)},_utf8_encode:function(n){var i,r,t;for(n=n.replace(/\r\n/g,"\n"),i="",r=0;r<n.length;r++)t=n.charCodeAt(r),t<128?i+=String.fromCharCode(t):t>127&&t<2048?(i+=String.fromCharCode(t>>6|192),i+=String.fromCharCode(t&63|128)):(i+=String.fromCharCode(t>>12|224),i+=String.fromCharCode(t>>6&63|128),i+=String.fromCharCode(t&63|128));return i},_utf8_decode:function(n){for(var r="",t=0,i=c1=c2=0;t<n.length;)i=n.charCodeAt(t),i<128?(r+=String.fromCharCode(i),t++):i>191&&i<224?(c2=n.charCodeAt(t+1),r+=String.fromCharCode((i&31)<<6|c2&63),t+=2):(c2=n.charCodeAt(t+1),c3=n.charCodeAt(t+2),r+=String.fromCharCode((i&15)<<12|(c2&63)<<6|c3&63),t+=3);return r}};return{catchMessage:a,refreshIframes:f,init:h,setOnLoad:function(n){r=function(){n()}}}}(document);window.addEventListener?window.addEventListener("load",Reservanto.IframeWidget.init,!1):window.attachEvent&&window.attachEvent("onload",Reservanto.IframeWidget.init);