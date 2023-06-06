"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[103],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||c;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69245:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const c={},i="\u5206\u5e03\u5f0f\u9501\u5b9e\u8df5",a={unversionedId:"redis/distributedlock",id:"redis/distributedlock",title:"\u5206\u5e03\u5f0f\u9501\u5b9e\u8df5",description:"\u6ca1\u6709\u6700\u5b8c\u7f8e\u7684\u5206\u5e03\u5f0f\u9501\u65b9\u6848\u3002\u53ea\u6709\u5728\u67d0\u4e00\u65b9\u9762\u80fd\u591f\u63a5\u53d7\u7684\u65b9\u6848\u3002",source:"@site/docs/redis/distributedlock.md",sourceDirName:"redis",slug:"/redis/distributedlock",permalink:"/docs/redis/distributedlock",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Redis2",previous:{title:"\u7f13\u5b58\u96ea\u5d29",permalink:"/docs/redis/cacheavalanche"}},l={},s=[],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5206\u5e03\u5f0f\u9501\u5b9e\u8df5"},"\u5206\u5e03\u5f0f\u9501\u5b9e\u8df5"),(0,o.kt)("p",null,"\u6ca1\u6709\u6700\u5b8c\u7f8e\u7684\u5206\u5e03\u5f0f\u9501\u65b9\u6848\u3002\u53ea\u6709\u5728\u67d0\u4e00\u65b9\u9762\u80fd\u591f\u63a5\u53d7\u7684\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u4e0d\u7ba1\u662fredis\u7684\u4e3b\u4ece\u96c6\u7fa4\uff0c\u8fd8\u662fcluster\u96c6\u7fa4\uff0c\u53c8\u6216\u8005\u662fredlock\uff0c\u8fd8\u662fzk\u7b49\u7b49\u90fd\u6ca1\u6709\u6700\u5b8c\u7f8e\u7684\u3002"),(0,o.kt)("p",null,"\u5206\u5e03\u5f0f\u9501\u6709\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u4ee5mysql\uff0credis\u7684\u7c7bcas\u81ea\u65cb\u5faa\u73af\u5c1d\u8bd5\u52a0\u9501\uff0c\u4e00\u7c7b\u662fzookeeper\uff0cetcd\u7684\u57fa\u4e8eevent\u4e8b\u4ef6\u7684\u52a0\u9501\u3002"))}d.isMDXComponent=!0}}]);