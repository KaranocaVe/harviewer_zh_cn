/* See license.txt for terms of usage */

/**
 * @license RequireJS i18n 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
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
    }(), define("nls/requestList", {
        root: {
            fromCache: "来自缓存",
            menuBreakLayout: "打断时间线布局",
            menuOpenRequestInWindow: "在新窗口中打开请求",
            menuOpenResponseInWindow: "在新窗口中打开回复",
            request: "请求",
            requests: "请求",
            tooltipSize: "%S (%S bytes)",
            tooltipZippedSize: "%S (%S bytes) - 压缩的",
            tooltipUnzippedSize: "%S (%S bytes) - 未压缩",
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
            ContentLoad: "DOM加载",
            WindowLoad: "Page加载",
            "page.event.Load": "Page加载",
            menuBreakTimeline: "打断时间线布局",
            menuOpenRequest: "在新窗口中打开请求",
            menuOpenResponse: "在新窗口中打开回复"
        }
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
            DataURL: "数据URL"
        }
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
    }), define("preview/menu", ["domplate/domplate", "core/lib", "domplate/toolbar", "core/trace"], function (Domplate, Lib, Toolbar, Trace) {
        with(Domplate) {
            function Menu() {}
            Menu.prototype = {
                render: function (e) {
                    this.element = MenuPlate.render(e), this.toolbar = new Toolbar, this.toolbar.addButton({
                        id: "credentials",
                        label: "Powered by Jan Odvarko",
                        tooltiptext: "http://www.softwareishard.com/blog/har-viewer/",
                        command: Lib.bindFixed(this.onCredentials, this, !0)
                    });
                    var t = Lib.getElementByClass(this.element, "menuContent");
                    this.toolbar.render(t), Lib.isWebkit && (t.style.paddingTop = "1px")
                },
                onCredentials: function () {
                    window.open("http://www.softwareishard.com/blog/har-viewer/")
                },
                onFullPreview: function () {}
            };
            var MenuPlate = domplate({
                tag: DIV({
                    "class": "menu",
                    _repObject: "$object"
                }, DIV({
                    "class": "menuHandle",
                    onmousemove: "$onMouseMove",
                    onclick: "$onMouseClick"
                }), DIV({
                    "class": "menuContent",
                    style: "display: none"
                })),
                onMouseMove: function (e) {
                    var t = Lib.fixEvent(e);
                    this.open(t.target)
                },
                onMouseClick: function (e) {
                    var t = Lib.fixEvent(e);
                    this.toggle(t.target)
                },
                open: function (e) {
                    var t = Lib.getAncestorByClass(e, "menu"),
                        n = Lib.getElementByClass(t, "menuContent");
                    if (n.clientWidth > 0) return;
                    this.toggle(e)
                },
                toggle: function (e) {
                    var t = Lib.getAncestorByClass(e, "menu"),
                        n = Lib.getElementByClass(t, "menuContent");
                    $(n).animate({
                        width: "toggle"
                    }, undefined, undefined, function () {
                        var e = Lib.getElementByClass(t, "menuHandle");
                        n.clientWidth > 0 ? Lib.setClass(e, "opened") : Lib.removeClass(e, "opened")
                    })
                },
                render: function (e, t) {
                    return this.tag.append({
                        object: t
                    }, e, this)
                }
            });
            return Menu
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
    }), define("harPreview", ["preview/requestList", "preview/pageList", "preview/harModel", "core/lib", "core/trace", "preview/menu", "preview/validationError"], function (e, t, n, r, i, s, o) {
        function u() {
            this.id = "harPreview", this.model = new n
        }
        u.prototype = {
            initialize: function (e) {
                this.topMenu = new s, this.topMenu.render(e);
                var t = r.bind(this.appendPreview, this),
                    i = r.bind(this.onError, this);
                n.Loader.run(t, i)
            },
            appendPreview: function (e) {
                try {
                    var s = !0,
                        u = r.getURLParameter("validate");
                    u == "false" && (s = !1);
                    var f = n.parse(e, s);
                    this.model.append(f);
                    var l = new t(f);
                    l.render(a), r.fireEvent(a, "onPreviewHARLoaded")
                } catch (c) {
                    i.exception("HarPreview.appendPreview; EXCEPTION ", c), o.appendError(c, a)
                }
            },
            onError: function (e, t, n) {
                i.log("HarPreview; Load error ", e, t, n)
            },
            loadHar: function (e, t) {
                return t = t || {}, n.Loader.load(this, e, t.jsonp, t.jsonpCallback, t.success, t.ajaxError)
            },
            setPreviewColumns: function (t, n) {
                e.setVisibleColumns(t, n)
            }
        };
        var a = document.getElementById("content"),
            f = a.repObject = new u;
        r.fireEvent(a, "onPreviewPreInit"), f.initialize(a), r.fireEvent(a, "onPreviewInit"), i.log("HarPreview; initialized OK")
    });