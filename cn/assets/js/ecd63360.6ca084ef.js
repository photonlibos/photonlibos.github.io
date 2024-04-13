"use strict";(self.webpackChunkphoton_website=self.webpackChunkphoton_website||[]).push([[8741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const l={slug:"photon-dpdk",title:"How to run Photon on top of DPDK",authors:["beef9999"],tags:["DPDK","F-Stack"]},r=void 0,i={permalink:"/cn/blog/photon-dpdk",editUrl:"https://github.com/alibaba/PhotonLibOS/edit/main/doc/blog/2023-07-29-photon-dpdk.md",source:"@site/i18n/cn/docusaurus-plugin-content-blog/2023-07-29-photon-dpdk.md",title:"How to run Photon on top of DPDK",description:"&emsp;&emsp;Since version 0.6, Photon can run on an userspace TCP/IP stack if enabled the INITIOFSTACK_DPDK io engine.",date:"2023-07-29T00:00:00.000Z",formattedDate:"2023\u5e747\u670829\u65e5",tags:[{label:"DPDK",permalink:"/cn/blog/tags/dpdk"},{label:"F-Stack",permalink:"/cn/blog/tags/f-stack"}],readingTime:5.525,hasTruncateMarker:!1,authors:[{name:"Bob Chen",title:"Maintainer of PhotonLibOS",url:"https://github.com/beef9999",imageURL:"https://github.com/beef9999.png",key:"beef9999"}],frontMatter:{slug:"photon-dpdk",title:"How to run Photon on top of DPDK",authors:["beef9999"],tags:["DPDK","F-Stack"]},nextItem:{title:"The thread local variable for coroutines",permalink:"/cn/blog/thread-local"}},s={authorsImageUrls:[void 0]},p=[{value:"Configure SR-IOV on Mellanox ConnectX-4",id:"configure-sr-iov-on-mellanox-connectx-4",level:3},{value:"1. Enable IOMMU",id:"1-enable-iommu",level:4},{value:"2. Set VF number",id:"2-set-vf-number",level:4},{value:"3. Install mlnx_ofed driver",id:"3-install-mlnx_ofed-driver",level:4},{value:"Install DPDK",id:"install-dpdk",level:3},{value:"Install F-Stack",id:"install-f-stack",level:3},{value:"Upgrade pkg-config",id:"upgrade-pkg-config",level:4},{value:"Modify make scripts",id:"modify-make-scripts",level:4},{value:"Build and install",id:"build-and-install",level:4},{value:"Configurations",id:"configurations",level:4},{value:"Run Photon",id:"run-photon",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u2003","\u2003","Since version 0.6, Photon can run on an userspace TCP/IP stack if enabled the ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT_IO_FSTACK_DPDK")," io engine. "),(0,o.kt)("p",null,"\u2003","\u2003",(0,o.kt)("a",{parentName:"p",href:"https://www.f-stack.org/"},"F-Stack")," is an open-source project that has ported the entire ",(0,o.kt)("strong",{parentName:"p"},"FreeBSD"),"\nnetwork stack on top of ",(0,o.kt)("strong",{parentName:"p"},"DPDK"),", and provided userspace sockets and events API.\nWe have integrated Photon's coroutine scheduler with F-Stack, and made a busy-polling program more friendly to DPDK\ndevelopers than ever before. In terms of performance, the network app has seen the improvement of 20% ~ 40%, compared with\nthe Linux kernel based on interrupt."),(0,o.kt)("p",null,"\u2003","\u2003","This article will introduce how to configure SR-IOV on a Mellanox NIC, how to set up F-Stack\nand DPDK environment, how to enable the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.dpdk.org/guides/howto/flow_bifurcation.html"},"Flow Bifurcation"),"\nto filter the specific TCP/IP flow that you only concern, and finally how to run Photon on top of them, in order\nto build a high performance net server."),(0,o.kt)("h3",{id:"configure-sr-iov-on-mellanox-connectx-4"},"Configure SR-IOV on Mellanox ConnectX-4"),(0,o.kt)("h4",{id:"1-enable-iommu"},"1. Enable IOMMU"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Edit /etc/default/grub, expand GRUB_CMDLINE_LINUX with 'intel_iommu=on iommu=pt pci=realloc'\ngrub2-mkconfig -o /boot/grub2/grub.cfg\nreboot\n")),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"pci=realloc")," is a work-around solution for CentOS and RHEL.\nWithout this, kernel would report ",(0,o.kt)("inlineCode",{parentName:"p"},"not enough MMIO resources for SR-IOV"),",\nsee this ",(0,o.kt)("a",{parentName:"p",href:"https://access.redhat.com/solutions/37376"},"issue"),"."),(0,o.kt)("h4",{id:"2-set-vf-number"},"2. Set VF number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo 4 > /sys/class/net/eth0/device/sriov_numvfs\n")),(0,o.kt)("p",null,"\u2003","\u2003","If you are having an Intel NIC, this step is likely to succeed. However, for the Mellanox one,\nit might fail because of the lack of proper mlx driver in your kernel.\nThen you would need to download the official driver from NVidia, and make a full install."),(0,o.kt)("p",null,"\u2003","\u2003","There are many available releases in ",(0,o.kt)("a",{parentName:"p",href:"https://network.nvidia.com/products/infiniband-drivers/linux/mlnx_ofed/"},"https://network.nvidia.com/products/infiniband-drivers/linux/mlnx_ofed/"),",\nyou should choose one that matches to your kernel version and OS version the best.\nAn improper version might lead to compiling error when building kernel modules later.\nMy test machine is CentOS 7 with kernel 5.x, so I downloaded MLNX_OFED_LINUX-5.4-3.6.8.1-rhel7.2-x86_64.tgz."),(0,o.kt)("h4",{id:"3-install-mlnx_ofed-driver"},"3. Install mlnx_ofed driver"),(0,o.kt)("p",null,"\u2003","\u2003","First you need to check your gcc version. It has to be the same one that built your kernel.\nOtherwise you will need to upgrade your gcc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\ncat /proc/version\n")),(0,o.kt)("p",null,"\u2003","\u2003","Note that the NVidia official doc said we should install 'createrepo', but in CentOS 7,\nthere are some tiny bugs of its Python scripts. The 'createrepo_c' package will solve this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install python-devel tcl tk elfutils-libelf-devel createrepo_c\n")),(0,o.kt)("p",null,"\u2003","\u2003","Because the mlnx_ofed driver has already included rdma packages, to avoid collision,\nI decided to remove all rdma-related rpms previously installed in my test machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -qa | grep rdma\nrpm -e ...\n")),(0,o.kt)("p",null,"\u2003","\u2003","Build and install the driver and the additional packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd MLNX_OFED_LINUX-5.4-3.6.8.1-rhel7.2-x86_64/\n./mlnxofedinstall --skip-distro-check --add-kernel-support --without-mlnx-nvme --dpdk\n\n# Update initramfs\ndracut -f\n\n# There will be rdma-core, rdma-core-devel, librdmacm and librdmacm-utils.\nrpm -qa | grep rdma\n")),(0,o.kt)("p",null,"\u2003","\u2003","Now we need to restart the server. Be careful, there is a possibility that the interface name\nof your NIC might change, for example, from ",(0,o.kt)("inlineCode",{parentName:"p"},"eth0")," to something like ",(0,o.kt)("inlineCode",{parentName:"p"},"enp3s0f0"),", where 3 for Bus, 0 for Device,\nand 0 for Function, represented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"03:00.0")," BDF notation. It will incur connection failure\nof your server and unable to log in."),(0,o.kt)("p",null,"\u2003","\u2003","To solve this, your first option is to disable the Consistent Interface Device Naming in Linux,\nand then persist the new names by ",(0,o.kt)("inlineCode",{parentName:"p"},"udev rules"),". See the NVidia docs at\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/networking/display/MLNXOFEDv541030/Changes+and+New+Features#ChangesandNewFeatures-CustomerAffectingChanges"},"1"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://enterprise-support.nvidia.com/s/article/howto-change-network-interface-name-in-linux-permanently"},"2"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Append ",(0,o.kt)("inlineCode",{parentName:"li"},"GRUB_CMDLINE_LINUX")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/default/grub")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"net.ifnames=0")),(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/udev/rules.d/85-net-persistent-names.rules")," with the following content")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'# PCI device 15b3:1019 (mlx5_core)\n# NAME:="some name" , := is used to make sure that device name will be persistent.\nSUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="00:02:c9:fa:c3:50", ATTR{dev_id}=="0x0", ATTR{type}=="1", KERNEL=="eth*", NAME:="eth0"\nSUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="00:02:c9:fa:c3:51", ATTR{dev_id}=="0x0", ATTR{type}=="1", KERNEL=="eth*", NAME:="eth1"\n')),(0,o.kt)("p",null,"\u2003","\u2003","The second option, if you are OK with the new names, you can update the NIC scripts\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/")," and make them correct."),(0,o.kt)("p",null,"\u2003","\u2003","Finally, everything get ready, just reboot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"reboot \n")),(0,o.kt)("p",null,"\u2003","\u2003","After reboot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Start Mellanox Software Tools Service\nmst start\n\n# Show device name and port mapping\nmst status\nibdev2netdev\n\n# Check firmware capabilities\nmlxconfig -d /dev/mst/mt4117_pciconf0 query | grep NUM_OF_VFS\n\n# Set VF number. Should succeed now\necho 4 > /sys/class/net/enp3s0f0/device/sriov_numvfs\nlspci -nn | grep 'Ethernet controller'\n")),(0,o.kt)("h3",{id:"install-dpdk"},"Install DPDK"),(0,o.kt)("p",null,"\u2003","\u2003","The F-Stack version we choose is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/F-Stack/f-stack/releases/tag/v1.22"},"1.22"),",\nand it has explicitly required DPDK version to be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DPDK/dpdk/releases/tag/v20.11"},"20.11"),"."),(0,o.kt)("p",null,"\u2003","\u2003","Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install python3-pip\nyum install numactl-devel zlib-devel ninja\npip3 install meson pyelftools\n")),(0,o.kt)("p",null,"\u2003","\u2003","Build and install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd dpdk-20.11\nCONFIG_RTE_LIBRTE_MLX5_PMD=y meson -Denable_kmods=true -Dtests=false build\ncd build\nninja\nninja install\n")),(0,o.kt)("p",null,"\u2003","\u2003","Run simple test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Allocate 10GB huge-pages\necho 5120 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages\n\n# Attach your PF (with main IP) and one of the VFs (idle) to the poll-mode-driver test\n./build/app/dpdk-testpmd -l 0-3 -n 4 -a 0000:03:00.0 -a 0000:03:00.2 -- --nb-cores=2 --flow-isolate-all -i -a\n")),(0,o.kt)("p",null,"\u2003","\u2003","The ",(0,o.kt)("inlineCode",{parentName:"p"},"--flow-isolate-all")," option is a MUST do. It enables Flow Bifurcation and ensures that all the\nundetermined flow will be forwarded to the Linux kernel. Because the default behavior is to drop all packets, so\nunless you configure the flow table or enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"--flow-isolate-all")," option,\nyour network connection will be lost again ..."),(0,o.kt)("h3",{id:"install-f-stack"},"Install F-Stack"),(0,o.kt)("h4",{id:"upgrade-pkg-config"},"Upgrade pkg-config"),(0,o.kt)("p",null,"\u2003","\u2003","The ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg-config")," command in CentOS 7 is of version 0.27.1, and it has a ",(0,o.kt)("a",{parentName:"p",href:"https://bugs.freedesktop.org/show_bug.cgi?id=56699"},"bug"),"\nthat does not correctly handle gcc's ",(0,o.kt)("inlineCode",{parentName:"p"},"--whole-archive")," option.\nAs per F-Stack's document, we can upgrade it to ",(0,o.kt)("a",{parentName:"p",href:"https://pkg-config.freedesktop.org/releases/pkg-config-0.29.2.tar.gz"},"0.29.2"),"."),(0,o.kt)("h4",{id:"modify-make-scripts"},"Modify make scripts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"lib/Makefile"),", comment out ",(0,o.kt)("inlineCode",{parentName:"li"},"DEBUG=..."),". We want a release build."),(0,o.kt)("li",{parentName:"ol"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"lib/Makefile"),", enable ",(0,o.kt)("inlineCode",{parentName:"li"},"FF_FLOW_ISOLATE=1"),". It is the trigger of Flow Bifurcation for TCP. The hardcoded TCP port is 80."),(0,o.kt)("li",{parentName:"ol"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"mk/kern.mk"),", add ",(0,o.kt)("inlineCode",{parentName:"li"},"-Wno-error=format-overflow")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"CWARNFLAGS"),", in case a compiler warning being regarded as error.")),(0,o.kt)("h4",{id:"build-and-install"},"Build and install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export FF_PATH=/root/f-stack-1.22  # Change to your own dir\nexport REGULAR_PKG_CONFIG_DIR=/usr/lib64/pkgconfig/\nexport DPDK_PKG_CONFIG_DIR=/usr/local/lib64/pkgconfig/\nexport PKG_CONFIG_PATH=$(pkg-config --variable=pc_path pkg-config):${REGULAR_PKG_CONFIG_DIR}:${DPDK_PKG_CONFIG_DIR}\n\ncd f-stack-1.22/lib\nmake -j\nmake install\n")),(0,o.kt)("h4",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"\u2003","\u2003","F-Stack has a global config file at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/f-stack.conf"),". We need to make a few changes before running it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"pkt_tx_delay=100")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"pkt_tx_delay=0"),". So it will send packets immediately, rather than wait for a while."),(0,o.kt)("li",{parentName:"ol"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"[port0]")," section, including ",(0,o.kt)("inlineCode",{parentName:"li"},"addr"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"netmask"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"broadcast")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"gateway"),". Keep the same to your\ntest machine, because our DPDK app only needs to have a unique TCP port."),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"pci_whitelist=03:00.0,03:00.2"),". As explained above, the first one is your PF with main IP, the other is one of\nits idle VFs. The Flow Bifurcation will forward specific TCP flow to VF, while leaving the rest traffic to the PF,\nfor the Linux kernel.")),(0,o.kt)("h3",{id:"run-photon"},"Run Photon"),(0,o.kt)("p",null,"\u2003","\u2003","We have provided a new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/PhotonLibOS/blob/main/examples/fstack-dpdk/fstack-dpdk-demo.cpp"},"example"),".\nIt looks quite alike the old echo server example, only a few lines of changes, but now the backend becomes DPDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd PhotonLibOS\ncmake -B build -D PHOTON_BUILD_TESTING=1 -D PHOTON_ENABLE_FSTACK_DPDK=1 -D CMAKE_BUILD_TYPE=Release\ncmake --build build -j -t fstack-dpdk-demo\n\n./build/output/fstack-dpdk-demo\n")))}u.isMDXComponent=!0}}]);