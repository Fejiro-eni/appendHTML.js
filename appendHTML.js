


	var DOMParser_support = (function () {
		if (!window.DOMParser) return false;
		var parser = new DOMParser();
		try {
			parser.parseFromString('x', 'text/html');
		} catch(err) {
			return false;
		}
		return true;
	})();

	/**
	 * Convert a template string into HTML DOM nodes
	 * @param  {String} str The template string
	 * @return {Node}       The template HTML
	 */
	var stringToHTML = function (str) {

		// If DOMParser is supported, use it
		if (DOMParser_support) {
			var parser = new DOMParser();
			var doc = parser.parseFromString(str, 'text/html');
			return doc.body.firstChild;
		}

		// Otherwise, fallback to old-school method
		var dom = document.createElement('div');
		dom.innerHTML = str;
		return dom.firstChild;

	};


	Element.prototype.appendHTML = function(str) {
    	this.append(stringToHTML(str));	
	};