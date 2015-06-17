var cito=window.cito||{};!function(e,n,t){"use strict";function r(e){return"string"==typeof e}function i(e){return e instanceof Array}function a(e){return"function"==typeof e}function o(e,n){var r=typeof e;return"string"===r?e={tag:"#",children:e}:"function"===r&&(e=e(n),e=e===t?n:o(e,n)),e}function l(e,n,t){var r=o(n,t);return n!==r&&e&&(e.children=r),r}function f(e,n,t){var r=l(null,u(e,n));return r.dom||(r.dom=t.firstChild,"<"===r.tag&&(r.domLength=t.childNodes.length)),r}function d(e,n,t){var r=e[n],i=o(r,t);return r!==i&&(e[n]=i),i}function s(e,n,r){return a(n)&&(n=n(r),n===t&&(n=r),e.children=n),n}function u(e,n){return 1===n?e[0]:e}function c(e,n,t){var r,i=n.dom,a=n.domLength||1,o=t&&t.dom;if(i!==o)for(;a--;)r=a>0?i.nextSibling:null,o?e.insertBefore(i,o):e.appendChild(i),i=r}function v(){return en.createTextNode("")}function h(e,n,t){if(e.insertAdjacentHTML){var r,i,a;if(Z||_){var o="beforebegin"===n?e.previousSibling:"beforeend"===n?e.lastChild:null;o&&3===o.nodeType&&(r=o,_&&0===o.length&&(a=!0,o.nodeValue=" "),Z&&(i=o.length))}e.insertAdjacentHTML(n,t),r&&(Z&&r.length!==i&&r.splitText(i),_&&a&&(r.nodeValue=""))}else if(dn.innerHTML=t,"beforebegin"===n)for(var l=e.parentNode;dn.firstChild;)l.insertBefore(dn.firstChild,e);else if("beforeend"===n)for(;dn.firstChild;)e.appendChild(dn.firstChild)}function g(e,n,t,r){if(t){var i=t.dom;if(r){var a=t.domLength||1;1===a?(Q(t),e.replaceChild(n,i)):(e.insertBefore(n,i),O(e,t))}else e.insertBefore(n,i)}else e.appendChild(n)}function m(e,n,r,i,a,o){if(fn)return b(e,n,i,a);var l,f=e.tag,d=e.children;switch(f){case t:return w(e,d,n,r,i,a);case"#":if(o)return void B(n,d);l=en.createTextNode(d);break;case"!":l=en.createComment(d);break;case"<":if(d){if(o)n.innerHTML=d;else{var s=n.childNodes,u=s.length;if(i){var c=i.dom,m=c.previousSibling;h(c,"beforebegin",d),l=m?m.nextSibling:n.firstChild}else h(n,"beforeend",d),l=s[u];e.dom=l,e.domLength=s.length-u,a&&i&&O(n,i)}return}l=v();break;default:var x;switch(f){case"svg":x="http://www.w3.org/2000/svg";break;case"math":x="http://www.w3.org/1998/Math/MathML";break;default:x=r}var y=e.attrs,C=y&&y.is;x?(e.ns=x,l=C?en.createElementNS(x,f,C):en.createElementNS(x,f)):l=C?en.createElement(f,C):en.createElement(f),e.dom=l,fn&&n&&g(n,l,i,a),"string"==typeof d?B(l,d,!1):H(l,e,x,d,!1),y&&N(l,f,y);var k=e.events;k&&M(l,e,k),!fn&&n&&g(n,l,i,a);var L=k&&k.$created;return void(L&&p(L,"$created",l,e))}e.dom=l,n&&g(n,l,i,a)}function p(e,n,t,r,a,o){var l={type:n,target:t,virtualNode:r};if(a&&(l[a]=o),i(e)){for(var f=0;f<e.length;f++)if(e[f].call(t,l)===!1)return}else e.call(t,l)}function b(e,n,t,r){var i,a=x(e);if(n){var o;t||n.hasChildNodes()?(t?(o=t.dom.previousSibling,h(t.dom,"beforebegin",a),r&&O(n,t)):(o=n.lastChild,h(n,"beforeend",a)),i=o?o.nextSibling:n.firstChild):(n.innerHTML=a,i=n.firstChild)}else dn.innerHTML=a,i=dn.removeChild(dn.firstChild);y(i,e)}function x(e,n){var i=e.tag,a=e.children;switch(i){case"#":return k(a)+gn;case"!":return"<!--"+L(a)+"-->";case"<":return a+gn;default:var o;if(i){var f=e.attrs;if("select"===i&&f?n={selectedIndex:f.selectedIndex,value:f.value,optionIndex:0}:"option"===i&&n&&((n.value&&n.value===f.value||n.selectedIndex!==t&&n.selectedIndex===n.optionIndex)&&(f.selected=!0),n.optionIndex++),o="<"+i,f){o+=" ";for(var c in f){var v=f[c];if(v!==!1&&("select"!==i||"value"!==c&&"selectedIndex"!==c))if("textarea"!==i||"value"!==c){if(v===!0)v="";else if("style"===c&&!r(v)){var h="";for(var g in v)h+=g+": "+v[g]+"; ";v=h}o+=" "+T(c,v)}else a=v}}}else o="";i&&(o+=">"),a=s(e,a);var m=I(a);if(m>1)for(var p=0,b=a.length;b>p;p++)o+=x(d(a,p),n);else if(0!==m){var y=u(a,m);r(y)?(o+=k(y),i&&y||(o+=gn)):o+=x(l(e,y),n)}else i||(o+=gn);return i&&(o+="</"+i+">"),o}}function y(e,n){var t=n.tag;if(t){n.dom=e;var i,a;switch(t){case"#":i=e.nodeValue,a=i.indexOf(gn),-1!==a&&(a+1<i.length&&e.splitText(a+1),e.nodeValue=i.substr(0,a));break;case"!":break;case"<":for(var o,l=0;e;e=e.nextSibling)if(l++,3===e.nodeType){if(i=e.nodeValue,l>1&&i===gn){o=e.nextSibling,e.parentNode.removeChild(e),l--;break}if(a=i.indexOf(gn),-1!==a){a+1<i.length&&e.splitText(a+1),e.nodeValue=i.substr(0,a),o=e.nextSibling;break}}return n.domLength=l,o;default:var f=n.children,d=I(f);if(d>1){f=n.children;for(var s=e.firstChild,c=0,v=f.length;v>c;c++)s=y(s,f[c])}else if(0!==d){var h=u(f,d);r(h)?h||(e.firstChild.nodeValue=""):y(e.firstChild,h)}var g=n.events;if(g){M(e,n,g);var m=g.$created;m&&p(m,"$created",e,n)}}return e.nextSibling}return C(e,n)}function C(e,n){var t,r=n.children,i=I(r);if(0===i)e.length>1&&e.splitText(1),e.nodeValue="",n.dom=e,t=e.nextSibling;else{if(i>1){t=e;for(var a=0;a<r.length;a++)t=y(t,r[a]);e=r[0].dom}else{var o=l(n,u(r,i));t=y(e,o),e=o.dom}n.dom=e;for(var f=0;e!==t;)f++,e=e.nextSibling;n.domLength=f}return t}function k(e){return e=""+e,on?(dn.innerText=e,e=dn.innerHTML):e=ln?e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e}function L(e){return e=""+e,e.replace(/-{2,}/g,"-")}function T(e,n){var t=typeof n;return n=""+n,"number"!==t&&(n=ln?n.split("&").join("&amp;").split('"').join("&quot;"):n.replace(/&/g,"&amp;").replace(/"/g,"&quot;")),e+'="'+n+'"'}function w(e,n,t,r,i,a){n=s(e,n);var o,f,c,h=I(n);if(r&&(e.ns=r),0===h)o=v(),g(t,o,i,a);else if(h>1){f=0;for(var p=0,b=n.length;b>p;p++)c=d(n,p),m(c,t,r,i,!1),f+=c.domLength||1;o=n[0].dom,a&&O(t,i)}else c=l(e,u(n,h)),m(c,t,r,i,a),o=c.dom,f=c.domLength;e.dom=o,e.domLength=f}function N(e,n,r,i,a){var o,l;if(r)for(l in r){var f=!1,d=r[l];if("style"===l){var s=i&&i[l];s!==d&&(f=S(e,s,r,d))}else V(n,l)?e[l]!==d&&(e[l]=d,f=!0):i&&i[l]===d||("class"===l?e.className=d:E(e,l,d),f=!0);f&&a&&(o||(o=[])).push(l)}if(i)for(l in i)r&&r[l]!==t||("class"===l?e.className="":V(n,l)||e.removeAttribute(l),a&&(o||(o=[])).push(l));return o}function E(e,n,t){if(t===!1)e.removeAttribute(n);else{t===!0&&(t="");var r,i=n.indexOf(":");if(-1!==i){var a=n.substr(0,i);switch(a){case"xlink":r="http://www.w3.org/1999/xlink"}}r?e.setAttributeNS(r,n,t):e.setAttribute(n,t)}}function S(e,n,i,a){var o,l=!1;if(!(r(a)||vn&&n&&!r(n))){var f="";if(a)for(o in a)f+=o+": "+a[o]+"; ";a=f,vn||(i.style=a)}var d=e.style;if(r(a))d.cssText=a,l=!0;else{if(a)for(o in a){var s=a[o];if(!n||n[o]!==s){var u=s.indexOf("!important");if(-1!==u)d.setProperty(o,s.substr(0,u),"important");else{if(n){var c=n[o];c&&-1!==c.indexOf("!important")&&d.removeProperty(o)}d.setProperty(o,s,"")}l=!0}}if(n)for(o in n)a&&a[o]!==t||(d.removeProperty(o),l=!0)}return l}function M(e,n,t,r){var i;if(t){e.virtualNode=n;for(i in t)r&&r[i]||A(e,i)}if(r)for(i in r)t&&t[i]||j(e,i)}function V(e,n){switch(e){case"input":return"value"===n||"checked"===n;case"textarea":return"value"===n;case"select":return"value"===n||"selectedIndex"===n;case"option":return"selected"===n}}function A(e,n){if("$"!==n[0])if(un)e.addEventListener(n,q,!1);else{var t="on"+n;t in e?e[t]=q:e.attachEvent(t,q)}}function j(e,n){if("$"!==n[0])if(un)e.removeEventListener(n,q,!1);else{var t="on"+n;t in e?e[t]=null:e.detachEvent(t,q)}}function H(e,n,t,i,a){i=s(n,i);var o=I(i);if(o>1)for(var f=0,c=i.length;c>f;f++)m(d(i,f),e,t);else if(0!==o){var v=u(i,o);!a&&r(v)?B(e,v):(v=l(n,v),m(v,e,t,null,!1,!a))}}function I(e){return i(e)?e.length:e||r(e)?-1:0}function P(e,n,t){t>1?$(e,n,0,n.length):0!==t&&(r(n)?e.removeChild(e.firstChild):O(e,f(n,t,e)))}function $(e,n,t,r){for(;r>t;t++)O(e,n[t])}function O(e,n){Q(n);for(var t,r=n.dom,i=n.domLength||1;i--;)t=i>0?r.nextSibling:null,e.removeChild(r),r=t}function B(e,n,t){if(n)sn?e.textContent=n:e.innerText=n;else{if(t)for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(v())}}function D(e,n,t,i,a,o,v){if(a=s(n,a,i),a!==i){var h=I(i);if(0===h)return void H(e,n,t,a,!1);var g,p,b=I(a);if(0===b)return void P(e,i,h);if(2>b){if(p=u(a,b),!o&&r(p)){if(b===h){if(g=u(i,h),p===g)return;if(r(g))return void(e.firstChild.nodeValue=p)}return U(i,h),void B(e,p,!0)}if(2>h)return g=f(i,h,e),p=l(n,p,g),void G(g,p,e,t,null,0,v,!o)}-1===b&&(n.children=a=[a]),2>h&&(g=f(i,h,e),1===h?i[0]=g:i=[g]);var x,y=i.length,C=a.length,k=y-1,L=a.length-1,T=0,w=0,N=!0;e:for(;N&&k>=T&&L>=w;){N=!1;var E,S,M,V;for(E=i[T],M=d(a,w,E);E.key===M.key;){if(G(E,M,e,t,i,T+1,v),T++,w++,T>k||w>L)break e;E=i[T],M=d(a,w,E),N=!0}for(S=i[k],V=d(a,L);S.key===V.key;){if(G(S,V,e,t,a,L+1,v),k--,L--,T>k||w>L)break e;S=i[k],V=d(a,L),N=!0}for(;E.key===V.key;){if(x=C>L+1?a[L+1]:v,G(E,V,e,t,null,0,x),c(e,V,x),T++,L--,T>k||w>L)break e;E=i[T],V=d(a,L),N=!0}for(;S.key===M.key;){if(x=y>T?i[T]:v,G(S,M,e,t,null,0,x),c(e,M,x),k--,w++,T>k||w>L)break e;S=i[k],M=d(a,w),N=!0}}if(T>k)for(x=C>L+1?d(a,L+1):v,A=w;L>=A;A++)m(d(a,A),e,t,x);else if(w>L)$(e,i,T,k+1);else{var A,j=i[k+1],D={};for(A=k;A>=T;A--)g=i[A],g.next=j,D[g.key]=g,j=g;for(x=C>L+1?d(a,L+1):v,A=L;A>=w;A--){p=a[A];var q=p.key;g=D[q],g?(D[q]=null,j=g.next,G(g,p,e,t,null,0,x),(j&&j.key)!==(x&&x.key)&&c(e,p,x)):m(p,e,t,x),x=p}for(A=T;k>=A;A++)g=i[A],null!==D[g.key]&&O(e,g)}}}function q(e){e=W(e,this);var n=e.currentTarget,t=n.virtualNode.events[e.type];if(i(t)){for(var r=0,a=t.length;a>r;r++)if(z(t[r],n,e),mn){mn=!1;break}}else z(t,n,e)}function R(){this.defaultPrevented=!0,this.returnValue=!1}function F(){this.cancelBubble=!0}function K(){mn=!0,this.stopPropagation()}function W(e,t){return e||(e=n.event,e.preventDefault||(e.preventDefault=R,e.stopPropagation=F,e.defaultPrevented=e.returnValue===!1,e.target=e.srcElement),e.currentTarget=t.nodeType?t:e.target),e.stopImmediatePropagation=K,e}function z(e,n,t){try{e.call(n,t)===!1&&t.preventDefault()}catch(r){rn.error(r.stack||r)}}function G(e,n,r,i,a,o,l,f){if(n!==e){var d=n.tag;if(e.tag!==d)m(n,r,i,e,!0);else{var s=e.dom,u=e.children,c=n.children;switch(d){case t:var v=a&&o<a.length?a[o]:l;J(e,u,n,c,r,i,v);break;case"#":case"!":u!==c&&(s.nodeValue=c),n.dom=s;break;case"<":u!==c?m(n,r,null,e,!0,f):(n.dom=e.dom,n.domLength=e.domLength);break;default:var h=n.attrs,g=e.attrs;if((h&&h.is)!==(g&&g.is))return void m(n,r,i,e,!0);var b=e.ns;b&&(n.ns=b),n.dom=s,c!==u&&D(s,n,b,u,c,!1);var x=n.events,y=e.events;if(h!==g){var C=x&&x.$changed,k=N(s,d,h,g,!!C);k&&p(C,"$changed",s,n,"changes",k)}x!==y&&M(s,n,x,y)}}}}function J(e,n,t,r,a,o,l){if(r=s(t,r,n),r!==n){var f,d,u=I(r),c=I(n);if(o&&(t.ns=o),0===u)0===c?f=e.dom:(P(a,n,c),f=v(),g(a,f,l));else{if(0===c)return a.removeChild(e.dom),void w(t,r,a,o,l);if(D(a,t,o,n,r,!0,l),r=t.children,i(r)){f=r[0].dom,d=0;for(var h=0,m=r.length;m>h;h++)d+=r[h].domLength||1}else f=r.dom,d=r.domLength}t.dom=f,t.domLength=d}}function Q(e){if(!r(e)){var n=e.dom;if(n){var i=e.events;if(i){for(var a in i)j(n,a);var o=i.$destroyed;o&&p(o,"$destroyed",n,e)}n.virtualNode&&(n.virtualNode=t)}var l=e.children;l&&U(l,I(l))}}function U(e,n){if(n>1)for(var t=0,r=e.length;r>t;t++)Q(e[t]);else 0!==n&&Q(u(e,n))}function X(e,n){var r;for(r in e)n[r]=e[r];for(r in n)e[r]===t&&(n[r]=t)}function Y(e){e&&e!=en.body&&e!=en.activeElement&&e.focus()}var Z,_,en=n.document,nn=n.navigator,tn=function(){},rn=n.console||{warn:tn,error:tn},an=nn.userAgent,on=-1!==an.indexOf("WebKit"),ln=-1!==an.indexOf("Firefox"),fn=-1!==an.indexOf("Trident"),dn=en.createElement("div"),sn="textContent"in en,un="addEventListener"in en,cn="createRange"in en,vn="setProperty"in dn.style,hn=en.createElement("p");hn.insertAdjacentHTML&&(hn.appendChild(en.createTextNode("a")),hn.insertAdjacentHTML("beforeend","b"),Z=1===hn.childNodes.length,hn=en.createElement("p"),hn.appendChild(v()),hn.insertAdjacentHTML("beforeend","<b>"),_=3!==hn.firstChild.nodeType);{var gn="",mn=(cn?en.createRange():null,!1);e.vdom={create:function(e){return e=o(e),m(e),e},append:function(e,n){return n=o(n),m(n,e),n},update:function(e,n){var t=en.activeElement;return n=o(n,e),G(e,n,e.dom.parentNode),X(n,e),Y(t),e},updateChildren:function(e,n){var t=en.activeElement,r=e.children;r!==n&&D(e.dom,e,e.ns,r,n,!e.tag),Y(t)},remove:function(e){var n=e.dom.parentNode;O(n,e)}}}}(cito,window);
