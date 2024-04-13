"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[6158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,m=s["".concat(p,".").concat(c)]||s[c]||h[c]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2,toc_max_heading_level:3},l="Thread",o={unversionedId:"api/thread",id:"api/thread",title:"Thread",description:"Concept",source:"@site/docs/api/thread.md",sourceDirName:"api",slug:"/api/thread",permalink:"/docs/api/thread",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/api/thread.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_max_heading_level:3},sidebar:"docSidebar",previous:{title:"Env",permalink:"/docs/api/env"},next:{title:"vCPU and Multi-core",permalink:"/docs/api/vcpu-and-multicore"}},p={},d=[{value:"Concept",id:"concept",level:3},{value:"Namespace",id:"namespace",level:3},{value:"Headers",id:"headers",level:3},{value:"Types",id:"types",level:3},{value:"Thread API",id:"thread-api",level:2},{value:"thread_create",id:"thread_create",level:3},{value:"Description",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Return",id:"return",level:4},{value:"thread_create11",id:"thread_create11",level:3},{value:"Description",id:"description-1",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Usage",id:"usage",level:4},{value:"Return",id:"return-1",level:4},{value:"thread_enable_join",id:"thread_enable_join",level:3},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Return",id:"return-2",level:4},{value:"thread_join",id:"thread_join",level:3},{value:"Description",id:"description-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Return",id:"return-3",level:4},{value:"thread_yield",id:"thread_yield",level:3},{value:"Description",id:"description-4",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Return",id:"return-4",level:4},{value:"thread_usleep",id:"thread_usleep",level:3},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Return",id:"return-5",level:4},{value:"thread_interrupt",id:"thread_interrupt",level:3},{value:"Description",id:"description-6",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Return",id:"return-6",level:4},{value:"Note",id:"note",level:4},{value:"thread_shutdown",id:"thread_shutdown",level:3},{value:"Description",id:"description-7",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Return",id:"return-7",level:4},{value:"thread_migrate",id:"thread_migrate",level:3},{value:"Description",id:"description-8",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Return",id:"return-8",level:4},{value:"get_vcpu",id:"get_vcpu",level:3},{value:"Description",id:"description-9",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"Return",id:"return-9",level:4},{value:"Thread Pool",id:"thread-pool",level:2},{value:"Additional Header",id:"additional-header",level:4},{value:"Description",id:"description-10",level:4},{value:"Timer",id:"timer",level:2},{value:"Additional Header",id:"additional-header-1",level:4},{value:"Description",id:"description-11",level:4}],u={toc:d},s="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thread"},"Thread"),(0,r.kt)("h3",{id:"concept"},"Concept"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Photon thread is what we usually call coroutine/fiber. The reason why we use thread naming instead of the latter\ntwo is because we hope that users will not notice the difference between the Photon program and traditional\nmulti-threaded programs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A thread is essentially a function, and an execution unit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A thread must reside in one ",(0,r.kt)("a",{parentName:"p",href:"vcpu-and-multicore"},"vCPU"),". Threads can be migrated between vCPUs."))),(0,r.kt)("div",null,(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/api/thread-vcpu.png",alt:"thread-vcpu.png",width:"500"}))),(0,r.kt)("h3",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"photon::")),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<photon/thread/thread.h>")),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"photon::thread")," \u2192 The Photon's coroutine/fiber entity."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"photon::join_handle")," \u2192 Join handle. Used to join a thread."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"photon::vcpu_base")," \u2192 A base class for the vCPU entity. By far there is no way to modify a vCPU. It's immutable."),(0,r.kt)("h2",{id:"thread-api"},"Thread API"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_create"},"thread_create"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"photon::thread* photon::thread_create(thread_entry start, void* arg,\n                                      uint64_t stack_size = DEFAULT_STACK_SIZE,\n                                      uint16_t reserved_space = 0);\n")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Create a new thread, put it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunQueue"),". Leave it to the scheduler to decide when to run."),(0,r.kt)("p",null,"No thread yield in this call, which means the caller will continue its execution."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"start")," Thread function's entry point."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"thread_entry")," is a type of ",(0,r.kt)("inlineCode",{parentName:"p"},"void* (*)(void*)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"arg")," Thread function's sole argument.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"stack_size")," Default stack size is 8MB.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reserved_space")," Can be used to passed large arguments to the new thread. Default is 0."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure that the parameters you pass in have the same life cycle as the function and are\nnot destroyed before the function starts executing. This may cause invalid memory access."),(0,r.kt)("p",{parentName:"admonition"},"If this cannot be guaranteed, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"thread_create11")," below,\nwhich can copy all parameters to the function stack of the new coroutine.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"stack_size")," refers to the size of the coroutine stack, default is 8MB, same as Linux default function size."),(0,r.kt)("p",{parentName:"admonition"},"Be careful not to cause a stack overflow. Linux will report a stack overflow error at runtime. However,\nsince Photon simulates the stack in user mode, it will not detect a stack overflow error immediately.\nContinuous access might cause the memory to be trampled. Normally, you should avoid write recursive functions."),(0,r.kt)("p",{parentName:"admonition"},"Although we can use kernel's ",(0,r.kt)("inlineCode",{parentName:"p"},"mprotect")," to guard this memory region, it will affect performance, so it is up to the user to control it.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Every time a new coroutine is created, malloc is called to apply for memory. Therefore, it is recommended to use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"thread-pool")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pooled_stack_allocator")," for frequent creation."),(0,r.kt)("p",{parentName:"admonition"},"In terms of the actual memory used by the OS, it does not add 8MB immediately for every malloc,\nbut increases dynamically based on the mapping of the actual written page."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    photon::init();\n    for (int i = 0; i < 2000; ++i) {\n        photon::thread_create11([]{\n            photon::thread_usleep(-1UL);\n        });\n    }\n    photon::thread_usleep(-1UL);\n}\n")),(0,r.kt)("p",{parentName:"admonition"},"In the above example, we created 2000 sleeping coroutines, the process shows that it has 16GB virtual memory, but only\nconsumed 24MB physical memory."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"malloc",src:a(3581).Z,width:"1200",height:"100"}))),(0,r.kt)("h4",{id:"return"},"Return"),(0,r.kt)("p",null,"Pointer to the new thread."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_create11"},"thread_create11"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename F, typename... ARGUMENTS>\nphoton::thread* photon::thread_create11(F f, ARGUMENTS&& ...args);              // (1)\n\ntemplate<typename FUNCTOR, typename... ARGUMENTS>\nphoton::thread* photon::thread_create11(FUNCTOR&& f, ARGUMENTS&& ...args);      // (2)\n\ntemplate<typename CLASS, typename F, typename... ARGUMENTS>\nphoton::thread* photon::thread_create11(F f, CLASS* obj, ARGUMENTS&& ...args);  // (3)\n")),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"C++11 syntax wrapper for ",(0,r.kt)("inlineCode",{parentName:"p"},"thread_create"),". Multiple arguments is allowed."),(0,r.kt)("h4",{id:"headers-1"},"Headers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<photon/thread/thread11.h>")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"F is a global function.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"double func(int a, char b);\n\nauto th = photon::thread_create11(func, 1, '2');\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"FUNCTOR is a ",(0,r.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/utility/functional"},"function object"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int a = 1; char b = '2';\n\nauto th = photon::thread_create11([&] {\n    // Access a and b\n});\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"CLASS is a type, and F is its member function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class A {\n    void func(int a, char b);\n\n    void run() {\n        photon::thread_create11(&A::func, this, 1, '2');\n    }\n};\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Arguments are forwarded to the new thread by value. If needed to pass by reference, it has to be wrapped by ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ref")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"std::cref"),".")),(0,r.kt)("h4",{id:"return-1"},"Return"),(0,r.kt)("p",null,"Pointer to the new thread."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_enable_join"},"thread_enable_join"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"photon::join_handle* photon::thread_enable_join(photon::thread* th, bool flag = true);\n")),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Join is disabled by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once join is enabled, the thread will remain existing until being joined.\nFailing to do so will cause resource leak.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Threads are join-able ",(0,r.kt)("strong",{parentName:"p"},"only")," through their ",(0,r.kt)("inlineCode",{parentName:"p"},"join_handle"),"."))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"th")," Thread pointer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flag")," Enable or disable. Defaults to true."))),(0,r.kt)("h4",{id:"return-2"},"Return"),(0,r.kt)("p",null,"Pointer of a ",(0,r.kt)("inlineCode",{parentName:"p"},"join_handle"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_join"},"thread_join"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void photon::thread_join(photon::join_handle* jh);\n")),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Join a thread."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You can't join an exited or non-existent thread. It will cause core dump.")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jh")," Pointer of a ",(0,r.kt)("inlineCode",{parentName:"li"},"join_handle"),". Get from ",(0,r.kt)("inlineCode",{parentName:"li"},"thread_enable_join"),".")),(0,r.kt)("h4",{id:"return-3"},"Return"),(0,r.kt)("p",null,"None"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_yield"},"thread_yield"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void photon::thread_yield();\n")),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"Switching to other threads, without going into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SleepQueue"),"."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-4"},"Return"),(0,r.kt)("p",null,"None"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_usleep"},"thread_usleep"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int photon::thread_usleep(uint64_t useconds);\n")),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"Suspend ",(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT")," thread for specified time duration, insert self to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SleepQueue"),", and switch control to other running threads."),(0,r.kt)("p",null,"Threads in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SleepQueue")," might have a chance to be resumed then."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useconds")," Sleep time in microseconds. -1UL means forever sleep.")),(0,r.kt)("h4",{id:"return-5"},"Return"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns 0 if slept well (at least ",(0,r.kt)("inlineCode",{parentName:"li"},"useconds")," time)."),(0,r.kt)("li",{parentName:"ul"},"Returns -1 if been interrupted, and ",(0,r.kt)("inlineCode",{parentName:"li"},"errno")," is set by the caller who invokes ",(0,r.kt)("inlineCode",{parentName:"li"},"thread_interrupt"),".")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_interrupt"},"thread_interrupt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void photon::thread_interrupt(photon::thread* th, int error_number = EINTR);\n")),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"Interrupt the target thread. Awaken it from sleep."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You can't interrupt an exited or non-existent thread. It will cause core dump.")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"th")," Target thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"error_number")," Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"errno")," of the target thread. Default is ",(0,r.kt)("inlineCode",{parentName:"p"},"EINTR"),"."))),(0,r.kt)("h4",{id:"return-6"},"Return"),(0,r.kt)("p",null,"None."),(0,r.kt)("h4",{id:"note"},"Note"),(0,r.kt)("p",null,"The target thread and the caller might NOT belong to the same vCPU. In this situation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"StandbyQueue")," will be used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_shutdown"},"thread_shutdown"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int photon::thread_shutdown(photon::thread* th, bool flag = true);\n")),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"Set the shutdown flag to disable further scheduling of the target thread, then fire an interrupt."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"th")," Target thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flag")," Set the shutdown flag or not."))),(0,r.kt)("h4",{id:"return-7"},"Return"),(0,r.kt)("p",null,"None."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thread_migrate"},"thread_migrate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int photon::thread_migrate(photon::thread* th, photon::vcpu_base* vcpu);\n")),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"Migrate a ",(0,r.kt)("inlineCode",{parentName:"p"},"READY")," state thread to another vCPU."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Although Photon is of M:1 model, we can still migrate the coroutine function to another thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run-to-completion model is prefer. Once created, do not schedule the coroutine to other threads unless you encounter a CPU bottleneck in this thread."))),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"th")," Target thread.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"vcpu")," Target vCPU."))),(0,r.kt)("h4",{id:"return-8"},"Return"),(0,r.kt)("p",null,"Returns 0 on success, returns -1 on error."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get_vcpu"},"get_vcpu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"vcpu_base* get_vcpu(thread* th = CURRENT);\n")),(0,r.kt)("h4",{id:"description-9"},"Description"),(0,r.kt)("p",null,"Get the vCPU of the target thread."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"th")," Target thread. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"CURRENT")," thread.")),(0,r.kt)("h4",{id:"return-9"},"Return"),(0,r.kt)("p",null,"Returns a pointer of ",(0,r.kt)("inlineCode",{parentName:"p"},"vcpu_base"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"thread-pool"},"Thread Pool"),(0,r.kt)("h4",{id:"additional-header"},"Additional Header"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<photon/thread/thread-pool.h>")),(0,r.kt)("h4",{id:"description-10"},"Description"),(0,r.kt)("p",null,"The thread-pool's implementation is based on identity-pool.h. It supports both static allocation (on stack) and dynamic allocation (on heap)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// on heap\nauto p1 = photon::ThreadPoolBase::new_thread_pool(100);\nauto th1 = p1->thread_create(&func, nullptr);\n\n// on stack\nphoton::ThreadPool<400> p2;\nauto th2 = p2.thread_create(&func, nullptr);\n")),(0,r.kt)("h2",{id:"timer"},"Timer"),(0,r.kt)("h4",{id:"additional-header-1"},"Additional Header"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<photon/thread/thread-pool.h>")),(0,r.kt)("h4",{id:"description-11"},"Description"),(0,r.kt)("p",null,"Create a timer object with ",(0,r.kt)("inlineCode",{parentName:"p"},"default_timedout")," in usec, callback function ",(0,r.kt)("inlineCode",{parentName:"p"},"on_timer"),",\nand callback argument ",(0,r.kt)("inlineCode",{parentName:"p"},"arg"),". The timer object is implemented as a special thread, so\nit has a ",(0,r.kt)("inlineCode",{parentName:"p"},"stack_size"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_timer")," is invoked within the thread's context.\nThe timer object is deleted automatically after it is finished.\t"),(0,r.kt)("p",null,"A non-repeating is basically equal to creating a new thread and run thread_usleep."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"Timer(uint64_t default_timeout, Entry on_timer, \n      bool repeating = true, uint64_t stack_size = 1024 * 64);\n\nint Timer::cancel();\nint Timer::reset(uint64_t new_timeout = -1);\nint Timer::stop();\n")))}h.isMDXComponent=!0},3581:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/malloc-d7a568d26c90ac933ca7cad37e47077d.png"}}]);