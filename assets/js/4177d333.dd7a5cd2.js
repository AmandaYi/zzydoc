"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[7595],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={},a="\u83b7\u53d6\u7528\u6237\u4fe1\u606f(jwt\u9274\u6743)",s={unversionedId:"go-zero/extension/get-jwt-info",id:"go-zero/extension/get-jwt-info",title:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(jwt\u9274\u6743)",description:"\u672c\u8282\u5c06\u901a\u8fc7\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6765\u6f14\u793ajwt\u9274\u6743\u600e\u4e48\u4f7f\u7528",source:"@site/docs/go-zero/extension/get-jwt-info.md",sourceDirName:"go-zero/extension",slug:"/go-zero/extension/get-jwt-info",permalink:"/docs/go-zero/extension/get-jwt-info",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"GoZero",previous:{title:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(header)",permalink:"/docs/go-zero/extension/get-header"},next:{title:"JWT\u9274\u6743\u4e2d\u95f4\u4ef6",permalink:"/docs/go-zero/extension/jwt-middleware"}},l={},p=[],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606fjwt\u9274\u6743"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(jwt\u9274\u6743)"),(0,o.kt)("h1",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"\u672c\u8282\u5c06\u901a\u8fc7\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6765\u6f14\u793ajwt\u9274\u6743\u600e\u4e48\u4f7f\u7528"),(0,o.kt)("h1",{id:"\u5b9a\u4e49\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u8def\u7531"},"\u5b9a\u4e49\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u8def\u7531"),(0,o.kt)("p",null,"\u7f16\u8f91user.api\u6587\u4ef6\uff0c\u589e\u52a0\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u8def\u7531"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@handler userInfo\nget /user/info () returns (UserReply)\n")),(0,o.kt)("h1",{id:"\u5f00\u542fjwt\u9274\u6743"},"\u5f00\u542fjwt\u9274\u6743"),(0,o.kt)("p",null,"\u7531\u4e8e\u4e4b\u524d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"/user/ping"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"/user/register"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"user/login"),"\u662f\u4e0d\u9700\u8981\u9274\u6743\u5c31\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u56e0\u6b64\u5c06\u9700\u8981\u9274\u6743\u7684\u534f\u8bae",(0,o.kt)("inlineCode",{parentName:"p"},"/user/info"),"\u5355\u72ec\u653e\u5728\u4e00\u4e2aservice\u7ec4\u4e2d\uff0c\u5e76\u4e14\u5bf9\u8be5service\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"jwt"),"\u6807\u5fd7\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@server(\n    jwt: Auth\n)\nservice user-api{\n    @handler userInfo\n    get /user/info () returns (UserReply)\n}\n")),(0,o.kt)("p",null,"\u5b8c\u6574\u7684user.api\u5185\u5bb9\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'info(\n    title: "user api"\n    desc: "\u7528\u6237\u7cfb\u7edf"\n    author: "anqiansong"\n    email: "anqiansong@xiaoheiban.cn"\n)\n\ntype RegisterReq {\n    Username string `json:"username"`\n    Mobile string `json:"mobile"`\n    Password string `json:"password"`\n}\n\ntype LoginReq {\n    Username string `json:"username"`\n    Password string `json:"password"`\n}\n\ntype UserReply {\n    Id int64 `json:"id"`\n    Username string `json:"username"`\n    Mobile string `json:"mobile"`\n    Nickname string `json:"nickname"`\n    Gender string `json:"gender"`\n    JwtToken\n}\n\ntype JwtToken {\n    AccessToken string `json:"accessToken,omitempty"`\n    AccessExpire int64 `json:"accessExpire,omitempty"`\n    RefreshAfter int64 `json:"refreshAfter,omitempty"`\n}\n\nservice user-api {\n    @handler ping\n    post /user/ping ()\n    \n    @handler register\n    post /user/register (RegisterReq)\n    \n    @handler login\n    post /user/login (LoginReq) returns (UserReply)\n}\n\n@server(\n    jwt: Auth\n    middleware: Usercheck\n)\nservice user-api {\n    @handler userInfo\n    get /user/info () returns (UserReply)\n}\n')),(0,o.kt)("h1",{id:"\u91cd\u65b0\u751f\u6210\u4ee3\u7801"},"\u91cd\u65b0\u751f\u6210\u4ee3\u7801"),(0,o.kt)("p",null,"\u8fdb\u5165api(",(0,o.kt)("inlineCode",{parentName:"p"},"book/user/api"),")\u6587\u4ef6\u5939\u540e\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ goctl api go -api user.api -dir .\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: \u591a\u6b21\u91cd\u590d\u751f\u6210\u4ee3\u7801\u4f1a\u6709\u4e9b\u8b66\u544a\uff0c\u76f4\u63a5\u56de\u8f66\u5373\u53ef\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/465993/1603555564119-477939d2-ebfc-48f8-bdd1-527ceec26c4f.png#align=left&display=inline&height=832&margin=%5Bobject%20Object%5D&name=warning.png&originHeight=832&originWidth=2224&size=253322&status=done&style=none&width=2224",alt:"warning.png"}))),(0,o.kt)("p",null,"\u6700\u65b0\u4ee3\u7801\u7ed3\u6784\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 shared\n\u2502\xa0\xa0 \u2514\u2500\u2500 baseerror.go\n\u2514\u2500\u2500 user\n    \u251c\u2500\u2500 api\n    \u2502\xa0\xa0 \u251c\u2500\u2500 etc\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user-api.yaml\n    \u2502\xa0\xa0 \u251c\u2500\u2500 internal\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 handler\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 loginhandler.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pinghandler.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 registerhandler.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 routes.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 userinfohandler.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 error.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 loginlogic.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pinglogic.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 registerlogic.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 userinfologic.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 svc\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 types\n    \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 types.go\n    \u2502\xa0\xa0 \u251c\u2500\u2500 user.api\n    \u2502\xa0\xa0 \u2514\u2500\u2500 user.go\n    \u251c\u2500\u2500 model\n    \u2502\xa0\xa0 \u251c\u2500\u2500 usermodel.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 vars.go\n")),(0,o.kt)("p",null,"\u6211\u4eec\u6765\u67e5\u770b\u4e00\u4e0broutes\u4e2d\u5df2\u7ecf\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"/user/info"),"\u8def\u7531\u5df2\u7ecf\u8fdb\u884c\u4e86\u5355\u72ec\u7684\u5206\u7ec4\uff0c\u4e14\u5e26\u4e0a\u4e86jwt\u9274\u6743option\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/465993/1603555590445-9c9b998b-089a-4524-8b89-dfeef9475af5.png#align=left&display=inline&height=1732&margin=%5Bobject%20Object%5D&name=route-user-info-jwt.png&originHeight=1732&originWidth=2224&size=281752&status=done&style=none&width=2224",alt:"route-user-info-jwt.png"})),(0,o.kt)("h1",{id:"\u9a8c\u8bc1jwt"},"\u9a8c\u8bc1jwt"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u4e0d\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\u67e5\u770b\u4e00\u4e0b\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i -X GET \\\n  http://127.0.0.1:8888/user/info \\\n  -H 'cache-control: no-cache'\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/465993/1603555608605-fb9c7bd2-eefe-4599-8859-ac6e175861fa.png#align=left&display=inline&height=364&margin=%5Bobject%20Object%5D&name=auth-disable.png&originHeight=364&originWidth=2224&size=63173&status=done&style=none&width=2224",alt:"auth-disable.png"})),(0,o.kt)("p",null,"\u4ece\u9014\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u72b6\u6001\u884c\u4e2d\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 401 Unauthorized"),"\u5185\u5bb9\uff0c\u5f88\u660e\u663e\uff0c\u672a\u901a\u8fc7\u9274\u6743"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\u518d\u8bf7\u6c42\u4e00\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -i -X GET \\\n  http://127.0.0.1:8888/user/info \\\n  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDM2MzU0OTMsImlhdCI6MTYwMzU0OTA5M30.fGNe-sAEL6NuWDPWpfVi840qsamPA3fC9h4iO3rF9v0'\n")),(0,o.kt)("p",null,"NOTE: \u8fd9\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"authorization"),"\u9700\u8981\u66ff\u6362\u4e3a\u4f60\u5f53\u524d\u83b7\u53d6\u5230\u4e14\u672a\u8fc7\u671f\u7684accessToken,\u6839\u636e\u524d\u4e00\u8282\u767b\u5f55\u65f6\u8fd4\u56de\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/465993/1603555619289-17719ef7-f94b-4ae8-b4f8-30de85a2d72b.png#align=left&display=inline&height=508&margin=%5Bobject%20Object%5D&name=auth.png&originHeight=508&originWidth=2224&size=124071&status=done&style=none&width=2224",alt:"auth.png"})))}g.isMDXComponent=!0}}]);