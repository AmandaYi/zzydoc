"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[2067],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>m});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},o=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(l),c=r,m=u["".concat(d,".").concat(c)]||u[c]||k[c]||a;return l?n.createElement(m,s(s({ref:t},o),{},{components:l})):n.createElement(m,s({ref:t},o))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,s=new Array(a);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=l[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},12805:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(87462),r=(l(67294),l(3905));const a={},s="\u96c6\u7fa4\u65b9\u6848-cluster",i={unversionedId:"redis/cluster",id:"redis/cluster",title:"\u96c6\u7fa4\u65b9\u6848-cluster",description:"\u4e3b\u8981\u89e3\u51b3\u5206\u6cbb\uff0c\u5206\u7247\u95ee\u9898\u3002\u6700\u4e3b\u8981\u7684\u7406\u89e3\u6bcf\u4e2a\u8282\u70b9\u5b58\u7684\u53ea\u662f\u67d0\u4e00\u90e8\u5206\u6570\u636e\u3002",source:"@site/docs/redis/cluster.md",sourceDirName:"redis",slug:"/redis/cluster",permalink:"/docs/redis/cluster",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Redis",previous:{title:"Redis\u54e8\u5175\u6a21\u5f0f",permalink:"/docs/redis/sentinel"}},d={},p=[{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:3},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"\u600e\u4e48\u914d\u7f6e",id:"\u600e\u4e48\u914d\u7f6e",level:3},{value:"\u542f\u52a8\u524d\u7684\u64cd\u4f5c",id:"\u542f\u52a8\u524d\u7684\u64cd\u4f5c",level:3},{value:"\u542f\u52a86\u4e2aredis",id:"\u542f\u52a86\u4e2aredis",level:3},{value:"\u542f\u52a8\u96c6\u7fa4\u547d\u4ee4",id:"\u542f\u52a8\u96c6\u7fa4\u547d\u4ee4",level:3},{value:"\u8fde\u63a5\u4f7f\u7528",id:"\u8fde\u63a5\u4f7f\u7528",level:3},{value:"\u5173\u95ed\u96c6\u7fa4",id:"\u5173\u95ed\u96c6\u7fa4",level:3},{value:"\u96c6\u7fa4\u4fe1\u606f",id:"\u96c6\u7fa4\u4fe1\u606f",level:2},{value:"\u96c6\u7fa4\u539f\u7406",id:"\u96c6\u7fa4\u539f\u7406",level:2},{value:"\u5982\u4f55\u5206\u914d\u8282\u70b9\u4e3b\u4ece",id:"\u5982\u4f55\u5206\u914d\u8282\u70b9\u4e3b\u4ece",level:3},{value:"\u96c6\u7fa4\u7684slots",id:"\u96c6\u7fa4\u7684slots",level:3},{value:"\u96c6\u7fa4\u5199\u5165key",id:"\u96c6\u7fa4\u5199\u5165key",level:3},{value:"\u96c6\u7fa4\u5199\u5165\u591a\u4e2akey",id:"\u96c6\u7fa4\u5199\u5165\u591a\u4e2akey",level:3},{value:"\u96c6\u7fa4\u67e5\u8be2key",id:"\u96c6\u7fa4\u67e5\u8be2key",level:3},{value:"keys\u67e5\u8be2\u7684\u95ee\u9898",id:"keys\u67e5\u8be2\u7684\u95ee\u9898",level:3},{value:"\u67e5\u8be2\u96c6\u7fa4\u4e2d\u7684\u503c",id:"\u67e5\u8be2\u96c6\u7fa4\u4e2d\u7684\u503c",level:3},{value:"\u6545\u969c\u6062\u590d",id:"\u6545\u969c\u6062\u590d",level:2},{value:"\u8c03\u7528",id:"\u8c03\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3}],o={toc:p},u="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u96c6\u7fa4\u65b9\u6848-cluster"},"\u96c6\u7fa4\u65b9\u6848-cluster"),(0,r.kt)("p",null,"\u4e3b\u8981\u89e3\u51b3\u5206\u6cbb\uff0c\u5206\u7247\u95ee\u9898\u3002\u6700\u4e3b\u8981\u7684\u7406\u89e3\u6bcf\u4e2a\u8282\u70b9\u5b58\u7684\u53ea\u662f\u67d0\u4e00\u90e8\u5206\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5728\u4e3b\u4ece\u590d\u5236\u7684\u7ec4\u5408\u67b6\u6784\u4e2d\uff0c\u5f53\u5199\u5165\u7684\u6570\u636e\u7279\u522b\u591a\u7684\u8bdd\uff0c\u4e3b\u673a\u6269\u5bb9\u4e0d\u597d\u5904\u7406\uff0c\u53c8\u8981\u6362IP\uff0c\u53c8\u8981\u505c\u670d\u52a1\u7b49\u3002"),(0,r.kt)("p",null,"\u518d\u8005\uff0c\u5982\u679c\u6709\u5927\u91cf\u7684\u5e76\u53d1\u64cd\u4f5c\u7684\u60c5\u51b5\u4e0b\uff0c\u4e3b\u673a\u4e00\u65f6\u95f4\u65e0\u6cd5\u5904\u7406\u592a\u591a\u8bf7\u6c42\u592a\u5bb9\u6613\u8d85\u65f6\uff0c\u9700\u8981\u627e\u4e00\u4e2a\u5408\u7406\u7684\u65b9\u6848\u5206\u62c5\u5927\u5e76\u53d1\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u66f4\u4e0d\u597d\u7684\u5730\u65b9\u662f\uff0c\u4e0d\u7ba1\u662f\u4e3b\u4ece\u590d\u5236\u7ec4\u5408\u7684\u5404\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u4e3b\u673a\u4e0b\u7ebf\u6216\u8005\u4ece\u673a\u4e0a\u7ebf\u53cd\u5ba2\u4e3a\u4e3b\u7b49\u64cd\u4f5c\uff0c\u9020\u6210\u4e86\u4e3b\u673aip\u7ecf\u5e38\u53d8\u6362\uff0c\u9700\u8981\u7a0b\u5e8f\u505a\u81ea\u52a8\u5207\u6362\u548c\u81ea\u52a8\u68c0\u6d4b\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u53ea\u6709ip\u53d8\u6362\uff0c\u53ef\u4ee5\u901a\u8fc7\u54e8\u5175\u7b49\u4ee3\u7406\u6a21\u5f0f\u8fdb\u884c\u89e3\u51b3\uff0c\u4f46\u662f\u6269\u5bb9\u5e76\u53d1\u7b49\u5374\u9700\u8981\u5927\u91cf\u7684\u4ee3\u7801\u64cd\u4f5c\u53bb\u517c\u5bb9\u5904\u7406\u3002\u56e0\u6b64\uff0c\u5728Redis3\u5f00\u59cb\uff0cRedis\u81ea\u5e26\u4e86\u65e0\u4e2d\u5fc3\u5316\u96c6\u7fa4\u529f\u80fd\uff0c\u65b9\u4fbf\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u65e0\u4e2d\u5fc3\u5316\u96c6\u7fa4\u57fa\u672c\u4e0a\u90fd\u662fRedis\u7684\u914d\u7f6e\uff0c\u4ee5\u53ca\u5bf9\u914d\u7f6e\u7684\u4f18\u5316\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,r.kt)("p",null,"\u96c6\u7fa4\u6709\u5f88\u591a\u9650\u5236\uff0c\u6bd4\u5982\u4e0d\u652f\u6301\u4e8b\u52a1\uff0clua\u811a\u672c\u4e0d\u652f\u6301\uff08\u6709\u5176\u4ed6\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u4e0d\u63a8\u8350\uff09\uff0c\u6570\u636e\u5b8c\u6574\u6027\u4e0d\u591f\u3002"),(0,r.kt)("p",null,"\u4e0d\u80fd\u8fc7\u5206\u8ffd\u6c42\u96c6\u7fa4\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u54e8\u5175\u6a21\u5f0f\uff0c\u4ee3\u7406\u6a21\u5f0f + \u4e3b\u4ece\u590d\u5236\u7ec4\u5408\u57fa\u672c\u5c31\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u9700\u6c42\u3002"),(0,r.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"Redis \u96c6\u7fa4\u5b9e\u73b0\u4e86\u5bf9Redis\u7684\u6c34\u5e73\u6269\u5bb9\uff0c\u5373\u542f\u52a8N\u4e2aredis\u8282\u70b9\uff0c\u5c06\u6574\u4e2a\u6570\u636e\u5e93\u5206\u5e03\u5b58\u50a8\u5728\u8fd9N\u4e2a\u8282\u70b9\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u5b58\u50a8\u603b\u6570\u636e\u76841/N\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Redis \u96c6\u7fa4\u901a\u8fc7\u5206\u533a\uff08partition\uff09\u6765\u63d0\u4f9b\u4e00\u5b9a\u7a0b\u5ea6\u7684\u53ef\u7528\u6027\uff08availability\uff09\uff1a \u5373\u4f7f\u96c6\u7fa4\u4e2d\u6709\u4e00\u90e8\u5206\u8282\u70b9\u5931\u6548\u6216\u8005\u65e0\u6cd5\u8fdb\u884c\u901a\u8baf\uff0c \u96c6\u7fa4\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u5904\u7406\u547d\u4ee4\u8bf7\u6c42\u3002  "),(0,r.kt)("h3",{id:"\u600e\u4e48\u914d\u7f6e"},"\u600e\u4e48\u914d\u7f6e"),(0,r.kt)("p",null,"\u914d\u7f6e6\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u6a21\u62df\u4e00\u4e2a\u4e09\u4e3b\u4e09\u4ece\u7684\u96c6\u7fa4\u3002\n\u914d\u7f6e\u57fa\u672c\u4fe1\u606f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"daemonize yes (\u5b88\u62a4\u6a21\u5f0f\u5f00\u542f)"),(0,r.kt)("li",{parentName:"ul"},"pid\u6587\u4ef6\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},"log\u6587\u4ef6\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"dump.rdb\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"appendonly \u5173\u6389\u6216\u8005\u6362\u540d\u5b57\n\u914d\u7f6e\u96c6\u7fa4\u4fe1\u606f\uff1a"),(0,r.kt)("li",{parentName:"ul"},"cluster-enabled yes    \u6253\u5f00\u96c6\u7fa4\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"cluster-config-file nodes-6379.conf  \u8bbe\u5b9a\u8282\u70b9\u914d\u7f6e\u6587\u4ef6\u540d"),(0,r.kt)("li",{parentName:"ul"},"cluster-node-timeout 15000   \u8bbe\u5b9a\u8282\u70b9\u5931\u8054\u65f6\u95f4\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\uff08\u6beb\u79d2\uff09\uff0c\u96c6\u7fa4\u81ea\u52a8\u8fdb\u884c\u4e3b\u4ece\u5207\u6362\u3002")),(0,r.kt)("p",null,"\u914d\u7f6eredis6379.conf\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'include /zzy/redis/redis.conf\nport 6379\npidfile "/var/run/redis_6379.pid"\ndbfilename "dump6379.rdb"\ndir "/zzy/redis_cluster"\nlogfile "/zzy/redis_cluster/redis_err_6379.log"\ncluster-enabled yes\ncluster-config-file nodes-6379.conf\ncluster-node-timeout 15000\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u590d\u5236\u591a\u4e2aredis.conf\u6587\u4ef6\uff0c\u6700\u540e\u7684\u6587\u4ef6\u4e3a6\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"redis6379.conf, redis6380.conf\uff0credis6381.conf\uff0credis6389.conf\uff0credis6390.conf\uff0credis6391.conf"),(0,r.kt)("p",null,"\u4fee\u6539\u6bcf\u4e2a\u914d\u7f6e\u6587\u4ef6\u91cc\u9762\u7684\u7aef\u53e3\u5b57\u7b26\u4e32\u4e3a\u5404\u4e2a\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"\u542f\u52a8\u524d\u7684\u64cd\u4f5c"},"\u542f\u52a8\u524d\u7684\u64cd\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5220\u9664\u6240\u6709\u7684\u6301\u4e45\u5316\u6587\u4ef6\uff08\u8ba9redis\u6570\u636e\u5e93\u6ca1\u6709\u5185\u5bb9\uff09")),(0,r.kt)("p",null,"\u5728\u542f\u52a8redis\u7684\u76ee\u5f55\u6216\u5b89\u88c5redis\u76ee\u5f55\u4e2d\u5220\u9664\u6240\u6709\u6709\u5173dump.rdb\u548cappendonly.aof\u6587\u4ef6"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4e00\u4e0bredis.conf\u7684\u4e3b\u914d\u7f6e\uff0c\u4e5f\u5c31\u662f\u524d\u9762\u6bcf\u4e2a\u914d\u7f6e\u4e2d\u7684include\u5305\u542b\u7684\u90a3\u4e2a\u6587\u4ef6\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u6389bind (IP\u7ed1\u5b9a\u5173\u95ed)"),(0,r.kt)("li",{parentName:"ul"},"protected-mode no (\u4fdd\u62a4\u5173\u95ed)"),(0,r.kt)("li",{parentName:"ul"},"daemonize yes (\u5b88\u62a4\u8fdb\u7a0b\u5f00\u542f)")),(0,r.kt)("h3",{id:"\u542f\u52a86\u4e2aredis"},"\u542f\u52a86\u4e2aredis"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/images/redis/cluster01.png",alt:"\u542f\u52a8redis\u96c6\u7fa4"})),(0,r.kt)("h3",{id:"\u542f\u52a8\u96c6\u7fa4\u547d\u4ee4"},"\u542f\u52a8\u96c6\u7fa4\u547d\u4ee4"),(0,r.kt)("p",null,"\u7ec4\u5408\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6240\u6709redis\u5b9e\u4f8b\u542f\u52a8\u540e\uff0cnodes-xxxx.conf\u6587\u4ef6\u90fd\u751f\u6210\u6b63\u5e38\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/images/redis/cluster02.png",alt:"\u542f\u52a8redis\u96c6\u7fa4"})),(0,r.kt)("p",null,"\u5f536\u4e2anode\u90fdOK\u540e\uff0c\u53ef\u4ee5\u8fdb\u884c\u542f\u52a8\u96c6\u7fa4\u547d\u4ee4\u3002"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u5728redis\u7684src\u91cc\u9762\uff0c\u540d\u5b57\u53ebredis-cli"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli --cluster create --cluster-replicas 1 127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6389 127.0.0.1:6390 127.0.0.1:6391")),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u4e2d\uff0c\u9700\u8981\u628a127.0.0.1\u4fee\u6539\u4e3a\u771f\u5b9e\u7684\u670d\u52a1\u5668\u5730\u5740\u3002\u6b64\u5904\u4e0d\u8981\u7528127.0.0.1\uff0c \u8bf7\u7528\u771f\u5b9eIP\u5730\u5740\uff0c--replicas 1 \u91c7\u7528\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u914d\u7f6e\u96c6\u7fa4\uff0c\u4e00\u53f0\u4e3b\u673a\uff0c\u4e00\u53f0\u4ece\u673a\uff0c\u6b63\u597d\u4e09\u7ec4\u3002"),(0,r.kt)("p",null,"\u5982\u679credis\u6709\u5bc6\u7801\uff0c\u90a3\u4e48\u547d\u4ee4\u662f\u524d\u9762\u52a0\u4e0a-a\u5373\u53ef"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli -a \u5bc6\u7801 --cluster create --cluster-replicas 1 127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6389 127.0.0.1:6390 127.0.0.1:6391")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/images/redis/cluster03.png",alt:"redis\u542f\u52a8\u96c6\u7fa4"})),(0,r.kt)("p",null,"\u542f\u52a8\u96c6\u7fa4\u6210\u529f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/images/redis/cluster04.png",alt:"redis\u542f\u52a8\u96c6\u7fa4\u6210\u529f"})),(0,r.kt)("h3",{id:"\u8fde\u63a5\u4f7f\u7528"},"\u8fde\u63a5\u4f7f\u7528"),(0,r.kt)("p",null,"\u547d\u4ee4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli -c -p :port")),(0,r.kt)("p",null,"\u56e0\u4e3a\u5f00\u542f\u4e866\u4e2aredis\u670d\u52a1\u5668\uff0c\u56e0\u6b64\uff0c\u9009\u62e9\u4efb\u4e00\u4e2a\u8fdb\u884c\u8fde\u63a5\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli -c -p 6739"),", \u8fde\u4e0a\u540e\u5982\u6709\u5bc6\u7801\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"auth \u5bc6\u7801"),"\u5c31\u884c\u4e86\u3002"),(0,r.kt)("p",null,"-c\u53c2\u6570\u4ee3\u8868\u4f7f\u7528\u96c6\u7fa4\u7b56\u7565\u8fde\u63a5\uff0c\u8bbe\u7f6e\u6570\u636e\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u76f8\u5e94\u7684\u5199\u4e3b\u673a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/images/redis/cluster05.png",alt:"redis\u542f\u52a8\u96c6\u7fa4\u6210\u529f"})),(0,r.kt)("h3",{id:"\u5173\u95ed\u96c6\u7fa4"},"\u5173\u95ed\u96c6\u7fa4"),(0,r.kt)("p",null,"\u53ea\u9700\u8981\u5173\u95ed\u5168\u90e8redis\u670d\u52a1\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u96c6\u7fa4\u4fe1\u606f"},"\u96c6\u7fa4\u4fe1\u606f"),(0,r.kt)("p",null,"\u5728\u4efb\u610f\u8fde\u63a5\u72b6\u6001\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"cluster nodes"),"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u7684\u6240\u6709\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"![redis\u542f\u52a8\u96c6\u7fa4\u6210\u529f][6]"),(0,r.kt)("h2",{id:"\u96c6\u7fa4\u539f\u7406"},"\u96c6\u7fa4\u539f\u7406"),(0,r.kt)("h3",{id:"\u5982\u4f55\u5206\u914d\u8282\u70b9\u4e3b\u4ece"},"\u5982\u4f55\u5206\u914d\u8282\u70b9\u4e3b\u4ece"),(0,r.kt)("p",null,"\u4e00\u4e2a\u96c6\u7fa4\u81f3\u5c11\u8981\u6709\u4e09\u4e2a\u4e3b\u8282\u70b9\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9009\u9879 --cluster-replicas 1 \u8868\u793a\u6211\u4eec\u5e0c\u671b\u4e3a\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u4e3b\u8282\u70b9\u521b\u5efa\u4e00\u4e2a\u4ece\u8282\u70b9\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5206\u914d\u539f\u5219\u5c3d\u91cf\u4fdd\u8bc1\u6bcf\u4e2a\u4e3b\u6570\u636e\u5e93\u8fd0\u884c\u5728\u4e0d\u540c\u7684IP\u5730\u5740\uff0c\u6bcf\u4e2a\u4ece\u5e93\u548c\u4e3b\u5e93\u4e0d\u5728\u4e00\u4e2aIP\u5730\u5740\u4e0a\u3002  "),(0,r.kt)("h3",{id:"\u96c6\u7fa4\u7684slots"},"\u96c6\u7fa4\u7684slots"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},">>> Assign a different config epoch to each node\n>>> Sending CLUSTER MEET messages to join the cluster\nWaiting for the cluster to join\n.\n>>> Performing Cluster Check (using node 127.0.0.1:6379)\nM: 9fbe76cdf555c3db806d4ba4e9f265cedf5f4358 127.0.0.1:6379\n   slots:[0-5460] (5461 slots) master\n   1 additional replica(s)\nS: 0950bcba5218a93f8ba83a97afd0eececcbc2aff 127.0.0.1:6389\n   slots: (0 slots) slave\n   replicates 9fbe76cdf555c3db806d4ba4e9f265cedf5f4358\nM: 1a379ff232fe0b1ba0f712706c3b7e4d224814c7 127.0.0.1:6381\n   slots:[10923-16383] (5461 slots) master\n   1 additional replica(s)\nM: d84ea538eb5fd049df79ae2f9806667780e5ea88 127.0.0.1:6380\n   slots:[5461-10922] (5462 slots) master\n   1 additional replica(s)\nS: 0ff947d690e866ca078fa14bd7f0f65cd19934b6 127.0.0.1:6390\n   slots: (0 slots) slave\n   replicates d84ea538eb5fd049df79ae2f9806667780e5ea88\nS: da96df551a967d04acdfba65aad0f15b64443c1b 127.0.0.1:6391\n   slots: (0 slots) slave\n   replicates 1a379ff232fe0b1ba0f712706c3b7e4d224814c7\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n")),(0,r.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\n\u4e00\u4e2a Redis \u96c6\u7fa4\u5305\u542b 16384 \u4e2a\u63d2\u69fd\uff08hash slot\uff09\uff0c \u6570\u636e\u5e93\u4e2d\u7684\u6bcf\u4e2a\u952e\u90fd\u5c5e\u4e8e\u8fd9 16384 \u4e2a\u63d2\u69fd\u7684\u5176\u4e2d\u4e00\u4e2a\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u96c6\u7fa4\u4f7f\u7528\u516c\u5f0f CRC16(key) % 16384 \u6765\u8ba1\u7b97\u952e key \u5c5e\u4e8e\u54ea\u4e2a\u69fd\uff0c \u5176\u4e2d CRC16(key) \u8bed\u53e5\u7528\u4e8e\u8ba1\u7b97\u952e key \u7684 CRC16 \u6821\u9a8c\u548c \u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u8d1f\u8d23\u5904\u7406\u4e00\u90e8\u5206\u63d2\u69fd\u3002 \u4e3e\u4e2a\u4f8b\u5b50\uff0c \u5982\u679c\u4e00\u4e2a\u96c6\u7fa4\u53ef\u4ee5\u6709\u4e3b\u8282\u70b9\uff0c \u5176\u4e2d\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u8282\u70b9 A \u8d1f\u8d23\u5904\u7406 0 \u53f7\u81f3 5460 \u53f7\u63d2\u69fd\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8282\u70b9 B \u8d1f\u8d23\u5904\u7406 5461 \u53f7\u81f3 10922 \u53f7\u63d2\u69fd\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8282\u70b9 C \u8d1f\u8d23\u5904\u7406 10923 \u53f7\u81f3 16383 \u53f7\u63d2\u69fd\u3002  "),(0,r.kt)("h3",{id:"\u96c6\u7fa4\u5199\u5165key"},"\u96c6\u7fa4\u5199\u5165key"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli -p 6379"),"\u547d\u4ee4\uff0c\u8fde\u63a5\u540e\u7684redis\uff0c\u8fdb\u884c\u5199\u5165\u548c\u67e5\u8be2\uff0credis\u4f1a\u9996\u5148\u8ba1\u7b97\u51fa\u8be5key\u5bf9\u5e94\u7684\u63d2\u69fd\uff0c\u5982\u679c\u4e0d\u662f\u8be5\u5ba2\u6237\u7aef\u5bf9\u5e94\u7684\u63d2\u69fd\uff0credis\u4f1a\u62a5\u9519\uff0c\u5e76\u8fd4\u56de\u8be5key\u6b63\u786e\u7684redis\u5b9e\u4f8b\u7684ip\u548c\u7aef\u53e3\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u5982\u679c\uff0c\u4f7f\u7528\u4e86-c\u53c2\u6570\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli  -c \u2013p 6379"),"\uff0c \u90a3\u4e48\u8ba1\u7b97key\u7684\u63d2\u69fd\u540e\uff0c\u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u6307\u5b9a\u7684redis\u5b9e\u4f8b\u3002"),(0,r.kt)("h3",{id:"\u96c6\u7fa4\u5199\u5165\u591a\u4e2akey"},"\u96c6\u7fa4\u5199\u5165\u591a\u4e2akey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6381> mset k1 v1 k2 v2 k3 v3\n(error) CROSSSLOT Keys in request don't hash to the same slot\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u96c6\u7fa4\u4e2d\u64cd\u4f5c\u591a\u4e2akey\u7684\u8bdd\uff0c\u90a3\u4e48\u4f1a\u62a5\u9519\uff0c\u63d0\u793a\u4e0d\u80fd\u628a\u591a\u4e2akey\u653e\u5230\u4e00\u6837\u7684\u63d2\u69fd\uff0c\u6240\u4ee5\u4e3a\u4e86\u65b9\u4fbf\uff0c\u6709\u4e00\u4e2a\u53d6\u820d\uff0c\u4e5f\u5c31\u662f\u7ed9\u8fd9\u51e0\u4e2akey\u5212\u5206\u4e00\u4e2a\u7ec4\uff0c\u6309\u7167\u7ec4\u7684\u5f62\u5f0f\u8ba1\u7b97\u63d2\u69fd\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u6211\u628a\u4e09\u4e2akey\u653e\u5230\u4e00\u4e2a\u7ec4zzy\u91cc\u9762\uff0c\u8fd9\u6837\u5b50\u5c31\u53ef\u4ee5\u4e00\u4e0b\u5b50\u64cd\u4f5c\u591a\u4e2akey\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6381> mset k1{zzy} v1 k2{zzy} v2 k3{zzy} v3\n-> Redirected to slot [6117] located at 127.0.0.1:6380\nOK\n")),(0,r.kt)("p",null,"\u7f3a\u70b9\uff1a \u5bb9\u6613\u9020\u6210\u96c6\u7fa4\u4e3b\u673akey\u7684\u5206\u914d\u4e0d\u5747\uff0c\u8ba9\u67d0\u4e00\u53f0\u4e3b\u673a\u538b\u529b\u53d8\u5927\u3002\u4e00\u822c\u5c3d\u53ef\u80fd\u4e0d\u8fd9\u4e48\u505a\u3002"),(0,r.kt)("h3",{id:"\u96c6\u7fa4\u67e5\u8be2key"},"\u96c6\u7fa4\u67e5\u8be2key"),(0,r.kt)("p",null,"\u8ddf\u5355\u4e00\u7684redis\u5b9e\u4f8b\u7684\u67e5\u8be2\u4e00\u6a21\u4e00\u6837\u3002\u5982\u679c\u67e5\u8be2\u7684key\u4e0d\u5728\u5f53\u524d\u7684slots\u533a\u95f4\u5185\uff0c\u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u5bf9\u5e94\u7684slots\u3002\n\u6bd4\u5982\u7ec4zzy\uff0c\u90fd\u57286380\u5b9e\u4f8b\u6240\u5728\u7684\u63d2\u69fd\u5185\uff0c\u56e0\u6b64\u4ece6379\u67e5\u8be2key\uff0c\u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u52306380\u5b9e\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> get k1{zzy}\n-> Redirected to slot [6117] located at 127.0.0.1:6380\n"v1"\n127.0.0.1:6380> get k2{zzy}\n"v2"\n127.0.0.1:6380> get k3{zzy}\n"v3"\n')),(0,r.kt)("h3",{id:"keys\u67e5\u8be2\u7684\u95ee\u9898"},"keys\u67e5\u8be2\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"keys *"),"\u53ea\u4f1a\u67e5\u8be2\u5230\u5f53\u524d\u5b9e\u4f8b\u6240\u5728\u63d2\u69fd\u5185\u90e8\u5168\u90e8key\uff0c\u4e0d\u4f1a\u628a\u6240\u6709\u4e3b\u673a\u63d2\u69fd\u7684\u90fd\u67e5\u51fa\u6765\u3002"),(0,r.kt)("h3",{id:"\u67e5\u8be2\u96c6\u7fa4\u4e2d\u7684\u503c"},"\u67e5\u8be2\u96c6\u7fa4\u4e2d\u7684\u503c"),(0,r.kt)("p",null,"CLUSTER GETKEYSINSLOT slot count"),(0,r.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a O\uff08log\uff08N\uff09\uff09\u5176\u4e2d N \u662f\u8bf7\u6c42\u7684\u952e\u7684\u6570\u91cf"),(0,r.kt)("p",null,"\u539f\u7406\uff0c\u5148\u67e5\u8be2\u5bf9\u5e94key\u6240\u5728\u4f4d\u7f6e\u7684slot\u4f4d\u7f6e\uff0c\u7136\u540e\u5217\u51fa\u8be5slot\u63d2\u69fd\u5185\u90e8\u7684\u5168\u90e8key\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6380> cluster keyslot zzy \n(integer) 6117\n127.0.0.1:6380> cluster countkeysinslot 6117\n(integer) 3\n127.0.0.1:6380> cluster getkeysinslot 6117 5\n1) "k1{zzy}"\n2) "k2{zzy}"\n3) "k3{zzy}"\n')),(0,r.kt)("h2",{id:"\u6545\u969c\u6062\u590d"},"\u6545\u969c\u6062\u590d"),(0,r.kt)("p",null,"\u6545\u969c\u4e3b\u8981\u6307\u7684\u662f\u4e3b\u673a\u4e0b\u7ebf\u6216\u8005\u4e3b\u4ece\u8282\u70b9\u90fd\u4e0b\u7ebf\u7684\u60c5\u51b5\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\u4e8b\u60c5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e3b\u8282\u70b9\u4e0b\u7ebf\uff0c\u7b49\u5f8515\u79d2\uff08\u81ea\u5df1\u914d\u7684\u65f6\u95f4\uff0c\u9ed8\u8ba415\u79d2\uff09\u540e\uff0c\u4ece\u8282\u70b9\u4f1a\u81ea\u52a8\u5347\u4e3a\u4e3b\u8282\u70b9\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u539f\u6709\u7684\u4e3b\u8282\u70b9\u4e0b\u7ebf\u540e\u7b49\u4e86\u5f88\u957f\u65f6\u95f4\u53c8\u4e0a\u7ebf\u4e86\uff0c\u90a3\u4e48\u4f1a\u9ed8\u8ba4\u6210\u4e3a\u73b0\u6709\u4e3b\u8282\u70b9\u7684\u4ece\u8282\u70b9\uff0c\u53cd\u5ba2\u4e3a\u4e3b\u7684\u60c5\u51b5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u67d0\u4e00\u6bb5\u63d2\u69fd\u5185\u90e8\u7684\u4e3b\u4ece\u8282\u70b9\u5168\u90e8\u4e0b\u7ebf\uff0credis\u96c6\u7fa4\u662f\u5426\u80fd\u591f\u54cd\u5e94\uff0c\u6839\u636e\u914d\u7f6e\u6765\u7684\uff0c\u5982\u4e0b\u914d\u7f6e\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cluster-require-full-coverage yes \u90a3\u4e48\u4f1a\u628a\u5168\u90e8\u96c6\u7fa4\u6302\u6389\uff0c\u96c6\u7fa4\u4e0d\u518d\u63d0\u4f9b\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},"cluster-require-full-coverage no \u53ea\u6709\u5f53\u524d\u63d2\u69fd\u4e0d\u53ef\u4ee5\u5b58\u6216\u8bfb\u6570\u636e\u3002\u5176\u4ed6\u7684\u63d2\u69fd\u6240\u5bf9\u5e94\u7684\u5b9e\u4f8b\u6b63\u5e38\u4f7f\u7528\u3002")))),(0,r.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\uff0c\u63a8\u8350\u8bbe\u7f6ecluster-require-full-coverage\u4e3ayes\uff0c\u76f4\u63a5\u5168\u90e8\u6302\u6389\u3002    "),(0,r.kt)("h2",{id:"\u8c03\u7528"},"\u8c03\u7528"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u8fde\u63a5\u6c60\uff0c\u94fe\u63a5\u4efb\u610f\u4e00\u4e2a\u5b9e\u4f8b\u5730\u5740\u5373\u53ef\uff0c\u5c31\u80fd\u4f7f\u7528redis\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5373\u4f7f\u8fde\u63a5\u7684\u4e0d\u662f\u4e3b\u673a\uff0c\u96c6\u7fa4\u4f1a\u81ea\u52a8\u5207\u6362\u4e3b\u673a\u5b58\u50a8\u3002\u4e3b\u673a\u5199\uff0c\u4ece\u673a\u8bfb\u3002\n\u65e0\u4e2d\u5fc3\u5316\u4e3b\u4ece\u96c6\u7fa4\u3002\u65e0\u8bba\u4ece\u54ea\u53f0\u4e3b\u673a\u5199\u7684\u6570\u636e\uff0c\u5176\u4ed6\u4e3b\u673a\u4e0a\u90fd\u80fd\u8bfb\u5230\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Set<HostAndPort>set = new HashSet<HostAndPort>();\nset.add(new HostAndPort("ipxxx",6379));\nJedisClusterjedisCluster=new JedisCluster(set);\njedisCluster.set("k1", "v1");\nSystem.out.println(jedisCluster.get("k1"));\n')),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,r.kt)("p",null,"\u6269\u5bb9\u65b9\u4fbf\uff0c\u538b\u529b\u5206\u62c5\uff0c\u914d\u7f6e\u7b80\u5355"),(0,r.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,r.kt)("p",null,"\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff0c\u6bd4\u5982\u524d\u9762\u7684mset\u591a\u4e2akey\u7684\u64cd\u4f5c\u9ed8\u8ba4\u60c5\u51b5\u4f1a\u62a5\u9519\uff0c\u9700\u8981\u501f\u52a9key\u7684\u7ec4\u5408\u65b9\u5f0f\u8fdb\u884c\u8bbe\u7f6e\u591a\u4e2akey\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u8bbe\u7f6e\u591a\u4e2akey\u7684\u4e8b\u52a1\u4e5f\u4e0d\u592a\u65b9\u4fbf\uff0c\u9700\u8981\u4f7f\u7528\u7ec4\u8fd9\u79cd\u601d\u60f3\u53bb\u5904\u7406\u3002"),(0,r.kt)("p",null,"lua\u811a\u672c\u53ef\u4ee5\u5728\u5355\u4e2aredis\u5b9e\u4f8b\u4e0a\u4f7f\u7528\uff0c\u4f46\u662f\u5728\u96c6\u7fa4\u4e2d\u4e0d\u53ef\u4ee5\u5bf9\u591a\u4e2akey\u8fdb\u884c\u5904\u7406\uff0c\u9700\u8981\u5224\u65ad\u5f53\u524d\u7684key\u662f\u5426\u5728\u4e00\u4e2a\u63d2\u69fdslot\u5185\u90e8\u624d\u53ef\u4ee5\u4f7f\u7528\uff0c\u90a3\u4e48\u975e\u8981\u7528\u591a\u4e2akey\u7684\u8bdd\uff0c\u9700\u8981\u501f\u52a9\u7ec4\u8fd9\u79cd\u601d\u60f3\u53bb\u5904\u7406\u3002\u4e5f\u5c31\u662f\n\u6838\u5fc3\u601d\u60f3\u662f\u4e1a\u52a1\u5c42\u4fdd\u8bc1key\u90fd\u843d\u5728\u4e00\u4e2aslot\u4e2d\u5373\u53ef\u3002"))}k.isMDXComponent=!0}}]);