"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[9662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:10},l="\u6307\u6807\u76d1\u63a7",i={unversionedId:"go-zero/component/metric",id:"go-zero/component/metric",title:"\u6307\u6807\u76d1\u63a7",description:"\u76d1\u63a7\u63a5\u5165",source:"@site/docs/go-zero/component/metric.md",sourceDirName:"go-zero/component",slug:"/go-zero/component/metric",permalink:"/docs/go-zero/component/metric",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"GoZero",previous:{title:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/docs/go-zero/component/trace"},next:{title:"go-queue",permalink:"/docs/go-zero/other-component/go-queue"}},p={},m=[{value:"\u76d1\u63a7\u63a5\u5165",id:"\u76d1\u63a7\u63a5\u5165",level:3},{value:"\u5982\u4f55\u96c6\u6210",id:"\u5982\u4f55\u96c6\u6210",level:3},{value:"\u5982\u4f55\u81ea\u5b9a\u4e49",id:"\u5982\u4f55\u81ea\u5b9a\u4e49",level:3}],c={toc:m},u="wrapper";function s(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6307\u6807\u76d1\u63a7"},"\u6307\u6807\u76d1\u63a7"),(0,a.kt)("h3",{id:"\u76d1\u63a7\u63a5\u5165"},"\u76d1\u63a7\u63a5\u5165"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," \u6846\u67b6\u4e2d\u96c6\u6210\u4e86\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u7684\u670d\u52a1\u6307\u6807\u76d1\u63a7\u3002\u4f46\u662f\u6ca1\u6709\u663e\u5f0f\u6253\u5f00\uff0c\u9700\u8981\u5f00\u53d1\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"Prometheus:\n  Host: 127.0.0.1\n  Port: 9091\n  Path: /metrics\n")),(0,a.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u662f\u5728\u672c\u5730\u642d\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus"),"\uff0c\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.yaml")," \u4e2d\u5199\u5165\u9700\u8981\u6536\u96c6\u670d\u52a1\u76d1\u63a7\u4fe1\u606f\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"- job_name: 'file_ds'\n    static_configs:\n      - targets: ['your-local-ip:9091']\n        labels:\n          job: activeuser\n          app: activeuser-api\n          env: dev\n          instance: your-local-ip:service-port\n")),(0,a.kt)("p",null,"\u56e0\u4e3a\u672c\u5730\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u8fd0\u884c\u7684\u3002\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.yaml")," \u653e\u7f6e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-prometheus")," \u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n    -p 9090:9090 \\\n    -v dockeryml/docker-prometheus:/etc/prometheus \\\n    prom/prometheus\n")),(0,a.kt)("p",null,"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:9090")," \u5c31\u53ef\u4ee5\u770b\u5230\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"prometheus",src:n(63604).Z,width:"1356",height:"492"})),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"http://service-ip:9091/metrics")," \u5c31\u53ef\u4ee5\u770b\u5230\u8be5\u670d\u52a1\u7684\u76d1\u63a7\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"prometheus data",src:n(2853).Z,width:"1350",height:"874"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\u6709\u4e24\u79cd ",(0,a.kt)("inlineCode",{parentName:"p"},"bucket"),"\uff0c\u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"count/sum")," \u6307\u6807\u3002"),(0,a.kt)("p",null,"\u90a3 ",(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," \u662f\u5982\u4f55\u96c6\u6210\u76d1\u63a7\u6307\u6807\uff1f\u76d1\u63a7\u7684\u53c8\u662f\u4ec0\u4e48\u6307\u6807\uff1f\u6211\u4eec\u5982\u4f55\u5b9a\u4e49\u6211\u4eec\u81ea\u5df1\u7684\u6307\u6807\uff1f\u4e0b\u9762\u5c31\u6765\u89e3\u91ca\u8fd9\u4e9b\u95ee\u9898"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u7684\u57fa\u672c\u63a5\u5165\uff0c\u53ef\u4ee5\u53c2\u770b\u6211\u4eec\u7684\u53e6\u5916\u4e00\u7bc7\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zeromicro.github.io/go-zero/service-monitor.html"},"https://zeromicro.github.io/go-zero/service-monitor.html"))),(0,a.kt)("h3",{id:"\u5982\u4f55\u96c6\u6210"},"\u5982\u4f55\u96c6\u6210"),(0,a.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\u7684\u8bf7\u6c42\u65b9\u5f0f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP"),"\uff0c\u4e5f\u5c31\u662f\u5728\u8bf7\u6c42\u670d\u52a1\u7aef\u65f6\uff0c\u76d1\u63a7\u6307\u6807\u6570\u636e\u4e0d\u65ad\u88ab\u641c\u96c6\u3002\u5f88\u5bb9\u6613\u60f3\u5230\u662f \u4e2d\u95f4\u4ef6 \u7684\u529f\u80fd\uff0c\u5177\u4f53\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="https://github.com/zeromicro/go-zero/blob/master/rest/handler/prometheushandler.go"',title:'"https://github.com/zeromicro/go-zero/blob/master/rest/handler/prometheushandler.go"'},'var (\n metricServerReqDur = metric.NewHistogramVec(&metric.HistogramVecOpts{\n  ...\n    // \u76d1\u63a7\u6307\u6807\n  Labels:    []string{"path"},\n    // \u76f4\u65b9\u56fe\u5206\u5e03\u4e2d\uff0c\u7edf\u8ba1\u7684\u6876\n  Buckets:   []float64{5, 10, 25, 50, 100, 250, 500, 1000},\n })\n\n metricServerReqCodeTotal = metric.NewCounterVec(&metric.CounterVecOpts{\n  ...\n    // \u76d1\u63a7\u6307\u6807\uff1a\u76f4\u63a5\u5728\u8bb0\u5f55\u6307\u6807 incr() \u5373\u53ef\n  Labels:    []string{"path", "code"},\n })\n)\n\nfunc PromethousHandler(path string) func(http.Handler) http.Handler {\n return func(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n      // \u8bf7\u6c42\u8fdb\u5165\u7684\u65f6\u95f4\n   startTime := timex.Now()\n   cw := &security.WithCodeResponseWriter{Writer: w}\n   defer func() {\n        // \u8bf7\u6c42\u8fd4\u56de\u7684\u65f6\u95f4\n    metricServerReqDur.Observe(int64(timex.Since(startTime)/time.Millisecond), path)\n    metricServerReqCodeTotal.Inc(path, strconv.Itoa(cw.Code))\n   }()\n   // \u4e2d\u95f4\u4ef6\u653e\u884c\uff0c\u6267\u884c\u5b8c\u540e\u7eed\u4e2d\u95f4\u4ef6\u548c\u4e1a\u52a1\u903b\u8f91\u3002\u91cd\u65b0\u56de\u5230\u8fd9\uff0c\u505a\u4e00\u4e2a\u5b8c\u6574\u8bf7\u6c42\u7684\u6307\u6807\u4e0a\u62a5\n      // [\ud83e\uddc5\uff1a\u6d0b\u8471\u6a21\u578b]\n   next.ServeHTTP(cw, r)\n  })\n }\n}\n')),(0,a.kt)("p",null,"\u5176\u5b9e\u6574\u4e2a\u5f88\u7b80\u5355\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HistogramVec \u8d1f\u8d23\u8bf7\u6c42\u8017\u65f6\u641c\u96c6\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"bucket \u5b58\u653e\u7684\u5c31\u662f option \u6307\u5b9a\u7684\u8017\u65f6\u6307\u6807\u3002\u67d0\u4e2a\u8bf7\u6c42\u8017\u65f6\u591a\u5c11\u5c31\u4f1a\u88ab\u805a\u96c6\u5bf9\u5e94\u7684\u6876\uff0c\u8ba1\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u7ec8\u5c55\u793a\u7684\u5c31\u662f\u4e00\u4e2a\u8def\u7531\u5728\u4e0d\u540c\u8017\u65f6\u7684\u5206\u5e03\uff0c\u5f88\u76f4\u89c2\u63d0\u4f9b\u7ed9\u5f00\u53d1\u8005\u53ef\u4ee5\u4f18\u5316\u7684\u533a\u57df\u3002"))),(0,a.kt)("li",{parentName:"ul"},"CounterVec \u8d1f\u8d23\u6307\u5b9a labels \u6807\u7b7e\u641c\u96c6\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Labels: []string{"path", "code"}'),(0,a.kt)("li",{parentName:"ul"},"labels \u76f8\u5f53\u4e00\u4e2a tuple\u3002go-zero \u662f\u4ee5(path, code)\u4f5c\u4e3a\u6574\u4f53\uff0c\u8bb0\u5f55\u4e0d\u540c\u8def\u7531\u4e0d\u540c\u72b6\u6001\u7801\u7684\u8fd4\u56de\u6b21\u6570\u3002\u5982\u679c 4xx,5xx\u8fc7\u591a\u7684\u65f6\u5019\uff0c\u662f\u4e0d\u662f\u5e94\u8be5\u770b\u770b\u4f60\u7684\u670d\u52a1\u5065\u5eb7\u7a0b\u5ea6\uff1f")))),(0,a.kt)("h3",{id:"\u5982\u4f55\u81ea\u5b9a\u4e49"},"\u5982\u4f55\u81ea\u5b9a\u4e49"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"go-zero")," \u4e2d\u4e5f\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus metric")," \u57fa\u672c\u5c01\u88c5\uff0c\u4f9b\u5f00\u53d1\u8005\u81ea\u5df1\u5f00\u53d1\u81ea\u5df1 prometheus \u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee3\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero/tree/master/core/metric"},"https://github.com/zeromicro/go-zero/tree/master/core/metric"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"),(0,a.kt)("th",{parentName:"tr",align:null},"\u641c\u96c6\u51fd\u6570"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CounterVec"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5355\u4e00\u7684\u8ba1\u6570\u3002\u7528\u4f5c\uff1aQPS\u7edf\u8ba1"),(0,a.kt)("td",{parentName:"tr",align:null},"CounterVec.Inc() \u6307\u6807+1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GuageVec"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5355\u7eaf\u6307\u6807\u8bb0\u5f55\u3002\u9002\u7528\u4e8e\u78c1\u76d8\u5bb9\u91cf\uff0cCPU/Mem\u4f7f\u7528\u7387\uff08\u53ef\u589e\u52a0\u53ef\u51cf\u5c11\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"GuageVec.Inc()/GuageVec.Add() \u6307\u6807+1/\u6307\u6807\u52a0N\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u8d1f\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HistogramVec"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53cd\u5e94\u6570\u503c\u7684\u5206\u5e03\u60c5\u51b5\u3002\u9002\u7528\u4e8e\uff1a\u8bf7\u6c42\u8017\u65f6\u3001\u54cd\u5e94\u5927\u5c0f"),(0,a.kt)("td",{parentName:"tr",align:null},"HistogramVec.Observe(val, labels) \u8bb0\u5f55\u6307\u6807\u5f53\u524d\u5bf9\u5e94\u503c\uff0c\u5e76\u627e\u5230\u503c\u6240\u5728\u7684\u6876\uff0c+1")))),(0,a.kt)("p",null,"\u53e6\u5916\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"HistogramVec.Observe()")," \u505a\u4e00\u4e2a\u57fa\u672c\u5206\u6790\uff1a"),(0,a.kt)("p",null,"\u6211\u4eec\u5176\u5b9e\u53ef\u4ee5\u770b\u5230\u4e0a\u56fe\u6bcf\u4e2a HistogramVec \u7edf\u8ba1\u90fd\u4f1a\u67093\u4e2a\u5e8f\u5217\u51fa\u73b0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"_count\uff1a\u6570\u636e\u4e2a\u6570"),(0,a.kt)("li",{parentName:"ul"},"_sum\uff1a\u5168\u90e8\u6570\u636e\u52a0\u548c"),(0,a.kt)("li",{parentName:"ul"},"_bucket{le=a1}\uff1a\u5904\u4e8e ","[-inf, a1]"," \u7684\u6570\u636e\u4e2a\u6570")),(0,a.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u4e5f\u731c\u6d4b\u5728\u7edf\u8ba1\u8fc7\u7a0b\u4e2d\uff0c\u52063\u79cd\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \u57fa\u672c\u4e0a\u5728prometheus\u7684\u7edf\u8ba1\u90fd\u662f\u4f7f\u7528 atomic CAS \u65b9\u5f0f\u8fdb\u884c\u8ba1\u6570\u7684\n// \u6027\u80fd\u8981\u6bd4\u4f7f\u7528 Mutex \u8981\u9ad8\nfunc (h *histogram) observe(v float64, bucket int) {\n n := atomic.AddUint64(&h.countAndHotIdx, 1)\n hotCounts := h.counts[n>>63]\n\n if bucket < len(h.upperBounds) {\n    // val \u5bf9\u5e94\u6570\u636e\u6876 +1\n  atomic.AddUint64(&hotCounts.buckets[bucket], 1)\n }\n for {\n  oldBits := atomic.LoadUint64(&hotCounts.sumBits)\n  newBits := math.Float64bits(math.Float64frombits(oldBits) + v)\n    // sum\u6307\u6807\u6570\u503c +v\uff08\u6bd5\u7adf\u662f\u603b\u6570sum\uff09\n  if atomic.CompareAndSwapUint64(&hotCounts.sumBits, oldBits, newBits) {\n   break\n  }\n }\n // count \u7edf\u8ba1 +1\n atomic.AddUint64(&hotCounts.count, 1)\n}\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u5f00\u53d1\u8005\u60f3\u5b9a\u4e49\u81ea\u5df1\u7684\u76d1\u63a7\u6307\u6807\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528 goctl \u751f\u6210API\u4ee3\u7801\u6307\u5b9a\u8981\u751f\u6210\u7684 \u4e2d\u95f4\u4ef6\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://zeromicro.github.io/go-zero/middleware.html"},"https://zeromicro.github.io/go-zero/middleware.html")),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e2d\u95f4\u4ef6\u6587\u4ef6\u4e66\u5199\u81ea\u5df1\u9700\u8981\u7edf\u8ba1\u7684\u6307\u6807\u903b\u8f91"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u7136\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u5728\u4e1a\u52a1\u903b\u8f91\u4e2d\u4e66\u5199\u7edf\u8ba1\u7684\u6307\u6807\u903b\u8f91\u3002\u540c\u4e0a\u3002")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u90fd\u662f\u9488\u5bf9 HTTP \u90e8\u5206\u903b\u8f91\u7684\u89e3\u6790\uff0cRPC \u90e8\u5206\u7684\u903b\u8f91\u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u5728 \u62e6\u622a\u5668 \u90e8\u5206\u770b\u5230\u8bbe\u8ba1\u3002"))}s.isMDXComponent=!0},2853:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-data-9eebe2013fcb115c0dd77fc00d6a667a.png"},63604:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-2fc01ae3db17d835ea5d3e02920549e5.png"}}]);