"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[5287],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85374:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const i={},a="\u83b7\u53d6\u7528\u6237\u4fe1\u606f(header)",s={unversionedId:"go-zero/extension/get-header",id:"go-zero/extension/get-header",title:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(header)",description:"\u5b9e\u73b0\u4eceheader\u83b7\u53d6\u4fe1\u606f",source:"@site/docs/go-zero/extension/get-header.md",sourceDirName:"go-zero/extension",slug:"/go-zero/extension/get-header",permalink:"/docs/go-zero/extension/get-header",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"GoZero",previous:{title:"JWT\u751f\u6210",permalink:"/docs/go-zero/extension/gen-jwt"},next:{title:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(jwt\u9274\u6743)",permalink:"/docs/go-zero/extension/get-jwt-info"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606fheader"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(header)"),(0,o.kt)("h1",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"\u5b9e\u73b0\u4eceheader\u83b7\u53d6\u4fe1\u606f"),(0,o.kt)("h1",{id:"\u8bf7\u6c42\u7ea6\u5b9a"},"\u8bf7\u6c42\u7ea6\u5b9a"),(0,o.kt)("p",null,"\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4f1a\u4e86\u600e\u4e48\u4f7f\u7528jwt\u8fdb\u884c\u9274\u6743\uff0c\u4f46\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"/user/info"),"\u63a5\u53e3\u5e76\u6ca1\u6709\u5b9a\u4e49\u8bf7\u6c42\u53c2\u6570\uff0c\u6211\u4eec\u672c\u8282\u540e\u89c4\u5b9a\u7528\u6237\u4fe1\u606f\u901a\u8fc7\u8bf7\u6c42\u5934\u4e2d\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"x-user-id"),"\u643a\u5e26\u5230\u670d\u52a1\u5668\n\u683c\u5f0f\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET \\\n  http://127.0.0.1:8888/user/info \\\n  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDM2MzU0OTMsImlhdCI6MTYwMzU0OTA5M30.fGNe-sAEL6NuWDPWpfVi840qsamPA3fC9h4iO3rF9v0' \\\n  -H 'x-user-id: 1'\n")),(0,o.kt)("h1",{id:"\u5b8c\u5584\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u903b\u8f91"},"\u5b8c\u5584\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u903b\u8f91"),(0,o.kt)("p",null,"1\u3001\u7f16\u8f91userinfohandler.go,\u4eceheader\u4e2d\u83b7\u53d6\u7528\u6237id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  vi book/user/api/internal/handler/userinfohandler.go\n")),(0,o.kt)("p",null,"userinfohandler.go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'package handler\n\nimport (\n    "net/http"\n\n    "book/user/api/internal/logic"\n    "book/user/api/internal/svc"\n    "github.com/zeromicro/go-zero/rest/httpx"\n)\n\nfunc userInfoHandler(ctx *svc.ServiceContext) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        userId:=r.Header.Get("x-user-id")\n        l := logic.NewUserInfoLogic(r.Context(), ctx)\n        resp, err := l.UserInfo(userId)\n        if err != nil {\n            httpx.Error(w, err)\n        } else {\n            httpx.OkJson(w, resp)\n        }\n    }\n}\n')),(0,o.kt)("p",null,"2\u3001\u7f16\u8f91error.go,\u6dfb\u52a0errirUserNotFound\u9519\u8bef\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vi book/user/api/internal/logic/error.go\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'errorUserNotFound       = shared.NewDefaultError("\u7528\u6237\u4e0d\u5b58\u5728")\n')),(0,o.kt)("p",null,"2\u3001\u7f16\u8f91userinfologic.go,\u586b\u5145\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u903b\u8f91"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vi book/user/api/internal/logic/userinfologic.go\n")),(0,o.kt)("p",null,"userinfologic.go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'package logic\n\nimport (\n    "book/user/model"\n    "context"\n    "strconv"\n\n    "book/user/api/internal/svc"\n    "book/user/api/internal/types"\n\n    "github.com/zeromicro/go-zero/core/logx"\n)\n\ntype UserInfoLogic struct {\n    logx.Logger\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n}\n\nfunc NewUserInfoLogic(ctx context.Context, svcCtx *svc.ServiceContext) UserInfoLogic {\n    return UserInfoLogic{\n        Logger: logx.WithContext(ctx),\n        ctx:    ctx,\n        svcCtx: svcCtx,\n    }\n}\n\nfunc (l *UserInfoLogic) UserInfo(userId string) (*types.UserReply, error) {\n    userInt, err := strconv.ParseInt(userId, 10, 64)\n    if err != nil {\n        return nil, err\n    }\n\n    userInfo, err := l.svcCtx.UserModel.FindOne(userInt)\n    switch err {\n    case nil:\n        return &types.UserReply{\n            Id:       userInfo.Id,\n            Username: userInfo.Name,\n            Mobile:   userInfo.Mobile,\n            Nickname: userInfo.Nickname,\n            Gender:   userInfo.Gender,\n        }, nil\n    case model.ErrNotFound:\n        return nil, errorUserNotFound\n    default:\n        return nil, err\n    }\n}\n')),(0,o.kt)("h1",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i -X GET \\\n  http://127.0.0.1:8888/user/info \\\n  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDM2MzU0OTMsImlhdCI6MTYwMzU0OTA5M30.fGNe-sAEL6NuWDPWpfVi840qsamPA3fC9h4iO3rF9v0' \\\n  -H 'x-user-id: 1'\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/465993/1603555677203-b4cf3af3-c437-4361-8b2b-59d8941b68df.png#align=left&display=inline&height=544&margin=%5Bobject%20Object%5D&name=user-info.png&originHeight=544&originWidth=2224&size=136083&status=done&style=none&width=2224",alt:"user-info.png"})))}d.isMDXComponent=!0}}]);