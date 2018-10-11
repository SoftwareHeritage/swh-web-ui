!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vault=e():(t.swh=t.swh||{},t.swh.vault=e())}(window,function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/",o(o.s=241)}({1:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},10:function(t,e,n){var h=n(1),g=n(3),y=n(21),m=n(9),b=n(17),_="prototype",w=function(t,e,n){var r,o,i,c=t&w.F,a=t&w.G,u=t&w.S,s=t&w.P,f=t&w.B,l=t&w.W,d=a?g:g[e]||(g[e]={}),v=d[_],p=a?h:u?h[e]:(h[e]||{})[_];for(r in a&&(n=e),n)(o=!c&&p&&void 0!==p[r])&&b(d,r)||(i=o?p[r]:n[r],d[r]=a&&"function"!=typeof p[r]?n[r]:f&&o?y(i,h):l&&p[r]==i?function(r){var t=function(t,e,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,e)}return new r(t,e,n)}return r.apply(this,arguments)};return t[_]=r[_],t}(i):s&&"function"==typeof i?y(Function.call,i):i,s&&((d.virtual||(d.virtual={}))[r]=i,t&w.R&&v&&!v[r]&&m(v,r,i)))};w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128,t.exports=w},104:function(t,e,n){t.exports=n(113)},11:function(t,e,n){t.exports=!n(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},113:function(t,e,n){n(114),n(93),n(78),n(115),n(126),n(127),t.exports=n(3).Promise},114:function(t,e){},115:function(t,e,n){"use strict";var r,o,i,c,a=n(33),u=n(1),s=n(21),f=n(53),l=n(10),d=n(13),v=n(22),p=n(116),h=n(117),g=n(67),y=n(68).set,m=n(121)(),b=n(49),_=n(69),w=n(122),x=n(70),j="Promise",k=u.TypeError,S=u.process,O=S&&S.versions,T=O&&O.v8||"",$=u[j],P="process"==f(S),L=function(){},M=o=b.f,A=!!function(){try{var t=$.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(L,L)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==T.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},E=function(f,n){if(!f._n){f._n=!0;var r=f._c;m(function(){for(var u=f._v,s=1==f._s,t=0,e=function(t){var e,n,r,o=s?t.ok:t.fail,i=t.resolve,c=t.reject,a=t.domain;try{o?(s||(2==f._h&&N(f),f._h=1),!0===o?e=u:(a&&a.enter(),e=o(u),a&&(a.exit(),r=!0)),e===t.promise?c(k("Promise-chain cycle")):(n=C(e))?n.call(e,i,c):i(e)):c(u)}catch(t){a&&!r&&a.exit(),c(t)}};r.length>t;)e(r[t++]);f._c=[],f._n=!1,n&&!f._h&&I(f)})}},I=function(i){y.call(u,function(){var t,e,n,r=i._v,o=R(i);if(o&&(t=_(function(){P?S.emit("unhandledRejection",r,i):(e=u.onunhandledrejection)?e({promise:i,reason:r}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",r)}),i._h=P||R(i)?2:1),i._a=void 0,o&&t.e)throw t.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},N=function(e){y.call(u,function(){var t;P?S.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},U=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),E(e,!0))},F=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw k("Promise can't be resolved itself");(n=C(t))?m(function(){var e={_w:r,_d:!1};try{n.call(t,s(F,e,1),s(U,e,1))}catch(t){U.call(e,t)}}):(r._v=t,r._s=1,E(r,!1))}catch(t){U.call({_w:r,_d:!1},t)}}};A||($=function(t){p(this,$,j,"_h"),v(t),r.call(this);try{t(s(F,this,1),s(U,this,1))}catch(t){U.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(123)($.prototype,{then:function(t,e){var n=M(g(this,$));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&E(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(F,t,1),this.reject=s(U,t,1)},b.f=M=function(t){return t===$||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!A,{Promise:$}),n(34)($,j),n(124)(j),c=n(3)[j],l(l.S+l.F*!A,j,{reject:function(t){var e=M(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(a||!A),j,{resolve:function(t){return x(a&&this===c?$:this,t)}}),l(l.S+l.F*!(A&&n(125)(function(t){$.all(t).catch(L)})),j,{all:function(t){var c=this,e=M(c),a=e.resolve,u=e.reject,n=_(function(){var r=[],o=0,i=1;h(t,!1,function(t){var e=o++,n=!1;r.push(void 0),i++,c.resolve(t).then(function(t){n||(n=!0,r[e]=t,--i||a(r))},u)}),--i||a(r)});return n.e&&u(n.v),e.promise},race:function(t){var e=this,n=M(e),r=n.reject,o=_(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},116:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},117:function(t,e,n){var d=n(21),v=n(118),p=n(119),h=n(5),g=n(51),y=n(95),m={},b={};(e=t.exports=function(t,e,n,r,o){var i,c,a,u,s=o?function(){return t}:y(t),f=d(n,r,e?2:1),l=0;if("function"!=typeof s)throw TypeError(t+" is not iterable!");if(p(s)){for(i=g(t.length);l<i;l++)if((u=e?f(h(c=t[l])[0],c[1]):f(t[l]))===m||u===b)return u}else for(a=s.call(t);!(c=a.next()).done;)if((u=v(a,f,c.value,e))===m||u===b)return u}).BREAK=m,e.RETURN=b},118:function(t,e,n){var i=n(5);t.exports=function(e,t,n,r){try{return r?t(i(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&i(o.call(e)),t}}},119:function(t,e,n){var r=n(16),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},120:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},121:function(t,e,n){var a=n(1),u=n(68).set,s=a.MutationObserver||a.WebKitMutationObserver,f=a.process,l=a.Promise,d="process"==n(24)(f);t.exports=function(){var n,r,o,t=function(){var t,e;for(d&&(t=f.domain)&&t.exit();n;){e=n.fn,n=n.next;try{e()}catch(t){throw n?o():r=void 0,t}}r=void 0,t&&t.enter()};if(d)o=function(){f.nextTick(t)};else if(!s||a.navigator&&a.navigator.standalone)if(l&&l.resolve){var e=l.resolve(void 0);o=function(){e.then(t)}}else o=function(){u.call(a,t)};else{var i=!0,c=document.createTextNode("");new s(t).observe(c,{characterData:!0}),o=function(){c.data=i=!i}}return function(t){var e={fn:t,next:void 0};r&&(r.next=e),n||(n=e,o()),r=e}}},122:function(t,e,n){var r=n(1).navigator;t.exports=r&&r.userAgent||""},123:function(t,e,n){var o=n(9);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},124:function(t,e,n){"use strict";var r=n(1),o=n(3),i=n(18),c=n(11),a=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},125:function(t,e,n){var i=n(2)("iterator"),c=!1;try{var r=[7][i]();r.return=function(){c=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!c)return!1;var n=!1;try{var r=[7],o=r[i]();o.next=function(){return{done:n=!0}},r[i]=function(){return o},t(r)}catch(t){}return n}},126:function(t,e,n){"use strict";var r=n(10),o=n(3),i=n(1),c=n(67),a=n(70);r(r.P+r.R,"Promise",{finally:function(e){var n=c(this,o.Promise||i.Promise),t="function"==typeof e;return this.then(t?function(t){return a(n,e()).then(function(){return t})}:e,t?function(t){return a(n,e()).then(function(){throw t})}:e)}})},127:function(t,e,n){"use strict";var r=n(10),o=n(49),i=n(69);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},13:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},16:function(t,e){t.exports={}},17:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},18:function(t,e,n){var r=n(5),o=n(57),i=n(58),c=Object.defineProperty;e.f=n(11)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},19:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},2:function(t,e,n){var r=n(46)("wks"),o=n(47),i=n(1).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},21:function(t,e,n){var i=n(22);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},22:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},23:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},241:function(t,e,n){t.exports=n(457)},242:function(t,e,n){},25:function(t,e,n){t.exports=n(73)},29:function(t,e,n){var r=n(13),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},3:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},30:function(t,e,n){var r=n(82),o=n(19);t.exports=function(t){return r(o(t))}},31:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},32:function(t,e,n){var r=n(46)("keys"),o=n(47);t.exports=function(t){return r[t]||(r[t]=o(t))}},33:function(t,e){t.exports=!0},34:function(t,e,n){var r=n(18).f,o=n(17),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},36:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4:function(t,e,n){"use strict";function r(t){if(!t.ok)throw t;return t}function o(t){for(var e=0;e<t.length;++e)if(!t[e].ok)throw t[e];return t}function i(t){return"/static/"+t}function c(t,e,n){return void 0===e&&(e={}),void 0===n&&(n=null),e["X-CSRFToken"]=Cookies.get("csrftoken"),fetch(t,{credentials:"include",headers:e,method:"POST",body:n})}function a(t,e){return new RegExp("(?:git|https?|git@)(?:\\:\\/\\/)?"+e+"[/|:][A-Za-z0-9-]+?\\/[\\w\\.-]+\\/?(?!=.git)(?:\\.git(?:\\/?|\\#[\\w\\.\\-_]+)?)?$").test(t)}n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"e",function(){return i}),n.d(e,"a",function(){return c}),n.d(e,"d",function(){return a})},45:function(t,e,n){"use strict";var b=n(33),_=n(10),w=n(83),x=n(9),j=n(16),k=n(84),S=n(34),O=n(91),T=n(2)("iterator"),$=!([].keys&&"next"in[].keys()),P="values",L=function(){return this};t.exports=function(t,e,n,r,o,i,c){k(n,e,r);var a,u,s,f=function(t){if(!$&&t in p)return p[t];switch(t){case"keys":case P:return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",d=o==P,v=!1,p=t.prototype,h=p[T]||p["@@iterator"]||o&&p[o],g=h||f(o),y=o?d?f("entries"):g:void 0,m="Array"==e&&p.entries||h;if(m&&(s=O(m.call(new t)))!==Object.prototype&&s.next&&(S(s,l,!0),b||"function"==typeof s[T]||x(s,T,L)),d&&h&&h.name!==P&&(v=!0,g=function(){return h.call(this)}),b&&!c||!$&&!v&&p[T]||x(p,T,g),j[e]=g,j[l]=L,o)if(a={values:d?g:f(P),keys:i?g:f("keys"),entries:y},c)for(u in a)u in p||w(p,u,a[u]);else _(_.P+_.F*($||v),e,a);return a}},457:function(t,e,n){"use strict";n.r(e);n(242);var h,o,r=n(104),i=n.n(r),c=n(25),g=n.n(c),a=n(4),y='<div class="progress">\n                  <div class="progress-bar progress-bar-success progress-bar-striped"\n                       role="progressbar" aria-valuenow="100" aria-valuemin="0"\n                       aria-valuemax="100" style="width: 100%;height: 100%;">\n                  </div>\n                </div>;',m=5e3;function b(t,e){"new"===e.status?t.css("background-color","rgba(128, 128, 128, 0.5)"):"pending"===e.status?t.css("background-color","rgba(0, 0, 255, 0.5)"):"done"===e.status?t.css("background-color","#5cb85c"):"failed"===e.status&&(t.css("background-color","rgba(255, 0, 0, 0.5)"),t.css("background-image","none")),t.text(e.progress_message||e.status),"new"===e.status||"pending"===e.status?t.addClass("progress-bar-animated"):t.removeClass("progress-bar-striped")}function u(r){o=null,fetch(r).then(function(t){if(t.ok)$("#vault-fetch-iframe").attr("src",r);else{for(var e=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks")),n=0;n<e.length;++n)if(e[n].fetch_url===r){o=e[n];break}$("#vault-recook-object-modal").modal("show")}})}function s(){var t;o&&(clearTimeout(h),t="directory"===o.object_type?Urls.vault_cook_directory(o.object_id):Urls.vault_cook_revision_gitfast(o.object_id),o.email&&(t+="?email="+o.email),Object(a.a)(t).then(a.b).then(function(){o.status="new";for(var t=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks")),e=0;e<t.length;++e)if(t[e].object_id===o.object_id){t[e]=o;break}localStorage.setItem("swh-vault-cooking-tasks",g()(t)),_(),$("#vault-recook-object-modal").modal("hide")}).catch(function(){_(),$("#vault-recook-object-modal").modal("hide")}))}function _(){var v=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks"));if(!v||0===v.length)return $(".swh-vault-table tbody tr").remove(),void(h=setTimeout(_,m));for(var t=[],p={},r=[],e=0;e<v.length;++e){var n=v[e];r.push(n.object_id);var o=void 0;o="directory"===(p[n.object_id]=n).object_type?Urls.vault_cook_directory(n.object_id):Urls.vault_cook_revision_gitfast(n.object_id),"done"!==n.status&&"failed"!==n.status&&t.push(fetch(o))}$(".swh-vault-table tbody tr").each(function(t,e){var n=$(e).find(".vault-object-id").data("object-id");-1===$.inArray(n,r)&&$(e).remove()}),i.a.all(t).then(a.c).then(function(t){return i.a.all(t.map(function(t){return t.json()}))}).then(function(t){for(var e=$("#vault-cooking-tasks tbody"),n=0;n<t.length;++n){var r=p[t[n].obj_id];r.status=t[n].status,r.fetch_url=t[n].fetch_url,r.progress_message=t[n].progress_message}for(var o=0;o<v.length;++o){var i=v[o],c=$("#vault-task-"+i.object_id),a="Waiting for download link to be available";if(c.length){b(c.find(".progress-bar"),i);var u=c.find(".vault-dl-link");"done"===i.status?u[0].innerHTML='<button class="btn btn-default btn-sm" onclick="swh.vault.fetchCookedObject(\''+i.fetch_url+'\')"><i class="fa fa-download fa-fw" aria-hidden="true"></i>Download</button>':"failed"===i.status?u[0].innerHTML="":"new"===i.status&&(u[0].innerHTML=a)}else{var s=void 0;s="directory"===i.object_type?Urls.browse_directory(i.object_id):Urls.browse_revision(i.object_id);var f=$.parseHTML(y)[0];b($(f).find(".progress-bar"),i);var l=void 0;l="directory"===i.object_type?'<tr id="vault-task-'+i.object_id+'" title="Once downloaded, the directory can be extracted with the following command:\n\n$ tar xvzf '+i.object_id+'.tar.gz">':'<tr id="vault-task-'+i.object_id+'"  title="Once downloaded, the git repository can be imported with the following commands:\n\n$ git init\n$ zcat '+i.object_id+'.gitfast.gz | git fast-import">',l+='<td><input type="checkbox" class="vault-task-toggle-selection"/></td>',"directory"===i.object_type?l+='<td style="width: 120px"><i class="fa fa-folder fa-fw" aria-hidden="true"></i>directory</td>':l+='<td style="width: 120px"><i class="octicon octicon-git-commit fa-fw"></i>revision</td>',l+='<td class="vault-object-id" data-object-id="'+i.object_id+'"><a href="'+s+'">'+i.object_id+"</a></td>",l+='<td style="width: 350px">'+f.outerHTML+"</td>";var d=a;"done"===i.status?d='<button class="btn btn-default btn-sm" onclick="swh.vault.fetchCookedObject(\''+i.fetch_url+'\')"><i class="fa fa-download fa-fw" aria-hidden="true"></i>Download</button>':"failed"===i.status&&(d=""),l+='<td class="vault-dl-link" style="width: 320px">'+d+"</td>",l+="</tr>",e.prepend(l)}}localStorage.setItem("swh-vault-cooking-tasks",g()(v)),h=setTimeout(_,m)}).catch(function(){})}function f(){$("#vault-tasks-toggle-selection").change(function(t){$(".vault-task-toggle-selection").prop("checked",t.currentTarget.checked)}),$("#vault-remove-tasks").click(function(){clearTimeout(h);var r=[];$(".swh-vault-table tbody tr").each(function(t,e){if($(e).find(".vault-task-toggle-selection").prop("checked")){var n=$(e).find(".vault-object-id").data("object-id");r.push(n),$(e).remove()}});var t=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks"));t=$.grep(t,function(t){return-1===$.inArray(t.object_id,r)}),localStorage.setItem("swh-vault-cooking-tasks",g()(t)),$("#vault-tasks-toggle-selection").prop("checked",!1),h=setTimeout(_,m)}),h=setTimeout(_,m),$(document).on("shown.bs.tab",'a[data-toggle="tab"]',function(t){"Vault"===t.currentTarget.text.trim()&&(clearTimeout(h),_())}),window.onfocus=function(){clearTimeout(h),_()}}function l(e){var t,n=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks"));(n||(n=[]),void 0===n.find(function(t){return t.object_type===e.object_type&&t.object_id===e.object_id}))?(t="directory"===e.object_type?Urls.vault_cook_directory(e.object_id):Urls.vault_cook_revision_gitfast(e.object_id),e.email&&(t+="?email="+e.email),Object(a.a)(t).then(a.b).then(function(){n.push(e),localStorage.setItem("swh-vault-cooking-tasks",g()(n)),$("#vault-cook-directory-modal").modal("hide"),$("#vault-cook-revision-modal").modal("hide"),window.location=Urls.browse_vault()}).catch(function(){$("#vault-cook-directory-modal").modal("hide"),$("#vault-cook-revision-modal").modal("hide")})):window.location=Urls.browse_vault()}function d(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}function v(t){var e=$("#swh-vault-directory-email").val().trim();!e||d(e)?l({object_type:"directory",object_id:t,email:e,status:"new"}):$("#invalid-email-modal").modal("show")}function p(t){var e=$("#swh-vault-revision-email").val().trim();!e||d(e)?l({object_type:"revision",object_id:t,email:e,status:"new"}):$("#invalid-email-modal").modal("show")}function w(){$(document).ready(function(){$(".swh-browse-top-navigation").append($("#vault-cook-directory-modal")),$(".swh-browse-top-navigation").append($("#vault-cook-revision-modal")),$(".swh-browse-top-navigation").append($("#invalid-email-modal"))})}n.d(e,"fetchCookedObject",function(){return u}),n.d(e,"recookObject",function(){return s}),n.d(e,"initUi",function(){return f}),n.d(e,"cookDirectoryArchive",function(){return v}),n.d(e,"cookRevisionArchive",function(){return p}),n.d(e,"initTaskCreationUi",function(){return w})},46:function(t,e,n){var r=n(3),o=n(1),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(33)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},47:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},48:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},49:function(t,e,n){"use strict";var o=n(22);function r(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=o(n),this.reject=o(r)}t.exports.f=function(t){return new r(t)}},5:function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},51:function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},52:function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},53:function(t,e,n){var o=n(24),i=n(2)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},57:function(t,e,n){t.exports=!n(11)&&!n(23)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},58:function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},67:function(t,e,n){var o=n(5),i=n(22),c=n(2)("species");t.exports=function(t,e){var n,r=o(t).constructor;return void 0===r||null==(n=o(r)[c])?e:i(n)}},68:function(t,e,n){var r,o,i,c=n(21),a=n(120),u=n(52),s=n(29),f=n(1),l=f.process,d=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,h=f.Dispatch,g=0,y={},m="onreadystatechange",b=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},_=function(t){b.call(t.data)};d&&v||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){a("function"==typeof t?t:Function(t),e)},r(g),g},v=function(t){delete y[t]},"process"==n(24)(l)?r=function(t){l.nextTick(c(b,t,1))}:h&&h.now?r=function(t){h.now(c(b,t,1))}:p?(i=(o=new p).port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r=m in s("script")?function(t){u.appendChild(s("script"))[m]=function(){u.removeChild(this),b.call(t)}}:function(t){setTimeout(c(b,t,1),0)}),t.exports={set:d,clear:v}},69:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},70:function(t,e,n){var r=n(5),o=n(13),i=n(49);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},73:function(t,e,n){var r=n(3),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},78:function(t,e,n){n(79);for(var r=n(1),o=n(9),i=n(16),c=n(2)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var s=a[u],f=r[s],l=f&&f.prototype;l&&!l[c]&&o(l,c,s),i[s]=i.Array}},79:function(t,e,n){"use strict";var r=n(80),o=n(81),i=n(16),c=n(30);t.exports=n(45)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},80:function(t,e){t.exports=function(){}},81:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},82:function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},83:function(t,e,n){t.exports=n(9)},84:function(t,e,n){"use strict";var r=n(85),o=n(36),i=n(34),c={};n(9)(c,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},85:function(t,e,r){var o=r(5),i=r(86),c=r(48),a=r(32)("IE_PROTO"),u=function(){},s="prototype",f=function(){var t,e=r(29)("iframe"),n=c.length;for(e.style.display="none",r(52).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f[s][c[n]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[s]=o(t),n=new u,u[s]=null,n[a]=t):n=f(),void 0===e?n:i(n,e)}},86:function(t,e,n){var c=n(18),a=n(5),u=n(87);t.exports=n(11)?Object.defineProperties:function(t,e){a(t);for(var n,r=u(e),o=r.length,i=0;i<o;)c.f(t,n=r[i++],e[n]);return t}},87:function(t,e,n){var r=n(88),o=n(48);t.exports=Object.keys||function(t){return r(t,o)}},88:function(t,e,n){var c=n(17),a=n(30),u=n(89)(!1),s=n(32)("IE_PROTO");t.exports=function(t,e){var n,r=a(t),o=0,i=[];for(n in r)n!=s&&c(r,n)&&i.push(n);for(;e.length>o;)c(r,n=e[o++])&&(~u(i,n)||i.push(n));return i}},89:function(t,e,n){var u=n(30),s=n(51),f=n(90);t.exports=function(a){return function(t,e,n){var r,o=u(t),i=s(o.length),c=f(n,i);if(a&&e!=e){for(;c<i;)if((r=o[c++])!=r)return!0}else for(;c<i;c++)if((a||c in o)&&o[c]===e)return a||c||0;return!a&&-1}}},9:function(t,e,n){var r=n(18),o=n(36);t.exports=n(11)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},90:function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},91:function(t,e,n){var r=n(17),o=n(92),i=n(32)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},92:function(t,e,n){var r=n(19);t.exports=function(t){return Object(r(t))}},93:function(t,e,n){"use strict";var r=n(94)(!0);n(45)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},94:function(t,e,n){var u=n(31),s=n(19);t.exports=function(a){return function(t,e){var n,r,o=String(s(t)),i=u(e),c=o.length;return i<0||c<=i?a?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===c||(r=o.charCodeAt(i+1))<56320||57343<r?a?o.charAt(i):n:a?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}}},95:function(t,e,n){var r=n(53),o=n(2)("iterator"),i=n(16);t.exports=n(3).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}}})});
//# vault.6a63b96a1075316fe27b.js.map