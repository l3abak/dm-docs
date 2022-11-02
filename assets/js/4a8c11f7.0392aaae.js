"use strict";(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[2837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,p(p({ref:t},c),{},{components:n})):a.createElement(h,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},p="Application development",o={unversionedId:"guides/application-development",id:"guides/application-development",title:"Application development",description:"Prerequisite",source:"@site/docs/guides/application-development.md",sourceDirName:"guides",slug:"/guides/application-development",permalink:"/dm-docs/docs/guides/application-development",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/dm-docs/docs/guides/"},next:{title:"Plugin development",permalink:"/dm-docs/docs/guides/plugin-development"}},l={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Create a new app",id:"create-a-new-app",level:2},{value:"Running the app",id:"running-the-app",level:2},{value:"Configure the app",id:"configure-the-app",level:2},{value:"Extending the app",id:"extending-the-app",level:2},{value:"Adding a UI plugin",id:"adding-a-ui-plugin",level:3},{value:"Adding a job handler",id:"adding-a-job-handler",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-development"},"Application development"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node (> 16+)"),(0,r.kt)("li",{parentName:"ul"},"Docker (> 20+)"),(0,r.kt)("li",{parentName:"ul"},"Docker-compose (> 2.11+)"),(0,r.kt)("li",{parentName:"ul"},"Python (> 3.8)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/equinor/dm-cli"},"dm-cli"))),(0,r.kt)("h2",{id:"create-a-new-app"},"Create a new app"),(0,r.kt)("p",null,"To initialize an app, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"create-dm-app")," tool. "),(0,r.kt)("p",null,"Create an app by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx @development-framework/create-dm-app my-app\ncd my-app\nnpm start\n")),(0,r.kt)("p",null,"This will create a React frontend that you can connect with any Data Modelling Storage Service (DMSS) instance you want. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Under the hood, it uses Create React App, but you don\u2019t need to know anything about them.")),(0,r.kt)("h2",{id:"running-the-app"},"Running the app"),(0,r.kt)("p",null,"To run dependent services locally you can use the included ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file. This file includes databases, DMSS service, and job service. "),(0,r.kt)("p",null,"Start services by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose up\n")),(0,r.kt)("p",null,"To start the app development server, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm start\n")),(0,r.kt)("p",null,"This will open the app at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),"."),(0,r.kt)("p",null,"To populate DMSS, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Core data\ndocker compose run --rm dmss reset-app\n# Job data \ndocker compose run --rm job-api dm reset app\n# App-specific data\ndm reset app\n")),(0,r.kt)("p",null,"This must be done every time a modification is done in any file related to a service."),(0,r.kt)("h2",{id:"configure-the-app"},"Configure the app"),(0,r.kt)("p",null,"This template uses an application entity to control the behavior of the app. "),(0,r.kt)("p",null,"This entity can be seen at ",(0,r.kt)("inlineCode",{parentName:"p"},"app/data/DemoApplicationDataSource/instances/demoApplication.json"),". "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app-settings.json")," points to this application entity, which will be loaded and used to select UI plugin to be shown."),(0,r.kt)("p",null,"The UI plugin is defined in the application blueprint, which can be seen at ",(0,r.kt)("inlineCode",{parentName:"p"},"app/data/DemoApplicationDataSource/models/DemoApplication.json")),(0,r.kt)("p",null,"URLs to external services are defined by environment variables in the start and build scripts inside ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("h2",{id:"extending-the-app"},"Extending the app"),(0,r.kt)("h3",{id:"adding-a-ui-plugin"},"Adding a UI plugin"),(0,r.kt)("h3",{id:"adding-a-job-handler"},"Adding a job handler"),(0,r.kt)("p",null,"To add a job handler, follow the guide at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/equinor/dm-job#job-handler-plugins"},"dm-job"),"."))}u.isMDXComponent=!0}}]);