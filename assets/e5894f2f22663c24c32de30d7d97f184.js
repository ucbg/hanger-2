!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).Random={})}(this,function(n){"use strict";function t(n){return 0|n.next()}function r(n,t){return 0===t?n:function(r){return n(r)+t}}function e(n){var t=0|n.next();return 4294967296*(2097151&t)+(n.next()>>>0)+(2097152&t?-9007199254740992:0)}function i(n){for(;;){var t=0|n.next();if(!(4194304&t))return 4294967296*(2097151&t)+(n.next()>>>0)+(2097152&t?-9007199254740992:0);if(4194304==(8388607&t)&&0==(0|n.next()))return 9007199254740992}}function o(n){return n.next()>>>0}function u(n){return 4294967296*(2097151&n.next())+(n.next()>>>0)}function f(n){for(;;){var t=0|n.next();if(!(2097152&t))return 4294967296*(2097151&t)+(n.next()>>>0);if(2097152==(4194303&t)&&0==(0|n.next()))return 9007199254740992}}function a(n){return 0==(n+1&n)}function c(n){return a(n)?(t=n,function(n){return n.next()&t}):function(n){var t=n+1,r=t*Math.floor(4294967296/t);return function(n){var e=0;do{e=n.next()>>>0}while(e>=r);return e%t}}(n);var t}function s(n){var t,r=n+1;if(0==(0|r)){var e=(r/4294967296|0)-1;if(a(e))return t=e,function(n){return 4294967296*(n.next()&t)+(n.next()>>>0)}}return function(n){var t=n*Math.floor(9007199254740992/n);return function(r){var e=0;do{e=4294967296*(2097151&r.next())+(r.next()>>>0)}while(e>=t);return e%n}}(r)}function h(n,t){return function(r){var e=0;do{var i=0|r.next();e=4294967296*(2097151&i)+(r.next()>>>0)+(2097152&i?-9007199254740992:0)}while(e<n||e>t);return e}}function p(n,a){if(n=Math.floor(n),a=Math.floor(a),n<-9007199254740992||!isFinite(n))throw new RangeError("Expected min to be at least -9007199254740992");if(a>9007199254740992||!isFinite(a))throw new RangeError("Expected max to be at most 9007199254740992");var p=a-n;return p<=0||!isFinite(p)?function(){return n}:4294967295===p?0===n?o:r(t,n+2147483648):p<4294967295?r(c(p),n):9007199254740991===p?r(u,n):p<9007199254740991?r(s(p),n):a-1-n==9007199254740991?r(f,n):-9007199254740992===n&&9007199254740992===a?i:-9007199254740992===n&&9007199254740991===a?e:-9007199254740991===n&&9007199254740992===a?r(e,1):9007199254740992===a?r(h(n-1,a-1),1):h(n,a)}function d(n){return 1==(1&n.next())}function l(n,t){return function(r){return n(r)<t}}function v(n,r){return null==r?null==n?d:function(n){if(n<=0)return function(){return!1};if(n>=1)return function(){return!0};var r=4294967296*n;return r%1==0?l(t,r-2147483648|0):l(u,Math.round(9007199254740992*n))}(n):n<=0?function(){return!1}:n>=r?function(){return!0}:l(p(0,r-1),n)}function x(n,t){var r=p(n.getTime(),t.getTime());return function(n){return new Date(r(n))}}function g(n){return p(1,n)}function y(n,t){var r=g(n);return function(n){for(var e=[],i=0;i<t;++i)e.push(r(n));return e}}var w="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";function m(n){void 0===n&&(n=w);var t=n.length;if(!t)throw new Error("Expected pool not to be an empty string");var r=p(0,t-1);return function(t,e){for(var i="",o=0;o<e;++o){var u=r(t);i+=n.charAt(u)}return i}}var b=m("0123456789abcdef"),E=m("0123456789abcdef".toUpperCase());function M(n){return n?E:b}function A(n,t){return n<0?Math.max(n+t,0):Math.min(n,t)}function R(n){var t=+n;return t<0?Math.ceil(t):Math.floor(t)}function F(n,t,r,e){var i=t.length;if(0===i)throw new RangeError("Cannot pick from an empty array");var o=null==r?0:A(R(r),i),u=void 0===e?i:A(R(e),i);if(o>=u)throw new RangeError("Cannot pick between bounds "+o+" and "+u);return t[p(o,u-1)(n)]}function S(n){return u(n)/9007199254740992}function T(n){return f(n)/9007199254740992}function C(n,t,e){if(void 0===e&&(e=!1),!isFinite(n))throw new RangeError("Expected min to be a finite number");if(!isFinite(t))throw new RangeError("Expected max to be a finite number");return r((i=e?T:S,1===(o=t-n)?i:0===o?function(){return 0}:function(n){return i(n)*o}),n);var i,o}var k=Array.prototype.slice;function I(n,t,r){void 0===r&&(r=0);var e=t.length;if(e)for(var i=e-1>>>0;i>r;--i){var o=p(0,i)(n);if(i!==o){var u=t[i];t[i]=t[o],t[o]=u}}return t}function O(n,t,r){if(r<0||r>t.length||!isFinite(r))throw new RangeError("Expected sampleSize to be within 0 and the length of the population");if(0===r)return[];var e=k.call(t),i=e.length;if(i===r)return I(n,e,0);var o=i-r;return I(n,e,o-1).slice(o)}var W=function(){try{if("xxx"==="x".repeat(3))return function(n,t){return n.repeat(t)}}catch(n){}return function(n,t){for(var r="";t>0;)1&t&&(r+=n),t>>=1,n+=n;return r}}();function Z(n,t){return W("0",t-n.length)+n}function j(n){var t=n.next()>>>0,r=0|n.next(),e=0|n.next(),i=n.next()>>>0;return Z(t.toString(16),8)+"-"+Z((65535&r).toString(16),4)+"-"+Z((r>>4&4095|16384).toString(16),4)+"-"+Z((16383&e|32768).toString(16),4)+"-"+Z((e>>4&65535).toString(16),4)+Z(i.toString(16),8)}var B,D,U={next:function(){return 4294967296*Math.random()|0}},_=function(){function n(n){void 0===n&&(n=U),this.engine=n}return n.prototype.int32=function(){return t(this.engine)},n.prototype.uint32=function(){return o(this.engine)},n.prototype.uint53=function(){return u(this.engine)},n.prototype.uint53Full=function(){return f(this.engine)},n.prototype.int53=function(){return e(this.engine)},n.prototype.int53Full=function(){return i(this.engine)},n.prototype.integer=function(n,t){return p(n,t)(this.engine)},n.prototype.realZeroToOneInclusive=function(){return T(this.engine)},n.prototype.realZeroToOneExclusive=function(){return S(this.engine)},n.prototype.real=function(n,t,r){return void 0===r&&(r=!1),C(n,t,r)(this.engine)},n.prototype.bool=function(n,t){return v(n,t)(this.engine)},n.prototype.pick=function(n,t,r){return F(this.engine,n,t,r)},n.prototype.shuffle=function(n){return I(this.engine,n)},n.prototype.sample=function(n,t){return O(this.engine,n,t)},n.prototype.die=function(n){return g(n)(this.engine)},n.prototype.dice=function(n,t){return y(n,t)(this.engine)},n.prototype.uuid4=function(){return j(this.engine)},n.prototype.string=function(n,t){return m(t)(this.engine,n)},n.prototype.hex=function(n,t){return M(t)(this.engine,n)},n.prototype.date=function(n,t){return x(n,t)(this.engine)},n}(),q=function(){try{var n=new ArrayBuffer(4),t=new Int32Array(n);if(t[0]=2147483648,-2147483648===t[0])return Int32Array}catch(n){}return Array}(),z=(B=null,D=128,{next:function(){return D>=128&&(null===B&&(B=new q(128)),crypto.getRandomValues(B),D=0),0|B[D++]}});function P(n,t){void 0===n&&(n=U),void 0===t&&(t=16);var r=[];r.push(0|(new Date).getTime());for(var e=1;e<t;++e)r[e]=0|n.next();return r}var V="function"==typeof Math.imul&&-5===Math.imul(4294967295,5)?Math.imul:function(n,t){var r=65535&n,e=65535&t;return r*e+((n>>>16&65535)*e+r*(t>>>16&65535)<<16>>>0)|0},G=function(){function n(){this.data=new q(624),this.index=0,this.uses=0}return n.seed=function(t){return(new n).seed(t)},n.seedWithArray=function(t){return(new n).seedWithArray(t)},n.autoSeed=function(){return n.seedWithArray(P())},n.prototype.next=function(){(0|this.index)>=624&&(H(this.data),this.index=0);var n=this.data[this.index];return this.index=this.index+1|0,this.uses+=1,0|function(n){return n^=n>>>11,n^=n<<7&2636928640,(n^=n<<15&4022730752)^n>>>18}(n)},n.prototype.getUseCount=function(){return this.uses},n.prototype.discard=function(n){if(n<=0)return this;for(this.uses+=n,(0|this.index)>=624&&(H(this.data),this.index=0);n+this.index>624;)n-=624-this.index,H(this.data),this.index=0;return this.index=this.index+n|0,this},n.prototype.seed=function(n){var t=0;this.data[0]=t=0|n;for(var r=1;r<624;r=r+1|0)this.data[r]=t=V(t^t>>>30,1812433253)+r|0;return this.index=624,this.uses=0,this},n.prototype.seedWithArray=function(n){return this.seed(19650218),function(n,t){for(var r=1,e=0,i=t.length,o=0|Math.max(i,624),u=0|n[0];(0|o)>0;--o)n[r]=u=(n[r]^V(u^u>>>30,1664525))+(0|t[e])+(0|e)|0,++e,(0|(r=r+1|0))>623&&(n[0]=n[623],r=1),e>=i&&(e=0);for(o=623;(0|o)>0;--o)n[r]=u=(n[r]^V(u^u>>>30,1566083941))-r|0,(0|(r=r+1|0))>623&&(n[0]=n[623],r=1);n[0]=2147483648}(this.data,n),this},n}();function H(n){for(var t=0,r=0;(0|t)<227;t=t+1|0)r=2147483648&n[t]|2147483647&n[t+1|0],n[t]=n[t+397|0]^r>>>1^(1&r?2567483615:0);for(;(0|t)<623;t=t+1|0)r=2147483648&n[t]|2147483647&n[t+1|0],n[t]=n[t-227|0]^r>>>1^(1&r?2567483615:0);r=2147483648&n[623]|2147483647&n[0],n[623]=n[396]^r>>>1^(1&r?2567483615:0)}var J=function(){var n=null,t=128;return{next:function(){return t>=128&&(n=new Int32Array(new Int8Array(require("crypto").randomBytes(512)).buffer),t=0),0|n[t++]}}}();n.Random=_,n.browserCrypto=z,n.nativeMath=U,n.MersenneTwister19937=G,n.nodeCrypto=J,n.bool=v,n.date=x,n.dice=y,n.die=g,n.hex=M,n.int32=t,n.int53=e,n.int53Full=i,n.integer=p,n.pick=F,n.picker=function(n,t,r){var e=k.call(n,t,r);if(0===e.length)throw new RangeError("Cannot pick from a source with no items");var i=p(0,e.length-1);return function(n){return e[i(n)]}},n.real=C,n.realZeroToOneExclusive=S,n.realZeroToOneInclusive=T,n.sample=O,n.shuffle=I,n.string=m,n.uint32=o,n.uint53=u,n.uint53Full=f,n.uuid4=j,n.createEntropy=P,Object.defineProperty(n,"__esModule",{value:!0})});