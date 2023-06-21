"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[4439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},i="10-\u63d2\u4ef6\u914d\u7f6e\uff1aHTML\u6587\u4ef6\u7684\u53d1\u5e03",o={unversionedId:"js/webpack3/10",id:"js/webpack3/10",title:"10-\u63d2\u4ef6\u914d\u7f6e\uff1aHTML\u6587\u4ef6\u7684\u53d1\u5e03",description:"\u6253\u5305HTML\u6587\u4ef6",source:"@site/docs/js/webpack3/10.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/10",permalink:"/docs/js/webpack3/10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"09-devServer\u548cJS\u538b\u7f29\u51b2\u7a81",permalink:"/docs/js/webpack3/09"},next:{title:"11-CSS\u4e2d\u56fe\u7247\u5904\u7406",permalink:"/docs/js/webpack3/11"}},p={},c=[{value:"\u6253\u5305HTML\u6587\u4ef6",id:"\u6253\u5305html\u6587\u4ef6",level:2},{value:"\u63d2\u4ef6,\u7528\u4e8e\u751f\u4ea7\u6a21\u677f,\u548c\u5404\u9879\u529f\u80fd",id:"\u63d2\u4ef6\u7528\u4e8e\u751f\u4ea7\u6a21\u677f\u548c\u5404\u9879\u529f\u80fd",level:2},{value:"\u603b\u7ed3\uff1a",id:"\u603b\u7ed3",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-\u63d2\u4ef6\u914d\u7f6ehtml\u6587\u4ef6\u7684\u53d1\u5e03"},"10-\u63d2\u4ef6\u914d\u7f6e\uff1aHTML\u6587\u4ef6\u7684\u53d1\u5e03"),(0,a.kt)("h2",{id:"\u6253\u5305html\u6587\u4ef6"},"\u6253\u5305HTML\u6587\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u5148\u628adist\u4e2d\u7684html\u6587\u4ef6\u526a\u5207\u5230src\u76ee\u5f55\u4e2d\uff0c\u5e76\u53bb\u6389\u6211\u4eec\u7684JS\u5f15\u5165\u4ee3\u7801\uff08webpack\u4f1a\u81ea\u52a8\u4e3a\u6211\u4eec\u5f15\u5165JS\uff09\uff0c\u56e0\u4e3a\u8fd9\u624d\u662f\u6211\u4eec\u771f\u5b9e\u5de5\u4f5c\u7684\u76ee\u5f55\u6587\u4ef6\u7ed3\u6784\u3002\n\u7136\u540e\u6211\u4eec\u914d\u7f6ewebpack.config.js\u6587\u4ef6\uff0c\u5148\u5f15\u5165\u6211\u4eec\u7684html-webpack-plugin\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"const htmlPlugin = require('html-webpack-plugin')")),(0,a.kt)("p",null,"\u5f15\u5165\u540e\u4f7f\u7528npm\u8fdb\u884c\u5b89\u88c5\u5305\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save-dev html-webpack-plugin")),(0,a.kt)("p",null,"\u6700\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u91cc\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\u91cc\u8fdb\u884c\u63d2\u4ef6\u914d\u7f6e\uff0c\u914d\u7f6e\u4ee3\u7801\u5982\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u7528\u4e8e\u751f\u4ea7\u6a21\u677f\u548c\u5404\u9879\u529f\u80fd"},"\u63d2\u4ef6,\u7528\u4e8e\u751f\u4ea7\u6a21\u677f,\u548c\u5404\u9879\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'plugins: [new uglify(), new htmlPlugin({\n// minify\uff1a\u662f\u5bf9html\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\uff0cremoveAttrubuteQuotes\u662f\u5374\u6389\u5c5e\u6027\u7684\u53cc\u5f15\u53f7\u3002\nminify:{\nremoveAttributeQuotes:true\n},\nhash:true,//hash\uff1a\u4e3a\u4e86\u5f00\u53d1\u4e2djs\u6709\u7f13\u5b58\u6548\u679c\uff0c\u6240\u4ee5\u52a0\u5165hash\uff0c\u8fd9\u6837\u53ef\u4ee5\u6709\u6548\u907f\u514d\u7f13\u5b58JS\u3002\ntemplate:"./src/index.html"//template\uff1a\u662f\u8981\u6253\u5305\u7684html\u6a21\u7248\u8def\u5f84\u548c\u6587\u4ef6\u540d\u79f0\u3002\n})],\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"minify\uff1a\u662f\u5bf9html\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\uff0cremoveAttrubuteQuotes\u662f\u5374\u6389\u5c5e\u6027\u7684\u53cc\u5f15\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},"hash\uff1a\u4e3a\u4e86\u5f00\u53d1\u4e2djs\u6709\u7f13\u5b58\u6548\u679c\uff0c\u6240\u4ee5\u52a0\u5165hash\uff0c\u8fd9\u6837\u53ef\u4ee5\u6709\u6548\u907f\u514d\u7f13\u5b58JS\u3002"),(0,a.kt)("li",{parentName:"ul"},"template\uff1a\u662f\u8981\u6253\u5305\u7684html\u6a21\u7248\u8def\u5f84\u548c\u6587\u4ef6\u540d\u79f0\u3002")),(0,a.kt)("p",null,"\u4e0a\u8fb9\u7684\u90fd\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528webpack\uff0c\u8fdb\u884c\u6253\u5305\u3002\n\u4f60\u4f1a\u770b\u5230index.html\u6587\u4ef6\u5df2\u7ecf\u88ab\u6253\u5305\u5230\u6211\u4eec\u7684dist\u76ee\u5f55\u4e0b\u4e86\uff0c\u5e76\u4e14\u81ea\u52a8\u4e3a\u6211\u4eec\u5f15\u5165\u4e86\u8def\u53e3\u7684JS\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3\uff1a"),(0,a.kt)("p",null,"html\u6587\u4ef6\u7684\u6253\u5305\u53ef\u4ee5\u6709\u6548\u7684\u533a\u5206\u5f00\u53d1\u76ee\u5f55\u548c\u751f\u4ea7\u76ee\u5f55\uff0c\u5728webpack\u7684\u914d\u7f6e\u4e2d\u4e5f\u8981\u641e\u6e05\u695a\u54ea\u4e9b\u914d\u7f6e\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u54ea\u4e9b\u914d\u7f6e\u7528\u4e8e\u5f00\u53d1\u73af\u5883\uff0c\u907f\u514d\u4e24\u79cd\u73af\u5883\u7684\u914d\u7f6e\u51b2\u7a81\u3002"))}m.isMDXComponent=!0}}]);