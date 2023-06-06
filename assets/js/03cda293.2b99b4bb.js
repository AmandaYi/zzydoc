"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[6913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},p="\u4f7f\u7528TypeScript\u5f00\u53d1\u4ee3\u7801\u8865\u5145",i={unversionedId:"js/design/package-ts",id:"js/design/package-ts",title:"\u4f7f\u7528TypeScript\u5f00\u53d1\u4ee3\u7801\u8865\u5145",description:"\u8865\u5145\u9700\u8981\u5982\u4e0b\u6539\u52a8",source:"@site/docs/js/design/package-ts.md",sourceDirName:"js/design",slug:"/js/design/package-ts",permalink:"/docs/js/design/package-ts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSCodeDesign",previous:{title:"\u524d\u7aef\u901a\u7528\u5de5\u5177\u5e93\u8bbe\u8ba1\u5f00\u53d1",permalink:"/docs/js/design/package"},next:{title:"\u7f16\u5199\u5de5\u5177\u5e93\u6587\u6863\u8bf4\u660e\u7f51\u7ad9",permalink:"/docs/js/design/package-doc"}},o={},s=[{value:"\u8c03\u6574\u4ee3\u7801\u7f16\u5199",id:"\u8c03\u6574\u4ee3\u7801\u7f16\u5199",level:2},{value:"\u6309\u7167TS\u8f6c\u8bd1\u4f9d\u8d56",id:"\u6309\u7167ts\u8f6c\u8bd1\u4f9d\u8d56",level:2},{value:"\u8c03\u6574webpack\u6784\u5efa\u914d\u7f6e",id:"\u8c03\u6574webpack\u6784\u5efa\u914d\u7f6e",level:2},{value:"\u589e\u52a0\u540e\u7f00\u652f\u6301",id:"\u589e\u52a0\u540e\u7f00\u652f\u6301",level:3},{value:"\u589e\u52a0ts-loader",id:"\u589e\u52a0ts-loader",level:3},{value:"\u589e\u52a0ts\u7684\u914d\u7f6e\u6587\u4ef6<code>tsconfig.json</code>",id:"\u589e\u52a0ts\u7684\u914d\u7f6e\u6587\u4ef6tsconfigjson",level:3},{value:"\u4fee\u6539package.json\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e",id:"\u4fee\u6539packagejson\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528typescript\u5f00\u53d1\u4ee3\u7801\u8865\u5145"},"\u4f7f\u7528TypeScript\u5f00\u53d1\u4ee3\u7801\u8865\u5145"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8865\u5145\u9700\u8981\u5982\u4e0b\u6539\u52a8")),(0,r.kt)("p",null,"TS\u5f15\u5165\u4e86\u4ee3\u7801\u7684\u7c7b\u578b\uff0c\u5176\u4ed6\u7684\u90fd\u4e0d\u4f1a\u53d8\u5316\uff0c\u90a3\u4e48\u4e3b\u8981\u4fee\u6539\u7684\u5c31\u662f\u81ea\u5df1\u81ea\u5b9a\u4e49\u7684\u5e93\u7684\uff0c\u5bf9\u51fd\u6570\u6216\u8005\u65b9\u6cd5\u589e\u52a0\u5bf9\u5e94\u7684\u7c7b\u578b\u4fee\u9970\u3002"),(0,r.kt)("h2",{id:"\u8c03\u6574\u4ee3\u7801\u7f16\u5199"},"\u8c03\u6574\u4ee3\u7801\u7f16\u5199"),(0,r.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u6253\u5f00shell\u547d\u4ee4\u884c\uff0c\u4fee\u6539\u6587\u4ef6\u540d, mv\u6bd4rename\u597d\u7528\u70b9\uff0crename\u8fd8\u9700\u8981\u5b89\u88c5util-linux\u5305"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u5de5\u5177\u5305\u7684\u6587\u4ef6\u540d\uff0c\u540c\u65f6\u4e3a\u4ee3\u7801\u589e\u52a0\u7c7b\u578b\u4fee\u9970\u7b26\u3002"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mv ./package/util/index.js ./package/util/index.ts")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'  - import {util} from "./util.js"\n  + import {util} from "./util" // \u540e\u7f00\u9ed8\u8ba4\u662f.ts \n    export {util}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mv ./package/util/util.js ./package/util/util.ts")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"    const util = {\n  -   isArray(v) {\n  +   isArray(v: any): boolean {\n\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539\u7edf\u4e00\u5bfc\u51fa\u7684\u6587\u4ef6\u540d"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mv ./src/main.js ./src/main.ts")),(0,r.kt)("p",{parentName:"li"},"\u5185\u5bb9\u4e0d\u9700\u8981\u6539"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'   import {util} from "../package/util";\n   import BaseCard from "../package/BaseCardComponent"\n   \n   export {util, BaseCard};\n')))))),(0,r.kt)("h2",{id:"\u6309\u7167ts\u8f6c\u8bd1\u4f9d\u8d56"},"\u6309\u7167TS\u8f6c\u8bd1\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"typescript",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ts\u7f16\u8bd1\u5668"))),(0,r.kt)("li",{parentName:"ul"},"ts-loader",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ts\u52a0\u8f7d\u5668\uff0c\u7528\u4e8e\u5728webpack\u4e2d\u7f16\u8bd1ts\u6587\u4ef6")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    npm install typescript ts-loader -D \n")),(0,r.kt)("h2",{id:"\u8c03\u6574webpack\u6784\u5efa\u914d\u7f6e"},"\u8c03\u6574webpack\u6784\u5efa\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e0d\u7ba1\u662fwebpack\u7684\u751f\u4ea7\u6784\u5efa\u914d\u7f6e\u8fd8\u662fwebpack\u7684\u5f00\u53d1\u73af\u5883\u914d\u7f6e\uff0c\u4e3a\u4e86\u8fd0\u884cts\u6587\u4ef6\uff0c\u5fc5\u987b\u8981\u505a\u76f8\u540c\u7684\u4fee\u6539\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4ee5\u751f\u6210\u6784\u5efa\u7684\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.production.js"),"\u4e3a\u4f8b"),(0,r.kt)("h3",{id:"\u589e\u52a0\u540e\u7f00\u652f\u6301"},"\u589e\u52a0\u540e\u7f00\u652f\u6301"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'    resolve: {\n        // \u517c\u5bb9\u5904\u7406\u540e\u7f00\u540d\uff0c\u6bd4\u5982\u5bfc\u5165\u5bfc\u51fa\u7684\u65f6\u5019\uff0c\u4e0d\u9700\u8981\u5199\u540e\u7f00\u540d\uff0c\u8ba9webpack\u8fdb\u884c\u81ea\u6211\u63a8\u65ad\n   -    extensions: [".js", ".vue"]\n   +    extensions: [".js", ".ts", ".vue"]\n    }\n')),(0,r.kt)("h3",{id:"\u589e\u52a0ts-loader"},"\u589e\u52a0ts-loader"),(0,r.kt)("p",null,"\u5728module\u7684loader\u5904\u7406\u89c4\u5219\u91cc\u9762\uff0c\u589e\u52a0\u65b0\u7684ts\u5339\u914d\u5904\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n    {\n        test: /\\.ts$/,\n        loader: 'babel-loader',\n        exclude: /node_modules/\n    }\n]\n")),(0,r.kt)("h3",{id:"\u589e\u52a0ts\u7684\u914d\u7f6e\u6587\u4ef6tsconfigjson"},"\u589e\u52a0ts\u7684\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")),(0,r.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efatsconfig.json\uff0c\u4e3a\u4e86\u8ba9ts-loader\u8c03\u7528tsc\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8f6c\u7801\uff0c\u914d\u7f6e\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u9700\u8981"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n    {\n        "compilerOptions": {\n            "target": "ES2015",\n            "module": "ES2015",\n            "strict": true\n        }\n    }\n```\n')),(0,r.kt)("h3",{id:"\u4fee\u6539packagejson\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e"},"\u4fee\u6539package.json\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'- ```json\n{\n    ...\u7565...\n    "scripts": {\n        "test": "echo \\"Error: no test specified\\" && exit 1",\n        "build": "webpack",\n        "start": "webpack serve --open chrome.exe"\n    },\n    ...\u7565...\n}\n```\n')))}m.isMDXComponent=!0}}]);