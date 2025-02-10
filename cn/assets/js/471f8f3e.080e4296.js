"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[9407],{5680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=d(a),h=r,m=g["".concat(o,".").concat(h)]||g[h]||y[h]||l;return a?t.createElement(m,i(i({ref:n},u),{},{components:a})):t.createElement(m,i({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[g]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9531:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var t=a(8168),r=(a(6540),a(5680));const l={sidebar_position:2,toc_max_heading_level:3},i="\u534f\u7a0bthread",p={unversionedId:"api/thread",id:"api/thread",title:"\u534f\u7a0bthread",description:"\u6982\u5ff5",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/api/thread.md",sourceDirName:"api",slug:"/api/thread",permalink:"/cn/docs/api/thread",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/api/thread.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:3},sidebar:"docSidebar",previous:{title:"\u534f\u7a0b\u73af\u5883",permalink:"/cn/docs/api/env"},next:{title:"vCPU\u548c\u591a\u6838",permalink:"/cn/docs/api/vcpu-and-multicore"}},o={},d=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u5934\u6587\u4ef6",id:"\u5934\u6587\u4ef6",level:3},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:3},{value:"API",id:"api",level:2},{value:"thread_create",id:"thread_create",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"Return",id:"return",level:4},{value:"thread_create11",id:"thread_create11",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-1",level:4},{value:"\u5934\u6587\u4ef6",id:"\u5934\u6587\u4ef6-1",level:4},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:4},{value:"Return",id:"return-1",level:4},{value:"thread_enable_join",id:"thread_enable_join",level:3},{value:"Description",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Return",id:"return-2",level:4},{value:"thread_join",id:"thread_join",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-2",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"thread_yield",id:"thread_yield",level:3},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Return",id:"return-3",level:4},{value:"thread_usleep",id:"thread_usleep",level:3},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Return",id:"return-4",level:4},{value:"thread_interrupt",id:"thread_interrupt",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-3",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:4},{value:"thread_shutdown",id:"thread_shutdown",level:3},{value:"Description",id:"description-3",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Return",id:"return-5",level:4},{value:"thread_migrate",id:"thread_migrate",level:3},{value:"Description",id:"description-4",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Return",id:"return-6",level:4},{value:"get_vcpu",id:"get_vcpu",level:3},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Return",id:"return-7",level:4},{value:"\u534f\u7a0b\u6c60",id:"\u534f\u7a0b\u6c60",level:2},{value:"Additional Header",id:"additional-header",level:4},{value:"Description",id:"description-6",level:4},{value:"\u8ba1\u65f6\u5668",id:"\u8ba1\u65f6\u5668",level:2},{value:"Additional Header",id:"additional-header-1",level:4},{value:"Description",id:"description-7",level:4}],u={toc:d},g="wrapper";function y(e){let{components:n,...l}=e;return(0,r.yg)(g,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u534f\u7a0bthread"},"\u534f\u7a0bthread"),(0,r.yg)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Photon thread \u5373\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u534f\u7a0b\uff08coroutine/fiber\uff09\u3002\u4e4b\u6240\u4ee5\u4f7f\u7528 thread \u547d\u540d\u800c\u4e0d\u4f7f\u7528\u540e\u4e24\u8005\uff0c\u662f\u56e0\u4e3a\u6211\u4eec\u5e0c\u671b\u7528\u6237\u5bdf\u89c9\u4e0d\u5230Photon\u7a0b\u5e8f\u8ddf\u4f20\u7edf\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u7684\u5dee\u5f02\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"thread \u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e00\u4e2a\u6267\u884c\u5355\u5143\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"thread \u5fc5\u987b\u5b58\u5728\u4e8e ",(0,r.yg)("a",{parentName:"p",href:"vcpu-and-multicore"},"vCPU")," \u91cc\u3002thread \u53ef\u4ee5\u5728 vCPU \u4e4b\u95f4\u8fc1\u79fb\u3002"))),(0,r.yg)("div",null,(0,r.yg)("center",null,(0,r.yg)("img",{src:"/img/api/thread-vcpu.png",alt:"thread-vcpu.png",width:"500"}))),(0,r.yg)("h3",{id:"\u547d\u540d\u7a7a\u95f4"},"\u547d\u540d\u7a7a\u95f4"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"photon::")),(0,r.yg)("h3",{id:"\u5934\u6587\u4ef6"},"\u5934\u6587\u4ef6"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<photon/thread/thread.h>")),(0,r.yg)("h3",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"photon::thread")," \u2192 Photon\u534f\u7a0b\u5b9e\u4f53"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"photon::join_handle")," \u2192 Join\u53e5\u67c4\uff0c\u7528\u4e8eJoin\u534f\u7a0b"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"photon::vcpu_base")," \u2192 vCPU\u5b9e\u4f53\u7684\u57fa\u7c7b\u3002\u76ee\u524d\u4e0d\u80fd\u4fee\u6539 vCPU\uff0c\u8fd9\u662f\u4e0d\u53ef\u53d8\u503c\u3002"),(0,r.yg)("h2",{id:"api"},"API"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_create"},"thread_create"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"photon::thread* photon::thread_create(thread_entry start, void* arg,\n                                      uint64_t stack_size = DEFAULT_STACK_SIZE,\n                                      uint16_t reserved_space = 0);\n")),(0,r.yg)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u521b\u5efa\u4e00\u4e2a\u534f\u7a0b\uff0c\u628a\u5b83\u653e\u8fdb ",(0,r.yg)("inlineCode",{parentName:"p"},"RunQueue"),"\u3002\u7531\u8c03\u5ea6\u5668\u51b3\u5b9a\u4f55\u65f6\u5f00\u59cb\u6267\u884c\u8fd9\u4e2a\u534f\u7a0b\u51fd\u6570\u3002"),(0,r.yg)("p",null,"\u8be5API\u8c03\u7528\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u53d1\u751f\u534f\u7a0b\u5207\u6362\uff0c\u8fd9\u610f\u5473\u7740\u8c03\u7528\u65b9\u4f1a\u7ee7\u7eed\u4e0b\u4e00\u6761\u8bed\u53e5\u7684\u6267\u884c\u3002"),(0,r.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"start")," \u534f\u7a0b\u51fd\u6570\u5165\u53e3"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"thread_entry")," \u7684\u7c7b\u578b\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"void* (*)(void*)")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"arg")," \u534f\u7a0b\u51fd\u6570\u7684\u5355\u53c2\u6570\uff0c\u6307\u9488\u7c7b\u578b\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"stack_size")," \u534f\u7a0b\u6808\u5927\u5c0f\uff0c\u9ed8\u8ba48MB")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"reserved_space")," \u7528\u4e8e\u5411\u65b0\u7684\u534f\u7a0b\u6808\u4e0a\u62f7\u8d1d\u53c2\u6570\u3002\u9ed8\u8ba40"))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u8bf7\u786e\u4fdd\u4f60\u4f20\u5165\u7684\u53c2\u6570\u8ddf\u51fd\u6570\u6709\u7740\u76f8\u540c\u7684\u751f\u547d\u5468\u671f\uff0c\u800c\u4e0d\u662f\u5728\u51fd\u6570\u5f00\u59cb\u6267\u884c\u4e4b\u524d\u5c31\u6790\u6784\u4e86\u3002\u8fd9\u6837\u53ef\u80fd\u9020\u6210\u65e0\u6548\u7684\u5185\u5b58\u8bbf\u95ee\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u65e0\u6cd5\u4fdd\u8bc1\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u6587\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"thread_create11"),"\uff0c\u5b83\u80fd\u591f\u5c06\u6240\u6709\u7684\u53c2\u6570\u590d\u5236\u5230\u65b0\u7684\u534f\u7a0b\u7684\u51fd\u6570\u6808\u4e0a\u3002")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"stack_size\u662f\u6307\u534f\u7a0b\u6808\u7684\u5927\u5c0f\uff0c\u8fd9\u91cc\u91c7\u7528\u7684Linux\u9ed8\u8ba4\u7684\u51fd\u6570\u6808\u5927\u5c0f\uff0c8MB\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\u4e0d\u8981\u5bfc\u81f4\u6808\u6ea2\u51fa\uff0cLinux\u4f1a\u5728\u8fd0\u884c\u65f6\u62a5\u6808\u6ea2\u51fa\u9519\u8bef\uff0c\u4f46Photon\u7531\u4e8e\u662f\u5728\u7528\u6237\u6001\u6a21\u62df\u7684\u6808\uff0c\u56e0\u6b64\u4e0d\u4f1a\u7acb\u523b\u68c0\u6d4b\u5230\u6808\u6ea2\u51fa\u9519\u8bef\uff0c\u7ee7\u7eed\u8fd0\u884c\u4e0b\u53bb\u4f1a\u5bfc\u81f4\u5185\u5b58\u88ab\u8e29\u3002\n\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e0d\u5199\u9012\u5f52\u51fd\u6570\u5373\u662f\u5b89\u5168\u7684\u3002"),(0,r.yg)("p",{parentName:"admonition"},"\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5185\u6838\u63d0\u4f9b\u7684mprotect\u7b49\u529f\u80fd\u4fdd\u62a4\u8fd9\u4e2a\u5185\u5b58\u6bb5\uff0c\u4f46\u662f\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u56e0\u6b64\u8fd9\u91cc\u662f\u8ba9\u7528\u6237\u81ea\u5df1\u628a\u63e1\u3002")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u6bcf\u6b21\u521b\u5efa\u65b0\u7684\u534f\u7a0b\u90fd\u4f1a\u8c03\u7528malloc\u7533\u8bf7\u5185\u5b58\uff0c\u56e0\u6b64\u9891\u7e41\u521b\u5efa\u5efa\u8bae\u4f7f\u7528\u534f\u7a0b\u6c60 ",(0,r.yg)("inlineCode",{parentName:"p"},"thread-pool"),"\uff0c\u6216\u8005 ",(0,r.yg)("inlineCode",{parentName:"p"},"pooled_stack_allocator"),"\u3002\n\u5173\u4e8eOS\u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58\u91cf\uff0c\u5373RES\uff0c\u5e76\u4e0d\u662fmalloc\u5b8c\u4e4b\u540e\u7acb\u523b\u589e\u957f8MB\uff0c\u800c\u662f\u6839\u636e\u5b9e\u9645\u5199\u5165page\u7684\u6620\u5c04\u60c5\u51b5\u52a8\u6001\u589e\u957f\u3002"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    photon::init();\n    for (int i = 0; i < 2000; ++i) {\n        photon::thread_create11([]{\n            photon::thread_usleep(-1UL);\n        });\n    }\n    photon::thread_usleep(-1UL);\n}\n")),(0,r.yg)("p",{parentName:"admonition"},"\u5982\u4e0a\u6587\u4f8b\u5b50\uff0c\u521b\u5efa\u4e862000\u4e2a\u534f\u7a0b\u90fd\u5728sleep\u3002\u8fdb\u7a0b\u865a\u62df\u5185\u5b5816G\uff0c\u4f46\u7269\u7406\u5185\u5b58\u53ea\u670924M\u3002"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("img",{alt:"malloc",src:a(5268).A,width:"1200",height:"100"}))),(0,r.yg)("h4",{id:"return"},"Return"),(0,r.yg)("p",null,"\u65b0\u7684 thread \u7684\u6307\u9488"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_create11"},"thread_create11"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"template<typename F, typename... ARGUMENTS>\nphoton::thread* photon::thread_create11(F f, ARGUMENTS&& ...args);              // (1)\n\ntemplate<typename FUNCTOR, typename... ARGUMENTS>\nphoton::thread* photon::thread_create11(FUNCTOR&& f, ARGUMENTS&& ...args);      // (2)\n\ntemplate<typename CLASS, typename F, typename... ARGUMENTS>\nphoton::thread* photon::thread_create11(F f, CLASS* obj, ARGUMENTS&& ...args);  // (3)\n")),(0,r.yg)("h4",{id:"\u63cf\u8ff0-1"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u8fd9\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"thread_create")," \u5728C++11\u8bed\u6cd5\u4e0b\u7684\u5c01\u88c5\uff0c\u540c\u65f6\u652f\u6301\u4ee5\u62f7\u8d1d\u7684\u65b9\u5f0f\u4f20\u5165\u591a\u4e2a\u53c2\u6570\u3002"),(0,r.yg)("h4",{id:"\u5934\u6587\u4ef6-1"},"\u5934\u6587\u4ef6"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<photon/thread/thread11.h>")),(0,r.yg)("h4",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.yg)("p",null,"thread_create11 \u6709\u4e09\u79cd API\uff0c\u5bf9\u5e94\u4e0d\u540c\u573a\u666f\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"F \u662f\u4e00\u4e2a\u5168\u5c40\u51fd\u6570")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"double func(int a, char b);\n\nauto th = photon::thread_create11(func, 1, '2');\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"FUNCTOR \u662f\u4e00\u4e2a ",(0,r.yg)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/utility/functional"},"function object"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int a = 1; char b = '2';\n\nauto th = photon::thread_create11([&] {\n    // Access a and b\n});\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"CLASS \u662f\u4e00\u4e2a\u7c7b\u578b\uff0cF \u662f\u5b83\u7684\u6210\u5458\u51fd\u6570")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"class A {\n    void func(int a, char b);\n\n    void run() {\n        photon::thread_create11(&A::func, this, 1, '2');\n    }\n};\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u53c2\u6570\u4ee5\u503c\u4f20\u9012\u7684\u65b9\u5f0f\u4f20\u7ed9\u534f\u7a0b\u51fd\u6570\uff0c\u5982\u679c\u9700\u8981\u4f20\u5f15\u7528\uff0c\u8bf7\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"std::ref")," \u6216\u8005 ",(0,r.yg)("inlineCode",{parentName:"p"},"std::cref")," \u5904\u7406\u53d8\u91cf")),(0,r.yg)("h4",{id:"return-1"},"Return"),(0,r.yg)("p",null,"\u65b0\u7684 thread \u7684\u6307\u9488"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_enable_join"},"thread_enable_join"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"photon::join_handle* photon::thread_enable_join(photon::thread* th, bool flag = true);\n")),(0,r.yg)("h4",{id:"description"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u7684\u534f\u7a0b\u9ed8\u8ba4\u662f",(0,r.yg)("strong",{parentName:"li"},"\u4e0d\u7528"),"Join\u7684\uff0c\u9000\u51fa\u65f6\u81ea\u52a8\u91ca\u653e\u5185\u5b58"),(0,r.yg)("li",{parentName:"ul"},"\u4f46\u5982\u679c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_enable_join")," \u5f00\u542f\u4e86 join \u5374\u6700\u7ec8\u6ca1\u6709\u53bb\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_join"),"\uff0c\u5219\u4f1a\u4ea7\u751f\u8d44\u6e90\u6cc4\u9732\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5f97\u5230\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"join_handle")," \u6307\u9488\u662f ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_join")," \u7684\u53c2\u6570\u3002")),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"th")," Thread \u6307\u9488.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"flag")," Enable or disable. Defaults to true."))),(0,r.yg)("h4",{id:"return-2"},"Return"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"join_handle")," \u6307\u9488\u3002"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_join"},"thread_join"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"void photon::thread_join(photon::join_handle* jh);\n")),(0,r.yg)("h4",{id:"\u63cf\u8ff0-2"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u7b49\u5f85\u76ee\u6807\u534f\u7a0b\u7ed3\u675f\u3002"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u4f60\u4e0d\u80fd join \u4e00\u4e2a\u5df2\u7ecf\u9000\u51fa\u7684\u6216\u8005\u4e0d\u5b58\u5728\u7684 thread\uff0c\u8fd9\u5c06\u5bfc\u81f4 core dump\u3002")),(0,r.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jh"),"\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},"join_handle")," \u6307\u9488\uff0c\u4ece\u4e0a\u6587\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_enable_join")," \u83b7\u5f97\u3002")),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_yield"},"thread_yield"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"void photon::thread_yield();\n")),(0,r.yg)("h4",{id:"description-1"},"Description"),(0,r.yg)("p",null,"\u5207\u6362\u5230\u5176\u4ed6\u534f\u7a0b\u3002\u672c\u534f\u7a0b\u4e0d\u4f1a\u8fdb\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"SleepQueue"),"\uff0c\u800c\u662f\u4ecd\u7136\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"RunQueue")," \u4e0a\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u534f\u7a0b\u7684\u8c03\u5ea6\u6709\u5982\u4e0b\u7684\u7279\u70b9\uff1a\u9664\u975e\u4e3b\u52a8\u8ba9\u51faCPU\uff0c\u5426\u5219\u8be5\u534f\u7a0b\u51fd\u6570\u4f1a\u4e00\u76f4\u7ee7\u7eed\u6267\u884c"),(0,r.yg)("li",{parentName:"ul"},"\u534f\u7a0b\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_yield")," \u7531\u9ad8\u6027\u80fd\u6c47\u7f16\u5b9e\u73b0\uff0c\u5207\u6362\u5f00\u9500\u5728",(0,r.yg)("strong",{parentName:"li"},"10\u7eb3\u79d2"),"\u5de6\u53f3"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"thread_yield")," \u53ea\u662f\u82e5\u5e72\u79cd\u80fd\u591f\u8ba9\u51faCPU\u7684\u65b9\u6cd5\u4e2d\u7684\u5176\u4e2d\u4e00\u79cd\uff0c\u9664\u4e86\u5b83\u4ee5\u5916\uff0c\u8fd8\u6709\u4e0b\u6587\u5c06\u8981\u4ecb\u7ecd\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"thread_usleep"),"\uff0c\u4ee5\u53ca\u5404\u79cd\u534f\u7a0b\u9501\u548c\u540c\u6b65\u539f\u8bed\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"thread_yield")," \u53ea\u8d1f\u8d23\u4e2d\u65ad\u5f53\u524d\u51fd\u6570\u7684\u6267\u884c\uff0c\u5177\u4f53\u4e0b\u4e00\u4e2a\u534f\u7a0b\u662f\u54ea\u4e2a\u5b83\u5e76\u4e0d\u77e5\u9053\uff0c\u7531\u8c03\u5ea6\u5668\u51b3\u5b9a\u3002\u5728\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u8c03\u5ea6\u5668\u53ef\u80fd\u51b3\u5b9a\u53c8\u8fd4\u56de\u672c\u51fd\u6570\uff0c\u5219\u6cbf\u7740 ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_yield")," \u7684\u4e0b\u4e00\u6761\u8bed\u53e5\u7ee7\u7eed\u6267\u884c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u666e\u901a\u7528\u6237\u7528\u5230yield\u7684\u573a\u666f\u4e0d\u592a\u591a\uff0c\u5b83\u4e00\u822c\u51fa\u73b0\u5728\u9501\u548c\u540c\u6b65\u539f\u8bed\u7684\u5185\u90e8\uff0c\u6216\u8005\u4e00\u4e9b\u504f\u5e95\u5c42\u7684\u6a21\u5757\u5185\u3002\u5982\u679c\u6b63\u786e\u7684\u8bdd\uff0c\u7528\u6237\u53ef\u4ee5\u5047\u5b9a\u4ed6\u4eec\u4f7f\u7528\u7684\u6240\u6709IO\u51fd\u6570\u90fd\u662f\u975e\u963b\u585e\u7684\uff0c\u5373\u4f1a\u5728\u6070\u5f53\u7684\u65f6\u5019\u8fdb\u884c yield\u3002")),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h4",{id:"return-3"},"Return"),(0,r.yg)("p",null,"None"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_usleep"},"thread_usleep"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int photon::thread_usleep(uint64_t useconds);\n")),(0,r.yg)("h4",{id:"description-2"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6682\u505c\u5f53\u524d\u534f\u7a0b\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"CURRENT"),"\uff09\u7684\u6267\u884c\uff0c\u5c06\u5176\u63d2\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"SleepQueue")," \u961f\u5217\uff0c\u7761\u7720\u6307\u5b9a\u65f6\u95f4\uff08\u5fae\u79d2\uff09\u3002\u6700\u540e yield \u8ba9\u51fa CPU\u3002 ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"SleepQueue")," \u91cc\u7684\u534f\u7a0b\u4f1a\u5728\u5c06\u6765\u4f1a\u88ab\u5524\u9192\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9664\u4e86\u7528\u6237\u4e3b\u52a8\u8c03\u7528\u7761\u7720\uff0c\u6240\u6709\u7684\u6587\u4ef6IO\uff08psync\u9664\u5916\uff09\u3001\u7f51\u7edc\u6536\u53d1\u3001\u9501\u548c\u540c\u6b65\u539f\u8bed\u7684\u5e95\u5c42\u7b49\u5f85\u90fd\u662f\u901a\u8fc7\u8fd9\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"thread_usleep")," \u5b9e\u73b0\u7684\u3002"))),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"useconds")," \u7761\u7720\u65f6\u95f4\uff08\u5fae\u79d2\uff09\u3002-1UL \u8868\u793a\u6c38\u4e45\u7761\u7720")),(0,r.yg)("h4",{id:"return-4"},"Return"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8fd4\u56de 0 \u8868\u793a\u6210\u529f\uff0c\u5373\u81f3\u5c11\u5df2\u7761\u7720\u4e86 ",(0,r.yg)("inlineCode",{parentName:"li"},"useconds")," \u5fae\u79d2\u7684\u65f6\u95f4\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u8fd4\u56de -1 \u8868\u793a\u88ab\u63d0\u524d\u5524\u9192\u4e86\uff0c ",(0,r.yg)("inlineCode",{parentName:"li"},"errno")," \u662f\u7531\u8c03\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"thread_interrupt")," \u7684\u5524\u9192\u65b9\u8bbe\u5b9a\u7684\u3002")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_interrupt"},"thread_interrupt"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"void photon::thread_interrupt(photon::thread* th, int error_number = EINTR);\n")),(0,r.yg)("h4",{id:"\u63cf\u8ff0-3"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u6253\u65ad\u76ee\u6807\u534f\u7a0b\uff0c\u4ece\u7761\u7720\u4e2d\u5c06\u5176\u5524\u9192\u3002"),(0,r.yg)("p",null,"\u5728\u534f\u7a0b\u573a\u666f\u4e0b\uff0c\u5c06\u4efb\u52a1\u7684\u63d0\u4ea4\u3001\u6267\u884c\u3001\u6536\u5272\u5206\u4e3a\u524d\u53f0\u548c\u540e\u53f0\uff0c\u662f\u5e38\u89c1\u7684\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002\n\u4f8b\u5982\u6211\u4eec\u53ef\u4ee5\u5728\u524d\u53f0\u534f\u7a0b\u4e2d\u5c06\u4efb\u52a1\u63d0\u4ea4\u5230\u67d0\u4e2a\u961f\u5217\u540e\u7acb\u523b\u7761\u7720\uff0c\u540e\u53f0\u534f\u7a0b\u5728\u68c0\u67e5\u5230\u4efb\u52a1\u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u53bb\u5524\u9192\u524d\u53f0\u534f\u7a0b\u7ee7\u7eed\u6267\u884c\u3002"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u4f60\u4e0d\u80fd interrupt \u4e00\u4e2a\u5df2\u7ecf\u9000\u51fa\u7684\u6216\u8005\u4e0d\u5b58\u5728\u7684 thread\uff0c\u8fd9\u5c06\u5bfc\u81f4 core dump\u3002")),(0,r.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"th")," \u76ee\u6807 thread.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"error_number")," \u8bbe\u7f6e\u76ee\u6807 thread \u770b\u5230\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"errno"),". \u9ed8\u8ba4\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"EINTR"),"."))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h4",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.yg)("p",null,"\u8c03\u7528\u65b9\u548c\u76ee\u6807\u534f\u7a0b\u53ef\u80fd\u4e0d\u5728\u540c\u4e00\u4e2a vCPU \u4e0a\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"StandbyQueue")," \u5c31\u4f1a\u88ab\u4f7f\u7528\u5230\uff0c\u4f5c\u4e3a\u8de8\u7ebf\u7a0b\u4ea4\u4e92\u624b\u6bb5\u3002"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_shutdown"},"thread_shutdown"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int photon::thread_shutdown(photon::thread* th, bool flag = true);\n")),(0,r.yg)("h4",{id:"description-3"},"Description"),(0,r.yg)("p",null,"Set the shutdown flag to disable further scheduling of the target thread, then fire an interrupt."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"th")," Target thread.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"flag")," Set the shutdown flag or not."))),(0,r.yg)("h4",{id:"return-5"},"Return"),(0,r.yg)("p",null,"None."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"thread_migrate"},"thread_migrate"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int photon::thread_migrate(photon::thread* th, photon::vcpu_base* vcpu);\n")),(0,r.yg)("h4",{id:"description-4"},"Description"),(0,r.yg)("p",null,"\u628a\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"READY")," \u72b6\u6001\u7684 thread \u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a vCPU."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u867d\u7136\u662fM:1 \u6a21\u578b\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u5c06\u534f\u7a0b\u51fd\u6570\u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u53bb\u6267\u884c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4f18\u5148\u4f7f\u7528run-to-completion\u6a21\u578b\uff0c\u51cf\u5c11\u8de8\u7ebf\u7a0b\u4ea4\u4e92\u3002\u4e00\u65e6\u521b\u5efa\u540e\uff0c\u975e\u5fc5\u8981\u4e0d\u5c06\u534f\u7a0b\u8c03\u5ea6\u5230\u5176\u4ed6\u7ebf\u7a0b\uff0c\u9664\u975e\u9047\u5230\u672c\u7ebf\u7a0b\u7684CPU\u74f6\u9888\u3002")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"th")," Target thread.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"vcpu")," Target vCPU."))),(0,r.yg)("h4",{id:"return-6"},"Return"),(0,r.yg)("p",null,"Returns 0 on success, returns -1 on error."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"get_vcpu"},"get_vcpu"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"vcpu_base* get_vcpu(thread* th = CURRENT);\n")),(0,r.yg)("h4",{id:"description-5"},"Description"),(0,r.yg)("p",null,"Get the vCPU of the target thread."),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"th")," Target thread. Defaults to ",(0,r.yg)("inlineCode",{parentName:"li"},"CURRENT")," thread.")),(0,r.yg)("h4",{id:"return-7"},"Return"),(0,r.yg)("p",null,"Returns a pointer of ",(0,r.yg)("inlineCode",{parentName:"p"},"vcpu_base"),"."),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"\u534f\u7a0b\u6c60"},"\u534f\u7a0b\u6c60"),(0,r.yg)("h4",{id:"additional-header"},"Additional Header"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<photon/thread/thread-pool.h>")),(0,r.yg)("h4",{id:"description-6"},"Description"),(0,r.yg)("p",null,"The thread-pool's implementation is based on identity-pool.h. It supports both static allocation (on stack) and dynamic allocation (on heap)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// on heap\nauto p1 = photon::ThreadPoolBase::new_thread_pool(100);\nauto th1 = p1->thread_create(&func, nullptr);\n\n// on stack\nphoton::ThreadPool<400> p2;\nauto th2 = p2.thread_create(&func, nullptr);\n")),(0,r.yg)("h2",{id:"\u8ba1\u65f6\u5668"},"\u8ba1\u65f6\u5668"),(0,r.yg)("h4",{id:"additional-header-1"},"Additional Header"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<photon/thread/thread-pool.h>")),(0,r.yg)("h4",{id:"description-7"},"Description"),(0,r.yg)("p",null,"Create a timer object with ",(0,r.yg)("inlineCode",{parentName:"p"},"default_timedout")," in usec, callback function ",(0,r.yg)("inlineCode",{parentName:"p"},"on_timer"),",\nand callback argument ",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),". The timer object is implemented as a special thread, so\nit has a ",(0,r.yg)("inlineCode",{parentName:"p"},"stack_size"),", and the ",(0,r.yg)("inlineCode",{parentName:"p"},"on_timer")," is invoked within the thread's context.\nThe timer object is deleted automatically after it is finished.\t"),(0,r.yg)("p",null,"\u4e00\u4e2a non-repeating \u7684\u8ba1\u65f6\u5668\u57fa\u672c\u4e0a\u7b49\u4e8e\u521b\u5efa\u4e00\u4e2a\u65b0\u534f\u7a0b\uff0c\u5e76\u6267\u884c thread_sleep\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"Timer(uint64_t default_timeout, Entry on_timer, \n      bool repeating = true, uint64_t stack_size = 1024 * 64);\n\nint Timer::cancel();\nint Timer::reset(uint64_t new_timeout = -1);\nint Timer::stop();\n")))}y.isMDXComponent=!0},5268:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/malloc-d7a568d26c90ac933ca7cad37e47077d.png"}}]);