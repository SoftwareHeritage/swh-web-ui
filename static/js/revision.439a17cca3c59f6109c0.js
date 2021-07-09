/*! For license information please see revision.439a17cca3c59f6109c0.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.swh=t():(e.swh=e.swh||{},e.swh.revision=t())}(self,(function(){return function(){var __webpack_modules__={48926:function(e){function t(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=e.apply(n,r);function s(e){t(a,i,o,s,l,"next",e)}function l(e){t(a,i,o,s,l,"throw",e)}s(void 0)}))}}},78279:function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(61553),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},61553:function(e){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c=t.regeneratorRuntime;if(c)e.exports=c;else{(c=t.regeneratorRuntime=e.exports).wrap=y;var u="suspendedStart",f="suspendedYield",d="executing",h="completed",p={},_={};_[a]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(L([])));g&&g!==r&&i.call(g,a)&&(_=g);var m=k.prototype=b.prototype=Object.create(_);x.prototype=m.constructor=k,k.constructor=x,k[l]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(m),e},c.awrap=function(e){return{__await:e}},$(S.prototype),S.prototype[s]=function(){return this},c.AsyncIterator=S,c.async=function(e,t,n,r){var i=new S(y(e,t,n,r));return c.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},$(m),m[l]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return s.type="throw",s.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function y(e,t,n,r){var i=t&&t.prototype instanceof b?t:b,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=function(e,t,n){var r=u;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return q()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=v(e,t,n);if("normal"===l.type){if(r=n.done?h:f,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(e,n,a),o}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function b(){}function x(){}function k(){}function $(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){function t(n,r,o,a){var s=v(e[n],e,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(c).then((function(e){l.value=e,o(l)}),(function(e){return t("throw",e,o,a)}))}a(s.arg)}var n;this._invoke=function(e,r){function i(){return new Promise((function(n,i){t(e,r,n,i)}))}return n=n?n.then(i,i):i()}}function j(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,j(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=v(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:q}}function q(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},87757:function(e,t,n){e.exports=n(78279)},40485:function(e,t,n){"use strict";n.d(t,{OU:function(){return T},sr:function(){return A},S0:function(){return P},EV:function(){return F},n2:function(){return N},Mo:function(){return W},D_:function(){return H},St:function(){return B},qo:function(){return K}});var r,i=n(48926),o=n.n(i),a=n(87757),s=n.n(a),l=(n(43511),n(80893)),c=n(55423),u=n(16508),f=n.n(u),d=null,h=0,p=0,_='<span class="no-nl-marker" style="color: red;" title="No newline at end of file"><i class="mdi mdi-rotate-90 mdi-cancel" aria-hidden="true"><i class="mdi mdi-keyboard-return" aria-hidden="true"></span>',w=0,g=0,m={},y={},v=null,b=null,x={},k=null,S="#swh-revision-changes",j="Files";function C(e){var t=$(e).offset().top,n=t+$(e).outerHeight(),r=$(window).scrollTop(),i=r+$(window).height();return n>r&&t<i}function T(e,t,n){for(var r=x[e],i=q(t),o=q(n),a="",s=0;s<r-i.length;++s)a+=" ";a+=i,a+="  ";for(var l=0;l<r-o.length;++l)a+=" ";return a+=o}function E(e){var t,n;if(e.startsWith("@@")){var r=new RegExp(/^@@ -(\d+),(\d+) \+(\d+),(\d+) @@$/gm),i=new RegExp(/^@@ -(\d+) \+(\d+),(\d+) @@$/gm),o=new RegExp(/^@@ -(\d+),(\d+) \+(\d+) @@$/gm),a=new RegExp(/^@@ -(\d+) \+(\d+) @@$/gm),s=r.exec(e),l=i.exec(e),c=o.exec(e),u=a.exec(e);s?(t=parseInt(s[1])-1,n=parseInt(s[3])-1):l?(t=parseInt(l[1])-1,n=parseInt(l[2])-1):c?(t=parseInt(c[1])-1,n=parseInt(c[3])-1):u&&(t=parseInt(u[1])-1,n=parseInt(u[2])-1)}return void 0!==t?[t,n]:null}function L(e){return e?parseInt(e):0}function q(e){return e?e.toString():""}function A(e,t,n){var r;if(t||n){var i=L(e.trim());t?r=[i,0]:n&&(r=[0,i])}else(r=e.replace(/[ ]+/g," ").split(" ")).length>2&&r.shift(),r=r.map((function(e){return L(e)}));return r}function P(e,t,n){var r="";return r+="F"+(e[0]||0),r+="T"+(e[1]||0),r+="-F"+(t[0]||0),r+="T"+(t[1]||0),r+=n?"-unified":"-split"}function F(e){var t=/F([0-9]+)T([0-9]+)-F([0-9]+)T([0-9]+)-([a-z]+)/.exec(e);return 6===t.length?{startLines:[parseInt(t[1]),parseInt(t[2])],endLines:[parseInt(t[3]),parseInt(t[4])],unified:"unified"===t[5]}:null}function O(e,t){var n=$("#"+e+' .hljs-ln-line[data-line-number="'+t+'"]'),r=$("#"+e+' .hljs-ln-numbers[data-line-number="'+t+'"]');return r.css("color","black"),r.css("font-weight","bold"),n.css("background-color","#fdf3da"),n.css("mix-blend-mode","multiply"),n}function D(e){void 0===e&&(e=!0),e&&(k=null,v=null,b=null),$(".hljs-ln-line[data-line-number]").css("background-color","initial"),$(".hljs-ln-line[data-line-number]").css("mix-blend-mode","initial"),$(".hljs-ln-numbers[data-line-number]").css("color","#aaa"),$(".hljs-ln-numbers[data-line-number]").css("font-weight","initial"),"Changes"===j&&window.location.hash!==S&&window.history.replaceState("",document.title,window.location.pathname+window.location.search+S)}function R(e,t,n,r){var i;if(r){var o=T(e,t[0],t[1]),a=T(e,n[0],n[1]),s=$("#"+e+' .hljs-ln-line[data-line-number="'+o+'"]'),l=$("#"+e+' .hljs-ln-line[data-line-number="'+a+'"]');if($(l).position().top<$(s).position().top){var c=[a,o];o=c[0],a=c[1],i=l}else i=s;for(var u=O(e,o),f=$(u).closest("tr"),d=$(f).children(".hljs-ln-line").data("line-number").toString();d!==a;)d.trim()&&O(e,d),f=$(f).next(),d=$(f).children(".hljs-ln-line").data("line-number").toString();O(e,a)}else if(t[0]&&n[0]){for(var h=Math.min(t[0],n[0]),p=Math.max(t[0],n[0]),_=h;_<=p;++_)O(e+"-from",_);i=$("#"+e+'-from .hljs-ln-line[data-line-number="'+h+'"]')}else if(t[1]&&n[1]){for(var w=Math.min(t[1],n[1]),g=Math.max(t[1],n[1]),m=w;m<=g;++m)O(e+"-to",m);i=$("#"+e+'-to .hljs-ln-line[data-line-number="'+w+'"]')}else{var y,v;t[0]&&n[1]?(y=t[0],v=n[1]):(y=n[0],v=t[1]);var b=$("#"+e+'-from .hljs-ln-line[data-line-number="'+y+'"]'),x=$("#"+e+'-to .hljs-ln-line[data-line-number="'+v+'"]'),k=$(b).position().top<$(x).position().top;i=k?b:x;for(var S=$("#"+e+"-from tr").first(),j=$(S).children(".hljs-ln-line").data("line-number"),C=$("#"+e+"-to tr").first(),E=$(C).children(".hljs-ln-line").data("line-number"),L=!1;k&&j===y?L=!0:k||E!==v||(L=!0),L&&j&&O(e+"-from",j),L&&E&&O(e+"-to",E),!(k&&E===v||!k&&j===y);)S=$(S).next(),j=$(S).children(".hljs-ln-line").data("line-number"),C=$(C).next(),E=$(C).children(".hljs-ln-line").data("line-number")}var q=P(t,n,r);return window.location.hash="diff_"+e+"+"+q,i}function N(e){$("#"+e+"-split-diff").css("display","none"),$("#"+e+"-unified-diff").css("display","block")}function W(e){$("#"+e+"-unified-diff").css("display","none"),$("#"+e+"-split-diff").css("display","block")}function H(e,t){return M.apply(this,arguments)}function M(){return(M=o()(s().mark((function e(t,n){var i,o,a,l,c,u,f,h,y,v,b,k,S;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=function(e,t){$(e).attr("data-line-number",t||""),$(e).children().attr("data-line-number",t||""),$(e).siblings().attr("data-line-number",t||"")},-1!==t.indexOf("force=true")||!m.hasOwnProperty(n)){e.next=4;break}return e.abrupt("return");case 4:return m[n]=!0,$("#"+n+"-loading").css("visibility","visible"),$("#"+n+"-loading").css("display","block"),$("#"+n+"-highlightjs").css("display","none"),e.next=10,fetch(t);case 10:return o=e.sent,e.next=13,o.json();case 13:a=e.sent,++p===d.length&&$("#swh-compute-all-diffs").addClass("active"),0===a.diff_str.indexOf("Large diff")?($("#"+n)[0].innerHTML=a.diff_str+'<br/><button class="btn btn-default btn-sm" type="button"\n           onclick="swh.revision.computeDiff(\''+t+"&force=true', '"+n+"')\">Request diff</button>",z(n)):0!==a.diff_str.indexOf("@@")?($("#"+n).text(a.diff_str),z(n)):($("."+n).removeClass("nohighlight"),$("."+n).addClass(a.language),$("#"+n).text(a.diff_str),$("#"+n).each((function(e,t){hljs.highlightElement(t),hljs.lineNumbersElementSync(t)})),l="",c="",u=[],f=[],h=[],y=0,v="",b="",k=0,$("#"+n+" .hljs-ln-numbers").each((function(e,t){var n=t.nextSibling.innerText,r=E(n),i="",o="";if(r)l=r[0],c=r[1],k=0,v+=n+"\n",b+=n+"\n",f.push(""),h.push("");else if(n.length>0&&"-"===n[0])i=(l+=1).toString(),f.push(i),++g,v+=n+"\n",++k;else if(n.length>0&&"+"===n[0])o=(c+=1).toString(),h.push(o),++w,b+=n+"\n",--k;else{c+=1,i=(l+=1).toString(),o=c.toString();for(var a=0;a<Math.abs(k);++a)k>0?(b+="\n",h.push("")):(v+="\n",f.push(""));k=0,v+=n+"\n",b+=n+"\n",h.push(o),f.push(i)}l||(i=""),c||(o=""),u[e]=[i,o],y=Math.max(y,i.length),y=Math.max(y,o.length)})),x[n]=y,$("#"+n+"-from").text(v),$("#"+n+"-to").text(b),$("#"+n+"-from, #"+n+"-to").each((function(e,t){hljs.highlightElement(t),hljs.lineNumbersElementSync(t)})),$("."+n+" .hljs-ln-numbers").each((function(e,t){var n=t.nextSibling.innerText;if(n.startsWith("@@")){$(t).parent().addClass("swh-diff-lines-info");var r=$(t).parent().find(".hljs-ln-code .hljs-ln-line").text();$(t).parent().find(".hljs-ln-code .hljs-ln-line").children().remove(),$(t).parent().find(".hljs-ln-code .hljs-ln-line").text(""),$(t).parent().find(".hljs-ln-code .hljs-ln-line").append('<span class="hljs-meta">'+r+"</span>")}else n.length>0&&"-"===n[0]?$(t).parent().addClass("swh-diff-removed-line"):n.length>0&&"+"===n[0]&&$(t).parent().addClass("swh-diff-added-line")})),$("#"+n+" .hljs-ln-numbers").each((function(e,t){var r=T(n,u[e][0],u[e][1]);i(t,r)})),$("#"+n+"-from .hljs-ln-numbers").each((function(e,t){i(t,f[e])})),$("#"+n+"-to .hljs-ln-numbers").each((function(e,t){i(t,h[e])})),$("."+n+" .hljs-ln-code").each((function(e,t){if(t.firstChild){if("#text"!==t.firstChild.nodeName){var n=t.firstChild.innerHTML;if("-"===n[0]||"+"===n[0]){t.firstChild.innerHTML=n.substr(1);var r=document.createTextNode(n[0]);$(t).prepend(r)}}$(t).contents().filter((function(e,t){return 3===t.nodeType})).each((function(e,n){var r="[swh-no-nl-marker]";-1!==n.textContent.indexOf(r)&&(n.textContent=n.textContent.replace(r,""),$(t).append($(_)))}))}})),0!==a.diff_str.indexOf("Diffs are not generated for non textual content")&&$("#diff_"+n+" .diff-styles").css("visibility","visible"),z(n),r&&-1!==r.diffPanelId.indexOf(n)&&(r.unified||W(n),S=R(n,r.startLines,r.endLines,r.unified),$("html, body").animate({scrollTop:S.offset().top-50},{duration:500})));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){$("#"+e+"-loading").css("display","none"),$("#"+e+"-highlightjs").css("display","block"),$("#swh-revision-lines-added").text(w+" additions"),$("#swh-revision-lines-deleted").text(g+" deletions"),$("#swh-nb-diffs-computed").text(p),Waypoint.refreshAll()}function I(){$(".swh-file-diff-panel").each((function(e,t){if(C(t)){var n=t.id.replace("diff_","");H(y[n],n)}}))}function Q(e){var t=e.path;return"rename"===e.type&&(t=e.from_path+" &rarr; "+e.to_path),f()({diffData:e,diffPanelTitle:t,swhSpinnerSrc:l.XC})}function G(){for(var e=0;e<d.length;++e){var t=d[e];$("#diff_"+t.id).waypoint({handler:function(){if(C(this.element)){var e=this.element.id.replace("diff_","");H(y[e],e),this.destroy()}},offset:"100%"}),$("#diff_"+t.id).waypoint({handler:function(){if(C(this.element)){var e=this.element.id.replace("diff_","");H(y[e],e),this.destroy()}},offset:function(){return-$(this.element).height()}})}Waypoint.refreshAll()}function U(e,t){void 0===t&&(t=!0),Waypoint.disableAll(),$("html, body").animate({scrollTop:$(e).offset().top},{duration:500,complete:function(){t&&(window.location.hash=e),Waypoint.enableAll(),I()}})}function B(e){for(var t in $(e.currentTarget).addClass("active"),y)y.hasOwnProperty(t)&&H(y[t],t);e.stopPropagation()}function K(e,t){return V.apply(this,arguments)}function V(){return(V=o()(s().mark((function e(t,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(399).then(n.bind(n,61664));case 2:$(document).on("shown.bs.tab",'a[data-toggle="tab"]',function(){var e=o()(s().mark((function e(t){var n,o,a,l,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Changes"!==(j=t.currentTarget.text.trim())){e.next=30;break}if(window.location.hash=S,$("#readme-panel").css("display","none"),!d){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,fetch(i);case 8:return n=e.sent,e.next=11,n.json();case 11:for(o=e.sent,d=o.changes,h=o.total_nb_changes,a=h+" changed file",1!==h&&(a+="s"),$("#swh-revision-changed-files").text(a),$("#swh-total-nb-diffs").text(d.length),$("#swh-revision-changes-list pre")[0].innerHTML=o.changes_msg,$("#swh-revision-changes-loading").css("display","none"),$("#swh-revision-changes-list pre").css("display","block"),$("#swh-compute-all-diffs").css("visibility","visible"),$("#swh-revision-changes-list").removeClass("in"),h>d.length&&($("#swh-too-large-revision-diff").css("display","block"),$("#swh-nb-loaded-diffs").text(d.length)),l=0;l<d.length;++l)u=d[l],y[u.id]=u.diff_url,$("#swh-revision-diffs").append(Q(u));G(),I(),r&&U(r.diffPanelId,!1),e.next=31;break;case 30:"Files"===j&&((0,c.L3)(),$("#readme-panel").css("display","block"));case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$(document).ready((function(){t.length>0?$("#swh-revision-message").addClass("in"):$("#swh-collapse-revision-message").attr("data-toggle",""),$('#swh-revision-changes-list a[href^="#"], #back-to-top a[href^="#"]').click((function(e){return U($.attr(e.currentTarget,"href")),!1})),$("body").click((function(e){if("Changes"===j)if(e.target.classList.contains("hljs-ln-n")){var t=$(e.target).closest("code").prop("id"),n=-1!==t.indexOf("-from"),r=-1!==t.indexOf("-to"),i=$(e.target).data("line-number").toString(),o=t.replace("-from","").replace("-to","");e.shiftKey&&o===k&&i.trim()||(D(),k=o),o===k&&i.trim()&&(e.shiftKey?v&&(D(!1),b=A(i,n,r),R(o,v,b,!n&&!r)):R(o,v=A(i,n,r),v,!n&&!r))}else D()}));var e=window.location.hash;if(e){var n=e.split("+");2===n.length&&(r=F(n[1]))&&(r.diffPanelId=n[0],$('.nav-tabs a[href="#swh-revision-changes"]').tab("show")),e===S&&$('.nav-tabs a[href="#swh-revision-changes"]').tab("show")}}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},84050:function(e,t,n){"use strict";function r(e){var t=new URLSearchParams(window.location.search);$(e.target).val()?t.set("revs_ordering",$(e.target).val()):t.has("revs_ordering")&&t.delete("revs_ordering"),window.location.search=t.toString()}function i(){$(document).ready((function(){var e=new URLSearchParams(window.location.search).get("revs_ordering");e&&$(':input[value="'+e+'"]').prop("checked",!0)}))}n.d(t,{i:function(){return r},o:function(){return i}})},80893:function(e,t,n){"use strict";n.d(t,{XC:function(){return r}});var r=(0,n(55423).TT)("img/swh-spinner.gif")},55423:function(e,t,n){"use strict";n.d(t,{TT:function(){return r},L3:function(){return i}});n(48926),n(87757);function r(e){return"/static/"+e}function i(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},16508:function(module){module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('\n<div id="diff_'),__append(escapeFn(diffData.id)),__append('" class="card swh-file-diff-panel">\n  <div class="card-header bg-gray-light border-bottom-0">\n    <a data-toggle="collapse" href="#diff_'),__append(escapeFn(diffData.id)),__append('_content">\n      <div class="float-left swh-title-color">\n        <strong>'),__append(escapeFn(diffPanelTitle)),__append('</strong>\n      </div>\n    </a>\n    <div class="ml-auto float-right">\n      <div class="btn-group btn-group-toggle diff-styles" data-toggle="buttons" style="visibility: hidden;">\n        <label class="btn btn-default btn-sm form-check-label active unified-diff-button" onclick="swh.revision.showUnifiedDiff(\''),__append(escapeFn(diffData.id)),__append('\')">\n          <input type="radio" name="diffs-switch" id="unified" autocomplete="off" checked="checked"> Unified\n        </label>\n        <label class="btn btn-default btn-sm form-check-label split-diff-button" onclick="swh.revision.showSplitDiff(\''),__append(escapeFn(diffData.id)),__append('\')">\n          <input type="radio" name="diffs-switch" id="side-by-side" autocomplete="off"> Side-by-side\n        </label>\n      </div>\n      <a href="'),__append(escapeFn(diffData.content_url)),__append('" class="btn btn-default btn-sm" role="button">View file</a>\n    </div>\n    <div class="clearfix"></div>\n  </div>\n  <div id="diff_'),__append(escapeFn(diffData.id)),__append('_content" class="collapse show">\n    <div class="swh-diff-loading text-center" id="'),__append(escapeFn(diffData.id)),__append('-loading" style="visibility: hidden;">\n      <img src="'),__append(escapeFn(swhSpinnerSrc)),__append('">\n      <p>Loading diff ...</p>\n    </div>\n    <div class="highlightjs swh-content" style="display: none;" id="'),__append(escapeFn(diffData.id)),__append('-highlightjs">\n      <div id="'),__append(escapeFn(diffData.id)),__append('-unified-diff">\n        <pre><code class="'),__append(escapeFn(diffData.id)),__append('" id="'),__append(escapeFn(diffData.id)),__append('"></code></pre>\n      </div>\n      <div style="width: 100%; display: none;" id="'),__append(escapeFn(diffData.id)),__append('-split-diff">\n        <pre class="float-left" style="width: 50%;"><code class="'),__append(escapeFn(diffData.id)),__append('" id="'),__append(escapeFn(diffData.id)),__append('-from"></code></pre>\n        <pre style="width: 50%;"><code class="'),__append(escapeFn(diffData.id)),__append('" id="'),__append(escapeFn(diffData.id)),__append('-to"></code></pre>\n      </div>\n    </div>\n  </div>\n</div>');return __output}},43511:function(){!function(){"use strict";var e=0,t={};function n(r){if(!r)throw new Error("No options passed to Waypoint constructor");if(!r.element)throw new Error("No element option passed to Waypoint constructor");if(!r.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=n.Adapter.extend({},n.defaults,r),this.element=this.options.element,this.adapter=new n.Adapter(this.element),this.callback=r.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=n.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=n.Context.findOrCreateByElement(this.options.context),n.offsetAliases[this.options.offset]&&(this.options.offset=n.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),t[this.key]=this,e+=1}n.prototype.queueTrigger=function(e){this.group.queueTrigger(this,e)},n.prototype.trigger=function(e){this.enabled&&this.callback&&this.callback.apply(this,e)},n.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete t[this.key]},n.prototype.disable=function(){return this.enabled=!1,this},n.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},n.prototype.next=function(){return this.group.next(this)},n.prototype.previous=function(){return this.group.previous(this)},n.invokeAll=function(e){var n=[];for(var r in t)n.push(t[r]);for(var i=0,o=n.length;i<o;i++)n[i][e]()},n.destroyAll=function(){n.invokeAll("destroy")},n.disableAll=function(){n.invokeAll("disable")},n.enableAll=function(){for(var e in n.Context.refreshAll(),t)t[e].enabled=!0;return this},n.refreshAll=function(){n.Context.refreshAll()},n.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},n.viewportWidth=function(){return document.documentElement.clientWidth},n.adapters=[],n.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},n.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=n}(),function(){"use strict";function e(e){window.setTimeout(e,1e3/60)}var t=0,n={},r=window.Waypoint,i=window.onload;function o(e){this.element=e,this.Adapter=r.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+t,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,n[e.waypointContextKey]=this,t+=1,r.windowContext||(r.windowContext=!0,r.windowContext=new o(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}o.prototype.add=function(e){var t=e.options.horizontal?"horizontal":"vertical";this.waypoints[t][e.key]=e,this.refresh()},o.prototype.checkEmpty=function(){var e=this.Adapter.isEmptyObject(this.waypoints.horizontal),t=this.Adapter.isEmptyObject(this.waypoints.vertical),r=this.element==this.element.window;e&&t&&!r&&(this.adapter.off(".waypoints"),delete n[this.key])},o.prototype.createThrottledResizeHandler=function(){var e=this;function t(){e.handleResize(),e.didResize=!1}this.adapter.on("resize.waypoints",(function(){e.didResize||(e.didResize=!0,r.requestAnimationFrame(t))}))},o.prototype.createThrottledScrollHandler=function(){var e=this;function t(){e.handleScroll(),e.didScroll=!1}this.adapter.on("scroll.waypoints",(function(){e.didScroll&&!r.isTouch||(e.didScroll=!0,r.requestAnimationFrame(t))}))},o.prototype.handleResize=function(){r.Context.refreshAll()},o.prototype.handleScroll=function(){var e={},t={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in t){var r=t[n],i=r.newScroll>r.oldScroll?r.forward:r.backward;for(var o in this.waypoints[n]){var a=this.waypoints[n][o];if(null!==a.triggerPoint){var s=r.oldScroll<a.triggerPoint,l=r.newScroll>=a.triggerPoint;(s&&l||!s&&!l)&&(a.queueTrigger(i),e[a.group.id]=a.group)}}}for(var c in e)e[c].flushTriggers();this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},o.prototype.innerHeight=function(){return this.element==this.element.window?r.viewportHeight():this.adapter.innerHeight()},o.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty()},o.prototype.innerWidth=function(){return this.element==this.element.window?r.viewportWidth():this.adapter.innerWidth()},o.prototype.destroy=function(){var e=[];for(var t in this.waypoints)for(var n in this.waypoints[t])e.push(this.waypoints[t][n]);for(var r=0,i=e.length;r<i;r++)e[r].destroy()},o.prototype.refresh=function(){var e,t=this.element==this.element.window,n=t?void 0:this.adapter.offset(),i={};for(var o in this.handleScroll(),e={horizontal:{contextOffset:t?0:n.left,contextScroll:t?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:t?0:n.top,contextScroll:t?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var a=e[o];for(var s in this.waypoints[o]){var l,c,u,f,d=this.waypoints[o][s],h=d.options.offset,p=d.triggerPoint,_=0,w=null==p;d.element!==d.element.window&&(_=d.adapter.offset()[a.offsetProp]),"function"==typeof h?h=h.apply(d):"string"==typeof h&&(h=parseFloat(h),d.options.offset.indexOf("%")>-1&&(h=Math.ceil(a.contextDimension*h/100))),l=a.contextScroll-a.contextOffset,d.triggerPoint=Math.floor(_+l-h),c=p<a.oldScroll,u=d.triggerPoint>=a.oldScroll,f=!c&&!u,!w&&(c&&u)?(d.queueTrigger(a.backward),i[d.group.id]=d.group):(!w&&f||w&&a.oldScroll>=d.triggerPoint)&&(d.queueTrigger(a.forward),i[d.group.id]=d.group)}}return r.requestAnimationFrame((function(){for(var e in i)i[e].flushTriggers()})),this},o.findOrCreateByElement=function(e){return o.findByElement(e)||new o(e)},o.refreshAll=function(){for(var e in n)n[e].refresh()},o.findByElement=function(e){return n[e.waypointContextKey]},window.onload=function(){i&&i(),o.refreshAll()},r.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},r.Context=o}(),function(){"use strict";function e(e,t){return e.triggerPoint-t.triggerPoint}function t(e,t){return t.triggerPoint-e.triggerPoint}var n={vertical:{},horizontal:{}},r=window.Waypoint;function i(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}i.prototype.add=function(e){this.waypoints.push(e)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var r=this.triggerQueues[n],i="up"===n||"left"===n;r.sort(i?t:e);for(var o=0,a=r.length;o<a;o+=1){var s=r[o];(s.options.continuous||o===r.length-1)&&s.trigger([n])}}this.clearTriggerQueues()},i.prototype.next=function(t){this.waypoints.sort(e);var n=r.Adapter.inArray(t,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},i.prototype.previous=function(t){this.waypoints.sort(e);var n=r.Adapter.inArray(t,this.waypoints);return n?this.waypoints[n-1]:null},i.prototype.queueTrigger=function(e,t){this.triggerQueues[t].push(e)},i.prototype.remove=function(e){var t=r.Adapter.inArray(e,this.waypoints);t>-1&&this.waypoints.splice(t,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(e){return n[e.axis][e.name]||new i(e)},r.Group=i}(),function(){"use strict";var e=window.jQuery,t=window.Waypoint;function n(t){this.$element=e(t)}e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(e,t){n.prototype[t]=function(){var e=Array.prototype.slice.call(arguments);return this.$element[t].apply(this.$element,e)}})),e.each(["extend","inArray","isEmptyObject"],(function(t,r){n[r]=e[r]})),t.adapters.push({name:"jquery",Adapter:n}),t.Adapter=n}(),function(){"use strict";var e=window.Waypoint;function t(t){return function(){var n=[],r=arguments[0];return t.isFunction(arguments[0])&&((r=t.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var i=t.extend({},r,{element:this});"string"==typeof i.context&&(i.context=t(this).closest(i.context)[0]),n.push(new e(i))})),n}}window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()}},__webpack_module_cache__={},inProgress,dataWebpackPrefix,loadStylesheet,installedCssChunks;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=function(e,t){for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t,n){return __webpack_require__.f[n](e,t),t}),[]))},__webpack_require__.u=function(e){return"js/highlightjs.f08af5f59a0929ede3f6.js"},__webpack_require__.miniCssF=function(e){return"css/highlightjs.ae43064ab38a65a04d81.css"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},inProgress={},dataWebpackPrefix="swh.[name]:",__webpack_require__.l=function(e,t,n,r){if(inProgress[e])inProgress[e].push(t);else{var i,o;if(void 0!==n)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==dataWebpackPrefix+n){i=l;break}}i||(o=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,__webpack_require__.nc&&i.setAttribute("nonce",__webpack_require__.nc),i.setAttribute("data-webpack",dataWebpackPrefix+n),i.src=e),inProgress[e]=[t];var c=function(t,n){i.onerror=i.onload=null,clearTimeout(u);var r=inProgress[e];if(delete inProgress[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),o&&document.head.appendChild(i)}},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/static/",loadStylesheet=function(e){return new Promise((function(t,n){var r=__webpack_require__.miniCssF(e),i=__webpack_require__.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var a;if((i=(a=o[r]).getAttribute("data-href"))===e||i===t)return a}}(r,i))return t();!function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode.removeChild(i),r(l)}},i.href=t,document.head.appendChild(i)}(e,i,t,n)}))},installedCssChunks={679:0},__webpack_require__.f.miniCss=function(e,t){installedCssChunks[e]?t.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{399:1}[e]&&t.push(installedCssChunks[e]=loadStylesheet(e).then((function(){installedCssChunks[e]=0}),(function(t){throw delete installedCssChunks[e],t})))},function(){var e={679:0};__webpack_require__.f.j=function(t,n){var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,i){r=e[t]=[n,i]}));n.push(r[2]=i);var o=__webpack_require__.p+__webpack_require__.u(t),a=new Error;__webpack_require__.l(o,(function(n){if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,r[1](a)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,o=n[0],a=n[1],s=n[2],l=0;for(r in a)__webpack_require__.o(a,r)&&(__webpack_require__.m[r]=a[r]);if(s)s(__webpack_require__);for(t&&t(n);l<o.length;l++)i=o[l],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[o[l]]=0},n=self.webpackChunkswh_name_=self.webpackChunkswh_name_||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var __webpack_exports__={};return function(){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{computeAllDiffs:function(){return e.St},computeDiff:function(){return e.D_},formatDiffLineNumbers:function(){return e.OU},fragmentToSelectedDiffLines:function(){return e.EV},initRevisionDiff:function(){return e.qo},parseDiffLineNumbers:function(){return e.sr},selectedDiffLinesToFragment:function(){return e.S0},showSplitDiff:function(){return e.Mo},showUnifiedDiff:function(){return e.n2},initRevisionsLog:function(){return t.o},revsOrderingTypeClicked:function(){return t.i}});var e=__webpack_require__(40485),t=__webpack_require__(84050)}(),__webpack_exports__}()}));
//# sourceMappingURL=revision.439a17cca3c59f6109c0.js.map