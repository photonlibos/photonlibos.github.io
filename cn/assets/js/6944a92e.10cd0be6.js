"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[4399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,toc_max_heading_level:4},i="\u4ee3\u7801\u6837\u4f8b",p={unversionedId:"introduction/write-first-example",id:"introduction/write-first-example",title:"\u4ee3\u7801\u6837\u4f8b",description:"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528 Photon \u7684\u5404\u4e2a\u6a21\u5757\uff0c \u5373common\u3001thread\u3001fs\u3001io \u548c net\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/introduction/write-first-example.md",sourceDirName:"introduction",slug:"/introduction/write-first-example",permalink:"/cn/docs/introduction/write-first-example",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/introduction/write-first-example.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_max_heading_level:4},sidebar:"docSidebar",previous:{title:"\u96c6\u6210",permalink:"/cn/docs/introduction/how-to-integrate"},next:{title:"API",permalink:"/cn/docs/category/api"}},l={},c=[{value:"1. \u521d\u59cb\u5316\u534f\u7a0b\u73af\u5883",id:"1-\u521d\u59cb\u5316\u534f\u7a0b\u73af\u5883",level:3},{value:"2. \u521b\u5efa\u534f\u7a0b",id:"2-\u521b\u5efa\u534f\u7a0b",level:3},{value:"3. \u5e76\u53d1",id:"3-\u5e76\u53d1",level:3},{value:"4. \u9501\u548c\u540c\u6b65",id:"4-\u9501\u548c\u540c\u6b65",level:3},{value:"5. \u6587\u4ef6 IO",id:"5-\u6587\u4ef6-io",level:3},{value:"6. Socket",id:"6-socket",level:3},{value:"Client",id:"client",level:4},{value:"Server",id:"server",level:4},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:3}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ee3\u7801\u6837\u4f8b"},"\u4ee3\u7801\u6837\u4f8b"),(0,r.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528 Photon \u7684\u5404\u4e2a\u6a21\u5757\uff0c \u5373",(0,r.kt)("inlineCode",{parentName:"p"},"common"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"thread"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"fs"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"io")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"net"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u7a0b\u5e8f\u5728\u540e\u53f0\u542f\u52a8\u4e86\u4e00\u4e9b Photon \u534f\u7a0b\uff0c\u5229\u7528\u5c01\u88c5\u7684fs\u63a5\u53e3\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8eIO\u8bfb\u5199\uff0c\u5e76\u901a\u8fc7 Photon socket \u53d1\u9001\u6570\u636e\u5230\u7f51\u7edc\u7f13\u51b2\u533a\uff0c\u8fd8\u4f7f\u7528\u4e86\u9501\u548c\u6761\u4ef6\u53d8\u91cf\u7b49\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u4f8b\u5b50\u662f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"../api/std-compatible-api"},"std-compatible API")," \u7f16\u5199\u7684\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u539f\u751f API \u800c\u4e0d\u662f std-compatible API, \u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../api/thread#thread_create11"},"\u6587\u6863"),"\uff0c\u5b83\u53ef\u4ee5\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u7684\u529f\u80fd\u3002")),(0,r.kt)("h3",{id:"1-\u521d\u59cb\u5316\u534f\u7a0b\u73af\u5883"},"1. \u521d\u59cb\u5316\u534f\u7a0b\u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <photon/photon.h>\n#include <photon/thread/std-compat.h>\n\nint main() {\n    int ret = photon::init(photon::INIT_EVENT_DEFAULT, photon::INIT_IO_NONE);\n    if (ret != 0) {\n        return -1;\n    }\n    DEFER(photon::fini());\n    // ...\n}\n")),(0,r.kt)("p",null,"\u6267\u884c\u5b8c ",(0,r.kt)("inlineCode",{parentName:"p"},"photon::init")," \u4e4b\u540e, \u534f\u7a0b\u73af\u5883\uff08",(0,r.kt)("a",{parentName:"p",href:"../api/env"},(0,r.kt)("strong",{parentName:"a"},"Env")),"\uff09\u5c31\u521d\u59cb\u5316\u597d\u4e86\uff0c\u8fd9\u610f\u5473\u7740\u534f\u7a0b\u6808\u5df2\u7ecf\u6210\u529f\u5730\u5728\u5f53\u524d ",(0,r.kt)("a",{parentName:"p",href:"../api/vcpu-and-multicore"},(0,r.kt)("strong",{parentName:"a"},"vCPU"))," \u4e0a\u5206\u914d\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u5e76\u53d1\u6267\u884c\u7684\u534f\u7a0b\uff08",(0,r.kt)("a",{parentName:"p",href:"../api/thread"},(0,r.kt)("strong",{parentName:"a"},"threads")),"\uff09\u4e86\uff0c\u6216\u8005\u628a\u5b83\u4eec\u8fc1\u79fb\u5230\u5176\u4ed6 vCPU\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"photon::fini")," \u8d1f\u8d23\u9500\u6bc1\u73af\u5883\uff0c\u5b83\u88ab\u4e00\u4e2a\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFER")," \u7684\u5b8f\uff08\u6765\u81ea\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"common/utility.h"),"\uff09\u5c01\u88c5\u4e86\u4e00\u4e0b\u3002\n\u7c7b\u4f3c Go \u8bed\u8a00\u7684 defer, \u8fd9\u4e2a\u5b8f\u4f1a\u786e\u4fdd\u4f60\u7684\u8fd9\u4e2a\u8bed\u53e5\u4f1a\u5728\u51fd\u6570\u8fd4\u56de\u4e4b\u524d\u6267\u884c\u3002 \u5b83\u7684\u5b9e\u73b0\u6b63\u662f\u57fa\u4e8e C++ ",(0,r.kt)("inlineCode",{parentName:"p"},"RAII")," \u7684\u6982\u5ff5\u3002"),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u534f\u7a0b"},"2. \u521b\u5efa\u534f\u7a0b"),(0,r.kt)("p",null,"\u8ddf\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"std::thread")," \u7ebf\u7a0b\u7684\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"photon_std::thread"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u5168\u5c40\u51fd\u6570\nint func(int a, char* b) {}\n\n// \u7528\u5168\u5c40\u51fd\u6570\u521b\u5efa\u534f\u7a0b\uff0cthread\u5bf9\u8c61\u6790\u6784\u65f6\u81ea\u52a8Join\uff0c\u9664\u975e\u8c03\u7528\u4e86detach\nphoton_std::thread th(func, 1, '2');\nth.detach();\n\n// \u6216\u8005\u4f7f\u7528\u533f\u540d\u51fd\u6570\uff08lambda\uff09\nphoton_std::thread th([&] {\n    // \u76f4\u63a5\u8bbf\u95ee\u4e0a\u4e0b\u6587\u4e2d\u7684\u53d8\u91cf\n});\n\n// \u7528\u7c7b\u7684\u6210\u5458\u51fd\u6570\u521b\u5efa\u534f\u7a0b\nclass A {\n    void f() {\n        new photon_std::thread(&A::g, this, 1, '2');\n    }\n    void g(int a, char* b) {}\n};\n")),(0,r.kt)("h3",{id:"3-\u5e76\u53d1"},"3. \u5e76\u53d1"),(0,r.kt)("p",null,"\u534f\u7a0b\u672c\u8d28\u4e0a\u5c31\u662f\u51fd\u6570\uff0c\u662f\u4e00\u4e2a\u6267\u884c\u5355\u5143\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u591a\u4e2a\u6267\u884c\u5355\u5143\u5b9e\u73b0\u5e76\u53d1\uff0c\u5e76\u4e14\u7528join\u7b49\u5f85\u4efb\u52a1\u7ed3\u675f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<photon_std::thread> threads;\nfor (int i = 0; i < 100; ++i) {\n    threads.emplace_back(func, 1, '2');\n}\nfor (auth& th : threads) {\n    th.join();\n}\n")),(0,r.kt)("h3",{id:"4-\u9501\u548c\u540c\u6b65"},"4. \u9501\u548c\u540c\u6b65"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5178\u578b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"condition_variable")," \u7684\u7528\u6cd5\uff0c\u540c\u4e0a\uff0c\u53ea\u9700\u8981\u628a namespace \u6539\u6210 photon_std \u5373\u53ef\uff0c\u5176\u4ed6\u4ee3\u7801\u90fd\u8ddf std \u7684\u4e00\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool condition = false;\nphoton_std::mutex mu;\nphoton_std::condition_variable cv;\n\n// \u6d88\u8d39\u8005\u534f\u7a0b\nphoton_std::thread([&]{\n    auto timeout = std::chrono::duration<std::chrono::seconds>(10);\n    photon_std::unique_lock<photon_std::mutex> lock(mu);\n    while (!condition) {\n        cv.wait(lock, timeout);\n    }\n}).detach();\n\n// \u751f\u4ea7\u8005\u534f\u7a0b\nphoton_std::thread([&]{\n    photon_std::lock_guard<photon_std::mutex> lock(mu);\n    condition = true;\n    cv.notify_one();\n}).detach();\n")),(0,r.kt)("h3",{id:"5-\u6587\u4ef6-io"},"5. \u6587\u4ef6 IO"),(0,r.kt)("p",null,"Photon \u5c01\u88c5\u4e86\u4e00\u4e2a\u7c7b POSIX \u7684\u6587\u4ef6\u7cfb\u7edf\u63a5\u53e3\u3002\u672c\u4f8b\u4e2d\u6211\u4eec\u9996\u5148\u5728\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"IFileSystem")," \u5bf9\u8c61\uff0c\u7136\u540e\u4f7f\u7528\u5b83\u53c8\u6253\u5f00\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"IFile")," \u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u73af\u5883\u5141\u8bb8\u7684\u8bdd\uff0c\u4f60\u53ef\u4ee5\u628a io_engine \u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"photon::fs::ioengine_psync")," \u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"photon::fs::ioengine_iouring"),"\uff0c\n\u8fd9\u6837\u5c31\u53ef\u4ee5\u4f7f\u7528io_uring\u8bfb\u5199\u6587\u4ef6\u4e86\u3002io_uring IO \u5929\u7136\u5f02\u6b65\u975e\u963b\u585e\uff0c\u5e76\u4e14\u8ddf aio \u76f8\u6bd4\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 page cache\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4ee5\u4e3a\uff0cPhoton\u8fd8\u652f\u6301\u591a\u79cd\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\uff0c\u5982 httpfs\u3001extfs\u3001fusefs \u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <photon/fs/localfs.h>\n\nauto fs = photon::fs::new_localfs_adaptor(".", photon::fs::ioengine_psync);\nif (!fs) {\n    LOG_ERRNO_RETURN(0, -1, "failed to create fs");\n}\nDEFER(delete fs);\n\nauto file = fs->open("test-file", O_WRONLY | O_CREAT | O_TRUNC, 0644);\nif (!file) {\n    LOG_ERRNO_RETURN(0, -1, "failed to open file");\n}\nDEFER(delete file);\n\nssize_t n_written = file->write(buf, 4096);\n')),(0,r.kt)("p",null,"IFile \u548c IFileSystem \u5728\u6790\u6784\u7684\u65f6\u5019\u90fd\u4f1a\u81ea\u52a8 close \u4ed6\u4eec\u6253\u5f00\u7684\u8d44\u6e90\uff0c\u8fd9\u662f RAII \u7406\u5ff5\u7684\u518d\u4e00\u6b21\u8fd0\u7528\u3002"),(0,r.kt)("h3",{id:"6-socket"},"6. Socket"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tcp_socket_client")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp_socket_server")," \u662f\u5ba2\u6237\u7aef/\u670d\u52a1\u7aef\u6700\u5e38\u89c1\u7684\u7ec4\u5408\u642d\u914d\uff0c \u8bf7\u53c2\u8003\u6587\u6863\u67e5\u9605\u66f4\u591a\u7684 socket \u7c7b\u578b\u7684\u5c01\u88c5\u3002"),(0,r.kt)("h4",{id:"client"},"Client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <photon/net/socket.h>\n\nauto client = photon::net::new_tcp_socket_client();\nif (client == nullptr) {\n    LOG_ERRNO_RETURN(0, -1, "failed to create tcp client");\n}\nDEFER(delete client);\n\nphoton::net::EndPoint ep{photon::net::IPAddr("127.0.0.1"), 9527};\nauto stream = client->connect(ep);\nif (!stream) {\n    LOG_ERRNO_RETURN(0, -1, "failed to connect server");\n}\nDEFER(delete stream);\n\n// Send data to socket\nchar buf[1024];\nif (stream->send(buf, 1024) != 1024) {\n    LOG_ERRNO_RETURN(0, -1, "failed to write socket");\n}\n')),(0,r.kt)("h4",{id:"server"},"Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <photon/net/socket.h>\n\nauto server = photon::net::new_tcp_socket_server();\nif (server == nullptr) {\n    LOG_ERRNO_RETURN(0, -1, "failed to create tcp server");\n}\nDEFER(delete server);\n\nauto handler = [&](photon::net::ISocketStream* stream) -> int {       \n    char buf[1024];\n    ssize_t ret = stream->recv(buf, 1024);\n    if (ret <= 0) {\n        LOG_ERRNO_RETURN(0, -1, "failed to read socket");\n    }     \n    return 0;\n};\n\nserver->set_handler(handler);\nserver->bind_v4localhost(9527);\nserver->listen();\n\nLOG_INFO("Server is listening for port ` ...", 9527);\nserver->start_loop(true);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"stream \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"photon::net::ISocketStream")," \u7684\u5b9e\u4f8b\uff0c\u5b83\u8ddf\u4f20\u7edf\u7684 libc send/recv \u76f8\u6bd4\uff0c\u6269\u5c55\u4e86 read \u548c write \u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u672c\u8d28\u4e0a\u6765\u8bf4\uff0cwrite \u7b49\u4ef7\u4e8e fully_send\uff0cread \u7b49\u4ef7 fully_recv\uff0c\u5373\u8bfb/\u5199\u5230\u56fa\u5b9a\u7684\u5b57\u8282\u6570\u624d\u8fd4\u56de\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"LOG_INFO \u662f Photon \u72ec\u7279\u7684\u65e5\u5fd7\u7cfb\u7edf\uff0c\u5b83\u57fa\u4e8e\u5927\u91cf\u7684\u6a21\u677f\u5143\u7f16\u7a0b\u6280\u5de7\uff0c\u5728\u7f16\u8bd1\u65f6\u8fdb\u884c\u7ed3\u679c\u4f18\u5316\uff0c\u4ece\u800c\u964d\u4f4e\u8fd0\u884c\u65f6\u5f00\u9500\u3002\n\u8ddf\u5927\u591a\u6570\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"sprintf")," \u7684\u5176\u4ed6\u65e5\u5fd7\u7cfb\u7edf\u5bf9\u6bd4\u8d77\u6765\uff0cPhoton \u65e5\u5fd7\u7684\u901f\u5ea6\u6bd4\u4ed6\u4eec\u5feb 2~3 \u500d\u3002"),(0,r.kt)("p",{parentName:"admonition"},"`"," \u7b26\u53f7\u662f\u4e00\u4e2a\u5360\u4f4d\u7b26\uff0c\u5b83\u53ef\u4ee5\u5339\u914d\u591a\u79cd\u7c7b\u578b\u7684\u5143\u7d20\u3002")),(0,r.kt)("h3",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,r.kt)("p",null,"\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/PhotonLibOS/blob/main/examples/simple/simple.cpp"},"https://github.com/alibaba/PhotonLibOS/blob/main/examples/simple/simple.cpp")," \u67e5\u770b\u5b8c\u6574\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u6216\u8005\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/cn/docs/introduction/how-to-integrate"},"\u96c6\u6210")," \u4e2d\u5c55\u793a\u7684\u6559\u7a0b\uff0c\u5b9a\u5236\u4f60\u81ea\u5df1\u7684 CMake \u9879\u76ee\u3002"))}u.isMDXComponent=!0}}]);