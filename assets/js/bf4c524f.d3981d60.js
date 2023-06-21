"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[9214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,v=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},o="Vue3\u65b0\u7684\u7ec4\u4ef6",p={unversionedId:"js/vue/vue3components",id:"js/vue/vue3components",title:"Vue3\u65b0\u7684\u7ec4\u4ef6",description:"Fragment",source:"@site/docs/js/vue/vue3components.md",sourceDirName:"js/vue",slug:"/js/vue/vue3components",permalink:"/docs/js/vue/vue3components",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSVue",previous:{title:"vue3watch\u7684value\u95ee\u9898",permalink:"/docs/js/vue/vue3watch"},next:{title:"Vue3\u7684\u5e38\u89c1\u6539\u53d8",permalink:"/docs/js/vue/vue3normaldiff"}},u={},i=[{value:"Fragment",id:"fragment",level:2},{value:"Teleport",id:"teleport",level:2},{value:"Suspense",id:"suspense",level:2}],s={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue3\u65b0\u7684\u7ec4\u4ef6"},"Vue3\u65b0\u7684\u7ec4\u4ef6"),(0,a.kt)("h2",{id:"fragment"},"Fragment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728Vue2\u4e2d: \u7ec4\u4ef6\u5fc5\u987b\u6709\u4e00\u4e2a\u6839\u6807\u7b7e"),(0,a.kt)("li",{parentName:"ul"},"\u5728Vue3\u4e2d: \u7ec4\u4ef6\u53ef\u4ee5\u6ca1\u6709\u6839\u6807\u7b7e, \u5185\u90e8\u4f1a\u5c06\u591a\u4e2a\u6807\u7b7e\u5305\u542b\u5728\u4e00\u4e2aFragment\u865a\u62df\u5143\u7d20\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u597d\u5904: \u51cf\u5c11\u6807\u7b7e\u5c42\u7ea7, \u51cf\u5c0f\u5185\u5b58\u5360\u7528")),(0,a.kt)("h2",{id:"teleport"},"Teleport"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662fTeleport\uff1f\u2014\u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"Teleport")," \u662f\u4e00\u79cd\u80fd\u591f\u5c06\u6211\u4eec\u7684\u7ec4\u4ef6html\u7ed3\u6784\u79fb\u52a8\u5230\u6307\u5b9a\u4f4d\u7f6e\u7684\u6280\u672f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<teleport to="body"> // to\u5c31\u662f\u79fb\u52a8\u7684\u4f4d\u7f6e\uff0c\u53ef\u4ee5\u662fid\uff0c\u53ef\u4ee5\u662fclassName\uff0c\u53ef\u4ee5\u662f\u6807\u7b7e\u7b49\u7b49\u3002\n<div v-if="isShow" class="mask">\n    <div class="dialog">\n        <h3>\u6211\u662f\u4e00\u4e2a\u5f39\u7a97</h3>\n        <button @click="isShow = false">\u5173\u95ed\u5f39\u7a97</button>\n    </div>\n</div>\n</teleport>\n')),(0,a.kt)("h2",{id:"suspense"},"Suspense"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b49\u5f85\u5f02\u6b65\u7ec4\u4ef6\u65f6\u6e32\u67d3\u4e00\u4e9b\u989d\u5916\u5185\u5bb9\uff0c\u8ba9\u5e94\u7528\u6709\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6b65\u9aa4\uff1a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f02\u6b65\u5f15\u5165\u7ec4\u4ef6"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {defineAsyncComponent} from 'vue'\nconst AAA = defineAsyncComponent(()=>import('./components/AAA.vue'))\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"Suspense"),"\u5305\u88f9\u7ec4\u4ef6\uff0c\u5e76\u914d\u7f6e\u597d",(0,a.kt)("inlineCode",{parentName:"li"},"default")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"fallback"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n    <div class="app">\n        <h3>\u6211\u662fApp\u7ec4\u4ef6</h3>\n        <Suspense>\n            <template v-slot:default>\n                <Child/>\n            </template>\n            <template v-slot:fallback>\n                <h3>\u52a0\u8f7d\u4e2d.....</h3>\n            </template>\n        </Suspense>\n    </div>\n</template>\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u7684\u5f02\u6b65\u5f15\u5165\u7684\u5217\u5b50\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u5728AAA\u7ec4\u4ef6\u91cc\u9762\u7684setup\u589e\u52a0async\u4fee\u9970\uff0c\u5e76\u8fd4\u56dePromise\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"async setup(){\n  let a = ref(100)\n  let p = new Promise((resolve) => {\n    resolve({a})\n  })\n  return await p;\n}\n")))}m.isMDXComponent=!0}}]);