"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[7987],{3905:(n,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var t=r(67294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var l=t.createContext({}),u=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},c=function(n){var e=u(n.components);return t.createElement(l.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),p=u(r),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?t.createElement(f,a(a({ref:e},c),{},{components:r})):t.createElement(f,a({ref:e},c))}));function f(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[p]="string"==typeof n?n:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60858:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(87462),i=(r(67294),r(3905));const o={},a="\u7a00\u758f\u6570\u7ec4",s={unversionedId:"structure/sparseArray",id:"structure/sparseArray",title:"\u7a00\u758f\u6570\u7ec4",description:"\u7a00\u758f\u6570\u7ec4\u7684\u5e94\u7528\u573a\u666f\u662f:\u5f53\u666e\u901a\u6570\u7ec4\u4e2d\u65e0\u6548\u6570\u636e\u91cf",source:"@site/docs/structure/sparseArray.md",sourceDirName:"structure",slug:"/structure/sparseArray",permalink:"/docs/structure/sparseArray",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Structure",previous:{title:"\u5355\u5411\u73af\u5f62\u94fe\u8868",permalink:"/docs/structure/algorithmLineCircleLinkedListImpl"},next:{title:"\u961f\u5217",permalink:"/docs/structure/linear03"}},l={},u=[],c={toc:u},p="wrapper";function m(n){let{components:e,...r}=n;return(0,i.kt)(p,(0,t.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7a00\u758f\u6570\u7ec4"},"\u7a00\u758f\u6570\u7ec4"),(0,i.kt)("p",null,"\u7a00\u758f\u6570\u7ec4\u7684\u5e94\u7528\u573a\u666f\u662f:\u5f53\u666e\u901a\u6570\u7ec4\u4e2d\u65e0\u6548\u6570\u636e\u91cf\n\u8fdc\u8fdc\u5927\u4e8e\u6709\u6548\u6570\u636e\u91cf\u65f6,\u53ef\u4ee5\u7528\u7a00\u758f\u6570\u7ec4\u5bf9\u6570\u7ec4\u8fdb\u884c\u538b\u7f29\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * @name \u7a00\u758f\u6570\u7ec4\u5b9e\u73b0\u7c7b\n * @description \u5305\u542b\u4e00\u4e2a\u5168\u91cf\u6570\u7ec4\u5f97\u751f\u4ea7\uff0c\u4f7f\u7528\u6570\u7ec4\u538b\u7f29\u4e3a\u7a00\u758f\u6570\u7ec4\uff0c\u4f7f\u7528\u94fe\u8868\u538b\u7f29\u4e3a\u7a00\u758f\u6570\u7ec4\uff0c\u901a\u8fc7\u6570\u7ec4\u65b9\u5f0f\u8fd8\u539f\u6570\u7ec4\uff0c\u901a\u8fc7\u94fe\u8868\u65b9\u5f0f\u8fd8\u539f\u6570\u7ec4\n */\nclass SpaceArray {\n\n    public int[][] originArray;\n\n    /**\n     * @name 1 \u751f\u4ea7\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\uff0c\u901a\u8fc7\u4e24\u4e2a\u5faa\u73af\u751f\u4ea7\u4e00\u4e2a\u4e8c\u7ef4\u77e9\u9635\u6570\u7ec4\n     * @description \u4e3a\u4e86\u8ba9\u6709\u6548\u503c\u5c3d\u53ef\u80fd\u5f97\u5c11\uff0c\u6240\u4ee5\u968f\u673a\u6570\u5f97\u5224\u5b9a\u4e5f\u8981\u5c3d\u53ef\u80fd\u5f97\u6982\u7387\u5c0f\uff0c\u56e0\u6b64\u53ef\u4ee5\u8bbe\u7f6e\u4e3aMath.random() > 0.9\uff0c\u8fd9\u6837\u5b50\u6709\u6548\u503c\u5f97\u6982\u7387\u5c31\u662f0.1\u4e86\n     */\n    public int[][] initProducer(int n) {\n        int[][] result = new int[n][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                result[i][j] = Math.random() > 0.9 ? 1 : 0;\n            }\n        }\n        return result;\n    }\n//\n//    /**\n//     * @name 1.1 \u6253\u5370\u751f\u4ea7\u7684\u4e8c\u7ef4\u6570\u7ec4\n//     */\n//    public void printfOriginArray() {\n//        for (int[] row : originArray) {\n//            for (int v : row) {\n//                System.out.printf(" %d ", v);\n//            }\n//            System.out.print("\\n");\n//        }\n//    }\n\n    /**\n     * @name 2 \u4f7f\u7528\u6570\u7ec4\u538b\u7f29\u4e3a\u7a00\u758f\u6570\u7ec4\n     */\n    public int[][] useArrayCompressed() {\n        // \u8981\u60f3\u538b\u7f29\u539f\u59cb\u6570\u7ec4\uff0c\u90a3\u4e48\u9700\u8981\u5f97\u5230\u591a\u5c11\u884c\u548c\u591a\u5c11\u5217\uff0c\u8fd8\u6709\u6709\u6548\u503c\u7684\u4e2a\u6570\u3002\n        // \u6bd4\u5982\u8fd9\u4e2a\u7c7b\u7684\uff0c\u6709\u6548\u503c\u662f1\uff0c0\u5c31\u662f\u65e0\u6548\u503c\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7\u5faa\u73af\u5f97\u5230\u4e0d\u4e3a0\u7684\u4e2a\u6570\uff0c\u4f5c\u4e3a\u6709\u6548\u503c\u7684\u4e2a\u6570\n        // \u90a3\u4e48\u6570\u7ec4\u7684\u7684\u957f\u5ea6\u548c\u5747\u53ef\u4ee5\u786e\u5b9a\u4e0b\u6765\u3002\n        // \u5982\uff0c\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u4e3a\n        // \u884c [0][0] = \u7b2c\u4e00\u7ef4\u7684\u957f\u5ea6\uff0c \u5217 [0][1] = \u7b2c\u4e8c\u7ef4\u7684\u957f\u5ea6\uff08\u4e3a\u4e86\u7b80\u5355\u8ba4\u77e5\uff0c\u4e0d\u8003\u8651\u7b2c\u4e8c\u7ef4\u7684\u957f\u5ea6\u5404\u4e0d\u76f8\u7b49\u7684\u95ee\u9898\uff09\uff0c\u6709\u6548\u503c\u4e2a\u6570 [0][2] = \u5373\u4e0d\u4e3a0\u7684\u603b\u6570\n        // \u7b2c\u4e00\u7ef4\u7684\u957f\u5ea6\n        int rowLen = this.originArray.length;\n        // \u7b2c\u4e8c\u7ef4\u7684\u957f\u5ea6\n        int colLen = 0;\n        if (rowLen > 0) {\n            colLen = this.originArray[0].length; // \u5047\u5b9a\u957f\u5ea6\u90fd\u5927\u4e8e0\n        }\n        // \u6709\u6548\u503c\u7684\u4e2a\u6570\n        int sum = 0;\n        for (int[] row : this.originArray) {\n            for (int v : row) {\n                if (v != 0) {\n                    sum++;\n                }\n            }\n        }\n        // \u521d\u59cb\u5316\u4e00\u4e2a\u6570\u7ec4,\u6570\u7ec4\u7684\u957f\u5ea6\u521a\u597d\u662f\u6709\u6548\u503c\u7684\u4e2a\u6570+1,\u8fd9\u91cc\u76841\u4ee3\u8868\u7b2c\u4e00\u9879,\u7528\u6765\u5b58\u50a8\u57fa\u672c\u4fe1\u606f,\u6216\u8005\u8bf4\u662f\u5143\u4fe1\u606f[\u884c\u603b\u6570,\u5217\u603b\u6570,\u6709\u6548\u503c\u603b\u6570],\n        // \u4ece\u7b2c\u4e8c\u9879\u5f00\u59cb\u5f00\u59cb,\u6bcf\u4e00\u884c\u5b58\u653e\u7684\u662f\u6709\u6548\u503c\u7684\u884c\u7d22\u5f15,\u5217\u7d22\u5f15,\u6709\u6548\u503c\n        int[][] result = new int[sum + 1][3];\n        // \u538b\u7f29\u540e\u7684\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u7684\u503c\u5e94\u8be5\u662f,\u884c\u7684\u603b\u6570,\u5217\u7684\u603b\u6570,\u6709\u6548\u503c\u7684\u603b\u6570\n        result[0] = new int[]{rowLen, colLen, sum};\n\n        // \u901a\u8fc7\u5faa\u73af\u539f\u59cb\u6570\u7ec4\u7684\u65b9\u5f0f, \u8bb0\u5f55\u6709\u6548\u503c\u7684\u884c\u7d22\u5f15,\u5217\u7d22\u5f15,\u6709\u6548\u503c\u5230\u65b0\u7684\u538b\u7f29\u6570\u7ec4\u91cc\u9762\n        // \u4e3a\u4e86\u65b9\u4fbf\u79fb\u52a8\u538b\u7f29\u540e\u7684\u6570\u7ec4\u7684\u6307\u9488\uff0c\u8fd9\u91cc\u5b9a\u4e49\u5f53\u524d\u6570\u7ec4\u7684\u6307\u9488\uff0c\u56e0\u4e3a\u524d\u9762\u5df2\u7ecf\u7528\u8fc7\u4e86\u538b\u7f29\u540e\u7684\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u4e86\uff0c\u6240\u4ee5\u8fd9\u91cc\u6307\u9488\u53ef\u4ee5\u76f4\u63a5\u4ece0\u5f00\u59cb,\u4ee3\u8868\u6307\u9488\u6307\u5411\u7b2c0\u53f7\u7d22\u5f15\u9879\n        int top = 0;\n        for (int i = 0; i < rowLen; i++) {\n            for (int j = 0; j < colLen; j++) {\n                if (this.originArray[i][j] != 0) {\n                    // \u5f53\u9047\u5230\u6709\u6548\u503c\u65f6\uff0c\u6e38\u6807\u79fb\u52a8\uff0c\u79fb\u52a8\u540e\uff0c\u7ed9\u5f53\u524d\u7d22\u5f15\u7684\u503c\u8d4b\u503c\n                    top++;\n                    // \u5206\u522b\u65f6\u4ed8\u6709\u6548\u503c\u7684\u884c\u7d22\u5f15\uff0c\u6709\u6548\u503c\u7684\u5217\u7d22\u5f15\uff0c\u6709\u6548\u503c\u7684\u503c\n                    int[] _r = new int[]{i, j, this.originArray[i][j]};\n                    result[top] = _r;\n                }\n            }\n        }\n        return result;\n    }\n\n    /**\n     * @name 2.1 \u628a\u4f7f\u7528\u6570\u7ec4\u65b9\u5f0f\u538b\u7f29\u7684\u6570\u7ec4\u8fd8\u539f\u4e3a\u539f\u59cb\u6570\u7ec4\n     */\n    public int[][] useArrayUnCompressed(int[][] compressArray) {\n        // \u9996\u5148\u6839\u636e\u538b\u7f29\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5f97\u5230\u884c\u603b\u6570\uff0c\u5217\u603b\u6570\uff0c\u6709\u6548\u503c\u603b\u6570\u3002\n        // \u90a3\u4e48\u901a\u8fc7\u8fd9\u4e09\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u6570\u7ec4\n        // \u7136\u540e\u901a\u8fc7\u5faa\u73af\u538b\u7f29\u540e\u7684\u6570\u7ec4\u957f\u5ea6, \u6309\u7167\u6709\u6548\u503c\u7684\u884c\u7d22\u5f15,\u5217\u7d22\u5f15,\u628a\u503c\u7ed9\u8d4b\u503c\u5230\u6307\u5b9a\u4f4d\u7f6e\u5373\u53ef\n        int rowLen = compressArray[0][0];\n        int colLen = compressArray[0][1];\n        int sum = compressArray[0][2];\n\n        // \u521d\u59cb\u5316\u4e00\u4e2a\u6ca1\u6709\u6709\u6548\u503c\u7684\u539f\u59cb\u6570\u7ec4\n        int[][] result = new int[rowLen][colLen];\n        int rowIndex = 0;\n        int colIndex = 0;\n        int value = 0;\n        // \u56e0\u6b64\u7b2c\u4e00\u9879\u4e3a\u57fa\u672c\u4fe1\u606f\uff0c\u6240\u4ee5i\u8981\u4ece1\u7d22\u5f15\u51fa\u53d1\n        for (int i = 1; i < compressArray.length; i++) {\n            rowIndex = compressArray[i][0];\n            colIndex = compressArray[i][1];\n            value = compressArray[i][2];\n\n            result[rowIndex][colIndex] = value;\n        }\n        return result;\n    }\n\n    /**\n     * @name 3 \u4f7f\u7528\u94fe\u8868\u538b\u7f29\u4e3a\u7a00\u758f\u6570\u7ec4\n     * @return \u94fe\u8868\u5934\u5730\u5740\n     */\n    class SparseNode {\n        int row = 0;\n        int col = 0;\n        int value = 0;\n\n        SparseNode next;\n\n        public SparseNode(int row, int col, int value) {\n            this.row = row;\n            this.col = col;\n            this.value = value;\n        }\n\n        @Override\n        public String toString() {\n            return "SparseNode{" +\n                    "row=" + row +\n                    ", col=" + col +\n                    ", value=" + value +\n                    \'}\';\n        }\n    }\n\n    public SparseNode useLinkedCompressed() {\n        // \u4f7f\u7528\u94fe\u8868\u7684\u5f62\u5f0f\u6765\u538b\u7f29\u539f\u59cb\u6570\u7ec4\uff0c\u8ddf\u7528\u6570\u7ec4\u538b\u7f29\u57fa\u672c\u601d\u8def\u4e00\u6837\uff0c\u53ea\u662f\u6570\u636e\u5b58\u653e\u7684\u5730\u65b9\u5b58\u5230\u4e86\u4e00\u4e2a\u8282\u70b9\u7684data\u91cc\u9762\u4e86\n        // \u6b65\u9aa4\uff0c\u5148\u5b9a\u4e49\u4e00\u4e2a\u8282\u70b9\u7c7b, \u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u8fd4\u56de\u503c\uff0c\u5b9a\u4e49\u5728\u6b64\u65b9\u6cd5\u7684\u5916\u8fb9\uff0c\u4f5c\u4e3a\u8be5\u7c7b\u7684\u5185\u90e8\u7c7b\u4f7f\u7528\n        // \u7136\u540e\u8ba1\u7b97\u884c\u7684\u603b\u6570\uff0c\u5217\u7684\u603b\u6570\uff0c\u6709\u6548\u503c\u7684\u603b\u6570\uff0c\u628a\u6c47\u603b\u4fe1\u606f\u653e\u5230\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u7136\u540e\u4ece\u4e8c\u4e2a\u8282\u70b9\u5f00\u59cb\u624d\u662f\u8bb0\u5f55\u503c\u7684\u884c\u7d22\u5f15\uff0c\u503c\u7684\u5217\u7d22\u5f15\uff0c\u503c\u81ea\u8eab\n        // \u5b9a\u4e49\u597d\u5185\u90e8\u7c7b\u540e\n        // \u8ba1\u7b97\u884c\u603b\u6570\uff0c\u5217\u603b\u6570\uff0c\u6709\u6548\u503c\u603b\u6570\uff0c\u53ef\u4ee5\u53c2\u8003\u6570\u7ec4\u538b\u7f29\u7684\u90e8\u5206\u6ce8\u91ca\u4ee3\u7801\n        int rowLen = this.originArray.length;\n        int colLen = 0;\n        if (rowLen > 0) {\n            colLen = this.originArray[0].length;\n        }\n        int sum = 0;\n        for (int[] row : this.originArray) {\n            for (int v : row) {\n                sum++;\n            }\n        }\n\n        // \u521d\u59cb\u5316\u4e00\u4e2a\u94fe\u8868\u5934\n        SparseNode headNode = new SparseNode(0, 0, 0);\n\n        // \u8bbe\u7f6e\u7b2c\u4e00\u9879\u4e3a\u884c\u603b\u6570\uff0c\u5217\u603b\u6570\uff0c\u6709\u6548\u503c\u603b\u6570\n        headNode.next = new SparseNode(rowLen, colLen, sum);\n\n        // \u5faa\u73af\u539f\u59cb\u6570\u7ec4\uff0c\u5982\u679c\u9047\u5230\u6709\u6548\u503c\u540e\uff0c\u8ffd\u52a0\u94fe\u8868\n        // \u4e3a\u4e86\u65b9\u4fbf\u627e\u5230\u6bcf\u4e00\u4e2a\u7d22\u5f15\uff0c\u8fd9\u91cc\u628a\u7b2c\u4e00\u9879\u7684\u8282\u70b9\u7684\u5730\u5740\u4fdd\u5b58\u4e0b\u6765\n        SparseNode tmp = headNode.next;\n        for (int i = 0; i < rowLen; i++) {\n            for (int j = 0; j < colLen; j++) {\n                if (this.originArray[i][j] != 0) {\n                    tmp.next = new SparseNode(i, j, this.originArray[i][j]);\n                    // \u79fb\u52a8\u6e38\u6807\u5230\u4e0b\u4e00\u4e2a\u94fe\u8868\u8282\u70b9\u5730\u5740\u4e0a\n                    tmp = tmp.next;\n                }\n            }\n        }\n        return headNode;\n    }\n\n\n    /**\n     * @param headNode {SparseNode} \u94fe\u8868\u5934\u5730\u5740\n     * @return int[][]\n     * @name 3.1 \u628a\u4f7f\u7528\u94fe\u8868\u65b9\u5f0f\u538b\u7f29\u7684\u94fe\u8868\u8fd8\u539f\u4e3a\u539f\u59cb\u6570\u7ec4\n     */\n    public int[][] useLinkedUnCompressed(SparseNode headNode) {\n        // \u4e0e\u6570\u7ec4\u7c7b\u4f3c\uff0c\u9996\u5148\u8981\u62ff\u5230\u62ff\u5230\u7b2c\u4e00\u4e2a\u8282\u70b9\u91cc\u9762\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5305\u62ec\u884c\u603b\u6570\uff0c\u5217\u603b\u6570\uff0c\u6709\u6548\u503c\u603b\u6570\n        if (headNode.next == null) {\n            throw new RuntimeException("\u94fe\u8868\u4e3a\u7a7a");\n        }\n        // \u901a\u8fc7\u7b2c\u4e00\u9879\u62ff\u5230\u7d22\u5f15\n        SparseNode tmp = headNode.next;\n        int rowLen = tmp.row;\n        int colLen = tmp.col;\n        int sum = tmp.value;\n\n        int[][] result = new int[rowLen][colLen];\n\n        // \u901a\u8fc7\u94fe\u8868\u7684\u5faa\u73af\u8bed\u53e5\u5f97\u5230\u6bcf\u4e00\u9879\n        while (true) {\n            if (tmp.next == null) {\n                break;\n            }\n            result[tmp.row][tmp.col] = tmp.value;\n            tmp = tmp.next;\n        }\n        return result;\n    }\n\n}\n')))}m.isMDXComponent=!0}}]);