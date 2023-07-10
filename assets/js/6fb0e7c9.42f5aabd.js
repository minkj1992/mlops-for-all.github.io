"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5105],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(n),k=a,c=s["".concat(i,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(c,o(o({ref:e},m),{},{components:n})):r.createElement(c,o({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6761:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"1. Introduction",description:"Setup Introduction",sidebar_position:1,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim","Jongsun Shinn","Youngdon Tae","SeungTae Kim"]},o=void 0,p={unversionedId:"setup-kubernetes/intro",id:"version-1.0/setup-kubernetes/intro",title:"1. Introduction",description:"Setup Introduction",source:"@site/versioned_docs/version-1.0/setup-kubernetes/intro.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/intro",permalink:"/docs/1.0/setup-kubernetes/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/intro.md",tags:[],version:"1.0",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1688994187,formattedLastUpdatedAt:"2023\ub144 7\uc6d4 10\uc77c",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Setup Introduction",sidebar_position:1,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim","Jongsun Shinn","Youngdon Tae","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Why Kubernetes?",permalink:"/docs/1.0/introduction/why_kubernetes"},next:{title:"2. Setup Kubernetes",permalink:"/docs/1.0/setup-kubernetes/kubernetes"}},i={},u=[{value:"MLOps \uc2dc\uc2a4\ud15c \uad6c\ucd95\ud574\ubcf4\uae30",id:"mlops-\uc2dc\uc2a4\ud15c-\uad6c\ucd95\ud574\ubcf4\uae30",level:2},{value:"\uad6c\uc131 \uc694\uc18c",id:"\uad6c\uc131-\uc694\uc18c",level:2},{value:"\ud074\ub7ec\uc2a4\ud130",id:"\ud074\ub7ec\uc2a4\ud130",level:3},{value:"1. Software",id:"1-software",level:4},{value:"2. Helm Chart",id:"2-helm-chart",level:4},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8",id:"\ud074\ub77c\uc774\uc5b8\ud2b8",level:3},{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3}],m={toc:u},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mlops-\uc2dc\uc2a4\ud15c-\uad6c\ucd95\ud574\ubcf4\uae30"},"MLOps \uc2dc\uc2a4\ud15c \uad6c\ucd95\ud574\ubcf4\uae30"),(0,a.kt)("p",null,"MLOps\ub97c \uacf5\ubd80\ud558\ub294 \ub370 \uc788\uc5b4\uc11c \uac00\uc7a5 \ud070 \uc7a5\ubcbd\uc740 MLOps \uc2dc\uc2a4\ud15c\uc744 \uad6c\uc131\ud574\ubcf4\uace0 \uc0ac\uc6a9\ud574\ubcf4\uae30\uac00 \uc5b4\ub835\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. AWS, GCP \ub4f1\uc758 \ud37c\ube14\ub9ad \ud074\ub77c\uc6b0\ub4dc \ud639\uc740 Weight & Bias, neptune.ai \ub4f1\uc758 \uc0c1\uc6a9 \ud234\uc744 \uc0ac\uc6a9\ud574\ubcf4\uae30\uc5d0\ub294 \uacfc\uae08\uc5d0 \ub300\ud55c \ubd80\ub2f4\uc774 \uc874\uc7ac\ud558\uace0, \ucc98\uc74c\ubd80\ud130 \ubaa8\ub4e0 \ud658\uacbd\uc744 \ud63c\uc790\uc11c \uad6c\uc131\ud558\uae30\uc5d0\ub294 \uc5b4\ub514\uc11c\ubd80\ud130 \uc2dc\uc791\ud574\uc57c \ud560\uc9c0 \ub9c9\ub9c9\ud558\uac8c \ub290\uaef4\uc9c8 \uc218\ubc16\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7f0 \uc774\uc720\ub4e4\ub85c MLOps\ub97c \uc120\ub73b \uc2dc\uc791\ud574\ubcf4\uc9c0 \ubabb\ud558\uc2dc\ub294 \ubd84\ub4e4\uc744 \uc704\ud574, ",(0,a.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 \uc6b0\ubd84\ud22c\uac00 \uc124\uce58\ub418\ub294 \ub370\uc2a4\ud06c\ud1b1 \ud558\ub098\ub9cc \uc900\ube44\ub418\uc5b4 \uc788\ub2e4\uba74 MLOps \uc2dc\uc2a4\ud15c\uc744 \ubc11\ubc14\ub2e5\ubd80\ud130 \uad6c\ucd95\ud558\uace0 \uc0ac\uc6a9\ud574 \ubcfc \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \ub2e4\ub8f0 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc6b0\ubd84\ud22c \ub370\uc2a4\ud06c\ud0d1 \ud658\uacbd\uc744 \uc900\ube44\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, \uac00\uc0c1\uba38\uc2e0\uc744 \ud65c\uc6a9\ud558\uc5ec \ud658\uacbd\uc744 \uad6c\uc131\ud558\uae30"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Windows \ud639\uc740 Intel Mac\uc744 \uc0ac\uc6a9\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubaa8\ub450\uc758 MLops")," \uc2e4\uc2b5\uc744 \uc9c4\ud589 \uc911\uc778 \ubd84\ub4e4\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtual Box"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"VMware")," \ub4f1\uc758 \uac00\uc0c1\uba38\uc2e0 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc6b0\ubd84\ud22c \ub370\uc2a4\ud06c\ud0d1 \ud658\uacbd\uc744 \uc900\ube44\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub54c, \uad8c\uc7a5 \uc0ac\uc591\uc744 \ub9de\ucdb0 \uac00\uc0c1 \uba38\uc2e0\uc744 \uc0dd\uc131\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n\ub610\ud55c, M1 Mac\uc744 \uc0ac\uc6a9\ud558\uc2dc\ub294 \ubd84\ub4e4\uc740 \uc791\uc131\uc77c(2022\ub144 2\uc6d4) \uae30\uc900\uc73c\ub85c\ub294 Virtual Box, VMware \ub294 \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. (",(0,a.kt)("a",{parentName:"p",href:"https://isapplesiliconready.com/kr"},"M1 Apple Silicone Mac\uc5d0 \ucd5c\uc801\ud654\ub41c macOS \uc571 \uc9c0\uc6d0 \ud655\uc778\ud558\uae30"),")\n\ub530\ub77c\uc11c, \ud074\ub77c\uc6b0\ub4dc \ud658\uacbd\uc744 \uc774\uc6a9\ud574 \uc2e4\uc2b5\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c\uba74, ",(0,a.kt)("a",{parentName:"p",href:"https://mac.getutm.app/"},"UTM , Virtual machines for Mac"),"\uc744 \uc124\uce58\ud558\uc5ec \uac00\uc0c1 \uba38\uc2e0\uc744 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.\n(\uc571\uc2a4\ud1a0\uc5b4\uc5d0\uc11c \uad6c\ub9e4\ud558\uc5ec \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 \uc77c\uc885\uc758 Donation \uac1c\ub150\uc758 \ube44\uc6a9 \uc9c0\ubd88\uc785\ub2c8\ub2e4. \ubb34\ub8cc \ubc84\uc804\uacfc \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8 \uc815\ub3c4\uc758 \ucc28\uc774\uac00 \uc788\uc5b4, \ubb34\ub8cc\ubc84\uc804\uc744 \uc0ac\uc6a9\ud574\ub3c4 \ubb34\ubc29\ud569\ub2c8\ub2e4.)\n\ud574\ub2f9 \uac00\uc0c1\uba38\uc2e0 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu 20.04.3 LTS")," \uc2e4\uc2b5 \uc6b4\uc601\uccb4\uc81c\ub97c \uc9c0\uc6d0\ud558\uace0 \uc788\uc5b4, M1 Mac\uc5d0\uc11c \uc2e4\uc2b5\uc744 \uc218\ud589\ud558\ub294 \uac83\uc744 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/introduction/component"},"MLOps\uc758 \uad6c\uc131\uc694\uc18c"),"\uc5d0\uc11c \uc124\uba85\ud558\ub294 \uc694\uc18c\ub4e4\uc744 \ubaa8\ub450 \uc0ac\uc6a9\ud574\ubcfc \uc218\ub294 \uc5c6\uae30\uc5d0, ",(0,a.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 \ub300\ud45c\uc801\uc778 \uc624\ud508\uc18c\uc2a4\ub9cc\uc744 \uc124\uce58\ud55c \ub4a4, \uc11c\ub85c \uc5f0\ub3d9\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc744 \uc8fc\ub85c \ub2e4\ub8f0 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c \uc124\uce58\ud558\ub294 \uc624\ud508\uc18c\uc2a4\uac00 \ud45c\uc900\uc744 \uc758\ubbf8\ud558\ub294 \uac83\uc740 \uc544\ub2c8\uba70, \uc5ec\ub7ec\ubd84\uc758 \uc0c1\ud669\uc5d0 \ub9de\uac8c \uc801\uc808\ud55c \ud234\uc744 \ucde8\uc0ac\uc120\ud0dd\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uad6c\uc131-\uc694\uc18c"},"\uad6c\uc131 \uc694\uc18c"),(0,a.kt)("p",null,"\uc774 \uae00\uc5d0\uc11c \ub9cc\ub4e4\uc5b4 \ubcfc MLOps \uc2dc\uc2a4\ud15c\uc758 \uad6c\uc131 \uc694\uc18c\ub4e4\uacfc \uac01 \ubc84\uc804\uc740 \uc544\ub798\uc640 \uac19\uc740 \ud658\uacbd\uc5d0\uc11c \uac80\uc99d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc6d0\ud65c\ud55c \ud658\uacbd\uc5d0\uc11c \ud14c\uc2a4\ud2b8\ud558\uae30 \uc704\ud574 ",(0,a.kt)("strong",{parentName:"p"},"\uc2f1\uae00 \ub178\ub4dc \ud074\ub7ec\uc2a4\ud130 (\ud639\uc740 \ud074\ub7ec\uc2a4\ud130)")," \uc640 ",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8"),"\ub97c \ubd84\ub9ac\ud558\uc5ec \uc124\uba85\ud574 \ub4dc\ub9b4 \uc608\uc815\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub7ec\uc2a4\ud130")," \ub294 \uc6b0\ubd84\ud22c\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ub370\uc2a4\ud06c\ud1b1 \ud558\ub098\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8")," \ub294 \ub178\ud2b8\ubd81 \ud639\uc740 \ud074\ub7ec\uc2a4\ud130\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ub370\uc2a4\ud06c\ud1b1 \uc678\uc758 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub2e4\ub978 \ub370\uc2a4\ud06c\ud1b1\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \ub450 \ub300\uc758 \uba38\uc2e0\uc744 \uc900\ube44\ud560 \uc218 \uc5c6\ub2e4\uba74 \ub370\uc2a4\ud06c\ud1b1 \ud558\ub098\ub97c \ub3d9\uc2dc\uc5d0 \ud074\ub7ec\uc2a4\ud130\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ud558\uc154\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\ud074\ub7ec\uc2a4\ud130"},"\ud074\ub7ec\uc2a4\ud130"),(0,a.kt)("h4",{id:"1-software"},"1. Software"),(0,a.kt)("p",null,"\uc544\ub798\ub294 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc124\uce58\ud574\uc57c \ud560 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Software"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,a.kt)("td",{parentName:"tr",align:null},"20.04.3 LTS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Docker (Server)"),(0,a.kt)("td",{parentName:"tr",align:null},"20.10.11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NVIDIA-Driver"),(0,a.kt)("td",{parentName:"tr",align:null},"470.86")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.21.7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kubeflow"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.4.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MLFlow"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.21.0")))),(0,a.kt)("h4",{id:"2-helm-chart"},"2. Helm Chart"),(0,a.kt)("p",null,"\uc544\ub798\ub294 Helm\uc744 \uc774\uc6a9\ud574 \uc124\uce58\ub418\uc5b4\uc57c \ud560 \uc368\ub4dc\ud30c\ud2f0 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Helm Chart Repo Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"datawire/ambassador"),(0,a.kt)("td",{parentName:"tr",align:null},"6.9.3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seldonio/seldon-core-operator"),(0,a.kt)("td",{parentName:"tr",align:null},"1.11.2")))),(0,a.kt)("h3",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8"},"\ud074\ub77c\uc774\uc5b8\ud2b8"),(0,a.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\ub294 MacOS (Intel CPU), Ubuntu 20.04 \uc5d0\uc11c \uac80\uc99d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Software"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubectl"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.21.7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"helm"),(0,a.kt)("td",{parentName:"tr",align:null},"v3.7.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kustomize"),(0,a.kt)("td",{parentName:"tr",align:null},"v3.10.0")))),(0,a.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,a.kt)("p",null,"\ubaa8\ub450\uc758 MLOps\ub97c \uc124\uce58\ud560 \ud074\ub7ec\uc2a4\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0ac\uc591\uc744 \ub9cc\uc871\uc2dc\ud0a4\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub294 Kubernetes \ubc0f Kubeflow \uc758 \uad8c\uc7a5 \uc0ac\uc591\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU : 6 core"),(0,a.kt)("li",{parentName:"ul"},"RAM : 12GB"),(0,a.kt)("li",{parentName:"ul"},"DISK : 50GB"),(0,a.kt)("li",{parentName:"ul"},"GPU : NVIDIA GPU (Optional)")))}d.isMDXComponent=!0}}]);