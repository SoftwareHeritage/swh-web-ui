!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.swh=t():(e.swh=e.swh||{},e.swh.save=t())}(self,(function(){return function(){var __webpack_modules__={48926:function(e){function t(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,a)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(a,i){var o=e.apply(r,n);function s(e){t(o,a,i,s,u,"next",e)}function u(e){t(o,a,i,s,u,"throw",e)}s(void 0)}))}}},78279:function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(61553),a)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},61553:function(e){!function(t){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c=t.regeneratorRuntime;if(c)e.exports=c;else{(c=t.regeneratorRuntime=e.exports).wrap=g;var l="suspendedStart",p="suspendedYield",f="executing",h="completed",d={},v={};v[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(j([])));_&&_!==n&&a.call(_,o)&&(v=_);var m=$.prototype=b.prototype=Object.create(v);k.prototype=m.constructor=$,$.constructor=k,$[u]=k.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,$):(e.__proto__=$,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(m),e},c.awrap=function(e){return{__await:e}},q(x.prototype),x.prototype[s]=function(){return this},c.AsyncIterator=x,c.async=function(e,t,r,n){var a=new x(g(e,t,r,n));return c.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},q(m),m[u]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=j,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return s.type="throw",s.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function g(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),o=new T(n||[]);return i._invoke=function(e,t,r){var n=l;return function(a,i){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw i;return O()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=y(e,t,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function b(){}function k(){}function $(){}function q(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e){function t(r,n,i,o){var s=y(e[r],e,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,i,o)}),(function(e){t("throw",e,i,o)})):Promise.resolve(c).then((function(e){u.value=e,i(u)}),(function(e){return t("throw",e,i,o)}))}o(s.arg)}var r;this._invoke=function(e,n){function a(){return new Promise((function(r,a){t(e,n,r,a)}))}return r=r?r.then(a,a):a()}}function E(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,E(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=y(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},87757:function(e,t,r){e.exports=r(78279)},80893:function(e,t,r){"use strict";r.d(t,{XC:function(){return n}});var n=(0,r(55423).TT)("img/swh-spinner.gif")},55423:function(e,t,r){"use strict";r.d(t,{ry:function(){return n},TT:function(){return a},e_:function(){return i},Eg:function(){return o},L3:function(){return s},EM:function(){return u}});r(48926),r(87757);function n(e){if(!e.ok)throw e;return e}function a(e){return"/static/"+e}function i(e,t,r){return void 0===t&&(t={}),void 0===r&&(r=null),t["X-CSRFToken"]=Cookies.get("csrftoken"),fetch(e,{credentials:"include",headers:t,method:"POST",body:r})}function o(e,t){void 0===t&&(t="/");return void 0!==["http:","https:","git:"].find((function(t){return t===e.protocol}))&&(!!e.pathname.startsWith(t)&&new RegExp("[\\w\\.-]+\\/?(?!=.git)(?:\\.git\\/?)?$").test(e.pathname.slice(t.length)))}function s(){history.replaceState("",document.title,window.location.pathname+window.location.search)}function u(e,t,r){void 0===r&&(r=!1);var n="",a="";return r&&(n='<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n      </button>',a="alert-dismissible"),'<div class="alert alert-'+e+" "+a+'" role="alert">'+t+n+"</div>"}},31652:function(module){module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('\n\n<div class="swh-save-origin-archives-form swh-save-origin-artifact-form form-row">\n  <div class="form-group col-md-7">\n    <label for="swh-input-artifact-url-'),__append(escapeFn(formId)),__append('">Artifact url</label>\n    <input type="text" class="form-control" id="swh-input-artifact-url-'),__append(escapeFn(formId)),__append('" required>\n    <div class="invalid-feedback">The artifact url is mandatory</div>\n  </div>\n  <div class="form-group col-md-2">\n    <label for="swh-input-artifact-version-'),__append(escapeFn(formId)),__append('">Artifact version</label>\n    <input type="text" class="form-control" id="swh-input-artifact-version-'),__append(escapeFn(formId)),__append('" required>\n    <div class="invalid-feedback">The artifact version is mandatory</div>\n  </div>\n  <div class="col-md-2">\n    '),deletableRow?(__append('\n      <label for="swh-remove-archive-artifact-'),__append(escapeFn(formId)),__append('">&nbsp;</label>\n      <button id="swh-remove-archive-artifact-'),__append(escapeFn(formId)),__append('" type="button" class="btn btn-default btn-block" onclick="swh.save.deleteArtifactFormRow(event)">\n              <i class="mdi mdi-file-remove mdi-fw" aria-hidden="true"></i>Remove artifact\n      </button>\n    ')):__append('\n      <label for="swh-add-archive-artifact">&nbsp;</label>\n      <button id="swh-add-archive-artifact" type="button" class="btn btn-default btn-block" onclick="swh.save.addArtifactFormRow()">\n        <i class="mdi mdi-file-plus mdi-fw" aria-hidden="true"></i>Add artifact\n      </button>\n    '),__append("\n  </div>\n</div>");return __output}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return function(){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{maybeRequireExtraInputs:function(){return d},addArtifactFormRow:function(){return v},deleteArtifactFormRow:function(){return w},initOriginSave:function(){return _},validateSaveOriginUrl:function(){return m},initTakeNewSnapshot:function(){return g},formatValuePerType:function(){return y},displaySaveRequestInfo:function(){return b},fillSaveRequestFormAndScroll:function(){return q}});var e,t=__webpack_require__(48926),r=__webpack_require__.n(t),n=__webpack_require__(87757),a=__webpack_require__.n(n),i=__webpack_require__(55423),o=__webpack_require__(80893),s=__webpack_require__(31652),u=__webpack_require__.n(s);function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t,r,n,a,i){return f.apply(this,arguments)}function f(){return(f=r()(a().mark((function e(t,r,n,o,s,u){var c,l,p,f,h,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Urls.api_1_save_origin(t,r),$(".swh-processing-save-request").css("display","block"),l={},p=null,n!=={}&&(p=JSON.stringify(n),l={"Content-Type":"application/json"}),e.prev=6,e.next=9,(0,i.e_)(c,l,p);case 9:return f=e.sent,(0,i.ry)(f),e.next=13,f.json();case 13:h=e.sent,$(".swh-processing-save-request").css("display","none"),"accepted"===h.save_request_status?o():s(),e.next=25;break;case 18:return e.prev=18,e.t0=e.catch(6),$(".swh-processing-save-request").css("display","none"),e.next=23,e.t0.json();case 23:d=e.sent,u(e.t0.status,d);case 25:case 26:case"end":return e.stop()}}),e,null,[[6,18]])})))).apply(this,arguments)}function h(e){$("#swh-input-artifact-url-"+e).on("input",(function(t){var r=$(this).val().trim(),n=r.split("/").slice(-1)[0];if(n!==r){var a=(n=n.replace(/tar.*$/,"tar")).split(".").slice(0,-1).join("."),i=$("#swh-input-artifact-version-"+e);a!==n&&i.val(a)}}))}function d(){var e=$("#swh-input-visit-type").val(),t="none",r=!0;"archives"===e&&(t="flex",r=!1),$(".swh-save-origin-archives-form").css("display",t),r||$("#swh-save-origin-archives-help").css("display","block"),$(".swh-save-origin-archives-form .form-control").prop("disabled",r),"archives"===e&&1===$(".swh-save-origin-archives-form").length&&($(".swh-save-origin-archives-form").last().after(u()({deletableRow:!1,formId:0})),h(0))}function v(){var e=$(".swh-save-origin-artifact-form").length;$(".swh-save-origin-artifact-form").last().after(u()({deletableRow:!0,formId:e})),h(e)}function w(e){$(e.target).closest(".swh-save-origin-artifact-form").remove()}function _(){$(document).ready(r()(a().mark((function t(){var r,n,s,u,l,f,h,d,v;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return $.fn.dataTable.ext.errMode="none",t.next=3,fetch(Urls.origin_save_types_list());case 3:return r=t.sent,t.next=6,r.json();case 6:for(n=t.sent,s=c(n);!(u=s()).done;)l=u.value,$("#swh-input-visit-type").append('<option value="'+l+'">'+l+"</option>");$("#swh-input-visit-type").val("git"),e=$("#swh-origin-save-requests").on("error.dt",(function(e,t,r,n){$("#swh-origin-save-request-list-error").text("An error occurred while retrieving the save requests list"),console.log(n)})).DataTable({serverSide:!0,processing:!0,language:{processing:'<img src="'+o.XC+'"></img>'},ajax:{url:Urls.origin_save_requests_list("all"),data:function(e){swh.webapp.isUserLoggedIn()&&$("#swh-save-requests-user-filter").prop("checked")&&(e.user_requests_only="1")}},searchDelay:1e3,dom:'<"row"<"col-sm-3"l><"col-sm-6 text-left user-requests-filter"><"col-sm-3"f>><"row"<"col-sm-12"tr>><"row"<"col-sm-5"i><"col-sm-7"p>>',fnInitComplete:function(){swh.webapp.isUserLoggedIn()&&($("div.user-requests-filter").html('\n<div class="custom-control custom-checkbox swhid-option">\n  <input class="custom-control-input" value="option-user-requests-filter" type="checkbox"\n         id="swh-save-requests-user-filter">\n  <label class="custom-control-label font-weight-normal" for="swh-save-requests-user-filter">\n    show only your own requests\n  </label>\n</div>\n'),$("#swh-save-requests-user-filter").on("change",(function(){e.draw()})))},columns:[{data:"save_request_date",name:"request_date",render:function(e,t,r){return"display"===t?new Date(e).toLocaleString():e}},{data:"visit_type",name:"visit_type"},{data:"origin_url",name:"origin_url",render:function(e,t,r){if("display"===t){var n="",a=$.fn.dataTable.render.text().display(e);if("succeeded"===r.save_task_status){var i=Urls.browse_origin()+"?origin_url="+encodeURIComponent(a);r.visit_date&&(i+="&amp;timestamp="+encodeURIComponent(r.visit_date)),n+='<a href="'+i+'">'+a+"</a>"}else n+=a;return n+='&nbsp;<a href="'+a+'"><i class="mdi mdi-open-in-new" aria-hidden="true"></i></a>'}return e}},{data:"save_request_status",name:"status"},{data:"save_task_status",name:"loading_task_status"},{name:"info",render:function(e,t,r){return"succeeded"===r.save_task_status||"failed"===r.save_task_status?'<i class="mdi mdi-information-outline swh-save-request-info" aria-hidden="true" style="cursor: pointer"onclick="swh.save.displaySaveRequestInfo(event, '+r.id+')"></i>':""}},{render:function(e,t,r){return"accepted"===r.save_request_status?'<button class="btn btn-default btn-sm swh-save-origin-again" type="button" onclick="swh.save.fillSaveRequestFormAndScroll(\''+r.visit_type+"', '"+r.origin_url+'\');"><i class="mdi mdi-camera mdi-fw" aria-hidden="true"></i>Save again</button>':""}}],scrollY:"50vh",scrollCollapse:!0,order:[[0,"desc"]],responsive:{details:{type:"none"}}}),swh.webapp.addJumpToPagePopoverToDataTable(e),$("#swh-origin-save-requests-list-tab").on("shown.bs.tab",(function(){e.draw(),window.location.hash="#requests"})),$("#swh-origin-save-request-help-tab").on("shown.bs.tab",(function(){(0,i.L3)(),$(".swh-save-request-info").popover("dispose")})),f=(0,i.EM)("success",'The "save code now" request has been accepted and will be processed as soon as possible.',!0),h=(0,i.EM)("warning",'The "save code now" request has been put in pending state and may be accepted for processing after manual review.',!0),d=(0,i.EM)("danger",'The rate limit for "save code now" requests has been reached. Please try again later.',!0),v=(0,i.EM)("danger",'An unexpected error happened when submitting the "save code now request".',!0),$("#swh-save-origin-form").submit((function(e){if(e.preventDefault(),e.stopPropagation(),$(".alert").alert("close"),e.target.checkValidity()){$(e.target).removeClass("was-validated");var t=$("#swh-input-visit-type").val(),r=$("#swh-input-origin-url").val(),n={};if("archives"===t){n.archives_data=[];for(var a=0;a<$(".swh-save-origin-artifact-form").length;++a)n.archives_data.push({artifact_url:$("#swh-input-artifact-url-"+a).val(),artifact_version:$("#swh-input-artifact-version-"+a).val()})}p(t,r,n,(function(){return $("#swh-origin-save-request-status").html(f)}),(function(){return $("#swh-origin-save-request-status").html(h)}),(function(e,t){if($("#swh-origin-save-request-status").css("color","red"),403===e){var r=(0,i.EM)("danger","Error: "+t.reason);$("#swh-origin-save-request-status").html(r)}else if(429===e)$("#swh-origin-save-request-status").html(d);else if(400===e){var n=(0,i.EM)("danger",t.reason);$("#swh-origin-save-request-status").html(n)}else $("#swh-origin-save-request-status").html(v)}))}else $(e.target).addClass("was-validated")})),$("#swh-show-origin-save-requests-list").on("click",(function(e){e.preventDefault(),$('.nav-tabs a[href="#swh-origin-save-requests-list"]').tab("show")})),$("#swh-input-origin-url").on("input",(function(e){var t=$(this).val().trim();$(this).val(t),$("#swh-input-visit-type option").each((function(){var e=$(this).val();e&&t.includes(e)&&$(this).prop("selected",!0)}))})),"#requests"===window.location.hash&&$('.nav-tabs a[href="#swh-origin-save-requests-list"]').tab("show");case 21:case"end":return t.stop()}}),t)}))))}function m(e){var t=$("#swh-input-visit-type").val(),r=null,n=!0;try{r=new URL(e.value.trim())}catch(e){n=!1}if(n){n=void 0!==["http:","https:","svn:","git:"].find((function(e){return e===r.protocol}))}if(n&&"git"===t)switch(r.hostname){case"github.com":n=(0,i.Eg)(r);break;case"git.code.sf.net":n=(0,i.Eg)(r,"/p/");break;case"bitbucket.org":n=(0,i.Eg)(r);break;default:r.hostname.startsWith("gitlab.")&&(n=(0,i.Eg)(r))}n?e.setCustomValidity(""):e.setCustomValidity("The origin url is not valid or does not reference a code repository")}function g(){var e=(0,i.EM)("success",'The "take new snapshot" request has been accepted and will be processed as soon as possible.',!0),t=(0,i.EM)("warning",'The "take new snapshot" request has been put in pending state and may be accepted for processing after manual review.',!0),r=(0,i.EM)("danger",'The rate limit for "take new snapshot" requests has been reached. Please try again later.',!0),n=(0,i.EM)("danger",'An unexpected error happened when submitting the "save code now request".',!0);$(document).ready((function(){$("#swh-take-new-snapshot-form").submit((function(a){a.preventDefault(),a.stopPropagation();p($("#swh-input-visit-type").val(),$("#swh-input-origin-url").val(),{},(function(){return $("#swh-take-new-snapshot-request-status").html(e)}),(function(){return $("#swh-take-new-snapshot-request-status").html(t)}),(function(e,t){if($("#swh-take-new-snapshot-request-status").css("color","red"),403===e){var a=(0,i.EM)("danger","Error: "+t.detail,!0);$("#swh-take-new-snapshot-request-status").html(a)}else 429===e?$("#swh-take-new-snapshot-request-status").html(r):$("#swh-take-new-snapshot-request-status").html(n)}))}))}))}function y(e,t){return null===t?null:{json:function(e){return JSON.stringify(e,null,2)},date:function(e){return new Date(e).toLocaleString()},raw:function(e){return e},duration:function(e){return e+" seconds"}}[e](t)}function b(e,t){return k.apply(this,arguments)}function k(){return(k=r()(a().mark((function e(t,r){var n,i,s,u,c,l,p,f,h,d,v,w,_,m,g,b;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),n=Urls.origin_save_task_info(r),!$(t.target).data("bs.popover")){e.next=5;break}return $(t.target).popover("dispose"),e.abrupt("return");case 5:return $(".swh-save-request-info").popover("dispose"),$(t.target).popover({animation:!1,boundary:"viewport",container:"body",title:'Save request task information <i style="cursor: pointer; position: absolute; right: 1rem;" class="mdi mdi-close swh-save-request-info-close"></i>',content:'<div class="swh-popover swh-save-request-info-popover">\n                  <div class="text-center">\n                    <img src='+o.XC+"></img>\n                    <p>Fetching task information ...</p>\n                  </div>\n                </div>",html:!0,placement:"left",sanitizeFn:swh.webapp.filterXSS}),$(t.target).on("shown.bs.popover",(function(){var e=this,t=$(this).attr("aria-describedby");$("#"+t+" .mdi-close").click((function(){$(e).popover("dispose")}))})),$(t.target).popover("show"),e.next=11,fetch(n);case 11:return i=e.sent,e.next=14,i.json();case 14:if(s=e.sent,$.isEmptyObject(s))u="Not available";else{for(c=[],l={Type:["raw","type"],"Visit status":["raw","visit_status"],Arguments:["json","arguments"],Id:["raw","id"],"Backend id":["raw","backend_id"],"Scheduling date":["date","scheduled"],"Start date":["date","started"],"Completion date":["date","ended"],Duration:["duration","duration"],Runner:["raw","worker"],Log:["raw","message"]},p=0,f=Object.entries(l);p<f.length;p++)h=f[p],d=h[0],v=h[1],w=v[0],_=v[1],s.hasOwnProperty(_)&&c.push({key:d,value:y(w,s[_])});for(u='<table class="table"><tbody>',m=0,g=c;m<g.length;m++)b=g[m],u+='<tr>\n              <th class="swh-metadata-table-row swh-metadata-table-key">'+b.key+'</th>\n              <td class="swh-metadata-table-row swh-metadata-table-value">\n                <pre>'+b.value+"</pre>\n              </td>\n            </tr>";u+="</tbody></table>"}$(".swh-popover").html(u),$(t.target).popover("update");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){$("#swh-input-origin-url").val(t);var r=!1;$("#swh-input-visit-type option").each((function(){var e=$(this).val();e&&t.includes(e)&&($(this).prop("selected",!0),r=!0)})),r||$("#swh-input-visit-type option").each((function(){$(this).val()===e&&$(this).prop("selected",!0)})),window.scrollTo(0,0)}}(),__webpack_exports__}()}));
//# sourceMappingURL=save.1c76b900bdcc9ce8c8ff.js.map