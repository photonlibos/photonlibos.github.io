"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[3099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:7,toc_max_heading_level:4},o="std-compatible API",l={unversionedId:"api/std-compatible-api",id:"api/std-compatible-api",title:"std-compatible API",description:"We provide a set of Photon API that are fully compatible to C++ std.",source:"@site/docs/api/std-compatible-api.md",sourceDirName:"api",slug:"/api/std-compatible-api",permalink:"/docs/api/std-compatible-api",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/api/std-compatible-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,toc_max_heading_level:4},sidebar:"docSidebar",previous:{title:"Network",permalink:"/docs/api/network"},next:{title:"Performance",permalink:"/docs/category/performance"}},p={},d=[{value:"Namespace",id:"namespace",level:3},{value:"Headers",id:"headers",level:3},{value:"Supported Classes",id:"supported-classes",level:3},{value:"Supported Functions",id:"supported-functions",level:3},{value:"Extended Functions",id:"extended-functions",level:3},{value:"Example Code",id:"example-code",level:3}],c={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"std-compatible-api"},"std-compatible API"),(0,a.kt)("p",null,"We provide a set of Photon API that are fully compatible to C++ std."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/thread"},"https://en.cppreference.com/w/cpp/thread")," for the official documents."),(0,a.kt)("h3",{id:"namespace"},"Namespace"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"photon_std::")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"std::")),(0,a.kt)("h3",{id:"headers"},"Headers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<photon/thread/std-compat.h>")),(0,a.kt)("h3",{id:"supported-classes"},"Supported Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thread")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mutex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"condition_variable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recursive_mutex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timed_mutex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lock_guard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unique_lock"))),(0,a.kt)("h3",{id:"supported-functions"},"Supported Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this_thread::yield()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this_thread::get_id()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this_thread::sleep_for()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this_thread::sleep_until()"))),(0,a.kt)("h3",{id:"extended-functions"},"Extended Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"work_pool_init")," Create a global ",(0,a.kt)("a",{parentName:"li",href:"vcpu-and-multicore#2-use-workpool"},"WorkPool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"work_pool_fini")," Destroy the WorkPool"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"this_thread::migrate()")," Migrate current thread to another vCPU in the WorkPool")),(0,a.kt)("h3",{id:"example-code"},"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    photon::init(event_engine, io_engine);\n    DEFER(photon::fini());\n\n    photon_std::work_pool_init(8, event_engine, io_engine);\n    DEFER(photon_std::work_pool_fini());\n}\n")))}u.isMDXComponent=!0}}]);