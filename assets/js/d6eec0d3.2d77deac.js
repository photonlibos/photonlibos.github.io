"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[3975],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),o=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=o(n),g=a,N=d["".concat(c,".").concat(g)]||d[g]||k[g]||i;return n?r.createElement(N,l(l({ref:e},m),{},{components:n})):r.createElement(N,l({ref:e},m))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[d]="string"==typeof t?t:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8963:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,toc_max_heading_level:4},l="Network Performance",p={unversionedId:"performance/network-performance",id:"performance/network-performance",title:"Network Performance",description:"TCP",source:"@site/docs/performance/network-performance.md",sourceDirName:"performance",slug:"/performance/network-performance",permalink:"/docs/performance/network-performance",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/performance/network-performance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:4},sidebar:"docSidebar",previous:{title:"File IO Performance",permalink:"/docs/performance/file-io-performance"},next:{title:"Miscellaneous",permalink:"/docs/category/miscellaneous"}},c={},o=[{value:"TCP",id:"tcp",level:2},{value:"Test program",id:"test-program",level:3},{value:"Build",id:"build",level:3},{value:"Run",id:"run",level:3},{value:"Server",id:"server",level:4},{value:"Streaming client",id:"streaming-client",level:4},{value:"Ping-pong client",id:"ping-pong-client",level:4},{value:"Measure",id:"measure",level:3},{value:"Results",id:"results",level:3},{value:"1. Streaming",id:"1-streaming",level:4},{value:"2. Ping-pong",id:"2-ping-pong",level:4},{value:"Conclusion",id:"conclusion",level:3},{value:"HTTP",id:"http",level:2},{value:"Test program",id:"test-program-1",level:3},{value:"Results",id:"results-1",level:3},{value:"Conclusion",id:"conclusion-1",level:4}],m={toc:o},d="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-performance"},"Network Performance"),(0,a.kt)("h2",{id:"tcp"},"TCP"),(0,a.kt)("p",null,"Compare TCP socket performance via echo server."),(0,a.kt)("h3",{id:"test-program"},"Test program"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/PhotonLibOS/blob/main/examples/perf/net-perf.cpp"},"https://github.com/alibaba/PhotonLibOS/blob/main/examples/perf/net-perf.cpp")),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"cmake -B build -D PHOTON_BUILD_TESTING=1 -D PHOTON_ENABLE_URING=1 -D CMAKE_BUILD_TYPE=Release\ncmake --build build -j -t net-perf\n")),(0,a.kt)("h3",{id:"run"},"Run"),(0,a.kt)("h4",{id:"server"},"Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build/output/net-perf -port 9527 -buf_size 512\n")),(0,a.kt)("h4",{id:"streaming-client"},"Streaming client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build/output/net-perf -client -client_mode streaming -ip <server_ip> -port 9527 -buf_size 512\n")),(0,a.kt)("h4",{id:"ping-pong-client"},"Ping-pong client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build/output/net-perf -client -client_mode ping-pong -ip <server_ip> -port 9527 -buf_size 512 -client_connection_num 100\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Of course you can use your own client, as long as it follows the TCP echo protocol.")),(0,a.kt)("h3",{id:"measure"},"Measure"),(0,a.kt)("p",null,"You can either monitor the server's network bandwidth via ",(0,a.kt)("inlineCode",{parentName:"p"},"iftop"),", or print its QPS periodically from the code."),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("h4",{id:"1-streaming"},"1. Streaming"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"Language"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Concurrency Model"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Buffer Size"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Conn Num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"QPS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Bandwidth"),(0,a.kt)("th",{parentName:"tr",align:"center"},"CPU util"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Photon"),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1604K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"6.12Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/idealvin/cocoyaxi"},"cocoyaxi")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1545K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5.89Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://tokio.rs/"},"tokio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Rust"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1384K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5.28Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"98%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/acl-dev/acl/tree/master/lib_fiber"},"acl/lib_fiber")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1240K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4.73Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"94%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Go"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Golang"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1083K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4.13Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/yyzybb537/libgo"},"libgo")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"770K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2.94Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://think-async.com/Asio/"},"boost::asio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Async Callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"634K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2.42Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"97%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/bytedance/monoio"},"monoio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Rust"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"610K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2.32Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/asyncio.html"},"Python3 asyncio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Python"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"517K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.97Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Tencent/libco"},"libco")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"432K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.65Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"96%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Donald-Rupin/zab"},"zab")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"412K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.57Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/netcan/asyncio"},"asyncio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"186K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.71Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"98%")))),(0,a.kt)("h4",{id:"2-ping-pong"},"2. Ping-pong"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"Language"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Concurrency Model"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Buffer Size"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Conn Num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"QPS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Bandwidth"),(0,a.kt)("th",{parentName:"tr",align:"center"},"CPU util"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Photon"),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"412K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.57Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/bytedance/monoio"},"monoio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Rust"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"400K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.52Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://think-async.com/Asio/"},"boost::asio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Async Callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"393K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.49Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Qihoo360/evpp"},"evpp")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Async Callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"378K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.44Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://tokio.rs/"},"tokio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Rust"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"365K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.39Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/netty/netty"},"netty")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Java"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Async Callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"340K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.30Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Go"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Golang"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"331K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.26Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/acl-dev/acl/tree/master/lib_fiber"},"acl/lib_fiber")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"327K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.25Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/swoole/swoole-src"},"swoole")),(0,a.kt)("td",{parentName:"tr",align:"center"},"PHP"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"325K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.24Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Donald-Rupin/zab"},"zab")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"317K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.21Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/idealvin/cocoyaxi"},"cocoyaxi")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"279K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.06Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"98%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/Tencent/libco"},"libco")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"260K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.99Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"96%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/yyzybb537/libgo"},"libgo")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackful Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"258K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.98Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"156%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/netcan/asyncio"},"asyncio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"C++20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"241K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.92Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"TypeScript"),(0,a.kt)("td",{parentName:"tr",align:"center"},"nodejs"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Async Callback"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"192K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.75Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Erlang"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Erlang"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"165K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.63Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"115%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/asyncio.html"},"Python3 asyncio")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Python"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Stackless Coroutine"),(0,a.kt)("td",{parentName:"tr",align:"center"},"512 Bytes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"136K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.52Gb"),(0,a.kt)("td",{parentName:"tr",align:"center"},"99%")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Streaming client")," is to measure echo server performance when handling high throughput. A similar scenario in the\nreal world is the multiplexing technology used by RPC and HTTP 2.0. We will set up 4 client processes,\nand each of them will create only one connection. Send coroutine and recv coroutine are running infinite loops separately."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Ping-pong client")," is to measure echo server performance when handling large amounts of connections.\nWe will set up 10 client processes, and each of them will create 100 connections (totally 1000). For a single connection, it has to send first, then receive."),(0,a.kt)("li",{parentName:"ul"},"Server and client are all cloud VMs, 64Core 128GB, Intel Platinum CPU 2.70GHz. Kernel version is 6.x. The network bandwidth is 32Gb."),(0,a.kt)("li",{parentName:"ul"},"This test was only meant to compare per-core QPS, so we limited the thread number to 1, for instance, set GOMAXPROCS=1 for Golang."),(0,a.kt)("li",{parentName:"ul"},"Some libs didn't provide an easy way to configure the number of bytes we would receive in a single call at server side, which was required by the Streaming test. So we only had their Ping-pong tests run."))),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Photon socket has the best per-core QPS, no matter in the Streaming or Ping-pong traffic mode."),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("p",null,"Compare Photon and ",(0,a.kt)("inlineCode",{parentName:"p"},"Nginx")," when serving static files, using Apache Bench(ab) as the client."),(0,a.kt)("h3",{id:"test-program-1"},"Test program"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/PhotonLibOS/blob/main/net/http/test/server_perf.cpp"},"https://github.com/alibaba/PhotonLibOS/blob/main/net/http/test/server_perf.cpp")),(0,a.kt)("h3",{id:"results-1"},"Results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"File Size"),(0,a.kt)("th",{parentName:"tr",align:"center"},"QPS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"CPU util"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Photon"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4KB"),(0,a.kt)("td",{parentName:"tr",align:"center"},"114K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4KB"),(0,a.kt)("td",{parentName:"tr",align:"center"},"97K"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100%")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Nginx only enables 1 worker (process).")),(0,a.kt)("h4",{id:"conclusion-1"},"Conclusion"),(0,a.kt)("p",null,"Photon is faster than ",(0,a.kt)("inlineCode",{parentName:"p"},"Nginx")," under this circumstance."))}k.isMDXComponent=!0}}]);