(function (w, d) {
	'use strict';

	var TABLE_NAME = 'hljs-ln',
		LINE_NAME = 'hljs-ln-line',
		CODE_BLOCK_NAME = 'hljs-ln-code',
		NUMBERS_BLOCK_NAME = 'hljs-ln-numbers',
		NUMBER_LINE_NAME = 'hljs-ln-n',
		DATA_ATTR_NAME = 'data-line-number';

	// string format
	// https://wcoder.github.io/notes/string-format-for-string-formating-in-javascript
	var format = function (str, args) {
		return str.replace(/\{(\d+)\}/g, function(m, n){
			return args[n] ? args[n] : m;
		});
	};

	if (w.hljs) {
		w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
		w.hljs.lineNumbersBlock = lineNumbersBlock;

		addStyles();
	} else {
		w.console.error('highlight.js not detected!');
	}

	function addStyles () {
		var css = d.createElement('style');
		css.type = 'text/css';
		css.innerHTML = format(
			'.{0}{border-collapse:collapse}\
			.{0} td{padding:0}\
			.{1}:before{content:attr({2})}',
		[
			TABLE_NAME,
			NUMBER_LINE_NAME,
			DATA_ATTR_NAME
		]);
		d.getElementsByTagName('head')[0].appendChild(css);
	}

	function initLineNumbersOnLoad (options) {
		if (d.readyState === 'complete') {
			documentReady(options);
		} else {
			w.addEventListener('DOMContentLoaded', function () {
				documentReady(options);
			});
		}
	}

	function documentReady (options) {
		try {
			var blocks = d.querySelectorAll('code.hljs');

			for (var i in blocks) {
				if (blocks.hasOwnProperty(i)) {
					lineNumbersBlock(blocks[i], options);
				}
			}
		} catch (e) {
			w.console.error('LineNumbers error: ', e);
		}
	}

	function lineNumbersBlock (element, options) {
		if (typeof element !== 'object') return;

		// define options or set default
		options = options || {
			singleLine: false
		};

		// convert options
		var firstLineIndex = !!options.singleLine ? 0 : 1;

        var text = changeMultilineComments(element);
        var lines = getLines(text);

		if (lines.length > firstLineIndex) {
			var html = '';

			for (var i = 0, l = lines.length; i < l; i++) {
				html += format(
					'<tr>\
						<td class="{0}">\
							<div class="{1} {2}" {3}="{5}"></div>\
						</td>\
						<td class="{4}">\
							<div class="{1}">{6}</div>\
						</td>\
					</tr>',
				[
					NUMBERS_BLOCK_NAME,
					LINE_NAME,
					NUMBER_LINE_NAME,
					DATA_ATTR_NAME,
					CODE_BLOCK_NAME,
					i + 1,
					lines[i].length > 0 ? lines[i] : ' '
				]);
			}

			element.innerHTML = format('<table class="{0}">{1}</table>', [ TABLE_NAME, html ]);
		}
	}

	function duplicateMultilineTag(element){
		var result = '';
		var lines = element.innerText.split(/\r\n|\r|\n/g);
		for(var i = 0; i<lines.length; i++){
			element.innerText = lines[i];
			result += element.outerHTML;
			if(i < lines.length -1)
				result += '\n';
		}
		return result;
	}

    function escapeHtml(unsafe) {
        return unsafe.replace(/&/g, "&amp;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;")
                     .replace(/"/g, "&quot;")
                     .replace(/'/g, "&#039;");
    }

	function changeMultilineComments(element) {
		var result = '';
		var children = element.childNodes;
		for(var child in children) {
			if(children.hasOwnProperty(child)) {
                if(children[child].className === "hljs-comment" ||
                   children[child].className === "hljs-string") {
					result += duplicateMultilineTag(children[child]);
				}
				else if(children[child].childNodes.length) {
					result += children[child].outerHTML;
				}
				else {
					result += escapeHtml(children[child].textContent);
				}
			}
        }
		return result;
	}

	function getLines(text) {
		if (text.length === 0) return [];
		return text.split(/\r\n|\r|\n/g);
	}

}(window, document));