/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});;
/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});
;(function(e,t,n){"use strict";function $(n){u=t.documentElement;a=t.body;z();yt=this;n=n||{};Nt=n.constants||{};if(n.easing){for(var r in n.easing){V[r]=n.easing[r]}}It=n.edgeStrategy||"set";Et={beforerender:n.beforerender,render:n.render};St=n.forceHeight!==false;if(St){Tt=n.scale||1}Ct=n.mobileDeceleration||x;Pt=n.smoothScrolling!==false;Ht=n.smoothScrollingDuration||T;Bt={targetTop:yt.getScrollTop()};qt=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})();if(qt){wt=t.getElementById("skrollr-body");if(wt){st()}J();pt(u,[g,w],[y])}else{pt(u,[g,b],[y])}yt.refresh();ot(e,"resize orientationchange",function(){var e=u.clientWidth;var t=u.clientHeight;if(t!==Mt||e!==Ot){Mt=t;Ot=e;_t=true}});var i=W();(function s(){G();Wt=i(s)})();return yt}var r={get:function(){return yt},init:function(e){return yt||new $(e)},VERSION:"0.6.22"};var i=Object.prototype.hasOwnProperty;var s=e.Math;var o=e.getComputedStyle;var u;var a;var f="touchstart";var l="touchmove";var c="touchcancel";var h="touchend";var p="skrollable";var d=p+"-before";var v=p+"-between";var m=p+"-after";var g="skrollr";var y="no-"+g;var b=g+"-desktop";var w=g+"-mobile";var E="linear";var S=1e3;var x=.004;var T=200;var N="start";var C="end";var k="center";var L="bottom";var A="___skrollable_id";var O=/^(?:input|textarea|button|select)$/i;var M=/^\s+|\s+$/g;var _=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;var D=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;var P=/^([a-z\-]+)\[(\w+)\]$/;var H=/-([a-z])/g;var B=function(e,t){return t.toUpperCase()};var j=/[\-+]?[\d]*\.?[\d]+/g;var F=/\{\?\}/g;var I=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;var q=/[a-z\-]+-gradient/g;var R="";var U="";var z=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(!o){return}var t=o(a,null);for(var n in t){R=n.match(e)||+n==n&&t[n].match(e);if(R){break}}if(!R){R=U="";return}R=R[0];if(R.slice(0,1)==="-"){U=R;R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]}else{U="-"+R.toLowerCase()+"-"}};var W=function(){var t=e.requestAnimationFrame||e[R.toLowerCase()+"RequestAnimationFrame"];var n=mt();if(qt||!t){t=function(t){var r=mt()-n;var i=s.max(0,1e3/60-r);return e.setTimeout(function(){n=mt();t()},i)}}return t};var X=function(){var t=e.cancelAnimationFrame||e[R.toLowerCase()+"CancelAnimationFrame"];if(qt||!t){t=function(t){return e.clearTimeout(t)}}return t};var V={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(e<=.5083){t=3}else if(e<=.8489){t=9}else if(e<=.96208){t=27}else if(e<=.99981){t=91}else{return 1}return 1-s.abs(3*s.cos(e*t*1.028)/t)}};$.prototype.refresh=function(e){var r;var i;var s=false;if(e===n){s=true;bt=[];Ft=0;e=t.getElementsByTagName("*")}else if(e.length===n){e=[e]}r=0;i=e.length;for(;r<i;r++){var o=e[r];var u=o;var a=[];var f=Pt;var l=It;if(!o.attributes){continue}var c=0;var h=o.attributes.length;for(;c<h;c++){var d=o.attributes[c];if(d.name==="data-anchor-target"){u=t.querySelector(d.value);if(u===null){throw'Unable to find anchor target "'+d.value+'"'}continue}if(d.name==="data-smooth-scrolling"){f=d.value!=="off";continue}if(d.name==="data-edge-strategy"){l=d.value;continue}var v=d.name.match(_);if(v===null){continue}var m={props:d.value,element:o};a.push(m);var g=v[1];if(g){m.constant=g.substr(1)}var y=v[2];if(/p$/.test(y)){m.isPercentage=true;m.offset=(y.slice(0,-1)|0)/100}else{m.offset=y|0}var b=v[3];var w=v[4]||b;if(!b||b===N||b===C){m.mode="absolute";if(b===C){m.isEnd=true}else if(!m.isPercentage){m.offset=m.offset*Tt}}else{m.mode="relative";m.anchors=[b,w]}}if(!a.length){continue}var E,S;var x;if(!s&&A in o){x=o[A];E=bt[x].styleAttr;S=bt[x].classAttr}else{x=o[A]=Ft++;E=o.style.cssText;S=ht(o)}bt[x]={element:o,styleAttr:E,classAttr:S,anchorTarget:u,keyFrames:a,smoothScrolling:f,edgeStrategy:l};pt(o,[p],[])}ft();r=0;i=e.length;for(;r<i;r++){var T=bt[e[r][A]];if(T===n){continue}Y(T);et(T)}return yt};$.prototype.relativeToAbsolute=function(e,t,n){var r=u.clientHeight;var i=e.getBoundingClientRect();var s=i.top;var o=i.bottom-i.top;if(t===L){s-=r}else if(t===k){s-=r/2}if(n===L){s+=o}else if(n===k){s+=o/2}s+=yt.getScrollTop();return s+.5|0};$.prototype.animateTo=function(e,t){t=t||{};var r=mt();var i=yt.getScrollTop();Dt={startTop:i,topDiff:e-i,targetTop:e,duration:t.duration||S,startTime:r,endTime:r+(t.duration||S),easing:V[t.easing||E],done:t.done};if(!Dt.topDiff){if(Dt.done){Dt.done.call(yt,false)}Dt=n}return yt};$.prototype.stopAnimateTo=function(){if(Dt&&Dt.done){Dt.done.call(yt,true)}Dt=n};$.prototype.isAnimatingTo=function(){return!!Dt};$.prototype.setScrollTop=function(t,n){jt=n===true;if(qt){Rt=s.min(s.max(t,0),xt)}else{e.scrollTo(0,t)}return yt};$.prototype.getScrollTop=function(){if(qt){return Rt}else{return e.pageYOffset||u.scrollTop||a.scrollTop||0}};$.prototype.getMaxScrollTop=function(){return xt};$.prototype.on=function(e,t){Et[e]=t;return yt};$.prototype.off=function(e){delete Et[e];return yt};$.prototype.destroy=function(){var e=X();e(Wt);at();pt(u,[y],[g,b,w]);var t=0;var i=bt.length;for(;t<i;t++){it(bt[t].element)}u.style.overflow=a.style.overflow="auto";u.style.height=a.style.height="auto";if(wt){r.setStyle(wt,"transform","none")}yt=n;wt=n;Et=n;St=n;xt=0;Tt=1;Nt=n;Ct=n;kt="down";Lt=-1;Ot=0;Mt=0;_t=false;Dt=n;Pt=n;Ht=n;Bt=n;jt=n;Ft=0;It=n;qt=false;Rt=0;Ut=n};var J=function(){var r;var i;var o;var p;var d;var v;var m;var g;var y;var b;var w;var E;ot(u,[f,l,c,h].join(" "),function(e){var u=e.changedTouches[0];p=e.target;while(p.nodeType===3){p=p.parentNode}d=u.clientY;v=u.clientX;b=e.timeStamp;if(!O.test(p.tagName)){e.preventDefault()}switch(e.type){case f:if(r){r.blur()}yt.stopAnimateTo();r=p;i=m=d;o=v;y=b;break;case l:if(O.test(p.tagName)&&t.activeElement!==p){e.preventDefault()}g=d-m;E=b-w;yt.setScrollTop(Rt-g,true);m=d;w=b;break;default:case c:case h:var a=i-d;var S=o-v;var x=S*S+a*a;if(x<49){if(!O.test(r.tagName)){r.focus();var T=t.createEvent("MouseEvents");T.initMouseEvent("click",true,true,e.view,1,u.screenX,u.screenY,u.clientX,u.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);r.dispatchEvent(T)}return}r=n;var N=g/E;N=s.max(s.min(N,3),-3);var C=s.abs(N/Ct);var k=N*C+.5*Ct*C*C;var L=yt.getScrollTop()-k;var A=0;if(L>xt){A=(xt-L)/k;L=xt}else if(L<0){A=-L/k;L=0}C=C*(1-A);yt.animateTo(L+.5|0,{easing:"outCubic",duration:C});break}});e.scrollTo(0,0);u.style.overflow=a.style.overflow="hidden"};var K=function(){var e=u.clientHeight;var t=lt();var n;var r;var i;var o;var a;var f;var l;var c;var h;var p;var d;c=0;h=bt.length;for(;c<h;c++){n=bt[c];r=n.element;i=n.anchorTarget;o=n.keyFrames;a=0;f=o.length;for(;a<f;a++){l=o[a];p=l.offset;d=t[l.constant]||0;l.frame=p;if(l.isPercentage){p=p*e;l.frame=p}if(l.mode==="relative"){it(r);l.frame=yt.relativeToAbsolute(i,l.anchors[0],l.anchors[1])-p;it(r,true)}l.frame+=d;if(St){if(!l.isEnd&&l.frame>xt){xt=l.frame}}}}xt=s.max(xt,ct());c=0;h=bt.length;for(;c<h;c++){n=bt[c];o=n.keyFrames;a=0;f=o.length;for(;a<f;a++){l=o[a];d=t[l.constant]||0;if(l.isEnd){l.frame=xt-l.offset+d}}n.keyFrames.sort(gt)}};var Q=function(e,t){var n=0;var s=bt.length;for(;n<s;n++){var o=bt[n];var u=o.element;var a=o.smoothScrolling?e:t;var f=o.keyFrames;var l=f[0].frame;var c=f[f.length-1].frame;var h=a<l;var g=a>c;var y=f[h?0:f.length-1];var b;var w;if(h||g){if(h&&o.edge===-1||g&&o.edge===1){continue}pt(u,[h?d:m],[d,v,m]);o.edge=h?-1:1;switch(o.edgeStrategy){case"reset":it(u);continue;case"ease":a=y.frame;break;default:case"set":var E=y.props;for(b in E){if(i.call(E,b)){w=rt(E[b].value);r.setStyle(u,b,w)}}continue}}else{if(o.edge!==0){pt(u,[p,v],[d,m]);o.edge=0}}var S=0;var x=f.length-1;for(;S<x;S++){if(a>=f[S].frame&&a<=f[S+1].frame){var T=f[S];var N=f[S+1];for(b in T.props){if(i.call(T.props,b)){var C=(a-T.frame)/(N.frame-T.frame);C=T.props[b].easing(C);w=nt(T.props[b].value,N.props[b].value,C);w=rt(w);r.setStyle(u,b,w)}}break}}}};var G=function(){if(_t){_t=false;ft()}var e=yt.getScrollTop();var t;var i=mt();var s;if(Dt){if(i>=Dt.endTime){e=Dt.targetTop;t=Dt.done;Dt=n}else{s=Dt.easing((i-Dt.startTime)/Dt.duration);e=Dt.startTop+s*Dt.topDiff|0}yt.setScrollTop(e,true)}else if(!jt){var o=Bt.targetTop-e;if(o){Bt={startTop:Lt,topDiff:e-Lt,targetTop:e,startTime:At,endTime:At+Ht}}if(i<=Bt.endTime){s=V.sqrt((i-Bt.startTime)/Ht);e=Bt.startTop+s*Bt.topDiff|0}}if(qt&&wt){r.setStyle(wt,"transform","translate(0, "+ -Rt+"px) "+Ut)}if(jt||Lt!==e){kt=e>Lt?"down":e<Lt?"up":kt;jt=false;var u={curTop:e,lastTop:Lt,maxTop:xt,direction:kt};var a=Et.beforerender&&Et.beforerender.call(yt,u);if(a!==false){Q(e,yt.getScrollTop());Lt=e;if(Et.render){Et.render.call(yt,u)}}if(t){t.call(yt,false)}}At=i};var Y=function(e){var t=0;var n=e.keyFrames.length;for(;t<n;t++){var r=e.keyFrames[t];var i;var s;var o;var u={};var a;while((a=D.exec(r.props))!==null){o=a[1];s=a[2];i=o.match(P);if(i!==null){o=i[1];i=i[2]}else{i=E}s=s.indexOf("!")?Z(s):[s.slice(1)];u[o]={value:s,easing:V[i]}}r.props=u}};var Z=function(e){var t=[];I.lastIndex=0;e=e.replace(I,function(e){return e.replace(j,function(e){return e/255*100+"%"})});if(U){q.lastIndex=0;e=e.replace(q,function(e){return U+e})}e=e.replace(j,function(e){t.push(+e);return"{?}"});t.unshift(e);return t};var et=function(e){var t={};var n;var r;n=0;r=e.keyFrames.length;for(;n<r;n++){tt(e.keyFrames[n],t)}t={};n=e.keyFrames.length-1;for(;n>=0;n--){tt(e.keyFrames[n],t)}};var tt=function(e,t){var n;for(n in t){if(!i.call(e.props,n)){e.props[n]=t[n]}}for(n in e.props){t[n]=e.props[n]}};var nt=function(e,t,n){var r;var i=e.length;if(i!==t.length){throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"'}var s=[e[0]];r=1;for(;r<i;r++){s[r]=e[r]+(t[r]-e[r])*n}return s};var rt=function(e){var t=1;F.lastIndex=0;return e[0].replace(F,function(){return e[t++]})};var it=function(e,t){e=[].concat(e);var n;var r;var i=0;var s=e.length;for(;i<s;i++){r=e[i];n=bt[r[A]];if(!n){continue}if(t){r.style.cssText=n.dirtyStyleAttr;pt(r,n.dirtyClassAttr)}else{n.dirtyStyleAttr=r.style.cssText;n.dirtyClassAttr=ht(r);r.style.cssText=n.styleAttr;pt(r,n.classAttr)}}};var st=function(){Ut="translateZ(0)";r.setStyle(wt,"transform",Ut);var e=o(wt);var t=e.getPropertyValue("transform");var n=e.getPropertyValue(U+"transform");var i=t&&t!=="none"||n&&n!=="none";if(!i){Ut=""}};r.setStyle=function(e,t,n){var r=e.style;t=t.replace(H,B).replace("-","");if(t==="zIndex"){if(isNaN(n)){r[t]=n}else{r[t]=""+(n|0)}}else if(t==="float"){r.styleFloat=r.cssFloat=n}else{try{if(R){r[R+t.slice(0,1).toUpperCase()+t.slice(1)]=n}r[t]=n}catch(i){}}};var ot=r.addEvent=function(t,n,r){var i=function(t){t=t||e.event;if(!t.target){t.target=t.srcElement}if(!t.preventDefault){t.preventDefault=function(){t.returnValue=false;t.defaultPrevented=true}}return r.call(this,t)};n=n.split(" ");var s;var o=0;var u=n.length;for(;o<u;o++){s=n[o];if(t.addEventListener){t.addEventListener(s,r,false)}else{t.attachEvent("on"+s,i)}zt.push({element:t,name:s,listener:r})}};var ut=r.removeEvent=function(e,t,n){t=t.split(" ");var r=0;var i=t.length;for(;r<i;r++){if(e.removeEventListener){e.removeEventListener(t[r],n,false)}else{e.detachEvent("on"+t[r],n)}}};var at=function(){var e;var t=0;var n=zt.length;for(;t<n;t++){e=zt[t];ut(e.element,e.name,e.listener)}zt=[]};var ft=function(){var e=yt.getScrollTop();xt=0;if(St&&!qt){a.style.height="auto"}K();if(St&&!qt){a.style.height=xt+u.clientHeight+"px"}if(qt){yt.setScrollTop(s.min(yt.getScrollTop(),xt))}else{yt.setScrollTop(e,true)}jt=true};var lt=function(){var e=u.clientHeight;var t={};var n;var r;for(n in Nt){r=Nt[n];if(typeof r==="function"){r=r.call(yt)}else if(/p$/.test(r)){r=r.slice(0,-1)/100*e}t[n]=r}return t};var ct=function(){var e=wt&&wt.offsetHeight||0;var t=s.max(e,a.scrollHeight,a.offsetHeight,u.scrollHeight,u.offsetHeight,u.clientHeight);return t-u.clientHeight};var ht=function(t){var n="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[n];n="baseVal"}return t[n]};var pt=function(t,r,i){var s="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[s];s="baseVal"}if(i===n){t[s]=r;return}var o=t[s];var u=0;var a=i.length;for(;u<a;u++){o=vt(o).replace(vt(i[u])," ")}o=dt(o);var f=0;var l=r.length;for(;f<l;f++){if(vt(o).indexOf(vt(r[f]))===-1){o+=" "+r[f]}}t[s]=dt(o)};var dt=function(e){return e.replace(M,"")};var vt=function(e){return" "+e+" "};var mt=Date.now||function(){return+(new Date)};var gt=function(e,t){return e.frame-t.frame};var yt;var bt;var wt;var Et;var St;var xt=0;var Tt=1;var Nt;var Ct;var kt="down";var Lt=-1;var At=mt();var Ot=0;var Mt=0;var _t=false;var Dt;var Pt;var Ht;var Bt;var jt;var Ft=0;var It;var qt=false;var Rt=0;var Ut;var zt=[];var Wt;if(typeof define==="function"&&define.amd){define("skrollr",function(){return r})}else{e.skrollr=r}})(window,document)
;/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);;(function($){var selectors=[];var check_binded=false;var check_lock=false;var defaults={interval:250,force_process:false};var $window=$(window);var $prior_appeared=[];function process(){check_lock=false;for(var index=0,selectorsLength=selectors.length;index<selectorsLength;index++){var $appeared=$(selectors[index]).filter(function(){return $(this).is(':appeared');});$appeared.trigger('appear',[$appeared]);if($prior_appeared[index]){var $disappeared=$prior_appeared[index].not($appeared);$disappeared.trigger('disappear',[$disappeared]);}
$prior_appeared[index]=$appeared;}};function add_selector(selector){selectors.push(selector);$prior_appeared.push();}
$.expr[':']['appeared']=function(element){var $element=$(element);if(!$element.is(':visible')){return false;}
var window_left=$window.scrollLeft();var window_top=$window.scrollTop();var offset=$element.offset();var left=offset.left;var top=offset.top;if(top+$element.height()>=window_top&&top-($element.data('appear-top-offset')||0)<=window_top+$window.height()&&left+$element.width()>=window_left&&left-($element.data('appear-left-offset')||0)<=window_left+$window.width()){return true;}else{return false;}};$.fn.extend({appear:function(options){var opts=$.extend({},defaults,options||{});var selector=this.selector||this;if(!check_binded){var on_check=function(){if(check_lock){return;}
check_lock=true;setTimeout(process,opts.interval);};$(window).scroll(on_check).resize(on_check);check_binded=true;}
if(opts.force_process){setTimeout(process,opts.interval);}
add_selector(selector);return $(selector);}});$.extend({force_appear:function(){if(check_binded){process();return true;}
return false;}});})(function(){if(typeof module!=='undefined'){return require('jquery');}else{return jQuery;}}());;(function($){"use strict";var bootsnav={initialize:function(){this.event();this.hoverDropdown();this.navbarSticky();this.navbarScrollspy();},event:function(){var getNav=$("nav.navbar.bootsnav");var navSticky=getNav.hasClass("navbar-sticky");if(navSticky){getNav.wrap("<div class='wrap-sticky'></div>");}
if(getNav.hasClass("brand-center")){var postsArr=new Array(),index=$("nav.brand-center"),$postsList=index.find('ul.navbar-nav');index.prepend("<span class='storage-name' style='display:none;'></span>");index.find('ul.navbar-nav > li').each(function(){if($(this).hasClass("active")){var getElement=$("a",this).eq(0).text();$(".storage-name").html(getElement);}
postsArr.push($(this).html());});var firstList=postsArr.splice(0,Math.round(postsArr.length/2)),secondList=postsArr,ListHTML='';var createHTML=function(list){ListHTML='';for(var i=0;i<list.length;i++){ListHTML+='<li>'+list[i]+'</li>'}}
createHTML(firstList);$postsList.html(ListHTML);index.find("ul.nav").first().addClass("navbar-left");createHTML(secondList);$postsList.after('<ul class="nav navbar-nav"></ul>').next().html(ListHTML);index.find("ul.nav").last().addClass("navbar-right");index.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>");index.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>");index.find('ul.navbar-nav > li').each(function(){var dropDown=$("ul.dropdown-menu",this),simpleMenu=$("ul.simple-dropdown",this),megaMenu=$("ul.megamenu-content",this);dropDown.closest("li").addClass("dropdown");simpleMenu.closest("li").addClass("simple-dropdown");megaMenu.closest("li").addClass("megamenu-fw");});var getName=$(".storage-name").html();if(!getName==""){$("ul.navbar-nav > li:contains('"+getName+"')").addClass("active");}}
if(getNav.hasClass("navbar-sidebar")){$("body").addClass("wrap-nav-sidebar");getNav.wrapInner("<div class='scroller'></div>");}else{$(".bootsnav").addClass("on");}
if(getNav.find("ul.nav").hasClass("navbar-center")){getNav.addClass("menu-center");}
if(getNav.hasClass("navbar-full")){$("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>");$(".wrap-full-menu").wrap("<div class='nav-full'></div>");$("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>");}else if(getNav.hasClass("navbar-mobile")){getNav.removeClass("no-full");}else{getNav.addClass("no-full");}
if(getNav.hasClass("navbar-mobile")){$('.navbar-collapse').on('shown.bs.collapse',function(){$("body").addClass("side-right");});$('.navbar-collapse').on('hide.bs.collapse',function(){$("body").removeClass("side-right");});$(window).on("resize",function(){$("body").removeClass("side-right");});}
if(getNav.hasClass("no-background")){$(window).on("scroll",function(){var scrollTop=$(window).scrollTop();if(scrollTop>34){$(".navbar-fixed").removeClass("no-background");}else{$(".navbar-fixed").addClass("no-background");}});}
if(getNav.hasClass("navbar-transparent")){$(window).on("scroll",function(){var scrollTop=$(window).scrollTop();if(scrollTop>34){$(".navbar-fixed").removeClass("navbar-transparent");}else{$(".navbar-fixed").addClass("navbar-transparent");}});}
$(".btn-cart").on("click",function(e){e.stopPropagation();});$("nav.navbar.bootsnav .attr-nav").each(function(){$("li.search > a",this).on("click",function(e){e.preventDefault();$(".top-search").slideToggle();});});$(".input-group-addon.close-search").on("click",function(){$(".top-search").slideUp();});$("nav.navbar.bootsnav .attr-nav").each(function(){$("li.side-menu > a",this).on("click",function(e){e.preventDefault();$("nav.navbar.bootsnav > .side").toggleClass("on");$("body").toggleClass("on-side");});});$(".side .close-side").on("click",function(e){e.preventDefault();$("nav.navbar.bootsnav > .side").removeClass("on");$("body").removeClass("on-side");});},hoverDropdown:function(){var getNav=$("nav.navbar.bootsnav"),getWindow=$(window).width(),getHeight=$(window).height(),getIn=getNav.find("ul.nav").data("in"),getOut=getNav.find("ul.nav").data("out");if(getWindow<991){$(".scroller").css("height","auto");$("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter");$("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave");$("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter");$("nav.navbar.bootsnav ul.nav").off("mouseleave");$(".navbar-collapse").removeClass("animated");$("nav.navbar.bootsnav ul.nav").each(function(){$(".dropdown-menu",this).addClass("animated");$(".dropdown-menu",this).removeClass(getOut);$("a.dropdown-toggle",this).off('click');$("a.dropdown-toggle",this).on('click',function(e){e.stopPropagation();$(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(getIn);$(this).closest("li.dropdown").first().toggleClass("on");return false;});$('li.dropdown',this).each(function(){$(this).find(".dropdown-menu").stop().fadeOut('fast');$(this).on('hidden.bs.dropdown',function(){$(this).find(".dropdown-menu").stop().fadeOut('fast');});return false;});$(".megamenu-fw",this).each(function(){$(".col-menu",this).each(function(){$(".content",this).addClass("animated");$(".content",this).stop().fadeOut();$(".title",this).off("click");$(".title",this).on("click",function(){$(this).closest(".col-menu").find(".content").stop().fadeToggle('fast').addClass(getIn);$(this).closest(".col-menu").toggleClass("on");return false;});$(".content",this).on("click",function(e){e.stopPropagation();});});});});var cleanOpen=function(){$('li.dropdown',this).removeClass("on");$(".dropdown-menu",this).stop().fadeOut('fast');$(".dropdown-menu",this).removeClass(getIn);$(".col-menu",this).removeClass("on");$(".col-menu .content",this).stop().fadeOut('fast');$(".col-menu .content",this).removeClass(getIn);}
$("nav.navbar.bootsnav").on("mouseleave",function(){cleanOpen();});$("nav.navbar.bootsnav .attr-nav").each(function(){$(".dropdown-menu",this).removeClass("animated");$("li.dropdown",this).off("mouseenter");$("li.dropdown",this).off("mouseleave");$("a.dropdown-toggle",this).off('click');$("a.dropdown-toggle",this).on('click',function(e){e.stopPropagation();$(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle();$(".navbar-toggle").each(function(){$(".fa",this).removeClass("fa-times");$(".fa",this).addClass("fa-bars");$(".navbar-collapse").removeClass("in");$(".navbar-collapse").removeClass("on");});});$(this).on("mouseleave",function(){$(".dropdown-menu",this).stop().fadeOut();$("li.dropdown",this).removeClass("on");return false;});});$(".navbar-toggle").each(function(){$(this).off("click");$(this).on("click",function(){$(".fa",this).toggleClass("fa-bars");$(".fa",this).toggleClass("fa-times");cleanOpen();});});}else if(getWindow>991){$(".scroller").css("height",getHeight+"px");if(getNav.hasClass("navbar-sidebar")){$("nav.navbar.bootsnav ul.nav").each(function(){$("a.dropdown-toggle",this).off('click');$("a.dropdown-toggle",this).on('click',function(e){e.stopPropagation();});$(".dropdown-menu",this).addClass("animated");$("li.dropdown",this).on("mouseenter",function(){$(".dropdown-menu",this).eq(0).removeClass(getOut);$(".dropdown-menu",this).eq(0).stop().fadeIn('fast').addClass(getIn);$(this).addClass("on");return false;});$(".col-menu").each(function(){$(".content",this).addClass("animated");$(".title",this).on("mouseenter",function(){$(this).closest(".col-menu").find(".content").stop().fadeIn('fast').addClass(getIn);$(this).closest(".col-menu").addClass("on");return false;});});$(this).on("mouseleave",function(){$(".dropdown-menu",this).stop().removeClass(getIn);$(".dropdown-menu",this).stop().addClass(getOut).fadeOut('fast');$(".col-menu",this).find(".content").stop().fadeOut('fast').removeClass(getIn);$(".col-menu",this).removeClass("on");$("li.dropdown",this).removeClass("on");return false;});});}else{var isSafari=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);$("nav.navbar.bootsnav ul.nav").each(function(){$("a.dropdown-toggle",this).off('click');$("a.dropdown-toggle",this).on('click',function(e){e.stopPropagation();});$(".megamenu-fw",this).each(function(){$(".title",this).off("click");$("a.dropdown-toggle",this).off("click");$(".content").removeClass("animated");});$(".dropdown-menu",this).addClass("animated");if($('.navbar-left-sidebar').length>0||$('.left-nav-sidebar').length>0){$("li:not(.dropdown)",this).on("mouseenter",function(){$(this).parent().find('.dropdown-menu').stop().fadeOut('fast');});$(document).on('click','.side-left-menu-close.active',function(e){$(this).removeClass('active');});}
$("li.dropdown",this).on("mouseenter",function(){var _this=this;$('.side-left-menu-close').addClass('active');if($('.navbar-left-sidebar').length>0||$('.left-nav-sidebar').length>0){$(this).parent().find('.dropdown').removeClass("on");if($(this).parents('.dropdown-menu').length>0){$(this).parents('.dropdown-menu').find('.dropdown-menu').not($('.dropdown-menu',this)).stop().fadeOut('fast');}else{$(this).parents('.bootsnav .nav').find('.dropdown-menu').not($('.dropdown-menu',this)).stop().fadeOut('fast');$(":not(.second-level)",this).find('.third-level').stop().fadeOut('fast');}
if($(this).parent().hasClass("second-level")){$(this).parents('.navbar-nav').addClass("enter");}else if($(this).parent().hasClass("enter")){$('.navbar-nav').removeClass("enter");}}
$(".dropdown-menu",this).eq(0).removeClass(getOut);if(isSafari)
$(".dropdown-menu",_this).eq(0).stop().fadeIn('fast').addClass(getIn);else
$(".dropdown-menu",_this).eq(0).stop().fadeIn('fast').addClass(getIn);$(this).addClass("on");if($('.navbar-left-sidebar').length>0||$('.left-nav-sidebar').length>0){if($('.left-nav-sidebar').length>0){var menu_width=$('.sidebar-part1').outerWidth();menu_width=menu_width+20;menu_width=menu_width+$('.left-nav-on .navbar-nav').outerWidth();}else{var menu_width=$('.navbar-nav').outerWidth();}
var mainWidth=$(window).width();setTimeout(function(){$('.dropdown').each(function(){if($(this).hasClass('on')){menu_width=menu_width+$('.dropdown-menu li',this).outerWidth();}});$('.side-left-menu-close').width(mainWidth-menu_width);},300);}
return false;});$("li.dropdown",this).on("mouseleave",function(){$(".dropdown-menu",this).eq(0).removeClass(getIn);if($(".dropdown-menu",this).css("display")=="none"||!($('.navbar-left-sidebar').length>0||$('.left-nav-sidebar').length>0)||$(this).parents('.bootsnav .nav').hasClass("enter")){if(isSafari)
$(".dropdown-menu",this).eq(0).stop().fadeOut('fast').addClass(getOut);else
$(".dropdown-menu",this).eq(0).stop().fadeOut('fast').addClass(getOut);$(this).removeClass("on");}
if($('.navbar-left-sidebar').length>0||$('.left-nav-sidebar').length>0){$('.side-left-menu-close').addClass('active');if($('.left-nav-sidebar').length>0){var menu_width=$('.sidebar-part1').outerWidth();menu_width=menu_width+20;menu_width=menu_width+$('.left-nav-on .navbar-nav').outerWidth();}else{var menu_width=$('.navbar-nav').outerWidth();}
var mainWidth=$(window).width();setTimeout(function(){$('.dropdown').each(function(){if($(this).hasClass('on')){menu_width=menu_width+$('.dropdown-menu li',this).outerWidth();}});$('.side-left-menu-close').width(mainWidth-menu_width);},300);}});$(this).on("mouseleave",function(){$(".dropdown-menu",this).removeClass(getIn);$('.side-left-menu-close').removeClass('active');if(isSafari)
$(".dropdown-menu",this).eq(0).stop().fadeOut('fast').addClass(getOut);else
$(".dropdown-menu",this).eq(0).stop().fadeOut('fast').addClass(getOut);$("li.dropdown",this).removeClass("on");if($('.navbar-left-sidebar').length>0||$('.left-nav-sidebar').length>0){if($('.bootsnav .nav').hasClass("enter")){$('.bootsnav .nav').removeClass("enter");}else{$('.bootsnav .nav').find('.dropdown-menu').fadeOut('fast');}}
return false;});});}
$("nav.navbar.bootsnav .attr-nav").each(function(){$("a.dropdown-toggle",this).off('click');$("a.dropdown-toggle",this).on('click',function(e){e.stopPropagation();});$(".dropdown-menu",this).addClass("animated");$("li.dropdown",this).on("mouseenter",function(){$(".dropdown-menu",this).eq(0).removeClass(getOut);$(".dropdown-menu",this).eq(0).stop().fadeIn('fast').addClass(getIn);$(this).addClass("on");return false;});$("li.dropdown",this).on("mouseleave",function(){$(".dropdown-menu",this).eq(0).removeClass(getIn);$(".dropdown-menu",this).eq(0).stop().fadeOut('fast').addClass(getOut);$(this).removeClass("on");});$(this).on("mouseleave",function(){$(".dropdown-menu",this).removeClass(getIn);$(".dropdown-menu",this).eq(0).stop().fadeOut('fast').addClass(getOut);$("li.dropdown",this).removeClass("on");return false;});});}
if(getNav.hasClass("navbar-full")){var windowHeight=$(window).height(),windowWidth=$(window).width();$(".nav-full").css("height",windowHeight+"px");$(".wrap-full-menu").css("height",windowHeight+"px");$(".wrap-full-menu").css("width",windowWidth+"px");$(".navbar-collapse").addClass("animated");$(".navbar-toggle").each(function(){var getId=$(this).data("target");$(this).off("click");$(this).on("click",function(e){e.preventDefault();$(getId).removeClass(getOut);$(getId).addClass("in");$(getId).addClass(getIn);return false;});$("li.close-full-menu").on("click",function(e){e.preventDefault();$(getId).addClass(getOut);setTimeout(function(){$(getId).removeClass("in");$(getId).removeClass(getIn);},500);return false;});});}},navbarSticky:function(){var getNav=$("nav.navbar.bootsnav"),navSticky=getNav.hasClass("navbar-sticky");if(navSticky){var getHeight=getNav.height();$(".wrap-sticky").height(getHeight);var getOffset=$(".wrap-sticky").offset().top;$(window).on("scroll",function(){var scrollTop=$(window).scrollTop();if(scrollTop>getOffset){getNav.addClass("sticked");}else{getNav.removeClass("sticked");}});}},navbarScrollspy:function(){var navScrollSpy=$(".navbar-scrollspy"),$body=$('body'),getNav=$('nav.navbar.bootsnav'),offset=getNav.outerHeight();if(navScrollSpy.length){$body.scrollspy({target:'.navbar',offset:offset});$('.scroll').on('click',function(event){event.preventDefault();$('.scroll').removeClass("active");$(this).addClass("active");$(".navbar-collapse").removeClass("in");$(".navbar-toggle").each(function(){$(".fa",this).removeClass("fa-times");$(".fa",this).addClass("fa-bars");});var scrollTop=$(window).scrollTop(),$anchor=$(this).find('a'),$section=$($anchor.attr('href')).offset().top,$window=$(window).width(),$minusDesktop=getNav.data("minus-value-desktop"),$minusMobile=getNav.data("minus-value-mobile"),$speed=getNav.data("speed");if($window>992){var $position=$section-$minusDesktop;}else{var $position=$section-$minusMobile;}
$('html, body').stop().animate({scrollTop:$position},$speed);});var fixSpy=function(){var data=$body.data('bs.scrollspy');if(data){offset=getNav.outerHeight();data.options.offset=offset;$body.data('bs.scrollspy',data);$body.scrollspy('refresh');}}
var resizeTimer;$(window).on('resize',function(){clearTimeout(resizeTimer);var resizeTimer=setTimeout(fixSpy,200);});}}};$(document).ready(function(){bootsnav.initialize();});$(window).on("resize",function(){bootsnav.hoverDropdown();setTimeout(function(){bootsnav.navbarSticky();},500);$(".navbar-toggle").each(function(){$(".fa",this).removeClass("fa-times");$(".fa",this).addClass("fa-bars");$(this).removeClass("fixed");});$(".navbar-collapse").removeClass("in");$(".navbar-collapse").removeClass("on");$(".navbar-collapse").removeClass("bounceIn");});}(jQuery));;;(function($,window,document,undefined){var OnePageNav=function(elem,options){this.elem=elem;this.$elem=$(elem);this.options=options;this.metadata=this.$elem.data('plugin-options');this.$win=$(window);this.sections={};this.didScroll=false;this.$doc=$(document);this.docHeight=this.$doc.height();};OnePageNav.prototype={defaults:{navItems:'a',currentClass:'current',changeHash:false,easing:'swing',filter:'',scrollSpeed:750,scrollThreshold:0.5,begin:false,end:false,scrollChange:false},init:function(){this.config=$.extend({},this.defaults,this.options,this.metadata);this.$nav=this.$elem.find(this.config.navItems).not(".directpage");if(this.config.filter!==''){this.$nav=this.$nav.filter(this.config.filter);}
this.$nav.on('click.onePageNav',$.proxy(this.handleClick,this));this.getPositions();this.bindInterval();this.$win.on('resize.onePageNav',$.proxy(this.getPositions,this));return this;},adjustNav:function(self,$parent){self.$elem.find('.'+self.config.currentClass).removeClass(self.config.currentClass);$parent.addClass(self.config.currentClass);},bindInterval:function(){var self=this;var docHeight;self.$win.on('scroll.onePageNav',function(){self.didScroll=true;});self.t=setInterval(function(){docHeight=self.$doc.height();if(self.didScroll){self.didScroll=false;self.scrollChange();}
if(docHeight!==self.docHeight){self.docHeight=docHeight;self.getPositions();}},250);},getHash:function($link){return $link.attr('href').split('#')[1];},getPositions:function(){var self=this;var linkHref;var topPos;var $target;self.$nav.each(function(){linkHref=self.getHash($(this));$target=$('#'+linkHref);if($target.length){topPos=$target.offset().top;self.sections[linkHref]=Math.round(topPos);}});},getSection:function(windowPos){var returnValue=null;var windowHeight=Math.round(this.$win.height()*this.config.scrollThreshold);for(var section in this.sections){if((this.sections[section]-windowHeight)<windowPos){returnValue=section;}}
return returnValue;},handleClick:function(e){var self=this;var $link=$(e.currentTarget);var $parent=$link.parent();var newLoc='#'+self.getHash($link);if(!$parent.hasClass(self.config.currentClass)){if(self.config.begin){self.config.begin();}
self.adjustNav(self,$parent);self.unbindInterval();self.scrollTo(newLoc,function(){if(self.config.changeHash){window.location.hash=newLoc;}
self.bindInterval();if(self.config.end){self.config.end();}});}
e.preventDefault();},scrollChange:function(){var windowTop=this.$win.scrollTop();var position=this.getSection(windowTop);var $parent;if(position!==null){$parent=this.$elem.find('a[href$="#'+position+'"]').parent();if(!$parent.hasClass(this.config.currentClass)){this.adjustNav(this,$parent);if(this.config.scrollChange){this.config.scrollChange($parent);}}}},scrollTo:function(target,callback){var offset=$(target).offset().top;$('html, body').animate({scrollTop:offset},this.config.scrollSpeed,this.config.easing,callback);},unbindInterval:function(){clearInterval(this.t);this.$win.unbind('scroll.onePageNav');}};OnePageNav.defaults=OnePageNav.prototype.defaults;$.fn.onePageNav=function(options){return this.each(function(){new OnePageNav(this,options).init();});};})(jQuery,window,document);
;/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=t):o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;i>n;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(n=i=0,o=(r=this.keys).length;o>i;n=++i)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.boxes).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;i>n;n++)r=e[n],s.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=r.addedNodes||[]).length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;i=[];for(n in e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,l;for(l=[],e=0,i=(s=this.vendors).length;i>e;e++)r=s[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(s=(l=i(t)).getPropertyCSSValue(e),n=0,o=(r=this.vendors).length;o>n;n++)a=r[n],s=s||l.getPropertyCSSValue("-"+a+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o.prototype.removeBox=function(t){var e=this.boxes.indexOf(t);e>-1&&this.boxes.splice(e,1)},o}()}).call(this);
;(function(){var defaultOptions={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:true,arrowScroll:50,fixedBackground:true,excluded:''};var options=defaultOptions;var isExcluded=false;var isFrame=false;var direction={x:0,y:0};var initDone=false;var root=document.documentElement;var activeElement;var observer;var refreshSize;var deltaBuffer=[];var isMac=/^Mac/.test(navigator.platform);var key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var arrowKeys={37:1,38:1,39:1,40:1};function initTest(){if(options.keyboardSupport){addEvent('keydown',keydown);}}
function init(){if(initDone||!document.body)return;initDone=true;var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;root=(document.compatMode.indexOf('CSS')>=0)?html:body;activeElement=body;initTest();if(top!=self){isFrame=true;}
else if(isOldSafari&&scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){var fullPageElem=document.createElement('div');fullPageElem.style.cssText='position:absolute; z-index:-10000; '+'top:0; left:0; right:0; height:'+
root.scrollHeight+'px';document.body.appendChild(fullPageElem);var pendingRefresh;refreshSize=function(){if(pendingRefresh)return;pendingRefresh=setTimeout(function(){if(isExcluded)return;fullPageElem.style.height='0';fullPageElem.style.height=root.scrollHeight+'px';pendingRefresh=null;},500);};setTimeout(refreshSize,10);addEvent('resize',refreshSize);var config={attributes:true,childList:true,characterData:false};observer=new MutationObserver(refreshSize);observer.observe(body,config);if(root.offsetHeight<=windowHeight){var clearfix=document.createElement('div');clearfix.style.clear='both';body.appendChild(clearfix);}}
if(!options.fixedBackground&&!isExcluded){body.style.backgroundAttachment='scroll';html.style.backgroundAttachment='scroll';}}
function cleanup(){observer&&observer.disconnect();removeEvent(wheelEvent,wheel);removeEvent('mousedown',mousedown);removeEvent('keydown',keydown);removeEvent('resize',refreshSize);removeEvent('load',init);}
var que=[];var pending=false;var lastScroll=Date.now();function scrollArray(elem,left,top){directionCheck(left,top);if(options.accelerationMax!=1){var now=Date.now();var elapsed=now-lastScroll;if(elapsed<options.accelerationDelta){var factor=(1+(50/elapsed))/2;if(factor>1){factor=Math.min(factor,options.accelerationMax);left*=factor;top*=factor;}}
lastScroll=Date.now();}
que.push({x:left,y:top,lastX:(left<0)?0.99:-0.99,lastY:(top<0)?0.99:-0.99,start:Date.now()});if(pending){return;}
var scrollWindow=(elem===document.body);var step=function(time){var now=Date.now();var scrollX=0;var scrollY=0;for(var i=0;i<que.length;i++){var item=que[i];var elapsed=now-item.start;var finished=(elapsed>=options.animationTime);var position=(finished)?1:elapsed/options.animationTime;if(options.pulseAlgorithm){position=pulse(position);}
var x=(item.x*position-item.lastX)>>0;var y=(item.y*position-item.lastY)>>0;scrollX+=x;scrollY+=y;item.lastX+=x;item.lastY+=y;if(finished){que.splice(i,1);i--;}}
if(scrollWindow){window.scrollBy(scrollX,scrollY);}
else{if(scrollX)elem.scrollLeft+=scrollX;if(scrollY)elem.scrollTop+=scrollY;}
if(!left&&!top){que=[];}
if(que.length){requestFrame(step,elem,(1000/options.frameRate+1));}else{pending=false;}};requestFrame(step,elem,0);pending=true;}
function wheel(event){if(!initDone){init();}
var target=event.target;if(event.defaultPrevented||event.ctrlKey){return true;}
if(isNodeName(activeElement,'embed')||(isNodeName(target,'embed')&&/\.pdf/i.test(target.src))||isNodeName(activeElement,'object')||target.shadowRoot){return true;}
var deltaX=-event.wheelDeltaX||event.deltaX||0;var deltaY=-event.wheelDeltaY||event.deltaY||0;if(isMac){if(event.wheelDeltaX&&isDivisible(event.wheelDeltaX,120)){deltaX=-120*(event.wheelDeltaX/Math.abs(event.wheelDeltaX));}
if(event.wheelDeltaY&&isDivisible(event.wheelDeltaY,120)){deltaY=-120*(event.wheelDeltaY/Math.abs(event.wheelDeltaY));}}
if(!deltaX&&!deltaY){deltaY=-event.wheelDelta||0;}
if(event.deltaMode===1){deltaX*=40;deltaY*=40;}
var overflowing=overflowingAncestor(target);if(!overflowing){if(isFrame&&isChrome){Object.defineProperty(event,"target",{value:window.frameElement});return parent.wheel(event);}
return true;}
if(isTouchpad(deltaY)){return true;}
if(Math.abs(deltaX)>1.2){deltaX*=options.stepSize/120;}
if(Math.abs(deltaY)>1.2){deltaY*=options.stepSize/120;}
scrollArray(overflowing,deltaX,deltaY);scheduleClearCache();}
function keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey||(event.shiftKey&&event.keyCode!==key.spacebar);if(!document.body.contains(activeElement)){activeElement=document.activeElement;}
var inputNodeNames=/^(textarea|select|embed|object)$/i;var buttonTypes=/^(button|submit|radio|checkbox|file|color|image)$/i;if(event.defaultPrevented||inputNodeNames.test(target.nodeName)||isNodeName(target,'input')&&!buttonTypes.test(target.type)||isNodeName(activeElement,'video')||isInsideYoutubeVideo(event)||target.isContentEditable||modifier){return true;}
if((isNodeName(target,'button')||isNodeName(target,'input')&&buttonTypes.test(target.type))&&event.keyCode===key.spacebar){return true;}
if(isNodeName(target,'input')&&target.type=='radio'&&arrowKeys[event.keyCode]){return true;}
var shift,x=0,y=0;var overflowing=overflowingAncestor(activeElement);if(!overflowing){return(isFrame&&isChrome)?parent.keydown(event):true;}
var clientHeight=overflowing.clientHeight;if(overflowing==document.body){clientHeight=window.innerHeight;}
switch(event.keyCode){case key.up:y=-options.arrowScroll;break;case key.down:y=options.arrowScroll;break;case key.spacebar:shift=event.shiftKey?1:-1;y=-shift*clientHeight*0.9;break;case key.pageup:y=-clientHeight*0.9;break;case key.pagedown:y=clientHeight*0.9;break;case key.home:y=-overflowing.scrollTop;break;case key.end:var scroll=overflowing.scrollHeight-overflowing.scrollTop;var scrollRemaining=scroll-clientHeight;y=(scrollRemaining>0)?scrollRemaining+10:0;break;case key.left:x=-options.arrowScroll;break;case key.right:x=options.arrowScroll;break;default:return true;}
scrollArray(overflowing,x,y);event.preventDefault();scheduleClearCache();}
function mousedown(event){activeElement=event.target;}
var uniqueID=(function(){var i=0;return function(el){return el.uniqueID||(el.uniqueID=i++);};})();var cache={};var clearCacheTimer;function scheduleClearCache(){clearTimeout(clearCacheTimer);clearCacheTimer=setInterval(function(){cache={};},1*1000);}
function setCache(elems,overflowing){for(var i=elems.length;i--;)
cache[uniqueID(elems[i])]=overflowing;return overflowing;}
function overflowingAncestor(el){var elems=[];var body=document.body;var rootScrollHeight=root.scrollHeight;do{var cached=cache[uniqueID(el)];if(cached){return setCache(elems,cached);}
elems.push(el);if(rootScrollHeight===el.scrollHeight){var topOverflowsNotHidden=overflowNotHidden(root)&&overflowNotHidden(body);var isOverflowCSS=topOverflowsNotHidden||overflowAutoOrScroll(root);if(isFrame&&isContentOverflowing(root)||!isFrame&&isOverflowCSS){return setCache(elems,getScrollRoot());}}else if(isContentOverflowing(el)&&overflowAutoOrScroll(el)){return setCache(elems,el);}}while(el=el.parentElement);}
function isContentOverflowing(el){return(el.clientHeight+10<el.scrollHeight);}
function overflowNotHidden(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return(overflow!=='hidden');}
function overflowAutoOrScroll(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return(overflow==='scroll'||overflow==='auto');}
function addEvent(type,fn){window.addEventListener(type,fn,false);}
function removeEvent(type,fn){window.removeEventListener(type,fn,false);}
function isNodeName(el,tag){return(el.nodeName||'').toLowerCase()===tag.toLowerCase();}
function directionCheck(x,y){x=(x>0)?1:-1;y=(y>0)?1:-1;if(direction.x!==x||direction.y!==y){direction.x=x;direction.y=y;que=[];lastScroll=0;}}
var deltaBufferTimer;if(window.localStorage&&localStorage.SS_deltaBuffer){try{deltaBuffer=localStorage.SS_deltaBuffer.split(',');}catch(e){}}
function isTouchpad(deltaY){if(!deltaY)return;if(!deltaBuffer.length){deltaBuffer=[deltaY,deltaY,deltaY];}
deltaY=Math.abs(deltaY);deltaBuffer.push(deltaY);deltaBuffer.shift();clearTimeout(deltaBufferTimer);deltaBufferTimer=setTimeout(function(){try{localStorage.SS_deltaBuffer=deltaBuffer.join(',');}catch(e){}},1000);return!allDeltasDivisableBy(120)&&!allDeltasDivisableBy(100);}
function isDivisible(n,divisor){return(Math.floor(n/divisor)==n/divisor);}
function allDeltasDivisableBy(divisor){return(isDivisible(deltaBuffer[0],divisor)&&isDivisible(deltaBuffer[1],divisor)&&isDivisible(deltaBuffer[2],divisor));}
function isInsideYoutubeVideo(event){var elem=event.target;var isControl=false;if(document.URL.indexOf('www.youtube.com/watch')!=-1){do{isControl=(elem.classList&&elem.classList.contains('html5-video-controls'));if(isControl)break;}while(elem=elem.parentNode);}
return isControl;}
var requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback,element,delay){window.setTimeout(callback,delay||(1000/60));});})();var MutationObserver=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var getScrollRoot=(function(){var SCROLL_ROOT;return function(){if(!SCROLL_ROOT){var dummy=document.createElement('div');dummy.style.cssText='height:10000px;width:1px;';document.body.appendChild(dummy);var bodyScrollTop=document.body.scrollTop;var docElScrollTop=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=bodyScrollTop)
(SCROLL_ROOT=document.body);else
(SCROLL_ROOT=document.documentElement);window.scrollBy(0,-3);document.body.removeChild(dummy);}
return SCROLL_ROOT;};})();function pulse_(x){var val,start,expx;x=x*options.pulseScale;if(x<1){val=x-(1-Math.exp(-x));}else{start=Math.exp(-1);x-=1;expx=1-Math.exp(-x);val=start+(expx*(1-start));}
return val*options.pulseNormalize;}
function pulse(x){if(x>=1)return 1;if(x<=0)return 0;if(options.pulseNormalize==1){options.pulseNormalize/=pulse_(1);}
return pulse_(x);}
var userAgent=window.navigator.userAgent;var isEdge=/Edge/.test(userAgent);var isChrome=/chrome/i.test(userAgent)&&!isEdge;var isSafari=/safari/i.test(userAgent)&&!isEdge;var isMobile=/mobile/i.test(userAgent);var isIEWin7=/Windows NT 6.1/i.test(userAgent)&&/rv:11/i.test(userAgent);var isOldSafari=isSafari&&(/Version\/8/i.test(userAgent)||/Version\/9/i.test(userAgent));var isEnabledForBrowser=(isChrome||isSafari||isIEWin7)&&!isMobile;var wheelEvent;if('onwheel'in document.createElement('div'))
wheelEvent='wheel';else if('onmousewheel'in document.createElement('div'))
wheelEvent='mousewheel';if(wheelEvent&&isEnabledForBrowser){addEvent(wheelEvent,wheel);addEvent('mousedown',mousedown);addEvent('load',init);}
function SmoothScroll(optionsToSet){for(var key in optionsToSet)
if(defaultOptions.hasOwnProperty(key))
options[key]=optionsToSet[key];}
SmoothScroll.destroy=cleanup;if(window.SmoothScrollOptions)
SmoothScroll(window.SmoothScrollOptions);if(typeof define==='function'&&define.amd)
define(function(){return SmoothScroll;});else if('object'==typeof exports)
module.exports=SmoothScroll;else
window.SmoothScroll=SmoothScroll;})();
;/**
 * Swiper 4.1.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 11, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;"resize scroll".split(" ");var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a=e[0],r=e[1],n=e[2],o=e[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.unshift(e),n.apply(this,t)}"function"==typeof e[1]&&(a=(i=e)[0],n=i[1],o=i[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1)u.dom7LiveListeners||(u.dom7LiveListeners=[]),u.dom7LiveListeners.push({type:a,listener:n,proxyListener:l}),u.addEventListener(p[h],l,o);else for(h=0;h<p.length;h+=1)u.dom7Listeners||(u.dom7Listeners=[]),u.dom7Listeners.push({type:a,listener:n,proxyListener:d}),u.addEventListener(p[h],d,o)}return this},off:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s=e[0],a=e[1],r=e[2],n=e[3];"function"==typeof e[1]&&(s=(i=e)[0],r=i[1],n=i[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=0;d<this.length;d+=1){var h=this[d];if(a){if(h.dom7LiveListeners)for(var p=0;p<h.dom7LiveListeners.length;p+=1)r?h.dom7LiveListeners[p].listener===r&&h.removeEventListener(o[l],h.dom7LiveListeners[p].proxyListener,n):h.dom7LiveListeners[p].type===o[l]&&h.removeEventListener(o[l],h.dom7LiveListeners[p].proxyListener,n)}else if(h.dom7Listeners)for(var c=0;c<h.dom7Listeners.length;c+=1)r?h.dom7Listeners[c].listener===r&&h.removeEventListener(o[l],h.dom7Listeners[c].proxyListener,n):h.dom7Listeners[c].type===o[l]&&h.removeEventListener(o[l],h.dom7Listeners[c].proxyListener,n)}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=0;o<this.length;o+=1){var l=void 0;try{l=new t.CustomEvent(a[n],{detail:r,bubbles:!0,cancelable:!0})}catch(t){(l=e.createEvent("Event")).initEvent(a[n],!0,!0),l.detail=r}this[o].dom7EventData=i.filter(function(e,t){return t>0}),this[o].dispatchEvent(l),this[o].dom7EventData=[],delete this[o].dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach(function(e){s.fn[e]=r[e]});var n,o,l,d={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(void 0!==a&&null!==a)for(var r=Object.keys(Object(a)),n=0,o=r.length;n<o;n+=1){var l=r[n],h=Object.getOwnPropertyDescriptor(a,l);void 0!==h&&h.enumerable&&(d.isObject(i[l])&&d.isObject(a[l])?d.extend(i[l],a[l]):!d.isObject(i[l])&&d.isObject(a[l])?(i[l]={},d.extend(i[l],a[l])):i[l]=a[l])}}return i}},h=(l=e.createElement("div"),{touch:t.Modernizr&&!0===t.Modernizr.touch||!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!(!t.navigator.pointerEnabled&&!t.PointerEvent),prefixedPointerEvents:!!t.navigator.msPointerEnabled,transition:(o=l.style,"transition"in o||"webkitTransition"in o||"MozTransition"in o),transforms3d:t.Modernizr&&!0===t.Modernizr.csstransforms3d||(n=l.style,"webkitPerspective"in n||"MozPerspective"in n||"OPerspective"in n||"MsPerspective"in n||"perspective"in n),flexbox:function(){for(var e=l.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;i<t.length;i+=1)if(t[i]in e)return!0;return!1}(),observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t}),p=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},c={components:{configurable:!0}};p.prototype.on=function(e,t){var i=this;return"function"!=typeof t?i:(e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e].push(t)}),i)},p.prototype.once=function(e,t){var i=this;if("function"!=typeof t)return i;return i.on(e,function s(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];t.apply(i,a),i.off(e,s)})},p.prototype.off=function(e,t){var i=this;return e.split(" ").forEach(function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e].forEach(function(s,a){s===t&&i.eventsListeners[e].splice(a,1)})}),i},p.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;return r.eventsListeners?("string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(a,s)})}}),r):r},p.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i];s.params&&d.extend(e,s.params)})},p.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach(function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i}),s.on&&t.on&&Object.keys(s.on).forEach(function(e){t.on(e,s.on[e])}),s.create&&s.create.bind(t)(a)})},c.components.set=function(e){this.use&&this.use(e)},p.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+d.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach(function(t){s.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){s[t]=e.static[t]}),e.install&&e.install.apply(s,t),s},p.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach(function(e){return s.installModule(e)}),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(p,c);var u={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),d.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,t=this.$wrapperEl,i=this.size,s=this.rtl,a=this.wrongRTL,r=t.children("."+this.params.slideClass),n=this.virtual&&e.virtual.enabled?this.virtual.slides.length:r.length,o=[],l=[],p=[],c=e.slidesOffsetBefore;"function"==typeof c&&(c=e.slidesOffsetBefore.call(this));var u=e.slidesOffsetAfter;"function"==typeof u&&(u=e.slidesOffsetAfter.call(this));var v=n,f=this.snapGrid.length,m=this.snapGrid.length,g=e.spaceBetween,b=-c,w=0,y=0;if(void 0!==i){var x,E;"string"==typeof g&&g.indexOf("%")>=0&&(g=parseFloat(g.replace("%",""))/100*i),this.virtualSize=-g,s?r.css({marginLeft:"",marginTop:""}):r.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(x=Math.floor(n/e.slidesPerColumn)===n/this.params.slidesPerColumn?n:Math.ceil(n/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(x=Math.max(x,e.slidesPerView*e.slidesPerColumn)));for(var T,S=e.slidesPerColumn,C=x/S,M=C-(e.slidesPerColumn*C-n),z=0;z<n;z+=1){E=0;var P=r.eq(z);if(e.slidesPerColumn>1){var k=void 0,$=void 0,L=void 0;"column"===e.slidesPerColumnFill?(L=z-($=Math.floor(z/S))*S,($>M||$===M&&L===S-1)&&(L+=1)>=S&&(L=0,$+=1),k=$+L*x/S,P.css({"-webkit-box-ordinal-group":k,"-moz-box-ordinal-group":k,"-ms-flex-order":k,"-webkit-order":k,order:k})):$=z-(L=Math.floor(z/C))*C,P.css("margin-"+(this.isHorizontal()?"top":"left"),0!==L&&e.spaceBetween&&e.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}"none"!==P.css("display")&&("auto"===e.slidesPerView?(E=this.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0),e.roundLengths&&(E=Math.floor(E))):(E=(i-(e.slidesPerView-1)*g)/e.slidesPerView,e.roundLengths&&(E=Math.floor(E)),r[z]&&(this.isHorizontal()?r[z].style.width=E+"px":r[z].style.height=E+"px")),r[z]&&(r[z].swiperSlideSize=E),p.push(E),e.centeredSlides?(b=b+E/2+w/2+g,0===w&&0!==z&&(b=b-i/2-g),0===z&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),y%e.slidesPerGroup==0&&o.push(b),l.push(b)):(y%e.slidesPerGroup==0&&o.push(b),l.push(b),b=b+E+g),this.virtualSize+=E+g,w=E,y+=1)}if(this.virtualSize=Math.max(this.virtualSize,i)+u,s&&a&&("slide"===e.effect||"coverflow"===e.effect)&&t.css({width:this.virtualSize+e.spaceBetween+"px"}),h.flexbox&&!e.setWrapperSize||(this.isHorizontal()?t.css({width:this.virtualSize+e.spaceBetween+"px"}):t.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(E+e.spaceBetween)*x,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?t.css({width:this.virtualSize+e.spaceBetween+"px"}):t.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){T=[];for(var I=0;I<o.length;I+=1)o[I]<this.virtualSize+o[0]&&T.push(o[I]);o=T}if(!e.centeredSlides){T=[];for(var D=0;D<o.length;D+=1)o[D]<=this.virtualSize-i&&T.push(o[D]);o=T,Math.floor(this.virtualSize-i)-Math.floor(o[o.length-1])>1&&o.push(this.virtualSize-i)}0===o.length&&(o=[0]),0!==e.spaceBetween&&(this.isHorizontal()?s?r.css({marginLeft:g+"px"}):r.css({marginRight:g+"px"}):r.css({marginBottom:g+"px"})),d.extend(this,{slides:r,snapGrid:o,slidesGrid:l,slidesSizesGrid:p}),n!==v&&this.emit("slidesLengthChange"),o.length!==f&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),l.length!==m&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(){var e,t=[],i=0;if("auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)for(e=0;e<Math.ceil(this.params.slidesPerView);e+=1){var s=this.activeIndex+e;if(s>this.slides.length)break;t.push(this.slides.eq(s)[0])}else t.push(this.slides.eq(this.activeIndex)[0]);for(e=0;e<t.length;e+=1)if(void 0!==t[e]){var a=t[e].offsetHeight;i=a>i?a:i}i&&this.$wrapperEl.css("height",i+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this.translate||0);var t=this.params,i=this.slides,s=this.rtl;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass);for(var r=0;r<i.length;r+=1){var n=i[r],o=(a+(t.centeredSlides?this.minTranslate():0)-n.swiperSlideOffset)/(n.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility){var l=-(a-n.swiperSlideOffset),d=l+this.slidesSizesGrid[r];(l>=0&&l<this.size||d>0&&d<=this.size||l<=0&&d>=this.size)&&i.eq(r).addClass(t.slideVisibleClass)}n.progress=s?-o:o}}},updateProgress:function(e){void 0===e&&(e=this.translate||0);var t=this.params,i=this.maxTranslate()-this.minTranslate(),s=this.progress,a=this.isBeginning,r=this.isEnd,n=a,o=r;0===i?(s=0,a=!0,r=!0):(a=(s=(e-this.minTranslate())/i)<=0,r=s>=1),d.extend(this,{progress:s,isBeginning:a,isEnd:r}),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesProgress(e),a&&!n&&this.emit("reachBeginning toEdge"),r&&!o&&this.emit("reachEnd toEdge"),(n&&!a||o&&!r)&&this.emit("fromEdge"),this.emit("progress",s)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtl?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,o=this.realIndex,l=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if((t=a.indexOf(i)>=0?a.indexOf(i):Math.floor(h/r.slidesPerGroup))>=a.length&&(t=a.length-1),h!==n){var c=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);d.extend(this,{snapIndex:t,realIndex:c,previousIndex:n,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==c&&this.emit("realIndexChange"),this.emit("slideChange")}else t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtl,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;var r=d.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtl,s=this.params,a=this.$wrapperEl,r=this.progress,n=0,o=0;this.isHorizontal()?n=i?-e:e:o=e,s.roundLengths&&(n=Math.floor(n),o=Math.floor(o)),s.virtualTranslate||(h.transforms3d?a.transform("translate3d("+n+"px, "+o+"px, 0px)"):a.transform("translate("+n+"px, "+o+"px)")),this.translate=this.isHorizontal()?n:o;var l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==r&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},f={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex;this.animating=!1,this.setTransition(0);var a=t;if(a||(a=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===a)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===a?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}},m={slideTo:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=this,r=e;r<0&&(r=0);var n=a.params,o=a.snapGrid,l=a.slidesGrid,d=a.previousIndex,p=a.activeIndex,c=a.rtl,u=a.$wrapperEl;if(a.animating&&n.preventIntercationOnTransition)return!1;var v=Math.floor(r/n.slidesPerGroup);v>=o.length&&(v=o.length-1),(p||n.initialSlide||0)===(d||0)&&i&&a.emit("beforeSlideChangeStart");var f,m=-o[v];if(a.updateProgress(m),n.normalizeSlideIndex)for(var g=0;g<l.length;g+=1)-Math.floor(100*m)>=Math.floor(100*l[g])&&(r=g);if(a.initialized&&r!==p){if(!a.allowSlideNext&&m<a.translate&&m<a.minTranslate())return!1;if(!a.allowSlidePrev&&m>a.translate&&m>a.maxTranslate()&&(p||0)!==r)return!1}return f=r>p?"next":r<p?"prev":"reset",c&&-m===a.translate||!c&&m===a.translate?(a.updateActiveIndex(r),n.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==n.effect&&a.setTranslate(m),"reset"!==f&&(a.transitionStart(i,f),a.transitionEnd(i,f)),!1):(0!==t&&h.transition?(a.setTransition(t),a.setTranslate(m),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,f),a.animating||(a.animating=!0,u.transitionEnd(function(){a&&!a.destroyed&&a.transitionEnd(i,f)}))):(a.setTransition(0),a.setTranslate(m),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,f),a.transitionEnd(i,f)),!0)},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)):this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex-1,e,t,i)):this.slideTo(this.activeIndex-1,e,t,i)},slideReset:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);return this.slideTo(this.activeIndex,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,n=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<t.loopedSlides-r/2||n>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n):n>t.slides.length-r?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}},g={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=parseInt(i.loopedSlides||i.slidesPerView,10),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each(function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)});for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){var e,t=this.params,i=this.activeIndex,s=this.slides,a=this.loopedSlides,r=this.allowSlidePrev,n=this.allowSlideNext,o=this.snapGrid,l=this.rtl;this.allowSlidePrev=!0,this.allowSlideNext=!0;var d=-o[i]-this.getTranslate();i<a?(e=s.length-3*a+i,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d)):("auto"===t.slidesPerView&&i>=2*a||i>s.length-2*t.slidesPerView)&&(e=-s.length+i+a,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d));this.allowSlidePrev=r,this.allowSlideNext=n},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}},b={setGrabCursor:function(e){if(!h.touch&&this.params.simulateTouch){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){h.touch||(this.el.style.cursor="")}},w={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&h.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),this.slideTo(a,0,!1)},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},y=function(){var i=t.navigator.userAgent,s={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:t.cordova||t.phonegap,phonegap:t.cordova||t.phonegap},a=i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),r=i.match(/(Android);?[\s\/]+([\d.]+)?/),n=i.match(/(iPad).*OS\s([\d_]+)/),o=i.match(/(iPod)(.*OS\s([\d_]+))?/),l=!n&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(s.os="windows",s.osVersion=a[2],s.windows=!0),r&&!a&&(s.os="android",s.osVersion=r[2],s.android=!0,s.androidChrome=i.toLowerCase().indexOf("chrome")>=0),(n||l||o)&&(s.os="ios",s.ios=!0),l&&!o&&(s.osVersion=l[2].replace(/_/g,"."),s.iphone=!0),n&&(s.osVersion=n[2].replace(/_/g,"."),s.ipad=!0),o&&(s.osVersion=o[3]?o[3].replace(/_/g,"."):null,s.iphone=!0),s.ios&&s.osVersion&&i.indexOf("Version/")>=0&&"10"===s.osVersion.split(".")[0]&&(s.osVersion=i.toLowerCase().split("version/")[1].split(" ")[0]),s.desktop=!(s.os||s.android||s.webView),s.webView=(l||n||o)&&i.match(/.*AppleWebKit(?!.*Safari)/i),s.os&&"ios"===s.os){var d=s.osVersion.split("."),h=e.querySelector('meta[name="viewport"]');s.minimalUi=!s.webView&&(o||l)&&(1*d[0]==7?1*d[1]>=1:1*d[0]>7)&&h&&h.getAttribute("content").indexOf("minimal-ui")>=0}return s.pixelRatio=t.devicePixelRatio||1,s}(),x=function(i){var a=this.touchEventsData,r=this.params,n=this.touches;if(!this.animating||!r.preventIntercationOnTransition){var o=i;if(o.originalEvent&&(o=o.originalEvent),a.isTouchEvent="touchstart"===o.type,(a.isTouchEvent||!("which"in o)||3!==o.which)&&(!a.isTouched||!a.isMoved))if(r.noSwiping&&s(o.target).closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||s(o).closest(r.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var l=n.currentX,h=n.currentY;if(!(y.ios&&!y.cordova&&r.iOSEdgeSwipeDetection&&l<=r.iOSEdgeSwipeThreshold&&l>=t.screen.width-r.iOSEdgeSwipeThreshold)){if(d.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=l,n.startY=h,a.touchStartTime=d.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==o.type){var p=!0;s(o.target).is(a.formElements)&&(p=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==o.target&&e.activeElement.blur(),p&&this.allowTouchMove&&o.preventDefault()}this.emit("touchStart",o)}}}},E=function(t){var i=this.touchEventsData,a=this.params,r=this.touches,n=this.rtl,o=t;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==o.type){var l="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,h="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=l,void(r.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(d.extend(r,{startX:l,startY:h,currentX:l,currentY:h}),i.touchStartTime=d.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(h<r.startY&&this.translate<=this.maxTranslate()||h>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(l<r.startX&&this.translate<=this.maxTranslate()||l>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&o.target===e.activeElement&&s(o.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=l,r.currentY=h;var p,c=r.currentX-r.startX,u=r.currentY-r.startY;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(p=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?p>a.touchAngle:90-p>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,o.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&o.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",o)),this.emit("sliderMove",o),i.isMoved=!0;var v=this.isHorizontal()?c:u;r.diff=v,v*=a.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;var f=!0,m=a.resistanceRatio;if(a.touchReleaseOnEdges&&(m=0),v>0&&i.currentTranslate>this.minTranslate()?(f=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+v,m))):v<0&&i.currentTranslate<this.maxTranslate()&&(f=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-v,m))),f&&(o.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(v)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:d.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",o)},T=function(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtl,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=d.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap",h),u<300&&c-i.lastClickTime>300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),i.clickTimeout=d.nextTick(function(){t&&!t.destroyed&&t.emit("click",h)},300)),u<300&&c-i.lastClickTime<300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),t.emit("doubleTap",h))),i.lastClickTime=d.now(),d.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||d.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,E=!1,T=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-T&&(y=t.maxTranslate()-T),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate();else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>T&&(y=t.minTranslate()+T),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate();else if(s.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-y){S=C;break}y=-(y=Math.abs(l[S]-y)<Math.abs(l[S-1]-y)||"next"===t.swipeDirection?l[S]:l[S-1])}if(0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(s.freeModeSticky)return void t.slideReset();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,z=t.slidesSizesGrid[0],P=0;P<o.length;P+=s.slidesPerGroup)void 0!==o[P+s.slidesPerGroup]?p>=o[P]&&p<o[P+s.slidesPerGroup]&&(M=P,z=o[P+s.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,z=o[o.length-1]-o[o.length-2]);var k=(p-o[M])/z;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(k>=s.longSwipesRatio?t.slideTo(M+s.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(k>1-s.longSwipesRatio?t.slideTo(M+s.slidesPerGroup):t.slideTo(M))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+s.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}},S=function(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev;if(this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),e.freeMode){var a=Math.min(Math.max(this.translate,this.maxTranslate()),this.minTranslate());this.setTranslate(a),this.updateActiveIndex(),this.updateSlidesClasses(),e.autoHeight&&this.updateAutoHeight()}else this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0);this.allowSlidePrev=s,this.allowSlideNext=i}},C=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))};var M={attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=x.bind(this),this.onTouchMove=E.bind(this),this.onTouchEnd=T.bind(this),this.onClick=C.bind(this);var r="container"===t.touchEventsTarget?s:a,n=!!t.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var o=!("touchstart"!==i.start||!h.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(i.start,this.onTouchStart,o),r.addEventListener(i.move,this.onTouchMove,h.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(i.end,this.onTouchEnd,o)}(t.simulateTouch&&!y.ios&&!y.android||t.simulateTouch&&!h.touch&&y.ios)&&(r.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,n),e.addEventListener("mouseup",this.onTouchEnd,!1))}else r.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,n),e.addEventListener(i.end,this.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",this.onClick,!0),this.on("resize observerUpdate",S)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r="container"===t.touchEventsTarget?s:a,n=!!t.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var o=!("onTouchStart"!==i.start||!h.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(i.start,this.onTouchStart,o),r.removeEventListener(i.move,this.onTouchMove,n),r.removeEventListener(i.end,this.onTouchEnd,o)}(t.simulateTouch&&!y.ios&&!y.android||t.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,n),e.removeEventListener("mouseup",this.onTouchEnd,!1))}else r.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,n),e.removeEventListener(i.end,this.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",this.onClick,!0),this.off("resize observerUpdate",S)}},z={setBreakpoint:function(){var e=this.activeIndex,t=this.loopedSlides;void 0===t&&(t=0);var i=this.params,s=i.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var a=this.getBreakpoint(s);if(a&&this.currentBreakpoint!==a){var r=a in s?s[a]:this.originalParams,n=i.loop&&r.slidesPerView!==i.slidesPerView;d.extend(this.params,r),d.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=a,n&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-t+this.loopedSlides,0,!1)),this.emit("breakpoint",r)}}},getBreakpoint:function(e){if(e){var i=!1,s=[];Object.keys(e).forEach(function(e){s.push(e)}),s.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var a=0;a<s.length;a+=1){var r=s[a];r>=t.innerWidth&&!i&&(i=r)}return i||"max"}}},P=function(){return{isIE:!!t.navigator.userAgent.match(/Trident/g)||!!t.navigator.userAgent.match(/MSIE/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)};var e}();var k={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventIntercationOnTransition:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},$={update:u,translate:v,transition:f,slide:m,loop:g,grabCursor:b,manipulation:w,events:M,breakpoints:z,checkOverflow:{checkOverflow:function(){var e=this.isLocked;this.isLocked=1===this.snapGrid.length,this.allowTouchMove=!this.isLocked,e&&e!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push(t.direction),t.freeMode&&a.push("free-mode"),h.flexbox||a.push("no-flexbox"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&a.push("multirow"),y.android&&a.push("android"),y.ios&&a.push("ios"),P.isIE&&(h.pointerEvents||h.prefixedPointerEvents)&&a.push("wp8-"+t.direction),a.forEach(function(i){e.push(t.containerModifierClass+i)}),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},L={},I=function(e){function t(){for(var i,a,r,n=[],o=arguments.length;o--;)n[o]=arguments[o];1===n.length&&n[0].constructor&&n[0].constructor===Object?a=n[0]:(i=(r=n)[0],a=r[1]);a||(a={}),a=d.extend({},a),i&&!a.el&&(a.el=i),e.call(this,a),Object.keys($).forEach(function(e){Object.keys($[e]).forEach(function(i){t.prototype[i]||(t.prototype[i]=$[e][i])})});var l=this;void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach(function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s)return;if(!(i in a&&"enabled"in s))return;!0===a[i]&&(a[i]={enabled:!0}),"object"!=typeof a[i]||"enabled"in a[i]||(a[i].enabled=!0),a[i]||(a[i]={enabled:!1})}});var p=d.extend({},k);l.useModulesParams(p),l.params=d.extend({},p,L,a),l.originalParams=d.extend({},l.params),l.passedParams=d.extend({},a),l.$=s;var c=s(l.params.el);if(i=c[0]){if(c.length>1){var u=[];return c.each(function(e,i){var s=d.extend({},a,{el:i});u.push(new t(s))}),u}i.swiper=l,c.data("swiper",l);var v,f,m=c.children("."+l.params.wrapperClass);return d.extend(l,{$el:c,el:i,$wrapperEl:m,wrapperEl:m[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},rtl:"horizontal"===l.params.direction&&("rtl"===i.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===m.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(v=["touchstart","touchmove","touchend"],f=["mousedown","mousemove","mouseup"],h.pointerEvents?f=["pointerdown","pointermove","pointerup"]:h.prefixedPointerEvents&&(f=["MSPointerDown","MSPointerMove","MSPointerUp"]),l.touchEventsTouch={start:v[0],move:v[1],end:v[2]},l.touchEventsDesktop={start:f[0],move:f[1],end:f[2]},h.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:d.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.params.init&&l.init(),l}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;e&&!e.destroyed&&(e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(t(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||t(),e.emit("update"));function t(){var t=e.rtl?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,n=i.slides;i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(function(e){i.off(e)}),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),d.deleteProps(i)),i.destroyed=!0},t.extendDefaults=function(e){d.extend(L,e)},i.extendedDefaults.get=function(){return L},i.defaults.get=function(){return k},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(p),D={name:"device",proto:{device:y},static:{device:y}},O={name:"support",proto:{support:h},static:{support:h}},A={name:"browser",proto:{browser:P},static:{browser:P}},H={name:"resize",create:function(){var e=this;d.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},N={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var i=this,s=new(0,N.func)(function(e){e.forEach(function(e){i.emit("observerUpdate",e)})});s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){if(h.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:!1}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},X={name:"observer",params:{observer:!1,observeParents:!1},create:function(){d.extend(this,{observer:{init:N.init.bind(this),attach:N.attach.bind(this),destroy:N.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Y={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.virtual,o=n.from,l=n.to,h=n.slides,p=n.slidesGrid,c=n.renderSlide,u=n.offset;t.updateActiveIndex();var v,f,m,g=t.activeIndex||0;v=t.rtl&&t.isHorizontal()?"right":t.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a,m=Math.floor(s/2)+a):(f=s+(a-1),m=a);var b=Math.max((g||0)-m,0),w=Math.min((g||0)+f,h.length-1),y=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function x(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(d.extend(t.virtual,{from:b,to:w,offset:y,slidesGrid:t.slidesGrid}),o===b&&l===w&&!e)return t.slidesGrid!==p&&y!==u&&t.slides.css(v,y+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:y,from:b,to:w,slides:function(){for(var e=[],t=b;t<=w;t+=1)e.push(h[t]);return e}()}),void x();var E=[],T=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var S=o;S<=l;S+=1)(S<b||S>w)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<h.length;C+=1)C>=b&&C<=w&&(void 0===l||e?T.push(C):(C>l&&T.push(C),C<o&&E.push(C)));T.forEach(function(e){t.$wrapperEl.append(c(h[e],e))}),E.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(c(h[e],e))}),t.$wrapperEl.children(".swiper-slide").css(v,y+"px"),x()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){if(this.virtual.slides.unshift(e),this.params.virtual.cache){var t=this.virtual.cache,i={};Object.keys(t).forEach(function(e){i[e+1]=t[e]}),this.virtual.cache=i}this.virtual.update(!0),this.slideNext(0)}},B={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){d.extend(this,{virtual:{update:Y.update.bind(this),appendSlide:Y.appendSlide.bind(this),prependSlide:Y.prependSlide.bind(this),renderSlide:Y.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};d.extend(this.params,e),d.extend(this.originalParams,e),this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},G={handle:function(i){var s=i;s.originalEvent&&(s=s.originalEvent);var a=s.keyCode||s.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===a||this.isVertical()&&40===a))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===a||this.isVertical()&&38===a))return!1;if(!(s.shiftKey||s.altKey||s.ctrlKey||s.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(37===a||39===a||38===a||40===a)){var r=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var n=t.innerWidth,o=t.innerHeight,l=this.$el.offset();this.rtl&&(l.left-=this.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+this.width,l.top],[l.left,l.top+this.height],[l.left+this.width,l.top+this.height]],h=0;h<d.length;h+=1){var p=d[h];p[0]>=0&&p[0]<=n&&p[1]>=0&&p[1]<=o&&(r=!0)}if(!r)return}this.isHorizontal()?(37!==a&&39!==a||(s.preventDefault?s.preventDefault():s.returnValue=!1),(39===a&&!this.rtl||37===a&&this.rtl)&&this.slideNext(),(37===a&&!this.rtl||39===a&&this.rtl)&&this.slidePrev()):(38!==a&&40!==a||(s.preventDefault?s.preventDefault():s.returnValue=!1),40===a&&this.slideNext(),38===a&&this.slidePrev()),this.emit("keyPress",a)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},V={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){d.extend(this,{keyboard:{enabled:!1,enable:G.enable.bind(this),disable:G.disable.bind(this),handle:G.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var R={lastScrollTime:d.now(),event:t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handle:function(e){var i=e,s=this,a=s.params.mousewheel;i.originalEvent&&(i=i.originalEvent);var r=0,n=s.rtl?-1:1,o=R.normalize(i);if(a.forceToAxis)if(s.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(a.invert&&(r=-r),s.params.freeMode){var l=s.getTranslate()+r*a.sensitivity,h=s.isBeginning,p=s.isEnd;if(l>=s.minTranslate()&&(l=s.minTranslate()),l<=s.maxTranslate()&&(l=s.maxTranslate()),s.setTransition(0),s.setTranslate(l),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses(),(!h&&s.isBeginning||!p&&s.isEnd)&&s.updateSlidesClasses(),s.params.freeModeSticky&&(clearTimeout(s.mousewheel.timeout),s.mousewheel.timeout=d.nextTick(function(){s.slideReset()},300)),s.emit("scroll",i),s.params.autoplay&&s.params.autoplayDisableOnInteraction&&s.stopAutoplay(),l===s.minTranslate()||l===s.maxTranslate())return!0}else{if(d.now()-s.mousewheel.lastScrollTime>60)if(r<0)if(s.isEnd&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slideNext(),s.emit("scroll",i);else if(s.isBeginning&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slidePrev(),s.emit("scroll",i);s.mousewheel.lastScrollTime=(new t.Date).getTime()}return i.preventDefault?i.preventDefault():i.returnValue=!1,!1},enable:function(){if(!R.event)return!1;if(this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.on(R.event,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){if(!R.event)return!1;if(!this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.off(R.event,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},F={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},init:function(){var e,t,i=this,a=i.params.navigation;(a.nextEl||a.prevEl)&&(a.nextEl&&(e=s(a.nextEl),i.params.uniqueNavElements&&"string"==typeof a.nextEl&&e.length>1&&1===i.$el.find(a.nextEl).length&&(e=i.$el.find(a.nextEl))),a.prevEl&&(t=s(a.prevEl),i.params.uniqueNavElements&&"string"==typeof a.prevEl&&t.length>1&&1===i.$el.find(a.prevEl).length&&(t=i.$el.find(a.prevEl))),e&&e.length>0&&e.on("click",function(e){e.preventDefault(),i.isEnd&&!i.params.loop||i.slideNext()}),t&&t.length>0&&t.on("click",function(e){e.preventDefault(),i.isBeginning&&!i.params.loop||i.slidePrev()}),d.extend(i.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(this.params.navigation.disabledClass))}},W={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(i>this.previousIndex&&this.pagination.dynamicBulletIndex<t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex+=1:i<this.previousIndex&&this.pagination.dynamicBulletIndex>0&&(this.pagination.dynamicBulletIndex-=1)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(t.dynamicMainBullets-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each(function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))});else if(h.eq(i).addClass(t.bulletActiveClass),t.dynamicBullets){for(var p=h.eq(o),c=h.eq(l),u=o;u<=l;u+=1)h.eq(u).addClass(t.bulletActiveClass+"-main");p.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}if(t.dynamicBullets){var v=Math.min(h.length,t.dynamicMainBullets+4),f=(this.pagination.bulletSize*v-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,m=e?"right":"left";h.css(this.isHorizontal()?m:"top",f+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(i+1),r.find("."+t.totalClass).text(n)),"progressbar"===t.type){var g=(i+1)/n,b=g,w=1;this.isHorizontal()||(w=g,b=1),r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+b+") scaleY("+w+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.clickable&&i.on("click","."+t.bulletClass,function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)}),d.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},q={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtl,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t&&this.isHorizontal()?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(h.transforms3d?r.transform("translate3d("+d+"px, 0, 0)"):r.transform("translateX("+d+"px)"),r[0].style.width=l+"px"):(h.transforms3d?r.transform("translate3d(0px, "+d+"px, 0)"):r.transform("translateY("+d+"px)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout(function(){n[0].style.opacity=0,n.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbarHide&&(i[0].style.opacity=0),d.extend(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,i=this.scrollbar,s=i.$el,a=i.dragSize,r=i.trackSize;t=((this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-s.offset()[this.isHorizontal()?"left":"top"]-a/2)/(r-a),t=Math.max(Math.min(t,1),0),this.rtl&&(t=1-t);var n=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(n),this.setTranslate(n),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=d.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideReset())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.addEventListener("mousedown",this.scrollbar.onDragStart,n),e.addEventListener("mousemove",this.scrollbar.onDragMove,n),e.addEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,o))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.scrollbar.onDragStart,n),e.removeEventListener("mousemove",this.scrollbar.onDragMove,n),e.removeEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,o))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),d.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},j={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",void 0!==h&&null!==h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(void 0===d||null===d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,a)}),i.each(function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,n)})})},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)})}},K={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!h.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=K.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest(".swiper-slide"),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=K.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(h.gestures?this.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!y.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(y.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=d.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=d.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX),this.rtl&&(s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,a,r,n,o,l,d,h,p,c,u,v,f,m,g,b=this.zoom,w=this.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,i=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(m=y.$slideEl[0].offsetWidth,g=y.$slideEl[0].offsetHeight,a=y.$slideEl.offset().left+m/2-t,r=y.$slideEl.offset().top+g/2-i,l=y.$imageEl[0].offsetWidth,d=y.$imageEl[0].offsetHeight,h=l*b.scale,p=d*b.scale,v=-(c=Math.min(m/2-h/2,0)),f=-(u=Math.min(g/2-p/2,0)),n=a*b.scale,o=r*b.scale,n<c&&(n=c),n>v&&(n=v),o<u&&(o=u),o>f&&(o=f)):(n=0,o=0),y.$imageWrapEl.transition(300).transform("translate3d("+n+"px, "+o+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.on("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.off("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}}},U={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each(function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)});else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},_={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new _.LinearSpline(this.slidesGrid,e.slidesGrid):new _.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=e.rtl&&"horizontal"===e.params.direction?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof I&&n(r[o]);else r instanceof I&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof I&&r(a[i]);else a instanceof I&&t!==a&&r(a)}},Z={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each(function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},Q={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=Q.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=Q.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=Q.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(Q.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},J={onHashCange:function(){var t=e.location.hash.replace("#","");t!==this.slides.eq(this.activeIndex).attr("data-hash")&&this.slideTo(this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ee={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=d.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?t.$wrapperEl.transitionEnd(function(){t&&!t.destroyed&&(t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}):(t.autoplay.paused=!1,t.autoplay.run())))}},te={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd(function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}})}}},ie={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtl,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var E="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(E),d.slideShadows){var T=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(T)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),T.length&&(T[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),z=d.shadowScale,k=d.shadowScale/M,$=d.shadowOffset;e.transform("scale3d("+z+", 1, "+k+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/k+"px) rotateX(-90deg)")}var L=P.isSafari||P.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+L+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},se={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=e.eq(t),a=i[0].progress;this.params.flipEffect.limitRotation&&(a=Math.max(Math.min(i[0].progress,1),-1));var r=-180*a,n=0,o=-i[0].swiperSlideOffset,l=0;if(this.isHorizontal()?this.rtl&&(r=-r):(l=o,o=0,n=-r,r=0),i[0].style.zIndex=-Math.abs(Math.round(a))+e.length,this.params.flipEffect.slideShadows){var d=this.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),h=this.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===d.length&&(d=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),i.append(d)),0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),i.append(h)),d.length&&(d[0].style.opacity=Math.max(-a,0)),h.length&&(h[0].style.opacity=Math.max(a,0))}i.transform("translate3d("+o+"px, "+l+"px, 0px) rotateX("+n+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}})}}},ae={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,o=this.isHorizontal(),l=this.translate,d=o?e/2-l:t/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(d-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=o?p*g:0,w=o?0:p*g,y=-c*Math.abs(g),x=o?0:n.stretch*g,E=o?n.stretch*g:0;Math.abs(E)<.001&&(E=0),Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var T="translate3d("+E+"px,"+x+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(T),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var S=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),C=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(S)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(C)),S.length&&(S[0].style.opacity=g>0?g:0),C.length&&(C[0].style.opacity=-g>0?-g:0)}}(h.pointerEvents||h.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},re=[D,O,A,H,X,B,V,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){d.extend(this,{mousewheel:{enabled:!1,enable:R.enable.bind(this),disable:R.disable.bind(this),handle:R.handle.bind(this),lastScrollTime:d.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){d.extend(this,{navigation:{init:F.init.bind(this),update:F.update.bind(this),destroy:F.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,i=t.$nextEl,a=t.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(a)||s(e.target).is(i)||(i&&i.toggleClass(this.params.navigation.hiddenClass),a&&a.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){d.extend(this,{pagination:{init:W.init.bind(this),render:W.render.bind(this),update:W.update.bind(this),destroy:W.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){d.extend(this,{scrollbar:{init:q.init.bind(this),destroy:q.destroy.bind(this),updateSize:q.updateSize.bind(this),setTranslate:q.setTranslate.bind(this),setTransition:q.setTransition.bind(this),enableDraggable:q.enableDraggable.bind(this),disableDraggable:q.disableDraggable.bind(this),setDragPosition:q.setDragPosition.bind(this),onDragStart:q.onDragStart.bind(this),onDragMove:q.onDragMove.bind(this),onDragEnd:q.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){d.extend(this,{parallax:{setTransform:j.setTransform.bind(this),setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i){t[i]=K[i].bind(e)}),d.extend(e,{zoom:t})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){d.extend(this,{lazy:{initialImageLoaded:!1,load:U.load.bind(this),loadInSlide:U.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){d.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:_.getInterpolateFunction.bind(this),setTranslate:_.setTranslate.bind(this),setTransition:_.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!1,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;d.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(Z).forEach(function(t){e.a11y[t]=Z[t].bind(e)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){d.extend(this,{history:{init:Q.init.bind(this),setHistory:Q.setHistory.bind(this),setHistoryPopState:Q.setHistoryPopState.bind(this),scrollToSlide:Q.scrollToSlide.bind(this),destroy:Q.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){d.extend(this,{hashNavigation:{initialized:!1,init:J.init.bind(this),destroy:J.destroy.bind(this),setHash:J.setHash.bind(this),onHashCange:J.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){d.extend(this,{autoplay:{running:!1,paused:!1,run:ee.run.bind(this),start:ee.start.bind(this),stop:ee.stop.bind(this),pause:ee.pause.bind(this)}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){d.extend(this,{fadeEffect:{setTranslate:te.setTranslate.bind(this),setTransition:te.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){d.extend(this,{cubeEffect:{setTranslate:ie.setTranslate.bind(this),setTransition:ie.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){d.extend(this,{flipEffect:{setTranslate:se.setTranslate.bind(this),setTransition:se.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){d.extend(this,{coverflowEffect:{setTranslate:ae.setTranslate.bind(this),setTransition:ae.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}}];return void 0===I.use&&(I.use=I.Class.use,I.installModule=I.Class.installModule),I.use(re),I});
//# sourceMappingURL=swiper.min.js.map

;;
/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 *
 * Copyright 2014, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */
(function($,window,document,undefined){var pluginName='stellar',defaults={scrollProperty:'scroll',positionProperty:'position',horizontalScrolling:true,verticalScrolling:true,horizontalOffset:0,verticalOffset:0,responsive:false,parallaxBackgrounds:true,parallaxElements:true,hideDistantElements:true,hideElement:function($elem){$elem.hide();},showElement:function($elem){$elem.show();}},scrollProperty={scroll:{getLeft:function($elem){return $elem.scrollLeft();},setLeft:function($elem,val){$elem.scrollLeft(val);},getTop:function($elem){return $elem.scrollTop();},setTop:function($elem,val){$elem.scrollTop(val);}},position:{getLeft:function($elem){return parseInt($elem.css('left'),10)*-1;},getTop:function($elem){return parseInt($elem.css('top'),10)*-1;}},margin:{getLeft:function($elem){return parseInt($elem.css('margin-left'),10)*-1;},getTop:function($elem){return parseInt($elem.css('margin-top'),10)*-1;}},transform:{getLeft:function($elem){var computedTransform=getComputedStyle($elem[0])[prefixedTransform];return(computedTransform!=='none'?parseInt(computedTransform.match(/(-?[0-9]+)/g)[4],10)*-1:0);},getTop:function($elem){var computedTransform=getComputedStyle($elem[0])[prefixedTransform];return(computedTransform!=='none'?parseInt(computedTransform.match(/(-?[0-9]+)/g)[5],10)*-1:0);}}},positionProperty={position:{setLeft:function($elem,left){$elem.css('left',left);},setTop:function($elem,top){$elem.css('top',top);}},transform:{setPosition:function($elem,left,startingLeft,top,startingTop){$elem[0].style[prefixedTransform]='translate3d('+(left-startingLeft)+'px, '+(top-startingTop)+'px, 0)';}}},vendorPrefix=(function(){var prefixes=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,style=$('script')[0].style,prefix='',prop;for(prop in style){if(prefixes.test(prop)){prefix=prop.match(prefixes)[0];break;}}
if('WebkitOpacity'in style){prefix='Webkit';}
if('KhtmlOpacity'in style){prefix='Khtml';}
return function(property){return prefix+(prefix.length>0?property.charAt(0).toUpperCase()+property.slice(1):property);};}()),prefixedTransform=vendorPrefix('transform'),supportsBackgroundPositionXY=$('<div />',{style:'background:#fff'}).css('background-position-x')!==undefined,setBackgroundPosition=(supportsBackgroundPositionXY?function($elem,x,y){$elem.css({'background-position-x':x,'background-position-y':y});}:function($elem,x,y){$elem.css('background-position',x+' '+y);}),getBackgroundPosition=(supportsBackgroundPositionXY?function($elem){return[$elem.css('background-position-x'),$elem.css('background-position-y')];}:function($elem){return $elem.css('background-position').split(' ');}),requestAnimFrame=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,1000/60);});function Plugin(element,options){this.element=element;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.init();}
Plugin.prototype={init:function(){this.options.name=pluginName+'_'+Math.floor(Math.random()*1e9);this._defineElements();this._defineGetters();this._defineSetters();this._handleWindowLoadAndResize();this._detectViewport();this.refresh({firstLoad:true});if(this.options.scrollProperty==='scroll'){this._handleScrollEvent();}else{this._startAnimationLoop();}},_defineElements:function(){if(this.element===document.body)this.element=window;this.$scrollElement=$(this.element);this.$element=(this.element===window?$('body'):this.$scrollElement);this.$viewportElement=(this.options.viewportElement!==undefined?$(this.options.viewportElement):(this.$scrollElement[0]===window||this.options.scrollProperty==='scroll'?this.$scrollElement:this.$scrollElement.parent()));},_defineGetters:function(){var self=this,scrollPropertyAdapter=scrollProperty[self.options.scrollProperty];this._getScrollLeft=function(){return scrollPropertyAdapter.getLeft(self.$scrollElement);};this._getScrollTop=function(){return scrollPropertyAdapter.getTop(self.$scrollElement);};},_defineSetters:function(){var self=this,scrollPropertyAdapter=scrollProperty[self.options.scrollProperty],positionPropertyAdapter=positionProperty[self.options.positionProperty],setScrollLeft=scrollPropertyAdapter.setLeft,setScrollTop=scrollPropertyAdapter.setTop;this._setScrollLeft=(typeof setScrollLeft==='function'?function(val){setScrollLeft(self.$scrollElement,val);}:$.noop);this._setScrollTop=(typeof setScrollTop==='function'?function(val){setScrollTop(self.$scrollElement,val);}:$.noop);this._setPosition=positionPropertyAdapter.setPosition||function($elem,left,startingLeft,top,startingTop){if(self.options.horizontalScrolling){positionPropertyAdapter.setLeft($elem,left,startingLeft);}
if(self.options.verticalScrolling){positionPropertyAdapter.setTop($elem,top,startingTop);}};},_handleWindowLoadAndResize:function(){var self=this,$window=$(window);if(self.options.responsive){$window.bind('load.'+this.name,function(){self.refresh();});}
$window.bind('resize.'+this.name,function(){self._detectViewport();if(self.options.responsive){self.refresh();}});},refresh:function(options){var self=this,oldLeft=self._getScrollLeft(),oldTop=self._getScrollTop();if(!options||!options.firstLoad){this._reset();}
this._setScrollLeft(0);this._setScrollTop(0);this._setOffsets();this._findParticles();this._findBackgrounds();if(options&&options.firstLoad&&/WebKit/.test(navigator.userAgent)){$(window).load(function(){var oldLeft=self._getScrollLeft(),oldTop=self._getScrollTop();self._setScrollLeft(oldLeft+1);self._setScrollTop(oldTop+1);self._setScrollLeft(oldLeft);self._setScrollTop(oldTop);});}
this._setScrollLeft(oldLeft);this._setScrollTop(oldTop);},_detectViewport:function(){var viewportOffsets=this.$viewportElement.offset(),hasOffsets=viewportOffsets!==null&&viewportOffsets!==undefined;this.viewportWidth=this.$viewportElement.width();this.viewportHeight=this.$viewportElement.height();this.viewportOffsetTop=(hasOffsets?viewportOffsets.top:0);this.viewportOffsetLeft=(hasOffsets?viewportOffsets.left:0);},_findParticles:function(){var self=this,scrollLeft=this._getScrollLeft(),scrollTop=this._getScrollTop();if(this.particles!==undefined){for(var i=this.particles.length-1;i>=0;i--){this.particles[i].$element.data('stellar-elementIsActive',undefined);}}
this.particles=[];if(!this.options.parallaxElements)return;this.$element.find('[data-stellar-ratio]').each(function(i){var $this=$(this),horizontalOffset,verticalOffset,positionLeft,positionTop,marginLeft,marginTop,$offsetParent,offsetLeft,offsetTop,parentOffsetLeft=0,parentOffsetTop=0,tempParentOffsetLeft=0,tempParentOffsetTop=0;if(!$this.data('stellar-elementIsActive')){$this.data('stellar-elementIsActive',this);}else if($this.data('stellar-elementIsActive')!==this){return;}
self.options.showElement($this);if(!$this.data('stellar-startingLeft')){$this.data('stellar-startingLeft',$this.css('left'));$this.data('stellar-startingTop',$this.css('top'));}else{$this.css('left',$this.data('stellar-startingLeft'));$this.css('top',$this.data('stellar-startingTop'));}
positionLeft=$this.position().left;positionTop=$this.position().top;marginLeft=($this.css('margin-left')==='auto')?0:parseInt($this.css('margin-left'),10);marginTop=($this.css('margin-top')==='auto')?0:parseInt($this.css('margin-top'),10);offsetLeft=$this.offset().left-marginLeft;offsetTop=$this.offset().top-marginTop;$this.parents().each(function(){var $this=$(this);if($this.data('stellar-offset-parent')===true){parentOffsetLeft=tempParentOffsetLeft;parentOffsetTop=tempParentOffsetTop;$offsetParent=$this;return false;}else{tempParentOffsetLeft+=$this.position().left;tempParentOffsetTop+=$this.position().top;}});horizontalOffset=($this.data('stellar-horizontal-offset')!==undefined?$this.data('stellar-horizontal-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-horizontal-offset')!==undefined?$offsetParent.data('stellar-horizontal-offset'):self.horizontalOffset));verticalOffset=($this.data('stellar-vertical-offset')!==undefined?$this.data('stellar-vertical-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-vertical-offset')!==undefined?$offsetParent.data('stellar-vertical-offset'):self.verticalOffset));self.particles.push({$element:$this,$offsetParent:$offsetParent,isFixed:$this.css('position')==='fixed',horizontalOffset:horizontalOffset,verticalOffset:verticalOffset,startingPositionLeft:positionLeft,startingPositionTop:positionTop,startingOffsetLeft:offsetLeft,startingOffsetTop:offsetTop,parentOffsetLeft:parentOffsetLeft,parentOffsetTop:parentOffsetTop,stellarRatio:($this.data('stellar-ratio')!==undefined?$this.data('stellar-ratio'):1),width:$this.outerWidth(true),height:$this.outerHeight(true),isHidden:false});});},_findBackgrounds:function(){var self=this,scrollLeft=this._getScrollLeft(),scrollTop=this._getScrollTop(),$backgroundElements;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;$backgroundElements=this.$element.find('[data-stellar-background-ratio]');if(this.$element.data('stellar-background-ratio')){$backgroundElements=$backgroundElements.add(this.$element);}
$backgroundElements.each(function(){var $this=$(this),backgroundPosition=getBackgroundPosition($this),horizontalOffset,verticalOffset,positionLeft,positionTop,marginLeft,marginTop,offsetLeft,offsetTop,$offsetParent,parentOffsetLeft=0,parentOffsetTop=0,tempParentOffsetLeft=0,tempParentOffsetTop=0;if(!$this.data('stellar-backgroundIsActive')){$this.data('stellar-backgroundIsActive',this);}else if($this.data('stellar-backgroundIsActive')!==this){return;}
if(!$this.data('stellar-backgroundStartingLeft')){$this.data('stellar-backgroundStartingLeft',backgroundPosition[0]);$this.data('stellar-backgroundStartingTop',backgroundPosition[1]);}else{setBackgroundPosition($this,$this.data('stellar-backgroundStartingLeft'),$this.data('stellar-backgroundStartingTop'));}
marginLeft=($this.css('margin-left')==='auto')?0:parseInt($this.css('margin-left'),10);marginTop=($this.css('margin-top')==='auto')?0:parseInt($this.css('margin-top'),10);offsetLeft=$this.offset().left-marginLeft-scrollLeft;offsetTop=$this.offset().top-marginTop-scrollTop;$this.parents().each(function(){var $this=$(this);if($this.data('stellar-offset-parent')===true){parentOffsetLeft=tempParentOffsetLeft;parentOffsetTop=tempParentOffsetTop;$offsetParent=$this;return false;}else{tempParentOffsetLeft+=$this.position().left;tempParentOffsetTop+=$this.position().top;}});horizontalOffset=($this.data('stellar-horizontal-offset')!==undefined?$this.data('stellar-horizontal-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-horizontal-offset')!==undefined?$offsetParent.data('stellar-horizontal-offset'):self.horizontalOffset));verticalOffset=($this.data('stellar-vertical-offset')!==undefined?$this.data('stellar-vertical-offset'):($offsetParent!==undefined&&$offsetParent.data('stellar-vertical-offset')!==undefined?$offsetParent.data('stellar-vertical-offset'):self.verticalOffset));self.backgrounds.push({$element:$this,$offsetParent:$offsetParent,isFixed:$this.css('background-attachment')==='fixed',horizontalOffset:horizontalOffset,verticalOffset:verticalOffset,startingValueLeft:backgroundPosition[0],startingValueTop:backgroundPosition[1],startingBackgroundPositionLeft:(isNaN(parseInt(backgroundPosition[0],10))?0:parseInt(backgroundPosition[0],10)),startingBackgroundPositionTop:(isNaN(parseInt(backgroundPosition[1],10))?0:parseInt(backgroundPosition[1],10)),startingPositionLeft:$this.position().left,startingPositionTop:$this.position().top,startingOffsetLeft:offsetLeft,startingOffsetTop:offsetTop,parentOffsetLeft:parentOffsetLeft,parentOffsetTop:parentOffsetTop,stellarRatio:($this.data('stellar-background-ratio')===undefined?1:$this.data('stellar-background-ratio'))});});},_reset:function(){var particle,startingPositionLeft,startingPositionTop,background,i;for(i=this.particles.length-1;i>=0;i--){particle=this.particles[i];startingPositionLeft=particle.$element.data('stellar-startingLeft');startingPositionTop=particle.$element.data('stellar-startingTop');this._setPosition(particle.$element,startingPositionLeft,startingPositionLeft,startingPositionTop,startingPositionTop);this.options.showElement(particle.$element);particle.$element.data('stellar-startingLeft',null).data('stellar-elementIsActive',null).data('stellar-backgroundIsActive',null);}
for(i=this.backgrounds.length-1;i>=0;i--){background=this.backgrounds[i];background.$element.data('stellar-backgroundStartingLeft',null).data('stellar-backgroundStartingTop',null);setBackgroundPosition(background.$element,background.startingValueLeft,background.startingValueTop);}},destroy:function(){this._reset();this.$scrollElement.unbind('resize.'+this.name).unbind('scroll.'+this.name);this._animationLoop=$.noop;$(window).unbind('load.'+this.name).unbind('resize.'+this.name);},_setOffsets:function(){var self=this,$window=$(window);$window.unbind('resize.horizontal-'+this.name).unbind('resize.vertical-'+this.name);if(typeof this.options.horizontalOffset==='function'){this.horizontalOffset=this.options.horizontalOffset();$window.bind('resize.horizontal-'+this.name,function(){self.horizontalOffset=self.options.horizontalOffset();});}else{this.horizontalOffset=this.options.horizontalOffset;}
if(typeof this.options.verticalOffset==='function'){this.verticalOffset=this.options.verticalOffset();$window.bind('resize.vertical-'+this.name,function(){self.verticalOffset=self.options.verticalOffset();});}else{this.verticalOffset=this.options.verticalOffset;}},_repositionElements:function(){var scrollLeft=this._getScrollLeft(),scrollTop=this._getScrollTop(),horizontalOffset,verticalOffset,particle,fixedRatioOffset,background,bgLeft,bgTop,isVisibleVertical=true,isVisibleHorizontal=true,newPositionLeft,newPositionTop,newOffsetLeft,newOffsetTop,i;if(this.currentScrollLeft===scrollLeft&&this.currentScrollTop===scrollTop&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight){return;}else{this.currentScrollLeft=scrollLeft;this.currentScrollTop=scrollTop;this.currentWidth=this.viewportWidth;this.currentHeight=this.viewportHeight;}
for(i=this.particles.length-1;i>=0;i--){particle=this.particles[i];fixedRatioOffset=(particle.isFixed?1:0);if(this.options.horizontalScrolling){newPositionLeft=(scrollLeft+particle.horizontalOffset+this.viewportOffsetLeft+particle.startingPositionLeft-particle.startingOffsetLeft+particle.parentOffsetLeft)*-(particle.stellarRatio+fixedRatioOffset-1)+particle.startingPositionLeft;newOffsetLeft=newPositionLeft-particle.startingPositionLeft+particle.startingOffsetLeft;}else{newPositionLeft=particle.startingPositionLeft;newOffsetLeft=particle.startingOffsetLeft;}
if(this.options.verticalScrolling){newPositionTop=(scrollTop+particle.verticalOffset+this.viewportOffsetTop+particle.startingPositionTop-particle.startingOffsetTop+particle.parentOffsetTop)*-(particle.stellarRatio+fixedRatioOffset-1)+particle.startingPositionTop;newOffsetTop=newPositionTop-particle.startingPositionTop+particle.startingOffsetTop;}else{newPositionTop=particle.startingPositionTop;newOffsetTop=particle.startingOffsetTop;}
if(this.options.hideDistantElements){isVisibleHorizontal=!this.options.horizontalScrolling||newOffsetLeft+particle.width>(particle.isFixed?0:scrollLeft)&&newOffsetLeft<(particle.isFixed?0:scrollLeft)+this.viewportWidth+this.viewportOffsetLeft;isVisibleVertical=!this.options.verticalScrolling||newOffsetTop+particle.height>(particle.isFixed?0:scrollTop)&&newOffsetTop<(particle.isFixed?0:scrollTop)+this.viewportHeight+this.viewportOffsetTop;}
if(isVisibleHorizontal&&isVisibleVertical){if(particle.isHidden){this.options.showElement(particle.$element);particle.isHidden=false;}
this._setPosition(particle.$element,newPositionLeft,particle.startingPositionLeft,newPositionTop,particle.startingPositionTop);}else{if(!particle.isHidden){this.options.hideElement(particle.$element);particle.isHidden=true;}}}
for(i=this.backgrounds.length-1;i>=0;i--){background=this.backgrounds[i];fixedRatioOffset=(background.isFixed?0:1);bgLeft=(this.options.horizontalScrolling?(scrollLeft+background.horizontalOffset-this.viewportOffsetLeft-background.startingOffsetLeft+background.parentOffsetLeft-background.startingBackgroundPositionLeft)*(fixedRatioOffset-background.stellarRatio)+'px':background.startingValueLeft);bgTop=(this.options.verticalScrolling?(scrollTop+background.verticalOffset-this.viewportOffsetTop-background.startingOffsetTop+background.parentOffsetTop-background.startingBackgroundPositionTop)*(fixedRatioOffset-background.stellarRatio)+'px':background.startingValueTop);setBackgroundPosition(background.$element,bgLeft,bgTop);}},_handleScrollEvent:function(){var self=this,ticking=false;var update=function(){self._repositionElements();ticking=false;};var requestTick=function(){if(!ticking){requestAnimFrame(update);ticking=true;}};this.$scrollElement.bind('scroll.'+this.name,requestTick);requestTick();},_startAnimationLoop:function(){var self=this;this._animationLoop=function(){requestAnimFrame(self._animationLoop);self._repositionElements();};this._animationLoop();}};$.fn[pluginName]=function(options){var args=arguments;if(options===undefined||typeof options==='object'){return this.each(function(){if(!$.data(this,'plugin_'+pluginName)){$.data(this,'plugin_'+pluginName,new Plugin(this,options));}});}else if(typeof options==='string'&&options[0]!=='_'&&options!=='init'){return this.each(function(){var instance=$.data(this,'plugin_'+pluginName);if(instance instanceof Plugin&&typeof instance[options]==='function'){instance[options].apply(instance,Array.prototype.slice.call(args,1));}
if(options==='destroy'){$.data(this,'plugin_'+pluginName,null);}});}};$[pluginName]=function(options){var $window=$(window);return $window.stellar.apply($window,Array.prototype.slice.call(arguments,0));};$[pluginName].scrollProperty=scrollProperty;$[pluginName].positionProperty=positionProperty;window.Stellar=Plugin;}(jQuery,this,document));
;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
;/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'masonry-layout/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry-layout/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope-layout/js/item',
        'isotope-layout/js/layout-mode',
        // include default layout modes
        'isotope-layout/js/layout-modes/masonry',
        'isotope-layout/js/layout-modes/fit-rows',
        'isotope-layout/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope-layout/js/item'),
      require('isotope-layout/js/layout-mode'),
      // include default layout modes
      require('isotope-layout/js/layout-modes/masonry'),
      require('isotope-layout/js/layout-modes/fit-rows'),
      require('isotope-layout/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    if ( !this.options.sortBy ) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray( this.options.sortBy );
    if ( !this._getIsSameSortBy( sortBys ) ) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat( this.sortHistory );
    }
    // sort magic
    var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function( sortBys ) {
    for ( var i=0; i < sortBys.length; i++ ) {
      if ( sortBys[i] != this.sortHistory[i] ) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));

;/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)");}
var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c);};addClass=function(elem,c){elem.classList.add(c);};removeClass=function(elem,c){elem.classList.remove(c);};}
else{hasClass=function(elem,c){return classReg(c).test(elem.className);};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c;}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ');};}
function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c);}
var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie);}else{window.classie=classie;}})(window);;function bindEvent(el,eventName,eventHandler){if(el.addEventListener){el.addEventListener(eventName,eventHandler,false);}else if(el.attachEvent){el.attachEvent('on'+eventName,eventHandler);}}
(function(){var bodyEl=document.body,openbtn=document.getElementById('open-button'),closebtn=document.getElementById('close-button'),isOpen=false;function init(){initEvents();}
function initEvents(){if(openbtn){bindEvent(openbtn,'click',toggleMenu);}
if(closebtn){bindEvent(closebtn,'click',toggleMenu);}}
function toggleMenu(){if(isOpen){classie.remove(bodyEl,'show-menu');if($(".full-width-pull-menu").length){classie.remove(bodyEl,'overflow-hidden');classie.remove(bodyEl,'position-fixed');}}
else{classie.add(bodyEl,'show-menu');if($(".full-width-pull-menu").length){classie.add(bodyEl,'overflow-hidden');classie.add(bodyEl,'position-fixed');}}
isOpen=!isOpen;}
init();})();;
/*!
 * The Final Countdown for jQuery v2.0.4
 */
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}})(function($){"use strict";var PRECISION=100;var instances=[],matchers=[];matchers.push(/^[0-9]*$/.source);matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers=new RegExp(matchers.join("|"));function parseDateString(dateString){if(dateString instanceof Date){return dateString;}
if(String(dateString).match(matchers)){if(String(dateString).match(/^[0-9]*$/)){dateString=Number(dateString);}
if(String(dateString).match(/\-/)){dateString=String(dateString).replace(/\-/g,"/");}
return new Date(dateString);}else{throw new Error("Couldn't cast `"+dateString+"` to a date object.");}}
var DIRECTIVE_KEY_MAP={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"};function strftime(offsetObject){return function(format){var directives=format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(directives){for(var i=0,len=directives.length;i<len;++i){var directive=directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),regexp=new RegExp(directive[0]),modifier=directive[1]||"",plural=directive[3]||"",value=null;directive=directive[2];if(DIRECTIVE_KEY_MAP.hasOwnProperty(directive)){value=DIRECTIVE_KEY_MAP[directive];value=Number(offsetObject[value]);}
if(value!==null){if(modifier==="!"){value=pluralize(plural,value);}
if(modifier===""){if(value<10){value="0"+value.toString();}}
format=format.replace(regexp,value.toString());}}}
format=format.replace(/%%/,"%");return format;};}
function pluralize(format,count){var plural="s",singular="";if(format){format=format.replace(/(:|;|\s)/gi,"").split(/\,/);if(format.length===1){plural=format[0];}else{singular=format[0];plural=format[1];}}
if(Math.abs(count)===1){return singular;}else{return plural;}}
var Countdown=function(el,finalDate,callback){this.el=el;this.$el=$(el);this.interval=null;this.offset={};this.instanceNumber=instances.length;instances.push(this);this.$el.data("countdown-instance",this.instanceNumber);if(callback){this.$el.on("update.countdown",callback);this.$el.on("stoped.countdown",callback);this.$el.on("finish.countdown",callback);}
this.setFinalDate(finalDate);this.start();};$.extend(Countdown.prototype,{start:function(){if(this.interval!==null){clearInterval(this.interval);}
var self=this;this.update();this.interval=setInterval(function(){self.update.call(self);},PRECISION);},stop:function(){clearInterval(this.interval);this.interval=null;this.dispatchEvent("stoped");},pause:function(){this.stop.call(this);},resume:function(){this.start.call(this);},remove:function(){this.stop();instances[this.instanceNumber]=null;delete this.$el.data().countdownInstance;},setFinalDate:function(value){this.finalDate=parseDateString(value);},update:function(){if(this.$el.closest("html").length===0){this.remove();return;}
this.totalSecsLeft=this.finalDate.getTime()-new Date().getTime();this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3);this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft;this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)};if(this.totalSecsLeft===0){this.stop();this.dispatchEvent("finish");}else{this.dispatchEvent("update");}},dispatchEvent:function(eventName){var event=$.Event(eventName+".countdown");event.finalDate=this.finalDate;event.offset=$.extend({},this.offset);event.strftime=strftime(this.offset);this.$el.trigger(event);}});$.fn.countdown=function(){var argumentsArray=Array.prototype.slice.call(arguments,0);return this.each(function(){var instanceNumber=$(this).data("countdown-instance");if(instanceNumber!==undefined){var instance=instances[instanceNumber],method=argumentsArray[0];if(Countdown.prototype.hasOwnProperty(method)){instance[method].apply(instance,argumentsArray.slice(1));}else if(String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){instance.setFinalDate.call(instance,method);instance.start();}else{$.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,method));}}else{new Countdown(this,argumentsArray[0],argumentsArray[1]);}});};});;
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
;(function($){'use strict';$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]','object','embed'];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not('object object');$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(count){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+count;$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+'%');$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);
;/*!
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */
!function(i){i.fn.equalize=function(e){var n,t,h=!1,c=!1;return i.isPlainObject(e)?(n=e.equalize||"height",h=e.children||!1,c=e.reset||!1):n=e||"height",i.isFunction(i.fn[n])?(t=0<n.indexOf("eight")?"height":"width",this.each(function(){var e=h?i(this).find(h):i(this).children(),s=0;e.each(function(){var e=i(this);c&&e.css(t,""),e=e[n](),e>s&&(s=e)}),e.css(t,s+"px")})):!1}}(jQuery);
;/*!
 * https://github.com/umarwebdeveloper/jquery-css-skills-bar
 * Author: @umarwebdeveloper
 * Licensed under the MIT license
 */
(function($){$.fn.skillBars=function(options){var settings=$.extend({from:0,to:false,speed:1000,interval:100,decimals:0,onUpdate:null,onComplete:null,classes:{skillBarBar:'.skillbar-bar',skillBarPercent:'.skill-bar-percent',}},options);return this.each(function(){var obj=$(this),to=(settings.to!=false)?settings.to:parseInt(obj.attr('data-percent'));if(to>100){to=100;};var from=settings.from,loops=Math.ceil(settings.speed/settings.interval),increment=(to-from)/loops,loopCount=0,interval=setInterval(updateValue,settings.interval);obj.find(settings.classes.skillBarBar).animate({width:parseInt(obj.attr('data-percent'))+'%'},settings.speed);function updateValue(){from+=increment;loopCount++;$(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals)+'%');if(typeof(settings.onUpdate)=='function'){settings.onUpdate.call(obj,from);}
if(loopCount>=loops){clearInterval(interval);from=to;if(typeof(settings.onComplete)=='function'){settings.onComplete.call(obj,from);}}}});};}(jQuery));
;/*!
 * Justified Gallery - v3.6.3
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2016 Miro Mannino
 * Licensed under the MIT license.
 */
!function(a){function b(){return a("body").height()>a(window).height()}var c=function(b,c){this.settings=c,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.yield={every:2,flushed:0},this.border=c.border>=0?c.border:c.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.rows=0,this.spinner={phase:0,timeSlot:150,$el:a('<div class="spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.checkWidthIntervalId=null,this.galleryWidth=b.width(),this.$gallery=b};c.prototype.getSuffix=function(a,b){var c,d;for(c=a>b?a:b,d=0;d<this.suffixRanges.length;d++)if(c<=this.suffixRanges[d])return this.settings.sizeRangeSuffixes[this.suffixRanges[d]];return this.settings.sizeRangeSuffixes[this.suffixRanges[d-1]]},c.prototype.removeSuffix=function(a,b){return a.substring(0,a.length-b.length)},c.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},c.prototype.getUsedSuffix=function(a){for(var b in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(b)){if(0===this.settings.sizeRangeSuffixes[b].length)continue;if(this.endsWith(a,this.settings.sizeRangeSuffixes[b]))return this.settings.sizeRangeSuffixes[b]}return""},c.prototype.newSrc=function(a,b,c,d){var e;if(this.settings.thumbnailPath)e=this.settings.thumbnailPath(a,b,c,d);else{var f=a.match(this.settings.extension),g=null!==f?f[0]:"";e=a.replace(this.settings.extension,""),e=this.removeSuffix(e,this.getUsedSuffix(e)),e+=this.getSuffix(b,c)+g}return e},c.prototype.showImg=function(a,b){this.settings.cssAnimation?(a.addClass("entry-visible"),b&&b()):(a.stop().fadeTo(this.settings.imagesAnimationDuration,1,b),a.find("> img, > a > img").stop().fadeTo(this.settings.imagesAnimationDuration,1,b))},c.prototype.extractImgSrcFromImage=function(a){var b="undefined"!=typeof a.data("safe-src")?a.data("safe-src"):a.attr("src");return a.data("jg.originalSrc",b),b},c.prototype.imgFromEntry=function(a){var b=a.find("> img");return 0===b.length&&(b=a.find("> a > img")),0===b.length?null:b},c.prototype.captionFromEntry=function(a){var b=a.find("> .caption");return 0===b.length?null:b},c.prototype.displayEntry=function(b,c,d,e,f,g){b.width(e),b.height(g),b.css("top",d),b.css("left",c);var h=this.imgFromEntry(b);if(null!==h){h.css("width",e),h.css("height",f),h.css("margin-left",-e/2),h.css("margin-top",-f/2);var i=h.attr("src"),j=this.newSrc(i,e,f,h[0]);h.one("error",function(){h.attr("src",h.data("jg.originalSrc"))});var k=function(){i!==j&&h.attr("src",j)};"skipped"===b.data("jg.loaded")?this.onImageEvent(i,a.proxy(function(){this.showImg(b,k),b.data("jg.loaded",!0)},this)):this.showImg(b,k)}else this.showImg(b);this.displayEntryCaption(b)},c.prototype.displayEntryCaption=function(b){var c=this.imgFromEntry(b);if(null!==c&&this.settings.captions){var d=this.captionFromEntry(b);if(null===d){var e=c.attr("alt");this.isValidCaption(e)||(e=b.attr("title")),this.isValidCaption(e)&&(d=a('<div class="caption">'+e+"</div>"),b.append(d),b.data("jg.createdCaption",!0))}null!==d&&(this.settings.cssAnimation||d.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(b))}else this.removeCaptionEventsHandlers(b)},c.prototype.isValidCaption=function(a){return"undefined"!=typeof a&&a.length>0},c.prototype.onEntryMouseEnterForCaption=function(b){var c=this.captionFromEntry(a(b.currentTarget));this.settings.cssAnimation?c.addClass("caption-visible").removeClass("caption-hidden"):c.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},c.prototype.onEntryMouseLeaveForCaption=function(b){var c=this.captionFromEntry(a(b.currentTarget));this.settings.cssAnimation?c.removeClass("caption-visible").removeClass("caption-hidden"):c.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},c.prototype.addCaptionEventsHandlers=function(b){var c=b.data("jg.captionMouseEvents");"undefined"==typeof c&&(c={mouseenter:a.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:a.proxy(this.onEntryMouseLeaveForCaption,this)},b.on("mouseenter",void 0,void 0,c.mouseenter),b.on("mouseleave",void 0,void 0,c.mouseleave),b.data("jg.captionMouseEvents",c))},c.prototype.removeCaptionEventsHandlers=function(a){var b=a.data("jg.captionMouseEvents");"undefined"!=typeof b&&(a.off("mouseenter",void 0,b.mouseenter),a.off("mouseleave",void 0,b.mouseleave),a.removeData("jg.captionMouseEvents"))},c.prototype.prepareBuildingRow=function(a){var b,c,d,e,f,g=!0,h=0,i=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,j=i/this.buildingRow.aspectRatio,k=this.settings.rowHeight,l=this.buildingRow.width/i>this.settings.justifyThreshold;if(a&&"hide"===this.settings.lastRow&&!l){for(b=0;b<this.buildingRow.entriesBuff.length;b++)c=this.buildingRow.entriesBuff[b],this.settings.cssAnimation?c.removeClass("entry-visible"):(c.stop().fadeTo(0,.1),c.find("> img, > a > img").fadeTo(0,0));return-1}for(a&&!l&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(g=!1,this.rows>0&&(k=(this.offY-this.border-this.settings.margins*this.rows)/this.rows,g=k*this.buildingRow.aspectRatio/i>this.settings.justifyThreshold)),b=0;b<this.buildingRow.entriesBuff.length;b++)c=this.buildingRow.entriesBuff[b],d=c.data("jg.width")/c.data("jg.height"),g?(e=b===this.buildingRow.entriesBuff.length-1?i:j*d,f=j):(e=k*d,f=k),i-=Math.round(e),c.data("jg.jwidth",Math.round(e)),c.data("jg.jheight",Math.ceil(f)),(0===b||h>f)&&(h=f);return this.buildingRow.height=h,g},c.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},c.prototype.flushRow=function(a){var b,c,d,e=this.settings,f=this.border;if(c=this.prepareBuildingRow(a),a&&"hide"===e.lastRow&&-1===c)return void this.clearBuildingRow();if(this.maxRowHeight&&(this.maxRowHeight.isPercentage&&this.maxRowHeight.value*e.rowHeight<this.buildingRow.height?this.buildingRow.height=this.maxRowHeight.value*e.rowHeight:this.maxRowHeight.value>=e.rowHeight&&this.maxRowHeight.value<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value)),"center"===e.lastRow||"right"===e.lastRow){var g=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*e.margins;for(d=0;d<this.buildingRow.entriesBuff.length;d++)b=this.buildingRow.entriesBuff[d],g-=b.data("jg.jwidth");"center"===e.lastRow?f+=g/2:"right"===e.lastRow&&(f+=g)}for(d=0;d<this.buildingRow.entriesBuff.length;d++)b=this.buildingRow.entriesBuff[d],this.displayEntry(b,f,this.offY,b.data("jg.jwidth"),b.data("jg.jheight"),this.buildingRow.height),f+=b.data("jg.jwidth")+e.margins;this.galleryHeightToSet=this.offY+this.buildingRow.height+this.border,this.$gallery.height(this.galleryHeightToSet+this.getSpinnerHeight()),(!a||this.buildingRow.height<=e.rowHeight&&c)&&(this.offY+=this.buildingRow.height+e.margins,this.rows+=1,this.clearBuildingRow(),this.$gallery.trigger("jg.rowflush"))};var d=!1;c.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(a.proxy(function(){var a=parseFloat(this.$gallery.width());b()===d?Math.abs(a-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=a,this.rewind(),this.startImgAnalyzer(!0)):(d=b(),this.galleryWidth=a)},this),this.settings.refreshTime)},c.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},c.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},c.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.$gallery.height(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},c.prototype.startLoadingSpinnerAnimation=function(){var a=this.spinner,b=a.$el.find("span");clearInterval(a.intervalId),this.$gallery.append(a.$el),this.$gallery.height(this.offY+this.buildingRow.height+this.getSpinnerHeight()),a.intervalId=setInterval(function(){a.phase<b.length?b.eq(a.phase).fadeTo(a.timeSlot,1):b.eq(a.phase-b.length).fadeTo(a.timeSlot,0),a.phase=(a.phase+1)%(2*b.length)},a.timeSlot)},c.prototype.rewind=function(){this.lastFetchedEntry=null,this.lastAnalyzedIndex=-1,this.offY=this.border,this.rows=0,this.clearBuildingRow()},c.prototype.updateEntries=function(b){var c;return b&&null!=this.lastFetchedEntry?c=a(this.lastFetchedEntry).nextAll(this.settings.selector).toArray():(this.entries=[],c=this.$gallery.children(this.settings.selector).toArray()),c.length>0&&(a.isFunction(this.settings.sort)?c=this.sortArray(c):this.settings.randomize&&(c=this.shuffleArray(c)),this.lastFetchedEntry=c[c.length-1],this.settings.filter?c=this.filterArray(c):this.resetFilters(c)),this.entries=this.entries.concat(c),!0},c.prototype.insertToGallery=function(b){var c=this;a.each(b,function(){a(this).appendTo(c.$gallery)})},c.prototype.shuffleArray=function(a){var b,c,d;for(b=a.length-1;b>0;b--)c=Math.floor(Math.random()*(b+1)),d=a[b],a[b]=a[c],a[c]=d;return this.insertToGallery(a),a},c.prototype.sortArray=function(a){return a.sort(this.settings.sort),this.insertToGallery(a),a},c.prototype.resetFilters=function(b){for(var c=0;c<b.length;c++)a(b[c]).removeClass("jg-filtered")},c.prototype.filterArray=function(b){var c=this.settings;if("string"===a.type(c.filter))return b.filter(function(b){var d=a(b);return d.is(c.filter)?(d.removeClass("jg-filtered"),!0):(d.addClass("jg-filtered").removeClass("jg-visible"),!1)});if(a.isFunction(c.filter)){for(var d=b.filter(c.filter),e=0;e<b.length;e++)-1==d.indexOf(b[e])?a(b[e]).addClass("jg-filtered").removeClass("jg-visible"):a(b[e]).removeClass("jg-filtered");return d}},c.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),a.each(this.entries,a.proxy(function(b,c){var d=a(c);d.css("width",""),d.css("height",""),d.css("top",""),d.css("left",""),d.data("jg.loaded",void 0),d.removeClass("jg-entry");var e=this.imgFromEntry(d);e.css("width",""),e.css("height",""),e.css("margin-left",""),e.css("margin-top",""),e.attr("src",e.data("jg.originalSrc")),e.data("jg.originalSrc",void 0),this.removeCaptionEventsHandlers(d);var f=this.captionFromEntry(d);d.data("jg.createdCaption")?(d.data("jg.createdCaption",void 0),null!==f&&f.remove()):null!==f&&f.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0)},c.prototype.analyzeImages=function(b){for(var c=this.lastAnalyzedIndex+1;c<this.entries.length;c++){var d=a(this.entries[c]);if(d.data("jg.loaded")===!0||"skipped"===d.data("jg.loaded")){var e=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,f=d.data("jg.width")/d.data("jg.height");if(e/(this.buildingRow.aspectRatio+f)<this.settings.rowHeight&&(this.flushRow(!1),++this.yield.flushed>=this.yield.every))return void this.startImgAnalyzer(b);this.buildingRow.entriesBuff.push(d),this.buildingRow.aspectRatio+=f,this.buildingRow.width+=f*this.settings.rowHeight,this.lastAnalyzedIndex=c}else if("error"!==d.data("jg.loaded"))return}this.buildingRow.entriesBuff.length>0&&this.flushRow(!0),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.$gallery.trigger(b?"jg.resize":"jg.complete"),this.$gallery.height(this.galleryHeightToSet)},c.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0,null!==this.imgAnalyzerTimeout&&clearTimeout(this.imgAnalyzerTimeout)},c.prototype.startImgAnalyzer=function(a){var b=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){b.analyzeImages(a)},.001)},c.prototype.onImageEvent=function(b,c,d){if(c||d){var e=new Image,f=a(e);c&&f.one("load",function(){f.off("load error"),c(e)}),d&&f.one("error",function(){f.off("load error"),d(e)}),e.src=b}},c.prototype.init=function(){var b=!1,c=!1,d=this;a.each(this.entries,function(e,f){var g=a(f),h=d.imgFromEntry(g);if(g.addClass("jg-entry"),g.data("jg.loaded")!==!0&&"skipped"!==g.data("jg.loaded"))if(null!==d.settings.rel&&g.attr("rel",d.settings.rel),null!==d.settings.target&&g.attr("target",d.settings.target),null!==h){var i=d.extractImgSrcFromImage(h);if(h.attr("src",i),d.settings.waitThumbnailsLoad===!1){var j=parseFloat(h.attr("width")),k=parseFloat(h.attr("height"));if(!isNaN(j)&&!isNaN(k))return g.data("jg.width",j),g.data("jg.height",k),g.data("jg.loaded","skipped"),c=!0,d.startImgAnalyzer(!1),!0}g.data("jg.loaded",!1),b=!0,d.isSpinnerActive()||d.startLoadingSpinnerAnimation(),d.onImageEvent(i,function(a){g.data("jg.width",a.width),g.data("jg.height",a.height),g.data("jg.loaded",!0),d.startImgAnalyzer(!1)},function(){g.data("jg.loaded","error"),d.startImgAnalyzer(!1)})}else g.data("jg.loaded",!0),g.data("jg.width",g.width()|parseFloat(g.css("width"))|1),g.data("jg.height",g.height()|parseFloat(g.css("height"))|1)}),b||c||this.startImgAnalyzer(!1),this.checkWidth()},c.prototype.checkOrConvertNumber=function(b,c){if("string"===a.type(b[c])&&(b[c]=parseFloat(b[c])),"number"!==a.type(b[c]))throw c+" must be a number";if(isNaN(b[c]))throw"invalid number for "+c},c.prototype.checkSizeRangesSuffixes=function(){if("object"!==a.type(this.settings.sizeRangeSuffixes))throw"sizeRangeSuffixes must be defined and must be an object";var b=[];for(var c in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(c)&&b.push(c);for(var d={0:""},e=0;e<b.length;e++)if("string"===a.type(b[e]))try{var f=parseInt(b[e].replace(/^[a-z]+/,""),10);d[f]=this.settings.sizeRangeSuffixes[b[e]]}catch(g){throw"sizeRangeSuffixes keys must contains correct numbers ("+g+")"}else d[b[e]]=this.settings.sizeRangeSuffixes[b[e]];this.settings.sizeRangeSuffixes=d},c.prototype.retrieveMaxRowHeight=function(){var b={};if("string"===a.type(this.settings.maxRowHeight))this.settings.maxRowHeight.match(/^[0-9]+%$/)?(b.value=parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100,b.isPercentage=!1):(b.value=parseFloat(this.settings.maxRowHeight),b.isPercentage=!0);else{if("number"!==a.type(this.settings.maxRowHeight)){if(this.settings.maxRowHeight===!1||null===this.settings.maxRowHeight||"undefined"==typeof this.settings.maxRowHeight)return null;throw"maxRowHeight must be a number or a percentage"}b.value=this.settings.maxRowHeight,b.isPercentage=!1}if(isNaN(b.value))throw"invalid number for maxRowHeight";return b.isPercentage&&b.value<100&&(b.value=100),b},c.prototype.checkSettings=function(){this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border");var b=["justify","nojustify","left","center","right","hide"];if(-1===b.indexOf(this.settings.lastRow))throw"lastRow must be one of: "+b.join(", ");if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||this.settings.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!==a.type(this.settings.cssAnimation))throw"cssAnimation must be a boolean";if("boolean"!==a.type(this.settings.captions))throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||this.settings.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||this.settings.captionSettings.nonVisibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!==a.type(this.settings.randomize))throw"randomize must be a boolean";if("string"!==a.type(this.settings.selector))throw"selector must be a string";if(this.settings.sort!==!1&&!a.isFunction(this.settings.sort))throw"sort must be false or a comparison function";if(this.settings.filter!==!1&&!a.isFunction(this.settings.filter)&&"string"!==a.type(this.settings.filter))throw"filter must be false, a string or a filter function"},c.prototype.retrieveSuffixRanges=function(){var a=[];for(var b in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(b)&&a.push(parseInt(b,10));return a.sort(function(a,b){return a>b?1:b>a?-1:0}),a},c.prototype.updateSettings=function(b){this.settings=a.extend({},this.settings,b),this.checkSettings(),this.border=this.settings.border>=0?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},a.fn.justifiedGallery=function(b){return this.each(function(d,e){var f=a(e);f.addClass("justified-gallery");var g=f.data("jg.controller");if("undefined"==typeof g){if("undefined"!=typeof b&&null!==b&&"object"!==a.type(b)){if("destroy"===b)return;throw"The argument must be an object"}g=new c(f,a.extend({},a.fn.justifiedGallery.defaults,b)),f.data("jg.controller",g)}else if("norewind"===b);else{if("destroy"===b)return void g.destroy();g.updateSettings(b),g.rewind()}g.updateEntries("norewind"===b)&&g.init()})},a.fn.justifiedGallery.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:!1,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.9,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!0,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,sort:!1,filter:!1,selector:"a, div:not(.spinner)"}}(jQuery);
;(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b():'function'==typeof define&&define.amd?define(b):a.retinajs=b()})(this,function(){'use strict';function a(a){return Array.prototype.slice.call(a)}function b(a){var b=parseInt(a,10);return k<b?k:b}function c(a){return a.hasAttribute('data-no-resize')||(0===a.offsetWidth&&0===a.offsetHeight?(a.setAttribute('width',a.naturalWidth),a.setAttribute('height',a.naturalHeight)):(a.setAttribute('width',a.offsetWidth),a.setAttribute('height',a.offsetHeight))),a}function d(a,b){var d=a.nodeName.toLowerCase(),e=document.createElement('img');e.addEventListener('load',function(){'img'===d?c(a).setAttribute('src',b):a.style.backgroundImage='url('+b+')'}),e.setAttribute('src',b),a.setAttribute(o,!0)}function e(a,c){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,f=b(e);if(c&&1<f){var g=c.replace(l,'@'+f+'x$1');d(a,g)}}function f(a,b,c){1<k&&d(a,c)}function g(b){return b?'function'==typeof b.forEach?b:a(b):'undefined'==typeof document?[]:a(document.querySelectorAll(n))}function h(a){return a.style.backgroundImage.replace(m,'$2')}function i(a){g(a).forEach(function(a){if(!a.getAttribute(o)){var b='img'===a.nodeName.toLowerCase(),c=b?a.getAttribute('src'):h(a),d=a.getAttribute('data-rjs'),g=!isNaN(parseInt(d,10));if(null===d)return;g?e(a,c,d):f(a,c,d)}})}var j='undefined'!=typeof window,k=Math.round(j?window.devicePixelRatio||1:1),l=/(\.[A-z]{3,4}\/?(\?.*)?)$/,m=/url\(('|")?([^)'"]+)('|")?\)/i,n='[data-rjs]',o='data-rjs-processed';return j&&(window.addEventListener('load',function(){i()}),window.retinajs=i),i});
//# sourceMappingURL=retina.min.js.map

;/* == jquery mousewheel plugin == Version: 3.1.11, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.0.2, License: MIT License (MIT) */
(function(h,l,m,d){var e="mCustomScrollbar",a="mCS",k=".mCustomScrollbar",f={setWidth:false,setHeight:false,setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:true,autoHideScrollbar:false,autoExpandScrollbar:false,alwaysShowScrollbar:0,snapAmount:null,snapOffset:0,mouseWheel:{enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false,disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{enable:false,scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:true,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoExpandHorizontalScroll:false,autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:true,updateOnImageLoad:true,updateOnSelectorChange:false},theme:"light",callbacks:{onScrollStart:false,onScroll:false,onTotalScroll:false,onTotalScrollBack:false,whileScrolling:false,onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:true},live:false,liveSelector:null},j=0,o={},c=function(p){if(o[p]){clearTimeout(o[p]);g._delete.call(null,o[p])}},i=(l.attachEvent&&!l.addEventListener)?1:0,n=false,b={init:function(q){var q=h.extend(true,{},f,q),p=g._selector.call(this);if(q.live){var s=q.liveSelector||this.selector||k,r=h(s);if(q.live==="off"){c(s);return}o[s]=setTimeout(function(){r.mCustomScrollbar(q);if(q.live==="once"&&r.length){c(s)}},500)}else{c(s)}q.setWidth=(q.set_width)?q.set_width:q.setWidth;q.setHeight=(q.set_height)?q.set_height:q.setHeight;q.axis=(q.horizontalScroll)?"x":g._findAxis.call(null,q.axis);q.scrollInertia=q.scrollInertia<17?17:q.scrollInertia;if(typeof q.mouseWheel!=="object"&&q.mouseWheel==true){q.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}}q.mouseWheel.scrollAmount=!q.mouseWheelPixels?q.mouseWheel.scrollAmount:q.mouseWheelPixels;q.mouseWheel.normalizeDelta=!q.advanced.normalizeMouseWheelDelta?q.mouseWheel.normalizeDelta:q.advanced.normalizeMouseWheelDelta;q.scrollButtons.scrollType=g._findScrollButtonsType.call(null,q.scrollButtons.scrollType);g._theme.call(null,q);return h(p).each(function(){var u=h(this);if(!u.data(a)){u.data(a,{idx:++j,opt:q,scrollRatio:{y:null,x:null},overflowed:null,bindEvents:false,tweenRunning:false,sequential:{},langDir:u.css("direction"),cbOffsets:null,trigger:null});var w=u.data(a).opt,v=u.data("mcs-axis"),t=u.data("mcs-scrollbar-position"),x=u.data("mcs-theme");if(v){w.axis=v}if(t){w.scrollbarPosition=t}if(x){w.theme=x;g._theme.call(null,w)}g._pluginMarkup.call(this);b.update.call(null,u)}})},update:function(q){var p=q||g._selector.call(this);return h(p).each(function(){var t=h(this);if(t.data(a)){var v=t.data(a),u=v.opt,r=h("#mCSB_"+v.idx+"_container"),s=[h("#mCSB_"+v.idx+"_dragger_vertical"),h("#mCSB_"+v.idx+"_dragger_horizontal")];if(!r.length){return}if(v.tweenRunning){g._stop.call(null,t)}if(t.hasClass("mCS_disabled")){t.removeClass("mCS_disabled")}if(t.hasClass("mCS_destroyed")){t.removeClass("mCS_destroyed")}g._maxHeight.call(this);g._expandContentHorizontally.call(this);if(u.axis!=="y"&&!u.advanced.autoExpandHorizontalScroll){r.css("width",g._contentWidth(r.children()))}v.overflowed=g._overflowed.call(this);g._scrollbarVisibility.call(this);if(u.autoDraggerLength){g._setDraggerLength.call(this)}g._scrollRatio.call(this);g._bindEvents.call(this);var w=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];if(u.axis!=="x"){if(!v.overflowed[0]){g._resetContentPosition.call(this);if(u.axis==="y"){g._unbindEvents.call(this)}else{if(u.axis==="yx"&&v.overflowed[1]){g._scrollTo.call(this,t,w[1].toString(),{dir:"x",dur:0,overwrite:"none"})}}}else{if(s[0].height()>s[0].parent().height()){g._resetContentPosition.call(this)}else{g._scrollTo.call(this,t,w[0].toString(),{dir:"y",dur:0,overwrite:"none"})}}}if(u.axis!=="y"){if(!v.overflowed[1]){g._resetContentPosition.call(this);if(u.axis==="x"){g._unbindEvents.call(this)}else{if(u.axis==="yx"&&v.overflowed[0]){g._scrollTo.call(this,t,w[0].toString(),{dir:"y",dur:0,overwrite:"none"})}}}else{if(s[1].width()>s[1].parent().width()){g._resetContentPosition.call(this)}else{g._scrollTo.call(this,t,w[1].toString(),{dir:"x",dur:0,overwrite:"none"})}}}g._autoUpdate.call(this)}})},scrollTo:function(r,q){if(typeof r=="undefined"||r==null){return}var p=g._selector.call(this);return h(p).each(function(){var u=h(this);if(u.data(a)){var x=u.data(a),w=x.opt,v={trigger:"external",scrollInertia:w.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:false,callbacks:true,onStart:true,onUpdate:true,onComplete:true},s=h.extend(true,{},v,q),y=g._arr.call(this,r),t=s.scrollInertia<17?17:s.scrollInertia;y[0]=g._to.call(this,y[0],"y");y[1]=g._to.call(this,y[1],"x");if(s.moveDragger){y[0]*=x.scrollRatio.y;y[1]*=x.scrollRatio.x}s.dur=t;setTimeout(function(){if(y[0]!==null&&typeof y[0]!=="undefined"&&w.axis!=="x"&&x.overflowed[0]){s.dir="y";s.overwrite="all";g._scrollTo.call(this,u,y[0].toString(),s)}if(y[1]!==null&&typeof y[1]!=="undefined"&&w.axis!=="y"&&x.overflowed[1]){s.dir="x";s.overwrite="none";g._scrollTo.call(this,u,y[1].toString(),s)}},60)}})},stop:function(){var p=g._selector.call(this);return h(p).each(function(){var q=h(this);if(q.data(a)){g._stop.call(null,q)}})},disable:function(q){var p=g._selector.call(this);return h(p).each(function(){var r=h(this);if(r.data(a)){var t=r.data(a),s=t.opt;g._autoUpdate.call(this,"remove");g._unbindEvents.call(this);if(q){g._resetContentPosition.call(this)}g._scrollbarVisibility.call(this,true);r.addClass("mCS_disabled")}})},destroy:function(){var p=g._selector.call(this);return h(p).each(function(){var s=h(this);if(s.data(a)){var u=s.data(a),t=u.opt,q=h("#mCSB_"+u.idx),r=h("#mCSB_"+u.idx+"_container"),v=h(".mCSB_"+u.idx+"_scrollbar");if(t.live){c(p)}g._autoUpdate.call(this,"remove");g._unbindEvents.call(this);g._resetContentPosition.call(this);s.removeData(a);g._delete.call(null,this.mcs);v.remove();q.replaceWith(r.contents());s.removeClass(e+" _"+a+"_"+u.idx+" mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")}})}},g={_selector:function(){return(typeof h(this)!=="object"||h(this).length<1)?k:this},_theme:function(s){var r=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],q=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],p=["minimal","minimal-dark"],u=["minimal","minimal-dark"],t=["minimal","minimal-dark"];s.autoDraggerLength=h.inArray(s.theme,r)>-1?false:s.autoDraggerLength;s.autoExpandScrollbar=h.inArray(s.theme,q)>-1?false:s.autoExpandScrollbar;s.scrollButtons.enable=h.inArray(s.theme,p)>-1?false:s.scrollButtons.enable;s.autoHideScrollbar=h.inArray(s.theme,u)>-1?true:s.autoHideScrollbar;s.scrollbarPosition=h.inArray(s.theme,t)>-1?"outside":s.scrollbarPosition},_findAxis:function(p){return(p==="yx"||p==="xy"||p==="auto")?"yx":(p==="x"||p==="horizontal")?"x":"y"},_findScrollButtonsType:function(p){return(p==="stepped"||p==="pixels"||p==="step"||p==="click")?"stepped":"stepless"},_pluginMarkup:function(){var y=h(this),x=y.data(a),r=x.opt,t=r.autoExpandScrollbar?" mCSB_scrollTools_onDrag_expand":"",B=["<div id='mCSB_"+x.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+x.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_vertical"+t+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+x.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+x.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+x.idx+"_scrollbar mCS-"+r.theme+" mCSB_scrollTools_horizontal"+t+"'><div class='mCSB_draggerContainer'><div id='mCSB_"+x.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],u=r.axis==="yx"?"mCSB_vertical_horizontal":r.axis==="x"?"mCSB_horizontal":"mCSB_vertical",w=r.axis==="yx"?B[0]+B[1]:r.axis==="x"?B[1]:B[0],v=r.axis==="yx"?"<div id='mCSB_"+x.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",s=r.autoHideScrollbar?" mCS-autoHide":"",p=(r.axis!=="x"&&x.langDir==="rtl")?" mCS-dir-rtl":"";if(r.setWidth){y.css("width",r.setWidth)}if(r.setHeight){y.css("height",r.setHeight)}r.setLeft=(r.axis!=="y"&&x.langDir==="rtl")?"989999px":r.setLeft;y.addClass(e+" _"+a+"_"+x.idx+s+p).wrapInner("<div id='mCSB_"+x.idx+"' class='mCustomScrollBox mCS-"+r.theme+" "+u+"'><div id='mCSB_"+x.idx+"_container' class='mCSB_container' style='position:relative; top:"+r.setTop+"; left:"+r.setLeft+";' dir="+x.langDir+" /></div>");var q=h("#mCSB_"+x.idx),z=h("#mCSB_"+x.idx+"_container");if(r.axis!=="y"&&!r.advanced.autoExpandHorizontalScroll){z.css("width",g._contentWidth(z.children()))}if(r.scrollbarPosition==="outside"){if(y.css("position")==="static"){y.css("position","relative")}y.css("overflow","visible");q.addClass("mCSB_outside").after(w)}else{q.addClass("mCSB_inside").append(w);z.wrap(v)}g._scrollButtons.call(this);var A=[h("#mCSB_"+x.idx+"_dragger_vertical"),h("#mCSB_"+x.idx+"_dragger_horizontal")];A[0].css("min-height",A[0].height());A[1].css("min-width",A[1].width())},_contentWidth:function(p){return Math.max.apply(Math,p.map(function(){return h(this).outerWidth(true)}).get())},_expandContentHorizontally:function(){var q=h(this),s=q.data(a),r=s.opt,p=h("#mCSB_"+s.idx+"_container");if(r.advanced.autoExpandHorizontalScroll&&r.axis!=="y"){p.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:(Math.ceil(p[0].getBoundingClientRect().right+0.4)-Math.floor(p[0].getBoundingClientRect().left)),position:"relative"}).unwrap()}},_scrollButtons:function(){var s=h(this),u=s.data(a),t=u.opt,q=h(".mCSB_"+u.idx+"_scrollbar:first"),r=["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />","<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],p=[(t.axis==="x"?r[2]:r[0]),(t.axis==="x"?r[3]:r[1]),r[2],r[3]];if(t.scrollButtons.enable){q.prepend(p[0]).append(p[1]).next(".mCSB_scrollTools").prepend(p[2]).append(p[3])}},_maxHeight:function(){var t=h(this),w=t.data(a),v=w.opt,r=h("#mCSB_"+w.idx),q=t.css("max-height"),s=q.indexOf("%")!==-1,p=t.css("box-sizing");if(q!=="none"){var u=s?t.parent().height()*parseInt(q)/100:parseInt(q);if(p==="border-box"){u-=((t.innerHeight()-t.height())+(t.outerHeight()-t.innerHeight()))}r.css("max-height",Math.round(u))}},_setDraggerLength:function(){var u=h(this),s=u.data(a),p=h("#mCSB_"+s.idx),v=h("#mCSB_"+s.idx+"_container"),y=[h("#mCSB_"+s.idx+"_dragger_vertical"),h("#mCSB_"+s.idx+"_dragger_horizontal")],t=[p.height()/v.outerHeight(false),p.width()/v.outerWidth(false)],q=[parseInt(y[0].css("min-height")),Math.round(t[0]*y[0].parent().height()),parseInt(y[1].css("min-width")),Math.round(t[1]*y[1].parent().width())],r=i&&(q[1]<q[0])?q[0]:q[1],x=i&&(q[3]<q[2])?q[2]:q[3];y[0].css({height:r,"max-height":(y[0].parent().height()-10)}).find(".mCSB_dragger_bar").css({"line-height":q[0]+"px"});y[1].css({width:x,"max-width":(y[1].parent().width()-10)})},_scrollRatio:function(){var t=h(this),v=t.data(a),q=h("#mCSB_"+v.idx),r=h("#mCSB_"+v.idx+"_container"),s=[h("#mCSB_"+v.idx+"_dragger_vertical"),h("#mCSB_"+v.idx+"_dragger_horizontal")],u=[r.outerHeight(false)-q.height(),r.outerWidth(false)-q.width()],p=[u[0]/(s[0].parent().height()-s[0].height()),u[1]/(s[1].parent().width()-s[1].width())];v.scrollRatio={y:p[0],x:p[1]}},_onDragClasses:function(r,t,q){var s=q?"mCSB_dragger_onDrag_expanded":"",p=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag"],u=r.closest(".mCSB_scrollTools");if(t==="active"){r.toggleClass(p[0]+" "+s);u.toggleClass(p[1]);r[0]._draggable=r[0]._draggable?0:1}else{if(!r[0]._draggable){if(t==="hide"){r.removeClass(p[0]);u.removeClass(p[1])}else{r.addClass(p[0]);u.addClass(p[1])}}}},_overflowed:function(){var t=h(this),u=t.data(a),q=h("#mCSB_"+u.idx),s=h("#mCSB_"+u.idx+"_container"),r=u.overflowed==null?s.height():s.outerHeight(false),p=u.overflowed==null?s.width():s.outerWidth(false);return[r>q.height(),p>q.width()]},_resetContentPosition:function(){var t=h(this),v=t.data(a),u=v.opt,q=h("#mCSB_"+v.idx),r=h("#mCSB_"+v.idx+"_container"),s=[h("#mCSB_"+v.idx+"_dragger_vertical"),h("#mCSB_"+v.idx+"_dragger_horizontal")];g._stop(t);if((u.axis!=="x"&&!v.overflowed[0])||(u.axis==="y"&&v.overflowed[0])){s[0].add(r).css("top",0)}if((u.axis!=="y"&&!v.overflowed[1])||(u.axis==="x"&&v.overflowed[1])){var p=dx=0;if(v.langDir==="rtl"){p=q.width()-r.outerWidth(false);dx=Math.abs(p/v.scrollRatio.x)}r.css("left",p);s[1].css("left",dx)}},_bindEvents:function(){var r=h(this),t=r.data(a),s=t.opt;if(!t.bindEvents){g._draggable.call(this);if(s.contentTouchScroll){g._contentDraggable.call(this)}if(s.mouseWheel.enable){function q(){p=setTimeout(function(){if(!h.event.special.mousewheel){q()}else{clearTimeout(p);g._mousewheel.call(r[0])}},1000)}var p;q()}g._draggerRail.call(this);g._wrapperScroll.call(this);if(s.advanced.autoScrollOnFocus){g._focus.call(this)}if(s.scrollButtons.enable){g._buttons.call(this)}if(s.keyboard.enable){g._keyboard.call(this)}t.bindEvents=true}},_unbindEvents:function(){var s=h(this),t=s.data(a),p=a+"_"+t.idx,u=".mCSB_"+t.idx+"_scrollbar",r=h("#mCSB_"+t.idx+",#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,"+u+" .mCSB_draggerContainer,#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal,"+u+">a"),q=h("#mCSB_"+t.idx+"_container");if(t.bindEvents){h(m).unbind("."+p);r.each(function(){h(this).unbind("."+p)});clearTimeout(s[0]._focusTimeout);g._delete.call(null,s[0]._focusTimeout);clearTimeout(t.sequential.step);g._delete.call(null,t.sequential.step);clearTimeout(q[0].onCompleteTimeout);g._delete.call(null,q[0].onCompleteTimeout);t.bindEvents=false}},_scrollbarVisibility:function(q){var t=h(this),v=t.data(a),u=v.opt,p=h("#mCSB_"+v.idx+"_container_wrapper"),r=p.length?p:h("#mCSB_"+v.idx+"_container"),w=[h("#mCSB_"+v.idx+"_scrollbar_vertical"),h("#mCSB_"+v.idx+"_scrollbar_horizontal")],s=[w[0].find(".mCSB_dragger"),w[1].find(".mCSB_dragger")];if(u.axis!=="x"){if(v.overflowed[0]&&!q){w[0].add(s[0]).add(w[0].children("a")).css("display","block");r.removeClass("mCS_no_scrollbar_y mCS_y_hidden")}else{if(u.alwaysShowScrollbar){if(u.alwaysShowScrollbar!==2){s[0].add(w[0].children("a")).css("display","none")}r.removeClass("mCS_y_hidden")}else{w[0].css("display","none");r.addClass("mCS_y_hidden")}r.addClass("mCS_no_scrollbar_y")}}if(u.axis!=="y"){if(v.overflowed[1]&&!q){w[1].add(s[1]).add(w[1].children("a")).css("display","block");r.removeClass("mCS_no_scrollbar_x mCS_x_hidden")}else{if(u.alwaysShowScrollbar){if(u.alwaysShowScrollbar!==2){s[1].add(w[1].children("a")).css("display","none")}r.removeClass("mCS_x_hidden")}else{w[1].css("display","none");r.addClass("mCS_x_hidden")}r.addClass("mCS_no_scrollbar_x")}}if(!v.overflowed[0]&&!v.overflowed[1]){t.addClass("mCS_no_scrollbar")}else{t.removeClass("mCS_no_scrollbar")}},_coordinates:function(q){var p=q.type;switch(p){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[q.originalEvent.pageY,q.originalEvent.pageX];break;case"touchstart":case"touchmove":case"touchend":var r=q.originalEvent.touches[0]||q.originalEvent.changedTouches[0];return[r.pageY,r.pageX];break;default:return[q.pageY,q.pageX]}},_draggable:function(){var u=h(this),s=u.data(a),p=s.opt,r=a+"_"+s.idx,t=["mCSB_"+s.idx+"_dragger_vertical","mCSB_"+s.idx+"_dragger_horizontal"],v=h("#mCSB_"+s.idx+"_container"),w=h("#"+t[0]+",#"+t[1]),A,y,z;w.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r,function(E){E.stopImmediatePropagation();E.preventDefault();if(!g._mouseBtnLeft(E)){return}n=true;if(i){m.onselectstart=function(){return false}}x(false);g._stop(u);A=h(this);var F=A.offset(),G=g._coordinates(E)[0]-F.top,B=g._coordinates(E)[1]-F.left,D=A.height()+F.top,C=A.width()+F.left;if(G<D&&G>0&&B<C&&B>0){y=G;z=B}g._onDragClasses(A,"active",p.autoExpandScrollbar)}).bind("touchmove."+r,function(C){C.stopImmediatePropagation();C.preventDefault();var D=A.offset(),E=g._coordinates(C)[0]-D.top,B=g._coordinates(C)[1]-D.left;q(y,z,E,B)});h(m).bind("mousemove."+r+" pointermove."+r+" MSPointerMove."+r,function(C){if(A){var D=A.offset(),E=g._coordinates(C)[0]-D.top,B=g._coordinates(C)[1]-D.left;if(y===E){return}q(y,z,E,B)}}).add(w).bind("mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r,function(B){if(A){g._onDragClasses(A,"active",p.autoExpandScrollbar);A=null}n=false;if(i){m.onselectstart=null}x(true)});function x(B){var C=v.find("iframe");if(!C.length){return}var D=!B?"none":"auto";C.css("pointer-events",D)}function q(D,E,G,B){v[0].idleTimer=p.scrollInertia<233?250:0;if(A.attr("id")===t[1]){var C="x",F=((A[0].offsetLeft-E)+B)*s.scrollRatio.x}else{var C="y",F=((A[0].offsetTop-D)+G)*s.scrollRatio.y}g._scrollTo(u,F.toString(),{dir:C,drag:true})}},_contentDraggable:function(){var y=h(this),K=y.data(a),I=K.opt,F=a+"_"+K.idx,v=h("#mCSB_"+K.idx),z=h("#mCSB_"+K.idx+"_container"),w=[h("#mCSB_"+K.idx+"_dragger_vertical"),h("#mCSB_"+K.idx+"_dragger_horizontal")],E,G,L,M,C=[],D=[],H,A,u,t,J,x,r=0,q,s=I.axis==="yx"?"none":"all";z.bind("touchstart."+F+" pointerdown."+F+" MSPointerDown."+F,function(N){if(!g._pointerTouch(N)||n){return}var O=z.offset();E=g._coordinates(N)[0]-O.top;G=g._coordinates(N)[1]-O.left}).bind("touchmove."+F+" pointermove."+F+" MSPointerMove."+F,function(Q){if(!g._pointerTouch(Q)||n){return}Q.stopImmediatePropagation();A=g._getTime();var P=v.offset(),S=g._coordinates(Q)[0]-P.top,U=g._coordinates(Q)[1]-P.left,R="mcsLinearOut";C.push(S);D.push(U);if(K.overflowed[0]){var O=w[0].parent().height()-w[0].height(),T=((E-S)>0&&(S-E)>-(O*K.scrollRatio.y))}if(K.overflowed[1]){var N=w[1].parent().width()-w[1].width(),V=((G-U)>0&&(U-G)>-(N*K.scrollRatio.x))}if(T||V){Q.preventDefault()}x=I.axis==="yx"?[(E-S),(G-U)]:I.axis==="x"?[null,(G-U)]:[(E-S),null];z[0].idleTimer=250;if(K.overflowed[0]){B(x[0],r,R,"y","all",true)}if(K.overflowed[1]){B(x[1],r,R,"x",s,true)}});v.bind("touchstart."+F+" pointerdown."+F+" MSPointerDown."+F,function(N){if(!g._pointerTouch(N)||n){return}N.stopImmediatePropagation();g._stop(y);H=g._getTime();var O=v.offset();L=g._coordinates(N)[0]-O.top;M=g._coordinates(N)[1]-O.left;C=[];D=[]}).bind("touchend."+F+" pointerup."+F+" MSPointerUp."+F,function(P){if(!g._pointerTouch(P)||n){return}P.stopImmediatePropagation();u=g._getTime();var N=v.offset(),T=g._coordinates(P)[0]-N.top,V=g._coordinates(P)[1]-N.left;if((u-A)>30){return}J=1000/(u-H);var Q="mcsEaseOut",R=J<2.5,W=R?[C[C.length-2],D[D.length-2]]:[0,0];t=R?[(T-W[0]),(V-W[1])]:[T-L,V-M];var O=[Math.abs(t[0]),Math.abs(t[1])];J=R?[Math.abs(t[0]/4),Math.abs(t[1]/4)]:[J,J];var U=[Math.abs(z[0].offsetTop)-(t[0]*p((O[0]/J[0]),J[0])),Math.abs(z[0].offsetLeft)-(t[1]*p((O[1]/J[1]),J[1]))];x=I.axis==="yx"?[U[0],U[1]]:I.axis==="x"?[null,U[1]]:[U[0],null];q=[(O[0]*4)+I.scrollInertia,(O[1]*4)+I.scrollInertia];var S=parseInt(I.contentTouchScroll)||0;x[0]=O[0]>S?x[0]:0;x[1]=O[1]>S?x[1]:0;if(K.overflowed[0]){B(x[0],q[0],Q,"y",s,false)}if(K.overflowed[1]){B(x[1],q[1],Q,"x",s,false)}});function p(P,N){var O=[N*1.5,N*2,N/1.5,N/2];if(P>90){return N>4?O[0]:O[3]}else{if(P>60){return N>3?O[3]:O[2]}else{if(P>30){return N>8?O[1]:N>6?O[0]:N>4?N:O[2]}else{return N>8?N:O[3]}}}}function B(P,R,S,O,N,Q){if(!P){return}g._scrollTo(y,P.toString(),{dur:R,scrollEasing:S,dir:O,overwrite:N,drag:Q})}},_mousewheel:function(){var s=h(this),u=s.data(a),t=u.opt,q=a+"_"+u.idx,p=h("#mCSB_"+u.idx),r=[h("#mCSB_"+u.idx+"_dragger_vertical"),h("#mCSB_"+u.idx+"_dragger_horizontal")];p.bind("mousewheel."+q,function(z,D){g._stop(s);if(g._disableMousewheel(s,z.target)){return}var B=t.mouseWheel.deltaFactor!=="auto"?parseInt(t.mouseWheel.deltaFactor):(i&&z.deltaFactor<100)?100:z.deltaFactor<40?40:z.deltaFactor||100;if(t.axis==="x"||t.mouseWheel.axis==="x"){var w="x",C=[Math.round(B*u.scrollRatio.x),parseInt(t.mouseWheel.scrollAmount)],y=t.mouseWheel.scrollAmount!=="auto"?C[1]:C[0]>=p.width()?p.width()*0.9:C[0],E=Math.abs(h("#mCSB_"+u.idx+"_container")[0].offsetLeft),A=r[1][0].offsetLeft,x=r[1].parent().width()-r[1].width(),v=z.deltaX||z.deltaY||D}else{var w="y",C=[Math.round(B*u.scrollRatio.y),parseInt(t.mouseWheel.scrollAmount)],y=t.mouseWheel.scrollAmount!=="auto"?C[1]:C[0]>=p.height()?p.height()*0.9:C[0],E=Math.abs(h("#mCSB_"+u.idx+"_container")[0].offsetTop),A=r[0][0].offsetTop,x=r[0].parent().height()-r[0].height(),v=z.deltaY||D}if((w==="y"&&!u.overflowed[0])||(w==="x"&&!u.overflowed[1])){return}if(t.mouseWheel.invert){v=-v}if(t.mouseWheel.normalizeDelta){v=v<0?-1:1}if((v>0&&A!==0)||(v<0&&A!==x)||t.mouseWheel.preventDefault){z.stopImmediatePropagation();z.preventDefault()}g._scrollTo(s,(E-(v*y)).toString(),{dir:w})})},_disableMousewheel:function(r,t){var p=t.nodeName.toLowerCase(),q=r.data(a).opt.mouseWheel.disableOver,s=["select","textarea"];return h.inArray(p,q)>-1&&!(h.inArray(p,s)>-1&&!h(t).is(":focus"))},_draggerRail:function(){var s=h(this),t=s.data(a),q=a+"_"+t.idx,r=h("#mCSB_"+t.idx+"_container"),u=r.parent(),p=h(".mCSB_"+t.idx+"_scrollbar .mCSB_draggerContainer");p.bind("touchstart."+q+" pointerdown."+q+" MSPointerDown."+q,function(v){n=true}).bind("touchend."+q+" pointerup."+q+" MSPointerUp."+q,function(v){n=false}).bind("click."+q,function(z){if(h(z.target).hasClass("mCSB_draggerContainer")||h(z.target).hasClass("mCSB_draggerRail")){g._stop(s);var w=h(this),y=w.find(".mCSB_dragger");if(w.parent(".mCSB_scrollTools_horizontal").length>0){if(!t.overflowed[1]){return}var v="x",x=z.pageX>y.offset().left?-1:1,A=Math.abs(r[0].offsetLeft)-(x*(u.width()*0.9))}else{if(!t.overflowed[0]){return}var v="y",x=z.pageY>y.offset().top?-1:1,A=Math.abs(r[0].offsetTop)-(x*(u.height()*0.9))}g._scrollTo(s,A.toString(),{dir:v,scrollEasing:"mcsEaseInOut"})}})},_focus:function(){var r=h(this),t=r.data(a),s=t.opt,p=a+"_"+t.idx,q=h("#mCSB_"+t.idx+"_container"),u=q.parent();q.bind("focusin."+p,function(x){var w=h(m.activeElement),y=q.find(".mCustomScrollBox").length,v=0;if(!w.is(s.advanced.autoScrollOnFocus)){return}g._stop(r);clearTimeout(r[0]._focusTimeout);r[0]._focusTimer=y?(v+17)*y:0;r[0]._focusTimeout=setTimeout(function(){var C=[w.offset().top-q.offset().top,w.offset().left-q.offset().left],B=[q[0].offsetTop,q[0].offsetLeft],z=[(B[0]+C[0]>=0&&B[0]+C[0]<u.height()-w.outerHeight(false)),(B[1]+C[1]>=0&&B[0]+C[1]<u.width()-w.outerWidth(false))],A=(s.axis==="yx"&&!z[0]&&!z[1])?"none":"all";if(s.axis!=="x"&&!z[0]){g._scrollTo(r,C[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:A,dur:v})}if(s.axis!=="y"&&!z[1]){g._scrollTo(r,C[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:A,dur:v})}},r[0]._focusTimer)})},_wrapperScroll:function(){var q=h(this),r=q.data(a),p=a+"_"+r.idx,s=h("#mCSB_"+r.idx+"_container").parent();s.bind("scroll."+p,function(t){s.scrollTop(0).scrollLeft(0)})},_buttons:function(){var u=h(this),w=u.data(a),v=w.opt,p=w.sequential,r=a+"_"+w.idx,t=h("#mCSB_"+w.idx+"_container"),s=".mCSB_"+w.idx+"_scrollbar",q=h(s+">a");q.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(z){z.preventDefault();if(!g._mouseBtnLeft(z)){return}var y=h(this).attr("class");p.type=v.scrollButtons.scrollType;switch(z.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if(p.type==="stepped"){return}n=true;w.tweenRunning=false;x("on",y);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if(p.type==="stepped"){return}n=false;if(p.dir){x("off",y)}break;case"click":if(p.type!=="stepped"||w.tweenRunning){return}x("on",y);break}function x(A,B){p.scrollAmount=v.snapAmount||v.scrollButtons.scrollAmount;g._sequentialScroll.call(this,u,A,B)}})},_keyboard:function(){var u=h(this),t=u.data(a),q=t.opt,x=t.sequential,s=a+"_"+t.idx,r=h("#mCSB_"+t.idx),w=h("#mCSB_"+t.idx+"_container"),p=w.parent(),v="input,textarea,select,datalist,keygen,[contenteditable='true']";r.attr("tabindex","0").bind("blur."+s+" keydown."+s+" keyup."+s,function(D){switch(D.type){case"blur":if(t.tweenRunning&&x.dir){y("off",null)}break;case"keydown":case"keyup":var A=D.keyCode?D.keyCode:D.which,B="on";if((q.axis!=="x"&&(A===38||A===40))||(q.axis!=="y"&&(A===37||A===39))){if(((A===38||A===40)&&!t.overflowed[0])||((A===37||A===39)&&!t.overflowed[1])){return}if(D.type==="keyup"){B="off"}if(!h(m.activeElement).is(v)){D.preventDefault();D.stopImmediatePropagation();y(B,A)}}else{if(A===33||A===34){if(t.overflowed[0]||t.overflowed[1]){D.preventDefault();D.stopImmediatePropagation()}if(D.type==="keyup"){g._stop(u);var C=A===34?-1:1;if(q.axis==="x"||(q.axis==="yx"&&t.overflowed[1]&&!t.overflowed[0])){var z="x",E=Math.abs(w[0].offsetLeft)-(C*(p.width()*0.9))}else{var z="y",E=Math.abs(w[0].offsetTop)-(C*(p.height()*0.9))}g._scrollTo(u,E.toString(),{dir:z,scrollEasing:"mcsEaseInOut"})}}else{if(A===35||A===36){if(!h(m.activeElement).is(v)){if(t.overflowed[0]||t.overflowed[1]){D.preventDefault();D.stopImmediatePropagation()}if(D.type==="keyup"){if(q.axis==="x"||(q.axis==="yx"&&t.overflowed[1]&&!t.overflowed[0])){var z="x",E=A===35?Math.abs(p.width()-w.outerWidth(false)):0}else{var z="y",E=A===35?Math.abs(p.height()-w.outerHeight(false)):0}g._scrollTo(u,E.toString(),{dir:z,scrollEasing:"mcsEaseInOut"})}}}}}break}function y(F,G){x.type=q.keyboard.scrollType;x.scrollAmount=q.snapAmount||q.keyboard.scrollAmount;if(x.type==="stepped"&&t.tweenRunning){return}g._sequentialScroll.call(this,u,F,G)}})},_sequentialScroll:function(r,u,s){var w=r.data(a),q=w.opt,y=w.sequential,x=h("#mCSB_"+w.idx+"_container"),p=y.type==="stepped"?true:false;switch(u){case"on":y.dir=[(s==="mCSB_buttonRight"||s==="mCSB_buttonLeft"||s===39||s===37?"x":"y"),(s==="mCSB_buttonUp"||s==="mCSB_buttonLeft"||s===38||s===37?-1:1)];g._stop(r);if(g._isNumeric(s)&&y.type==="stepped"){return}t(p);break;case"off":v();if(p||(w.tweenRunning&&y.dir)){t(true)}break}function t(z){var F=y.type!=="stepped",J=!z?1000/60:F?q.scrollInertia/1.5:q.scrollInertia,B=!z?2.5:F?7.5:40,I=[Math.abs(x[0].offsetTop),Math.abs(x[0].offsetLeft)],E=[w.scrollRatio.y>10?10:w.scrollRatio.y,w.scrollRatio.x>10?10:w.scrollRatio.x],C=y.dir[0]==="x"?I[1]+(y.dir[1]*(E[1]*B)):I[0]+(y.dir[1]*(E[0]*B)),H=y.dir[0]==="x"?I[1]+(y.dir[1]*parseInt(y.scrollAmount)):I[0]+(y.dir[1]*parseInt(y.scrollAmount)),G=y.scrollAmount!=="auto"?H:C,D=!z?"mcsLinear":F?"mcsLinearOut":"mcsEaseInOut",A=!z?false:true;if(z&&J<17){G=y.dir[0]==="x"?I[1]:I[0]}g._scrollTo(r,G.toString(),{dir:y.dir[0],scrollEasing:D,dur:J,onComplete:A});if(z){y.dir=false;return}clearTimeout(y.step);y.step=setTimeout(function(){t()},J)}function v(){clearTimeout(y.step);g._stop(r)}},_arr:function(r){var q=h(this).data(a).opt,p=[];if(typeof r==="function"){r=r()}if(!(r instanceof Array)){p[0]=r.y?r.y:r.x||q.axis==="x"?null:r;p[1]=r.x?r.x:r.y||q.axis==="y"?null:r}else{p=r.length>1?[r[0],r[1]]:q.axis==="x"?[null,r[0]]:[r[0],null]}if(typeof p[0]==="function"){p[0]=p[0]()}if(typeof p[1]==="function"){p[1]=p[1]()}return p},_to:function(v,w){if(v==null||typeof v=="undefined"){return}var C=h(this),B=C.data(a),u=B.opt,D=h("#mCSB_"+B.idx+"_container"),r=D.parent(),F=typeof v;if(!w){w=u.axis==="x"?"x":"y"}var q=w==="x"?D.outerWidth(false):D.outerHeight(false),x=w==="x"?D.offset().left:D.offset().top,E=w==="x"?D[0].offsetLeft:D[0].offsetTop,z=w==="x"?"left":"top";switch(F){case"function":return v();break;case"object":if(v.nodeType){var A=w==="x"?h(v).offset().left:h(v).offset().top}else{if(v.jquery){if(!v.length){return}var A=w==="x"?v.offset().left:v.offset().top}}return A-x;break;case"string":case"number":if(g._isNumeric.call(null,v)){return Math.abs(v)}else{if(v.indexOf("%")!==-1){return Math.abs(q*parseInt(v)/100)}else{if(v.indexOf("-=")!==-1){return Math.abs(E-parseInt(v.split("-=")[1]))}else{if(v.indexOf("+=")!==-1){var s=(E+parseInt(v.split("+=")[1]));return s>=0?0:Math.abs(s)}else{if(v.indexOf("px")!==-1&&g._isNumeric.call(null,v.split("px")[0])){return Math.abs(v.split("px")[0])}else{if(v==="top"||v==="left"){return 0}else{if(v==="bottom"){return Math.abs(r.height()-D.outerHeight(false))}else{if(v==="right"){return Math.abs(r.width()-D.outerWidth(false))}else{if(v==="first"||v==="last"){var y=D.find(":"+v),A=w==="x"?h(y).offset().left:h(y).offset().top;return A-x}else{if(h(v).length){var A=w==="x"?h(v).offset().left:h(v).offset().top;return A-x}else{D.css(z,v);b.update.call(null,C[0]);return}}}}}}}}}}break}},_autoUpdate:function(q){var t=h(this),F=t.data(a),z=F.opt,v=h("#mCSB_"+F.idx+"_container");if(q){clearTimeout(v[0].autoUpdate);g._delete.call(null,v[0].autoUpdate);return}var s=v.parent(),p=[h("#mCSB_"+F.idx+"_scrollbar_vertical"),h("#mCSB_"+F.idx+"_scrollbar_horizontal")],D=function(){return[p[0].is(":visible")?p[0].outerHeight(true):0,p[1].is(":visible")?p[1].outerWidth(true):0]},E=y(),x,u=[v.outerHeight(false),v.outerWidth(false),s.height(),s.width(),D()[0],D()[1]],H,B=G(),w;C();function C(){clearTimeout(v[0].autoUpdate);v[0].autoUpdate=setTimeout(function(){if(z.advanced.updateOnSelectorChange){x=y();if(x!==E){r();E=x;return}}if(z.advanced.updateOnContentResize){H=[v.outerHeight(false),v.outerWidth(false),s.height(),s.width(),D()[0],D()[1]];if(H[0]!==u[0]||H[1]!==u[1]||H[2]!==u[2]||H[3]!==u[3]||H[4]!==u[4]||H[5]!==u[5]){r();u=H}}if(z.advanced.updateOnImageLoad){w=G();if(w!==B){v.find("img").each(function(){A(this.src)});B=w}}if(z.advanced.updateOnSelectorChange||z.advanced.updateOnContentResize||z.advanced.updateOnImageLoad){C()}},60)}function G(){var I=0;if(z.advanced.updateOnImageLoad){I=v.find("img").length}return I}function A(L){var I=new Image();function K(M,N){return function(){return N.apply(M,arguments)}}function J(){this.onload=null;r()}I.onload=K(I,J);I.src=L}function y(){if(z.advanced.updateOnSelectorChange===true){z.advanced.updateOnSelectorChange="*"}var I=0,J=v.find(z.advanced.updateOnSelectorChange);if(z.advanced.updateOnSelectorChange&&J.length>0){J.each(function(){I+=h(this).height()+h(this).width()})}return I}function r(){clearTimeout(v[0].autoUpdate);b.update.call(null,t[0])}},_snapAmount:function(r,p,q){return(Math.round(r/p)*p-q)},_stop:function(p){var r=p.data(a),q=h("#mCSB_"+r.idx+"_container,#mCSB_"+r.idx+"_container_wrapper,#mCSB_"+r.idx+"_dragger_vertical,#mCSB_"+r.idx+"_dragger_horizontal");q.each(function(){g._stopTween.call(this)})},_scrollTo:function(q,s,u){var I=q.data(a),E=I.opt,D={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:false,dur:E.scrollInertia,overwrite:"all",callbacks:true,onStart:true,onUpdate:true,onComplete:true},u=h.extend(D,u),G=[u.dur,(u.drag?0:u.dur)],v=h("#mCSB_"+I.idx),B=h("#mCSB_"+I.idx+"_container"),K=E.callbacks.onTotalScrollOffset?g._arr.call(q,E.callbacks.onTotalScrollOffset):[0,0],p=E.callbacks.onTotalScrollBackOffset?g._arr.call(q,E.callbacks.onTotalScrollBackOffset):[0,0];I.trigger=u.trigger;if(E.snapAmount){s=g._snapAmount(s,E.snapAmount,E.snapOffset)}switch(u.dir){case"x":var x=h("#mCSB_"+I.idx+"_dragger_horizontal"),z="left",C=B[0].offsetLeft,H=[v.width()-B.outerWidth(false),x.parent().width()-x.width()],r=[s,(s/I.scrollRatio.x)],L=K[1],J=p[1],A=L>0?L/I.scrollRatio.x:0,w=J>0?J/I.scrollRatio.x:0;break;case"y":var x=h("#mCSB_"+I.idx+"_dragger_vertical"),z="top",C=B[0].offsetTop,H=[v.height()-B.outerHeight(false),x.parent().height()-x.height()],r=[s,(s/I.scrollRatio.y)],L=K[0],J=p[0],A=L>0?L/I.scrollRatio.y:0,w=J>0?J/I.scrollRatio.y:0;break}if(r[1]<0){r=[0,0]}else{if(r[1]>=H[1]){r=[H[0],H[1]]}else{r[0]=-r[0]}}clearTimeout(B[0].onCompleteTimeout);if(!I.tweenRunning&&((C===0&&r[0]>=0)||(C===H[0]&&r[0]<=H[0]))){return}g._tweenTo.call(null,x[0],z,Math.round(r[1]),G[1],u.scrollEasing);g._tweenTo.call(null,B[0],z,Math.round(r[0]),G[0],u.scrollEasing,u.overwrite,{onStart:function(){if(u.callbacks&&u.onStart&&!I.tweenRunning){if(t("onScrollStart")){F();E.callbacks.onScrollStart.call(q[0])}I.tweenRunning=true;g._onDragClasses(x);I.cbOffsets=y()}},onUpdate:function(){if(u.callbacks&&u.onUpdate){if(t("whileScrolling")){F();E.callbacks.whileScrolling.call(q[0])}}},onComplete:function(){if(u.callbacks&&u.onComplete){if(E.axis==="yx"){clearTimeout(B[0].onCompleteTimeout)}var M=B[0].idleTimer||0;B[0].onCompleteTimeout=setTimeout(function(){if(t("onScroll")){F();E.callbacks.onScroll.call(q[0])}if(t("onTotalScroll")&&r[1]>=H[1]-A&&I.cbOffsets[0]){F();E.callbacks.onTotalScroll.call(q[0])}if(t("onTotalScrollBack")&&r[1]<=w&&I.cbOffsets[1]){F();E.callbacks.onTotalScrollBack.call(q[0])}I.tweenRunning=false;B[0].idleTimer=0;g._onDragClasses(x,"hide")},M)}}});function t(M){return I&&E.callbacks[M]&&typeof E.callbacks[M]==="function"}function y(){return[E.callbacks.alwaysTriggerOffsets||C>=H[0]+L,E.callbacks.alwaysTriggerOffsets||C<=-J]}function F(){var O=[B[0].offsetTop,B[0].offsetLeft],P=[x[0].offsetTop,x[0].offsetLeft],M=[B.outerHeight(false),B.outerWidth(false)],N=[v.height(),v.width()];q[0].mcs={content:B,top:O[0],left:O[1],draggerTop:P[0],draggerLeft:P[1],topPct:Math.round((100*Math.abs(O[0]))/(Math.abs(M[0])-N[0])),leftPct:Math.round((100*Math.abs(O[1]))/(Math.abs(M[1])-N[1])),direction:u.dir}}},_tweenTo:function(r,u,s,q,A,t,J){var J=J||{},G=J.onStart||function(){},B=J.onUpdate||function(){},H=J.onComplete||function(){},z=g._getTime(),x,v=0,D=r.offsetTop,E=r.style;if(u==="left"){D=r.offsetLeft}var y=s-D;r._mcsstop=0;if(t!=="none"){C()}p();function I(){if(r._mcsstop){return}if(!v){G.call()}v=g._getTime()-z;F();if(v>=r._mcstime){r._mcstime=(v>r._mcstime)?v+x-(v-r._mcstime):v+x-1;if(r._mcstime<v+1){r._mcstime=v+1}}if(r._mcstime<q){r._mcsid=_request(I)}else{H.call()}}function F(){if(q>0){r._mcscurrVal=w(r._mcstime,D,y,q,A);E[u]=Math.round(r._mcscurrVal)+"px"}else{E[u]=s+"px"}B.call()}function p(){x=1000/60;r._mcstime=v+x;_request=(!l.requestAnimationFrame)?function(K){F();return setTimeout(K,0.01)}:l.requestAnimationFrame;r._mcsid=_request(I)}function C(){if(r._mcsid==null){return}if(!l.requestAnimationFrame){clearTimeout(r._mcsid)}else{l.cancelAnimationFrame(r._mcsid)}r._mcsid=null}function w(M,L,Q,P,N){switch(N){case"linear":case"mcsLinear":return Q*M/P+L;break;case"mcsLinearOut":M/=P;M--;return Q*Math.sqrt(1-M*M)+L;break;case"easeInOutSmooth":M/=P/2;if(M<1){return Q/2*M*M+L}M--;return -Q/2*(M*(M-2)-1)+L;break;case"easeInOutStrong":M/=P/2;if(M<1){return Q/2*Math.pow(2,10*(M-1))+L}M--;return Q/2*(-Math.pow(2,-10*M)+2)+L;break;case"easeInOut":case"mcsEaseInOut":M/=P/2;if(M<1){return Q/2*M*M*M+L}M-=2;return Q/2*(M*M*M+2)+L;break;case"easeOutSmooth":M/=P;M--;return -Q*(M*M*M*M-1)+L;break;case"easeOutStrong":return Q*(-Math.pow(2,-10*M/P)+1)+L;break;case"easeOut":case"mcsEaseOut":default:var O=(M/=P)*M,K=O*M;return L+Q*(0.499999999999997*K*O+-2.5*O*O+5.5*K+-6.5*O+4*M)}}},_getTime:function(){if(l.performance&&l.performance.now){return l.performance.now()}else{if(l.performance&&l.performance.webkitNow){return l.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return new Date().getTime()}}}},_stopTween:function(){var p=this;if(p._mcsid==null){return}if(!l.requestAnimationFrame){clearTimeout(p._mcsid)}else{l.cancelAnimationFrame(p._mcsid)}p._mcsid=null;p._mcsstop=1},_delete:function(r){try{delete r}catch(q){r=null}},_mouseBtnLeft:function(p){return !(p.which&&p.which!==1)},_pointerTouch:function(q){var p=q.originalEvent.pointerType;return !(p&&p!=="touch"&&p!==2)},_isNumeric:function(p){return !isNaN(parseFloat(p))&&isFinite(p)}};h.fn[e]=function(p){if(b[p]){return b[p].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof p==="object"||!p){return b.init.apply(this,arguments)}else{h.error("Method "+p+" does not exist")}}};h[e]=function(p){if(b[p]){return b[p].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof p==="object"||!p){return b.init.apply(this,arguments)}else{h.error("Method "+p+" does not exist")}}};h[e].defaults=f;l[e]=true;h(l).load(function(){h(k)[e]()})})(jQuery,window,document);
;"use strict";var lastScroll=0;var isMobile=false;var isiPhoneiPad=false;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){isMobile=true;}
if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){isiPhoneiPad=true;}
function SetMegamenuPosition(){if($(window).width()>991){setTimeout(function(){var totalHeight=$('nav.navbar').outerHeight();$('.mega-menu').css({top:totalHeight});if($('.navbar-brand-top').length===0)
$('.dropdown.simple-dropdown > .dropdown-menu').css({top:totalHeight});},200);}else{$('.mega-menu').css('top','');$('.dropdown.simple-dropdown > .dropdown-menu').css('top','');}}
function pad(d){return(d<10)?'0'+d.toString():d.toString();}
function isIE(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./))
{return true;}else
{return false;}}
function setPageTitleSpace(){if($('.navbar').hasClass('navbar-top')||$('nav').hasClass('navbar-fixed-top')){if($('.top-space').length>0){var top_space_height=$('.navbar').outerHeight();if($('.top-header-area').length>0){top_space_height=top_space_height+$('.top-header-area').outerHeight();}
$('.top-space').css('margin-top',top_space_height+"px");}}}
function setButtonPosition(){if($(window).width()>767&&$(".swiper-auto-height-container").length>0){var leftPosition=parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-left'));var bottomPosition=parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-bottom'));var bannerWidth=parseInt($('.swiper-auto-height-container .slide-banner').outerWidth());$('.navigation-area').css({'left':bannerWidth+leftPosition+'px','bottom':bottomPosition+'px'});}else if($(".swiper-auto-height-container").length>0){$('.navigation-area').css({'left':'','bottom':''});}}
$(window).on("scroll",init_scroll_navigate);function init_scroll_navigate(){var menu_links=$(".navbar-nav li a");var scrollPos=$(document).scrollTop();scrollPos=scrollPos+60;menu_links.each(function(){var currLink=$(this);var hasPos=currLink.attr("href").indexOf("#");if(hasPos>-1){var res=currLink.attr("href").substring(hasPos);if($(res).length>0){var refElement=$(res);if(refElement.offset().top<=scrollPos&&refElement.offset().top+refElement.height()>scrollPos){menu_links.not(currLink).removeClass("active");currLink.addClass("active");}else{currLink.removeClass("active");}}}});var $window=$(window),$body=$('.bg-background-fade'),$panel=$('.color-code');var scroll=$window.scrollTop()+($window.height()/2);$panel.each(function(){var $this=$(this);if($this.position().top<=scroll&&$this.position().top+$this.height()>scroll){$body.removeClass(function(index,css){return(css.match(/(^|\s)color-\S+/g)||[]).join(' ');});$body.addClass('color-'+$(this).data('color'));}});var headerHeight=$('nav').outerHeight();if(!$('header').hasClass('no-sticky')){if($(document).scrollTop()>=headerHeight){$('header').addClass('sticky');}else if($(document).scrollTop()<=headerHeight){$('header').removeClass('sticky');setTimeout(function(){setPageTitleSpace();},500);}
SetMegamenuPosition();}
var st=$(this).scrollTop();if(st>lastScroll){$('.sticky').removeClass('header-appear');}else
$('.sticky').addClass('header-appear');lastScroll=st;if(lastScroll<=headerHeight)
$('header').removeClass('header-appear');}
function parallax_text(){var window_width=$(window).width();if(window_width>1024){if($('.swiper-auto-slide .swiper-slide').length!==0){$(document).on("mousemove",".swiper-auto-slide .swiper-slide",function(e){var positionX=e.clientX;var positionY=e.clientY;positionX=Math.round(positionX/10)-80;positionY=Math.round(positionY/10)-40;$(this).find('.parallax-text').css({'transform':'translate('+positionX+'px,'+positionY+'px)','transition-duration':'0s'});});$(document).on("mouseout",".swiper-auto-slide .swiper-slide",function(e){$('.parallax-text').css({'transform':'translate(0,0)','transition-duration':'0.5s'});});}}}
function ScrollStop(){return false;}
function ScrollStart(){return true;}
function validationSearchForm(){var error=true;$('#search-header input[type=text]').each(function(index){if(index===0){if($(this).val()===null||$(this).val()===""){$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid red"});error=false;}else{$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid #000"});}}});return error;}
function equalizeHeight(){$(document).imagesLoaded(function(){if($(window).width()<768){$('.equalize').equalize({equalize:'outerHeight',reset:true});$('.equalize.md-equalize-auto').children().css("height","");$('.equalize.sm-equalize-auto').children().css("height","");$('.equalize.xs-equalize-auto').children().css("height","");return false;}else if($(window).width()<992){$('.equalize').equalize({equalize:'outerHeight',reset:true});$('.equalize.md-equalize-auto').children().css("height","");$('.equalize.sm-equalize-auto').children().css("height","");return false;}else if($(window).width()<1199){$('.equalize').equalize({equalize:'outerHeight',reset:true});$('.equalize.md-equalize-auto').children().css("height","");return false;}else{$('.equalize').equalize({equalize:'outerHeight',reset:true});}});}
function feature_dynamic_font_line_height(){if($('.dynamic-font-size').length>0){var site_width=1100;var window_width=$(window).width();if(window_width<site_width){var window_site_width_ratio=window_width/site_width;$('.dynamic-font-size').each(function(){var font_size=$(this).attr('data-fontsize');var line_height=$(this).attr('data-lineheight');if(font_size!=''&&font_size!=undefined){var new_font_size=Math.round(font_size*window_site_width_ratio*1000)/1000;$(this).css('font-size',new_font_size+'px');}
if(line_height!==''&&line_height!==undefined){var new_line_height=Math.round(line_height*window_site_width_ratio*1000)/1000;$(this).css('line-height',new_line_height+'px');}});}else{$('.dynamic-font-size').each(function(){var font_size=$(this).attr('data-fontsize');var line_height=$(this).attr('data-lineheight');if(font_size!==''&&font_size!==undefined){$(this).css('font-size',font_size+'px');}
if(line_height!==''&&line_height!==undefined){$(this).css('line-height',line_height+'px');}});}}}
function stellarParallax(){if($(window).width()>1024){$.stellar();}else{$.stellar('destroy');$('.parallax').css('background-position','');}}
function fullScreenHeight(){var element=$(".full-screen");var $minheight=$(window).height();element.parents('section').imagesLoaded(function(){if($(".top-space .full-screen").length>0){var $headerheight=$("header nav.navbar").outerHeight();$(".top-space .full-screen").css('min-height',$minheight-$headerheight);}else{element.css('min-height',$minheight);}});var minwidth=$(window).width();$(".full-screen-width").css('min-width',minwidth);var sidebarNavHeight=$('.sidebar-nav-style-1').height()-$('.logo-holder').parent().height()-$('.footer-holder').parent().height()-10;$(".sidebar-nav-style-1 .nav").css('height',(sidebarNavHeight));var style2NavHeight=parseInt($('.sidebar-part2').height()-parseInt($('.sidebar-part2 .sidebar-middle').css('padding-top'))-parseInt($('.sidebar-part2 .sidebar-middle').css('padding-bottom'))-parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('margin-bottom')));$(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('height',(style2NavHeight));}
function SetResizeContent(){feature_dynamic_font_line_height();SetMegamenuPosition();setPageTitleSpace();setButtonPosition();parallax_text();stellarParallax();fullScreenHeight();equalizeHeight();}
$(window).resize(function(event){$("nav.navbar.bootsnav ul.nav").each(function(){$("li.dropdown",this).on("mouseenter",function(e){if($(window).width()>991){$(this).find('.equalize').equalize({equalize:'outerHeight',reset:true});return false;}});});setTimeout(function(){SetResizeContent();},500);event.preventDefault();});$(document).ready(function(){"use strict";$("nav.navbar.bootsnav ul.nav").each(function(){$("li.dropdown",this).on("mouseenter",function(){if($(window).width()>991){$(this).find('.equalize').equalize({equalize:'outerHeight',reset:true});return false;}});});$('a[data-toggle="tab"]').on('shown.bs.tab',function(e){var target=$(e.target).attr("href");if($(window).width()>991){$(target).find('.equalize').equalize({equalize:'outerHeight',reset:true});return false;}});var pgurl=window.location.href.substr(window.location.href.lastIndexOf("/")+1);var $hash=window.location.hash.substring(1);if($hash){$hash="#"+$hash;pgurl=pgurl.replace($hash,"");}else{pgurl=pgurl.replace("#","");}
$(".nav li a").each(function(){if($(this).attr("href")==pgurl||$(this).attr("href")==pgurl+'.html'){$(this).parent().addClass("active");$(this).parents('li.dropdown').addClass("active");}});$(window).scroll(function(){if($(this).scrollTop()>150)
$('.scroll-top-arrow').fadeIn('slow');else
$('.scroll-top-arrow').fadeOut('slow');});$(document).on('click','.scroll-top-arrow',function(){$('html, body').animate({scrollTop:0},800);return false;});var swiperFull=new Swiper('.swiper-full-screen',{loop:true,slidesPerView:1,preventClicks:false,allowTouchMove:true,pagination:{el:'.swiper-full-screen-pagination',clickable:true},autoplay:{delay:5000},keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},on:{resize:function(){swiperFull.update();}}});var swiperAutoFade=new Swiper('.swiper-auto-fade',{allowTouchMove:true,loop:true,slidesPerView:1,preventClicks:false,effect:'fade',autoplay:{delay:5000},keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-auto-pagination',clickable:true},on:{resize:function(){swiperAutoFade.update();}}});var swiperSecond=new Swiper('.swiper-slider-second',{allowTouchMove:true,slidesPerView:1,preventClicks:false,keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination-second',clickable:true},on:{resize:function(){swiperSecond.update();}}});var swiperThird=new Swiper('.swiper-slider-third',{allowTouchMove:true,slidesPerView:1,preventClicks:false,keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination-third',clickable:true},on:{resize:function(){swiperThird.update();}}});var swiperNumber=new Swiper('.swiper-number-pagination',{allowTouchMove:true,preventClicks:false,autoplay:{delay:4000,disableOnInteraction:true},pagination:{el:'.swiper-number',clickable:true,renderBullet:function(index,className){return'<span class="'+className+'">'+pad((index+1))+'</span>';}},on:{resize:function(){swiperNumber.update();}}});var swiperVerticalPagination=new Swiper('.swiper-vertical-pagination',{allowTouchMove:true,direction:'vertical',slidesPerView:1,spaceBetween:0,preventClicks:false,mousewheel:{mousewheel:true,sensitivity:1,releaseOnEdges:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},pagination:{el:'.swiper-pagination-vertical',clickable:true},on:{resize:function(){swiperVerticalPagination.update();}}});var swiperClients=new Swiper('.swiper-slider-clients',{allowTouchMove:true,slidesPerView:4,paginationClickable:true,preventClicks:true,autoplay:{delay:3000,disableOnInteraction:true},pagination:{el:null},breakpoints:{1199:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperClients.update();}}});var swiperClients2=new Swiper('.swiper-slider-clients-second',{allowTouchMove:true,slidesPerView:4,paginationClickable:true,preventClicks:true,autoplay:{delay:3000,disableOnInteraction:true},pagination:{el:null},breakpoints:{1199:{slidesPerView:3},991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperClients2.update();}}});var swiperThreeSlides=new Swiper('.swiper-three-slides',{allowTouchMove:true,slidesPerView:3,spaceBetween:30,preventClicks:false,pagination:{el:'.swiper-pagination-three-slides',clickable:true},autoplay:false,keyboard:{enabled:true},navigation:{nextEl:'.swiper-three-slide-next',prevEl:'.swiper-three-slide-prev'},breakpoints:{991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperThreeSlides.update();}}});var swiperFourSlides=new Swiper('.swiper-four-slides',{allowTouchMove:true,slidesPerView:4,spaceBetween:20,preventClicks:false,pagination:{el:'.swiper-pagination-four-slides',clickable:true},autoplay:{delay:3000},keyboard:{enabled:true},navigation:{nextEl:'.swiper-four-slide-next',prevEl:'.swiper-four-slide-prev'},breakpoints:{1199:{slidesPerView:4},991:{slidesPerView:2},767:{slidesPerView:2}},on:{resize:function(){swiperFourSlides.update();}}});var swiperSixSlides=new Swiper('.swiper-six-slides',{allowTouchMove:true,slidesPerView:6,spaceBetween:15,preventClicks:false,pagination:{el:'.swiper-pagination-six-slides',clickable:true},autoplay:false,keyboard:{enabled:true},navigation:{nextEl:'.swiper-six-slide-next',prevEl:'.swiper-six-slide-prev'},breakpoints:{991:{slidesPerView:3},767:{slidesPerView:2}},on:{resize:function(){swiperSixSlides.update();}}});var swiperDemoHeaderStyle=new Swiper('.swiper-demo-header-style',{allowTouchMove:true,loop:true,slidesPerView:4,preventClicks:true,slidesPerGroup:4,pagination:{el:'.swiper-pagination-demo-header-style',clickable:true},autoplay:{delay:3000},keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},breakpoints:{1199:{slidesPerGroup:2,slidesPerView:2},767:{slidesPerGroup:1,slidesPerView:1}},on:{resize:function(){swiperDemoHeaderStyle.update();}}});var $swiperAutoSlideIndex=0;var swiperAutoSlide=new Swiper('.swiper-auto-slide',{allowTouchMove:true,slidesPerView:'auto',centeredSlides:true,spaceBetween:80,preventClicks:false,observer:true,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:true,hide:false,snapOnRelease:true},autoplay:{delay:3000},mousewheel:{invert:false},keyboard:{enabled:true},navigation:{nextEl:'.swiper-next-style2',prevEl:'.swiper-prev-style2'},breakpoints:{1199:{spaceBetween:60},960:{spaceBetween:30},767:{spaceBetween:15}},on:{resize:function(){swiperAutoSlide.update();}}});if($(window).width()>767){var swiperBottomScrollbarFull=new Swiper('.swiper-bottom-scrollbar-full',{allowTouchMove:true,slidesPerView:'auto',grabCursor:true,preventClicks:false,spaceBetween:30,keyboardControl:true,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:true,hide:false,snapOnRelease:true},mousewheel:{enable:true},keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}});}
var swiperAutoHieght=new Swiper('.swiper-auto-height-container',{allowTouchMove:true,effect:'fade',loop:true,autoHeight:true,pagination:{el:'.swiper-auto-height-pagination',clickable:true},autoplay:{delay:3000},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},on:{resize:function(){swiperAutoHieght.update();}}});var swiperMultyRow=new Swiper('.swiper-multy-row-container',{allowTouchMove:true,slidesPerView:4,spaceBetween:15,pagination:{el:'.swiper-multy-row-pagination',clickable:true},autoplay:{delay:3000,disableOnInteraction:true},navigation:{nextEl:'.swiper-portfolio-next',prevEl:'.swiper-portfolio-prev'},breakpoints:{991:{slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperMultyRow.update();}}});var swiperBlog=new Swiper('.swiper-blog',{allowTouchMove:true,slidesPerView:"auto",centeredSlides:true,spaceBetween:15,preventClicks:false,loop:true,loopedSlides:3,pagination:{el:'.swiper-blog-pagination',clickable:true},autoplay:{delay:5000,disableOnInteraction:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},on:{resize:function(){swiperBlog.update();}}});var swiperPresentation=new Swiper('.swiper-presentation',{allowTouchMove:true,slidesPerView:4,centeredSlides:true,spaceBetween:30,preventClicks:true,loop:true,loopedSlides:6,pagination:{el:'.swiper-presentation-pagination',clickable:true},autoplay:{delay:3000,disableOnInteraction:true},keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},breakpoints:{991:{spaceBetween:15,slidesPerView:2},767:{slidesPerView:1}},on:{resize:function(){swiperPresentation.update();}}});var resizeId;$(window).resize(function(){if($(".swiper-auto-slide").length>0&&swiperAutoSlide){$swiperAutoSlideIndex=swiperAutoSlide.activeIndex;swiperAutoSlide.detachEvents();swiperAutoSlide.destroy(true,false);swiperAutoSlide=undefined;$(".swiper-auto-slide .swiper-wrapper").css("transform","").css("transition-duration","");$(".swiper-auto-slide .swiper-slide").css("margin-right","");setTimeout(function(){swiperAutoSlide=new Swiper('.swiper-auto-slide',{allowTouchMove:true,slidesPerView:'auto',centeredSlides:true,spaceBetween:80,preventClicks:false,mousewheelControl:true,observer:true,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:true,hide:false,snapOnRelease:true},autoplay:{delay:3000},keyboard:{enabled:true},navigation:{nextEl:'.swiper-next-style2',prevEl:'.swiper-prev-style2'},breakpoints:{1199:{spaceBetween:60},960:{spaceBetween:30},767:{spaceBetween:15}},on:{resize:function(){swiperAutoSlide.update();}}});swiperAutoSlide.slideTo($swiperAutoSlideIndex,1000,false);},1000);}
if($(".swiper-bottom-scrollbar-full").length>0){clearTimeout(resizeId);resizeId=setTimeout(doneResizing,1000);}
setTimeout(function(){if($('.swiper-full-screen').length>0&&swiperFull)
{swiperFull.update();}
if($('.swiper-auto-fade').length>0&&swiperAutoFade)
{swiperAutoFade.update();}
if($('.swiper-slider-second').length>0&&swiperSecond)
{swiperSecond.update();}
if($('.swiper-slider-third').length>0&&swiperThird)
{swiperThird.update();}
if($('.swiper-number-pagination').length>0&&swiperNumber)
{swiperNumber.update();}
if($('.swiper-vertical-pagination').length>0&&swiperVerticalPagination)
{swiperVerticalPagination.update();}
if($('.swiper-slider-clients').length>0&&swiperClients)
{swiperClients.update();}
if($('.swiper-slider-clients-second').length>0&&swiperClients2)
{swiperClients2.update();}
if($('.swiper-three-slides').length>0&&swiperThreeSlides)
{swiperThreeSlides.update();}
if($('.swiper-four-slides').length>0&&swiperFourSlides)
{swiperFourSlides.update();}
if($('.swiper-six-slides').length>0&&swiperSixSlides)
{swiperSixSlides.update();}
if($('.swiper-demo-header-style').length>0&&swiperDemoHeaderStyle)
{swiperDemoHeaderStyle.update();}
if($('.swiper-auto-slide').length>0&&swiperAutoSlide)
{swiperAutoSlide.update();}
if($('.swiper-auto-height-container').length>0&&swiperAutoHieght)
{swiperAutoHieght.update();}
if($('.swiper-multy-row-container').length>0&&swiperMultyRow)
{swiperMultyRow.update();}
if($('.swiper-blog').length>0&&swiperBlog)
{swiperBlog.update();}
if($('.swiper-presentation').length>0&&swiperPresentation)
{swiperPresentation.update();}},500);if(isIE()){setTimeout(function(){if($('.swiper-full-screen').length>0&&swiperFull)
{swiperFull.update();}
if($('.swiper-auto-fade').length>0&&swiperAutoFade)
{swiperAutoFade.update();}
if($('.swiper-slider-second').length>0&&swiperSecond)
{swiperSecond.update();}
if($('.swiper-slider-third').length>0&&swiperThird)
{swiperThird.update();}
if($('.swiper-number-pagination').length>0&&swiperNumber)
{swiperNumber.update();}
if($('.swiper-vertical-pagination').length>0&&swiperVerticalPagination)
{swiperVerticalPagination.update();}
if($('.swiper-slider-clients').length>0&&swiperClients)
{swiperClients.update();}
if($('.swiper-slider-clients-second').length>0&&swiperClients2)
{swiperClients2.update();}
if($('.swiper-three-slides').length>0&&swiperThreeSlides)
{swiperThreeSlides.update();}
if($('.swiper-four-slides').length>0&&swiperFourSlides)
{swiperFourSlides.update();}
if($('.swiper-six-slides').length>0&&swiperSixSlides)
{swiperSixSlides.update();}
if($('.swiper-demo-header-style').length>0&&swiperDemoHeaderStyle)
{swiperDemoHeaderStyle.update();}
if($('.swiper-auto-slide').length>0&&swiperAutoSlide)
{swiperAutoSlide.update();}
if($('.swiper-auto-height-container').length>0&&swiperAutoHieght)
{swiperAutoHieght.update();}
if($('.swiper-multy-row-container').length>0&&swiperMultyRow)
{swiperMultyRow.update();}
if($('.swiper-blog').length>0&&swiperBlog)
{swiperBlog.update();}
if($('.swiper-presentation').length>0&&swiperPresentation)
{swiperPresentation.update();}},500);}});function doneResizing(){if(swiperBottomScrollbarFull){swiperBottomScrollbarFull.detachEvents();swiperBottomScrollbarFull.destroy(true,true);swiperBottomScrollbarFull=undefined;}
$(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform","").css("transition-duration","");$(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right","");$('.swiper-bottom-scrollbar-full .swiper-wrapper').removeAttr('style');$('.swiper-bottom-scrollbar-full .swiper-slide').removeAttr('style');if($(window).width()>767){setTimeout(function(){swiperBottomScrollbarFull=new Swiper('.swiper-bottom-scrollbar-full',{allowTouchMove:true,slidesPerView:'auto',grabCursor:true,preventClicks:false,spaceBetween:30,keyboardControl:true,speed:1000,pagination:{el:null},scrollbar:{el:'.swiper-scrollbar',draggable:true,hide:false,snapOnRelease:true},mousewheel:{enable:true},keyboard:{enabled:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}});},500);}}
var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';$(document).on('click.smoothscroll','a.scrollto',function(event){event.preventDefault();var target=this.hash;if($(target).length!=0){$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target;});}});if($('.full-width-pull-menu').length>0){$(document).on('click','.full-width-pull-menu .inner-link',function(e){$(".full-width-pull-menu .close-button-menu").trigger("click");var _this=$(this);setTimeout(function(){var target=_this.attr("href");if($(target).length>0){$('html, body').stop().animate({'scrollTop':$(target).offset().top});}},500);});}
if($('.navbar-top').length>0||$('.navbar-scroll-top').length>0||$('.nav-top-scroll').length>0){$('.inner-link').smoothScroll({speed:900,offset:0});}else{$('.inner-link').smoothScroll({speed:900,offset:-59});}
$('.section-link').smoothScroll({speed:900,offset:1});if($('.chart1').length>0){$('.chart1').appear();$('.chart1').easyPieChart({barColor:'#929292',trackColor:'#d9d9d9',scaleColor:false,easing:'easeOutBounce',scaleLength:1,lineCap:'round',lineWidth:3,size:150,animate:{duration:2000,enabled:true},onStep:function(from,to,percent){$(this.el).find('.percent').text(Math.round(percent));}});$(document.body).on('appear','.chart1',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).data('easyPieChart').update(0).update($(this).data('percent'));}});}
if($('.chart2').length>0){$('.chart2').appear();$('.chart2').easyPieChart({easing:'easeOutCirc',barColor:'#ff214f',trackColor:'#c7c7c7',scaleColor:false,scaleLength:1,lineCap:'round',lineWidth:2,size:120,animate:{duration:2000,enabled:true},onStep:function(from,to,percent){$(this.el).find('.percent').text(Math.round(percent));}});$(document.body).on('appear','.chart2',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).data('easyPieChart').update(0).update($(this).data('percent'));}});}
if($('.chart3').length>0){$('.chart3').appear();$('.chart3').easyPieChart({easing:'easeOutCirc',barColor:'#ff214f',trackColor:'',scaleColor:false,scaleLength:1,lineCap:'round',lineWidth:3,size:140,animate:{duration:2000,enabled:true},onStep:function(from,to,percent){$(this.el).find('.percent').text(Math.round(percent));}});$(document.body).on('appear','.chart3',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).data('easyPieChart').update(0).update($(this).data('percent'));}});}
var $portfolio_filter=$('.portfolio-grid');$portfolio_filter.imagesLoaded(function(){$portfolio_filter.isotope({layoutMode:'masonry',itemSelector:'.grid-item',percentPosition:true,masonry:{columnWidth:'.grid-sizer'}});$portfolio_filter.isotope();});var $grid_selectors=$('.portfolio-filter > li > a');$grid_selectors.on('click',function(){$grid_selectors.parent().removeClass('active');$(this).parent().addClass('active');var selector=$(this).attr('data-filter');$portfolio_filter.find('.grid-item').removeClass('animated').css("visibility","");$portfolio_filter.find('.grid-item').each(function(){wow.removeBox(this);$(this).css("-webkit-animation","none");$(this).css("-moz-animation","none");$(this).css("-ms-animation","none");$(this).css("animation","none");});$portfolio_filter.isotope({filter:selector});return false;});$(window).resize(function(){if(!isMobile&&!isiPhoneiPad){$portfolio_filter.imagesLoaded(function(){setTimeout(function(){$portfolio_filter.find('.grid-item').removeClass('wow').removeClass('animated');$portfolio_filter.isotope('layout');},300);});}});var $blog_filter=$('.blog-grid');$blog_filter.imagesLoaded(function(){$blog_filter.isotope({layoutMode:'masonry',itemSelector:'.grid-item',percentPosition:true,masonry:{columnWidth:'.grid-sizer'}});});$(window).resize(function(){setTimeout(function(){$blog_filter.find('.grid-item').removeClass('wow').removeClass('animated');$blog_filter.isotope('layout');},300);});$('.lightbox-gallery').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-fade',fixedContentPos:true,closeBtnInside:false,gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]}});var lightboxgallerygroups={};$('.lightbox-group-gallery-item').each(function(){var id=$(this).attr('data-group');if(!lightboxgallerygroups[id]){lightboxgallerygroups[id]=[];}
lightboxgallerygroups[id].push(this);});$.each(lightboxgallerygroups,function(){$(this).magnificPopup({type:'image',closeOnContentClick:true,closeBtnInside:false,gallery:{enabled:true}});});$('.lightbox-portfolio').magnificPopup({delegate:'.gallery-link',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-fade',fixedContentPos:true,closeBtnInside:false,gallery:{enabled:true,navigateByImgClick:false,preload:[0,1]}});$('.single-image-lightbox').magnificPopup({type:'image',closeOnContentClick:true,fixedContentPos:true,closeBtnInside:false,mainClass:'mfp-no-margins mfp-with-zoom',image:{verticalFit:true},zoom:{enabled:true,duration:300}});$('.zoom-gallery').magnificPopup({delegate:'a',type:'image',mainClass:'mfp-with-zoom mfp-img-mobile',fixedContentPos:true,closeBtnInside:false,image:{verticalFit:true,titleSrc:function(item){return item.el.attr('title');}},gallery:{enabled:true},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}}});$('.modal-popup').magnificPopup({type:'inline',preloader:false,blackbg:true,callbacks:{open:function(){$('html').css('margin-right',0);}}});$(document).on('click','.popup-modal-dismiss',function(e){e.preventDefault();$.magnificPopup.close();});$('.popup-with-zoom-anim').magnificPopup({type:'inline',fixedContentPos:false,fixedBgPos:true,overflowY:'auto',closeBtnInside:true,preloader:false,midClick:true,removalDelay:300,blackbg:true,mainClass:'my-mfp-zoom-in'});$('.popup-with-move-anim').magnificPopup({type:'inline',fixedContentPos:false,fixedBgPos:true,overflowY:'auto',closeBtnInside:true,preloader:false,midClick:true,removalDelay:300,blackbg:true,mainClass:'my-mfp-slide-bottom'});$('.popup-with-form').magnificPopup({type:'inline',preloader:false,closeBtnInside:false,fixedContentPos:true,focus:'#name',callbacks:{beforeOpen:function(){if($(window).width()<700){this.st.focus=false;}else{this.st.focus='#name';}}}});$('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({disableOn:0,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:"auto",closeBtnInside:false});$('.ajax-popup').magnificPopup({type:'ajax',alignTop:true,fixedContentPos:true,overflowY:'scroll',callbacks:{open:function(){$('.navbar .collapse').removeClass('in');$('.navbar a.dropdown-toggle').addClass('collapsed');}}});$("ul.mega-menu-full").each(function(idx,elm){var megaMenuWidth=0;$(this).children('li').each(function(idx,elm){var LIheight=0;megaMenuWidth+=$(this).outerWidth();});$(this).width(megaMenuWidth+95);megaMenuWidth=0;});$(".fit-videos").fitVids();$("#success-subscribe-newsletter").hide();$("#success-subscribe-newsletter2").hide();$("#success-contact-form").hide();$("#success-project-contact-form").hide();$("#success-contact-form-2").hide();$("#success-contact-form-3").hide();$("#success-project-contact-form-4").hide();$(document).on("click",'#button-subscribe-newsletter',function(){var error=ValidationsubscribenewsletterForm();if(error){$.ajax({type:"POST",url:"email-templates/subscribe-newsletter.php",data:$("#subscribenewsletterform").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-subscribe-newsletter").html(result);$("#success-subscribe-newsletter").fadeIn("slow");$('#success-subscribe-newsletter').delay(4000).fadeOut("slow");}});}});function ValidationsubscribenewsletterForm(){var error=true;$('#subscribenewsletterform input[type=text]').each(function(index){if(index==0){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#subscribenewsletterform").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#subscribenewsletterform").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
$(document).on("click",'#button-subscribe-newsletter2',function(){var error=ValidationsubscribenewsletterForm2();if(error){$.ajax({type:"POST",url:"email-templates/subscribe-newsletter.php",data:$("#subscribenewsletterform2").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-subscribe-newsletter2").html(result);$("#success-subscribe-newsletter2").fadeIn("slow");$('#success-subscribe-newsletter2').delay(4000).fadeOut("slow");}});}});function ValidationsubscribenewsletterForm2(){var error=true;$('#subscribenewsletterform2 input[type=text]').each(function(index){if(index==0){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#subscribenewsletterform2").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#subscribenewsletterform2").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
$(document).on("click",'#contact-us-button',function(){var error=ValidationContactForm();if(error){$.ajax({type:"POST",url:"email-templates/contact.php",data:$("#contact-form").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-contact-form").html(result);$("#success-contact-form").fadeIn("slow");$('#success-contact-form').delay(4000).fadeOut("slow");}});}});function ValidationContactForm(){var error=true;$('#contact-form input[type=text]').each(function(index){if(index==0){if($(this).val()==null||$(this).val()==""){$("#contact-form").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#contact-form").find("input:eq("+index+")").removeClass("required-error");}}else if(index==1){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#contact-form").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#contact-form").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
$('#contact-us-button-2').on("click",function(){var error=ValidationContactForm2();if(error){$.ajax({type:"POST",url:"email-templates/contact.php",data:$("#contact-form-2").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-contact-form-2").html(result);$("#success-contact-form-2").fadeIn("slow");$('#success-contact-form-2').delay(4000).fadeOut("slow");}});}});function ValidationContactForm2(){var error=true;$('#contact-form-2 input[type=text]').each(function(index){if(index==0){if($(this).val()==null||$(this).val()==""){$("#contact-form-2").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#contact-form-2").find("input:eq("+index+")").removeClass("required-error");}}else if(index==1){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#contact-form-2").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#contact-form-2").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
$(document).on("click",'#contact-us-button-3',function(){var error=ValidationContactForm3();if(error){$.ajax({type:"POST",url:"email-templates/contact.php",data:$("#contact-form-3").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-contact-form-3").html(result);$("#success-contact-form-3").fadeIn("slow");$('#success-contact-form-3').delay(4000).fadeOut("slow");}});}});function ValidationContactForm3(){var error=true;$('#contact-form-3 input[type=text]').each(function(index){if(index==0){if($(this).val()==null||$(this).val()==""){$("#contact-form-3").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#contact-form-3").find("input:eq("+index+")").removeClass("required-error");}}else if(index==1){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#contact-form-3").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#contact-form-3").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
$(document).on("click",'#project-contact-us-button',function(){var error=ValidationProjectContactForm();if(error){$.ajax({type:"POST",url:"email-templates/project-contact.php",data:$("#project-contact-form").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-project-contact-form").html(result);$("#success-project-contact-form").fadeIn("slow");$('#success-project-contact-form').delay(4000).fadeOut("slow");}});}});function ValidationProjectContactForm(){var error=true;$('#project-contact-form input[type=text]').each(function(index){if(index==0){if($(this).val()==null||$(this).val()==""){$("#project-contact-form").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#project-contact-form").find("input:eq("+index+")").removeClass("required-error");}}else if(index==2){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#project-contact-form").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#project-contact-form").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
$(document).on("click",'#project-contact-us-4-button',function(){var error=ValidationProjectContactForm4();if(error){$.ajax({type:"POST",url:"email-templates/project-contact.php",data:$("#project-contact-form-4").serialize(),success:function(result){$('input[type=text],textarea').each(function(){$(this).val('');});$("#success-project-contact-form-4").html(result);$("#success-project-contact-form-4").fadeIn("slow");$('#success-project-contact-form-4').delay(4000).fadeOut("slow");}});}});function ValidationProjectContactForm4(){var error=true;$('#project-contact-form-4 input[type=text]').each(function(index){if(index==0){if($(this).val()==null||$(this).val()==""){$("#project-contact-form-4").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#project-contact-form-4").find("input:eq("+index+")").removeClass("required-error");}}else if(index==2){if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){$("#project-contact-form-4").find("input:eq("+index+")").addClass("required-error");error=false;}else{$("#project-contact-form-4").find("input:eq("+index+")").removeClass("required-error");}}});return error;}
var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:false,live:true});$(window).imagesLoaded(function(){wow.init();});$(function($){animatecounters();});function animatecounters(){$('.timer').each(count);function count(options){var $this=$(this);options=$.extend({},options||{},$this.data('countToOptions')||{});$this.countTo(options);}}
$('.timer').appear();$(document.body).on('appear','.timer',function(e){if(!$(this).hasClass('appear')){animatecounters();$(this).addClass('appear');}});$('.countdown').countdown($('.countdown').attr("data-enddate")).on('update.countdown',function(event){$(this).html(event.strftime(''+'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>'+'<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'+'<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'+'<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'));});$(document).on('click','.right-menu-button',function(e){$('body').toggleClass('left-nav-on');});$(document).on('click','.btn-hamburger',function(){$('.hamburger-menu').toggleClass('show-menu');$('body').removeClass('show-menu');});$(document).on('click','#mobileToggleSidenav',function(){$(this).closest('nav').toggleClass('sidemenu-open');});$(document).imagesLoaded(function(){if($(".justified-gallery").length>0){$(".justified-gallery").justifiedGallery({rowHeight:400,maxRowHeight:false,captions:true,margins:10,waitThumbnailsLoad:true});}});$('.atr-nav').on("click",function(){$(".atr-div").append("<a class='close-cross' href='#'>X</a>");$(".atr-div").animate({width:"toggle"});});$('.close-cross').on("click",function(){$(".atr-div").hide();});var menuRight=document.getElementById('cbp-spmenu-s2'),showRightPush=document.getElementById('showRightPush'),body=document.body;if(showRightPush){showRightPush.onclick=function(){classie.toggle(this,'active');if(menuRight)
classie.toggle(menuRight,'cbp-spmenu-open');};}
var test=document.getElementById('close-pushmenu');if(test){test.onclick=function(){classie.toggle(this,'active');if(menuRight)
classie.toggle(menuRight,'cbp-spmenu-open');};}
$(".blog-header-style1 li").hover(function(){$('.blog-header-style1 li.blog-column-active').removeClass('blog-column-active');$(this).addClass('blog-column-active');},function(){$(this).removeClass('blog-column-active');$('.blog-header-style1 li:first-child').addClass('blog-column-active');});$('.big-menu-open').on("click",function(){$('.big-menu-right').addClass("open");});$('.big-menu-close').on("click",function(){$('.big-menu-right').removeClass("open");});if($('#instaFeed-style1').length!=0){var instaFeedStyle1=new Instafeed({target:'instaFeed-style1',get:'user',userId:5640046896,limit:'8',accessToken:'5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',resolution:"low_resolution",error:{template:'<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'},template:'<div class="col-md-3 col-sm-6 col-xs-12 instafeed-style1"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><div class="insta-counts"><span><i class="ti-heart"></i> <span class="count-number">{{likes}}</span></span><span><i class="ti-comment"></i> <span class="count-number">{{comments}}</span></span></div></a></div>'});instaFeedStyle1.run();}
if($('#instaFeed-aside').length!=0){var instaFeedAside=new Instafeed({target:'instaFeed-aside',get:'user',userId:5640046896,limit:'6',accessToken:'5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',resolution:"low_resolution",after:function(){equalizeHeight();},error:{template:'<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'},template:'<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i>{{likes}}</span></a></figure></li>'});instaFeedAside.run();}
if($('#instaFeed-footer').length!=0){var instaFeedFooter=new Instafeed({target:'instaFeed-footer',get:'user',userId:5640046896,limit:'6',accessToken:'5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',resolution:"low_resolution",after:function(){equalizeHeight();},error:{template:'<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'},template:'<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i><span>{{likes}}</span></span></a></figure></li>'});instaFeedFooter.run();}
if($("#rev_slider_151_1").revolution==undefined){}else{$("#rev_slider_151_1").show().revolution({sliderType:"standard",jsFileLocation:"revolution/js/",sliderLayout:"fullscreen",dottedOverlay:"none",delay:9000,navigation:{keyboardNavigation:"off",keyboard_direction:"vertical",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"off",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:false},arrows:{style:"uranus",enable:true,hide_onmobile:false,hide_over:479,hide_onleave:false,tmp:'',left:{h_align:"left",v_align:"center",h_offset:0,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:0,v_offset:0}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1240,1024,778,480],gridheight:[868,768,960,720],lazyType:"none",scrolleffect:{blur:"on",maxblur:"20",on_slidebg:"on",direction:"top",multiplicator:"2",multiplicator_layers:"2",tilt:"10",disable_on_mobile:"off"},parallax:{type:"scroll",origo:"slidercenter",speed:400,levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55]},shadow:0,spinner:"spinner3",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0px",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:false,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:false}});}
if($("#rev_slider_1174_1").revolution==undefined){}else{$("#rev_slider_1174_1").show().revolution({sliderType:"hero",jsFileLocation:"revolution/js/",sliderLayout:"fullscreen",dottedOverlay:"none",delay:9000,navigation:{},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1240,1024,778,480],gridheight:[868,768,960,720],lazyType:"none",parallax:{type:"scroll",origo:"slidercenter",speed:400,levels:[10,15,20,25,30,35,40,-10,-15,-20,-25,-30,-35,-40,-45,55]},shadow:0,spinner:"off",autoHeight:"off",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:false,fallbacks:{simplifyAll:"off",disableFocusListener:false}});}
if($("#rev_slider_1078_1").revolution==undefined){}else{$("#rev_slider_1078_1").show().revolution({sliderType:"standard",jsFileLocation:"revolution/js/",sliderLayout:"fullscreen",dottedOverlay:"none",delay:9000,navigation:{keyboardNavigation:"on",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"off",touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:false},arrows:{style:"zeus",enable:true,hide_onmobile:true,hide_under:600,hide_onleave:true,hide_delay:200,hide_delay_mobile:1200,tmp:'<div class="tp-title-wrap">   <div class="tp-arr-imgholder"></div> </div>',left:{h_align:"left",v_align:"center",h_offset:30,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:30,v_offset:0}},bullets:{enable:true,hide_onmobile:false,hide_under:300,style:"hermes",hide_onleave:false,hide_delay:200,hide_delay_mobile:1200,direction:"horizontal",h_align:"center",v_align:"bottom",h_offset:0,v_offset:30,space:8,tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'}},viewPort:{enable:true,outof:"pause",visible_area:"80%",presize:false},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1240,1024,778,480],gridheight:[600,600,500,400],lazyType:"none",parallax:{type:"mouse",origo:"slidercenter",speed:2000,levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55]},shadow:0,spinner:"off",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:false,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:false}});}
$('.header-search-form').magnificPopup({mainClass:'mfp-fade',closeOnBgClick:true,preloader:false,fixedContentPos:false,closeBtnInside:false,callbacks:{open:function(){setTimeout(function(){$('.search-input').focus();},500);$('#search-header').parent().addClass('search-popup');if(!isMobile){$('body').addClass('overflow-hidden');$('body').addClass('width-100');document.onmousewheel=ScrollStop;}else{$('body, html').on('touchmove',function(e){e.preventDefault();});}},close:function(){if(!isMobile){$('body').removeClass('overflow-hidden');$('body').removeClass('width-100');$('#search-header input[type=text]').each(function(index){if(index==0){$(this).val('');$("#search-header").find("input:eq("+index+")").css({"border":"none","border-bottom":"2px solid rgba(255,255,255,0.5)"});}});document.onmousewheel=ScrollStart;}else{$('body, html').unbind('touchmove');}}}});$("input.search-input").on("keypress",function(event){if(event.which==13&&!isMobile){$("button.search-button").trigger("click");event.preventDefault();}});$("input.search-input").on("keyup",function(event){if($(this).val()==null||$(this).val()==""){$(this).css({"border":"none","border-bottom":"2px solid red"});}else{$(this).css({"border":"none","border-bottom":"2px solid rgba(255,255,255,0.5)"});}});$("form.search-form, form.search-form-result").submit(function(event){var error=validationSearchForm();if(error){var action=$(this).attr('action');action=action=='#'||action==''?'blog-grid-3columns.html':action;action=action+'?'+$(this).serialize();window.location=action;}
event.preventDefault();});$(document).on("click",'.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart',function(e){e.preventDefault();});$(document).on('touchstart click','body',function(e){if($(window).width()<992){if(!$('.navbar-collapse').has(e.target).is('.navbar-collapse')&&$('.navbar-collapse').hasClass('in')&&!$(e.target).hasClass('navbar-toggle')){$('.navbar-collapse').collapse('hide');}}else{if(!$('.navbar-collapse').has(e.target).is('.navbar-collapse')&&$('.navbar-collapse ul').hasClass('in')){$('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');$('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');$('.navbar-collapse a.dropdown-toggle').removeClass('active');}}});$('.navbar-collapse a.dropdown-toggle').on('touchstart',function(e){$('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');if($(this).hasClass('active'))
$(this).removeClass('active');else
$(this).addClass('active');});$('button.navbar-toggle').on("click",function(e){if(isMobile){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');}});$('a.dropdown-toggle').on("click",function(e){if(isMobile){$(".cart-content").css('opacity','0');$(".cart-content").css('visibility','hidden');}});$(document).on('touchstart click','.navbar-collapse [data-toggle="dropdown"]',function(event){var $innerLinkLI=$(this).parents('ul.navbar-nav').find('li.dropdown a.inner-link').parent('li.dropdown');if(!$(this).hasClass('inner-link')&&!$(this).hasClass('dropdown-toggle')&&$innerLinkLI.hasClass('open')){$innerLinkLI.removeClass('open');}
var target=$(this).attr('target');if($(window).width()<=991&&$(this).attr('href')&&$(this).attr('href').indexOf("#")<=-1&&!$(event.target).is('i')){if(event.ctrlKey||event.metaKey){window.open($(this).attr('href'),"_blank");return false;}else if(!target)
window.location=$(this).attr('href');else
window.open($(this).attr('href'),target);}else if($(window).width()>991&&$(this).attr('href').indexOf("#")<=-1){if(event.ctrlKey||event.metaKey){window.open($(this).attr('href'),"_blank");return false;}else if(!target)
window.location=$(this).attr('href');else
window.open($(this).attr('href'),target);}else if($(window).width()<=991&&$(this).attr('href')&&$(this).attr('href').length>1&&$(this).attr('href').indexOf("#")>=0&&$(this).hasClass('inner-link')){$(this).parents('ul.navbar-nav').find('li.dropdown').not($(this).parent('.dropdown')).removeClass('open');if($(this).parent('.dropdown').hasClass('open')){$(this).parent('.dropdown').removeClass('open');}else{$(this).parent('.dropdown').addClass('open');}
$(this).toggleClass('active');}});$('.skillbar').appear();$('.skillbar').skillBars({from:0,speed:4000,interval:100,decimals:0});$(document.body).on('appear','.skillbar',function(e){if(!$(this).hasClass('appear')){$(this).addClass('appear');$(this).find('.skillbar-bar').css("width","0%");$(this).skillBars({from:0,speed:4000,interval:100,decimals:0});}});$('body').on('touchstart click',function(e){if($(window).width()<992){}});$('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').on("click",function(e){if($(this).parent('li').find('ul.dropdown-menu').length>0){if($(this).parent('li').hasClass('open')){$(this).parent('li').removeClass('open');}else{$(this).parent('li').addClass('open');}}});$('.accordion-style1 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-minus"></i>');});$('.accordion-style1 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-plus"></i>');});$('.nav.navbar-nav a.inner-link').on("click",function(e){$(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');var $this=$(this);if($('.nav-header-container .navbar-toggle').is(':visible'))
$(this).parents('.navbar-collapse').collapse('hide');setTimeout(function(){$this.addClass('active');},1000);});$('.accordion-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');});$('.accordion-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');});$('.accordion-style3 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');});$('.accordion-style3 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');});$('.toggles .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-minus"></i>');});$('.toggles .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="ti-plus"></i>');});$('.toggles-style2 .collapse').on('show.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').addClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fa fa-angle-up"></i>');});$('.toggles-style2 .collapse').on('hide.bs.collapse',function(){var id=$(this).attr('id');$('a[href="#'+id+'"]').closest('.panel-heading').removeClass('active-accordion');$('a[href="#'+id+'"] .panel-title span').html('<i class="fas fa-angle-down"></i>');});$(document).on("mouseenter",".blog-post-style4 .grid-item",function(e){$(this).find("figcaption .blog-hover-text").slideDown(300);});$(document).on("mouseleave",".blog-post-style4 .grid-item",function(e){$(this).find("figcaption .blog-hover-text").slideUp(300);});SetResizeContent();var $allNonRatinaImages=$("img:not([data-rjs])");$allNonRatinaImages.attr('data-no-retina','');$(document).on("touchstart",".sidebar-wrapper",function(){clearOpen();});var getNav=$("nav.navbar.bootsnav"),getIn=getNav.find("ul.nav").data("in"),getOut=getNav.find("ul.nav").data("out");function clearOpen(){$('li.dropdown').removeClass("on").removeClass("open");$(".dropdown-menu").stop().fadeOut('fast');$(".dropdown-menu").removeClass(getIn);$(".dropdown-menu").addClass(getOut);}});$(window).load(function(){var hash=window.location.hash.substr(1);if(hash!=""){setTimeout(function(){$(window).imagesLoaded(function(){var scrollAnimationTime=1200,scrollAnimation='easeInOutExpo';var target='#'+hash;if($(target).length>0){$('html, body').stop().animate({'scrollTop':$(target).offset().top},scrollAnimationTime,scrollAnimation,function(){window.location.hash=target;});}});},500);}
fullScreenHeight();});;(function(factory){if(typeof define=='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'));}else{factory(jQuery);}}(function($){var inviewObjects=[],viewportSize,viewportOffset,d=document,w=window,documentElement=d.documentElement,timer;$.event.special.inview={add:function(data){inviewObjects.push({data:data,$element:$(this),element:this});if(!timer&&inviewObjects.length){timer=setInterval(checkInView,250);}},remove:function(data){for(var i=0;i<inviewObjects.length;i++){var inviewObject=inviewObjects[i];if(inviewObject.element===this&&inviewObject.data.guid===data.guid){inviewObjects.splice(i,1);break;}}
if(!inviewObjects.length){clearInterval(timer);timer=null;}}};function getViewportSize(){var mode,domObject,size={height:w.innerHeight,width:w.innerWidth};if(!size.height){mode=d.compatMode;if(mode||!$.support.boxModel){domObject=mode==='CSS1Compat'?documentElement:d.body;size={height:domObject.clientHeight,width:domObject.clientWidth};}}
return size;}
function getViewportOffset(){return{top:w.pageYOffset||documentElement.scrollTop||d.body.scrollTop,left:w.pageXOffset||documentElement.scrollLeft||d.body.scrollLeft};}
function checkInView(){if(!inviewObjects.length){return;}
var i=0,$elements=$.map(inviewObjects,function(inviewObject){var selector=inviewObject.data.selector,$element=inviewObject.$element;return selector?$element.find(selector):$element;});viewportSize=viewportSize||getViewportSize();viewportOffset=viewportOffset||getViewportOffset();for(;i<inviewObjects.length;i++){if(!$.contains(documentElement,$elements[i][0])){continue;}
var $element=$($elements[i]),elementSize={height:$element[0].offsetHeight,width:$element[0].offsetWidth},elementOffset=$element.offset(),inView=$element.data('inview');if(!viewportOffset||!viewportSize){return;}
if(elementOffset.top+elementSize.height>viewportOffset.top&&elementOffset.top<viewportOffset.top+viewportSize.height&&elementOffset.left+elementSize.width>viewportOffset.left&&elementOffset.left<viewportOffset.left+viewportSize.width){if(!inView){$element.data('inview',true).trigger('inview',[true]);}}else if(inView){$element.data('inview',false).trigger('inview',[false]);}}}
$(w).on("scroll resize scrollstop",function(){viewportSize=viewportOffset=null;});if(!documentElement.addEventListener&&documentElement.attachEvent){documentElement.attachEvent("onfocusin",function(){viewportOffset=null;});}}));