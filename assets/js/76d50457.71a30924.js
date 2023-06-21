"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[2320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=m(n),u=l,d=c["".concat(o,".").concat(u)]||c[u]||s[u]||r;return n?a.createElement(d,i(i({ref:t},k),{},{components:n})):a.createElement(d,i({ref:t},k))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={},i="react\u5e38\u8bc6",p={unversionedId:"js/react/base",id:"js/react/base",title:"react\u5e38\u8bc6",description:"react\u57fa\u672c\u6982\u8ff0",source:"@site/docs/js/react/base.md",sourceDirName:"js/react",slug:"/js/react/base",permalink:"/docs/js/react/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSReact",next:{title:"react\u57fa\u7840\u5185\u5bb9",permalink:"/docs/js/react/normal"}},o={},m=[{value:"react\u57fa\u672c\u6982\u8ff0",id:"react\u57fa\u672c\u6982\u8ff0",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"JSX",id:"jsx",level:2},{value:"\u6a21\u5757\u6982\u5ff5",id:"\u6a21\u5757\u6982\u5ff5",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:3},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:3},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:3},{value:"\u7ec4\u4ef6\u5316",id:"\u7ec4\u4ef6\u5316",level:3},{value:"\u7eaf\u51fd\u6570",id:"\u7eaf\u51fd\u6570",level:2},{value:"\u9ad8\u9636\u51fd\u6570",id:"\u9ad8\u9636\u51fd\u6570",level:2},{value:"\u9ad8\u9636\u7ec4\u4ef6",id:"\u9ad8\u9636\u7ec4\u4ef6",level:2},{value:"\u51fd\u6570\u7684\u67ef\u91cc\u5316",id:"\u51fd\u6570\u7684\u67ef\u91cc\u5316",level:2},{value:"\u865a\u62dfDOM",id:"\u865a\u62dfdom",level:2},{value:"react\u4e2dkey\u7684\u4f5c\u7528",id:"react\u4e2dkey\u7684\u4f5c\u7528",level:2}],k={toc:m},c="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"react\u5e38\u8bc6"},"react\u5e38\u8bc6"),(0,l.kt)("h2",{id:"react\u57fa\u672c\u6982\u8ff0"},"react\u57fa\u672c\u6982\u8ff0"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b98\u7f51")),(0,l.kt)("p",null,"\u82f1\u6587\u5b98\u7f51: ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"https://reactjs.org/"),"\n\u4e2d\u6587\u5b98\u7f51: ",(0,l.kt)("a",{parentName:"p",href:"https://react.docschina.org/"},"https://react.docschina.org/")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u63cf\u8ff0")),(0,l.kt)("p",null,"\u7528\u4e8e\u52a8\u6001\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93(\u53ea\u5173\u6ce8\u4e8e\u89c6\u56fe)"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7279\u70b9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u7f16\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5316\u7f16\u7801"),(0,l.kt)("li",{parentName:"ul"},"React Native \u7f16\u5199\u539f\u751f\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6548\uff08\u4f18\u79c0\u7684Diffing\u7b97\u6cd5\uff09"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9ad8\u6548\u7684\u539f\u56e0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u865a\u62df(virtual)DOM, \u4e0d\u603b\u662f\u76f4\u63a5\u64cd\u4f5c\u9875\u9762\u771f\u5b9eDOM\u3002"),(0,l.kt)("li",{parentName:"ul"},"DOM Diffing\u7b97\u6cd5, \u6700\u5c0f\u5316\u9875\u9762\u91cd\u7ed8\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5173\u4e8e\u865a\u62dfDOM"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u672c\u8d28\u662fObject\u7c7b\u578b\u7684\u5bf9\u8c61\uff08\u4e00\u822c\u5bf9\u8c61\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u865a\u62dfDOM\u6bd4\u8f83\u201c\u8f7b\u201d\uff0c\u771f\u5b9eDOM\u6bd4\u8f83\u201c\u91cd\u201d\uff0c\u56e0\u4e3a\u865a\u62dfDOM\u662fReact\u5185\u90e8\u5728\u7528\uff0c\u65e0\u9700\u771f\u5b9eDOM\u4e0a\u90a3\u4e48\u591a\u7684\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u865a\u62dfDOM\u6700\u7ec8\u4f1a\u88abReact\u8f6c\u5316\u4e3a\u771f\u5b9eDOM\uff0c\u5448\u73b0\u5728\u9875\u9762\u4e0a\u3002")))),(0,l.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"react.js\uff1aReact\u6838\u5fc3\u5e93\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"react-dom.js\uff1a\u63d0\u4f9b\u64cd\u4f5cDOM\u7684react\u6269\u5c55\u5e93\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"babel.min.js\uff1a\u89e3\u6790JSX\u8bed\u6cd5\u4ee3\u7801\u8f6c\u4e3aJS\u4ee3\u7801\u7684\u5e93\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"React\u63d0\u4f9b\u4e86\u4e00\u4e9bAPI\u6765\u521b\u5efa\u4e00\u79cd \u201c\u7279\u522b\u201d \u7684\u4e00\u822cjs\u5bf9\u8c61\nconst VDOM = React.createElement('xx',{id:'xx'},'xx')\n\u4e0a\u9762\u521b\u5efa\u7684\u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u865a\u62dfDOM\u5bf9\u8c61")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u7f16\u7801\u65f6\u57fa\u672c\u53ea\u9700\u8981\u64cd\u4f5creact\u7684\u865a\u62dfDOM\u76f8\u5173\u6570\u636e, react\u4f1a\u8f6c\u6362\u4e3a\u771f\u5b9eDOM\u53d8\u5316\u800c\u66f4\u65b0\u754c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6e32\u67d3\u5230\u9875\u9762\n",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(virtualDOM, containerDOM)"),"\nvirtualDOM: \u7eafjs\u6216jsx\u521b\u5efa\u7684\u865a\u62dfdom\u5bf9\u8c61; containerDOM: \u7528\u6765\u5305\u542b\u865a\u62dfDOM\u5143\u7d20\u7684\u771f\u5b9edom\u5143\u7d20\u5bf9\u8c61(\u4e00\u822c\u662f\u4e00\u4e2adiv)."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>hello_react</title>\n</head>\n<body>\n    \x3c!-- \u51c6\u5907\u597d\u4e00\u4e2a\u201c\u5bb9\u5668\u201d --\x3e\n    <div id="test"></div>\n\n    \x3c!-- \u5f15\u5165react\u6838\u5fc3\u5e93 --\x3e\n    <script type="text/javascript" src="../js/react.development.js"><\/script>\n    \x3c!-- \u5f15\u5165react-dom\uff0c\u7528\u4e8e\u652f\u6301react\u64cd\u4f5cDOM --\x3e\n    <script type="text/javascript" src="../js/react-dom.development.js"><\/script>\n    \x3c!-- \u5f15\u5165babel\uff0c\u7528\u4e8e\u5c06jsx\u8f6c\u4e3ajs --\x3e\n    <script type="text/javascript" src="../js/babel.min.js"><\/script>\n\n    <script type="text/babel" > /* \u6b64\u5904\u4e00\u5b9a\u8981\u5199babel */\n        //1.\u521b\u5efa\u865a\u62dfDOM [\u865a\u62dfDOM\u5bf9\u8c61\u6700\u7ec8\u90fd\u4f1a\u88abReact\u8f6c\u6362\u4e3a\u771f\u5b9e\u7684DOM]\n        const VDOM = <h1>Hello,React</h1> /* \u6b64\u5904\u4e00\u5b9a\u4e0d\u8981\u5199\u5f15\u53f7\uff0c\u56e0\u4e3a\u4e0d\u662f\u5b57\u7b26\u4e32 */\n        //2.\u6e32\u67d3\u865a\u62dfDOM\u5230\u9875\u9762\n        ReactDOM.render(VDOM,document.getElementById(\'test\'))\n    <\/script>\n</body>\n</html>\n')),(0,l.kt)("h2",{id:"jsx"},"JSX"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5168\u79f0:  JavaScript XML")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"react\u5b9a\u4e49\u7684\u4e00\u79cd\u7c7b\u4f3c\u4e8eXML\u7684JS\u6269\u5c55\u8bed\u6cd5: ",(0,l.kt)("inlineCode",{parentName:"p"},"JS + XML"),"\u672c\u8d28\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement(component, props, ...children)"),"\u65b9\u6cd5\u7684\u8bed\u6cd5\u7cd6")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f5c\u7528: \u7528\u6765\u7b80\u5316\u521b\u5efa\u865a\u62dfDOM "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5199\u6cd5\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"var ele = <h1>Hello JSX!</h1>")),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f1\uff1a\u5b83\u4e0d\u662f\u5b57\u7b26\u4e32, \u4e5f\u4e0d\u662fHTML/XML\u6807\u7b7e"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f2\uff1a\u5b83\u6700\u7ec8\u4ea7\u751f\u7684\u5c31\u662f\u4e00\u4e2aJS\u5bf9\u8c61"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6807\u7b7e\u540d\u4efb\u610f: HTML\u6807\u7b7e\u6216\u5176\u5b83\u6807\u7b7e")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6807\u7b7e\u5c5e\u6027\u4efb\u610f: HTML\u6807\u7b7e\u5c5e\u6027\u6216\u5176\u5b83")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u672c\u8bed\u6cd5\u89c4\u5219"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9047\u5230 <\u5f00\u5934\u7684\u4ee3\u7801, \u4ee5\u6807\u7b7e\u7684\u8bed\u6cd5\u89e3\u6790: html\u540c\u540d\u6807\u7b7e\u8f6c\u6362\u4e3ahtml\u540c\u540d\u5143\u7d20, \u5176\u5b83\u6807\u7b7e\u9700\u8981\u7279\u522b\u89e3\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u9047\u5230\u4ee5 { \u5f00\u5934\u7684\u4ee3\u7801\uff0c\u4ee5JS\u8bed\u6cd5\u89e3\u6790: \u6807\u7b7e\u4e2d\u7684js\u8868\u8fbe\u5f0f\u5fc5\u987b\u7528{ }\u5305\u542b"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"babel.js\u7684\u4f5c\u7528"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e0d\u80fd\u76f4\u63a5\u89e3\u6790JSX\u4ee3\u7801, \u9700\u8981babel\u8f6c\u8bd1\u4e3a\u7eafJS\u7684\u4ee3\u7801\u624d\u80fd\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u8981\u7528\u4e86JSX\uff0c\u90fd\u8981\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"li"},'type="text/babel"'),", \u58f0\u660e\u9700\u8981babel\u6765\u5904\u7406"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"jsx\u8bed\u6cd5\u89c4\u5219\uff1a"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u865a\u62dfDOM\u65f6\uff0c\u4e0d\u8981\u5199\u5f15\u53f7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6807\u7b7e\u4e2d\u6df7\u5165JS\u8868\u8fbe\u5f0f\u65f6\u8981\u7528{}\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6837\u5f0f\u7684\u7c7b\u540d\u6307\u5b9a\u4e0d\u8981\u7528class\uff0c\u8981\u7528className\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5185\u8054\u6837\u5f0f\uff0c\u8981\u7528style={{key:value}}\u7684\u5f62\u5f0f\u53bb\u5199\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53ea\u6709\u4e00\u4e2a\u6839\u6807\u7b7e"),(0,l.kt)("li",{parentName:"ol"},"\u6807\u7b7e\u5fc5\u987b\u95ed\u5408"),(0,l.kt)("li",{parentName:"ol"},"\u6807\u7b7e\u9996\u5b57\u6bcd\n(1).\u82e5\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\uff0c\u5219\u5c06\u8be5\u6807\u7b7e\u8f6c\u4e3ahtml\u4e2d\u540c\u540d\u5143\u7d20\uff0c\u82e5html\u4e2d\u65e0\u8be5\u6807\u7b7e\u5bf9\u5e94\u7684\u540c\u540d\u5143\u7d20\uff0c\u5219\u62a5\u9519\u3002\n(2).\u82e5\u5927\u5199\u5b57\u6bcd\u5f00\u5934\uff0creact\u5c31\u53bb\u6e32\u67d3\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u82e5\u7ec4\u4ef6\u6ca1\u6709\u5b9a\u4e49\uff0c\u5219\u62a5\u9519\u3002")))),(0,l.kt)("h2",{id:"\u6a21\u5757\u6982\u5ff5"},"\u6a21\u5757\u6982\u5ff5"),(0,l.kt)("h3",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7406\u89e3\uff1a\u5411\u5916\u63d0\u4f9b\u7279\u5b9a\u529f\u80fd\u7684js\u7a0b\u5e8f, \u4e00\u822c\u5c31\u662f\u4e00\u4e2ajs\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u62c6\u6210\u6a21\u5757\uff1a\u968f\u7740\u4e1a\u52a1\u903b\u8f91\u589e\u52a0\uff0c\u4ee3\u7801\u8d8a\u6765\u8d8a\u591a\u4e14\u590d\u6742\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f5c\u7528\uff1a\u590d\u7528js, \u7b80\u5316js\u7684\u7f16\u5199, \u63d0\u9ad8js\u8fd0\u884c\u6548\u7387")),(0,l.kt)("h3",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7406\u89e3\uff1a\u7528\u6765\u5b9e\u73b0\u5c40\u90e8\u529f\u80fd\u6548\u679c\u7684\u4ee3\u7801\u548c\u8d44\u6e90\u7684\u96c6\u5408(html/css/js/image\u7b49\u7b49)"),(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u7528\u7ec4\u4ef6\uff1a \u4e00\u4e2a\u754c\u9762\u7684\u529f\u80fd\u66f4\u590d\u6742"),(0,l.kt)("li",{parentName:"ol"},"\u4f5c\u7528\uff1a\u590d\u7528\u7f16\u7801, \u7b80\u5316\u9879\u76ee\u7f16\u7801, \u63d0\u9ad8\u8fd0\u884c\u6548\u7387")),(0,l.kt)("h3",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,l.kt)("p",null,"\u5f53\u5e94\u7528\u7684js\u90fd\u4ee5\u6a21\u5757\u6765\u7f16\u5199\u7684, \u8fd9\u4e2a\u5e94\u7528\u5c31\u662f\u4e00\u4e2a\u6a21\u5757\u5316\u7684\u5e94\u7528"),(0,l.kt)("h3",{id:"\u7ec4\u4ef6\u5316"},"\u7ec4\u4ef6\u5316"),(0,l.kt)("p",null,"\u5f53\u5e94\u7528\u662f\u4ee5\u591a\u7ec4\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0, \u8fd9\u4e2a\u5e94\u7528\u5c31\u662f\u4e00\u4e2a\u7ec4\u4ef6\u5316\u7684\u5e94\u7528"),(0,l.kt)("h2",{id:"\u7eaf\u51fd\u6570"},"\u7eaf\u51fd\u6570"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u7c7b\u7279\u522b\u7684\u51fd\u6570: \u53ea\u8981\u662f\u540c\u6837\u7684\u8f93\u5165(\u5b9e\u53c2)\uff0c\u5fc5\u5b9a\u5f97\u5230\u540c\u6837\u7684\u8f93\u51fa(\u8fd4\u56de)"),(0,l.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u9075\u5b88\u4ee5\u4e0b\u4e00\u4e9b\u7ea6\u675f  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5f97\u6539\u5199\u53c2\u6570\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u526f\u4f5c\u7528\uff0c\u4f8b\u5982\u7f51\u7edc\u8bf7\u6c42\uff0c\u8f93\u5165\u548c\u8f93\u51fa\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u8c03\u7528Date.now()\u6216\u8005Math.random()\u7b49\u4e0d\u7eaf\u7684\u65b9\u6cd5  "))),(0,l.kt)("li",{parentName:"ol"},"redux\u7684reducer\u51fd\u6570\u5fc5\u987b\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570")),(0,l.kt)("h2",{id:"\u9ad8\u9636\u51fd\u6570"},"\u9ad8\u9636\u51fd\u6570"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u7b26\u5408\u4e0b\u97622\u4e2a\u89c4\u8303\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff0c\u90a3\u8be5\u51fd\u6570\u5c31\u662f\u9ad8\u9636\u51fd\u6570\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u82e5A\u51fd\u6570\uff0c\u63a5\u6536\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48A\u5c31\u53ef\u4ee5\u79f0\u4e4b\u4e3a\u9ad8\u9636\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u82e5A\u51fd\u6570\uff0c\u8c03\u7528\u7684\u8fd4\u56de\u503c\u4f9d\u7136\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48A\u5c31\u53ef\u4ee5\u79f0\u4e4b\u4e3a\u9ad8\u9636\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7406\u89e3: \u4e00\u7c7b\u7279\u522b\u7684\u51fd\u6570\n1)\t\u60c5\u51b51: \u53c2\u6570\u662f\u51fd\u6570\n2)\t\u60c5\u51b52: \u8fd4\u56de\u662f\u51fd\u6570")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5e38\u89c1\u7684\u9ad8\u9636\u51fd\u6570:\n1)\t\u5b9a\u65f6\u5668\u8bbe\u7f6e\u51fd\u6570\n2)\t\u6570\u7ec4\u7684forEach()/map()/filter()/reduce()/find()/bind()\n3)\tpromise\n4)\treact-redux\u4e2d\u7684connect\u51fd\u6570")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f5c\u7528: \u80fd\u5b9e\u73b0\u66f4\u52a0\u52a8\u6001, \u66f4\u52a0\u53ef\u6269\u5c55\u7684\u529f\u80fd"))),(0,l.kt)("h2",{id:"\u9ad8\u9636\u7ec4\u4ef6"},"\u9ad8\u9636\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u548c\u4e0a\u9762\u7684\u9ad8\u9636\u51fd\u6570\u5dee\u4e0d\u591a\uff0c\u7406\u4f1a\u5373\u53ef\uff0c\u5e38\u7528\u4e8e\u88c5\u9970\u5668\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f20\u7ed9\u5b83\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u3002\u65b0\u7684\u7ec4\u4ef6\u4f7f\u7528\u4f20\u5165\u7684\u7ec4\u4ef6\u4f5c\u4e3a\u5b50\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u7684\u4f5c\u7528\u662f\u7528\u4e8e\u4ee3\u7801\u590d\u7528\uff0c\u53ef\u4ee5\u628a\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u590d\u7528\u7684\u4ee3\u7801\u3001\u903b\u8f91\u62bd\u79bb\u5230\u9ad8\u9636\u7ec4\u4ef6\u5f53\u4e2d\u3002\u65b0\u7684\u7ec4\u4ef6\u548c\u4f20\u5165\u7684\u7ec4\u4ef6\u901a\u8fc7 props \u4f20\u9012\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u9ad8\u9636\u7ec4\u4ef6\u6709\u52a9\u4e8e\u63d0\u9ad8\u6211\u4eec\u4ee3\u7801\u7684\u7075\u6d3b\u6027\uff0c\u903b\u8f91\u7684\u590d\u7528\u6027\u3002"),(0,l.kt)("h2",{id:"\u51fd\u6570\u7684\u67ef\u91cc\u5316"},"\u51fd\u6570\u7684\u67ef\u91cc\u5316"),(0,l.kt)("p",null,"\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u7ee7\u7eed\u8fd4\u56de\u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u591a\u6b21\u63a5\u6536\u53c2\u6570\u6700\u540e\u7edf\u4e00\u5904\u7406\u7684\u51fd\u6570\u7f16\u7801\u5f62\u5f0f\u3002 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function sum(a){\n    return(b)=>{\n        return (c)=>{\n            return a+b+c\n        }\n    }\n}\n")),(0,l.kt)("h2",{id:"\u865a\u62dfdom"},"\u865a\u62dfDOM"),(0,l.kt)("p",null,"\u865a\u62dfDOM\u6700\u4e3b\u8981\u7684\u5c31\u662f\uff0c\u76f8\u4e92\u6bd4\u8f83\u7684\u6700\u5c0f\u5355\u4f4d\u662f\u6807\u7b7e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u865a\u62dfDOM\u548cDiff\u7b97\u6cd5",src:n(51627).Z,width:"1334",height:"534"})),(0,l.kt)("h2",{id:"react\u4e2dkey\u7684\u4f5c\u7528"},"react\u4e2dkey\u7684\u4f5c\u7528"),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e24\u4e2a\u662f\u4e00\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"react/vue\u4e2d\u7684key\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f\uff08key\u7684\u5185\u90e8\u539f\u7406\u662f\u4ec0\u4e48\uff1f\uff09")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u904d\u5386\u5217\u8868\u65f6\uff0ckey\u6700\u597d\u4e0d\u8981\u7528index?")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u865a\u62dfDOM\u4e2dkey\u7684\u4f5c\u7528\uff1a\n1). \u7b80\u5355\u7684\u8bf4: key\u662f\u865a\u62dfDOM\u5bf9\u8c61\u7684\u6807\u8bc6, \u5728\u66f4\u65b0\u663e\u793a\u65f6key\u8d77\u7740\u6781\u5176\u91cd\u8981\u7684\u4f5c\u7528\u3002"),(0,l.kt)("p",{parentName:"li"},"2). \u8be6\u7ec6\u7684\u8bf4: \u5f53\u72b6\u6001\u4e2d\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0creact\u4f1a\u6839\u636e\u3010\u65b0\u6570\u636e\u3011\u751f\u6210\u3010\u65b0\u7684\u865a\u62dfDOM\u3011, \u968f\u540eReact\u8fdb\u884c\u3010\u65b0\u865a\u62dfDOM\u3011\u4e0e\u3010\u65e7\u865a\u62dfDOM\u3011\u7684diff\u6bd4\u8f83\uff0c\u6bd4\u8f83\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"a. \u65e7\u865a\u62dfDOM\u4e2d\u627e\u5230\u4e86\u4e0e\u65b0\u865a\u62dfDOM\u76f8\u540c\u7684key\uff1a\n            (1).\u82e5\u865a\u62dfDOM\u4e2d\u5185\u5bb9\u6ca1\u53d8, \u76f4\u63a5\u4f7f\u7528\u4e4b\u524d\u7684\u771f\u5b9eDOM\n            (2).\u82e5\u865a\u62dfDOM\u4e2d\u5185\u5bb9\u53d8\u4e86, \u5219\u751f\u6210\u65b0\u7684\u771f\u5b9eDOM\uff0c\u968f\u540e\u66ff\u6362\u6389\u9875\u9762\u4e2d\u4e4b\u524d\u7684\u771f\u5b9eDOM\n\nb. \u65e7\u865a\u62dfDOM\u4e2d\u672a\u627e\u5230\u4e0e\u65b0\u865a\u62dfDOM\u76f8\u540c\u7684key\n        \u6839\u636e\u6570\u636e\u521b\u5efa\u65b0\u7684\u771f\u5b9eDOM\uff0c\u968f\u540e\u6e32\u67d3\u5230\u5230\u9875\u9762\n                            \n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7528index\u4f5c\u4e3akey\u53ef\u80fd\u4f1a\u5f15\u53d1\u7684\u95ee\u9898\uff1a"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u82e5\u5bf9\u6570\u636e\u8fdb\u884c\uff1a\u9006\u5e8f\u6dfb\u52a0\u3001\u9006\u5e8f\u5220\u9664\u7b49\u7834\u574f\u987a\u5e8f\u64cd\u4f5c:\n\u4f1a\u4ea7\u751f\u6ca1\u6709\u5fc5\u8981\u7684\u771f\u5b9eDOM\u66f4\u65b0 ==> \u754c\u9762\u6548\u679c\u6ca1\u95ee\u9898, \u4f46\u6548\u7387\u4f4e\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u7ed3\u6784\u4e2d\u8fd8\u5305\u542b\u8f93\u5165\u7c7b\u7684DOM\uff1a\n\u4f1a\u4ea7\u751f\u9519\u8befDOM\u66f4\u65b0 ==> \u754c\u9762\u6709\u95ee\u9898\u3002\n")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff01\u5982\u679c\u4e0d\u5b58\u5728\u5bf9\u6570\u636e\u7684\u9006\u5e8f\u6dfb\u52a0\u3001\u9006\u5e8f\u5220\u9664\u7b49\u7834\u574f\u987a\u5e8f\u64cd\u4f5c\uff0c\n\u4ec5\u7528\u4e8e\u6e32\u67d3\u5217\u8868\u7528\u4e8e\u5c55\u793a\uff0c\u4f7f\u7528index\u4f5c\u4e3akey\u662f\u6ca1\u6709\u95ee\u9898\u7684\u3002\n")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u53d1\u4e2d\u5982\u4f55\u9009\u62e9key?:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6700\u597d\u4f7f\u7528\u6bcf\u6761\u6570\u636e\u7684\u552f\u4e00\u6807\u8bc6\u4f5c\u4e3akey, \u6bd4\u5982id\u3001\u624b\u673a\u53f7\u3001\u8eab\u4efd\u8bc1\u53f7\u3001\u5b66\u53f7\u7b49\u552f\u4e00\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u786e\u5b9a\u53ea\u662f\u7b80\u5355\u7684\u5c55\u793a\u6570\u636e\uff0c\u7528index\u4e5f\u662f\u53ef\u4ee5\u7684\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\n<script type=\"text/babel\">\n    class Person extends React.Component{\n\n        state = {\n            persons:[\n                {id:1,name:'\u5c0f\u5f20',age:18},\n                {id:2,name:'\u5c0f\u674e',age:19},\n            ]\n        }\n\n        add = ()=>{\n            const {persons} = this.state\n            const p = {id:persons.length+1,name:'\u5c0f\u738b',age:20}\n            this.setState({persons:[p,...persons]})\n        }\n\n        render(){\n            return (\n                <div>\n                    <h2>\u5c55\u793a\u4eba\u5458\u4fe1\u606f</h2>\n                    <button onClick={this.add}>\u6dfb\u52a0\u4e00\u4e2a\u5c0f\u738b</button>\n                    <h3>\u4f7f\u7528index\uff08\u7d22\u5f15\u503c\uff09\u4f5c\u4e3akey</h3>\n                    <ul>\n                        {\n                            this.state.persons.map((personObj,index)=>{\n                                return <li key={index}>{personObj.name}---{personObj.age}<input type=\"text\"/></li>\n                            })\n                        }\n                    </ul>\n                    <hr/>\n                    <hr/>\n                    <h3>\u4f7f\u7528id\uff08\u6570\u636e\u7684\u552f\u4e00\u6807\u8bc6\uff09\u4f5c\u4e3akey</h3>\n                    <ul>\n                        {\n                            this.state.persons.map((personObj)=>{\n                                return <li key={personObj.id}>{personObj.name}---{personObj.age}<input type=\"text\"/></li>\n                            })\n                        }\n                    </ul>\n                </div>\n            )\n        }\n    }\n\n    ReactDOM.render(<Person/>,document.getElementById('test'))\n<\/script>\n\n")),(0,l.kt)("p",null,"\u6162\u52a8\u4f5c\u56de\u653e----\u4f7f\u7528index\u7d22\u5f15\u503c\u4f5c\u4e3akey"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u521d\u59cb\u6570\u636e\uff1a\n        {id:1,name:'\u5c0f\u5f20',age:18},\n        {id:2,name:'\u5c0f\u674e',age:19},\n\u521d\u59cb\u7684\u865a\u62dfDOM\uff1a\n        <li key=0>\u5c0f\u5f20---18<input type=\"text\"/></li>\n        <li key=1>\u5c0f\u674e---19<input type=\"text\"/></li>\n\n\u66f4\u65b0\u540e\u7684\u6570\u636e\uff1a\n        {id:3,name:'\u5c0f\u738b',age:20},\n        {id:1,name:'\u5c0f\u5f20',age:18},\n        {id:2,name:'\u5c0f\u674e',age:19},\n\u66f4\u65b0\u6570\u636e\u540e\u7684\u865a\u62dfDOM\uff1a\n        <li key=0>\u5c0f\u738b---20<input type=\"text\"/></li>\n        <li key=1>\u5c0f\u5f20---18<input type=\"text\"/></li>\n        <li key=2>\u5c0f\u674e---19<input type=\"text\"/></li>\n\n-----------------------------------------------------------------\n")),(0,l.kt)("p",null,"\u6162\u52a8\u4f5c\u56de\u653e----\u4f7f\u7528id\u552f\u4e00\u6807\u8bc6\u4f5c\u4e3akey"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    \u521d\u59cb\u6570\u636e\uff1a\n            {id:1,name:'\u5c0f\u5f20',age:18},\n            {id:2,name:'\u5c0f\u674e',age:19},\n    \u521d\u59cb\u7684\u865a\u62dfDOM\uff1a\n            <li key=1>\u5c0f\u5f20---18<input type=\"text\"/></li>\n            <li key=2>\u5c0f\u674e---19<input type=\"text\"/></li>\n\n    \u66f4\u65b0\u540e\u7684\u6570\u636e\uff1a\n            {id:3,name:'\u5c0f\u738b',age:20},\n            {id:1,name:'\u5c0f\u5f20',age:18},\n            {id:2,name:'\u5c0f\u674e',age:19},\n    \u66f4\u65b0\u6570\u636e\u540e\u7684\u865a\u62dfDOM\uff1a\n            <li key=3>\u5c0f\u738b---20<input type=\"text\"/></li>\n            <li key=1>\u5c0f\u5f20---18<input type=\"text\"/></li>\n            <li key=2>\u5c0f\u674e---19<input type=\"text\"/></li>\n")))}s.isMDXComponent=!0},51627:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vdom-d53f53eff638a9b7d0ef7ffe6ea96494.png"}}]);