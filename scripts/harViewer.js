/* See license.txt for terms of usage */

/**
 * @license RequireJS i18n 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */

/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/** 
 * JSONSchema Validator - Validates JavaScript objects using JSON Schemas 
 *	(http://www.json.com/json-schema-proposal/)
 *
 * Copyright (c) 2007 Kris Zyp SitePen (www.sitepen.com)
 * Licensed under the MIT (MIT-LICENSE.txt) license.
To use the validator call JSONSchema.validate with an instance object and an optional schema object.
If a schema is provided, it will be used to validate. If the instance object refers to a schema (self-validating), 
that schema will be used to validate and the schema parameter is not necessary (if both exist, 
both validations will occur). 
The validate method will return an array of validation errors. If there are no errors, then an 
empty list will be returned. A validation error will have two properties: 
"property" which indicates which property had the error
"message" which indicates what the error was
 */

/**
 * Code Syntax Highlighter.
 * Version 1.5.1
 * Copyright (C) 2004-2007 Alex Gorbatchev.
 * http://www.dreamprojections.com/syntaxhighlighter/
 * 
 * This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General 
 * Public License as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) 
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more 
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this library; if not, write to 
 * the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA 
 */

/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/*
	Downloadify: Client Side File Creation
	JavaScript + Flash Library
	
	Version: 0.1

	Copyright (c) 2009 Douglas C. Neiner

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

/*
Copyright Jason E. Smith 2008 Licensed under the Apache License, Version 2.0 (the "License");
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/

define("core/lib", ["core/trace"], function (e) {
		var t = {},
			n = navigator.userAgent.toLowerCase();
		t.isFirefox = /firefox/.test(n), t.isOpera = /opera/.test(n), t.isWebkit = /webkit/.test(n), t.isSafari = /webkit/.test(n), t.isIE = /msie/.test(n) && !/opera/.test(n), t.isIE6 = /msie 6/i.test(navigator.appVersion), t.browserVersion = (n.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1], t.isIElt8 = t.isIE && t.browserVersion - 0 < 8, t.supportsSelectElementText = window.getSelection && window.document.createRange || window.document.body.createTextRange, t.extend = function (n, r) {
			var i = {};
			return t.append(i, n), t.append(i, r), i
		}, t.append = function (e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}, t.bind = function () {
			var e = t.cloneArray(arguments),
				n = e.shift(),
				r = e.shift();
			return function () {
				return n.apply(r, t.arrayInsert(t.cloneArray(e), 0, arguments))
			}
		}, t.bindFixed = function () {
			var e = t.cloneArray(arguments),
				n = e.shift(),
				r = e.shift();
			return function () {
				return n.apply(r, e)
			}
		}, t.dispatch = function (t, n, r) {
			for (var i = 0; t && i < t.length; i++) {
				var s = t[i];
				if (s[n]) try {
					s[n].apply(s, r)
				} catch (o) {
					e.exception(o)
				}
			}
		}, t.dispatch2 = function (t, n, r) {
			for (var i = 0; i < t.length; i++) {
				var s = t[i];
				if (s[n]) try {
					var o = s[n].apply(s, r);
					if (o) return o
				} catch (u) {
					e.exception(u)
				}
			}
		};
		var r = Object.prototype.toString,
			i = /^\s*function(\s+[\w_$][\w\d_$]*)?\s*\(/;
		return t.isArray = function (e) {
			return jQuery.isArray(e)
		}, t.isFunction = function (e) {
			return e ? r.call(e) === "[object Function]" || t.isIE && typeof e != "string" && i.test("" + e) : !1
		}, t.isAncestor = function (e, t) {
			for (var n = e; n; n = n.parentNode)
				if (n == t) return !0;
			return !1
		}, t.fixEvent = function (e) {
			return jQuery.event.fix(e || window.event)
		}, t.fireEvent = function (e, t) {
			if (document.createEvent) {
				var n = document.createEvent("Events");
				return n.initEvent(t, !0, !1), !e.dispatchEvent(n)
			}
		}, t.cancelEvent = function (e) {
			var n = t.fixEvent(e);
			n.stopPropagation(), n.preventDefault()
		}, t.addEventListener = function (e, t, n, r) {
			r = r || !1, e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n)
		}, t.removeEventListener = function (e, t, n, r) {
			r = r || !1, e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent("on" + t, n)
		}, t.isLeftClick = function (e) {
			return e.button == 0 && t.noKeyModifiers(e)
		}, t.noKeyModifiers = function (e) {
			return !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey
		}, t.isControlClick = function (e) {
			return e.button == 0 && t.isControl(e)
		}, t.isShiftClick = function (e) {
			return e.button == 0 && t.isShift(e)
		}, t.isControl = function (e) {
			return (e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey
		}, t.isAlt = function (e) {
			return e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey
		}, t.isAltClick = function (e) {
			return e.button == 0 && t.isAlt(e)
		}, t.isControlShift = function (e) {
			return (e.metaKey || e.ctrlKey) && e.shiftKey && !e.altKey
		}, t.isShift = function (e) {
			return e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey
		}, t.inflateRect = function (e, t, n) {
			return {
				top: e.top - n,
				left: e.left - t,
				height: e.height + 2 * n,
				width: e.width + 2 * t
			}
		}, t.pointInRect = function (e, t, n) {
			return n >= e.top && n <= e.top + e.height && t >= e.left && t <= e.left + e.width
		}, t.cloneArray = function (e, t) {
			var n = [];
			if (t)
				for (var r = 0; r < e.length; ++r) n.push(t(e[r]));
			else
				for (var r = 0; r < e.length; ++r) n.push(e[r]);
			return n
		}, t.arrayInsert = function (e, t, n) {
			for (var r = 0; r < n.length; ++r) e.splice(r + t, 0, n[r]);
			return e
		}, t.remove = function (e, t) {
			for (var n = 0; n < e.length; ++n)
				if (e[n] == t) return e.splice(n, 1), !0;
			return !1
		}, t.formatSize = function (e) {
			var t = 1;
			t = t > 2 ? 2 : t, t = t < -1 ? -1 : t;
			if (t == -1) return e + " B";
			var n = Math.pow(10, t);
			return e == -1 || e == undefined ? "?" : e == 0 ? "0" : e < 1024 ? e + " B" : e < 1048576 ? Math.round(e / 1024 * n) / n + " KB" : Math.round(e / 1048576 * n) / n + " MB"
		}, t.formatTime = function (e) {
			return e == -1 ? "-" : e < 1e3 ? e + "ms" : e < 6e4 ? Math.ceil(e / 10) / 100 + "s" : Math.ceil(e / 6e4 * 100) / 100 + "m"
		}, t.formatNumber = function (e) {
			e += "";
			var t = e.split("."),
				n = t[0],
				r = t.length > 1 ? "." + t[1] : "",
				i = /(\d+)(\d{3})/;
			while (i.test(n)) n = n.replace(i, "$1 $2");
			return n + r
		}, t.formatString = function (e) {
			var n = t.cloneArray(arguments),
				e = n.shift();
			for (var r = 0; r < n.length; r++) {
				var i = n[r].toString();
				e = e.replace("%S", i)
			}
			return e
		}, t.parseISO8601 = function (e) {
			var n = t.fromISOString(e);
			return n ? n.getTime() : null
		}, t.fromISOString = function (e) {
			if (!e) return null;
			var t = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/,
				n = new RegExp(t),
				r = e.toString().match(new RegExp(t));
			if (!r) return null;
			var i = new Date;
			i.setUTCDate(1), i.setUTCFullYear(parseInt(r[1], 10)), i.setUTCMonth(parseInt(r[3], 10) - 1), i.setUTCDate(parseInt(r[5], 10)), i.setUTCHours(parseInt(r[7], 10)), i.setUTCMinutes(parseInt(r[9], 10)), i.setUTCSeconds(parseInt(r[11], 10)), r[12] ? i.setUTCMilliseconds(parseFloat(r[12]) * 1e3) : i.setUTCMilliseconds(0);
			if (r[13] != "Z") {
				var s = r[15] * 60 + parseInt(r[17], 10);
				s *= r[14] == "-" ? -1 : 1, i.setTime(i.getTime() - s * 60 * 1e3)
			}
			return i
		}, t.toISOString = function (e) {
			function t(e, t) {
				t || (t = 2);
				var n = new String(e);
				while (n.length < t) n = "0" + n;
				return n
			}
			var n = e.getUTCFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + "T" + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds(), 3),
				r = e.getTimezoneOffset(),
				i = Math.floor(r / 60),
				s = Math.floor(r % 60),
				o = (r > 0 ? "-" : "+") + t(Math.abs(i)) + ":" + t(Math.abs(s));
			return n + o
		}, t.getFileName = function (n) {
			try {
				var r = t.splitURLBase(n);
				return r.name
			} catch (i) {
				e.log(unescape(n))
			}
			return n
		}, t.getFileExtension = function (e) {
			if (!e) return null;
			var t = e.indexOf("?");
			t != -1 && (e = e.substr(0, t));
			var n = e.lastIndexOf(".");
			return e.substr(n + 1)
		}, t.splitURLBase = function (e) {
			return t.isDataURL(e) ? t.splitDataURL(e) : t.splitURLTrue(e)
		}, t.isDataURL = function (e) {
			return e && e.substr(0, 5) == "data:"
		}, t.splitDataURL = function (e) {
			var n = e.indexOf(":", 3);
			if (n != 4) return !1;
			var r = e.indexOf(",", n + 1);
			if (r < n) return !1;
			var i = {
					encodedContent: e.substr(r + 1)
				},
				s = e.substr(n + 1, r),
				o = s.split(";");
			for (var u = 0; u < o.length; u++) {
				var a = o[u].split("=");
				a.length == 2 && (i[a[0]] = a[1])
			}
			if (i.hasOwnProperty("fileName")) {
				var f = decodeURIComponent(i.fileName),
					l = t.splitURLTrue(f);
				if (i.hasOwnProperty("baseLineNumber")) {
					i.path = l.path, i.line = i.baseLineNumber;
					var c = decodeURIComponent(i.encodedContent.substr(0, 200)).replace(/\s*$/, "");
					i.name = "eval->" + c
				} else i.name = l.name, i.path = l.path
			} else i.hasOwnProperty("path") || (i.path = "data:"), i.hasOwnProperty("name") || (i.name = decodeURIComponent(i.encodedContent.substr(0, 200)).replace(/\s*$/, ""));
			return i
		}, t.splitURLTrue = function (e) {
			var t = /:\/{1,3}(.*?)\/([^\/]*?)\/?($|\?.*)/,
				n = t.exec(e);
			return n ? n[2] ? {
				path: n[1],
				name: n[2] + n[3]
			} : {
				path: n[1],
				name: n[1]
			} : {
				name: e,
				path: e
			}
		}, t.getURLParameter = function (e) {
			var t = window.location.search.substring(1),
				n = t.split("&");
			for (var r = 0; r < n.length; r++) {
				var i = n[r].split("=");
				if (i[0] == e) return unescape(i[1])
			}
			return null
		}, t.getURLParameters = function (e) {
			var t = [],
				n = window.location.search.substring(1),
				r = n.split("&");
			for (var i = 0; i < r.length; i++) {
				var s = r[i].split("=");
				s[0] == e && t.push(unescape(s[1]))
			}
			return t
		}, t.getHashParameters = function (e) {
			var t = [],
				n = window.location.hash.substring(1),
				r = n.split("&");
			for (var i = 0; i < r.length; i++) {
				var s = r[i].split("=");
				s[0] == e && t.push(unescape(s[1]))
			}
			return t
		}, t.parseURLParams = function (e) {
			var n = e ? e.indexOf("?") : -1;
			if (n == -1) return [];
			var r = e.substr(n + 1),
				i = r.lastIndexOf("#");
			return i != -1 && (r = r.substr(0, i)), r ? t.parseURLEncodedText(r) : []
		}, t.parseURLEncodedText = function (e, n) {
			function s(e) {
				try {
					return decodeURIComponent(e)
				} catch (t) {
					return decodeURIComponent(unescape(e))
				}
			}
			var r = 25e3,
				i = [];
			if (e == "") return i;
			e = e.replace(/\+/g, " ");
			var o = e.split("&");
			for (var u = 0; u < o.length; ++u) try {
				var a = o[u].indexOf("=");
				if (a != -1) {
					var f = o[u].substring(0, a),
						l = o[u].substring(a + 1);
					l.length > r && !n && (l = t.$STR("LargeData")), i.push({
						name: s(f),
						value: s(l)
					})
				} else {
					var f = o[u];
					i.push({
						name: s(f),
						value: ""
					})
				}
			} catch (c) {}
			return i.sort(function (e, t) {
				return e.name <= t.name ? -1 : 1
			}), i
		}, t.getBody = function (e) {
			if (e.body) return e.body;
			var t = e.getElementsByTagName("body")[0];
			return t ? t : null
		}, t.getHead = function (e) {
			return e.getElementsByTagName("head")[0]
		}, t.getAncestorByClass = function (e, n) {
			for (var r = e; r; r = r.parentNode)
				if (t.hasClass(r, n)) return r;
			return null
		}, t.$ = function () {
			return t.getElementByClass.apply(this, arguments)
		}, t.getElementByClass = function (e, n) {
			if (!e) return null;
			var r = t.cloneArray(arguments);
			r.splice(0, 1);
			for (var i = e.firstChild; i; i = i.nextSibling) {
				var s = t.cloneArray(r);
				s.unshift(i);
				if (t.hasClass.apply(this, s)) return i;
				var o = t.getElementByClass.apply(this, s);
				if (o) return o
			}
			return null
		}, t.getElementsByClass = function (e, n) {
			function s(e, n, r) {
				for (var i = e.firstChild; i; i = i.nextSibling) {
					var o = t.cloneArray(n);
					o.unshift(i), t.hasClass.apply(null, o) && r.push(i), s(i, n, r)
				}
			}
			if (e.querySelectorAll) {
				var r = t.cloneArray(arguments);
				r.shift();
				var i = "." + r.join(".");
				return e.querySelectorAll(i)
			}
			var o = [],
				r = t.cloneArray(arguments);
			return r.shift(), s(e, r, o), o
		}, t.getChildByClass = function (e) {
			for (var n = 1; n < arguments.length; ++n) {
				var r = arguments[n],
					i = e.firstChild;
				e = null;
				for (; i; i = i.nextSibling)
					if (t.hasClass(i, r)) {
						e = i;
						break
					}
			}
			return e
		}, t.eraseNode = function (e) {
			while (e.lastChild) e.removeChild(e.lastChild)
		}, t.clearNode = function (e) {
			e.innerHTML = ""
		}, t.hasClass = function (e, t) {
			if (!e || e.nodeType != 1) return !1;
			for (var n = 1; n < arguments.length; ++n) {
				var t = arguments[n],
					r = e.className;
				if (!r || r.indexOf(t + " ") == -1) return !1
			}
			return !0
		}, t.setClass = function (e, n) {
			e && !t.hasClass(e, n) && (e.className += " " + n + " ")
		}, t.removeClass = function (e, t) {
			if (e && e.className) {
				var n = e.className.indexOf(t);
				if (n >= 0) {
					var r = t.length;
					e.className = e.className.substr(0, n - 1) + e.className.substr(n + r)
				}
			}
		}, t.toggleClass = function (e, n) {
			return t.hasClass(e, n) ? (t.removeClass(e, n), !1) : (t.setClass(e, n), !0)
		}, t.setClassTimed = function (e, n, r) {
			r || (r = 1300), e.__setClassTimeout ? clearTimeout(e.__setClassTimeout) : t.setClass(e, n), e.__setClassTimeout = setTimeout(function () {
				delete e.__setClassTimeout, t.removeClass(e, n)
			}, r)
		}, t.startsWith = function (e, t, n) {
			return n = n || 0, e.indexOf(t, n) === n
		}, t.trim = function (e) {
			return e.replace(/^\s*|\s*$/g, "")
		}, t.wrapText = function (e, n) {
			var r = /[^A-Za-z_$0-9'"-]/,
				i = [],
				s = 100,
				o = t.splitLines(e);
			for (var u = 0; u < o.length; ++u) {
				var a = o[u];
				while (a.length > s) {
					var f = r.exec(a.substr(s, 100)),
						l = s + (f ? f.index : 0),
						c = a.substr(0, l);
					a = a.substr(l), n || i.push("<pre>"), i.push(n ? c : t.escapeHTML(c)), n || i.push("</pre>")
				}
				n || i.push("<pre>"), i.push(n ? a : t.escapeHTML(a)), n || i.push("</pre>")
			}
			return i.join(n ? "\n" : "")
		}, t.insertWrappedText = function (e, n, r) {
			n.innerHTML = "<pre>" + t.wrapText(e, r) + "</pre>"
		}, t.splitLines = function (e) {
			var t = /\r\n|\r|\n/;
			if (!e) return [];
			if (e.split) return e.split(t);
			var n = e + "",
				r = n.split(t);
			return r
		}, t.getPrettyDomain = function (e) {
			var t = /^(?!data:)[^:]+:\/{1,3}(www\.)?([^\/]{1,256})/.exec(e);
			return t ? t[2] : ""
		}, t.escapeHTML = function (e) {
			function t(e) {
				switch (e) {
					case "<":
						return "&lt;";
					case ">":
						return "&gt;";
					case "&":
						return "&amp;";
					case "'":
						return "&#39;";
					case '"':
						return "&quot;"
				}
				return "?"
			}
			return String(e).replace(/[<>&"']/g, t)
		}, t.cropString = function (e, n) {
			e += "";
			if (!n) var r = 50;
			else var r = n / 2;
			return e.length > n ? t.escapeNewLines(e.substr(0, r) + "..." + e.substr(e.length - r)) : t.escapeNewLines(e)
		}, t.escapeNewLines = function (e) {
			return e.replace(/\r/g, "\\r").replace(/\n/g, "\\n")
		}, t.cloneJSON = function (t) {
			if (t == null || typeof t != "object") return t;
			try {
				var n = t.constructor();
				for (var r in t) n[r] = this.cloneJSON(t[r]);
				return n
			} catch (i) {
				e.exception(i)
			}
			return null
		}, t.getOverflowParent = function (e) {
			for (var t = e.parentNode; t; t = t.offsetParent)
				if (t.scrollHeight > t.offsetHeight) return t
		}, t.getElementBox = function (e) {
			var n = {};
			if (e.getBoundingClientRect) {
				var r = e.getBoundingClientRect(),
					i = t.isIE ? document.body.clientTop || document.documentElement.clientTop : 0,
					s = t.getWindowScrollPosition();
				n.top = Math.round(r.top - i + s.top), n.left = Math.round(r.left - i + s.left), n.height = Math.round(r.bottom - r.top), n.width = Math.round(r.right - r.left)
			} else {
				var o = t.getElementPosition(e);
				n.top = o.top, n.left = o.left, n.height = e.offsetHeight, n.width = e.offsetWidth
			}
			return n
		}, t.getElementPosition = function (e) {
			var t = 0,
				n = 0;
			do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
			return {
				left: t,
				top: n
			}
		}, t.getWindowSize = function () {
			var e = 0,
				t = 0,
				n;
			return typeof window.innerWidth == "number" ? (e = window.innerWidth, t = window.innerHeight) : (n = document.documentElement) && (n.clientHeight || n.clientWidth) ? (e = n.clientWidth, t = n.clientHeight) : (n = document.body) && (n.clientHeight || n.clientWidth) && (e = n.clientWidth, t = n.clientHeight), {
				width: e,
				height: t
			}
		}, t.getWindowScrollSize = function () {
			var e = 0,
				n = 0,
				r;
			return !t.isIEQuiksMode && (r = document.documentElement) && (r.scrollHeight || r.scrollWidth) && (e = r.scrollWidth, n = r.scrollHeight), (r = document.body) && (r.scrollHeight || r.scrollWidth) && (r.scrollWidth > e || r.scrollHeight > n) && (e = r.scrollWidth, n = r.scrollHeight), {
				width: e,
				height: n
			}
		}, t.getWindowScrollPosition = function () {
			var e = 0,
				t = 0,
				n;
			return typeof window.pageYOffset == "number" ? (e = window.pageYOffset, t = window.pageXOffset) : (n = document.body) && (n.scrollTop || n.scrollLeft) ? (e = n.scrollTop, t = n.scrollLeft) : (n = document.documentElement) && (n.scrollTop || n.scrollLeft) && (e = n.scrollTop, t = n.scrollLeft), {
				top: e,
				left: t
			}
		}, t.scrollIntoCenterView = function (e, n, r, i) {
			if (!e) return;
			n || (n = t.getOverflowParent(e));
			if (!n) return;
			var s = t.getClientOffset(e);
			if (!i) {
				var o = s.y - n.scrollTop,
					u = n.scrollTop + n.clientHeight - (s.y + e.offsetHeight);
				if (o < 0 || u < 0) {
					var a = s.y - n.clientHeight / 2;
					n.scrollTop = a
				}
			}
			if (!r) {
				var f = s.x - n.scrollLeft,
					l = n.scrollLeft + n.clientWidth - (s.x + e.clientWidth);
				if (f < 0 || l < 0) {
					var c = s.x - n.clientWidth / 2;
					n.scrollLeft = c
				}
			}
		}, t.getClientOffset = function (e) {
			function t(e, n, r) {
				var i = e.offsetParent,
					s = r.getComputedStyle(e, "");
				e.offsetLeft && (n.x += e.offsetLeft + parseInt(s.borderLeftWidth)), e.offsetTop && (n.y += e.offsetTop + parseInt(s.borderTopWidth)), i ? i.nodeType == 1 && t(i, n, r) : e.ownerDocument.defaultView.frameElement && t(e.ownerDocument.defaultView.frameElement, n, e.ownerDocument.defaultView)
			}
			var n = {
				x: 0,
				y: 0
			};
			if (e) {
				var r = e.ownerDocument.defaultView;
				t(e, n, r)
			}
			return n
		}, t.addStyleSheet = function (e, n) {
			if (e.getElementById(n)) return;
			var r = e.createElement("link");
			r.type = "text/css", r.rel = "stylesheet", r.href = n, r.setAttribute("id", n);
			var i = t.getHead(e);
			i.appendChild(r)
		}, t.selectElementText = function (e, t, n) {
			var r = window,
				i = r.document;
			if (r.getSelection && i.createRange) {
				var s = r.getSelection(),
					o = i.createRange();
				o.setStart(e, t), o.setEnd(e, n), s.removeAllRanges(), s.addRange(o)
			} else i.body.createTextRange && (o = i.body.createTextRange(), o.moveToElementText(e), o.select())
		}, t
	}), define("domplate/tabView", ["domplate/domplate", "core/lib", "core/trace"], function (Domplate, Lib, Trace) {
		with(Domplate) {
			var TabViewTempl = domplate({
				tag: TABLE({
					"class": "tabView",
					cellpadding: 0,
					cellspacing: 0,
					_repObject: "$tabView"
				}, TBODY(TR({
					"class": "tabViewRow"
				}, TD({
					"class": "tabViewCol",
					valign: "top"
				}, TAG("$tabList", {
					tabView: "$tabView"
				}))))),
				tabList: DIV({
					"class": "tabViewBody",
					onclick: "$onClickTab"
				}, DIV({
					"class": "$tabView.id\\Bar tabBar"
				}), DIV({
					"class": "$tabView.id\\Bodies tabBodies"
				})),
				tabHeaderTag: A({
					"class": "$tab.id\\Tab tab",
					view: "$tab.id",
					_repObject: "$tab"
				}, "$tab.label"),
				tabBodyTag: DIV({
					"class": "tab$tab.id\\Body tabBody",
					_repObject: "$tab"
				}),
				hideTab: function (e) {
					return !1
				},
				onClickTab: function (e) {
					var t = Lib.fixEvent(e),
						n = this.getTabView(t.target);
					n.onClickTab(t)
				},
				getTabView: function (e) {
					var t = Lib.getAncestorByClass(e, "tabView");
					return t.repObject
				}
			});

			function TabView(e) {
				this.id = e, this.tabs = [], this.listeners = [], this.tabBarVisibility = !0
			}
			return TabView.prototype = {
				appendTab: function (e) {
					return this.tabs.push(e), e.tabView = this, e
				},
				removeTab: function (e) {
					for (var t in this.tabs) {
						var n = this.tabs[t];
						if (n.id == e) {
							this.tabs.splice(t, 1);
							break
						}
					}
				},
				getTab: function (e) {
					for (var t in this.tabs) {
						var n = this.tabs[t];
						if (n.id == e) return n
					}
				},
				selectTabByName: function (e) {
					var t = Lib.getElementByClass(this.element, e + "Tab");
					t && this.selectTab(t)
				},
				showTabBar: function (e) {
					this.element ? e ? this.element.removeAttribute("hideTabBar") : this.element.setAttribute("hideTabBar", "true") : this.tabBarVisibility = e
				},
				addListener: function (e) {
					this.listeners.push(e)
				},
				removeListener: function (e) {
					Lib.remove(this.listeners, e)
				},
				onClickTab: function (e) {
					var t = Lib.getAncestorByClass(e.target, "tab");
					t && this.selectTab(t)
				},
				selectTab: function (e) {
					if (!Lib.hasClass(e, "tab")) return;
					if (Lib.hasClass(e, "selected") && e._updated) return;
					var t = e.getAttribute("view");
					if (!t) return;
					var n = Lib.getAncestorByClass(e, "tabViewBody");
					n.selectedTab && (n.selectedTab.removeAttribute("selected"), n.selectedBody.removeAttribute("selected"), Lib.removeClass(n.selectedTab, "selected"), Lib.removeClass(n.selectedBody, "selected"));
					var r = Lib.getElementByClass(n, "tab" + t + "Body");
					r || Trace.error("TabView.selectTab; Missing tab body", e), n.selectedTab = e, n.selectedBody = r, n.selectedTab.setAttribute("selected", "true"), n.selectedBody.setAttribute("selected", "true"), Lib.setClass(n.selectedBody, "selected"), Lib.setClass(n.selectedTab, "selected"), this.updateTabBody(n, t)
				},
				updateTabBody: function (e, t) {
					var n = e.selectedTab.repObject;
					if (n._body._updated) return;
					n._body._updated = !0, n.bodyTag && n.bodyTag.replace({
						tab: n
					}, n._body), n && n.onUpdateBody && n.onUpdateBody(this, n._body);
					for (var r = 0; r < this.listeners.length; r++) {
						var i = this.listeners[r];
						i.onUpdateBody && i.onUpdateBody(this, n._body)
					}
				},
				render: function (e) {
					this.element = TabViewTempl.tag.replace({
						tabView: this
					}, e, TabViewTempl), Lib.setClass(this.element, this.id), this.showTabBar(this.tabBarVisibility);
					for (var t in this.tabs) {
						var n = this.tabs[t],
							r = n.tabHeaderTag ? n.tabHeaderTag : TabViewTempl.tabHeaderTag,
							i = n.tabBodyTag ? n.tabBodyTag : TabViewTempl.tabBodyTag;
						try {
							n._header = r.append({
								tab: n
							}, Lib.$(e, "tabBar")), n._body = i.append({
								tab: n
							}, Lib.$(e, "tabBodies"))
						} catch (s) {
							Trace.exception("TabView.appendTab; Exception ", s)
						}
					}
					return this.element
				}
			}, TabView.Tab = function () {}, TabView.Tab.prototype = {
				invalidate: function () {
					this._updated = !1
				},
				select: function () {
					this.tabView.selectTabByName(this.id)
				}
			}, TabView
		}
	}), define("core/cookies", ["core/lib"], function (e) {
		var t = {
			getCookie: function (t) {
				var n = document.cookie.split(";");
				for (var r = 0; r < n.length; r++) {
					var i = n[r].split("=");
					if (e.trim(i[0]) == t) return i[1].length ? unescape(e.trim(i[1])) : null
				}
			},
			setCookie: function (e, t, n, r, i, s) {
				var o = new Date;
				o.setTime(o.getTime()), n && (n = n * 1e3 * 60 * 60 * 24);
				var u = new Date(o.getTime() + n);
				document.cookie = e + "=" + escape(t) + (n ? ";expires=" + u.toGMTString() : "") + (r ? ";path=" + r : "") + (i ? ";domain=" + i : "") + (s ? ";secure" : "")
			},
			removeCookie: function (e, t, n) {
				this.getCookie(e) && (document.cookie = e + "=" + (t ? ";path=" + t : "") + (n ? ";domain=" + n : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
			},
			toggleCookie: function (e) {
				var t = this.getBooleanCookie(e);
				this.setCookie(e, !t)
			},
			getBooleanCookie: function (e) {
				var t = this.getCookie(e);
				return !t || t == "false" ? !1 : !0
			},
			setBooleanCookie: function (e, t) {
				this.setCookie(e, t ? "true" : "false")
			}
		};
		return t
	}),
	function () {
		"use strict";

		function t(e, t, n, r, i, s) {
			t[e] && (n.push(e), (t[e] === !0 || t[e] === 1) && r.push(i + e + "/" + s))
		}

		function n(e, t, n, r, i) {
			var s = r + t + "/" + i;
			require._fileExists(e.toUrl(s + ".js")) && n.push(s)
		}

		function r(e, t, n) {
			var i;
			for (i in t) t.hasOwnProperty(i) && (!e.hasOwnProperty(i) || n) ? e[i] = t[i] : typeof t[i] == "object" && (!e[i] && t[i] && (e[i] = {}), r(e[i], t[i], n))
		}
		var e = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;
		define("i18n", ["module"], function (i) {
			var s = i.config ? i.config() : {};
			return {
				version: "2.0.5",
				load: function (i, o, u, a) {
					a = a || {}, a.locale && (s.locale = a.locale);
					var f, l = e.exec(i),
						c = l[1],
						h = l[4],
						p = l[5],
						d = h.split("-"),
						v = [],
						m = {},
						g, y, b = "";
					l[5] ? (c = l[1], f = c + p) : (f = i, p = l[4], h = s.locale, h || (h = s.locale = typeof navigator == "undefined" ? "root" : (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage || "root").toLowerCase()), d = h.split("-"));
					if (a.isBuild) {
						v.push(f), n(o, "root", v, c, p);
						for (g = 0; g < d.length; g++) y = d[g], b += (b ? "-" : "") + y, n(o, b, v, c, p);
						o(v, function () {
							u()
						})
					} else o([f], function (e) {
						var n = [],
							i;
						t("root", e, n, v, c, p);
						for (g = 0; g < d.length; g++) i = d[g], b += (b ? "-" : "") + i, t(b, e, n, v, c, p);
						o(v, function () {
							var t, i, s;
							for (t = n.length - 1; t > -1 && n[t]; t--) {
								s = n[t], i = e[s];
								if (i === !0 || i === 1) i = o(c + s + "/" + p);
								r(m, i)
							}
							u(m)
						})
					})
				}
			}
		})
	}(), define("nls/homeTab", {
		root: {
			homeTabLabel: "主页",
			loadingHar: "加载中"
		}
	}), define("text", ["module"], function (e) {
		"use strict";
		var t, n, r, i, s, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
			u = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
			a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
			f = typeof location != "undefined" && location.href,
			l = f && location.protocol && location.protocol.replace(/\:/, ""),
			c = f && location.hostname,
			h = f && (location.port || undefined),
			p = {},
			d = e.config && e.config() || {};
		t = {
			version: "2.0.14",
			strip: function (e) {
				if (e) {
					e = e.replace(u, "");
					var t = e.match(a);
					t && (e = t[1])
				} else e = "";
				return e
			},
			jsEscape: function (e) {
				return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
			},
			createXhr: d.createXhr || function () {
				var e, t, n;
				if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
				if (typeof ActiveXObject != "undefined")
					for (t = 0; t < 3; t += 1) {
						n = o[t];
						try {
							e = new ActiveXObject(n)
						} catch (r) {}
						if (e) {
							o = [n];
							break
						}
					}
				return e
			},
			parseName: function (e) {
				var t, n, r, i = !1,
					s = e.lastIndexOf("."),
					o = e.indexOf("./") === 0 || e.indexOf("../") === 0;
				return s !== -1 && (!o || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1)) : t = e, r = n || t, s = r.indexOf("!"), s !== -1 && (i = r.substring(s + 1) === "strip", r = r.substring(0, s), n ? n = r : t = r), {
					moduleName: t,
					ext: n,
					strip: i
				}
			},
			xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
			useXhr: function (e, n, r, i) {
				var s, o, u, a = t.xdRegExp.exec(e);
				return a ? (s = a[2], o = a[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === n) && (!o || o.toLowerCase() === r.toLowerCase()) && (!u && !o || u === i)) : !0
			},
			finishLoad: function (e, n, r, i) {
				r = n ? t.strip(r) : r, d.isBuild && (p[e] = r), i(r)
			},
			load: function (e, n, r, i) {
				if (i && i.isBuild && !i.inlineText) {
					r();
					return
				}
				d.isBuild = i && i.isBuild;
				var s = t.parseName(e),
					o = s.moduleName + (s.ext ? "." + s.ext : ""),
					u = n.toUrl(o),
					a = d.useXhr || t.useXhr;
				if (u.indexOf("empty:") === 0) {
					r();
					return
				}!f || a(u, l, c, h) ? t.get(u, function (n) {
					t.finishLoad(e, s.strip, n, r)
				}, function (e) {
					r.error && r.error(e)
				}) : n([o], function (e) {
					t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, r)
				})
			},
			write: function (e, n, r, i) {
				if (p.hasOwnProperty(n)) {
					var s = t.jsEscape(p[n]);
					r.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
				}
			},
			writeFile: function (e, n, r, i, s) {
				var o = t.parseName(n),
					u = o.ext ? "." + o.ext : "",
					a = o.moduleName + u,
					f = r.toUrl(o.moduleName + u) + ".js";
				t.load(a, r, function (n) {
					var r = function (e) {
						return i(f, e)
					};
					r.asModule = function (e, t) {
						return i.asModule(e, f, t)
					}, t.write(e, a, r, s)
				}, s)
			}
		};
		if (d.env === "node" || !d.env && typeof process != "undefined" && process.versions && !!process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"]) n = require.nodeRequire("fs"), t.get = function (e, t, r) {
			try {
				var i = n.readFileSync(e, "utf8");
				i[0] === "﻿" && (i = i.substring(1)), t(i)
			} catch (s) {
				r && r(s)
			}
		};
		else if (d.env === "xhr" || !d.env && t.createXhr()) t.get = function (e, n, r, i) {
			var s = t.createXhr(),
				o;
			s.open("GET", e, !0);
			if (i)
				for (o in i) i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
			d.onXhr && d.onXhr(s, e), s.onreadystatechange = function (t) {
				var i, o;
				s.readyState === 4 && (i = s.status || 0, i > 399 && i < 600 ? (o = new Error(e + " HTTP status: " + i), o.xhr = s, r && r(o)) : n(s.responseText), d.onXhrComplete && d.onXhrComplete(s, e))
			}, s.send(null)
		};
		else if (d.env === "rhino" || !d.env && typeof Packages != "undefined" && typeof java != "undefined") t.get = function (e, t) {
			var n, r, i = "utf-8",
				s = new java.io.File(e),
				o = java.lang.System.getProperty("line.separator"),
				u = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), i)),
				a = "";
			try {
				n = new java.lang.StringBuffer, r = u.readLine(), r && r.length() && r.charAt(0) === 65279 && (r = r.substring(1)), r !== null && n.append(r);
				while ((r = u.readLine()) !== null) n.append(o), n.append(r);
				a = String(n.toString())
			} finally {
				u.close()
			}
			t(a)
		};
		else if (d.env === "xpconnect" || !d.env && typeof Components != "undefined" && Components.classes && Components.interfaces) r = Components.classes, i = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), s = "@mozilla.org/windows-registry-key;1" in r, t.get = function (e, t) {
			var n, o, u, a = {};
			s && (e = e.replace(/\//g, "\\")), u = new FileUtils.File(e);
			try {
				n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream), n.init(u, 1, 0, !1), o = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream), o.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), o.readString(n.available(), a), o.close(), n.close(), t(a.value)
			} catch (f) {
				throw new Error((u && u.path || "") + ": " + f)
			}
		};
		return t
	}), define("text!tabs/homeTab.html", [], function () {
		return '<div>\r\n<ul style="padding-left: 20px; line-height: 20px; margin-top: 0px">\r\n<li>原作<a href="https://github.com/janodvarko/harviewer">github.com/janodvarko/harviewer</a></li>\r\n<li>翻译<a href="https://github.com/karanocave/harviewer_zh_cn">github.com/karanocave/harviewer_zh_cn</a></li>\r\n<li>粘贴 <a href="@HAR_SPEC_URL@">HAR</a>\r\n日志到下面的方框中，然后按下\r\n按下 <b>Preview</b> 按钮.</li>\r\n<li>或者将<span class="red">*.har</span>文件丢到本页面的任何地方(如果你的浏览器支持的话).<</li>\r\n</ul>\r\n<table cellpadding="0" cellspacing="4">\r\n    <tr>\r\n        <td><input type="checkbox" id="validate" checked="true"></input></td>\r\n        <td style="vertical-align:middle;padding-bottom: 1px;">在处理前需要验证数据吗？</td>\r\n    </tr>\r\n</table>\r\n<textarea id="sourceEditor" class="sourceEditor" cols="80" rows="5"></textarea>\r\n<p><table cellpadding="0" cellspacing="0">\r\n    <tr>\r\n        <td><button id="appendPreview">Preview</button></td>\r\n    </tr>\r\n</table></p>\r\n<br/>\r\n<h3>HAR日志例子</h3>\r\n<ul style="line-height:20px;">\r\n<li><span id="example1" class="link example" path="examples/inline-scripts-block.har">\r\nInline scripts block</span> - 内联脚本阻止页面加载。</li>\r\n<li><span id="example2" class="link example" path="examples/browser-blocking-time.har">\r\nBlocking time</span> - 最大并联连接数限制的影响。</li>\r\n<li><span id="example3" class="link example" path="examples/softwareishard.com.har">\r\nBrowser cache</span> - 浏览器缓存对页面加载的影响（同一页面加载三次）。</li>\r\n<li><span id="example4" class="link example" path="examples/google.com.har">\r\nSingle page</span> - 单页加载（空缓存）。</li>\r\n</ul>\r\n<h3>在线的HAR日志文件</h3>\r\n<i>你也可以查看任何在线的HAR文件(JSONP格式的)，通过<b>导入Url</b> <br/>\r\n(在 <span class="linkAbout link">About</span> 选项查看更多内容):</i><br/>\r\n<p><code><a href="?inputUrl=http://www.janodvarko.cz/har/viewer/examples/inline-scripts-block.harp">\r\n    http://www.softwareishard.com/har/viewer?inputUrl=http://www.janodvarko.cz/har/viewer/examples/inline-scripts-block.harp</a></code></p>\r\n\r\n<br/>\r\n<p><i>本程序支持HAR 1.2 (在 <span class="linkAbout link">About</span> 选项查看更多内容).<br/></i></p>\r\n</div>\r\n'
	}), define("preview/jsonSchema", [], function () {
		var e = {
			validate: function (e, t) {
				return this._validate(e, t, !1)
			},
			checkPropertyChange: function (e, t, n) {
				return this._validate(e, t, n || "property")
			},
			_validate: function (e, t, n) {
				function i(e, t, o, u) {
					function f(e) {
						r.push({
							property: o,
							message: e
						})
					}

					function l(e, t) {
						if (e) {
							if (!(typeof e != "string" || e == "any" || (e == "null" ? t === null : typeof t == e) || t instanceof Array && e == "array" || e == "integer" && t % 1 === 0)) return [{
								property: o,
								message: typeof t + " value found, but a " + e + " is required"
							}];
							if (e instanceof Array) {
								var n = [];
								for (var s = 0; s < e.length; s++)
									if (!(n = l(e[s], t)).length) break;
								if (n.length) return n
							} else if (typeof e == "object") {
								var u = r;
								r = [], i(t, e, o);
								var a = r;
								return r = u, a
							}
						}
						return []
					}
					var a;
					o += o ? typeof u == "number" ? "[" + u + "]" : typeof u == "undefined" ? "" : "." + u : u;
					if ((typeof t != "object" || t instanceof Array) && (o || typeof t != "function")) return typeof t == "function" ? e instanceof t || f("is not an instance of the class/constructor " + t.name) : t && f("Invalid schema/property definition " + t), null;
					n && t.readonly && f("is a readonly field, it can not be changed"), t["extends"] && i(e, t["extends"], o, u);
					if (e === undefined) t.optional || f("is missing and it is not optional");
					else {
						r = r.concat(l(t.type, e)), t.disallow && !l(t.disallow, e).length && f(" disallowed value was matched");
						if (e !== null) {
							if (e instanceof Array) {
								if (t.items)
									if (t.items instanceof Array)
										for (u = 0, a = e.length; u < a; u++) r.concat(i(e[u], t.items[u], o, u));
									else
										for (u = 0, a = e.length; u < a; u++) r.concat(i(e[u], t.items, o, u));
								t.minItems && e.length < t.minItems && f("There must be a minimum of " + t.minItems + " in the array"), t.maxItems && e.length > t.maxItems && f("There must be a maximum of " + t.maxItems + " in the array")
							} else t.properties && r.concat(s(e, t.properties, o, t.additionalProperties));
							t.pattern && typeof e == "string" && !e.match(t.pattern) && f("does not match the regex pattern " + t.pattern), t.maxLength && typeof e == "string" && e.length > t.maxLength && f("may only be " + t.maxLength + " characters long"), t.minLength && typeof e == "string" && e.length < t.minLength && f("must be at least " + t.minLength + " characters long"), typeof t.minimum !== undefined && typeof e == typeof t.minimum && t.minimum > e && f("must have a minimum value of " + t.minimum), typeof t.maximum !== undefined && typeof e == typeof t.maximum && t.maximum < e && f("must have a maximum value of " + t.maximum);
							if (t["enum"]) {
								var c = t["enum"];
								a = c.length;
								var h;
								for (var p = 0; p < a; p++)
									if (c[p] === e) {
										h = 1;
										break
									} h || f("does not have a value in the enumeration " + c.join(", "))
							}
							typeof t.maxDecimal == "number" && e.toString().match(new RegExp("\\.[0-9]{" + (t.maxDecimal + 1) + ",}")) && f("may only have " + t.maxDecimal + " digits of decimal places")
						}
					}
					return null
				}

				function s(e, t, s, o) {
					if (typeof t == "object") {
						(typeof e != "object" || e instanceof Array) && r.push({
							property: s,
							message: "an object is required"
						});
						for (var u in t)
							if (t.hasOwnProperty(u) && (u.charAt(0) != "_" || u.charAt(1) != "_")) {
								var a = e[u],
									f = t[u];
								i(a, f, s, u)
							}
					}
					for (u in e) {
						e.hasOwnProperty(u) && (u.charAt(0) != "_" || u.charAt(1) != "_") && t && !t[u] && o === !1 && r.push({
							property: s,
							message: typeof a + "The property " + u + " is not defined in the schema and the schema does not allow additional properties"
						});
						var l = t && t[u] && t[u].requires;
						l && !(l in e) && r.push({
							property: s,
							message: "the presence of the property " + u + " requires that " + l + " also be present"
						}), a = e[u], t && typeof t == "object" && !(u in t) && i(a, o, s, u), !n && a && a.$schema && (r = r.concat(i(a, a.$schema, s, u)))
					}
					return r
				}
				var r = [];
				return t && i(e, t, "", n || ""), !n && e && e.$schema && i(e, e.$schema, "", ""), {
					valid: !r.length,
					errors: r
				}
			}
		};
		return e
	}), define("preview/ref", ["core/lib"], function (e) {
		var t = {
			resolveJson: function (t, n) {
				function p(d, v, m, g, y) {
					var b, w, E = r in d ? d[r] : m;
					E !== undefined && (E = (i + E).replace(l, "$2$3"));
					var S = y || d;
					if (E !== undefined) {
						s && (d.__id = E), n.schemas && !(d instanceof Array) && (w = E.match(/^(.+\/)[^\.\[]*$/)) && (g = n.schemas[w[1]]);
						if (o[E] && d instanceof Array == o[E] instanceof Array) S = o[E], delete S.$ref, b = !0;
						else {
							var x = g && g.prototype;
							x && (h.prototype = x, S = new h)
						}
						o[E] = S, u && (u[E] = n.time)
					}
					var T = g && g.properties,
						N = d.length;
					for (var C in d) {
						if (C == N) break;
						if (d.hasOwnProperty(C)) {
							w = d[C];
							var k = T && T[C];
							if (k && k.format == "date-time" && typeof w == "string") w = e.fromISOString(w);
							else if (typeof w == "object" && w && !(w instanceof Date)) {
								a = w.$ref;
								if (a) {
									delete d[C];
									var L = a.replace(/(#)([^\.\[])/, "$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/);
									(a = L[1] == "$" || L[1] == "this" || L[1] == "" ? t : o[(i + L[1]).replace(l, "$2$3")]) && L[3] && L[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g, function (e, t, n, r, i) {
										a = a && a[n ? n.replace(/[\"\'\\]/, "") : i]
									});
									if (a) w = a;
									else if (!v) {
										var A;
										A || f.push(S), A = !0
									} else w = p(w, !1, w.$ref, k), w._loadObject = n.loader
								} else v || (w = p(w, f == d, E && c(E, C), k, S != d && typeof S[C] == "object" && S[C]))
							}
							d[C] = w;
							if (S != d && !S.__isDirty) {
								var O = S[C];
								S[C] = w, b && w !== O && !S._loadObject && !(w instanceof Date && O instanceof Date && w.getTime() == O.getTime()) && (typeof w != "function" || typeof O != "function" || w.toString() != O.toString()) && o.onUpdate && o.onUpdate(S, C, O, w)
							}
						}
					}
					if (b) {
						for (C in S)
							if (!S.__isDirty && S.hasOwnProperty(C) && !d.hasOwnProperty(C) && C != "__id" && C != "__clientId" && !(S instanceof Array && isNaN(C))) {
								o.onUpdate && C != "_loadObject" && C != "_idAttr" && o.onUpdate(S, C, S[C], undefined), delete S[C];
								while (S instanceof Array && S.length && S[S.length - 1] === undefined) S.length--
							}
					} else o.onLoad && o.onLoad(S);
					return S
				}
				n = n || {};
				var r = n.idAttribute || "id",
					i = n.idPrefix || "",
					s = n.assignAbsoluteIds,
					o = n.index || {},
					u = n.timeStamps,
					a, f = [],
					l = /^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,
					c = this._addProp,
					h = function () {};
				return t && typeof t == "object" && (t = p(t, !1, n.defaultId), p(f, !1)), t
			},
			_addProp: function (e, t) {
				return e + (e.match(/#/) ? e.length == 1 ? "" : "." : "#") + t
			}
		};
		return t
	}), define("preview/harSchema", [], function () {
		function g() {}
		var e = /^(\d{4})(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/,
			t = {
				logType: {
					id: "logType",
					description: "HTTP Archive structure.",
					type: "object",
					properties: {
						log: {
							type: "object",
							properties: {
								version: {
									type: "string"
								},
								creator: {
									$ref: "creatorType"
								},
								browser: {
									$ref: "browserType"
								},
								pages: {
									type: "array",
									optional: !0,
									items: {
										$ref: "pageType"
									}
								},
								entries: {
									type: "array",
									items: {
										$ref: "entryType"
									}
								},
								comment: {
									type: "string",
									optional: !0
								}
							}
						}
					}
				}
			},
			n = {
				creatorType: {
					id: "creatorType",
					description: "Name and version info of the log creator app.",
					type: "object",
					properties: {
						name: {
							type: "string"
						},
						version: {
							type: "string"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			r = {
				browserType: {
					id: "browserType",
					description: "Name and version info of used browser.",
					type: "object",
					optional: !0,
					properties: {
						name: {
							type: "string"
						},
						version: {
							type: "string"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			s = {
				pageType: {
					id: "pageType",
					description: "Exported web page",
					optional: !0,
					properties: {
						startedDateTime: {
							type: "string",
							format: "date-time",
							pattern: e
						},
						id: {
							type: "string",
							unique: !0
						},
						title: {
							type: "string"
						},
						pageTimings: {
							$ref: "pageTimingsType"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			o = {
				pageTimingsType: {
					id: "pageTimingsType",
					description: "Timing info about page load",
					properties: {
						onContentLoad: {
							type: "number",
							optional: !0,
							min: -1
						},
						onLoad: {
							type: "number",
							optional: !0,
							min: -1
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			u = {
				entryType: {
					id: "entryType",
					description: "Request and Response related info",
					optional: !0,
					properties: {
						pageref: {
							type: "string",
							optional: !0
						},
						startedDateTime: {
							type: "string",
							format: "date-time",
							pattern: e
						},
						time: {
							type: "number",
							min: 0
						},
						request: {
							$ref: "requestType"
						},
						response: {
							$ref: "responseType"
						},
						cache: {
							$ref: "cacheType"
						},
						timings: {
							$ref: "timingsType"
						},
						serverIPAddress: {
							type: "string",
							optional: !0
						},
						connection: {
							type: "string",
							optional: !0
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			a = {
				requestType: {
					id: "requestType",
					description: "Monitored request",
					properties: {
						method: {
							type: "string"
						},
						url: {
							type: "string"
						},
						httpVersion: {
							type: "string"
						},
						cookies: {
							type: "array",
							items: {
								$ref: "cookieType"
							}
						},
						headers: {
							type: "array",
							items: {
								$ref: "recordType"
							}
						},
						queryString: {
							type: "array",
							items: {
								$ref: "recordType"
							}
						},
						postData: {
							$ref: "postDataType"
						},
						headersSize: {
							type: "integer"
						},
						bodySize: {
							type: "integer"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			f = {
				recordType: {
					id: "recordType",
					description: "Helper name-value pair structure.",
					properties: {
						name: {
							type: "string"
						},
						value: {
							type: "string"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			l = {
				responseType: {
					id: "responseType",
					description: "Monitored Response.",
					properties: {
						status: {
							type: "integer"
						},
						statusText: {
							type: "string"
						},
						httpVersion: {
							type: "string"
						},
						cookies: {
							type: "array",
							items: {
								$ref: "cookieType"
							}
						},
						headers: {
							type: "array",
							items: {
								$ref: "recordType"
							}
						},
						content: {
							$ref: "contentType"
						},
						redirectURL: {
							type: "string"
						},
						headersSize: {
							type: "integer"
						},
						bodySize: {
							type: "integer"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			c = {
				cookieType: {
					id: "cookieType",
					description: "Cookie description.",
					properties: {
						name: {
							type: "string"
						},
						value: {
							type: "string"
						},
						path: {
							type: "string",
							optional: !0
						},
						domain: {
							type: "string",
							optional: !0
						},
						expires: {
							type: "string",
							optional: !0
						},
						httpOnly: {
							type: "boolean",
							optional: !0
						},
						secure: {
							type: "boolean",
							optional: !0
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			h = {
				postDataType: {
					id: "postDataType",
					description: "Posted data info.",
					optional: !0,
					properties: {
						mimeType: {
							type: "string"
						},
						text: {
							type: "string",
							optional: !0
						},
						params: {
							type: "array",
							optional: !0,
							properties: {
								name: {
									type: "string"
								},
								value: {
									type: "string",
									optional: !0
								},
								fileName: {
									type: "string",
									optional: !0
								},
								contentType: {
									type: "string",
									optional: !0
								},
								comment: {
									type: "string",
									optional: !0
								}
							}
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			p = {
				contentType: {
					id: "contentType",
					description: "Response content",
					properties: {
						size: {
							type: "integer"
						},
						compression: {
							type: "integer",
							optional: !0
						},
						mimeType: {
							type: "string"
						},
						text: {
							type: "string",
							optional: !0
						},
						encoding: {
							type: "string",
							optional: !0
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			d = {
				cacheType: {
					id: "cacheType",
					description: "Info about a response coming from the cache.",
					properties: {
						beforeRequest: {
							$ref: "cacheEntryType"
						},
						afterRequest: {
							$ref: "cacheEntryType"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			v = {
				cacheEntryType: {
					id: "cacheEntryType",
					optional: !0,
					description: "Info about cache entry.",
					properties: {
						expires: {
							type: "string",
							optional: "true"
						},
						lastAccess: {
							type: "string"
						},
						eTag: {
							type: "string"
						},
						hitCount: {
							type: "integer"
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			},
			m = {
				timingsType: {
					id: "timingsType",
					description: "Info about request-response timing.",
					properties: {
						dns: {
							type: "number",
							optional: !0,
							min: -1
						},
						connect: {
							type: "number",
							optional: !0,
							min: -1
						},
						blocked: {
							type: "number",
							optional: !0,
							min: -1
						},
						send: {
							type: "number",
							min: -1
						},
						wait: {
							type: "number",
							min: -1
						},
						receive: {
							type: "number",
							min: -1
						},
						ssl: {
							type: "number",
							optional: !0,
							min: -1
						},
						comment: {
							type: "string",
							optional: !0
						}
					}
				}
			};
		g.prototype = {
			registerType: function () {
				var e = function (e, t) {
						for (var n in t) t.hasOwnProperty(n) && n != "prototype" && (e[n] = t[n])
					},
					t = this;
				for (i = 0; i < arguments.length; i += 1) e(t, arguments[i])
			}
		};
		var y = new g;
		return y.registerType(t, n, r, s, o, u, a, f, l, h, p, d, v, m), y
	}), define("nls/harModel", {
		root: {
			validationType: "HAR验证",
			validationSumTimeError: "请求计时的总和与总值不对应: %S (request.time: %S vs. sum: %S), request#: %S, parent page: %S",
			validationNegativeTimeError: "不允许负时间: %S, request#: %S, parent page: %S"
		}
	}), define("preview/harModel", ["core/lib", "preview/jsonSchema", "preview/ref", "preview/harSchema", "core/cookies", "core/trace", "i18n!nls/harModel"], function (e, t, n, r, i, s, o) {
		function u() {
			this.input = null
		}

		function a() {
			var e = {};
			for (var t in this) t != "toJSON" && (e[t] = this[t]);
			return this.text ? (e.text = Array.prototype.map.call(this.text, function (e) {
				var t = e.charCodeAt(0);
				if (t >= 32 && t < 127 || t == 10 || t == 13) return e.charAt(0);
				var n = t.toString(16).toUpperCase();
				while (n.length < 4) n = "0" + n;
				return "\\u" + n
			}).join(""), e) : e
		}
		return u.prototype = {
			append: function (t) {
				if (!t) {
					s.error("HarModel.append; Trying to append null input!");
					return
				}
				t.log.entries.sort(function (t, n) {
					var r = e.parseISO8601(t.startedDateTime),
						i = e.parseISO8601(n.startedDateTime);
					return r < i ? -1 : r > i ? 1 : 0
				});
				if (this.input) {
					if (!t.log.pages) return s.error("Import of additional data without a page is not yet supported."), null;
					for (var n = 0; n < t.log.pages.length; n++) this.importPage(t.log.pages[n], t.log.entries)
				} else this.input = e.cloneJSON(t);
				return this.input
			},
			getPages: function () {
				return this.input ? this.input.log.pages ? this.input.log.pages : [] : []
			},
			getFirstPage: function () {
				var e = this.getPages();
				return e.length > 0 ? e[0] : null
			},
			getPageEntries: function (e) {
				return u.getPageEntries(this.input, e)
			},
			getAllEntries: function (e) {
				return this.input ? this.input.log.entries : []
			},
			getParentPage: function (e) {
				return u.getParentPage(this.input, e)
			},
			importPage: function (e, t) {
				var n = this.getUniquePageID(e.id),
					r = e.id;
				e.id = n, this.input.log.pages.push(e);
				for (var i = 0; i < t.length; i++) {
					var s = t[i];
					s.pageref == r && (s.pageref = n, this.input.log.entries.push(s))
				}
			},
			getUniquePageID: function (e) {
				var t = this.input.log.pages,
					n = {};
				for (var r = 0; r < t.length; r++) n[t[r].id] = !0;
				if (!n[e]) return e;
				var i = 1;
				for (;;) {
					var s = e + i;
					if (!n[s]) return s;
					i++
				}
			},
			toJSON: function (e) {
				e || (e = this.input);
				if (!e) return "";
				var t = this.input.log.entries;
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.response.content.text && (r.response.content.toJSON = a)
				}
				var i = JSON.stringify(this.input, null, "	"),
					s = i.replace(/\\\\u/g, "\\u");
				return s
			},
			getSize: function (e) {
				e || (e = this.input);
				if (!e) return 0;
				var t = dojo.toJson(e, !0);
				return t.length
			}
		}, u.parse = function (e, i) {
			var s = e;
			try {
				typeof e == "string" && (s = jQuery.parseJSON(e))
			} catch (o) {
				throw console.exception("HarModel.parse; EXCEPTION", o), {
					errors: [{
						message: "Failed to parse JSON",
						property: "JSON evaluation"
					}]
				}
			}
			if (!i) return s;
			var u = n.resolveJson(r),
				a = t.validate(s, u.logType);
			if (a.valid) return this.validateRequestTimings(s), s;
			throw a
		}, u.getPageEntries = function (e, t) {
			var n = [],
				r = e.log.entries;
			if (!r) return n;
			for (var i = 0; i < r.length; i++) {
				var s = r[i];
				!s.pageref && !t && n.push(s), t && s.pageref == t.id && n.push(s)
			}
			return n
		}, u.getParentPage = function (e, t) {
			var n = e.log.pages;
			if (!n) return null;
			for (var r = 0; r < n.length; r++)
				if (n[r].id == t.pageref) return n[r];
			return null
		}, u.validateRequestTimings = function (t) {
			var n = [],
				r = t.log.entries;
			for (var i = 0; i < r.length; i++) {
				var s = r[i],
					u = s.timings;
				if (u.blocked < -1 || u.connect < -1 || u.dns < -1 || u.receive < -1 || u.send < -1 || u.wait < -1) {
					var a = e.formatString(o.validationNegativeTimeError, s.request.url, i, s.pageref);
					n.push({
						input: t,
						file: s,
						message: a,
						property: o.validationType
					})
				}
			}
			if (n.length) throw {
				errors: n,
				input: t
			}
		}, u.Loader = {
			run: function (t, n) {
				var r = e.getURLParameter("baseUrl");
				r && r[r.length - 1] != "/" && (r += "/");
				var i = e.getURLParameters("path"),
					s = e.getURLParameter("callback"),
					o = e.getURLParameters("inputUrl").concat(e.getHashParameters("inputUrl")),
					u = [];
				for (var a in i) u.push(r ? r + i[a] : i[a]);
				for (var a in o) u.push(o[a]);
				if ((r || o.length > 0) && u.length > 0) return this.loadRemoteArchive(u, s, t, n);
				var f = e.getURLParameter("path");
				if (f) return this.loadLocalArchive(f, t, n)
			},
			loadExample: function (e, t) {
				var n = document.location.href,
					r = n.indexOf("?");
				document.location = n.substr(0, r) + "?path=" + e, i.setCookie("timeline", !0), i.setCookie("stats", !0)
			},
			loadLocalArchive: function (e, t, n) {
				return $.ajax({
					url: e,
					context: this,
					dataType: "json",
					success: function (e) {
						t(e)
					},
					error: function (e, t, r) {
						n(e, t, r)
					}
				}), !0
			},
			loadRemoteArchive: function (e, t, n, r) {
				if (!e.length) return !1;
				var i = e.shift();
				return t || (t = "onInputData"), $.ajax({
					url: i,
					context: this,
					dataType: "jsonp",
					jsonp: "callback",
					jsonpCallback: t,
					success: function (i) {
						n && n(i);
						if (e.length) {
							var s = this;
							setTimeout(function () {
								s.loadRemoteArchive(e, t, n, r)
							}, 300)
						}
					},
					error: function (e, t, n) {
						r && r(e, t, n)
					}
				}), !0
			},
			load: function (e, t, n, r, i, s) {
				function o(t) {
					e.appendPreview && e.appendPreview(t), i && i.call(e, t)
				}

				function u(t, n, r) {
					e.onLoadError && e.onLoadError(t, n, r), s && s.call(e, t, n, r)
				}
				return n ? this.loadRemoteArchive([t], r, o, u) : this.loadLocalArchive(t, o, u)
			}
		}, u
	}), define("tabs/homeTab", ["domplate/domplate", "domplate/tabView", "core/lib", "core/cookies", "core/trace", "i18n!nls/homeTab", "text!tabs/homeTab.html", "preview/harModel"], function (Domplate, TabView, Lib, Cookies, Trace, Strings, HomeTabHtml, HarModel) {
		with(Domplate) {
			function HomeTab() {}
			return HomeTab.prototype = Lib.extend(TabView.Tab.prototype, {
				id: "主页",
				label: Strings.homeTabLabel,
				bodyTag: DIV({
					"class": "homeBody"
				}),
				onUpdateBody: function (e, t) {
					t = this.bodyTag.replace({}, t), t.innerHTML = HomeTabHtml.replace("@HAR_SPEC_URL@", e.harSpecURL, "g"), $("#appendPreview").click(Lib.bindFixed(this.onAppendPreview, this)), $(".linkAbout").click(Lib.bind(this.onAbout, this));
					var n = $("#content");
					n.bind("dragenter", Lib.bind(Lib.cancelEvent, Lib)), n.bind("dragover", Lib.bind(Lib.cancelEvent, Lib)), n.bind("drop", Lib.bind(this.onDrop, this)), this.validateNode = $("#validate");
					var r = Cookies.getCookie("validate");
					r && this.validateNode.prop("checked", r == "false" ? !1 : !0), this.validateNode.change(Lib.bind(this.onValidationChange, this)), $(".example").click(Lib.bind(this.onLoadExample, this))
				},
				onAppendPreview: function (e) {
					e || (e = $("#sourceEditor").val()), e && this.tabView.appendPreview(e)
				},
				onAbout: function () {
					this.tabView.selectTabByName("About")
				},
				onValidationChange: function () {
					var e = this.validateNode.prop("checked");
					Cookies.setCookie("validate", e)
				},
				onLoadExample: function (e) {
					var t = Lib.fixEvent(e),
						n = t.target.getAttribute("path"),
						r = document.location.href,
						i = r.indexOf("?");
					document.location = r.substr(0, i) + "?path=" + n, Cookies.setCookie("timeline", !0), Cookies.setCookie("stats", !0)
				},
				onDrop: function (e) {
					var t = Lib.fixEvent(e);
					Lib.cancelEvent(t);
					try {
						this.handleDrop(e.originalEvent.dataTransfer)
					} catch (n) {
						Trace.exception("HomeTab.onDrop EXCEPTION", n)
					}
				},
				handleDrop: function (e) {
					if (!e) return !1;
					var t = e.files;
					if (!t) return;
					for (var n = 0; n < t.length; n++) {
						var r = t[n],
							i = Lib.getFileExtension(r.name);
						if (i.toLowerCase() != "har") continue;
						var s = this,
							o = this.getFileReader(r, function (e) {
								e && s.onAppendPreview(e)
							});
						o()
					}
				},
				getFileReader: function (e, t) {
					return function n() {
						if (typeof e.getAsText != "undefined") {
							t(e.getAsText(""));
							return
						}
						if (typeof FileReader != "undefined") {
							var n = new FileReader;
							n.onloadend = function () {
								t(n.result)
							}, n.readAsText(e)
						}
					}
				},
				loadInProgress: function (e, t) {
					$("#sourceEditor").val(e ? t ? t : Strings.loadingHar : "")
				}
			}), HomeTab
		}
	}), define("nls/harViewer", {
		root: {
			aboutTabLabel: "About",
			schemaTabLabel: "模式"
		}
	}), define("tabs/aboutTab", ["domplate/domplate", "domplate/tabView", "core/lib", "i18n!nls/harViewer"], function (Domplate, TabView, Lib, Strings) {
		with(Domplate) {
			function AboutTab() {}
			return AboutTab.prototype = {
				id: "About",
				label: Strings.aboutTabLabel,
				tabHeaderTag: A({
					"class": "$tab.id\\Tab tab",
					view: "$tab.id",
					_repObject: "$tab"
				}, "$tab.label", SPAN("&nbsp;"), SPAN({
					"class": "version"
				}, "$tab.tabView.version")),
				bodyTag: DIV({
					"class": "aboutBody"
				}),
				onUpdateBody: function (e, t) {
					var n = this;
					t = this.bodyTag.replace({}, t), require(["text!tabs/aboutTab.html"], function (r) {
						r = r.replace("@VERSION@", e.version, "g"), r = r.replace("@HAR_SPEC_URL@", e.harSpecURL, "g"), t.innerHTML = r, $(".linkSchema").click(Lib.bind(n.onSchema, n))
					})
				},
				onSchema: function () {
					this.tabView.selectTabByName("模式")
				}
			}, AboutTab
		}
	}), define("nls/previewTab", {
		root: {
			previewTabLabel: "预览",
			showTimelineButton: "显示页面时间线",
			hideTimelineButton: "隐藏页面时间线",
			showTimelineTooltip: "显示/隐藏时间线中选定页的统计预览.",
			showStatsButton: "显示统计信息",
			hideStatsButton: "隐藏统计信息",
			showStatsTooltip: "显示/隐藏页面时间线.",
			clearButton: "清除",
			clearTooltip: "从查看器中删除所有HAR日志",
			downloadTooltip: "从查看器中删除所有HAR日在一个HAR文件中下载所有当前数据.",
			downloadError: "保存HAR数据失败",
			menuShowHARSource: "显示HAR源"
		}
	}), define("domplate/popupMenu", ["domplate/domplate", "core/lib", "core/trace"], function (Domplate, Lib, Trace) {
		with(Domplate) {
			var Controller = {
					controllers: [],
					controllerContext: {
						label: "controller context"
					},
					initialize: function (e) {
						this.controllers = [], this.controllerContext = e || this.controllerContext
					},
					shutdown: function () {
						this.removeControllers()
					},
					addController: function () {
						for (var e = 0, t; t = arguments[e]; e++) {
							typeof t[0] == "string" && (t[0] = $$(t[0], this.controllerContext));
							var n = t[2];
							t[2] = Lib.bind(n, this), t[3] = n, this.controllers.push(t), Lib.addEventListener.apply(this, t)
						}
					},
					removeController: function () {
						for (var e = 0, t; t = arguments[e]; e++)
							for (var n = 0, r; r = this.controllers[n]; n++) t[0] == r[0] && t[1] == r[1] && t[2] == r[3] && Lib.removeEventListener.apply(this, r)
					},
					removeControllers: function () {
						for (var e = 0, t; t = this.controllers[e]; e++) Lib.removeEventListener.apply(this, t)
					}
				},
				menuItemProps = {
					"class": "$item.className",
					type: "$item.type",
					value: "$item.value",
					_command: "$item.command"
				};
			Lib.isIE6 && (menuItemProps.href = "javascript:void(0)");
			var MenuPlate = domplate({
				tag: DIV({
					"class": "popupMenu popupMenuShadow"
				}, DIV({
					"class": "popupMenuContent popupMenuShadowContent"
				}, FOR("item", "$object.items|memberIterator", TAG("$item.tag", {
					item: "$item"
				})))),
				itemTag: A(menuItemProps, "$item.label"),
				checkBoxTag: A(Lib.extend(menuItemProps, {
					checked: "$item.checked"
				}), "$item.label"),
				radioButtonTag: A(Lib.extend(menuItemProps, {
					selected: "$item.selected"
				}), "$item.label"),
				groupTag: A(Lib.extend(menuItemProps, {
					child: "$item.child"
				}), "$item.label"),
				shortcutTag: A(menuItemProps, "$item.label", SPAN({
					"class": "popupMenuShortcutKey"
				}, "$item.key")),
				separatorTag: SPAN({
					"class": "popupMenuSeparator"
				}),
				memberIterator: function (e) {
					var t = [];
					for (var n = 0, r = e.length; n < r; n++) {
						var i = e[n];
						if (typeof i == "string" && i.indexOf("-") == 0) {
							t.push({
								tag: this.separatorTag
							});
							continue
						}
						i = Lib.extend(i, {}), i.type = i.type || "", i.value = i.value || "";
						var s = i.type;
						i.tag = this.itemTag;
						var o = i.className || "";
						o += "popupMenuOption ", s == "checkbox" ? (o += "popupMenuCheckBox ", i.tag = this.checkBoxTag) : s == "radio" ? (o += "popupMenuRadioButton ", i.tag = this.radioButtonTag) : s == "group" ? (o += "popupMenuGroup ", i.tag = this.groupTag) : s == "shortcut" && (o += "popupMenuShortcut ", i.tag = this.shortcutTag), i.checked ? o += "popupMenuChecked " : i.selected && (o += "popupMenuRadioSelected "), i.disabled && (o += "popupMenuDisabled "), i.className = o, i.label = i.label, t.push(i)
					}
					return t
				}
			});

			function Menu(e) {
				if (!e.element) {
					e.getItems && (e.items = e.getItems()), e.items[0] == "-" && e.items.shift(), e.items[e.items.length - 1] == "-" && e.items.pop();
					var t = Lib.getBody(document);
					e.element = MenuPlate.tag.append({
						object: e
					}, t, MenuPlate)
				}
				Lib.append(this, e), typeof this.element == "string" ? (this.id = this.element, this.element = $(this.id)) : this.id && (this.element.id = this.id), this.elementStyle = this.element.style, this.isVisible = !1, this.handleMouseDown = Lib.bind(this.handleMouseDown, this), this.handleMouseOver = Lib.bind(this.handleMouseOver, this), this.handleMouseOut = Lib.bind(this.handleMouseOut, this), this.handleWindowMouseDown = Lib.bind(this.handleWindowMouseDown, this)
			}
			var menuMap = {};
			return Menu.prototype = Lib.extend(Controller, {
				initialize: function () {
					Controller.initialize.call(this), this.addController([this.element, "mousedown", this.handleMouseDown], [this.element, "mouseover", this.handleMouseOver])
				},
				destroy: function () {
					this.hide(), this.parentMenu && (this.parentMenu.childMenu = null), this.element.parentNode.removeChild(this.element), this.element = null, this.elementStyle = null, this.parentMenu = null, this.parentTarget = null
				},
				shutdown: function () {
					Controller.shutdown.call(this)
				},
				showPopup: function (e) {
					var t = Lib.isIE6 ? 1 : -4,
						n = Lib.getElementBox(e),
						r = {
							top: 0,
							left: 0
						};
					this.show(n.left + t - r.left, n.top + n.height - 5 - r.top)
				},
				show: function (e, t) {
					this.initialize();
					if (this.isVisible) return;
					e = e || 0, t = t || 0;
					if (this.parentMenu) {
						var n = this.parentMenu.childMenu;
						n && n != this && n.destroy(), this.parentMenu.childMenu = this
					} else Lib.addEventListener(document, "mousedown", this.handleWindowMouseDown);
					this.elementStyle.display = "block", this.elementStyle.visibility = "hidden";
					var r = Lib.getWindowSize();
					e = Math.min(e, r.width - this.element.clientWidth - 10), e = Math.max(e, 0), t = Math.min(t, r.height - this.element.clientHeight - 10), t = Math.max(t, 0), this.elementStyle.left = e + "px", this.elementStyle.top = t + "px", this.elementStyle.visibility = "visible", this.isVisible = !0, Lib.isFunction(this.onShow) && this.onShow.apply(this, arguments)
				},
				hide: function () {
					this.clearHideTimeout(), this.clearShowChildTimeout();
					if (!this.isVisible) return;
					this.elementStyle.display = "none", this.childMenu && (this.childMenu.destroy(), this.childMenu = null), this.parentTarget && Lib.removeClass(this.parentTarget, "popupMenuGroupSelected"), this.isVisible = !1, this.shutdown(), Lib.isFunction(this.onHide) && this.onHide.apply(this, arguments)
				},
				showChildMenu: function (e) {
					var t = e.getAttribute("child"),
						n = this,
						e = e;
					this.showChildTimeout = window.setTimeout(function () {
						var r = Lib.getElementBox(e),
							i = menuMap.hasOwnProperty(t) ? menuMap[t] : {
								element: $(t)
							},
							s = new Menu(Lib.extend(i, {
								parentMenu: n,
								parentTarget: e
							})),
							o = Lib.isIE6 ? -1 : -6;
						s.show(r.left + r.width + o, r.top - 6), Lib.setClass(e, "popupMenuGroupSelected")
					}, 350)
				},
				clearHideTimeout: function () {
					this.hideTimeout && (window.clearTimeout(this.hideTimeout), delete this.hideTimeout)
				},
				clearShowChildTimeout: function () {
					this.showChildTimeout && (window.clearTimeout(this.showChildTimeout), this.showChildTimeout = null)
				},
				handleMouseDown: function (e) {
					Lib.cancelEvent(e, !0);
					var t = this;
					while (t.parentMenu) t = t.parentMenu;
					var n = e.target || e.srcElement;
					n = Lib.getAncestorByClass(n, "popupMenuOption");
					if (!n || Lib.hasClass(n, "popupMenuGroup")) return !1;
					if (n && !Lib.hasClass(n, "popupMenuDisabled")) {
						var r = n.getAttribute("type");
						if (r == "checkbox") {
							var i = n.getAttribute("checked"),
								s = n.getAttribute("value"),
								o = Lib.hasClass(n, "popupMenuChecked");
							o ? (Lib.removeClass(n, "popupMenuChecked"), n.setAttribute("checked", "")) : (Lib.setClass(n, "popupMenuChecked"), n.setAttribute("checked", "true")), Lib.isFunction(this.onCheck) && this.onCheck.call(this, n, s, !o)
						}
						if (r == "radiobutton") {
							var u = Lib.getElementsByClass(n.parentNode, "popupMenuRadioSelected"),
								a = n.getAttribute("group");
							for (var f = 0, l = u.length; f < l; f++) radio = u[f], radio.getAttribute("group") == a && (Lib.removeClass(radio, "popupMenuRadioSelected"), radio.setAttribute("selected", ""));
							Lib.setClass(n, "popupMenuRadioSelected"), n.setAttribute("selected", "true")
						}
						var c = null,
							h = n.command;
						Lib.isFunction(h) ? c = h : typeof h == "string" && (c = this[h]);
						var p = !0;
						c && (p = c.call(this, n) !== !1), p && t.hide()
					}
					return !1
				},
				handleWindowMouseDown: function (e) {
					var t = e.target || e.srcElement;
					t = Lib.getAncestorByClass(t, "popupMenu"), t || (Lib.removeEventListener(document, "mousedown", this.handleWindowMouseDown), this.destroy())
				},
				handleMouseOver: function (e) {
					this.clearHideTimeout(), this.clearShowChildTimeout();
					var t = e.target || e.srcElement;
					t = Lib.getAncestorByClass(t, "popupMenuOption");
					if (!t) return;
					var n = this.childMenu;
					n && (Lib.removeClass(n.parentTarget, "popupMenuGroupSelected"), n.parentTarget != t && n.isVisible && (n.clearHideTimeout(), n.hideTimeout = window.setTimeout(function () {
						n.destroy()
					}, 300))), Lib.hasClass(t, "popupMenuGroup") && this.showChildMenu(t)
				}
			}), Lib.append(Menu, {
				register: function (e) {
					menuMap[e.id] = e
				},
				check: function (e) {
					Lib.setClass(e, "popupMenuChecked"), e.setAttribute("checked", "true")
				},
				uncheck: function (e) {
					Lib.removeClass(e, "popupMenuChecked"), e.setAttribute("checked", "")
				},
				disable: function (e) {
					Lib.setClass(e, "popupMenuDisabled")
				},
				enable: function (e) {
					Lib.removeClass(e, "popupMenuDisabled")
				}
			}), Menu
		}
	}), define("domplate/toolbar", ["domplate/domplate", "core/lib", "core/trace", "domplate/popupMenu"], function (Domplate, Lib, Trace, Menu) {
		with(Domplate) {
			var ToolbarTempl = domplate({
				tag: DIV({
					"class": "toolbar",
					onclick: "$onClick"
				}),
				buttonTag: SPAN({
					"class": "$button|getClassName toolbarButton",
					title: "$button.tooltiptext",
					$text: "$button|hasLabel",
					onclick: "$button|getCommand"
				}, "$button|getLabel"),
				dropDownTag: SPAN({
					"class": "$button|getClassName toolbarButton dropDown",
					_repObject: "$button",
					title: "$button.tooltiptext",
					$text: "$button|hasLabel",
					onclick: "$onDropDown"
				}, "$button|getLabel", SPAN({
					"class": "arrow"
				})),
				separatorTag: SPAN({
					"class": "toolbarSeparator",
					style: "color: gray;"
				}, "|"),
				hasLabel: function (e) {
					return e.label ? !0 : !1
				},
				getLabel: function (e) {
					return e.label ? e.label : ""
				},
				getClassName: function (e) {
					return e.className ? e.className : ""
				},
				getCommand: function (e) {
					return e.command ? e.command : function () {}
				},
				onClick: function (e) {
					var t = $.event.fix(e || window.event);
					Lib.cancelEvent(t)
				},
				onDropDown: function (e) {
					var t = $.event.fix(e || window.event),
						n = t.target,
						r = Lib.getAncestorByClass(n, "toolbarButton"),
						i = r.repObject.items,
						s = new Menu({
							id: "toolbarContextMenu",
							items: i
						});
					s.showPopup(r)
				}
			});

			function Toolbar() {
				this.buttons = []
			}
			return Toolbar.prototype = {
				addButton: function (e) {
					e.tooltiptext || (tooltiptext = ""), this.buttons.push(e)
				},
				removeButton: function (e) {
					for (var t = 0; t < this.buttons.length; t++)
						if (this.buttons[t].id == e) {
							this.buttons.splice(t, 1);
							break
						}
				},
				addButtons: function (e) {
					for (var t = 0; t < e.length; t++) this.addButton(e[t])
				},
				getButton: function (e) {
					for (var t = 0; t < this.buttons.length; t++)
						if (this.buttons[t].id == e) return this.buttons[t]
				},
				render: function (e) {
					if (!this.buttons.length) return;
					this.element && (e = this.element.parentNode), this.element = ToolbarTempl.tag.replace({}, e);
					for (var t = 0; t < this.buttons.length; t++) {
						var n = this.buttons[t],
							r = n.items ? ToolbarTempl.dropDownTag : ToolbarTempl.buttonTag,
							i = n.tag ? n.tag : r,
							s = i.append({
								button: n
							}, this.element);
						n.initialize && n.initialize(s), t < this.buttons.length - 1 && ToolbarTempl.separatorTag.append({}, this.element)
					}
					return this.element
				}
			}, Toolbar
		}
	}), define("nls/pageTimeline", {
		root: {
			pageLoad: "页面加载",
			request: "请求",
			requests: "请求",
			pageBarTooltip: "单击此处可选择并包含在统计信息预览中."
		}
	}), define("tabs/pageTimeline", ["domplate/domplate", "core/lib", "core/trace", "i18n!nls/pageTimeline", "preview/harModel"], function (Domplate, Lib, Trace, Strings, HarModel) {
		with(Domplate) {
			function Timeline() {
				this.listeners = [], this.element = null, this.maxElapsedTime = -1, this.lastSelectedBar = null
			}
			Timeline.prototype = domplate({
				graphCols: FOR("page", "$input|getPages", TD({
					"class": "pageTimelineCol"
				}, DIV({
					"class": "pageBar",
					_input: "$input",
					_page: "$page",
					title: Strings.pageBarTooltip,
					style: "height: $page|getHeight\\px",
					onmousemove: "$onMouseMove",
					onclick: "$onClick"
				}))),
				pageGraph: TABLE({
					"class": "pageTimelineTable",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY(TR({
					"class": "pageTimelineRow"
				}, TAG("$graphCols", {
					input: "$input"
				})))),
				tag: DIV({
					"class": "pageTimelineBody",
					style: "height: auto; display: none"
				}, TABLE({
					style: "margin: 7px;",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY(TR(TD(TAG("$pageGraph", {
					input: "$input"
				}))), TR(TD({
					"class": "pageDescContainer",
					colspan: 2
				}))))),
				getHeight: function (e) {
					var t = 1,
						n = e.pageTimings.onLoad;
					return n > 0 && this.maxElapsedTime > 0 && (t = Math.round(n / this.maxElapsedTime * 100)), Math.max(1, t)
				},
				onClick: function (e) {
					var t = Lib.fixEvent(e),
						n = t.target;
					if (!Lib.hasClass(n, "pageBar")) return;
					var r = Lib.isControlClick(t),
						i = Lib.isShiftClick(t),
						s = Lib.getAncestorByClass(n, "pageTimelineRow");
					!r && !i && Selection.unselectAll(s, n), Selection.toggle(n), this.selectionChanged()
				},
				onMouseMove: function (e) {
					var t = Lib.fixEvent(e),
						n = t.target;
					if (!Lib.hasClass(n, "pageBar")) return;
					if (this.highlightedPage == n.page) return;
					this.highlightedPage = n.page;
					var r = Lib.getElementByClass(this.element, "pageDescContainer");
					Timeline.Desc.render(r, n)
				},
				getPages: function (e) {
					return e.log.pages ? e.log.pages : []
				},
				getPageBar: function (e) {
					if (!this.element) return;
					var t = Lib.getElementByClass(this.element, "pageTimelineTable"),
						n = t.firstChild.firstChild.firstChild;
					while (n) {
						if (n.firstChild.page == e) return n.firstChild;
						n = n.nextSibling
					}
				},
				recalcLayout: function () {
					this.maxElapsedTime = 0;
					var e = this.maxElapsedTime,
						t = Lib.getElementsByClass(this.element, "pageBar");
					for (var n = 0; n < t.length; n++) {
						var r = t[n].page,
							i = r.pageTimings.onLoad;
						i > 0 && this.maxElapsedTime < i && (this.maxElapsedTime = i)
					}
					if (e != this.maxElapsedTime)
						for (var n = 0; n < t.length; n++) t[n].style.height = this.getHeight(t[n].page) + "px"
				},
				updateDesc: function () {
					if (!this.isVisible()) return;
					if (!this.highlightedPage) {
						var e = Lib.getElementByClass(this.element, "pageBar");
						e && Lib.fireEvent(e, "mousemove")
					}
				},
				addListener: function (e) {
					this.listeners.push(e)
				},
				removeListener: function (e) {
					remove(this.listeners, e)
				},
				selectionChanged: function () {
					var e = this.getSelection();
					Lib.dispatch(this.listeners, "onSelectionChange", [e])
				},
				removeSelection: function () {
					if (!this.element) return;
					var e = Lib.getElementByClass(this.element, "pageTimelineRow");
					Selection.unselectAll(e), this.selectionChanged()
				},
				getSelection: function () {
					if (!this.isVisible()) return [];
					var e = Lib.getElementByClass(this.element, "pageTimelineRow");
					return Selection.getSelection(e)
				},
				show: function (e) {
					if (this.isVisible()) return;
					e ? $(this.element).slideDown() : this.element.style.display = "block", Lib.setClass(this.element, "opened"), this.updateDesc()
				},
				hide: function (e) {
					if (!this.isVisible()) return;
					e ? $(this.element).slideUp() : this.element.style.display = "none", Lib.removeClass(this.element, "opened"), this.removeSelection()
				},
				isVisible: function () {
					return Lib.hasClass(this.element, "opened")
				},
				toggle: function (e) {
					this.isVisible() ? this.hide(e) : this.show(e)
				},
				render: function (e) {
					return this.element = this.tag.replace({
						input: {
							log: {
								pages: []
							}
						}
					}, e, this), this.recalcLayout(), this.element
				},
				append: function (e, t) {
					if (!this.element) return;
					var n = Lib.getElementByClass(this.element, "pageTimelineRow");
					this.graphCols.insertCols({
						input: e
					}, n, this), this.recalcLayout(), this.updateDesc()
				}
			}), Timeline.Desc = domplate({
				tag: DIV({
					"class": "pageDescBox"
				}, DIV({
					"class": "connector"
				}), DIV({
					"class": "desc"
				}, SPAN({
					"class": "summary"
				}, "$object|getSummary"), SPAN({
					"class": "time"
				}, "$object.page|getTime"), SPAN({
					"class": "title"
				}, "$object.page|getTitle"), PRE({
					"class": "comment"
				}, "$object.page|getComment"))),
				getSummary: function (e) {
					var t = "",
						n = e.page.pageTimings.onLoad;
					n > 0 && (t += Strings.pageLoad + ": " + Lib.formatTime(n) + ", ");
					var r = HarModel.getPageEntries(e.input, e.page),
						i = r.length;
					return t += i + " " + (i == 1 ? Strings.request : Strings.requests), t
				},
				getTime: function (e) {
					var t = Lib.parseISO8601(e.startedDateTime),
						n = new Date(t);
					return n.toLocaleString()
				},
				getTitle: function (e) {
					return e.title
				},
				getComment: function (e) {
					return e.comment ? e.comment : ""
				},
				render: function (e, t) {
					var n = {
							input: t.input,
							page: t.page
						},
						r = this.tag.replace({
							object: n
						}, e),
						i = Lib.$(r, "connector");
					return i.style.marginLeft = t.parentNode.offsetLeft + "px", r
				}
			});
			var Selection = {
				isSelected: function (e) {
					return Lib.hasClass(e, "selected")
				},
				toggle: function (e) {
					Lib.toggleClass(e, "selected")
				},
				select: function (e) {
					this.isSelected(e) || Lib.setClass(e, "selected")
				},
				unselect: function (e) {
					this.isSelected(e) && Lib.removeClass(e, "selected")
				},
				getSelection: function (e) {
					var t = [],
						n = Lib.getElementsByClass(e, "pageBar");
					for (var r = 0; r < n.length; r++) {
						var i = n[r];
						this.isSelected(i) && t.push(i.page)
					}
					return t
				},
				unselectAll: function (e, t) {
					var n = Lib.getElementsByClass(e, "pageBar");
					for (var r = 0; r < n.length; r++) t != n[r] && this.unselect(n[r])
				}
			};
			return Timeline
		}
	}), define("nls/harStats", {
		root: {
			pieLabelDNS: "DNS",
			pieLabelSSL: "SSL/TLS",
			pieLabelConnect: "连接",
			pieLabelBlocked: "被阻止",
			pieLabelSend: "发送",
			pieLabelWait: "等待",
			pieLabelReceive: "接收",
			pieLabelHTMLText: "HTML/Text",
			pieLabelJavaScript: "JavaScript",
			pieLabelCSS: "CSS",
			pieLabelImage: "图片",
			pieLabelFlash: "Flash",
			pieLabelOthers: "其他",
			pieLabelHeadersSent: "发送头文件",
			pieLabelBodiesSent: "发送bodies",
			pieLabelHeadersReceived: "接收头文件",
			pieLabelBodiesReceived: "接收bodies",
			pieLabelDownloaded: "已下载",
			pieLabelPartial: "局部",
			pieLabelFromCache: "来自缓存"
		}
	}), define("domplate/infoTip", ["domplate/domplate", "core/lib", "core/trace"], function (Domplate, Lib, Trace) {
		with(Domplate) {
			var InfoTip = Lib.extend({
				listeners: [],
				maxWidth: 100,
				maxHeight: 80,
				infoTipMargin: 10,
				infoTipWindowPadding: 25,
				tags: domplate({
					infoTipTag: DIV({
						"class": "infoTip"
					})
				}),
				initialize: function () {
					var e = $("body");
					return e.bind("mouseover", Lib.bind(this.onMouseMove, this)), e.bind("mouseout", Lib.bind(this.onMouseOut, this)), e.bind("mousemove", Lib.bind(this.onMouseMove, this)), this.infoTip = this.tags.infoTipTag.append({}, Lib.getBody(document))
				},
				showInfoTip: function (e, t, n, r, i, s) {
					var o = Lib.getOverflowParent(t),
						u = n + (o ? o.scrollLeft : 0),
						a = Lib.dispatch2(this.listeners, "showInfoTip", [e, t, u, r, i, s]);
					if (a) {
						var f = e.ownerDocument.documentElement,
							l = f.clientWidth,
							c = f.clientHeight;
						n + e.offsetWidth + this.infoTipMargin > l - this.infoTipWindowPadding ? (e.style.left = "auto", e.style.right = l - n + this.infoTipMargin + "px") : (e.style.left = n + this.infoTipMargin + "px", e.style.right = "auto"), r + e.offsetHeight + this.infoTipMargin > c ? (e.style.top = Math.max(0, c - (e.offsetHeight + this.infoTipMargin)) + "px", e.style.bottom = "auto") : (e.style.top = r + this.infoTipMargin + "px", e.style.bottom = "auto"), e.setAttribute("active", "true")
					} else this.hideInfoTip(e)
				},
				hideInfoTip: function (e) {
					e && e.removeAttribute("active")
				},
				onMouseOut: function (e) {
					e.relatedTarget || this.hideInfoTip(this.infoTip)
				},
				onMouseMove: function (e) {
					this.infoTip.setAttribute("multiline", !1);
					var t = e.clientX,
						n = e.clientY;
					this.showInfoTip(this.infoTip, e.target, t, n, e.rangeParent, e.rangeOffset)
				},
				populateTimingInfoTip: function (e, t) {
					return this.tags.colorTag.replace({
						rgbValue: t
					}, e), !0
				},
				addListener: function (e) {
					this.listeners.push(e)
				},
				removeListener: function (e) {
					Lib.remove(this.listeners, e)
				}
			});
			return InfoTip.initialize(), InfoTip
		}
	}), define("tabs/harStats", ["domplate/domplate", "core/lib", "i18n!nls/harStats", "preview/harSchema", "preview/harModel", "core/cookies", "domplate/infoTip", "core/trace"], function (Domplate, Lib, Strings, HarSchema, HarModel, Cookies, InfoTip, Trace) {
		with(Domplate) {
			function PieBase() {}
			PieBase.prototype = {
				data: [],
				title: "",
				getLabelTooltipText: function (e) {
					return e.label + ": " + Lib.formatSize(e.value)
				},
				cleanUp: function () {
					for (var e = 0; e < this.data.length; e++) this.data[e].value = 0, this.data[e].count = 0
				}
			};

			function TimingPie() {}
			TimingPie.prototype = Lib.extend(PieBase.prototype, {
				title: "Summary of request times.",
				data: [{
					value: 0,
					label: Strings.pieLabelBlocked,
					color: "rgb(228, 214, 193)"
				}, {
					value: 0,
					label: Strings.pieLabelDNS,
					color: "rgb(119, 192, 203)"
				}, {
					value: 0,
					label: Strings.pieLabelSSL,
					color: "rgb(168, 196, 173)"
				}, {
					value: 0,
					label: Strings.pieLabelConnect,
					color: "rgb(179, 222, 93)"
				}, {
					value: 0,
					label: Strings.pieLabelSend,
					color: "rgb(224, 171, 157)"
				}, {
					value: 0,
					label: Strings.pieLabelWait,
					color: "rgb(163, 150, 190)"
				}, {
					value: 0,
					label: Strings.pieLabelReceive,
					color: "rgb(194, 194, 194)"
				}],
				getLabelTooltipText: function (e) {
					return e.label + ": " + Lib.formatTime(e.value)
				}
			});

			function ContentPie() {}
			ContentPie.prototype = Lib.extend(PieBase.prototype, {
				title: "Summary of content types.",
				data: [{
					value: 0,
					label: Strings.pieLabelHTMLText,
					color: "rgb(174, 234, 218)"
				}, {
					value: 0,
					label: Strings.pieLabelJavaScript,
					color: "rgb(245, 230, 186)"
				}, {
					value: 0,
					label: Strings.pieLabelCSS,
					color: "rgb(212, 204, 219)"
				}, {
					value: 0,
					label: Strings.pieLabelImage,
					color: "rgb(220, 171, 181)"
				}, {
					value: 0,
					label: Strings.pieLabelFlash,
					color: "rgb(166, 156, 222)"
				}, {
					value: 0,
					label: Strings.pieLabelOthers,
					color: "rgb(229, 171, 255)"
				}],
				getLabelTooltipText: function (e) {
					return e.count + "x" + " " + e.label + ": " + Lib.formatSize(e.value)
				}
			});

			function TrafficPie() {}
			TrafficPie.prototype = Lib.extend(PieBase.prototype, {
				title: "Summary of sent and received bodies & headers.",
				data: [{
					value: 0,
					label: Strings.pieLabelHeadersSent,
					color: "rgb(247, 179, 227)"
				}, {
					value: 0,
					label: Strings.pieLabelBodiesSent,
					color: "rgb(226, 160, 241)"
				}, {
					value: 0,
					label: Strings.pieLabelHeadersReceived,
					color: "rgb(166, 232, 166)"
				}, {
					value: 0,
					label: Strings.pieLabelBodiesReceived,
					color: "rgb(168, 196, 173)"
				}]
			});

			function CachePie() {}
			CachePie.prototype = Lib.extend(PieBase.prototype, {
				title: "Comparison of downloaded data from the server and browser cache.",
				data: [{
					value: 0,
					label: Strings.pieLabelDownloaded,
					color: "rgb(182, 182, 182)"
				}, {
					value: 0,
					label: Strings.pieLabelPartial,
					color: "rgb(218, 218, 218)"
				}, {
					value: 0,
					label: Strings.pieLabelFromCache,
					color: "rgb(239, 239, 239)"
				}],
				getLabelTooltipText: function (e) {
					return e.count + "x" + " " + e.label + ": " + Lib.formatSize(e.value)
				}
			});
			var timingPie = new TimingPie,
				contentPie = new ContentPie,
				trafficPie = new TrafficPie,
				cachePie = new CachePie,
				jsTypes = {
					"text/javascript": 1,
					"text/jscript": 1,
					"application/javascript": 1,
					"application/x-javascript": 1,
					"text/js": 1
				},
				htmlTypes = {
					"text/plain": 1,
					"text/html": 1
				},
				cssTypes = {
					"text/css": 1
				},
				imageTypes = {
					"image/png": 1,
					"image/jpeg": 1,
					"image/gif": 1
				},
				flashTypes = {
					"application/x-shockwave-flash": 1
				},
				jsonTypes = {
					"text/x-json": 1,
					"text/x-js": 1,
					"application/json": 1,
					"application/x-js": 1
				},
				xmlTypes = {
					"application/xml": 1,
					"application/xhtml+xml": 1,
					"application/vnd.mozilla.xul+xml": 1,
					"text/xml": 1,
					"text/xul": 1,
					"application/rdf+xml": 1
				},
				unknownTypes = {
					"text/xsl": 1,
					"text/sgml": 1,
					"text/rtf": 1,
					"text/x-setext": 1,
					"text/richtext": 1,
					"text/tab-separated-values": 1,
					"text/rdf": 1,
					"text/xif": 1,
					"text/ecmascript": 1,
					"text/vnd.curl": 1,
					"text/vbscript": 1,
					"view-source": 1,
					"view-fragment": 1,
					"application/x-httpd-php": 1,
					"application/ecmascript": 1,
					"application/http-index-format": 1
				};

			function Stats(e, t) {
				this.model = e, this.timeline = t, this.timeline.addListener(this)
			}
			Stats.prototype = domplate({
				element: null,
				tag: DIV({
					"class": "pageStatsBody",
					style: "height: auto; display: none"
				}),
				update: function (e) {
					if (!this.isVisible()) return;
					this.cleanUp();
					var t = HarSchema.timingsType.properties;
					e.length || e.push(null);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							i = r ? this.model.getPageEntries(r) : this.model.getAllEntries();
						for (var s = 0; s < i.length; s++) {
							var o = i[s];
							if (!o.timings) continue;
							timingPie.data[0].value += o.timings.blocked, timingPie.data[1].value += o.timings.dns, timingPie.data[2].value += o.timings.ssl > 0 ? o.timings.ssl : 0, timingPie.data[3].value += o.timings.connect, timingPie.data[4].value += o.timings.send, timingPie.data[5].value += o.timings.wait, timingPie.data[6].value += o.timings.receive, o.timings.ssl > 0 && (timingPie.data[3].value -= o.timings.ssl);
							var u = o.response,
								a = u.bodySize > 0 ? u.bodySize : 0,
								f = u.content.mimeType,
								l = f ? f.match(/^([^;]+)/)[1] : null,
								f = l ? l : u.content.mimeType;
							htmlTypes[f] ? (contentPie.data[0].value += a, contentPie.data[0].count++) : jsTypes[f] ? (contentPie.data[1].value += a, contentPie.data[1].count++) : cssTypes[f] ? (contentPie.data[2].value += a, contentPie.data[2].count++) : imageTypes[f] ? (contentPie.data[3].value += a, contentPie.data[3].count++) : flashTypes[f] ? (contentPie.data[4].value += a, contentPie.data[4].count++) : (contentPie.data[5].value += a, contentPie.data[5].count++), trafficPie.data[0].value += o.request.headersSize > 0 ? o.request.headersSize : 0, trafficPie.data[1].value += o.request.bodySize > 0 ? o.request.bodySize : 0, trafficPie.data[2].value += o.response.headersSize > 0 ? o.response.headersSize : 0, trafficPie.data[3].value += a, o.response.status == 206 ? (cachePie.data[1].value += a, cachePie.data[1].count++) : o.response.status == 304 ? (cachePie.data[2].value += a, cachePie.data[2].count++) : a > 0 && (cachePie.data[0].value += a, cachePie.data[0].count++)
						}
					}
					Pie.draw(Lib.$(this.timingPie, "pieGraph"), timingPie), Pie.draw(Lib.$(this.contentPie, "pieGraph"), contentPie), Pie.draw(Lib.$(this.trafficPie, "pieGraph"), trafficPie), Pie.draw(Lib.$(this.cachePie, "pieGraph"), cachePie)
				},
				cleanUp: function () {
					timingPie.cleanUp(), contentPie.cleanUp(), trafficPie.cleanUp(), cachePie.cleanUp()
				},
				showInfoTip: function (e, t, n, r) {
					return Pie.showInfoTip(e, t, n, r)
				},
				onSelectionChange: function (e) {
					this.update(e)
				},
				show: function (e) {
					if (this.isVisible()) return;
					InfoTip.addListener(this), Lib.setClass(this.element, "opened"), e ? $(this.element).slideDown() : this.element.style.display = "block";
					var t = this.timeline.getSelection();
					this.update(t)
				},
				hide: function (e) {
					if (!this.isVisible()) return;
					InfoTip.removeListener(this), Lib.removeClass(this.element, "opened"), e ? $(this.element).slideUp() : this.element.style.display = "none"
				},
				isVisible: function () {
					return Lib.hasClass(this.element, "opened")
				},
				toggle: function (e) {
					this.isVisible() ? this.hide(e) : this.show(e)
				},
				render: function (e) {
					return this.element = this.tag.replace({}, e), this.timingPie = Pie.render(timingPie, this.element), this.contentPie = Pie.render(contentPie, this.element), this.trafficPie = Pie.render(trafficPie, this.element), this.cachePie = Pie.render(cachePie, this.element), this.cachePie.style.borderRight = 0, this.element
				}
			});
			var Pie = domplate({
					tag: TABLE({
						"class": "pagePieTable",
						cellpadding: 0,
						cellspacing: 0,
						_repObject: "$pie"
					}, TBODY(TR(TD({
						"class": "pieBox",
						title: "$pie.title"
					}), TD(FOR("item", "$pie.data", DIV({
						"class": "pieLabel",
						_repObject: "$item"
					}, SPAN({
						"class": "box",
						style: "background-color: $item.color"
					}, "&nbsp;"), SPAN({
						"class": "label"
					}, "$item.label"))))))),
					render: function (e, t) {
						var n = this.tag.append({
								pie: e
							}, t),
							r = Lib.$(n, "pieBox"),
							i = document.createElement("canvas");
						return i.setAttribute("class", "pieGraph "), i.setAttribute("height", "100"), i.setAttribute("width", "100"), r.appendChild(i), typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager.initElement(i), n
					},
					draw: function (e, t) {
						if (!e || !e.getContext) return;
						var n = e.getContext("2d"),
							r = Math.min(e.width, e.height) / 2,
							i = [e.width / 2, e.height / 2];
						n.clearRect(0, 0, e.width, e.height);
						var s = 0,
							o = t.data,
							u = 0;
						for (var a in o) u += o[a].value;
						if (!u) {
							n.beginPath(), n.moveTo(i[0], i[1]), n.arc(i[0], i[1], r, 0, Math.PI * 2, !1), n.closePath(), n.fillStyle = "rgb(229,236,238)", n.lineStyle = "lightgray", n.fill();
							return
						}
						for (var a = 0; a < o.length; a++) {
							var f = o[a].value / u;
							n.beginPath(), n.moveTo(i[0], i[1]), n.arc(i[0], i[1], r, Math.PI * (-0.5 + 2 * s), Math.PI * (-0.5 + 2 * (s + f)), !1), n.lineTo(i[0], i[1]), n.closePath(), n.fillStyle = o[a].color, n.fill(), s += f
						}
					},
					showInfoTip: function (e, t, n, r) {
						var i = Lib.getAncestorByClass(t, "pagePieTable");
						if (!i) return !1;
						var s = Lib.getAncestorByClass(t, "pieLabel");
						if (s) return PieInfoTip.render(i.repObject, s.repObject, e), !0
					}
				}),
				PieInfoTip = domplate({
					tag: DIV({
						"class": "pieLabelInfoTip"
					}, "$text"),
					getText: function (e) {
						return e.label + ": " + formatTime(e.value)
					},
					render: function (e, t, n) {
						var r = e.getLabelTooltipText(t);
						this.tag.replace({
							text: r
						}, n)
					}
				});
			return Stats
		}
	}), define("nls/requestList", {
		root: {
			fromCache: "来自缓存",
			menuBreakLayout: "打断时间线布局",
			menuOpenRequestInWindow: "在新窗口中打开请求",
			menuOpenResponseInWindow: "在新窗口中打开回复",
			request: "请求",
			requests: "请求",
			tooltipSize: "%S (%S bytes)",
			tooltipZippedSize: "%S (%S bytes) - compressed",
			tooltipUnzippedSize: "%S (%S bytes) - uncompressed",
			unknownSize: "Unknown size",
			"request.Started": "自开始起请求开始时间",
			"request.phases.label": "请求阶段开始时间和与请求开始时间相关的运行时间：",
			"request.phase.Resolving": "DNS查询",
			"request.phase.Connecting": "连接中",
			"request.phase.Blocking": "阻止中",
			"request.phase.Sending": "发送中",
			"request.phase.Waiting": "等待中",
			"request.phase.Receiving": "接收中",
			"request.timings.label": "相对于请求开始的事件计时：",
			ContentLoad: "已加载DOM",
			WindowLoad: "页面加载",
			"page.event.Load": "页面加载",
			menuBreakTimeline: "打断时间线布局",
			menuOpenRequest: "在新窗口中打开请求",
			menuOpenResponse: "在新窗口中打开回复"
		}
	}), define("nls/requestBody", {
		root: {
			RequestHeaders: "请求头",
			ResponseHeaders: "回复头",
			RequestCookies: "请求 Cookies",
			ResponseCookies: "回复 Cookies",
			URLParameters: "参数",
			Headers: "头",
			Post: "Post",
			Put: "Put",
			Cookies: "Cookies",
			Response: "回复",
			Cache: "缓存",
			HTML: "HTML",
			DataURL: "数据 URL"
		}
	}), define("core/dragdrop", ["core/lib"], function (e) {
		function t(t, n) {
			this.element = t, this.handle = t, this.callbacks = n, this.cursorStartPos = null, this.cursorLastPos = null, this.dragging = !1, this.onDragStart = e.bind(this.onDragStart, this), this.onDragOver = e.bind(this.onDragOver, this), this.onDrop = e.bind(this.onDrop, this), e.addEventListener(this.element, "mousedown", this.onDragStart, !1), this.active = !0
		}

		function n(e, t) {
			this.x = e, this.y = t, this.Add = function (e) {
				var t = new n(this.x, this.y);
				return e != null && (isNaN(e.x) || (t.x += e.x), isNaN(e.y) || (t.y += e.y)), t
			}, this.Subtract = function (e) {
				var t = new n(this.x, this.y);
				return e != null && (isNaN(e.x) || (t.x -= e.x), isNaN(e.y) || (t.y -= e.y)), t
			}, this.Bound = function (e, t) {
				var n = this.Max(e);
				return n.Min(t)
			}, this.Check = function () {
				var e = new n(this.x, this.y);
				return isNaN(e.x) && (e.x = 0), isNaN(e.y) && (e.y = 0), e
			}, this.Apply = function (e) {
				typeof e == "string" && (e = document.getElementById(e));
				if (!e) return;
				isNaN(this.x) || (e.style.left = this.x + "px"), isNaN(this.y) || (e.style.top = this.y + "px")
			}
		}

		function r(e) {
			return isNaN(window.scrollX) ? new n(e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft, e.clientY + document.documentElement.scrollTop + document.body.scrollTop) : new n(e.clientX + window.scrollX, e.clientY + window.scrollY)
		}
		t.prototype = {
			onDragStart: function (t) {
				var n = e.fixEvent(t);
				if (this.dragging) return;
				this.callbacks.onDragStart && this.callbacks.onDragStart(this), this.dragging = !0, this.cursorStartPos = r(n), this.cursorLastPos = this.cursorStartPos, e.addEventListener(this.element.ownerDocument, "mousemove", this.onDragOver, !1), e.addEventListener(this.element.ownerDocument, "mouseup", this.onDrop, !1), e.cancelEvent(n)
			},
			onDragOver: function (t) {
				if (!this.dragging) return;
				var n = e.fixEvent(t);
				e.cancelEvent(n);
				var i = r(n),
					i = i.Subtract(this.cursorStartPos);
				if (this.cursorLastPos.x == i.x && this.cursorLastPos.y == i.y) return;
				if (this.callbacks.onDragOver != null) {
					var s = this.callbacks.onDragOver(i, this);
					this.cursorLastPos = i
				}
			},
			onDrop: function (t) {
				if (!this.dragging) return;
				var n = e.fixEvent(t);
				e.cancelEvent(n), this.dragStop()
			},
			dragStop: function () {
				if (!this.dragging) return;
				e.removeEventListener(this.element.ownerDocument, "mousemove", this.onDragOver, !1), e.removeEventListener(this.element.ownerDocument, "mouseup", this.onDrop, !1), this.cursorStartPos = null, this.cursorLastPos = null, this.callbacks.onDrop != null && this.callbacks.onDrop(this), this.dragging = !1
			},
			destroy: function () {
				e.removeEventListener(this.element, "mousedown", this.onDragStart, !1), this.active = !1, this.dragging && this.dragStop()
			}
		};
		var i = {};
		return i.Tracker = t, i
	}), define("syntax-highlighter/shCore", [], function () {
		var e = {
			sh: {
				Toolbar: {},
				Utils: {},
				RegexLib: {},
				Brushes: {},
				Strings: {
					AboutDialog: '<html><head><title>About...</title></head><body class="dp-about"><table cellspacing="0"><tr><td class="copy"><p class="title">dp.SyntaxHighlighter</div><div class="para">Version: {V}</p><p><a href="http://www.dreamprojections.com/syntaxhighlighter/?ref=about" target="_blank">http://www.dreamprojections.com/syntaxhighlighter</a></p>&copy;2004-2007 Alex Gorbatchev.</td></tr><tr><td class="footer"><input type="button" class="close" value="OK" onClick="window.close()"/></td></tr></table></body></html>'
				},
				ClipboardSwf: null,
				Version: "1.5.1"
			}
		};
		return e.SyntaxHighlighter = e.sh, e.sh.Toolbar.Commands = {
			ExpandSource: {
				label: "+ expand source",
				check: function (e) {
					return e.collapse
				},
				func: function (e, t) {
					e.parentNode.removeChild(e), t.div.className = t.div.className.replace("collapsed", "")
				}
			},
			ViewSource: {
				label: "view plain",
				func: function (t, n) {
					var r = e.sh.Utils.FixForBlogger(n.originalCode).replace(/</g, "&lt;"),
						i = window.open("", "_blank", "width=750, height=400, location=0, resizable=1, menubar=0, scrollbars=0");
					i.document.write('<textarea style="width:99%;height:99%">' + r + "</textarea>"), i.document.close()
				}
			},
			CopyToClipboard: {
				label: "copy to clipboard",
				check: function () {
					return window.clipboardData != null || e.sh.ClipboardSwf != null
				},
				func: function (t, n) {
					var r = e.sh.Utils.FixForBlogger(n.originalCode).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
					if (window.clipboardData) window.clipboardData.setData("text", r);
					else if (e.sh.ClipboardSwf != null) {
						var i = n.flashCopier;
						i == null && (i = document.createElement("div"), n.flashCopier = i, n.div.appendChild(i)), i.innerHTML = '<embed src="' + e.sh.ClipboardSwf + '" FlashVars="clipboard=' + encodeURIComponent(r) + '" width="0" height="0" type="application/x-shockwave-flash"></embed>'
					}
					alert("The code is in your clipboard now")
				}
			},
			PrintSource: {
				label: "print",
				func: function (t, n) {
					var r = document.createElement("IFRAME"),
						i = null;
					r.style.cssText = "position:absolute;width:0px;height:0px;left:-500px;top:-500px;", document.body.appendChild(r), i = r.contentWindow.document, e.sh.Utils.CopyStyles(i, window.document), i.write('<div class="' + n.div.className.replace("collapsed", "") + ' printing">' + n.div.innerHTML + "</div>"), i.close(), r.contentWindow.focus(), r.contentWindow.print(), alert("Printing..."), document.body.removeChild(r)
				}
			},
			About: {
				label: "?",
				func: function (t) {
					var n = window.open("", "_blank", "dialog,width=300,height=150,scrollbars=0"),
						r = n.document;
					e.sh.Utils.CopyStyles(r, window.document), r.write(e.sh.Strings.AboutDialog.replace("{V}", e.sh.Version)), r.close(), n.focus()
				}
			}
		}, e.sh.Toolbar.Create = function (t) {
			var n = document.createElement("DIV");
			n.className = "tools";
			for (var r in e.sh.Toolbar.Commands) {
				var i = e.sh.Toolbar.Commands[r];
				if (i.check != null && !i.check(t)) continue;
				n.innerHTML += '<a href="#" onclick="dp.sh.Toolbar.Command(\'' + r + "',this);return false;\">" + i.label + "</a>"
			}
			return n
		}, e.sh.Toolbar.Command = function (t, n) {
			var r = n;
			while (r != null && r.className.indexOf("dp-highlighter") == -1) r = r.parentNode;
			r != null && e.sh.Toolbar.Commands[t].func(n, r.highlighter)
		}, e.sh.Utils.CopyStyles = function (e, t) {
			var n = t.getElementsByTagName("link");
			for (var r = 0; r < n.length; r++) n[r].rel.toLowerCase() == "stylesheet" && e.write('<link type="text/css" rel="stylesheet" href="' + n[r].href + '"></link>')
		}, e.sh.Utils.FixForBlogger = function (t) {
			return e.sh.isBloggerMode == 1 ? t.replace(/<br\s*\/?>|&lt;br\s*\/?&gt;/gi, "\n") : t
		}, e.sh.RegexLib = {
			MultiLineCComments: new RegExp("/\\*[\\s\\S]*?\\*/", "gm"),
			SingleLineCComments: new RegExp("//.*$", "gm"),
			SingleLinePerlComments: new RegExp("#.*$", "gm"),
			DoubleQuotedString: new RegExp('"(?:\\.|(\\\\\\")|[^\\""\\n])*"', "g"),
			SingleQuotedString: new RegExp("'(?:\\.|(\\\\\\')|[^\\''\\n])*'", "g")
		}, e.sh.Match = function (e, t, n) {
			this.value = e, this.index = t, this.length = e.length, this.css = n
		}, e.sh.Highlighter = function () {
			this.noGutter = !1, this.addControls = !0, this.collapse = !1, this.tabsToSpaces = !0, this.wrapColumn = 80, this.showColumns = !0
		}, e.sh.Highlighter.SortCallback = function (e, t) {
			return e.index < t.index ? -1 : e.index > t.index ? 1 : e.length < t.length ? -1 : e.length > t.length ? 1 : 0
		}, e.sh.Highlighter.prototype.CreateElement = function (e) {
			var t = document.createElement(e);
			return t.highlighter = this, t
		}, e.sh.Highlighter.prototype.GetMatches = function (t, n) {
			var r = 0,
				i = null;
			while ((i = t.exec(this.code)) != null) this.matches[this.matches.length] = new e.sh.Match(i[0], i.index, n)
		}, e.sh.Highlighter.prototype.AddBit = function (e, t) {
			if (e == null || e.length == 0) return;
			var n = this.CreateElement("SPAN");
			e = e.replace(/ /g, "&nbsp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/\n/gm, "&nbsp;<br>");
			if (t != null)
				if (/br/gi.test(e)) {
					var r = e.split("&nbsp;<br>");
					for (var i = 0; i < r.length; i++) n = this.CreateElement("SPAN"), n.className = t, n.innerHTML = r[i], this.div.appendChild(n), i + 1 < r.length && this.div.appendChild(this.CreateElement("BR"))
				} else n.className = t, n.innerHTML = e, this.div.appendChild(n);
			else n.innerHTML = e, this.div.appendChild(n)
		}, e.sh.Highlighter.prototype.IsInside = function (e) {
			if (e == null || e.length == 0) return !1;
			for (var t = 0; t < this.matches.length; t++) {
				var n = this.matches[t];
				if (n == null) continue;
				if (e.index > n.index && e.index < n.index + n.length) return !0
			}
			return !1
		}, e.sh.Highlighter.prototype.ProcessRegexList = function () {
			for (var e = 0; e < this.regexList.length; e++) this.GetMatches(this.regexList[e].regex, this.regexList[e].css)
		}, e.sh.Highlighter.prototype.ProcessSmartTabs = function (e) {
			function s(e, t, n) {
				var r = e.substr(0, t),
					i = e.substr(t + 1, e.length),
					s = "";
				for (var o = 0; o < n; o++) s += " ";
				return r + s + i
			}

			function o(e, t) {
				if (e.indexOf(i) == -1) return e;
				var n = 0;
				while ((n = e.indexOf(i)) != -1) {
					var r = t - n % t;
					e = s(e, n, r)
				}
				return e
			}
			var t = e.split("\n"),
				n = "",
				r = 4,
				i = "	";
			for (var u = 0; u < t.length; u++) n += o(t[u], r) + "\n";
			return n
		}, e.sh.Highlighter.prototype.SwitchToList = function () {
			var t = this.div.innerHTML.replace(/<(br)\/?>/gi, "\n"),
				n = t.split("\n");
			this.addControls == 1 && this.bar.appendChild(e.sh.Toolbar.Create(this));
			if (this.showColumns) {
				var r = this.CreateElement("div"),
					i = this.CreateElement("div"),
					s = 10,
					o = 1;
				while (o <= 150) o % s == 0 ? (r.innerHTML += o, o += (o + "").length) : (r.innerHTML += "&middot;", o++);
				i.className = "columns", i.appendChild(r), this.bar.appendChild(i)
			}
			for (var o = 0, u = this.firstLine; o < n.length - 1; o++, u++) {
				var a = this.CreateElement("LI"),
					f = this.CreateElement("SPAN");
				a.className = o % 2 == 0 ? "alt" : "", f.innerHTML = n[o] + "&nbsp;", a.appendChild(f), this.ol.appendChild(a)
			}
			this.div.innerHTML = ""
		}, e.sh.Highlighter.prototype.Highlight = function (t) {
			function n(e) {
				return e.replace(/^\s*(.*?)[\s\n]*$/g, "$1")
			}

			function r(e) {
				return e.replace(/\n*$/, "").replace(/^\n*/, "")
			}

			function i(t) {
				var r = e.sh.Utils.FixForBlogger(t).split("\n"),
					i = new Array,
					s = new RegExp("^\\s*", "g"),
					o = 1e3;
				for (var u = 0; u < r.length && o > 0; u++) {
					if (n(r[u]).length == 0) continue;
					var a = s.exec(r[u]);
					a != null && a.length > 0 && (o = Math.min(a[0].length, o))
				}
				if (o > 0)
					for (var u = 0; u < r.length; u++) r[u] = r[u].substr(o);
				return r.join("\n")
			}

			function s(e, t, n) {
				return e.substr(t, n - t)
			}
			var o = 0;
			t == null && (t = ""), this.originalCode = t, this.code = r(i(t)), this.div = this.CreateElement("DIV"), this.bar = this.CreateElement("DIV"), this.ol = this.CreateElement("OL"), this.matches = new Array, this.div.className = "dp-highlighter", this.div.highlighter = this, this.bar.className = "bar", this.ol.start = this.firstLine, this.CssClass != null && (this.ol.className = this.CssClass), this.collapse && (this.div.className += " collapsed"), this.noGutter && (this.div.className += " nogutter"), this.tabsToSpaces == 1 && (this.code = this.ProcessSmartTabs(this.code)), this.ProcessRegexList();
			if (this.matches.length == 0) {
				this.AddBit(this.code, null), this.SwitchToList(), this.div.appendChild(this.bar), this.div.appendChild(this.ol);
				return
			}
			this.matches = this.matches.sort(e.sh.Highlighter.SortCallback);
			for (var u = 0; u < this.matches.length; u++) this.IsInside(this.matches[u]) && (this.matches[u] = null);
			for (var u = 0; u < this.matches.length; u++) {
				var a = this.matches[u];
				if (a == null || a.length == 0) continue;
				this.AddBit(s(this.code, o, a.index), null), this.AddBit(a.value, a.css), o = a.index + a.length
			}
			this.AddBit(this.code.substr(o), null), this.SwitchToList(), this.div.appendChild(this.bar), this.div.appendChild(this.ol)
		}, e.sh.Highlighter.prototype.GetKeywords = function (e) {
			return "\\b" + e.replace(/ /g, "\\b|\\b") + "\\b"
		}, e.sh.BloggerMode = function () {
			e.sh.isBloggerMode = !0
		}, e.sh.HighlightAll = function (t, n, r, i, s, o) {
			function u() {
				var e = arguments;
				for (var t = 0; t < e.length; t++) {
					if (e[t] == null) continue;
					if (typeof e[t] == "string" && e[t] != "") return e[t] + "";
					if (typeof e[t] == "object" && e[t].value != "") return e[t].value + ""
				}
				return null
			}

			function a(e, t) {
				for (var n = 0; n < t.length; n++)
					if (t[n] == e) return !0;
				return !1
			}

			function f(e, t, n) {
				var r = new RegExp("^" + e + "\\[(\\w+)\\]$", "gi"),
					i = null;
				for (var s = 0; s < t.length; s++)
					if ((i = r.exec(t[s])) != null) return i[1];
				return n
			}

			function l(e, t, n) {
				var r = document.getElementsByTagName(n);
				for (var i = 0; i < r.length; i++) r[i].getAttribute("name") == t && e.push(r[i])
			}
			var c = [],
				h = null,
				p = {},
				d = "innerHTML";
			typeof t == "string" ? (l(c, t, "pre"), l(c, t, "textarea")) : c.push(t);
			if (c.length == 0) return;
			for (var v in e.sh.Brushes) {
				var m = e.sh.Brushes[v].Aliases;
				if (m == null) continue;
				for (var g = 0; g < m.length; g++) p[m[g]] = v
			}
			for (var g = 0; g < c.length; g++) {
				var y = c[g],
					b = u(y.attributes["class"], y.className, y.attributes.language, y.language),
					w = "";
				if (b == null) continue;
				b = b.split(":"), w = b[0].toLowerCase();
				if (p[w] == null) continue;
				h = new e.sh.Brushes[p[w]], y.style.display = "none", h.noGutter = n == null ? a("nogutter", b) : !n, h.addControls = r == null ? !a("nocontrols", b) : r, h.collapse = i == null ? a("collapse", b) : i, h.showColumns = o == null ? a("showcolumns", b) : o;
				var E = document.getElementsByTagName("head")[0];
				if (h.Style && E) {
					var S = document.createElement("style");
					S.setAttribute("type", "text/css");
					if (S.styleSheet) S.styleSheet.cssText = h.Style;
					else {
						var x = document.createTextNode(h.Style);
						S.appendChild(x)
					}
					E.appendChild(S)
				}
				h.firstLine = s == null ? parseInt(f("firstline", b, 1)) : s, h.Highlight(y[d]), h.source = y, y.parentNode.insertBefore(h.div, y)
			}
		}, e.sh.Brushes.JScript = function () {
			var t = "abstract boolean break byte case catch char class const continue debugger default delete do double else enum export extends false final finally float for function goto if implements import in instanceof int interface long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var void volatile while with";
			this.regexList = [{
				regex: e.sh.RegexLib.SingleLineCComments,
				css: "comment"
			}, {
				regex: e.sh.RegexLib.MultiLineCComments,
				css: "comment"
			}, {
				regex: e.sh.RegexLib.DoubleQuotedString,
				css: "string"
			}, {
				regex: e.sh.RegexLib.SingleQuotedString,
				css: "string"
			}, {
				regex: new RegExp("^\\s*#.*", "gm"),
				css: "preprocessor"
			}, {
				regex: new RegExp(this.GetKeywords(t), "gm"),
				css: "keyword"
			}], this.CssClass = "dp-c"
		}, e.sh.Brushes.JScript.prototype = new e.sh.Highlighter, e.sh.Brushes.JScript.Aliases = ["js", "jscript", "javascript"], e
	}), define("preview/requestBody", ["domplate/domplate", "i18n!nls/requestBody", "core/lib", "core/cookies", "domplate/tabView", "core/dragdrop", "syntax-highlighter/shCore"], function (Domplate, Strings, Lib, Cookies, TabView, DragDrop, dp) {
		with(Domplate) {
			function RequestBody() {}
			RequestBody.prototype = domplate({
				render: function (e, t) {
					var n = new TabView("requestBody");
					t.response.headers.length > 0 && n.appendTab(new HeadersTab(t)), t.request.queryString && t.request.queryString.length && n.appendTab(new ParamsTab(t)), t.request.postData && n.appendTab(new SentDataTab(t, t.request.method)), t.response.content.text && t.response.content.text.length > 0 && n.appendTab(new ResponseTab(t)), this.showCache(t) && n.appendTab(new CacheTab(t)), this.showHtml(t) && n.appendTab(new HtmlTab(t)), this.showDataURL(t) && n.appendTab(new DataURLTab(t));
					var r = n.render(e);
					return n.tabs.length > 0 && n.selectTabByName(n.tabs[0].id), r
				},
				showCache: function (e) {
					return e.cache ? e.cache.afterRequest ? e.category == "image" ? !1 : !0 : !1 : !1
				},
				showHtml: function (e) {
					var t = e.response.content.mimeType || "",
						n = e.mimeType || "";
					return Lib.startsWith(t, "text/html") || Lib.startsWith(n, "application/xhtml+xml")
				},
				showDataURL: function (e) {
					return e.request.url.indexOf("data:") == 0
				}
			});

			function HeadersTab(e) {
				this.file = e
			}
			HeadersTab.prototype = domplate(TabView.Tab.prototype, {
				id: "Headers",
				label: Strings.Headers,
				bodyTag: TABLE({
					"class": "netInfoHeadersText netInfoText netInfoHeadersTable",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY(TR({
					"class": "netInfoResponseHeadersTitle"
				}, TD({
					colspan: 2
				}, DIV({
					"class": "netInfoHeadersGroup"
				}, Strings.ResponseHeaders))), TR({
					"class": "netInfoRequestHeadersTitle"
				}, TD({
					colspan: 2
				}, DIV({
					"class": "netInfoHeadersGroup"
				}, Strings.RequestHeaders))))),
				headerDataTag: FOR("param", "$headers", TR(TD({
					"class": "netInfoParamName"
				}, "$param.name"), TD({
					"class": "netInfoParamValue"
				}, PRE("$param|getParamValue")))),
				getParamValue: function (e) {
					return Lib.wrapText(e.value, !0)
				},
				onUpdateBody: function (e, t) {
					this.file.response.headers && this.insertHeaderRows(t, this.file.response.headers, "Headers", "ResponseHeaders"), this.file.request.headers && this.insertHeaderRows(t, this.file.request.headers, "Headers", "RequestHeaders")
				},
				insertHeaderRows: function (e, t, n, r) {
					var i = Lib.getElementByClass(e, "netInfo" + n + "Table"),
						s = Lib.getElementByClass(i, "netInfo" + r + "Title");
					t.length ? (this.headerDataTag.insertRows({
						headers: t
					}, s ? s : e), Lib.removeClass(s, "collapsed")) : Lib.setClass(s, "collapsed")
				}
			});

			function ResponseTab(e) {
				this.file = e
			}
			ResponseTab.prototype = domplate(TabView.Tab.prototype, {
				id: "Response",
				label: Strings.Response,
				bodyTag: DIV({
					"class": "netInfoResponseText netInfoText"
				}, PRE({
					"class": "javascript:nocontrols:nogutter:",
					name: "code"
				})),
				onUpdateBody: function (e, t) {
					var n = Lib.getElementByClass(t, "netInfoResponseText");
					if (this.file.category == "image") {
						Lib.clearNode(n);
						var r = t.ownerDocument.createElement("img");
						r.src = this.file.href, n.appendChild(r, n)
					} else {
						Lib.clearNode(n.firstChild);
						var i = this.file.response.content.text,
							s = this.file.response.content.mimeType;
						s == "application/javascript" || s == "text/javascript" || s == "application/x-javascript" || s == "text/ecmascript" || s == "application/ecmascript" ? (n.firstChild.innerHTML = i, dp.SyntaxHighlighter.HighlightAll(n.firstChild)) : Lib.insertWrappedText(i, n.firstChild)
					}
				}
			});

			function ParamsTab(e) {
				this.file = e
			}
			ParamsTab.prototype = domplate(HeadersTab.prototype, {
				id: "Params",
				label: Strings.URLParameters,
				bodyTag: TABLE({
					"class": "netInfoParamsText netInfoText netInfoParamsTable",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY()),
				onUpdateBody: function (e, t) {
					if (this.file.request.queryString) {
						var n = Lib.getElementByClass(t, "netInfoParamsText");
						this.insertHeaderRows(n, this.file.request.queryString, "Params")
					}
				}
			});

			function SentDataTab(e, t) {
				t = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(), this.file = e, this.id = t, this.label = Strings[t]
			}
			SentDataTab.prototype = domplate(HeadersTab.prototype, {
				bodyTag: DIV({
					"class": "netInfo$tab.id\\Text netInfoText"
				}, TABLE({
					"class": "netInfo$tab.id\\Table",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY())),
				onUpdateBody: function (e, t) {
					var n = this.file.request.postData;
					if (!n) return;
					var r = Lib.getElementByClass(t, "netInfo" + this.id + "Text");
					n.mimeType == "application/x-www-form-urlencoded" ? this.insertHeaderRows(r, n.params, this.id) : Lib.insertWrappedText(n.text, r)
				}
			});

			function CookiesTab(e) {
				this.file = e
			}
			CookiesTab.prototype = domplate(HeadersTab.prototype, {
				id: "Cookies",
				label: Strings.Cookies,
				bodyTag: DIV({
					"class": "netInfoCookiesText netInfoText"
				}, TABLE({
					"class": "netInfoCookiesTable",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY(TR({
					"class": "netInfoResponseCookiesTitle"
				}, TD({
					colspan: 2
				}, DIV({
					"class": "netInfoCookiesGroup"
				}, Strings.ResponseCookies))), TR({
					"class": "netInfoRequestCookiesTitle"
				}, TD({
					colspan: 2
				}, DIV({
					"class": "netInfoCookiesGroup"
				}, Strings.RequestCookies)))))),
				onUpdateBody: function (e, t) {
					if (file.response.cookies) {
						var n = Lib.getElementByClass(t, "netInfoParamsText");
						this.insertHeaderRows(n, file.response.cookies, "Cookies", "ResponseCookies")
					}
					if (file.request.cookies) {
						var n = Lib.getElementByClass(t, "netInfoParamsText");
						this.insertHeaderRows(n, file.request.cookies, "Cookies", "RequestCookies")
					}
				}
			});

			function CacheTab(e) {
				this.file = e
			}
			CacheTab.prototype = domplate(HeadersTab.prototype, {
				id: "Cache",
				label: Strings.Cache,
				bodyTag: DIV({
					"class": "netInfoCacheText netInfoText"
				}, TABLE({
					"class": "netInfoCacheTable",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY())),
				onUpdateBody: function (e, t) {
					if (this.file.cache && this.file.cache.afterRequest) {
						var n = this.file.cache.afterRequest,
							r = [];
						for (var i in n) r.push({
							name: i,
							value: n[i]
						});
						this.insertHeaderRows(t, r, "Cache")
					}
				}
			});

			function HtmlTab(e) {
				this.file = e
			}
			HtmlTab.prototype = domplate(HeadersTab.prototype, {
				id: "HTML",
				label: Strings.HTML,
				bodyTag: DIV({
					"class": "netInfoHtmlText netInfoText"
				}, IFRAME({
					"class": "netInfoHtmlPreview",
					onload: "$onLoad"
				}), DIV({
					"class": "htmlPreviewResizer"
				})),
				onUpdateBody: function (e, t) {
					this.preview = Lib.getElementByClass(t, "netInfoHtmlPreview");
					var n = parseInt(Cookies.getCookie("htmlPreviewHeight"));
					isNaN(n) || (this.preview.style.height = n + "px");
					var r = Lib.getElementByClass(t, "htmlPreviewResizer");
					this.resizer = new DragDrop.Tracker(r, {
						onDragStart: Lib.bind(this.onDragStart, this),
						onDragOver: Lib.bind(this.onDragOver, this),
						onDrop: Lib.bind(this.onDrop, this)
					})
				},
				onLoad: function (e) {
					var t = Lib.fixEvent(e),
						n = Lib.getAncestorByClass(t.target, "tabHTMLBody").repObject;
					n.preview.contentWindow.document.body.innerHTML = n.file.response.content.text
				},
				onDragStart: function (e) {
					var t = Lib.getBody(this.preview.ownerDocument);
					t.setAttribute("hResizing", "true"), this.startHeight = this.preview.clientHeight
				},
				onDragOver: function (e, t) {
					var n = this.startHeight + e.y;
					this.preview.style.height = n + "px", Cookies.setCookie("htmlPreviewHeight", n)
				},
				onDrop: function (e) {
					var t = Lib.getBody(this.preview.ownerDocument);
					t.removeAttribute("hResizing")
				}
			});

			function DataURLTab(e) {
				this.file = e
			}
			return DataURLTab.prototype = domplate(HeadersTab.prototype, {
				id: "DataURL",
				label: Strings.DataURL,
				bodyTag: DIV({
					"class": "netInfoDataURLText netInfoText"
				}),
				onUpdateBody: function (e, t) {
					var n = Lib.getElementByClass(t, "netInfoDataURLText"),
						r = this.file.request.url;
					if (r.indexOf("data:image") == 0) {
						var i = t.ownerDocument.createElement("img");
						i.src = r, n.appendChild(i)
					} else Lib.insertWrappedText(unescape(r), n)
				}
			}), RequestBody
		}
	}), define("preview/requestList", ["domplate/domplate", "core/lib", "i18n!nls/requestList", "preview/harModel", "core/cookies", "preview/requestBody", "domplate/infoTip", "domplate/popupMenu"], function (Domplate, Lib, Strings, HarModel, Cookies, RequestBody, InfoTip, Menu) {
		with(Domplate) {
			function RequestList(e) {
				this.input = e, this.pageTimings = [], this.addPageTiming({
					name: "onContentLoad",
					classes: "netContentLoadBar",
					description: Strings.ContentLoad
				}), this.addPageTiming({
					name: "onLoad",
					classes: "netWindowLoadBar",
					description: Strings.WindowLoad
				}), InfoTip.addListener(this)
			}
			RequestList.columns = ["url", "status", "type", "domain", "size", "timeline"], RequestList.defaultColumns = ["url", "status", "size", "timeline"], RequestList.getVisibleColumns = function () {
				var e = Cookies.getCookie("previewCols");
				if (e) return e = e.replace(/\+/g, " "), e = unescape(e), e.split(" ");
				if (!e) {
					var t = document.getElementById("content");
					if (t) {
						e = t.getAttribute("previewCols");
						if (e) return e.split(" ")
					}
				}
				return Lib.cloneArray(RequestList.defaultColumns)
			}, RequestList.setVisibleColumns = function (e, t) {
				e || (e = RequestList.getVisibleColumns()), e.join && (e = e.join(" "));
				var n = document.getElementById("content");
				n && n.setAttribute("previewCols", e), t || Cookies.setCookie("previewCols", e)
			}, RequestList.setVisibleColumns(), RequestList.prototype = domplate({
				tableTag: TABLE({
					"class": "netTable",
					cellpadding: 0,
					cellspacing: 0,
					onclick: "$onClick",
					_repObject: "$requestList"
				}, TBODY(TR({
					"class": "netSizerRow"
				}, TD({
					"class": "netHrefCol netCol",
					width: "20%"
				}), TD({
					"class": "netStatusCol netCol",
					width: "7%"
				}), TD({
					"class": "netTypeCol netCol",
					width: "7%"
				}), TD({
					"class": "netDomainCol netCol",
					width: "7%"
				}), TD({
					"class": "netSizeCol netCol",
					width: "7%"
				}), TD({
					"class": "netTimeCol netCol",
					width: "100%"
				}), TD({
					"class": "netOptionsCol netCol",
					width: "15px"
				})))),
				fileTag: FOR("file", "$files", TR({
					"class": "netRow loaded",
					$isExpandable: "$file|isExpandable",
					$responseError: "$file|isError",
					$responseRedirect: "$file|isRedirect",
					$fromCache: "$file|isFromCache"
				}, TD({
					"class": "netHrefCol netCol"
				}, DIV({
					"class": "netHrefLabel netLabel",
					style: "margin-left: $file|getIndent\\px"
				}, "$file|getHref"), DIV({
					"class": "netFullHrefLabel netHrefLabel netLabel",
					style: "margin-left: $file|getIndent\\px"
				}, "$file|getFullHref")), TD({
					"class": "netStatusCol netCol"
				}, DIV({
					"class": "netStatusLabel netLabel"
				}, "$file|getStatus")), TD({
					"class": "netTypeCol netCol"
				}, DIV({
					"class": "netTypeLabel netLabel"
				}, "$file|getType")), TD({
					"class": "netDomainCol netCol"
				}, DIV({
					"class": "netDomainLabel netLabel"
				}, "$file|getDomain")), TD({
					"class": "netSizeCol netCol"
				}, DIV({
					"class": "netSizeLabel netLabel"
				}, "$file|getSize")), TD({
					"class": "netTimeCol netCol"
				}, DIV({
					"class": "netTimelineBar"
				}, "&nbsp;", DIV({
					"class": "netBlockingBar netBar"
				}), DIV({
					"class": "netResolvingBar netBar"
				}), DIV({
					"class": "netConnectingBar netBar"
				}), DIV({
					"class": "netSendingBar netBar"
				}), DIV({
					"class": "netWaitingBar netBar"
				}), DIV({
					"class": "netReceivingBar netBar"
				}, SPAN({
					"class": "netTimeLabel"
				}, "$file|getElapsedTime")))), TD({
					"class": "netOptionsCol netCol"
				}, DIV({
					"class": "netOptionsLabel netLabel",
					onclick: "$onOpenOptions"
				})))),
				headTag: TR({
					"class": "netHeadRow"
				}, TD({
					"class": "netHeadCol",
					colspan: 7
				}, DIV({
					"class": "netHeadLabel"
				}, "$doc.rootFile.href"))),
				netInfoTag: TR({
					"class": "netInfoRow"
				}, TD({
					"class": "netInfoCol",
					colspan: 7
				})),
				summaryTag: TR({
					"class": "netRow netSummaryRow"
				}, TD({
					"class": "netHrefCol netCol"
				}, DIV({
					"class": "netCountLabel netSummaryLabel"
				}, "-")), TD({
					"class": "netStatusCol netCol"
				}), TD({
					"class": "netTypeCol netCol"
				}), TD({
					"class": "netDomainCol netCol"
				}), TD({
					"class": "netTotalSizeCol netSizeCol netCol"
				}, DIV({
					"class": "netTotalSizeLabel netSummaryLabel"
				}, "0KB")), TD({
					"class": "netTotalTimeCol netTimeCol netCol"
				}, DIV({
					"class": "",
					style: "width: 100%"
				}, DIV({
					"class": "netCacheSizeLabel netSummaryLabel"
				}, "(", SPAN("0KB"), SPAN(" " + Strings.fromCache), ")"), DIV({
					"class": "netTimeBar"
				}, SPAN({
					"class": "netTotalTimeLabel netSummaryLabel"
				}, "0ms")))), TD({
					"class": "netOptionsCol netCol"
				})),
				getIndent: function (e) {
					return 0
				},
				isError: function (e) {
					var t = Math.floor(e.response.status / 100);
					return t == 4 || t == 5
				},
				isRedirect: function (e) {
					return !1
				},
				isFromCache: function (e) {
					return e.cache && e.cache.afterRequest
				},
				getHref: function (e) {
					var t = Lib.getFileName(this.getFullHref(e));
					return unescape(e.request.method + " " + t)
				},
				getFullHref: function (e) {
					return unescape(e.request.url)
				},
				getStatus: function (e) {
					var t = e.response.status > 0 ? e.response.status + " " : "";
					return t + e.response.statusText
				},
				getType: function (e) {
					return e.response.content.mimeType
				},
				getDomain: function (e) {
					return Lib.getPrettyDomain(e.request.url)
				},
				getSize: function (e) {
					var t = e.response.bodySize,
						n = t && t != -1 ? t : e.response.content.size;
					return this.formatSize(n)
				},
				isExpandable: function (e) {
					var t = e.response.headers.length > 0,
						n = e.request.url.indexOf("data:") == 0;
					return t || n
				},
				formatSize: function (e) {
					return Lib.formatSize(e)
				},
				getElapsedTime: function (e) {
					var t = Math.round(e.time * 10) / 10;
					return Lib.formatTime(t)
				},
				onClick: function (e) {
					var t = Lib.fixEvent(e);
					if (Lib.isLeftClick(e)) {
						var n = Lib.getAncestorByClass(t.target, "netRow");
						n && (this.toggleHeadersRow(n), Lib.cancelEvent(e))
					} else Lib.isControlClick(e) && window.open(e.target.innerText || e.target.textContent)
				},
				toggleHeadersRow: function (e) {
					if (!Lib.hasClass(e, "isExpandable")) return;
					var t = e.repObject;
					Lib.toggleClass(e, "opened");
					if (Lib.hasClass(e, "opened")) {
						var n = this.netInfoTag.insertRows({}, e)[0];
						n.repObject = t;
						var r = new RequestBody;
						r.render(n.firstChild, t)
					} else {
						var n = e.nextSibling,
							i = Lib.getElementByClass(n, "netInfoBody");
						e.parentNode.removeChild(n)
					}
				},
				onOpenOptions: function (e) {
					var t = Lib.fixEvent(e);
					Lib.cancelEvent(e);
					if (!Lib.isLeftClick(e)) return;
					var n = t.target,
						r = Lib.getAncestorByClass(n, "netRow"),
						i = this.getMenuItems(r);
					if (!i.length) return;
					var s = new Menu({
						id: "requestContextMenu",
						items: i
					});
					s.showPopup(n)
				},
				getMenuItems: function (e) {
					var t = e.repObject,
						n = e.phase,
						r = n.files[0] == t && this.phases[0] == n,
						i = [{
							label: Strings.menuBreakTimeline,
							type: "checkbox",
							disabled: r,
							checked: n.files[0] == t && !r,
							command: Lib.bind(this.breakLayout, this, e)
						}, "-", {
							label: Strings.menuOpenRequest,
							command: Lib.bind(this.openRequest, this, t)
						}, {
							label: Strings.menuOpenResponse,
							disabled: !t.response.content.text,
							command: Lib.bind(this.openResponse, this, t)
						}];
					return Lib.dispatch(this.listeners, "getMenuItems", [i, this.input, t]), i
				},
				openRequest: function (e, t) {
					window.open(t.request.url)
				},
				openResponse: function (e, t) {
					var n = t.response.content.text,
						r = t.response.content.mimeType,
						i = t.response.content.encoding,
						s = "data:" + (r ? r : "") + ";" + (i ? i : "") + "," + n;
					window.open(s)
				},
				breakLayout: function (e, t) {
					var n = t.repObject,
						r = t.phase,
						i = r.files[0] == n;
					t.breakLayout = !i, t.setAttribute("breakLayout", t.breakLayout ? "true" : "false");
					var s = Lib.getAncestorByClass(t, "netTable"),
						o = HarModel.getParentPage(this.input, n);
					this.updateLayout(s, o)
				},
				updateLayout: function (e, t) {
					var n = HarModel.getPageEntries(this.input, t);
					this.table = e;
					var r = this.table.firstChild,
						i = this.firstRow = r.firstChild.nextSibling;
					this.phases = [];
					var s = Cookies.getCookie("phaseInterval");
					s || (s = 4e3);
					var o = null,
						u = t ? Lib.parseISO8601(t.startedDateTime) : null,
						a = t && t.pageTimings ? t.pageTimings.onLoad : -1;
					a > 0 && (a += u);
					for (var f = 0; f < n.length; f++) {
						var l = n[f];
						Lib.hasClass(i, "netInfoRow") && (i = i.nextSibling), i.repObject = l, u || (u = Lib.parseISO8601(l.startedDateTime));
						var c = Lib.parseISO8601(l.startedDateTime),
							h = o ? Lib.parseISO8601(o.getLastStartTime()) : 0,
							p = o ? o.endTime : 0,
							d = !1;
						s >= 0 && (d = c > a && c - h >= s && c + l.time >= p + s), typeof i.breakLayout == "boolean" ? !o || i.breakLayout ? o = this.startPhase(l) : o.addFile(l) : !o || d ? o = this.startPhase(l) : o.addFile(l), this.phases[0] != o && i.setAttribute("breakLayout", o.files[0] == l ? "true" : "false");
						if (o.startTime == undefined || o.startTime > c) o.startTime = c;
						if (o.endTime == undefined || o.endTime < c + l.time) o.endTime = c + l.time;
						i = i.nextSibling
					}
					this.updateTimeStamps(t), this.updateTimeline(t), this.updateSummaries(t)
				},
				startPhase: function (e) {
					var t = new Phase(e);
					return this.phases.push(t), t
				},
				calculateFileTimes: function (e, t, n) {
					n != t.phase && (n = t.phase, this.phaseStartTime = n.startTime, this.phaseEndTime = n.endTime, this.phaseElapsed = this.phaseEndTime - n.startTime);
					if (!t.timings) return n;
					var r = t.timings.blocked < 0 ? 0 : t.timings.blocked,
						i = r + (t.timings.dns < 0 ? 0 : t.timings.dns),
						s = i + (t.timings.connect < 0 ? 0 : t.timings.connect),
						o = s + (t.timings.send < 0 ? 0 : t.timings.send),
						u = o + (t.timings.wait < 0 ? 0 : t.timings.wait),
						a = u + (t.timings.receive < 0 ? 0 : t.timings.receive),
						f = t.time,
						l = Lib.parseISO8601(t.startedDateTime);
					return this.barOffset = ((l - this.phaseStartTime) / this.phaseElapsed * 100).toFixed(3), this.barBlockingWidth = (r / this.phaseElapsed * 100).toFixed(3), this.barResolvingWidth = (i / this.phaseElapsed * 100).toFixed(3), this.barConnectingWidth = (s / this.phaseElapsed * 100).toFixed(3), this.barSendingWidth = (o / this.phaseElapsed * 100).toFixed(3), this.barWaitingWidth = (u / this.phaseElapsed * 100).toFixed(3), this.barReceivingWidth = (a / this.phaseElapsed * 100).toFixed(3), this.calculatePageTimings(e, t, n), n
				},
				calculatePageTimings: function (e, t, n) {
					if (!e) return;
					var r = Lib.parseISO8601(e.startedDateTime);
					for (var i = 0; i < n.pageTimings.length; i++) {
						var s = n.pageTimings[i].time;
						if (s > 0) {
							var o = r + s - n.startTime,
								u = (o / this.phaseElapsed * 100).toFixed(3);
							n.pageTimings[i].offset = u
						}
					}
				},
				updateTimeline: function (e) {
					var t = this.table.firstChild,
						n;
					for (var r = this.firstRow; r; r = r.nextSibling) {
						var i = r.repObject;
						if (!i) continue;
						if (Lib.hasClass(r, "netInfoRow")) continue;
						n = this.calculateFileTimes(e, i, n), r.phase = i.phase, delete i.phase;
						var s = Lib.getElementByClass(r, "netTimelineBar"),
							o = s.children[0],
							u = o.nextSibling,
							a = u.nextSibling,
							f = a.nextSibling,
							l = f.nextSibling,
							c = l.nextSibling;
						o.style.left = a.style.left = u.style.left = f.style.left = l.style.left = c.style.left = this.barOffset + "%", o.style.width = this.barBlockingWidth + "%", u.style.width = this.barResolvingWidth + "%", a.style.width = this.barConnectingWidth + "%", f.style.width = this.barSendingWidth + "%", l.style.width = this.barWaitingWidth + "%", c.style.width = this.barReceivingWidth + "%";
						var h = Lib.getElementsByClass(s, "netPageTimingBar");
						for (var p = 0; p < h.length; p++) h[p].parentNode.removeChild(h[p]);
						for (var p = 0; p < n.pageTimings.length; p++) {
							var d = n.pageTimings[p];
							if (!d.offset) continue;
							var v = s.ownerDocument.createElement("DIV");
							s.appendChild(v), d.classes && Lib.setClass(v, d.classes), Lib.setClass(v, "netPageTimingBar netBar"), v.style.left = d.offset + "%", v.style.display = "block", d.offset = null
						}
					}
				},
				updateTimeStamps: function (e) {
					if (!e) return;
					var t = [];
					for (var n = 0; e.pageTimings && n < this.pageTimings.length; n++) {
						var r = this.pageTimings[n],
							i = e.pageTimings[r.name];
						i > 0 && t.push({
							label: r.name,
							time: i,
							classes: r.classes,
							comment: r.description
						})
					}
					var s = e.pageTimings ? e.pageTimings._timeStamps : [];
					s && t.push.apply(t, s);
					var o = this.phases;
					for (var n = 0; n < o.length; n++) {
						var u = o[n],
							a = o[n + 1];
						for (var f = 0; f < t.length; f++) {
							var l = t[f],
								c = l.time;
							if (!c) continue;
							var h = Lib.parseISO8601(e.startedDateTime);
							c += h;
							if (!a || c < a.startTime)
								if (n == 0 || c >= u.startTime) u.startTime > c && (u.startTime = c), u.endTime < c && (u.endTime = c), u.pageTimings.push({
									classes: l.classes ? l.classes : "netTimeStampBar",
									name: l.label,
									description: l.comment,
									time: l.time
								})
						}
					}
				},
				updateSummaries: function (e) {
					var t = this.phases,
						n = 0,
						r = 0,
						i = 0,
						s = 0;
					for (var o = 0; o < t.length; ++o) {
						var u = t[o];
						u.invalidPhase = !1;
						var a = this.summarizePhase(u);
						n += a.fileCount, r += a.totalSize, i += a.cachedSize, s += a.totalTime
					}
					var f = this.summaryRow;
					if (!f) return;
					var l = Lib.getElementByClass(f, "netCountLabel");
					l.firstChild.nodeValue = this.formatRequestCount(n);
					var c = Lib.getElementByClass(f, "netTotalSizeLabel");
					c.setAttribute("totalSize", r), c.firstChild.nodeValue = Lib.formatSize(r);
					var h = Lib.getElementByClass(f, "netCacheSizeLabel");
					h.setAttribute("collapsed", i == 0), h.childNodes[1].firstChild.nodeValue = Lib.formatSize(i);
					var p = Lib.getElementByClass(f, "netTotalTimeLabel"),
						d = Lib.formatTime(s);
					e && e.pageTimings.onLoad > 0 && (d += " (onload: " + Lib.formatTime(e.pageTimings.onLoad) + ")"), p.innerHTML = d
				},
				formatRequestCount: function (e) {
					return e + " " + (e == 1 ? Strings.request : Strings.requests)
				},
				summarizePhase: function (e) {
					var t = 0,
						n = 0,
						r = "all";
					r == "all" && (r = null);
					var i = 0,
						s = 0,
						o = 0;
					for (var u = 0; u < e.files.length; u++) {
						var a = e.files[u],
							f = Lib.parseISO8601(a.startedDateTime);
						if (!r || a.category == r) {
							++i;
							var l = a.response.bodySize,
								c = l && l != -1 ? l : a.response.content.size;
							n += c, a.response.status == 304 && (t += c);
							if (!s || f < s) s = f;
							var h = f + a.time;
							h > o && (o = h)
						}
					}
					var p = o - s;
					return {
						cachedSize: t,
						totalSize: n,
						totalTime: p,
						fileCount: i
					}
				},
				showInfoTip: function (e, t, n, r) {
					var i = Lib.getAncestorByClass(t, "netTable");
					if (!i || i.repObject != this) return;
					var s = Lib.getAncestorByClass(t, "netRow");
					if (s) {
						if (Lib.getAncestorByClass(t, "netBar")) {
							e.setAttribute("multiline", !0);
							var o = s.repObject.startedDateTime + "-nettime";
							return this.infoTipURL = o, this.populateTimeInfoTip(e, s)
						}
						if (Lib.hasClass(t, "netSizeLabel")) {
							var o = s.repObject.startedDateTime + "-netsize";
							return this.infoTipURL = o, this.populateSizeInfoTip(e, s)
						}
					}
				},
				populateTimeInfoTip: function (e, t) {
					return EntryTimeInfoTip.render(this, t, e), !0
				},
				populateSizeInfoTip: function (e, t) {
					return EntrySizeInfoTip.render(this, t, e), !0
				},
				render: function (e, t) {
					var n = HarModel.getPageEntries(this.input, t);
					return n.length ? this.append(e, t, n) : null
				},
				append: function (e, t, n) {
					this.table || (this.table = this.tableTag.replace({
						requestList: this
					}, e, this)), this.summaryRow || (this.summaryRow = this.summaryTag.insertRows({}, this.table.firstChild)[0]);
					var r = this.table.firstChild,
						i = r.lastChild.previousSibling,
						s = this.fileTag.insertRows({
							files: n
						}, i, this);
					return this.updateLayout(this.table, t), s[0]
				},
				addPageTiming: function (e) {
					this.pageTimings.push(e)
				}
			});

			function Phase(e) {
				this.files = [], this.pageTimings = [], this.addFile(e)
			}
			Phase.prototype = {
				addFile: function (e) {
					this.files.push(e), e.phase = this
				},
				getLastStartTime: function () {
					return this.files[this.files.length - 1].startedDateTime
				}
			};
			var EntryTimeInfoTip = domplate({
					tableTag: TABLE({
						"class": "timeInfoTip"
					}, TBODY()),
					timingsTag: FOR("time", "$timings", TR({
						"class": "timeInfoTipRow",
						$collapsed: "$time|hideBar"
					}, TD({
						"class": "$time|getBarClass timeInfoTipBar",
						$loaded: "$time.loaded",
						$fromCache: "$time.fromCache"
					}), TD({
						"class": "timeInfoTipCell startTime"
					}, "$time.start|formatStartTime"), TD({
						"class": "timeInfoTipCell elapsedTime"
					}, "$time.elapsed|formatTime"), TD("$time|getLabel"))),
					startTimeTag: TR(TD(), TD("$startTime.time|formatStartTime"), TD({
						"class": "timeInfoTipStartLabel",
						colspan: 2
					}, "$startTime|getLabel")),
					separatorTag: TR({}, TD({
						"class": "timeInfoTipSeparator",
						colspan: 4,
						height: "10px"
					}, SPAN("$label"))),
					eventsTag: FOR("event", "$events", TR({
						"class": "timeInfoTipEventRow"
					}, TD({
						"class": "timeInfoTipBar",
						align: "center"
					}, DIV({
						"class": "$event|getPageTimingClass timeInfoTipEventBar"
					})), TD("$event.start|formatStartTime"), TD({
						colspan: 2
					}, "$event|getTimingLabel"))),
					hideBar: function (e) {
						return !e.elapsed && e.bar == "request.phase.Blocking"
					},
					getBarClass: function (e) {
						var t = e.bar.substr(e.bar.lastIndexOf(".") + 1);
						return "net" + t + "Bar"
					},
					getPageTimingClass: function (e) {
						return e.classes ? e.classes : ""
					},
					formatTime: function (e) {
						return Lib.formatTime(e)
					},
					formatStartTime: function (e) {
						var t = e > 0,
							n = Lib.formatTime(Math.abs(e));
						return e ? (t > 0 ? "+" : "-") + n : n
					},
					getLabel: function (e) {
						return Strings[e.bar]
					},
					getTimingLabel: function (e) {
						return e.bar
					},
					render: function (e, t, n) {
						var r = e.input,
							i = t.repObject,
							s = HarModel.getParentPage(r, i),
							o = s ? Lib.parseISO8601(s.startedDateTime) : null,
							u = Lib.parseISO8601(i.startedDateTime),
							a = EntryTimeInfoTip.tableTag.replace({}, n),
							f = {};
						o ? f.time = u - o : f.time = u - t.phase.startTime, f.bar = "request.Started", this.startTimeTag.insertRows({
							startTime: f
						}, a.firstChild), this.separatorTag.insertRows({
							label: Strings["request.phases.label"]
						}, a.firstChild);
						var l = 0,
							c = [],
							h = i.timings.blocked,
							p = i.timings.dns,
							d = i.timings.ssl,
							v = i.timings.connect,
							m = i.timings.send,
							g = i.timings.wait,
							y = i.timings.receive;
						h >= 0 && c.push({
							bar: "request.phase.Blocking",
							elapsed: h,
							start: l
						}), p >= 0 && c.push({
							bar: "request.phase.Resolving",
							elapsed: p,
							start: l += h < 0 ? 0 : h
						}), v >= 0 && c.push({
							bar: "request.phase.Connecting",
							elapsed: v,
							start: l += p < 0 ? 0 : p
						}), m >= 0 && c.push({
							bar: "request.phase.Sending",
							elapsed: m,
							start: l += v < 0 ? 0 : v
						}), g >= 0 && c.push({
							bar: "request.phase.Waiting",
							elapsed: g,
							start: l += m < 0 ? 0 : m
						}), y >= 0 && c.push({
							bar: "request.phase.Receiving",
							elapsed: y,
							start: l += g < 0 ? 0 : g,
							loaded: i.loaded,
							fromCache: i.fromCache
						}), this.timingsTag.insertRows({
							timings: c
						}, a.firstChild);
						if (!s) return !0;
						var b = [];
						for (var w = 0; w < t.phase.pageTimings.length; w++) {
							var E = t.phase.pageTimings[w];
							b.push({
								bar: E.description ? E.description : E.name,
								start: o + E.time - u,
								classes: E.classes,
								time: E.time
							})
						}
						return b.length && (b.sort(function (e, t) {
							return e.time < t.time ? -1 : 1
						}), this.separatorTag.insertRows({
							label: Strings["request.timings.label"]
						}, a.firstChild), this.eventsTag.insertRows({
							events: b
						}, a.firstChild)), !0
					}
				}),
				EntrySizeInfoTip = domplate({
					tag: DIV({
						"class": "sizeInfoTip"
					}, "$file|getSize"),
					zippedTag: DIV(DIV({
						"class": "sizeInfoTip"
					}, "$file|getBodySize"), DIV({
						"class": "sizeInfoTip"
					}, "$file|getContentSize")),
					getSize: function (e) {
						var t = e.response.bodySize;
						return t < 0 ? Strings.unknownSize : Lib.formatString(Strings.tooltipSize, Lib.formatSize(t), Lib.formatNumber(t))
					},
					getBodySize: function (e) {
						var t = e.response.bodySize;
						return t < 0 ? Strings.unknownSize : Lib.formatString(Strings.tooltipZippedSize, Lib.formatSize(t), Lib.formatNumber(t))
					},
					getContentSize: function (e) {
						var t = e.response.content.size;
						return t < 0 ? Strings.unknownSize : Lib.formatString(Strings.tooltipUnzippedSize, Lib.formatSize(t), Lib.formatNumber(t))
					},
					render: function (e, t, n) {
						var r = e.input,
							i = t.repObject;
						return i.response.bodySize == i.response.content.size ? this.tag.replace({
							file: i
						}, n) : this.zippedTag.replace({
							file: i
						}, n)
					}
				});
			return RequestList
		}
	}), define("nls/pageList", {
		root: {
			"column.label.url": "URL",
			"column.label.status": "状态",
			"column.label.type": "类型",
			"column.label.domain": "域名",
			"column.label.size": "大小",
			"column.label.timeline": "时间线",
			"action.label.Reset": "重设"
		}
	}), define("preview/pageList", ["domplate/domplate", "core/lib", "core/trace", "core/cookies", "preview/requestList", "i18n!nls/pageList", "domplate/popupMenu"], function (Domplate, Lib, Trace, Cookies, RequestList, Strings, Menu) {
		with(Domplate) {
			function PageList(e) {
				this.input = e, this.listeners = []
			}
			return PageList.prototype = domplate({
				tableTag: TABLE({
					"class": "pageTable",
					cellpadding: 0,
					cellspacing: 0,
					onclick: "$onClick",
					_repObject: "$input"
				}, TBODY(TAG("$rowTag", {
					groups: "$input.log.pages"
				}))),
				rowTag: FOR("group", "$groups", TR({
					"class": "pageRow",
					_repObject: "$group"
				}, TD({
					"class": "groupName pageCol",
					width: "1%"
				}, SPAN({
					"class": "pageName"
				}, "$group|getPageTitle")), TD({
					"class": "netOptionsCol netCol",
					width: "15px"
				}, DIV({
					"class": "netOptionsLabel netLabel",
					onclick: "$onOpenOptions"
				})))),
				bodyTag: TR({
					"class": "pageInfoRow",
					style: "height:auto;"
				}, TD({
					"class": "pageInfoCol",
					colspan: 2
				})),
				getPageTitle: function (e) {
					return Lib.cropString(e.title, 100)
				},
				getPageID: function (e) {
					return "[" + e.id + "]"
				},
				onClick: function (e) {
					var t = Lib.fixEvent(e);
					if (Lib.isLeftClick(e)) {
						var n = Lib.getAncestorByClass(t.target, "pageRow");
						n && (this.toggleRow(n), Lib.cancelEvent(e))
					}
				},
				toggleRow: function (e, t) {
					var n = Lib.hasClass(e, "opened");
					if (n && t) return;
					Lib.toggleClass(e, "opened");
					if (Lib.hasClass(e, "opened")) {
						var r = this.bodyTag.insertRows({}, e)[0],
							i = this.createRequestList(),
							s = PageList.prototype.pageTimings;
						for (var o = 0; o < s.length; o++) i.addPageTiming(s[o]);
						i.render(r.firstChild, e.repObject)
					} else {
						var r = e.nextSibling;
						e.parentNode.removeChild(r)
					}
				},
				expandAll: function (e) {
					var t = e.firstChild.firstChild;
					while (t) Lib.hasClass(t, "pageRow") && this.toggleRow(t, !0), t = t.nextSibling
				},
				getPageRow: function (e) {
					var t = this.element.parentNode,
						n = Lib.getElementsByClass(t, "pageRow");
					for (var r = 0; r < n.length; r++) {
						var i = n[r];
						if (i.repObject == e) return i
					}
				},
				togglePage: function (e) {
					var t = this.getPageRow(e);
					this.toggleRow(t)
				},
				expandPage: function (e) {
					var t = this.getPageRow(e);
					this.toggleRow(t, !0)
				},
				collapsePage: function (e) {
					var t = this.getPageRow(e);
					Lib.hasClass(t, "opened") && this.toggleRow(t)
				},
				onOpenOptions: function (e) {
					var t = Lib.fixEvent(e);
					Lib.cancelEvent(e);
					if (!Lib.isLeftClick(e)) return;
					var n = t.target,
						r = Lib.getAncestorByClass(n, "pageRow"),
						i = this.getMenuItems(r.repObject),
						s = new Menu({
							id: "requestContextMenu",
							items: i
						});
					s.showPopup(n)
				},
				getMenuItems: function (e) {
					var t = RequestList.getVisibleColumns().join(),
						n, r = 0,
						i = [];
					for (var s = 0; s < RequestList.columns.length; s++) {
						var o = RequestList.columns[s],
							u = t.indexOf(o) > -1;
						i.push({
							label: Strings["column.label." + o],
							type: "checkbox",
							checked: u,
							command: Lib.bindFixed(this.onToggleColumn, this, o)
						}), u && (n = s, r++)
					}
					return r == 1 && (i[n].disabled = !0), i.push("-"), i.push({
						label: Strings["action.label.Reset"],
						command: Lib.bindFixed(this.updateColumns, this)
					}), i
				},
				onToggleColumn: function (e) {
					var t = RequestList.getVisibleColumns();
					Lib.remove(t, e) || t.push(e), this.updateColumns(t)
				},
				updateColumns: function (e) {
					e || (e = RequestList.defaultColumns), RequestList.setVisibleColumns(e)
				},
				createRequestList: function () {
					var e = new RequestList(this.input);
					return e.listeners = this.listeners, e
				},
				append: function (e) {
					var t = this.createRequestList();
					t.render(e, null);
					var n = this.input.log.pages;
					if (n && n.length) {
						var r = this.tableTag.append({
								input: this.input
							}, e, this),
							i = Lib.getElementsByClass(r, "pageRow"),
							s = Lib.getElementsByClass(e, "pageTable");
						i.length == 1 && s.length == 1 && this.toggleRow(i[0]);
						var o = Lib.getURLParameter("expand");
						o && this.expandAll(r)
					}
				},
				render: function (e) {
					this.append(e)
				},
				addListener: function (e) {
					this.listeners.push(e)
				},
				removeListener: function (e) {
					Lib.remove(this.listeners, e)
				}
			}), PageList.prototype.pageTimings = [], PageList
		}
	}), define("preview/validationError", ["domplate/domplate", "core/lib", "core/trace", "domplate/popupMenu"], function (Domplate, Lib, Trace, Menu) {
		with(Domplate) {
			var ValidationError = domplate({
				errorTable: TABLE({
					"class": "errorTable",
					cellpadding: 3,
					cellspacing: 0
				}, TBODY(FOR("error", "$errors", TR({
					"class": "errorRow",
					_repObject: "$error"
				}, TD({
					"class": "errorProperty"
				}, SPAN("$error.property")), TD({
					"class": "errorOptions",
					$hasTarget: "$error|hasTarget"
				}, DIV({
					"class": "errorOptionsTarget",
					onclick: "$onOpenOptions"
				}, "&nbsp;")), TD("&nbsp;"), TD({
					"class": "errorMessage"
				}, SPAN("$error.message")))))),
				hasTarget: function (e) {
					return e.input && e.file
				},
				onOpenOptions: function (e) {
					var t = Lib.fixEvent(e);
					Lib.cancelEvent(e);
					if (!Lib.isLeftClick(e)) return;
					var n = t.target,
						r = Lib.getAncestorByClass(n, "errorRow"),
						i = r.repObject;
					if (!i || !i.input || !i.file) return;
					var s = this.getMenuItems(i.input, i.file);
					if (!s.length) return;
					var o = new Menu({
						id: "requestContextMenu",
						items: s
					});
					o.showPopup(n)
				},
				getMenuItems: function (e, t) {
					var n = [];
					return Lib.dispatch(this.listeners, "getMenuItems", [n, e, t]), n
				},
				listeners: [],
				addListener: function (e) {
					this.listeners.push(e)
				},
				removeListener: function (e) {
					Lib.remove(this.listeners, e)
				},
				appendError: function (e, t) {
					e.errors && this.errorTable.append(e, t)
				}
			});
			return ValidationError
		}
	});
var swfobject = function () {
	function E() {
		p.readyState == "complete" && (p.parentNode.removeChild(p), S())
	}

	function S() {
		if (g) return;
		if (b.ie && b.win) {
			var e = H("span");
			try {
				var t = u.getElementsByTagName("body")[0].appendChild(e);
				t.parentNode.removeChild(t)
			} catch (n) {
				return
			}
		}
		g = !0, d && (clearInterval(d), d = null);
		var r = f.length;
		for (var i = 0; i < r; i++) f[i]()
	}

	function x(e) {
		g ? e() : f[f.length] = e
	}

	function T(t) {
		if (typeof o.addEventListener != e) o.addEventListener("load", t, !1);
		else if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
		else if (typeof o.attachEvent != e) B(o, "onload", t);
		else if (typeof o.onload == "function") {
			var n = o.onload;
			o.onload = function () {
				n(), t()
			}
		} else o.onload = t
	}

	function N() {
		var e = l.length;
		for (var t = 0; t < e; t++) {
			var n = l[t].id;
			if (b.pv[0] > 0) {
				var r = P(n);
				r && (l[t].width = r.getAttribute("width") ? r.getAttribute("width") : "0", l[t].height = r.getAttribute("height") ? r.getAttribute("height") : "0", j(l[t].swfVersion) ? (b.webkit && b.webkit < 312 && C(r), I(n, !0)) : l[t].expressInstall && !y && j("6.0.65") && (b.win || b.mac) ? k(l[t]) : L(r))
			} else I(n, !0)
		}
	}

	function C(e) {
		var n = e.getElementsByTagName(t)[0];
		if (n) {
			var r = H("embed"),
				i = n.attributes;
			if (i) {
				var s = i.length;
				for (var o = 0; o < s; o++) i[o].nodeName == "DATA" ? r.setAttribute("src", i[o].nodeValue) : r.setAttribute(i[o].nodeName, i[o].nodeValue)
			}
			var u = n.childNodes;
			if (u) {
				var a = u.length;
				for (var f = 0; f < a; f++) u[f].nodeType == 1 && u[f].nodeName == "PARAM" && r.setAttribute(u[f].getAttribute("name"), u[f].getAttribute("value"))
			}
			e.parentNode.replaceChild(r, e)
		}
	}

	function k(e) {
		y = !0;
		var t = P(e.id);
		if (t) {
			if (e.altContentId) {
				var n = P(e.altContentId);
				n && (v = n, m = e.altContentId)
			} else v = A(t);
			!/%$/.test(e.width) && parseInt(e.width, 10) < 310 && (e.width = "310"), !/%$/.test(e.height) && parseInt(e.height, 10) < 137 && (e.height = "137"), u.title = u.title.slice(0, 47) + " - Flash Player Installation";
			var r = b.ie && b.win ? "ActiveX" : "PlugIn",
				i = u.title,
				a = "MMredirectURL=" + o.location + "&MMplayerType=" + r + "&MMdoctitle=" + i,
				f = e.id;
			if (b.ie && b.win && t.readyState != 4) {
				var l = H("div");
				f += "SWFObjectNew", l.setAttribute("id", f), t.parentNode.insertBefore(l, t), t.style.display = "none";
				var c = function () {
					t.parentNode.removeChild(t)
				};
				B(o, "onload", c)
			}
			O({
				data: e.expressInstall,
				id: s,
				width: e.width,
				height: e.height
			}, {
				flashvars: a
			}, f)
		}
	}

	function L(e) {
		if (b.ie && b.win && e.readyState != 4) {
			var t = H("div");
			e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(A(e), t), e.style.display = "none";
			var n = function () {
				e.parentNode.removeChild(e)
			};
			B(o, "onload", n)
		} else e.parentNode.replaceChild(A(e), e)
	}

	function A(e) {
		var n = H("div");
		if (b.win && b.ie) n.innerHTML = e.innerHTML;
		else {
			var r = e.getElementsByTagName(t)[0];
			if (r) {
				var i = r.childNodes;
				if (i) {
					var s = i.length;
					for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
				}
			}
		}
		return n
	}

	function O(n, r, s) {
		var o, u = P(s);
		if (u) {
			typeof n.id == e && (n.id = s);
			if (b.ie && b.win) {
				var a = "";
				for (var f in n) n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
				var l = "";
				for (var h in r) r[h] != Object.prototype[h] && (l += '<param name="' + h + '" value="' + r[h] + '" />');
				u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", c[c.length] = n.id, o = P(n.id)
			} else if (b.webkit && b.webkit < 312) {
				var p = H("embed");
				p.setAttribute("type", i);
				for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "data" ? p.setAttribute("src", n[d]) : d.toLowerCase() == "styleclass" ? p.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && p.setAttribute(d, n[d]));
				for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && p.setAttribute(v, r[v]);
				u.parentNode.replaceChild(p, u), o = p
			} else {
				var m = H(t);
				m.setAttribute("type", i);
				for (var g in n) n[g] != Object.prototype[g] && (g.toLowerCase() == "styleclass" ? m.setAttribute("class", n[g]) : g.toLowerCase() != "classid" && m.setAttribute(g, n[g]));
				for (var y in r) r[y] != Object.prototype[y] && y.toLowerCase() != "movie" && M(m, y, r[y]);
				u.parentNode.replaceChild(m, u), o = m
			}
		}
		return o
	}

	function M(e, t, n) {
		var r = H("param");
		r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
	}

	function _(e) {
		var t = P(e);
		t && (t.nodeName == "OBJECT" || t.nodeName == "EMBED") && (b.ie && b.win ? t.readyState == 4 ? D(e) : o.attachEvent("onload", function () {
			D(e)
		}) : t.parentNode.removeChild(t))
	}

	function D(e) {
		var t = P(e);
		if (t) {
			for (var n in t) typeof t[n] == "function" && (t[n] = null);
			t.parentNode.removeChild(t)
		}
	}

	function P(e) {
		var t = null;
		try {
			t = u.getElementById(e)
		} catch (n) {}
		return t
	}

	function H(e) {
		return u.createElement(e)
	}

	function B(e, t, n) {
		e.attachEvent(t, n), h[h.length] = [e, t, n]
	}

	function j(e) {
		var t = b.pv,
			n = e.split(".");
		return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
	}

	function F(n, r) {
		if (b.ie && b.mac) return;
		var i = u.getElementsByTagName("head")[0],
			s = H("style");
		s.setAttribute("type", "text/css"), s.setAttribute("media", "screen"), (!b.ie || !b.win) && typeof u.createTextNode != e && s.appendChild(u.createTextNode(n + " {" + r + "}")), i.appendChild(s);
		if (b.ie && b.win && typeof u.styleSheets != e && u.styleSheets.length > 0) {
			var o = u.styleSheets[u.styleSheets.length - 1];
			typeof o.addRule == t && o.addRule(n, r)
		}
	}

	function I(e, t) {
		var n = t ? "visible" : "hidden";
		g && P(e) ? P(e).style.visibility = n : F("#" + e, "visibility:" + n)
	}

	function q(e) {
		var t = /[\\\"<>\.;]/,
			n = t.exec(e) != null;
		return n ? encodeURIComponent(e) : e
	}
	var e = "undefined",
		t = "object",
		n = "Shockwave Flash",
		r = "ShockwaveFlash.ShockwaveFlash",
		i = "application/x-shockwave-flash",
		s = "SWFObjectExprInst",
		o = window,
		u = document,
		a = navigator,
		f = [],
		l = [],
		c = [],
		h = [],
		p, d = null,
		v = null,
		m = null,
		g = !1,
		y = !1,
		b = function () {
			var s = typeof u.getElementById != e && typeof u.getElementsByTagName != e && typeof u.createElement != e,
				f = [0, 0, 0],
				l = null;
			if (typeof a.plugins != e && typeof a.plugins[n] == t) l = a.plugins[n].description, l && (typeof a.mimeTypes == e || !a.mimeTypes[i] || !!a.mimeTypes[i].enabledPlugin) && (l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), f[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), f[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), f[2] = /r/.test(l) ? parseInt(l.replace(/^.*r(.*)$/, "$1"), 10) : 0);
			else if (typeof o.ActiveXObject != e) {
				var c = null,
					h = !1;
				try {
					c = new ActiveXObject(r + ".7")
				} catch (p) {
					try {
						c = new ActiveXObject(r + ".6"), f = [6, 0, 21], c.AllowScriptAccess = "always"
					} catch (p) {
						f[0] == 6 && (h = !0)
					}
					if (!h) try {
						c = new ActiveXObject(r)
					} catch (p) {}
				}
				if (!h && c) try {
					l = c.GetVariable("$version"), l && (l = l.split(" ")[1].split(","), f = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)])
				} catch (p) {}
			}
			var d = a.userAgent.toLowerCase(),
				v = a.platform.toLowerCase(),
				m = /webkit/.test(d) ? parseFloat(d.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
				g = !1,
				y = v ? /win/.test(v) : /win/.test(d),
				b = v ? /mac/.test(v) : /mac/.test(d);
			return {
				w3cdom: s,
				pv: f,
				webkit: m,
				ie: g,
				win: y,
				mac: b
			}
		}(),
		w = function () {
			if (!b.w3cdom) return;
			x(N);
			if (b.ie && b.win) try {
				u.write("<script id=__ie_ondomload defer=true src=//:></script>"), p = P("__ie_ondomload"), p && B(p, "onreadystatechange", E)
			} catch (t) {}
			b.webkit && typeof u.readyState != e && (d = setInterval(function () {
				/loaded|complete/.test(u.readyState) && S()
			}, 10)), typeof u.addEventListener != e && u.addEventListener("DOMContentLoaded", S, null), T(S)
		}(),
		R = function () {
			b.ie && b.win && window.attachEvent("onunload", function () {
				var e = h.length;
				for (var t = 0; t < e; t++) h[t][0].detachEvent(h[t][1], h[t][2]);
				var n = c.length;
				for (var r = 0; r < n; r++) _(c[r]);
				for (var i in b) b[i] = null;
				b = null;
				for (var s in swfobject) swfobject[s] = null;
				swfobject = null
			})
		}();
	return {
		registerObject: function (e, t, n) {
			if (!b.w3cdom || !e || !t) return;
			var r = {};
			r.id = e, r.swfVersion = t, r.expressInstall = n ? n : !1, l[l.length] = r, I(e, !1)
		},
		getObjectById: function (n) {
			var r = null;
			if (b.w3cdom) {
				var i = P(n);
				if (i) {
					var s = i.getElementsByTagName(t)[0];
					!s || s && typeof i.SetVariable != e ? r = i : typeof s.SetVariable != e && (r = s)
				}
			}
			return r
		},
		embedSWF: function (n, r, i, s, o, u, a, f, l) {
			if (!b.w3cdom || !n || !r || !i || !s || !o) return;
			i += "", s += "";
			if (j(o)) {
				I(r, !1);
				var c = {};
				if (l && typeof l === t)
					for (var h in l) l[h] != Object.prototype[h] && (c[h] = l[h]);
				c.data = n, c.width = i, c.height = s;
				var p = {};
				if (f && typeof f === t)
					for (var d in f) f[d] != Object.prototype[d] && (p[d] = f[d]);
				if (a && typeof a === t)
					for (var v in a) a[v] != Object.prototype[v] && (typeof p.flashvars != e ? p.flashvars += "&" + v + "=" + a[v] : p.flashvars = v + "=" + a[v]);
				x(function () {
					O(c, p, r), c.id == r && I(r, !0)
				})
			} else u && !y && j("6.0.65") && (b.win || b.mac) && (y = !0, I(r, !1), x(function () {
				var e = {};
				e.id = e.altContentId = r, e.width = i, e.height = s, e.expressInstall = u, k(e)
			}))
		},
		getFlashPlayerVersion: function () {
			return {
				major: b.pv[0],
				minor: b.pv[1],
				release: b.pv[2]
			}
		},
		hasFlashPlayerVersion: j,
		createSWF: function (e, t, n) {
			return b.w3cdom ? O(e, t, n) : undefined
		},
		removeSWF: function (e) {
			b.w3cdom && _(e)
		},
		createCSS: function (e, t) {
			b.w3cdom && F(e, t)
		},
		addDomLoadEvent: x,
		addLoadEvent: T,
		getQueryParamValue: function (e) {
			var t = u.location.search || u.location.hash;
			if (e == null) return q(t);
			if (t) {
				var n = t.substring(1).split("&");
				for (var r = 0; r < n.length; r++)
					if (n[r].substring(0, n[r].indexOf("=")) == e) return q(n[r].substring(n[r].indexOf("=") + 1))
			}
			return ""
		},
		expressInstallCallback: function () {
			if (y && v) {
				var e = P(s);
				e && (e.parentNode.replaceChild(v, e), m && (I(m, !0), b.ie && b.win && (v.style.display = "block")), v = null, m = null, y = !1)
			}
		}
	}
}();
define("downloadify/js/swfobject", function () {}),
	function () {
		Downloadify = window.Downloadify = {
			queue: {},
			uid: (new Date).getTime(),
			getTextForSave: function (e) {
				var t = Downloadify.queue[e];
				return t ? t.getData() : ""
			},
			getFileNameForSave: function (e) {
				var t = Downloadify.queue[e];
				return t ? t.getFilename() : ""
			},
			saveComplete: function (e) {
				var t = Downloadify.queue[e];
				return t && t.complete(), !0
			},
			saveCancel: function (e) {
				var t = Downloadify.queue[e];
				return t && t.cancel(), !0
			},
			saveError: function (e) {
				var t = Downloadify.queue[e];
				return t && t.error(), !0
			},
			addToQueue: function (e) {
				Downloadify.queue[e.queue_name] = e
			},
			getUID: function (e) {
				return e.id == "" && (e.id = "downloadify_" + Downloadify.uid++), e.id
			}
		}, Downloadify.create = function (e, t) {
			var n = typeof e == "string" ? document.getElementById(e) : e;
			return new Downloadify.Container(n, t)
		}, Downloadify.Container = function (e, t) {
			var n = this;
			n.el = e, n.enabled = !0, n.dataCallback = null, n.filenameCallback = null, n.data = null, n.filename = null;
			var r = function () {
				n.options = t, n.options.append || (n.el.innerHTML = ""), n.flashContainer = document.createElement("span"), n.el.appendChild(n.flashContainer), n.queue_name = Downloadify.getUID(n.flashContainer), typeof n.options.filename == "function" ? n.filenameCallback = n.options.filename : n.options.filename && (n.filename = n.options.filename), typeof n.options.data == "function" ? n.dataCallback = n.options.data : n.options.data && (n.data = n.options.data);
				var e = {
						queue_name: n.queue_name,
						width: n.options.width,
						height: n.options.height
					},
					r = {
						allowScriptAccess: "always"
					},
					i = {
						id: n.flashContainer.id,
						name: n.flashContainer.id
					};
				n.options.enabled === !1 && (n.enabled = !1), n.options.transparent === !0 && (r.wmode = "transparent"), n.options.downloadImage && (e.downloadImage = n.options.downloadImage), swfobject.embedSWF(n.options.swf, n.flashContainer.id, n.options.width, n.options.height, "10", null, e, r, i), Downloadify.addToQueue(n)
			};
			n.enable = function () {
				var e = document.getElementById(n.flashContainer.id);
				e.setEnabled(!0), n.enabled = !0
			}, n.disable = function () {
				var e = document.getElementById(n.flashContainer.id);
				e.setEnabled(!1), n.enabled = !1
			}, n.getData = function () {
				return n.enabled ? n.dataCallback ? n.dataCallback() : n.data ? n.data : "" : ""
			}, n.getFilename = function () {
				return n.filenameCallback ? n.filenameCallback() : n.filename ? n.filename : ""
			}, n.complete = function () {
				typeof n.options.onComplete == "function" && n.options.onComplete()
			}, n.cancel = function () {
				typeof n.options.onCancel == "function" && n.options.onCancel()
			}, n.error = function () {
				typeof n.options.onError == "function" && n.options.onError()
			}, r()
		}, Downloadify.defaultOptions = {
			swf: "media/downloadify.swf",
			downloadImage: "images/download.png",
			width: 100,
			height: 30,
			transparent: !0,
			append: !1
		}
	}(), typeof jQuery != "undefined" && function (e) {
		e.fn.downloadify = function (t) {
			return this.each(function () {
				t = e.extend({}, Downloadify.defaultOptions, t);
				var n = Downloadify.create(this, t);
				e(this).data("Downloadify", n)
			})
		}
	}(jQuery), define("downloadify/src/downloadify", function () {}), define("tabs/previewTab", ["domplate/domplate", "domplate/tabView", "core/lib", "i18n!nls/previewTab", "domplate/toolbar", "tabs/pageTimeline", "tabs/harStats", "preview/pageList", "core/cookies", "preview/validationError", "downloadify/js/swfobject", "downloadify/src/downloadify"], function (Domplate, TabView, Lib, Strings, Toolbar, Timeline, Stats, PageList, Cookies, ValidationError) {
		with(Domplate) {
			function PreviewTab(e) {
				this.model = e, this.toolbar = new Toolbar, this.timeline = new Timeline, this.stats = new Stats(e, this.timeline), this.toolbar.addButtons(this.getToolbarButtons()), ValidationError.addListener(this)
			}
			return PreviewTab.prototype = Lib.extend(TabView.Tab.prototype, {
				id: "Preview",
				label: Strings.previewTabLabel,
				tabBodyTag: DIV({
					"class": "tab$tab.id\\Body tabBody",
					_repObject: "$tab"
				}, DIV({
					"class": "previewToolbar"
				}), DIV({
					"class": "previewTimeline"
				}), DIV({
					"class": "previewStats"
				}), DIV({
					"class": "previewList"
				})),
				onUpdateBody: function (e, t) {
					this.toolbar.render(Lib.$(t, "previewToolbar")), this.stats.render(Lib.$(t, "previewStats")), this.timeline.render(Lib.$(t, "previewTimeline"));
					var n = this.model.input;
					n && Cookies.getCookie("timeline") == "true" && this.onTimeline(!1), n && Cookies.getCookie("stats") == "true" && this.onStats(!1), this.updateDownloadifyButton()
				},
				updateDownloadifyButton: function () {
					var e = this.model;
					$(".harDownloadButton").downloadify({
						filename: function () {
							return "netData.har"
						},
						data: function () {
							return e ? e.toJSON() : ""
						},
						onComplete: function () {},
						onCancel: function () {},
						onError: function () {
							alert(Strings.downloadError)
						},
						swf: "scripts/downloadify/media/downloadify.swf",
						downloadImage: "css/images/download-sprites.png",
						width: 16,
						height: 16,
						transparent: !0,
						append: !1
					})
				},
				getToolbarButtons: function () {
					var e = [{
						id: "showTimeline",
						label: Strings.showTimelineButton,
						tooltiptext: Strings.showTimelineTooltip,
						command: Lib.bindFixed(this.onTimeline, this, !0)
					}, {
						id: "showStats",
						label: Strings.showStatsButton,
						tooltiptext: Strings.showStatsTooltip,
						command: Lib.bindFixed(this.onStats, this, !0)
					}, {
						id: "clear",
						label: Strings.clearButton,
						tooltiptext: Strings.clearTooltip,
						command: Lib.bindFixed(this.onClear, this)
					}];
					return e.push({
						id: "download",
						tooltiptext: Strings.downloadTooltip,
						className: "harDownloadButton"
					}), e
				},
				onTimeline: function (e) {
					var t = this.toolbar.getButton("showTimeline");
					if (!t) return;
					this.timeline.toggle(e);
					var n = this.timeline.isVisible();
					t.label = Strings[n ? "hideTimelineButton" : "showTimelineButton"], this.toolbar.render(), this.updateDownloadifyButton(), Cookies.setCookie("timeline", n)
				},
				onStats: function (e) {
					var t = this.toolbar.getButton("showStats");
					if (!t) return;
					this.stats.toggle(e);
					var n = this.stats.isVisible();
					t.label = Strings[n ? "hideStatsButton" : "showStatsButton"], this.toolbar.render(), this.updateDownloadifyButton(), Cookies.setCookie("stats", n)
				},
				onClear: function () {
					var e = document.location.href,
						t = e.indexOf("?");
					document.location = e.substr(0, t)
				},
				showStats: function (e) {
					Cookies.setCookie("stats", e)
				},
				showTimeline: function (e) {
					Cookies.setCookie("timeline", e)
				},
				append: function (e) {
					var t = new PageList(e);
					t.append(Lib.$(this._body, "previewList")), this.timeline.append(e), t.addListener(this)
				},
				appendError: function (e) {
					ValidationError.appendError(e, Lib.$(this._body, "previewList"))
				},
				addPageTiming: function (e) {
					PageList.prototype.pageTimings.push(e)
				},
				getMenuItems: function (e, t, n) {
					if (!n) return;
					e.push("-"), e.push({
						label: Strings.menuShowHARSource,
						command: Lib.bind(this.showHARSource, this, t, n)
					})
				},
				showHARSource: function (e, t, n) {
					var r = this.tabView.getTab("DOM");
					if (!r) return;
					r.select("DOM"), r.highlightFile(t, n)
				}
			}), PreviewTab
		}
	}), define("tabs/schemaTab", ["domplate/domplate", "domplate/tabView", "core/lib", "i18n!nls/harViewer", "syntax-highlighter/shCore", "core/trace"], function (Domplate, TabView, Lib, Strings, dp, Trace) {
		with(Domplate) {
			function SchemaTab() {}
			return SchemaTab.prototype = {
				id: "模式",
				label: Strings.schemaTabLabel,
				bodyTag: PRE({
					"class": "javascript:nocontrols:",
					name: "code"
				}),
				onUpdateBody: function (e, t) {
					$.ajax({
						url: "scripts/preview/harSchema.js",
						context: this,
						success: function (e) {
							var n = t.firstChild;
							n.innerHTML = e, dp.SyntaxHighlighter.HighlightAll(n)
						},
						error: function (e, t, n) {
							Trace.error("SchemaTab.onUpdateBody; ERROR ", e, t, n)
						}
					})
				}
			}, SchemaTab
		}
	}), define("nls/domTab", {
		root: {
			domTabLabel: "HAR",
			searchDisabledForIE: "您需要基于Mozilla或WebKit的浏览器在HAR中搜索",
			searchOptionJsonQuery: "JSON Query",
			tableView: "表视图",
			searchResultsDefaultText: "JSON Query Results",
			searchPlaceholder: "搜索",
			jsonQueryPlaceholder: "JSON Query",
			queryResultsTableView: "表视图"
		}
	}), define("nls/search", {
		root: {
			search: "搜索",
			caseSensitive: "区分大小写"
		}
	}), define("tabs/search", ["domplate/domplate", "core/lib", "i18n!nls/search", "domplate/toolbar", "domplate/popupMenu", "core/cookies", "core/dragdrop"], function (Domplate, Lib, Strings, Toolbar, Menu, Cookies, DragDrop) {
		with(Domplate) {
			var Search = {},
				caseSensitiveOption = "searchCaseSensitive";
			return Search.Box = domplate({
				tag: SPAN({
					"class": "searchBox"
				}, SPAN({
					"class": "toolbarSeparator resizer"
				}, "&nbsp;"), SPAN({
					"class": "searchTextBox"
				}, INPUT({
					"class": "searchInput",
					type: "text",
					placeholder: Strings.search,
					onkeydown: "$onKeyDown"
				}), SPAN({
					"class": "arrow",
					onclick: "$onOpenOptions"
				}, "&nbsp;"))),
				onKeyDown: function (e) {
					var t = $.event.fix(e || window.event),
						n = Lib.getAncestorByClass(t.target, "tabBody"),
						r = Lib.getElementByClass(n, "searchInput");
					setTimeout(Lib.bindFixed(this.search, this, n, t.keyCode, r.value))
				},
				initialize: function (e) {
					var t = Lib.getElementByClass(e, "searchInput"),
						n = Lib.getElementByClass(e, "resizer");
					Search.Resizer.initialize(t, n)
				},
				search: function (e, t, n) {
					var r = Lib.getElementByClass(e, "searchBox"),
						i = Lib.getElementByClass(e, "searchInput");
					i.removeAttribute("status");
					var s = i.value;
					if (s == n && t != 13) return;
					if (t != 13 && Lib.isWebkit) return;
					var o = e.repObject.onSearch(s, t);
					o || i.setAttribute("status", "notfound")
				},
				onOpenOptions: function (e) {
					var t = Lib.fixEvent(e);
					Lib.cancelEvent(e);
					if (!Lib.isLeftClick(e)) return;
					var n = t.target,
						r = this.getMenuItems(n),
						i = new Menu({
							id: "searchOptions",
							items: r
						});
					i.showPopup(n)
				},
				getMenuItems: function (e) {
					var t = Lib.getAncestorByClass(e, "tabBody"),
						n = t.repObject.getSearchOptions();
					return n.push("-"), n.push({
						label: Strings.caseSensitive,
						checked: Cookies.getBooleanCookie(caseSensitiveOption),
						command: Lib.bindFixed(this.onOption, this, caseSensitiveOption)
					}), n
				},
				onOption: function (e) {
					Cookies.toggleCookie(e);
					var t = Lib.getElementByClass(document.documentElement, "searchInput");
					t.removeAttribute("status")
				}
			}), Search.ObjectSearch = function (e, t, n, r) {
				this.text = e, this.reverse = n, this.caseSensitive = r, this.stack = [], this.stack.push({
					object: t,
					propIndex: 0,
					startOffset: -1
				}), this.matches = []
			}, Search.ObjectSearch.prototype = {
				findNext: function (e) {
					while (this.stack.length > 0) {
						var t = this.getCurrentScope(),
							n = this.find(t);
						if (n) return n
					}
					return !1
				},
				find: function (e) {
					var t = 0;
					for (var n in e.object) {
						t++;
						if (e.propIndex >= t) continue;
						var r = e.object[n];
						if (!r) continue;
						e.propIndex = t;
						if (typeof r == "object") return this.stack.push({
							propIndex: 0,
							object: r,
							startOffset: -1
						}), !1;
						var i = this.text,
							s = r + "";
						Cookies.getBooleanCookie(caseSensitiveOption) || (s = s.toLowerCase(), i = i.toLowerCase());
						var o = e.startOffset < 0 ? 0 : e.startOffset,
							u = s.indexOf(i, o);
						if (u >= 0) return e.propIndex += -1, e.startOffset = u + i.length, this.matches.push({
							value: r,
							startOffset: u
						}), !0
					}
					return this.stack.pop(), !1
				},
				getCurrentScope: function () {
					return this.stack[this.stack.length - 1]
				},
				getCurrentMatch: function () {
					return this.matches[this.matches.length - 1]
				},
				selectText: function (e) {
					var t = this.getCurrentMatch();
					Lib.selectElementText(e, t.startOffset, t.startOffset + this.text.length)
				}
			}, Search.Resizer = domplate({
				initialize: function (e, t) {
					this.searchInput = e, this.tracker = new DragDrop.Tracker(t, {
						onDragStart: Lib.bind(this.onDragStart, this),
						onDragOver: Lib.bind(this.onDragOver, this),
						onDrop: Lib.bind(this.onDrop, this)
					})
				},
				onDragStart: function (e) {
					var t = Lib.getBody(this.searchInput.ownerDocument);
					t.setAttribute("vResizing", "true"), this.startWidth = this.searchInput.clientWidth - 20
				},
				onDragOver: function (e, t) {
					var n = this.startWidth - e.x,
						r = Lib.getAncestorByClass(this.searchInput, "toolbar");
					if (n > r.clientWidth - 40) return;
					this.searchInput.style.width = n + "px"
				},
				onDrop: function (e) {
					var t = Lib.getBody(this.searchInput.ownerDocument);
					t.removeAttribute("vResizing")
				}
			}), Search
		}
	}), define("domplate/domTree", ["domplate/domplate", "core/lib", "core/trace"], function (Domplate, Lib, Trace) {
		with(Domplate) {
			function DomTree(e) {
				this.input = e
			}
			DomTree.prototype = domplate({
				tag: TABLE({
					"class": "domTable",
					cellpadding: 0,
					cellspacing: 0,
					onclick: "$onClick"
				}, TBODY(FOR("member", "$object|memberIterator", TAG("$member|getRowTag", {
					member: "$member"
				})))),
				rowTag: TR({
					"class": "memberRow $member.open $member.type\\Row $member|hasChildren",
					$hasChildren: "$member|hasChildren",
					_repObject: "$member",
					level: "$member.level"
				}, TD({
					"class": "memberLabelCell",
					style: "padding-left: $member.indent\\px"
				}, SPAN({
					"class": "memberLabel $member.type\\Label"
				}, "$member.name")), TD({
					"class": "memberValueCell"
				}, TAG("$member.tag", {
					object: "$member|getValue"
				}))),
				loop: FOR("member", "$members", TAG("$member|getRowTag", {
					member: "$member"
				})),
				hasChildren: function (e) {
					return e.hasChildren ? "hasChildren" : ""
				},
				memberIterator: function (e) {
					return this.getMembers(e)
				},
				getValue: function (e) {
					return e.value
				},
				getRowTag: function (e) {
					return this.rowTag
				},
				onClick: function (e) {
					var t = Lib.fixEvent(e);
					if (!Lib.isLeftClick(t)) return;
					var n = Lib.getAncestorByClass(t.target, "memberRow"),
						r = Lib.getAncestorByClass(t.target, "memberLabel");
					r && Lib.hasClass(n, "hasChildren") && this.toggleRow(n)
				},
				toggleRow: function (e, t) {
					if (!e) return;
					var n = parseInt(e.getAttribute("level"));
					if (t && Lib.hasClass(e, "opened")) return;
					if (Lib.hasClass(e, "opened")) {
						Lib.removeClass(e, "opened");
						var r = e.parentNode;
						for (var i = e.nextSibling; i; i = e.nextSibling) {
							if (parseInt(i.getAttribute("level")) <= n) break;
							r.removeChild(i)
						}
					} else {
						Lib.setClass(e, "opened");
						var s = e.repObject;
						if (s) {
							if (!s.hasChildren) return;
							var o = this.getMembers(s.value, n + 1);
							o && this.loop.insertRows({
								members: o
							}, e)
						}
					}
				},
				getMembers: function (e, t) {
					t || (t = 0);
					var n = [];
					for (var r in e) {
						var i = e[r];
						typeof i != "function" && n.push(this.createMember("dom", r, i, t))
					}
					return n
				},
				createMember: function (e, t, n, r) {
					var i = typeof n,
						s = this.hasProperties(n) && i == "object",
						o = DomTree.Reps.getRep(n);
					return {
						name: t,
						value: n,
						type: e,
						rowClass: "memberRow-" + e,
						open: "",
						level: r,
						indent: r * 16,
						hasChildren: s,
						tag: o.tag
					}
				},
				hasProperties: function (e) {
					if (typeof e == "string") return !1;
					try {
						for (var t in e) return !0
					} catch (n) {}
					return !1
				},
				append: function (e) {
					this.element = this.tag.append({
						object: this.input
					}, e), this.element.repObject = this;
					var t = Lib.isArray(this.input) && this.input.length > 2,
						n = this.element.firstChild.firstChild;
					n && !t && this.toggleRow(n)
				},
				expandRow: function (e) {
					var t = this.getRow(e);
					return this.toggleRow(t, !0), t
				},
				getRow: function (e) {
					if (!this.element) return;
					var t = Lib.getElementsByClass(this.element, "memberRow");
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						if (r.repObject.value == e) return r
					}
					return null
				}
			});

			function safeToString(e) {
				try {
					return e.toString()
				} catch (t) {
					return ""
				}
			}
			var OBJECTBOX = DIV({
				"class": "objectBox objectBox-$className"
			});
			DomTree.Reps = {
				reps: [],
				registerRep: function () {
					this.reps.push.apply(this.reps, arguments)
				},
				getRep: function (e) {
					var t = typeof e;
					t == "object" && e instanceof String && (t = "string");
					for (var n = 0; n < this.reps.length; ++n) {
						var r = this.reps[n];
						try {
							if (r.supportsObject(e, t)) return r
						} catch (i) {
							Trace.exception("domTree.getRep; ", i)
						}
					}
					return DomTree.Rep
				}
			}, DomTree.Rep = domplate({
				tag: OBJECTBOX("$object|getTitle"),
				className: "object",
				getTitle: function (e) {
					var t = safeToString(e),
						n = /\[object (.*?)\]/,
						r = n.exec(t);
					return r ? r[1] : t
				},
				getTooltip: function (e) {
					return null
				},
				supportsObject: function (e, t) {
					return !1
				}
			}), DomTree.Reps.Null = domplate(DomTree.Rep, {
				tag: OBJECTBOX("null"),
				className: "null",
				supportsObject: function (e, t) {
					return e == null
				}
			}), DomTree.Reps.Number = domplate(DomTree.Rep, {
				tag: OBJECTBOX("$object"),
				className: "number",
				supportsObject: function (e, t) {
					return t == "boolean" || t == "number"
				}
			}), DomTree.Reps.String = domplate(DomTree.Rep, {
				tag: OBJECTBOX("$object"),
				className: "string",
				supportsObject: function (e, t) {
					return t == "string"
				}
			}), DomTree.Reps.Arr = domplate(DomTree.Rep, {
				tag: OBJECTBOX("$object|getTitle"),
				className: "array",
				supportsObject: function (e, t) {
					return Lib.isArray(e)
				},
				getTitle: function (e) {
					return "Array [" + e.length + "]"
				}
			}), DomTree.Reps.Tree = domplate(DomTree.Rep, {
				tag: OBJECTBOX(TAG("$object|getTag", {
					object: "$object|getRoot"
				})),
				className: "tree",
				getTag: function (e) {
					return Tree.tag
				},
				getRoot: function (e) {
					return [e]
				},
				supportsObject: function (e, t) {
					return t == "object"
				}
			});
			var Tree = domplate(DomTree.prototype, {
				createMember: function (e, t, n, r) {
					var i = DomTree.prototype.createMember(e, t, n, r);
					return r == 0 && (i.name = "", i.type = "tableCell"), i
				}
			});
			return DomTree.Reps.registerRep(DomTree.Reps.Null, DomTree.Reps.Number, DomTree.Reps.String, DomTree.Reps.Arr), DomTree
		}
	}), define("nls/tableView", {
		root: {
			objectProperties: "对象属性"
		}
	}), define("domplate/tableView", ["domplate/domplate", "core/lib", "i18n!nls/tableView", "domplate/domTree", "core/trace"], function (Domplate, Lib, Strings, DomTree, Trace) {
		with(Domplate) {
			var TableView = domplate({
				className: "table",
				tag: DIV({
					"class": "dataTableSizer",
					tabindex: "-1"
				}, TABLE({
					"class": "dataTable",
					cellspacing: 0,
					cellpadding: 0,
					width: "100%",
					role: "grid"
				}, THEAD({
					"class": "dataTableThead",
					role: "presentation"
				}, TR({
					"class": "headerRow focusRow dataTableRow subFocusRow",
					role: "row",
					onclick: "$onClickHeader"
				}, FOR("column", "$object.columns", TH({
					"class": "headerCell a11yFocus",
					role: "columnheader",
					$alphaValue: "$column.alphaValue"
				}, DIV({
					"class": "headerCellBox"
				}, "$column.label"))))), TBODY({
					"class": "dataTableTbody",
					role: "presentation"
				}, FOR("row", "$object.data|getRows", TR({
					"class": "focusRow dataTableRow subFocusRow",
					role: "row"
				}, FOR("column", "$row|getColumns", TD({
					"class": "a11yFocus dataTableCell",
					role: "gridcell"
				}, TAG("$column|getValueTag", {
					object: "$column"
				})))))))),
				getValueTag: function (e) {
					var t = typeof e;
					if (t == "object") return DomTree.Reps.Tree.tag;
					var n = DomTree.Reps.getRep(e);
					return n.shortTag || n.tag
				},
				getRows: function (e) {
					var t = this.getProps(e);
					return t.length ? t : []
				},
				getColumns: function (e) {
					if (typeof e != "object") return [e];
					var t = [];
					for (var n = 0; n < this.columns.length; n++) {
						var r = this.columns[n].property;
						if (!r) s = e;
						else if (typeof e[r] == "undefined") {
							var i = typeof r == "string" ? r.split(".") : [r],
								s = e;
							for (var o in i) s = s && s[i[o]] || undefined
						} else s = e[r];
						t.push(s)
					}
					return t
				},
				getProps: function (e) {
					if (typeof e != "object") return [e];
					if (e.length) return Lib.cloneArray(e);
					var t = [];
					for (var n in e) {
						var r = e[n];
						this.domFilter(r, n) && t.push(r)
					}
					return t
				},
				onClickHeader: function (e) {
					var t = Lib.getAncestorByClass(e.target, "dataTable"),
						n = Lib.getAncestorByClass(e.target, "headerCell");
					if (!n) return;
					var r = !Lib.hasClass(n, "alphaValue"),
						i = 0;
					for (n = n.previousSibling; n; n = n.previousSibling) ++i;
					this.sort(t, i, r)
				},
				sort: function (e, t, n) {
					var r = Lib.getChildByClass(e, "dataTableTbody"),
						i = Lib.getChildByClass(e, "dataTableThead"),
						s = [];
					for (var o = r.childNodes[0]; o; o = o.nextSibling) {
						var u = o.childNodes[t],
							a = n ? parseFloat(u.textContent) : u.textContent;
						s.push({
							row: o,
							value: a
						})
					}
					s.sort(function (e, t) {
						return e.value < t.value ? -1 : 1
					});
					var f = i.firstChild,
						l = Lib.getChildByClass(f, "headerSorted");
					Lib.removeClass(l, "headerSorted"), l && l.removeAttribute("aria-sort");
					var c = f.childNodes[t];
					Lib.setClass(c, "headerSorted");
					if (!c.sorted || c.sorted == 1) {
						Lib.removeClass(c, "sortedDescending"), Lib.setClass(c, "sortedAscending"), c.setAttribute("aria-sort", "ascending"), c.sorted = -1;
						for (var h = 0; h < s.length; ++h) r.appendChild(s[h].row)
					} else {
						Lib.removeClass(c, "sortedAscending"), Lib.setClass(c, "sortedDescending"), c.setAttribute("aria-sort", "descending"), c.sorted = 1;
						for (var h = s.length - 1; h >= 0; --h) r.appendChild(s[h].row)
					}
				},
				getHeaderColumns: function (e) {
					var t;
					for (var n in e) {
						t = e[n];
						break
					}
					if (typeof t != "object") return [{
						label: Strings.objectProperties
					}];
					var r = [];
					for (var n in t) {
						var i = t[n];
						if (!this.domFilter(i, n)) continue;
						r.push({
							property: n,
							label: n,
							alphaValue: typeof i != "number"
						})
					}
					return r
				},
				domFilter: function (e, t) {
					return !0
				},
				render: function (e, t, n) {
					if (!t) return;
					var r = [];
					for (var i = 0; n && i < n.length; i++) {
						var s = n[i],
							o = typeof s.property != "undefined" ? s.property : s,
							u = typeof s.label != "undefined" ? s.label : o;
						r.push({
							property: o,
							label: u,
							alphaValue: !0
						})
					}
					r.length || (r = this.getHeaderColumns(t));
					try {
						this.columns = r;
						var a = {
								data: t,
								columns: r
							},
							f = this.tag.append({
								object: a,
								columns: r
							}, e),
							l = Lib.getElementByClass(f, "dataTableTbody"),
							c = 200;
						c > 0 && l.clientHeight > c && (l.style.height = c + "px")
					} catch (h) {
						Trace.exception("tableView.render; EXCEPTION " + h, h)
					} finally {
						delete this.columns
					}
				}
			});
			return TableView
		}
	}),
	function () {
		function map(e, t) {
			var n = e.length;
			if (typeof t != "function") throw new TypeError;
			var r = new Array(n),
				i = arguments[2];
			for (var s = 0; s < n; s++) s in e && (r[s] = t.call(i, e[s], s, e));
			return r
		}

		function filter(e, t) {
			var n = e.length;
			if (typeof t != "function") throw new TypeError;
			var r = new Array,
				i = arguments[2];
			for (var s = 0; s < n; s++)
				if (s in e) {
					var o = e[s];
					t.call(i, o, s, e) && r.push(o)
				} return r
		}

		function slice(e, t, n, r) {
			var i = e.length,
				s = [];
			n = n || i, t = t < 0 ? Math.max(0, t + i) : Math.min(i, t), n = n < 0 ? Math.max(0, n + i) : Math.min(i, n);
			for (var o = t; o < n; o += r) s.push(e[o]);
			return s
		}

		function expand(e, t) {
			function r(e) {
				t && (t !== !0 || e instanceof Array ? e[t] && n.push(e[t]) : n.push(e));
				for (var i in e) {
					var s = e[i];
					t ? s && typeof s == "object" && r(s) : n.push(s)
				}
			}
			var n = [];
			if (t instanceof Array) {
				if (t.length == 1) return e[t[0]];
				for (var i = 0; i < t.length; i++) n.push(e[t[i]])
			} else r(e);
			return n
		}

		function distinctFilter(e, t) {
			var n = [],
				r = {};
			for (var i = 0, s = e.length; i < s; ++i) {
				var o = e[i];
				t(o, i, e) && (typeof o == "object" && o ? o.__included || (o.__included = !0, n.push(o)) : r[o + typeof o] || (r[o + typeof o] = !0, n.push(o)))
			}
			for (i = 0, s = n.length; i < s; ++i) n[i] && delete n[i].__included;
			return n
		}
		var JSONQuery = function (query, obj) {
			function call(e) {
				prefix = e + "(" + prefix
			}

			function makeRegex(e, t, n, r, i) {
				return str[i].match(/[\*\?]/) || r == "~" ? "/^" + str[i].substring(1, str[i].length - 1).replace(/\\([btnfr\\"'])|([^\w\*\?])/g, "\\$1$2").replace(/([\*\?])/g, ".$1") + (r == "~" ? "$/i" : "$/") + ".test(" + t + ")" : e
			}
			tokens = [];
			var depth = 0,
				str = [];
			query = query.replace(/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'|[\[\]]/g, function (e) {
				return depth += e == "[" ? 1 : e == "]" ? -1 : 0, e == "]" && depth > 0 ? "`]" : e.charAt(0) == '"' || e.charAt(0) == "'" ? "`" + (str.push(e) - 1) : e
			});
			var prefix = "";
			query.replace(/(\]|\)|push|pop|shift|splice|sort|reverse)\s*\(/, function () {
				throw new Error("Unsafe function call")
			}), query = query.replace(/([^=]=)([^=])/g, "$1=$2").replace(/@|(\.\s*)?[a-zA-Z\$_]+(\s*:)?/g, function (e) {
				return e.charAt(0) == "." ? e : e == "@" ? "$obj" : (e.match(/:|^(\$|Math|true|false|null)$/) ? "" : "$obj.") + e
			}).replace(/\.?\.?\[(`\]|[^\]])*\]|\?.*|\.\.([\w\$_]+)|\.\*/g, function (e, t, n) {
				var r = e.match(/^\.?\.?(\[\s*\^?\?|\^?\?|\[\s*==)(.*?)\]?$/);
				if (r) {
					var i = "";
					return e.match(/^\./) && (call("expand"), i = ",true)"), call(r[1].match(/\=/) ? "map" : r[1].match(/\^/) ? "distinctFilter" : "filter"), i + ",function($obj){return " + r[2] + "})"
				}
				return r = e.match(/^\[\s*([\/\\].*)\]/), r ? ".concat().sort(function(a,b){" + r[1].replace(/\s*,?\s*([\/\\])\s*([^,\\\/]+)/g, function (e, t, n) {
					return "var av= " + n.replace(/\$obj/, "a") + ",bv= " + n.replace(/\$obj/, "b") + ";if(av>bv||bv==null){return " + (t == "/" ? 1 : -1) + ";}\n" + "if(bv>av||av==null){return " + (t == "/" ? -1 : 1) + ";}\n"
				}) + "})" : (r = e.match(/^\[(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)\]/), r ? (call("slice"), "," + (r[1] || 0) + "," + (r[2] || 0) + "," + (r[3] || 1) + ")") : e.match(/^\.\.|\.\*|\[\s*\*\s*\]|,/) ? (call("expand"), (e.charAt(1) == "." ? ",'" + n + "'" : e.match(/,/) ? "," + e : "") + ")") : e)
			}).replace(/(\$obj\s*(\.\s*[\w_$]+\s*)*)(==|~)\s*`([0-9]+)/g, makeRegex).replace(/`([0-9]+)\s*(==|~)\s*(\$obj(\s*\.\s*[\w_$]+)*)/g, function (e, t, n, r, i) {
				return makeRegex(e, r, i, n, t)
			}), query = prefix + (query.charAt(0) == "$" ? "" : "$") + query.replace(/`([0-9]+|\])/g, function (e, t) {
				return t == "]" ? "]" : str[t]
			});
			var executor = eval("1&&function($,$1,$2,$3,$4,$5,$6,$7,$8,$9){var $obj=$;return " + query + "}");
			for (var i = 0; i < arguments.length - 1; i++) arguments[i] = arguments[i + 1];
			return obj ? executor.apply(this, arguments) : executor
		};
		typeof namespace == "function" ? namespace("json::JSONQuery", JSONQuery) : window.JSONQuery = JSONQuery
	}(), define("json-query/JSONQuery", function () {}), define("tabs/domTab", ["domplate/domplate", "domplate/tabView", "core/lib", "i18n!nls/domTab", "domplate/toolbar", "tabs/search", "core/dragdrop", "domplate/domTree", "core/cookies", "domplate/tableView", "core/trace", "json-query/JSONQuery"], function (Domplate, TabView, Lib, Strings, Toolbar, Search, DragDrop, DomTree, Cookies, TableView, Trace) {
		with(Domplate) {
			var jsonQueryOption = "searchJsonQuery";

			function DomTab() {
				this.toolbar = new Toolbar, this.toolbar.addButtons(this.getToolbarButtons()), this.tableView = !1
			}
			return DomTab.prototype = domplate(TabView.Tab.prototype, {
				id: "DOM",
				label: Strings.domTabLabel,
				separator: DIV({
					"class": "separator"
				}),
				tabBodyTag: DIV({
					"class": "tab$tab.id\\Body tabBody",
					_repObject: "$tab"
				}, DIV({
					"class": "domToolbar"
				}), DIV({
					"class": "domContent"
				})),
				domBox: TABLE({
					"class": "domBox",
					cellpadding: 0,
					cellspacing: 0
				}, TBODY(TR(TD({
					"class": "content"
				}, DIV({
					"class": "title"
				}, "$title")), TD({
					"class": "splitter"
				}), TD({
					"class": "results"
				}, DIV({
					"class": "resultsDefaultContent"
				}, Strings.searchResultsDefaultText))))),
				queryResultsViewType: DIV({
					"class": "queryResultsViewType"
				}, INPUT({
					"class": "type",
					type: "checkbox",
					onclick: "$onTableView"
				}), SPAN({
					"class": "label"
				}, Strings.queryResultsTableView)),
				onUpdateBody: function (e, t) {
					this.toolbar.render(Lib.$(t, "domToolbar"));
					if (!Lib.supportsSelectElementText) {
						var n = Lib.getElementByClass(t, "searchBox"),
							r = Lib.getElementByClass(n, "searchInput");
						r.setAttribute("disabled", "true"), r.setAttribute("title", Strings.searchDisabledForIE);
						var i = Lib.getElementByClass(n, "arrow");
						i.setAttribute("disabled", "true")
					}
					this.updateSearchResultsUI()
				},
				getToolbarButtons: function () {
					var e = [];
					return e.push({
						id: "search",
						tag: Search.Box.tag,
						initialize: Search.Box.initialize
					}), e
				},
				createSearchObject: function (e) {
					var t = Lib.getElementsByClass(this._body, "domTable");
					t = Lib.cloneArray(t);
					var n = t.map(function (e) {
						return e.repObject.input
					});
					return new Search.ObjectSearch(e, n, !1, !1)
				},
				getSearchOptions: function () {
					var e = [];
					return e.push({
						label: Strings.searchOptionJsonQuery,
						checked: Cookies.getBooleanCookie(jsonQueryOption),
						command: Lib.bindFixed(this.onOption, this, jsonQueryOption)
					}), e
				},
				onOption: function (e) {
					Search.Box.onOption(e), this.updateSearchResultsUI()
				},
				updateSearchResultsUI: function () {
					var e = Cookies.getBooleanCookie(jsonQueryOption),
						t = Lib.getElementsByClass(this._body, "domBox");
					for (var n = 0; n < t.length; n++) {
						var r = t[n],
							i = Lib.getElementByClass(r, "results"),
							s = Lib.getElementByClass(r, "splitter");
						e ? (Lib.setClass(i, "visible"), Lib.setClass(s, "visible")) : (Lib.removeClass(i, "visible"), Lib.removeClass(s, "visible"))
					}
					var o = Lib.getElementByClass(this._body, "searchInput");
					if (o) {
						var u = e ? Strings.jsonQueryPlaceholder : Strings.searchPlaceholder;
						o.setAttribute("placeholder", u)
					}
					var o = Lib.getElementByClass(this._body, "searchInput")
				},
				onSearch: function (e, t) {
					var n = Cookies.getBooleanCookie(jsonQueryOption);
					if (n) return this.evalJsonQuery(e, t);
					if (e.length < 3) return !0;
					this.currSearch && this.currSearch.text != e && (this.currSearch = null), this.currSearch || (this.currSearch = this.createSearchObject(e));
					if (this.currSearch.findNext(e)) {
						var r = this.currSearch.stack[1].object,
							i = this.getDomTree(r);
						for (var s = 0; s < this.currSearch.stack.length; s++) i.expandRow(this.currSearch.stack[s].object);
						var o = this.currSearch.getCurrentMatch(),
							u = i.getRow(o.value);
						if (u) {
							var a = u.querySelector(".memberValueCell .objectBox");
							this.currSearch.selectText(a.firstChild), Lib.scrollIntoCenterView(a)
						}
						return !0
					}
					return this.currSearch.matches.length > 0 && (this.currSearch = this.createSearchObject(e)), !1
				},
				evalJsonQuery: function (e, t) {
					if (t != 13) return !0;
					var n = Lib.getElementsByClass(this._body, "domBox");
					for (var r = 0; r < n.length; r++) {
						var i = n[r],
							s = Lib.getElementByClass(i, "domTable"),
							o = s.repObject.input,
							u = i.querySelector(".domBox .results");
						Lib.clearNode(u);
						try {
							var a = this.queryResultsViewType.append({}, u);
							if (this.tableView) {
								var f = Lib.getElementByClass(a, "type");
								f.setAttribute("checked", "true")
							}
							var l = JSONQuery(e, o);
							u.repObject = l;
							if (this.tableView) TableView.render(u, l);
							else {
								var c = new DomTree(l);
								c.append(u)
							}
						} catch (h) {
							Trace.exception(h)
						}
					}
					return !0
				},
				onTableView: function (e) {
					var t = Lib.fixEvent(e),
						n = t.target,
						r = Lib.getAncestorByClass(n, "tabBody"),
						i = $(n).prop("checked");
					r.repObject.tableView = i;
					var s = Lib.getAncestorByClass(n, "results"),
						o = s.repObject,
						u = Lib.getElementByClass(s, "domTable");
					u && u.parentNode.removeChild(u);
					var a = Lib.getElementByClass(s, "dataTableSizer");
					a && a.parentNode.removeChild(a);
					if (i) TableView.render(s, o);
					else {
						var f = new DomTree(o);
						f.append(s)
					}
				},
				append: function (e) {
					var t = Lib.$(this._body, "domContent"),
						n = [];
					for (var r = 0; r < e.log.pages.length; r++) {
						var i = e.log.pages[r];
						n.push(i.title)
					}
					var s = this.domBox.append({
							title: n.join(", ")
						}, t),
						o = Lib.getElementByClass(s, "content"),
						u = Lib.getElementByClass(s, "splitter");
					this.splitter = new DragDrop.Tracker(u, {
						onDragStart: Lib.bind(this.onDragStart, this),
						onDragOver: Lib.bind(this.onDragOver, this),
						onDrop: Lib.bind(this.onDrop, this)
					}), this.updateSearchResultsUI();
					var a = new DomTree(e);
					a.append(o), this.separator.append({}, t)
				},
				getDomTree: function (e) {
					var t = Lib.getElementsByClass(this._body, "domTable");
					for (var n = 0; n < t.length; n++) {
						var r = t[n].repObject;
						if (r.input == e) return r
					}
					return null
				},
				highlightFile: function (e, t) {
					var n = this.getDomTree(e);
					if (!n) return;
					n.expandRow(e.log), n.expandRow(e.log.entries);
					var r = n.expandRow(t);
					r && Lib.setClassTimed(r, "jumpHighlight");
					var i = Lib.$(this._body, "domContent");
					i.scrollTop = r.offsetTop
				},
				onDragStart: function (e) {
					var t = Lib.getBody(this._body.ownerDocument);
					t.setAttribute("vResizing", "true");
					var n = Lib.getAncestorByClass(e.element, "domBox"),
						r = Lib.getElementByClass(n, "content");
					this.startWidth = r.clientWidth
				},
				onDragOver: function (e, t) {
					var n = Lib.getAncestorByClass(t.element, "domBox"),
						r = Lib.getElementByClass(n, "content"),
						i = this.startWidth + e.x;
					r.style.width = i + "px"
				},
				onDrop: function (e) {
					var t = Lib.getBody(this._body.ownerDocument);
					t.removeAttribute("vResizing")
				}
			}), DomTab
		}
	}), define("harViewer", ["domplate/tabView", "tabs/homeTab", "tabs/aboutTab", "tabs/previewTab", "tabs/schemaTab", "tabs/domTab", "preview/harModel", "i18n!nls/harViewer", "preview/requestList", "core/lib", "core/trace"], function (e, t, n, r, i, s, o, u, a, f, l) {
		function c() {
			this.id = "harView", this.model = new o, this.appendTab(new t), this.appendTab(new r(this.model)), this.appendTab(new s), this.appendTab(new n), this.appendTab(new i)
		}
		c.prototype = f.extend(new e, {
			initialize: function (e) {
				this.version = e.getAttribute("version"), this.harSpecURL = "http://www.softwareishard.com/blog/har-12-spec/", this.render(e), this.selectTabByName("主页");
				var t = f.bind(this.appendPreview, this),
					n = f.bind(this.onLoadError, this);
				if (o.Loader.run(t, n)) {
					var r = this.getTab("主页");
					r && r.loadInProgress(!0)
				}
			},
			appendPreview: function (e) {
				var t = this.getTab("主页"),
					n = this.getTab("Preview"),
					r = this.getTab("DOM");
				try {
					var i = $("#validate").prop("checked"),
						s = o.parse(e, i);
					this.model.append(s);
					if (n) try {
						n.select(), n.append(s)
					} catch (u) {
						l.exception("HarView.appendPreview; EXCEPTION ", u), u.errors && n && n.appendError(u)
					}
					r && r.append(s)
				} catch (u) {
					l.exception("HarView.appendPreview; EXCEPTION ", u), u.errors && n && n.appendError(u), u.input && r.append(u.input)
				}
				n.select(), t && t.loadInProgress(!1), f.fireEvent(h, "onViewerHARLoaded")
			},
			onLoadError: function (e, t, n) {
				var r = this.getTab("主页");
				r && r.loadInProgress(!0, e.statusText), l.error("harModule.loadRemoteArchive; ERROR ", e, t, n)
			},
			loadHar: function (e, t) {
				return t = t || {}, o.Loader.load(this, e, t.jsonp, t.jsonpCallback, t.success, t.ajaxError)
			},
			setPreviewColumns: function (e, t) {
				a.setVisibleColumns(e, t)
			}
		});
		var h = document.getElementById("content"),
			p = h.repObject = new c;
		f.fireEvent(h, "onViewerPreInit"), p.initialize(h), f.fireEvent(h, "onViewerInit"), l.log("HarViewer; initialized OK")
	});