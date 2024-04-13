"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[2447],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6050:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,toc_max_heading_level:4},i="\u7b80\u4ecb",l={unversionedId:"introduction/what-is-photon",id:"introduction/what-is-photon",title:"\u7b80\u4ecb",description:"Photon\u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u7684LibOS\u6846\u67b6\uff0c\u7531\u4e00\u7cfb\u5217\u7cbe\u5fc3\u6253\u9020\u7684\u6a21\u5757\u7ec4\u6210\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/introduction/what-is-photon.md",sourceDirName:"introduction",slug:"/introduction/what-is-photon",permalink:"/cn/docs/introduction/what-is-photon",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/introduction/what-is-photon.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:4},sidebar:"docSidebar",previous:{title:"Introduction",permalink:"/cn/docs/category/introduction"},next:{title:"\u67b6\u6784",permalink:"/cn/docs/introduction/photon-architecture"}},c={},p=[{value:"\u534f\u7a0b\u8fd0\u884c\u65f6",id:"\u534f\u7a0b\u8fd0\u884c\u65f6",level:3},{value:"\u6838\u5fc3\u7279\u6027",id:"\u6838\u5fc3\u7279\u6027",level:3},{value:"\u7528\u6237",id:"\u7528\u6237",level:3},{value:"\u666f\u613f",id:"\u666f\u613f",level:3},{value:"\u5386\u53f2",id:"\u5386\u53f2",level:3}],u={toc:p},s="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Photon"),"\u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u7684LibOS\u6846\u67b6\uff0c\u7531\u4e00\u7cfb\u5217\u7cbe\u5fc3\u6253\u9020\u7684\u6a21\u5757\u7ec4\u6210\u3002\n\u867d\u7136\u4e0estd::thread\u7684\u884c\u4e3a\u6709\u522b\uff0c\u4f46\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"photon::thread"),"\u975e\u5e38\u8f7b\u91cf\u800c\u4e14\u5feb\u5982\n\u95ea\u7535---\u5b83\u53ef\u80fd\u662f\u4e16\u754c\u4e0a\u6700\u5feb\u7684\u534f\u7a0b\u5e93\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u76f8\u4fe1\u6ca1\u6709\u4ec0\u4e48\u6bd4\u5149\u5b50\uff08photon\uff09\u66f4\u52a0\u8f7b\u5feb\u3002"),(0,o.kt)("h3",{id:"\u534f\u7a0b\u8fd0\u884c\u65f6"},"\u534f\u7a0b\u8fd0\u884c\u65f6"),(0,o.kt)("p",null,"Photon\u7684\u8fd0\u884c\u65f6\uff08runtime\uff09\u57fa\u4e8e\u534f\u7a0b\u5b9e\u73b0\u3002\u6839\u636e\u6211\u4eec\u7684\u8bc4\u4f30\uff0c\u622a\u6b622022\u5e74\u5b83\u5728\u5f00\u6e90\u5c4a\u6709\u7740",(0,o.kt)("a",{parentName:"p",href:"../performance/network-performance#2-ping-pong"},(0,o.kt)("strong",{parentName:"a"},"\u6700\u4f73")),"\u7684\u6027\u80fd\u8868\u73b0\uff0c\u8fd9\u4e2a\u6d4b\u8bd5\u540c\u65f6\u6a2a\u8de8\u4e86\u591a\u4e2a\u8bed\u8a00\u548c\u6846\u67b6\u3002"),(0,o.kt)("h3",{id:"\u6838\u5fc3\u7279\u6027"},"\u6838\u5fc3\u7279\u6027"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6709\u6808\u534f\u7a0b\uff0c\u5bf9\u79f0\u5f0f\u8c03\u5ea6\u5668"),(0,o.kt)("li",{parentName:"ul"},"\u975e\u963b\u585e IO \u5f15\u64ce\uff0c\u5f02\u6b65\u4e8b\u4ef6\u5f15\u64ce\uff0c\u652f\u6301 epoll / kqueue / ",(0,o.kt)("strong",{parentName:"li"},"io_uring"),"."),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5e73\u53f0\u548c\u67b6\u6784\uff0c\u5982 x86 / ARM, Linux / macOS."),(0,o.kt)("li",{parentName:"ul"},"\u5927\u91cf\u9ad8\u6548\u7684\u6c47\u7f16\u8bed\u8a00\uff0c\u5728\u5173\u952e\u8def\u5f84\u4e0a\u51cf\u5c11\u5f00\u9500"),(0,o.kt)("li",{parentName:"ul"},"API \u5b8c\u5168\u517c\u5bb9 C++ std \u548c POSIX \u6807\u51c6\uff0c\u5bb9\u6613\u79fb\u690d\u5230\u65e7\u4ee3\u7801")),(0,o.kt)("h3",{id:"\u7528\u6237"},"\u7528\u6237"),(0,o.kt)("p",null,"\u4e00\u4e9b\u5f00\u6e90\u9879\u76ee\u5728\u4f7f\u7528Photon\uff0c\u4f8b\u5982"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/overlaybd"},"containerd/overlaybd")," DADI \u955c\u50cf\u52a0\u901f\u65b9\u6848\u7684\u5b58\u50a8\u540e\u7aef\uff0ccontainerd \u5b50\u9879\u76ee"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/data-accelerator/photon-libtcmu"},"data-accelerator/photon-libtcmu")," \u4e00\u4e2a\u57fa\u4e8e TCMU \u5b9e\u73b0\u7684 iSCSI target"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vlang.io/"},"V\u8bed\u8a00")," \u6b63\u5728\u5b9e\u9a8c\u6027\u5730\u5c1d\u8bd5\u4f7f\u7528Photon\u4f5c\u4e3a\u534f\u7a0b\u8fd0\u884c\u65f6 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vlang/v/blob/master/vlib/coroutines/coroutines.c.v"},"link"))),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u8fd8\u6709\u66f4\u591a\u7684\u95ed\u6e90\u7528\u6237\u5728\u901a\u8fc7Apache 2.0\u5f00\u6e90\u534f\u8bae\u4f7f\u7528Photon\u3002\u6b22\u8fce\u8865\u5145\u8fd9\u4e2a\u540d\u5355\uff0c\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\uff0c\u6216\u8005\u4ec5\u4ec5\u662f\u4ece\u6211\u4eec\u7684\u8bbe\u8ba1\u4e2d\u5f97\u5230\u4e86\u4e00\u4e9b\u542f\u53d1 :-)"),(0,o.kt)("h3",{id:"\u666f\u613f"},"\u666f\u613f"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u634d\u536b\u540c\u6b65\u7a0b\u5e8f\u8bbe\u8ba1\u8303\u5f0f\u81ea\u53e4\u4ee5\u6765\u7684\u6b63\u4e49\u57fa\u7840\uff0c\u5373\u4fbf\u6211\u4eec\u9762\u4e34\u73b0\u4ee3\u7684\u9ad8\u5e76\u53d1\u9700\u6c42\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u6539\u53d8\u9ad8\u6027\u80fd\u670d\u52a1\u7684\u4e16\u754c\uff0c\u963b\u6b62\u201ccallback hell\u201d\u4e8b\u6001\u4e0d\u65ad\u7684\u6076\u5316\uff0c\u5728\u751f\u4ea7\n\u73af\u5883\u5f53\u4e2d\u4fdd\u62a4\u73cd\u8d35\u7684\u5b81\u9759\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u6bcf\u5929\u90fd\u80fd\u65e9\u65e9\u4f11\u606f\uff0c\u4e00\u89c9\u5230\u5929\u4eae\uff0c\u4e0d\u88ab\u76d1\u63a7\u544a\u8b66\u6253\u6270\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4e5f\u5e0c\u671b\u4e0e\u5fd7\u540c\u9053\u5408\u7684\u4f60\u4e3a\u4f0d\uff0c\u5171\u540c\u6253\u9020\u66f4\u597d\u7684\u660e\u5929\u3002"),(0,o.kt)("h3",{id:"\u5386\u53f2"},"\u5386\u53f2"),(0,o.kt)("p",null,"Photon\u6700\u521d\u4e8e2018\u5e74\u8bde\u751f\u4e8e\u963f\u91cc\u4e91\u5b58\u50a8\u7684DADI\u56e2\u961f\uff0c\u5b83\u662f\u4e00\u4e2a\u751f\u4ea7\u53ef\u7528\u7684\u5e93\uff0c\u5e76\u4e14\u5df2\u7ecf\u88ab\u90e8\u7f72\u5230\u6570\u4ee5\u5341\u4e07\u8ba1\u7684\u673a\u5668\u4e0a\u4f5c\u4e3a\u4e91\u4e0a\u7684\u57fa\u7840\u8bbe\u65bd\u3002\n",(0,o.kt)("strong",{parentName:"p"},"\u6211\u4eec\u613f\u610f\u627f\u8bfa\uff0c\u53ea\u8981\u8fd9\u4e9b\u8f6f\u4ef6\u8fd8\u5728\u6f14\u8fdb\uff0cPhoton\u5c31\u4f1a\u5f97\u5230\u6301\u7eed\u7684\u7ef4\u62a4\u4e0e\u66f4\u65b0\u3002")))}d.isMDXComponent=!0}}]);