"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[6456],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),y=a,d=m["".concat(p,".").concat(y)]||m[y]||s[y]||i;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},85915:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={sidebar_position:18},l="DB\u7f13\u5b58\u673a\u5236",o={unversionedId:"go-zero/extension/sql-cache",id:"go-zero/extension/sql-cache",title:"DB\u7f13\u5b58\u673a\u5236",description:"QueryRowIndex",source:"@site/docs/go-zero/extension/sql-cache.md",sourceDirName:"go-zero/extension",slug:"/go-zero/extension/sql-cache",permalink:"/docs/go-zero/extension/sql-cache",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"GoZero",previous:{title:"\u9632\u6b62\u7f13\u5b58\u51fb\u7a7f\u4e4b\u8fdb\u7a0b\u5185\u5171\u4eab\u8c03\u7528",permalink:"/docs/go-zero/extension/sharedcalls"},next:{title:"zRPC\u4f7f\u7528\u4ecb\u7ecd",permalink:"/docs/go-zero/extension/zrpc"}},p={},u=[{value:"QueryRowIndex",id:"queryrowindex",level:2}],c={toc:u},m="wrapper";function s(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"db\u7f13\u5b58\u673a\u5236"},"DB\u7f13\u5b58\u673a\u5236"),(0,a.kt)("h2",{id:"queryrowindex"},"QueryRowIndex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u67e5\u8be2\u6761\u4ef6\u5230Primary\u6620\u5c04\u7684\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u67e5\u8be2\u6761\u4ef6\u5230DB\u53bb\u67e5\u8be2\u884c\u8bb0\u5f55\uff0c\u7136\u540e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u628aPrimary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u5199\u5230redis\u91cc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u628a\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u4fdd\u5b58\u5230redis\u91cc"),"\uff0c",(0,a.kt)("em",{parentName:"li"},"\u6846\u67b6\u7684Take\u65b9\u6cd5\u81ea\u52a8\u505a\u4e86")))),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u7684\u8fc7\u671f\u987a\u5e8f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u7f13\u5b58\u672a\u8fc7\u671f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u672a\u8fc7\u671f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u884c\u8bb0\u5f55"))),(0,a.kt)("li",{parentName:"ul"},"Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u5df2\u8fc7\u671f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7Primary\u5230DB\u83b7\u53d6\u884c\u8bb0\u5f55\uff0c\u5e76\u5199\u5165\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u5b58\u5728\u7684\u95ee\u9898\u662f\uff0c\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u7f13\u5b58\u53ef\u80fd\u5df2\u7ecf\u5feb\u8981\u8fc7\u671f\u4e86\uff0c\u77ed\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u53c8\u4f1a\u89e6\u53d1\u4e00\u6b21\u6570\u636e\u5e93\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u8ba9",(0,a.kt)("strong",{parentName:"li"},"\u4e0a\u9762\u7c97\u4f53\u90e8\u5206"),"\u7b2c\u4e00\u4e2a\u8fc7\u671f\u65f6\u95f4\u7565\u957f\u4e8e\u7b2c\u4e8c\u4e2a\uff0c\u6bd4\u59825\u79d2"))))))),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u7f13\u5b58\u5df2\u8fc7\u671f\uff0c\u4e0d\u7ba1Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\u662f\u5426\u8fc7\u671f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u5230Primary\u7684\u6620\u5c04\u4f1a\u88ab\u91cd\u65b0\u83b7\u53d6\uff0c\u83b7\u53d6\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u5199\u5165\u65b0\u7684Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58\uff0c\u8fd9\u6837\u4e24\u79cd\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\u90fd\u662f\u521a\u521a\u8bbe\u7f6e"))))))),(0,a.kt)("li",{parentName:"ul"},"\u6709\u67e5\u8be2\u6761\u4ef6\u5230Primary\u6620\u5c04\u7684\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7Primary\u5230DB\u67e5\u8be2\u884c\u8bb0\u5f55\uff0c\u5e76\u5199\u5165\u7f13\u5b58"))),(0,a.kt)("li",{parentName:"ul"},"\u6709Primary\u5230\u884c\u8bb0\u5f55\u7684\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u7ed3\u679c")))))))}s.isMDXComponent=!0}}]);