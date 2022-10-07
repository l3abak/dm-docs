"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={title:"Initial Setup",sidebar_position:1},i=void 0,o={unversionedId:"guides/development/initial-setup",id:"guides/development/initial-setup",title:"Initial Setup",description:"Init a new instance",source:"@site/docs/guides/development/initial-setup.md",sourceDirName:"guides/development",slug:"/guides/development/initial-setup",permalink:"/dm-docs/docs/guides/development/initial-setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Initial Setup",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core development",permalink:"/dm-docs/docs/guides/development/"},next:{title:"Running",permalink:"/dm-docs/docs/guides/development/running"}},s={},p=[{value:"Init a new instance",id:"init-a-new-instance",level:2},{value:"Install pre-commit",id:"install-pre-commit",level:2},{value:"Setup API",id:"setup-api",level:2},{value:"Create virtualenv",id:"create-virtualenv",level:3},{value:"Activate virtualenv",id:"activate-virtualenv",level:3},{value:"Install Poetry",id:"install-poetry",level:3},{value:"Install packages",id:"install-packages",level:3},{value:"Setup Web",id:"setup-web",level:2},{value:"Install Yarn",id:"install-yarn",level:3},{value:"Install packages",id:"install-packages-1",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"init-a-new-instance"},"Init a new instance"),(0,l.kt)("p",null,"Clone the ",(0,l.kt)("strong",{parentName:"p"},"data modelling docs")," repository."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:equinor/dm-docs.git\n")),(0,l.kt)("h2",{id:"install-pre-commit"},"Install pre-commit"),(0,l.kt)("p",null,"When contributing to this project, pre-commit is necessary, as it runs certain tests, sanitisers, and formatters."),(0,l.kt)("p",null,"The project provides a ",(0,l.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," file that is used to setup git ",(0,l.kt)("em",{parentName:"p"},"pre-commit hooks"),"."),(0,l.kt)("p",null,"On commit locally, code is automatically formatted, checked for security vulnerabilities using pre-commit git hooks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pre-commit install\n")),(0,l.kt)("p",null,"This tell pre-commit to always run for this repository on every commit."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Pre-commit will run on every commit, but can also be run manually on all files:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pre-commit run --all-files\n")),(0,l.kt)("p",{parentName:"admonition"},"Or be skipped:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git commit --no-verify \n"))),(0,l.kt)("h2",{id:"setup-api"},"Setup API"),(0,l.kt)("p",null,"From inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"/api")," folder."),(0,l.kt)("h3",{id:"create-virtualenv"},"Create virtualenv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m venv .venv\n")),(0,l.kt)("p",null,"Virtual environment is used for running unit tests with pre-commit and upgrade packages. "),(0,l.kt)("p",null,"It also can be used to run the application if you not are using Docker."),(0,l.kt)("h3",{id:"activate-virtualenv"},"Activate virtualenv"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ source .venv/bin/activate\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ .\\venv\\Scripts\\Activate.ps1\n$ pip install --upgrade pip\n"))),(0,l.kt)("h3",{id:"install-poetry"},"Install Poetry"),(0,l.kt)("p",null,"Poetry is used to manage Python package dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install poetry\n# Do not create virtual environments\n$ poetry config virtualenvs.create false  \n")),(0,l.kt)("p",null,"The installation instructions for Poetry can be found ",(0,l.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/#installation"},"here"),"."),(0,l.kt)("h3",{id:"install-packages"},"Install packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry install\n")),(0,l.kt)("h2",{id:"setup-web"},"Setup Web"),(0,l.kt)("p",null,"From inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"/web")," folder."),(0,l.kt)("h3",{id:"install-yarn"},"Install Yarn"),(0,l.kt)("p",null,"This project uses yarn to manage web package dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g yarn\n")),(0,l.kt)("p",null,"The installation instructions can be found ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install"},"here"),"."),(0,l.kt)("h3",{id:"install-packages-1"},"Install packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")))}u.isMDXComponent=!0}}]);