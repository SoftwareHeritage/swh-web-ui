!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vault=e():(t.swh=t.swh||{},t.swh.vault=e())}(window,function(){return function(t){var e={};function o(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/",o(o.s=456)}({15:function(t,e,o){"use strict";function a(t){if(!t.ok)throw t;return t}function i(t){for(var e=0;e<t.length;++e)if(!t[e].ok)throw t[e];return t}function r(t){return"/static/"+t}o.d(e,"a",function(){return a}),o.d(e,"b",function(){return i}),o.d(e,"c",function(){return r})},211:function(t,e,o){"use strict";o.r(e);o(455);var a=o(15),i='<div class="progress">\n                  <div class="progress-bar progress-bar-success progress-bar-striped"\n                       role="progressbar" aria-valuenow="100" aria-valuemin="0"\n                       aria-valuemax="100" style="width: 100%;height: 100%;">\n                  </div>\n                </div>;',r=5e3,n=void 0;function c(t,e){"new"===e.status?t.css("background-color","rgba(128, 128, 128, 0.5)"):"pending"===e.status?t.css("background-color","rgba(0, 0, 255, 0.5)"):"done"===e.status?t.css("background-color","#5cb85c"):"failed"===e.status&&(t.css("background-color","rgba(255, 0, 0, 0.5)"),t.css("background-image","none")),t.text(e.progress_message||e.status),"new"===e.status||"pending"===e.status?t.addClass("progress-bar-animated"):t.removeClass("progress-bar-striped")}var s=void 0;function l(t){s=null,fetch(t,{credentials:"same-origin"}).then(function(e){if(e.ok)$("#vault-fetch-iframe").attr("src",t);else{for(var o=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks")),a=0;a<o.length;++a)if(o[a].fetch_url===t){s=o[a];break}$("#vault-recook-object-modal").modal("show")}})}function d(){if(s){clearTimeout(n);var t=void 0;t="directory"===s.object_type?Urls.vault_cook_directory(s.object_id):Urls.vault_cook_revision_gitfast(s.object_id),s.email&&(t+="?email="+s.email),fetch(t,{credentials:"same-origin",method:"POST"}).then(a.a).then(function(){s.status="new";for(var t=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks")),e=0;e<t.length;++e)if(t[e].object_id===s.object_id){t[e]=s;break}localStorage.setItem("swh-vault-cooking-tasks",JSON.stringify(t)),u(),$("#vault-recook-object-modal").modal("hide")}).catch(function(){u(),$("#vault-recook-object-modal").modal("hide")})}}function u(){var t=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks"));if(!t||0===t.length)return $(".swh-vault-table tbody tr").remove(),void(n=setTimeout(u,r));for(var e=[],o={},s=[],l=0;l<t.length;++l){var d=t[l];s.push(d.object_id),o[d.object_id]=d;var f=void 0;f="directory"===d.object_type?Urls.vault_cook_directory(d.object_id):Urls.vault_cook_revision_gitfast(d.object_id),"done"!==d.status&&"failed"!==d.status&&e.push(fetch(f,{credentials:"same-origin"}))}$(".swh-vault-table tbody tr").each(function(t,e){var o=$(e).find(".vault-object-id").data("object-id");-1===$.inArray(o,s)&&$(e).remove()}),Promise.all(e).then(a.b).then(function(t){return Promise.all(t.map(function(t){return t.json()}))}).then(function(e){for(var a=$("#vault-cooking-tasks tbody"),s=0;s<e.length;++s){var l=o[e[s].obj_id];l.status=e[s].status,l.fetch_url=e[s].fetch_url,l.progress_message=e[s].progress_message}for(var d=0;d<t.length;++d){var f=t[d],v=$("#vault-task-"+f.object_id);if(v.length){c(v.find(".progress-bar"),f);var b=v.find(".vault-dl-link");"done"===f.status?b[0].innerHTML='<button class="btn btn-default btn-sm" onclick="swh.vault.fetchCookedObject(\''+f.fetch_url+'\')"><i class="fa fa-download fa-fw" aria-hidden="true"></i>Download</button>':"failed"===f.status?b[0].innerHTML="":"new"===f.status&&(b[0].innerHTML="Waiting for download link to be available")}else{var g=void 0;g="directory"===f.object_type?Urls.browse_directory(f.object_id):Urls.browse_revision(f.object_id);var h=$.parseHTML(i)[0];c($(h).find(".progress-bar"),f);var m=void 0;m="directory"===f.object_type?'<tr id="vault-task-'+f.object_id+'" title="Once downloaded, the directory can be extracted with the following command:\n\n$ tar xvzf '+f.object_id+'.tar.gz">':'<tr id="vault-task-'+f.object_id+'"  title="Once downloaded, the git repository can be imported with the following commands:\n\n$ git init\n$ zcat '+f.object_id+'.gitfast.gz | git fast-import">',m+='<td><input type="checkbox" class="vault-task-toggle-selection"/></td>',"directory"===f.object_type?m+='<td style="width: 120px"><i class="fa fa-folder fa-fw" aria-hidden="true"></i>directory</td>':m+='<td style="width: 120px"><i class="octicon octicon-git-commit fa-fw"></i>revision</td>',m+='<td class="vault-object-id" data-object-id="'+f.object_id+'"><a href="'+g+'">'+f.object_id+"</a></td>",m+='<td style="width: 350px">'+h.outerHTML+"</td>";var p="Waiting for download link to be available";"done"===f.status?p='<button class="btn btn-default btn-sm" onclick="swh.vault.fetchCookedObject(\''+f.fetch_url+'\')"><i class="fa fa-download fa-fw" aria-hidden="true"></i>Download</button>':"failed"===f.status&&(p=""),m+='<td class="vault-dl-link" style="width: 320px">'+p+"</td>",m+="</tr>",a.prepend(m)}}localStorage.setItem("swh-vault-cooking-tasks",JSON.stringify(t)),n=setTimeout(u,r)}).catch(function(){})}function f(){$("#vault-tasks-toggle-selection").change(function(t){$(".vault-task-toggle-selection").prop("checked",t.currentTarget.checked)}),$("#vault-remove-tasks").click(function(){clearTimeout(n);var t=[];$(".swh-vault-table tbody tr").each(function(e,o){if($(o).find(".vault-task-toggle-selection").prop("checked")){var a=$(o).find(".vault-object-id").data("object-id");t.push(a),$(o).remove()}});var e=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks"));e=$.grep(e,function(e){return-1===$.inArray(e.object_id,t)}),localStorage.setItem("swh-vault-cooking-tasks",JSON.stringify(e)),$("#vault-tasks-toggle-selection").prop("checked",!1),n=setTimeout(u,r)}),n=setTimeout(u,r),$(document).on("shown.bs.tab",'a[data-toggle="tab"]',function(t){"Vault"===t.currentTarget.text.trim()&&(clearTimeout(n),u())}),window.onfocus=function(){clearTimeout(n),u()}}function v(t){var e=JSON.parse(localStorage.getItem("swh-vault-cooking-tasks"));if(e||(e=[]),void 0===e.find(function(e){return e.object_type===t.object_type&&e.object_id===t.object_id})){var o=void 0;o="directory"===t.object_type?Urls.vault_cook_directory(t.object_id):Urls.vault_cook_revision_gitfast(t.object_id),t.email&&(o+="?email="+t.email),fetch(o,{credentials:"same-origin",method:"POST"}).then(a.a).then(function(){e.push(t),localStorage.setItem("swh-vault-cooking-tasks",JSON.stringify(e)),$("#vault-cook-directory-modal").modal("hide"),$("#vault-cook-revision-modal").modal("hide"),window.location=Urls.browse_vault()}).catch(function(){$("#vault-cook-directory-modal").modal("hide"),$("#vault-cook-revision-modal").modal("hide")})}else window.location=Urls.browse_vault()}function b(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}function g(t){var e=$("#swh-vault-directory-email").val().trim();!e||b(e)?v({object_type:"directory",object_id:t,email:e,status:"new"}):$("#invalid-email-modal").modal("show")}function h(t){var e=$("#swh-vault-revision-email").val().trim();!e||b(e)?v({object_type:"revision",object_id:t,email:e,status:"new"}):$("#invalid-email-modal").modal("show")}function m(){$(document).ready(function(){$(".swh-browse-top-navigation").append($("#vault-cook-directory-modal")),$(".swh-browse-top-navigation").append($("#vault-cook-revision-modal")),$(".swh-browse-top-navigation").append($("#invalid-email-modal"))})}o.d(e,"fetchCookedObject",function(){return l}),o.d(e,"recookObject",function(){return d}),o.d(e,"initUi",function(){return f}),o.d(e,"cookDirectoryArchive",function(){return g}),o.d(e,"cookRevisionArchive",function(){return h}),o.d(e,"initTaskCreationUi",function(){return m})},455:function(t,e,o){},456:function(t,e,o){t.exports=o(211)}})});
//# vault.91d83e4af4b3d7803a38.js.map