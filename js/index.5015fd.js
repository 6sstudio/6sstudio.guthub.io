(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="ufbnA7t/tuvejp";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),s=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),i=location.href.replace(/#[^#]+$/,"");o.add(i);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(s){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var i=new XMLHttpRequest;i.open("GET",t,i.withCredentials=!0),i.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-black-266.png':'images/6s-logo-black-133.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/6s-logo-356.png':'images/6s-logo-178.png');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/6s-logo-white-516.png':'images/6s-logo-white-258.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-white-124-1.png':'images/6s-logo-white-62-1.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/6s-logo-black-230.png':'images/6s-logo-black-115.png');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-black-214.png':'images/6s-logo-black-107.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/6s-logo-284.png':'images/6s-logo-142.png');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/6s-logo-white-412.png':'images/6s-logo-white-206.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-white-98.png':'images/6s-logo-white-49.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/6s-logo-black-184.png':'images/6s-logo-black-92.png');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-black-172.png':'images/6s-logo-black-86.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/6s-logo-230.png':'images/6s-logo-115.png');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/6s-logo-white-332.png':'images/6s-logo-white-166.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-white-78.png':'images/6s-logo-white-39.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/6s-logo-black-148.png':'images/6s-logo-black-74.png');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-black-246.png':'images/6s-logo-black-123.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/6s-logo-256.png':'images/6s-logo-128.png');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/6s-logo-white-494.png':'images/6s-logo-white-247.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-white-186.png':'images/6s-logo-white-93.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/6s-logo-black-90.png':'images/6s-logo-black-45.png');}else{var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-black-164.png':'images/6s-logo-black-82.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/6s-logo-170.png':'images/6s-logo-85.png');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/6s-logo-white-330.png':'images/6s-logo-white-165.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/6s-logo-white-124.png':'images/6s-logo-white-62.png');
var e=document.querySelector('.js4');e.setAttribute('src',(dpi>1)?'images/6s-logo-black-60.png':'images/6s-logo-black-30.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
ldsrc('.js5');ldsrcset('.js26 source');ldsrc('.js3');ldsrcset('.js27 source');
});