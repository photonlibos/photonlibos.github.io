"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[2376],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,m=d["".concat(u,".").concat(p)]||d[p]||g[p]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(8168),r=a(6540),l=a(53),i=a(3104),o=a(6347),u=a(7485),s=a(1682),c=a(9466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=g(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),y=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var y=a(2303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function O(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),g=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(d(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:g},i,{className:(0,l.A)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=b(e);return r.createElement("div",{className:(0,l.A)("tabs-container",N.tabList)},r.createElement(O,(0,n.A)({},e,t)),r.createElement(h,(0,n.A)({},e,t)))}function v(e){const t=(0,y.A)();return r.createElement(f,(0,n.A)({key:String(t)},e))}},1e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(8168),r=(a(6540),a(5680)),l=a(1470),i=a(9365);const o={sidebar_position:3,toc_max_heading_level:4},u="\u7f16\u8bd1",s={unversionedId:"introduction/how-to-build",id:"introduction/how-to-build",title:"\u7f16\u8bd1",description:"\u83b7\u53d6\u6e90\u7801",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/introduction/how-to-build.md",sourceDirName:"introduction",slug:"/introduction/how-to-build",permalink:"/cn/docs/introduction/how-to-build",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/introduction/how-to-build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_max_heading_level:4},sidebar:"docSidebar",previous:{title:"\u67b6\u6784",permalink:"/cn/docs/introduction/photon-architecture"},next:{title:"\u96c6\u6210",permalink:"/cn/docs/introduction/how-to-integrate"}},c={},d=[{value:"\u83b7\u53d6\u6e90\u7801",id:"\u83b7\u53d6\u6e90\u7801",level:3},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u7f16\u8bd1\u57fa\u7840\u5e93",id:"\u7f16\u8bd1\u57fa\u7840\u5e93",level:3},{value:"\u7f16\u8bd1\u6837\u4f8b\u4e0e\u6d4b\u8bd5\u7a0b\u5e8f",id:"\u7f16\u8bd1\u6837\u4f8b\u4e0e\u6d4b\u8bd5\u7a0b\u5e8f",level:3},{value:"\u9ad8\u7ea7\u7f16\u8bd1\u9009\u9879",id:"\u9ad8\u7ea7\u7f16\u8bd1\u9009\u9879",level:3},{value:"\u4f8b\u5b501",id:"\u4f8b\u5b501",level:4},{value:"\u4f8b\u5b502",id:"\u4f8b\u5b502",level:4}],g={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,r.yg)("h3",{id:"\u83b7\u53d6\u6e90\u7801"},"\u83b7\u53d6\u6e90\u7801"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/alibaba/PhotonLibOS.git\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u7684\u7f51\u7edc\u65e0\u6cd5\u8bbf\u95eegithub\uff0c\u53ef\u4ee5\u4f7f\u7528\u56fd\u5185\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://gitee.com/mirrors/photonlibos.git"},"\u955c\u50cf\u4ed3\u5e93"),".")),(0,r.yg)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.yg)(l.A,{groupId:"os",queryString:!0,mdxType:"Tabs"},(0,r.yg)(i.A,{value:"CentOS",label:"CentOS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"dnf install git gcc-c++ cmake\ndnf install openssl-devel libcurl-devel libaio-devel zlib-devel\n"))),(0,r.yg)(i.A,{value:"Ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"apt install git cmake\napt install libssl-dev libcurl4-openssl-dev libaio-dev zlib1g-dev\n"))),(0,r.yg)(i.A,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"brew install cmake openssl pkg-config\n")))),(0,r.yg)("h3",{id:"\u7f16\u8bd1\u57fa\u7840\u5e93"},"\u7f16\u8bd1\u57fa\u7840\u5e93"),(0,r.yg)(l.A,{groupId:"os",queryString:!0,mdxType:"Tabs"},(0,r.yg)(i.A,{value:"CentOS",label:"CentOS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd PhotonLibOS\ncmake -B build\ncmake --build build -j 8\n"))),(0,r.yg)(i.A,{value:"Ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd PhotonLibOS\ncmake -B build\ncmake --build build -j 8\n"))),(0,r.yg)(i.A,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd PhotonLibOS\ncmake -B build -D OPENSSL_ROOT_DIR=/usr/local/opt/openssl@1.1\ncmake --build build -j 8\n")))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u6240\u6709\u7684\u5e93\u548c\u53ef\u6267\u884c\u7a0b\u5e8f\u5c06\u88ab\u653e\u7f6e\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"build/output"),".")),(0,r.yg)("h3",{id:"\u7f16\u8bd1\u6837\u4f8b\u4e0e\u6d4b\u8bd5\u7a0b\u5e8f"},"\u7f16\u8bd1\u6837\u4f8b\u4e0e\u6d4b\u8bd5\u7a0b\u5e8f"),(0,r.yg)("p",null,"\u6837\u4f8b\u548c\u6d4b\u8bd5\u7a0b\u5e8f\u662f\u4e00\u8d77\u6784\u5efa\u7684"),(0,r.yg)(l.A,{groupId:"os",queryString:!0,mdxType:"Tabs"},(0,r.yg)(i.A,{value:"CentOS",label:"CentOS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Install additional dependencies\ndnf install epel-release\ndnf config-manager --set-enabled powertools\ndnf install gtest-devel gmock-devel gflags-devel fuse-devel libgsasl-devel nasm\n\n# Build examples and test code\ncmake -B build -D PHOTON_BUILD_TESTING=ON\ncmake --build build -j 8\n\n# Run all test cases\ncd build\nctest\n"))),(0,r.yg)(i.A,{value:"Ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Install additional dependencies\napt install libgtest-dev libgmock-dev libgflags-dev libfuse-dev libgsasl7-dev nasm\n\n# Build examples and test code\ncmake -B build -D PHOTON_BUILD_TESTING=ON\ncmake --build build -j 8\n\n# Run all test cases\ncd build\nctest\n"))),(0,r.yg)(i.A,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Install additional dependencies\nbrew install gflags googletest gsasl nasm\n\n# Build examples and test code\ncmake -B build -D OPENSSL_ROOT_DIR=/usr/local/opt/openssl@1.1 -D PHOTON_BUILD_TESTING=ON\ncmake --build build -j 8\n\n# Run all test cases\ncd build\nctest\n")))),(0,r.yg)("h3",{id:"\u9ad8\u7ea7\u7f16\u8bd1\u9009\u9879"},"\u9ad8\u7ea7\u7f16\u8bd1\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Option"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"CMAKE_BUILD_TYPE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Release"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Build\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f ",(0,r.yg)("inlineCode",{parentName:"td"},"Debug"),"/",(0,r.yg)("inlineCode",{parentName:"td"},"Release"),"/",(0,r.yg)("inlineCode",{parentName:"td"},"RelWithDebInfo"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_BUILD_TESTING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u7f16\u8bd1\u6837\u4f8b\u548c\u6d4b\u8bd5\u7a0b\u5e8f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_BUILD_DEPENDENCIES"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e0d\u67e5\u627e\u672c\u5730\u5e93\u4f5c\u4e3a\u4f9d\u8d56\uff0c\u800c\u662f\u6e90\u7801\u7f16\u8bd1\u7b2c\u4e09\u65b9\u4f9d\u8d56")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_CXX_STANDARD"),(0,r.yg)("td",{parentName:"tr",align:"center"},"14"),(0,r.yg)("td",{parentName:"tr",align:"center"},"C++\u6807\u51c6\uff0c\u5f71\u54cd",(0,r.yg)("inlineCode",{parentName:"td"},"-std=c++xx"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_ENABLE_URING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5f00\u542f io_uring\uff0c\u9700\u8981",(0,r.yg)("inlineCode",{parentName:"td"},"liburing"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_ENABLE_FUSE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5f00\u542f fuse. \u9700\u8981 ",(0,r.yg)("inlineCode",{parentName:"td"},"libfuse"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_ENABLE_SASL"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5f00\u542f SASL. \u9700\u8981 ",(0,r.yg)("inlineCode",{parentName:"td"},"libgsasl"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_ENABLE_FSTACK_DPDK"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5f00\u542f F-Stack and DPDK\uff0c\u9700\u8981\u4e24\u8005\u7684\u5e93")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_ENABLE_EXTFS"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5f00\u542f extfs. \u9700\u8981 ",(0,r.yg)("inlineCode",{parentName:"td"},"libe2fs"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"PHOTON_ENABLE_ECOSYSTEM"),(0,r.yg)("td",{parentName:"tr",align:"center"},"OFF"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u7f16\u8bd1Photon\u751f\u6001\u5e93\uff0c\u5305\u542b\u4e00\u4e9b\u4e09\u65b9\u5de5\u5177\u548c\u5c01\u88c5")))),(0,r.yg)("h4",{id:"\u4f8b\u5b501"},"\u4f8b\u5b501"),(0,r.yg)("p",null,"\u7528\u6e90\u7801\u7f16\u8bd1\u6240\u6709\u4f9d\u8d56\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u968f\u610f\u5206\u53d1Photon\u4e8c\u8fdb\u5236\u4e86\uff0c\u53ea\u8981\u8fd0\u884c\u673a\u5668\u4e0a\u7684libc\u548clibc++\u7684\u7248\u672c\u6ee1\u8db3\u6761\u4ef6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cmake -B build -D CMAKE_BUILD_TYPE=RelWithDebInfo \\\n-D PHOTON_BUILD_TESTING=ON \\\n-D PHOTON_BUILD_DEPENDENCIES=ON \\\n-D PHOTON_ENABLE_URING=ON \\\n-D PHOTON_AIO_SOURCE=https://pagure.io/libaio/archive/libaio-0.3.113/libaio-0.3.113.tar.gz \\\n-D PHOTON_ZLIB_SOURCE=https://github.com/madler/zlib/releases/download/v1.2.13/zlib-1.2.13.tar.gz \\\n-D PHOTON_URING_SOURCE=https://github.com/axboe/liburing/archive/refs/tags/liburing-2.3.tar.gz \\\n-D PHOTON_CURL_SOURCE=https://github.com/curl/curl/archive/refs/tags/curl-7_42_1.tar.gz \\\n-D PHOTON_OPENSSL_SOURCE=https://github.com/openssl/openssl/archive/refs/heads/OpenSSL_1_0_2-stable.tar.gz \\\n-D PHOTON_GFLAGS_SOURCE=https://github.com/gflags/gflags/archive/refs/tags/v2.2.2.tar.gz \\\n-D PHOTON_GOOGLETEST_SOURCE=https://github.com/google/googletest/archive/refs/tags/release-1.12.1.tar.gz\n")),(0,r.yg)("h4",{id:"\u4f8b\u5b502"},"\u4f8b\u5b502"),(0,r.yg)("p",null,"\u52a8\u6001\u4f9d\u8d56 libcurl.so \u548c libssl.so\uff0clibaio \u6e90\u7801\u7f16\u8bd1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'cmake -B build -D CMAKE_BUILD_TYPE=RelWithDebInfo \\\n-D PHOTON_BUILD_DEPENDENCIES=ON \\\n-D PHOTON_AIO_SOURCE=https://pagure.io/libaio/archive/libaio-0.3.113/libaio-0.3.113.tar.gz \\\n-D PHOTON_CURL_SOURCE="" \\\n-D PHOTON_OPENSSL_SOURCE=""\n')))}m.isMDXComponent=!0}}]);