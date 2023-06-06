"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[5673],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return t?n.createElement(m,p(p({ref:r},s),{},{components:t})):n.createElement(m,p({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40519:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},p="09-devServer\u548cJS\u538b\u7f29\u51b2\u7a81",c={unversionedId:"js/webpack3/09",id:"js/webpack3/09",title:"09-devServer\u548cJS\u538b\u7f29\u51b2\u7a81",description:"111.png",source:"@site/docs/js/webpack3/09.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/09",permalink:"/docs/js/webpack3/09",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"08-JS\u538b\u7f29(Plugin\u63d2\u4ef6)",permalink:"/docs/js/webpack3/08"},next:{title:"10-\u63d2\u4ef6\u914d\u7f6e\uff1aHTML\u6587\u4ef6\u7684\u53d1\u5e03",permalink:"/docs/js/webpack3/10"}},i={},l=[],s={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"09-devserver\u548cjs\u538b\u7f29\u51b2\u7a81"},"09-devServer\u548cJS\u538b\u7f29\u51b2\u7a81"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/images/webpack3/webpack09_01.png",alt:"111.png"})),(0,a.kt)("p",null,"\u5728\u4e4b\u524dJS\u538b\u7f29",(0,a.kt)("inlineCode",{parentName:"p"},"webpack"),"\u8fdb\u884c\u6253\u5305\uff0c\u800c\u6ca1\u6709\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm run server")," \u8fdb\u884c\u9884\u89c8\uff0c\u4e5f\u5c31\u662f\u8bf4\u6ca1\u6709\u542f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"devServer"),"\u91cc\u7684\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u90a3\u6709\u4e9b\u5c0f\u4f19\u4f34\u5728\u5b66\u4e60\u5b8c\u89c6\u9891\u540e\uff0c\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"npm run server"),"\u8fdb\u884c\u4e86\u9884\u89c8\uff0c\u53d1\u73b0\u7ec8\u7aef\u4e2d\u62a5\u9519\u4e86\u3002"),(0,a.kt)("p",null,"\u8981\u5f04\u660e\u767d\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5148\u8981\u5f04\u6e05\u695a\u4ec0\u4e48\u662f\u5f00\u53d1\u73af\u5883\uff0c\u4ec0\u4e48\u662f\u751f\u4ea7\u73af\u5883\u3002\n\u5f00\u53d1\u73af\u5883\u4e2d\u662f\u57fa\u672c\u4e0d\u4f1a\u5bf9js\u8fdb\u884c\u538b\u7f29\u7684\uff0c\u5728\u5f00\u53d1\u9884\u89c8\u65f6\u6211\u4eec\u9700\u8981\u660e\u786e\u7684\u62a5\u9519\u884c\u6570\u548c\u9519\u8bef\u4fe1\u606f\uff0c\n\u6240\u4ee5\u5b8c\u5168\u6ca1\u6709\u5fc5\u8981\u538b\u7f29JavasScript\u4ee3\u7801\u3002\u800c\u751f\u4ea7\u73af\u5883\u4e2d\u624d\u4f1a\u538b\u7f29JS\u4ee3\u7801\uff0c\u7528\u4e8e\u52a0\u5feb\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6548\u7387\u3002"),(0,a.kt)("p",null,"devServer\u7528\u4e8e\u5f00\u53d1\u73af\u5883\uff0c\u800c\u538b\u7f29JS\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u4f5c\u751f\u4ea7\u73af\u5883\u7684\u4e8b\u60c5\u6240\u4ee5Webpack\u8bbe\u7f6e\u4e86\u51b2\u7a81\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0cwebpack\u914d\u7f6e\u6587\u4ef6\u662f\u5206\u5f00\u7684\uff0c\u5f00\u53d1\u73af\u5883\u4e00\u4e2a\u6587\u4ef6\uff0c\u751f\u4ea7\u73af\u5883\u4e00\u4e2a\u6587\u4ef6\u3002 "))}f.isMDXComponent=!0}}]);