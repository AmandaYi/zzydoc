"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[3455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=l,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={},i="redis6\u7b14\u8bb0",o={unversionedId:"redis/base",id:"redis/base",title:"redis6\u7b14\u8bb0",description:"\u6982\u5ff5",source:"@site/docs/redis/base.md",sourceDirName:"redis",slug:"/redis/base",permalink:"/docs/redis/base",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Redis",next:{title:"redis\u57fa\u672c\u7c7b\u578b",permalink:"/docs/redis/structure"}},s={},c=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b89\u88c5C \u8bed\u8a00\u7684\u7f16\u8bd1\u73af\u5883",id:"\u5b89\u88c5c-\u8bed\u8a00\u7684\u7f16\u8bd1\u73af\u5883",level:3},{value:"\u5b89\u88c5gcc",id:"\u5b89\u88c5gcc",level:3},{value:"\u4e0b\u8f7d\u7f16\u8bd1redis",id:"\u4e0b\u8f7d\u7f16\u8bd1redis",level:2},{value:"\u524d\u53f0\u6d4b\u8bd5\u542f\u52a8",id:"\u524d\u53f0\u6d4b\u8bd5\u542f\u52a8",level:2},{value:"\u540e\u53f0\u5b88\u62a4\u542f\u52a8",id:"\u540e\u53f0\u5b88\u62a4\u542f\u52a8",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u5173\u95ed",id:"\u5173\u95ed",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"redis6\u7b14\u8bb0"},"redis6\u7b14\u8bb0"),(0,l.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("p",null,"redis\u9ed8\u8ba416\u4e2a\u6570\u636e\u5e93\uff0c\u7c7b\u4f3c\u6570\u7ec4\u4e0b\u6807\u4ece0\u5f00\u59cb\uff0c\u521d\u59cb\u9ed8\u8ba4\u4f7f\u75280\u53f7\u5e93\n\u4f7f\u7528\u547d\u4ee4 select x \u6765\u5207\u6362\u6570\u636e\u5e93\u3002\u5982: select 8\n\u7edf\u4e00\u5bc6\u7801\u7ba1\u7406\uff0c\u6240\u6709\u5e93\u540c\u6837\u5bc6\u7801\u3002"),(0,l.kt)("p",null,"\u5e38\u7528\u547d\u4ee4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dbsize\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u7684key\u7684\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"flushdb\u6e05\u7a7a\u5f53\u524d\u5e93"),(0,l.kt)("li",{parentName:"ul"},"flushall\u901a\u6740\u5168\u90e8\u5e93")),(0,l.kt)("p",null,"Redis\u662f\u5355\u7ebf\u7a0b+\u591a\u8defIO\u590d\u7528\u6280\u672f"),(0,l.kt)("p",null,"\u591a\u8def\u590d\u7528\u662f\u6307\u4f7f\u7528\u4e00\u4e2a\u7ebf\u7a0b\u6765\u68c0\u67e5\u591a\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff08Socket\uff09\u7684\u5c31\u7eea\u72b6\u6001\uff0c\u6bd4\u5982\u8c03\u7528select\u548cpoll\u51fd\u6570\uff0c\u4f20\u5165\u591a\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u5c31\u7eea\uff0c\u5219\u8fd4\u56de\uff0c\u5426\u5219\u963b\u585e\u76f4\u5230\u8d85\u65f6\u3002\u5f97\u5230\u5c31\u7eea\u72b6\u6001\u540e\u8fdb\u884c\u771f\u6b63\u7684\u64cd\u4f5c\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u91cc\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u542f\u52a8\u7ebf\u7a0b\u6267\u884c\uff08\u6bd4\u5982\u4f7f\u7528\u7ebf\u7a0b\u6c60\uff09"),(0,l.kt)("p",null,"\u4e32\u884c   vs   \u591a\u7ebf\u7a0b+\u9501\uff08memcached\uff09 vs   \u5355\u7ebf\u7a0b+\u591a\u8defIO\u590d\u7528(Redis)"),(0,l.kt)("p",null,"\uff08\u4e0eMemcache\u4e09\u70b9\u4e0d\u540c: \u652f\u6301\u591a\u6570\u636e\u7c7b\u578b\uff0c\u652f\u6301\u6301\u4e45\u5316\uff0c\u5355\u7ebf\u7a0b+\u591a\u8defIO\u590d\u7528\uff09  "),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u5728centos\u73af\u5883\u4e0a\u76f4\u63a5\u5b89\u88c5\uff0c\u5ffd\u7565window\u5427"),(0,l.kt)("h3",{id:"\u5b89\u88c5c-\u8bed\u8a00\u7684\u7f16\u8bd1\u73af\u5883"},"\u5b89\u88c5C \u8bed\u8a00\u7684\u7f16\u8bd1\u73af\u5883"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-base"},"\u5b89\u88c5C \u8bed\u8a00\u7684\u7f16\u8bd1\u73af\u5883\nyum install centos-release-scl scl-utils-build\nyum install -y devtoolset-8-toolchain\nscl enable devtoolset-8 bash\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5gcc"},"\u5b89\u88c5gcc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-base"},"yum install gcc\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5 gcc\u7248\u672c\ngcc --version"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u7f16\u8bd1redis"},"\u4e0b\u8f7d\u7f16\u8bd1redis"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\uff0c\u6253\u5f00redis\u4e0b\u8f7d\u9875\n",(0,l.kt)("inlineCode",{parentName:"li"},"https://redis.io/download/#redis-stack-downloads"),"\uff0c\u627e\u5230\u5bf9\u5e94\u7684url\uff0c\u4f7f\u7528wget\u4e0b\u8f7d\u5373\u53ef\u3002")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e0b\u8f7d6\u7248\u672c\n\u4e0b\u8f7dredis-6.2.1.tar.gz\u653e/opt\u76ee\u5f55"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u89e3\u538b\u547d\u4ee4\uff1atar -zxvf redis-6.2.1.tar.gz"),(0,l.kt)("li",{parentName:"ol"},"\u89e3\u538b\u5b8c\u6210\u540e\u8fdb\u5165\u76ee\u5f55\uff1acd redis-6.2.1"),(0,l.kt)("li",{parentName:"ol"},"\u5728redis-6.2.1\u76ee\u5f55\u4e0b\u518d\u6b21\u6267\u884cmake\u547d\u4ee4\uff08\u53ea\u662f\u7f16\u8bd1\u597d\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u51c6\u5907\u597dC\u8bed\u8a00\u7f16\u8bd1\u73af\u5883\uff0cmake \u4f1a\u62a5\u9519\u2014Jemalloc/jemalloc.h\uff1a\u6ca1\u6709\u90a3\u4e2a\u6587\u4ef6, \u89e3\u51b3\u65b9\u5f0f\u662f\u8fd0\u884cmake distclean\uff0c\u5728redis-6.2.1\u76ee\u5f55\u4e0b\u518d\u6b21\u6267\u884cmake\u547d\u4ee4\uff08\u53ea\u662f\u7f16\u8bd1\u597d\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\uff0c\u76f4\u63a5\u8df3\u8fc7make test\uff0c\u7ee7\u7eed\u6267\u884c: make install")),(0,l.kt)("h2",{id:"\u524d\u53f0\u6d4b\u8bd5\u542f\u52a8"},"\u524d\u53f0\u6d4b\u8bd5\u542f\u52a8"),(0,l.kt)("p",null,"\u524d\u53f0\u542f\u52a8\uff0c\u547d\u4ee4\u884c\u7a97\u53e3\u4e0d\u80fd\u5173\u95ed\uff0c\u5426\u5219\u670d\u52a1\u5668\u505c\u6b62"),(0,l.kt)("p",null,"\u76f4\u63a5\u6267\u884credis-server"),(0,l.kt)("h2",{id:"\u540e\u53f0\u5b88\u62a4\u542f\u52a8"},"\u540e\u53f0\u5b88\u62a4\u542f\u52a8"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u62f7\u8d1d\u4e00\u4efdredis.conf\u5230\u5176\u4ed6\u76ee\u5f55\ncp  /opt/redis-6.2.2/redis.conf  /myredis, "),(0,l.kt)("li",{parentName:"ol"},"\u540e\u53f0\u542f\u52a8\u8bbe\u7f6e\n\u4fee\u6539redis.conf(128\u884c)\u6587\u4ef6\u5c06\u91cc\u9762\u7684daemonize no \u6539\u6210 yes\uff0c\u8ba9\u670d\u52a1\u5728\u540e\u53f0\u542f\u52a8"),(0,l.kt)("li",{parentName:"ol"},"Redis\u542f\u52a8\nredis-server /myredis/redis.conf")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u6253\u5f00shell\u8f93\u5165redis-cli\uff0c\u5373\u53ef\u8fde\u63a5\u4e0a\u3002"),(0,l.kt)("p",null,"\u8f93\u5165ping\u5373\u53ef\u8fd4\u56depong\u5373\u4e3a\u6210\u529f\u3002"),(0,l.kt)("h2",{id:"\u5173\u95ed"},"\u5173\u95ed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-base"},"redis-cli shutdown\n")))}u.isMDXComponent=!0}}]);