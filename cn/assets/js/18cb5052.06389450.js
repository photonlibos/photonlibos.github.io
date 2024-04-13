"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[7791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(n),u=i,h=f["".concat(p,".").concat(u)]||f[u]||c[u]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,toc_max_heading_level:5},r="Debugging",l={unversionedId:"miscellaneous/debugging",id:"miscellaneous/debugging",title:"Debugging",description:"photongdb.py is a gdb extension to help debugging running process with photon threads.",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/miscellaneous/debugging.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/debugging",permalink:"/cn/docs/miscellaneous/debugging",draft:!1,editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/docs/miscellaneous/debugging.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:5},sidebar:"docSidebar",previous:{title:"Miscellaneous",permalink:"/cn/docs/category/miscellaneous"}},p={},d=[{value:"Build",id:"build",level:2},{value:"Usage",id:"usage",level:2},{value:"Commands",id:"commands",level:3},{value:"<code>photon_init</code>",id:"photon_init",level:4},{value:"<code>photon_current</code>",id:"photon_current",level:4},{value:"<code>photon_ls</code>",id:"photon_ls",level:4},{value:"<code>photon_fr</code>",id:"photon_fr",level:4},{value:"<code>photon_fini</code>",id:"photon_fini",level:4}],s={toc:d},f="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"photongdb.py")," is a gdb extension to help debugging running process with photon threads."),(0,i.kt)("p",null,"It provides a group of extra gdb command to inspect photon thread status, even able to switch to background photon\nstack to inspect stack frames and variables if needed."),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Build with ",(0,i.kt)("inlineCode",{parentName:"p"},"-D CMAKE_BUILD_TYPE=Debug")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"When using GDB to debugging (debug running or attaching), load the script to enable this extension"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},"(gdb) source <repo_dir>/tools/photongdb.py \nINFO Photon-GDB-extension loaded\n")),(0,i.kt)("p",null,"It will print hint to tells that extension is loaded.\nExtra gdb-commands are added to environment:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"repo_dir")," in debugging machine should be the same as the one in build machine.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},"photon_current\nphoton_ls\nphoton_init\nphoton_fini\nphoton_rst\nphoton_fr\n")),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("h4",{id:"photon_init"},(0,i.kt)("inlineCode",{parentName:"h4"},"photon_init")),(0,i.kt)("p",null,"Initializing photon thread lookup mode."),(0,i.kt)("p",null,"This command will store current stack registers in gdb value ",(0,i.kt)("inlineCode",{parentName:"p"},"$saved_rsp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$saved_rbp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$saved_rip"),", and enabling\ncommands in photon thread lookup mode."),(0,i.kt)("p",null,"Since to inspect background photon threads needs simulating stack switch for gdb, it will change some registers.\nAll commands in this group should be called only after entered photon debugging mode."),(0,i.kt)("p",null,"During photon debugging mode, user should NEVER try to continue running (even step in) before exit the mode, or\nprocess running status will be messed up, result in unpredictable failure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},"(gdb) photon_init\nWARNING Entered photon thread lookup mode. PLEASE do not trying step-in or continue before `photon_fini`\n\n(gdb) p $saved_rsp\n$1 = 140737488343040\n(gdb) p $saved_rbp\n$2 = 140737488343040\n(gdb) p $saved_rip\n$3 = 4358880\n\n(gdb) photon_ls\nCURRENT [0] 0x5555558a9e20 0x7fffffffdb30 0x7fffffffe1a0 0x55555556a029\nREADY [1] 0x7ffff6afb340 0x7ffff6afb1b0 0x7ffff6afb1d0 0x5555555696e0\nSLEEP [2] 0x5555558c0740 0x5555558c0310 0x5555558c0310 0x5555558c0740\nSLEEP [3] 0x7ffff6165b40 0x7ffff6165690 0x7ffff6165690 0x7ffff6165b40\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are two situations:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"You have set a ",(0,i.kt)("inlineCode",{parentName:"li"},"breakpoint")," in a specific line of your code."),(0,i.kt)("li",{parentName:"ol"},"You suspend the ",(0,i.kt)("inlineCode",{parentName:"li"},"gdb")," by ",(0,i.kt)("inlineCode",{parentName:"li"},"ctrl + C"),", and the program halts inside libc or syscall.")),(0,i.kt)("p",{parentName:"admonition"},"For situation 2, you MUST first switch to the Photon code, for instance, by the command of ",(0,i.kt)("inlineCode",{parentName:"p"},"frame 3"),".\nYou should make sure the current stack has the ",(0,i.kt)("inlineCode",{parentName:"p"},"photon::CURRENT")," symbol when initializing."),(0,i.kt)("p",{parentName:"admonition"},"After init, you MUST go back to the top frame by the command of ",(0,i.kt)("inlineCode",{parentName:"p"},"frame 0"),".")),(0,i.kt)("h4",{id:"photon_current"},(0,i.kt)("inlineCode",{parentName:"h4"},"photon_current")),(0,i.kt)("p",null,"Print out ",(0,i.kt)("inlineCode",{parentName:"p"},"CURRENT")," running photon thread struct. No side effects, can be called any time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},'(gdb) photon_current\nCURRENT {<intrusive_list_node<photon::thread>> = {<__intrusive_list_node> = {__prev_ptr = 0x7ffff2bf9bc0, __next_ptr = 0x7ffff2bf9bc0}, <No data fields>}, state = photon::RUNNING, error_number = 0, idx = -172836528, flags = 0, reserved = 7564776, joinable = false, shutting_down = false, lock = {_lock = {<std::__atomic_flag_base> = {_M_i = false}, <No data fields>}}, waitq = 0x0, vcpu = 0x7ffff7db5600 <photon::vcpus>, start = 0x736de8, arg = 0x0, retval = 0x736fe8, buf = 0x7ffff7dd46c0 <(anonymous namespace)::c_locale_impl> "\\020", stack = {_ptr = 0x7fffffffd0c8}, ts_wakeup = 0, cond = {<photon::waitq> = {q = {th = 0x0, lock = {_lock = {<std::__atomic_flag_base> = {_M_i = false}, <No data fields>}}}}, <No data fields>}}\n')),(0,i.kt)("h4",{id:"photon_ls"},(0,i.kt)("inlineCode",{parentName:"h4"},"photon_ls")),(0,i.kt)("p",null,"List all photon threads on current vCPU. No side effects, can be called any time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},"(gdb) photon_ls\nCURRENT [0] 0x5555558a9e20 0x7fffffffdb30 0x7fffffffe1a0 0x55555556a029\nREADY [1] 0x7ffff6afb340 0x7ffff6afb1b0 0x7ffff6afb1d0 0x5555555696e0\nSLEEP [2] 0x5555558c0740 0x5555558c0310 0x5555558c0310 0x5555558c0740\nSLEEP [3] 0x7ffff6165b40 0x7ffff6165690 0x7ffff6165690 0x7ffff6165b40\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This command will only work after ",(0,i.kt)("inlineCode",{parentName:"p"},"photon_init"))),(0,i.kt)("h4",{id:"photon_fr"},(0,i.kt)("inlineCode",{parentName:"h4"},"photon_fr")),(0,i.kt)("p",null,"Look into any photon thread stack. Use with gdb ",(0,i.kt)("inlineCode",{parentName:"p"},"bt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},"(gdb) photon_fr 1\nSWITCH to 0x7ffff2bf9ac8 0x7ffff2bf9ae0 0x7ffff5014ceb\n(gdb) bt\n#0  photon::switch_context (from=0x7ffff2bf9bc0, to=0x736c50) at photon/thread.cpp:478\n#1  0x00007ffff5014d22 in photon::switch_context (from=0x7ffff2bf9bc0, new_state=photon::READY, to=0x736c50) at photon/thread.cpp:482\n#2  0x00007ffff5010b51 in photon::thread_yield_to (th=0x736c50) at photon/thread.cpp:575\n#3  0x00007ffff5010465 in photon::thread_stub () at photon/thread.cpp:386\n#4  0x0000000000000000 in ?? ()\n(gdb) photon_fr 0\nSWITCH to 0x7fffffffd000 0x7fffffffd000 0x4282e0\n(gdb) bt\n#0  0x00000000004282e0 in <lambda(ILogOutput*)>::operator()(ILogOutput *) const (__closure=0x7fffffffd044, __output___LINE__=0x706280 <_log_output_null>)\n    at test/test.cpp:132\n#1  0x00000000004488ba in LogBuilder<log_format()::<lambda(ILogOutput*)> >::~LogBuilder(void) (this=0x7fffffffd040, __in_chrg=<optimized out>)\n    at test/../alog.h:519\n#2  0x0000000000428398 in log_format () at test/test.cpp:133\n#3  0x00000000004283c9 in ALog_fmt_perf_1m_Test::TestBody (this=0x736c00) at test/test.cpp:140\n#4  0x00000000004b6d13 in void testing::internal::HandleExceptionsInMethodIfSupported<testing::Test, void>(testing::Test*, void (testing::Test::*)(), char const*) ()\n#5  0x00000000004abeaa in testing::Test::Run() ()\n#6  0x00000000004abff8 in testing::TestInfo::Run() ()\n#7  0x00000000004ac0d5 in testing::TestCase::Run() ()\n#8  0x00000000004ac3c0 in testing::internal::UnitTestImpl::RunAllTests() ()\n#9  0x00000000004b7223 in bool testing::internal::HandleExceptionsInMethodIfSupported<testing::internal::UnitTestImpl, bool>(testing::internal::UnitTestImpl*, bool (testing::internal::UnitTestImpl::*)(), char const*) ()\n#10 0x00000000004ac6a3 in testing::UnitTest::Run() ()\n#11 0x0000000000457f24 in RUN_ALL_TESTS () at ../../.dep_create_cache/var/alicpp/apsara/alicpp/built/gcc-4.9.2/gtest-1.7.0/include/gtest/gtest.h:2288\n#12 0x0000000000447737 in main (argc=1, argv=0x7fffffffd4d8) at test/test.cpp:1761\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This command will only work after ",(0,i.kt)("inlineCode",{parentName:"p"},"photon_init"))),(0,i.kt)("h4",{id:"photon_fini"},(0,i.kt)("inlineCode",{parentName:"h4"},"photon_fini")),(0,i.kt)("p",null,"Finish photon thread lookup mode, restore registers"),(0,i.kt)("p",null,"This will restore registers, exit photon thread lookup mode, so it is able to continue running after ",(0,i.kt)("inlineCode",{parentName:"p"},"photon_init")," called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gdb"},"(gdb) photon_fini\nWARNING Finished photon thread lookup mode.\n")))}c.isMDXComponent=!0}}]);