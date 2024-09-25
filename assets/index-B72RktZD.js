var T=Object.defineProperty;var K=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>K(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function b(){}function R(e){return e()}function S(){return Object.create(null)}function v(e){e.forEach(R)}function q(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let w;function U(e,t){return e===t?!0:(w||(w=document.createElement("a")),w.href=t,e===w.href)}function z(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function k(){return G(" ")}function O(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function H(e){return Array.from(e.childNodes)}let F;function $(e){F=e}const _=[],A=[];let y=[];const j=[],J=Promise.resolve();let L=!1;function Q(){L||(L=!0,J.then(M))}function C(e){y.push(e)}const E=new Set;let g=0;function M(){if(g!==0)return;const e=F;do{try{for(;g<_.length;){const t=_[g];g++,$(t),W(t.$$)}}catch(t){throw _.length=0,g=0,t}for($(null),_.length=0,g=0;A.length;)A.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while(_.length);for(;j.length;)j.pop()();L=!1,E.clear(),$(e)}function W(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}function X(e){const t=[],n=[];y.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),y=t}const Y=new Set;function Z(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function ee(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),C(()=>{const i=e.$$.on_mount.map(R).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...i):v(i),e.$$.on_mount=[]}),r.forEach(C)}function te(e,t){const n=e.$$;n.fragment!==null&&(X(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(_.push(e),Q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,o,r,i,u=null,m=[-1]){const s=F;$(e);const l=e.$$={fragment:null,ctx:[],props:i,update:b,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:S(),dirty:m,skip_bound:!1,root:t.target||s.$$.root};u&&u(l.root);let c=!1;if(l.ctx=n?n(e,t.props||{},(a,h,...N)=>{const P=N.length?N[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=P)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](P),c&&ne(e,a)),h}):[],l.update(),c=!0,v(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const a=H(t.target);l.fragment&&l.fragment.l(a),a.forEach(I)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),M()}$(s)}class oe{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){te(this,1),this.$destroy=b}$on(t,n){if(!q(n))return b;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);function B(e){let t,n,o,r,i,u,m;return{c(){t=p("div"),n=p("img"),r=k(),i=p("button"),i.textContent="Download Image",U(n.src,o=e[0])||f(n,"src",o),f(n,"alt","Processed Image"),f(n,"class","svelte-4ymoru"),f(i,"class","svelte-4ymoru"),f(t,"class","result svelte-4ymoru")},m(s,l){D(s,t,l),d(t,n),d(t,r),d(t,i),u||(m=O(i,"click",e[3]),u=!0)},p(s,l){l&1&&!U(n.src,o=s[0])&&f(n,"src",o)},d(s){s&&I(t),u=!1,m()}}}function ie(e){let t,n,o,r,i,u,m,s,l,c=e[0]&&B(e);return{c(){t=p("main"),n=p("h1"),n.textContent="Background Remover",o=k(),r=p("input"),i=k(),u=p("button"),u.textContent="Upload and Remove Background",m=k(),c&&c.c(),f(n,"class","svelte-4ymoru"),f(r,"type","file"),f(r,"accept","image/*"),f(r,"class","svelte-4ymoru"),f(u,"class","svelte-4ymoru"),f(t,"class","container svelte-4ymoru")},m(a,h){D(a,t,h),d(t,n),d(t,o),d(t,r),d(t,i),d(t,u),d(t,m),c&&c.m(t,null),s||(l=[O(r,"change",e[2]),O(u,"click",e[1])],s=!0)},p(a,[h]){a[0]?c?c.p(a,h):(c=B(a),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},i:b,o:b,d(a){a&&I(t),c&&c.d(),s=!1,v(l)}}}function se(e,t,n){let o=null,r=null;return[r,async()=>{if(!o)return;const s=new FormData;s.append("image",o);const l=await fetch("https://elianrenteria.me/api/remove-bg",{method:"POST",body:s});if(l.ok){const c=await l.blob();n(0,r=URL.createObjectURL(c))}else alert("Failed to process image")},s=>{const l=s.target;l.files&&l.files.length>0&&(o=l.files[0])},()=>{const s=document.createElement("a");s.href=r,s.download="processed-image.png",s.click()}]}class ce extends oe{constructor(t){super(),re(this,t,se,ie,V,{})}}new ce({target:document.getElementById("app")});
