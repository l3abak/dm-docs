(self.webpackChunkdevelopment_framework_docs=self.webpackChunkdevelopment_framework_docs||[]).push([[7576],{5852:(e,t,n)=>{"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(7294));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=90,s=219,u=222,d=192,p=100,f=3e3,m="navigator"in n.g&&/Win/i.test(navigator.platform),h="navigator"in n.g&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),g="npm__react-simple-code-editor__textarea",y=function(e){function t(){var e,n,o;i(this,t);for(var a=arguments.length,g=Array(a),y=0;y<a;y++)g[y]=arguments[y];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(g))),o.state={capture:!0},o._recordCurrentState=function(){var e=o._input;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;o._recordChange({value:t,selectionStart:n,selectionEnd:r})}},o._getLines=function(e,t){return e.substring(0,t).split("\n")},o._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o._history,a=n.stack,i=n.offset;if(a.length&&i>-1){o._history.stack=a.slice(0,i+1);var l=o._history.stack.length;if(l>p){var c=l-p;o._history.stack=a.slice(c,l),o._history.offset=Math.max(o._history.offset-c,0)}}var s=Date.now();if(t){var u=o._history.stack[o._history.offset];if(u&&s-u.timestamp<f){var d=/[^a-z0-9]([a-z0-9]+)$/i,m=o._getLines(u.value,u.selectionStart).pop().match(d),h=o._getLines(e.value,e.selectionStart).pop().match(d);if(m&&h&&h[1].startsWith(m[1]))return void(o._history.stack[o._history.offset]=r({},e,{timestamp:s}))}}o._history.stack.push(r({},e,{timestamp:s})),o._history.offset++},o._updateInput=function(e){var t=o._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,o.props.onValueChange(e.value))},o._applyEdits=function(e){var t=o._input,n=o._history.stack[o._history.offset];n&&t&&(o._history.stack[o._history.offset]=r({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),o._recordChange(e),o._updateInput(e)},o._undoEdit=function(){var e=o._history,t=e.stack,n=e.offset,r=t[n-1];r&&(o._updateInput(r),o._history.offset=Math.max(n-1,0))},o._redoEdit=function(){var e=o._history,t=e.stack,n=e.offset,r=t[n+1];r&&(o._updateInput(r),o._history.offset=Math.min(n+1,t.length-1))},o._handleKeyDown=function(e){var t=o.props,n=t.tabSize,r=t.insertSpaces,a=t.ignoreTabKey,i=t.onKeyDown;if(!i||(i(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var l=e.target,p=l.value,f=l.selectionStart,g=l.selectionEnd,y=(r?" ":"\t").repeat(n);if(9===e.keyCode&&!a&&o.state.capture)if(e.preventDefault(),e.shiftKey){var v=o._getLines(p,f),b=v.length-1,E=o._getLines(p,g).length-1,k=p.split("\n").map((function(e,t){return t>=b&&t<=E&&e.startsWith(y)?e.substring(y.length):e})).join("\n");if(p!==k){var _=v[b];o._applyEdits({value:k,selectionStart:_.startsWith(y)?f-y.length:f,selectionEnd:g-(p.length-k.length)})}}else if(f!==g){var C=o._getLines(p,f),S=C.length-1,x=o._getLines(p,g).length-1,w=C[S];o._applyEdits({value:p.split("\n").map((function(e,t){return t>=S&&t<=x?y+e:e})).join("\n"),selectionStart:/\S/.test(w)?f+y.length:f,selectionEnd:g+y.length*(x-S+1)})}else{var N=f+y.length;o._applyEdits({value:p.substring(0,f)+y+p.substring(g),selectionStart:N,selectionEnd:N})}else if(8===e.keyCode){var L=f!==g;if(p.substring(0,f).endsWith(y)&&!L){e.preventDefault();var O=f-y.length;o._applyEdits({value:p.substring(0,f-y.length)+p.substring(g),selectionStart:O,selectionEnd:O})}}else if(13===e.keyCode){if(f===g){var j=o._getLines(p,f).pop().match(/^\s+/);if(j&&j[0]){e.preventDefault();var B="\n"+j[0],Z=f+B.length;o._applyEdits({value:p.substring(0,f)+B+p.substring(g),selectionStart:Z,selectionEnd:Z})}}}else if(57===e.keyCode||e.keyCode===s||e.keyCode===u||e.keyCode===d){var I=void 0;57===e.keyCode&&e.shiftKey?I=["(",")"]:e.keyCode===s?I=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===u?I=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==d||e.shiftKey||(I=["`","`"]),f!==g&&I&&(e.preventDefault(),o._applyEdits({value:p.substring(0,f)+I[0]+p.substring(f,g)+I[1]+p.substring(g),selectionStart:f,selectionEnd:g+2}))}else!(h?e.metaKey&&e.keyCode===c:e.ctrlKey&&e.keyCode===c)||e.shiftKey||e.altKey?(h?e.metaKey&&e.keyCode===c&&e.shiftKey:m?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===c&&e.shiftKey)&&!e.altKey?(e.preventDefault(),o._redoEdit()):77!==e.keyCode||!e.ctrlKey||h&&!e.shiftKey||(e.preventDefault(),o.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),o._undoEdit())}},o._handleChange=function(e){var t=e.target,n=t.value,r=t.selectionStart,a=t.selectionEnd;o._recordChange({value:n,selectionStart:r,selectionEnd:a},!0),o.props.onValueChange(n)},o._history={stack:[],offset:-1},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.style,i=t.padding,l=t.highlight,c=t.textareaId,s=t.autoFocus,u=t.disabled,d=t.form,p=t.maxLength,f=t.minLength,m=t.name,h=t.placeholder,y=t.readOnly,b=t.required,E=t.onClick,k=t.onFocus,_=t.onBlur,C=t.onKeyUp,S=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["value","style","padding","highlight","textareaId","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey"])),x={paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i},w=l(n);return a.createElement("div",r({},S,{style:r({},v.container,o)}),a.createElement("textarea",{ref:function(t){return e._input=t},style:r({},v.editor,v.textarea,x),className:g,id:c,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:E,onKeyUp:C,onFocus:k,onBlur:_,disabled:u,form:d,maxLength:p,minLength:f,name:m,placeholder:h,readOnly:y,required:b,autoFocus:s,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),a.createElement("pre",r({"aria-hidden":"true",style:r({},v.editor,v.highlight,x)},"string"==typeof w?{dangerouslySetInnerHTML:{__html:w+"<br />"}}:{children:w})),a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(a.Component);y.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.Z=y;var v={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7462),o=n(7294),a=n(6010),i=n(5999),l=n(6668);const c="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",d?s:c),id:n}),u.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},u,{id:void 0}))}},1485:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Fe});var r=n(7294),o=n(3905),a=n(7462),i=n(5742);var l=n(6010),c=n(2389),s=n(5852),u=n(3746),d=n(7410),p=n(2065),f=n(1632),m=n.n(f),h={plain:{color:"#C5C8C6",backgroundColor:"#1D1F21"},styles:[{types:["prolog","comment","doctype","cdata"],style:{color:"hsl(30, 20%, 50%)"}},{types:["property","tag","boolean","number","constant","symbol"],style:{color:"hsl(350, 40%, 70%)"}},{types:["attr-name","string","char","builtin","insterted"],style:{color:"hsl(75, 70%, 60%)"}},{types:["operator","entity","url","string","variable","language-css"],style:{color:"hsl(40, 90%, 60%)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["regex","important"],style:{color:"#e90"}},{types:["atrule","attr-value","keyword"],style:{color:"hsl(350, 40%, 70%)"}},{types:["punctuation","symbol"],style:{opacity:"0.7"}}]},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},E=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},k=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){function t(){var n,o;y(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=o=k(this,e.call.apply(e,[this].concat(i))),o.state={code:""},o.updateContent=function(e){o.setState({code:e},(function(){o.props.onChange&&o.props.onChange(o.state.code)}))},o.highlightCode=function(e){return r.createElement(u.ZP,{Prism:d.Z,code:e,theme:o.props.theme||h,language:o.props.language},(function(e){var t=e.tokens,n=e.getLineProps,o=e.getTokenProps;return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement("div",n({line:e,key:t}),e.map((function(e,t){return r.createElement("span",o({token:e,key:t}))})))})))}))},k(o,n)}return b(t,e),t.getDerivedStateFromProps=function(e,t){return e.code!==t.prevCodeProp?{code:e.code,prevCodeProp:e.code}:null},t.prototype.render=function(){var e=this.props,t=e.style,n=(e.code,e.onChange,e.language,e.theme),o=E(e,["style","code","onChange","language","theme"]),a=this.state.code,i=n&&"object"===g(n.plain)?n.plain:{};return r.createElement(s.Z,v({value:a,padding:10,highlight:this.highlightCode,onValueChange:this.updateContent,style:v({whiteSpace:"pre",fontFamily:"monospace"},i,t)},o))},t}(r.Component),C=(0,r.createContext)({}),S={assign:m()},x={objectAssign:"_poly.assign",transforms:{dangerousForOf:!0,dangerousTaggedTemplateString:!0}},w=function(e){return(0,p.v)(e,x).code},N=function(e,t){return function(n){function o(){return y(this,o),k(this,n.apply(this,arguments))}return b(o,n),o.prototype.componentDidCatch=function(e){t(e)},o.prototype.render=function(){return"function"==typeof e?r.createElement(e,null):e},o}(r.Component)},L=function(e,t){var n=Object.keys(t),o=n.map((function(e){return t[e]}));return(new(Function.prototype.bind.apply(Function,[null].concat(["_poly","React"],n,[e])))).apply(void 0,[S,r].concat(o))},O=function(e,t){var n=e.code,r=void 0===n?"":n,o=e.scope,a=void 0===o?{}:o,i=r.trim().replace(/;$/,""),l=w("return ("+i+")").trim();return N(L(l,a),t)},j=function(e,t,n){var r=e.code,o=void 0===r?"":r,a=e.scope,i=void 0===a?{}:a;if(!/render\s*\(/.test(o))return n(new SyntaxError("No-Inline evaluations must call `render`."));L(w(o),v({},i,{render:function(e){void 0===e?n(new SyntaxError("`render` must be called with valid JSX.")):t(N(e,n))}}))},B=function(e){function t(){var n,r;y(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=k(this,e.call.apply(e,[this].concat(a))),r.onChange=function(e){var t=r.props,n=t.scope,o=t.transformCode,a=t.noInline;r.transpile({code:e,scope:n,transformCode:o,noInline:a})},r.onError=function(e){r.setState({error:e.toString()})},r.transpile=function(e){var t=e.code,n=e.scope,o=e.transformCode,a=e.noInline,i=void 0!==a&&a,l={code:o?o(t):t,scope:n},c=function(e){return r.setState({element:void 0,error:e.toString()})},s=function(e){return r.setState(v({},u,{element:e}))},u={unsafeWrapperError:void 0,error:void 0};try{i?(r.setState(v({},u,{element:null})),j(l,s,c)):s(O(l,c))}catch(d){r.setState(v({},u,{error:d.toString()}))}},k(r,n)}return b(t,e),t.prototype.UNSAFE_componentWillMount=function(){var e=this.props,t=e.code,n=e.scope,r=e.transformCode,o=e.noInline;this.transpile({code:t,scope:n,transformCode:r,noInline:o})},t.prototype.componentDidUpdate=function(e){var t=e.code,n=e.scope,r=e.noInline,o=e.transformCode,a=this.props,i=a.code,l=a.scope,c=a.noInline,s=a.transformCode;i===t&&l===n&&c===r&&s===o||this.transpile({code:i,scope:l,transformCode:s,noInline:c})},t.prototype.render=function(){var e=this.props,t=e.children,n=e.code,o=e.language,a=e.theme,i=e.disabled;return r.createElement(C.Provider,{value:v({},this.state,{code:n,language:o,theme:a,disabled:i,onError:this.onError,onChange:this.onChange})},t)},t}(r.Component);function Z(e){return r.createElement(C.Consumer,null,(function(t){var n=t.code,o=t.language,a=t.theme,i=t.disabled,l=t.onChange;return r.createElement(_,v({theme:a,code:n,language:o,disabled:i,onChange:l},e))}))}function I(e){return r.createElement(C.Consumer,null,(function(t){var n=t.error;return n?r.createElement("pre",e,n):null}))}function T(e){var t=e.Component,n=E(e,["Component"]);return r.createElement(t,n,r.createElement(C.Consumer,null,(function(e){var t=e.element;return t&&r.createElement(t,null)})))}B.defaultProps={code:"",noInline:!1,language:"jsx",disabled:!1},T.defaultProps={Component:"div"};var P=n(5999),H=n(2263);function M(e){let{children:t,fallback:n}=e;return(0,c.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):n??null}var A=n(2949),F=n(6668);function K(){const{prism:e}=(0,F.L)(),{colorMode:t}=(0,A.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}const D="playgroundContainer_X_Ta",z="playgroundHeader_dyrN",W="playgroundEditor_Q6Y7",R="playgroundPreview_DzOI";function V(e){let{children:t}=e;return r.createElement("div",{className:(0,l.Z)(z)},t)}function $(){return r.createElement("div",null,"Loading...")}function q(){return r.createElement(r.Fragment,null,r.createElement(V,null,r.createElement(P.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:R},r.createElement(M,{fallback:r.createElement($,null)},(()=>r.createElement(r.Fragment,null,r.createElement(T,null),r.createElement(I,null))))))}function U(){const e=(0,c.Z)();return r.createElement(Z,{key:String(e),className:W})}function G(){return r.createElement(r.Fragment,null,r.createElement(V,null,r.createElement(P.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(U,null))}function Y(e){var t;let{children:n,transformCode:o,...i}=e;const{siteConfig:{themeConfig:l}}=(0,H.Z)(),{liveCodeBlock:{playgroundPosition:c}}=l,s=K(),u=(null==(t=i.metastring)?void 0:t.includes("noInline"))??!1;return r.createElement("div",{className:D},r.createElement(B,(0,a.Z)({code:n.replace(/\n$/,""),noInline:u,transformCode:o??(e=>`${e};`),theme:s},i),"top"===c?r.createElement(r.Fragment,null,r.createElement(q,null),r.createElement(G,null)):r.createElement(r.Fragment,null,r.createElement(G,null),r.createElement(q,null))))}var X=n(6922),J=n(5281),Q=n(7594),ee=n.n(Q);const te=/title=(?<quote>["'])(?<title>.*?)\1/,ne=/\{(?<range>[\d,-]+)\}/,re={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function oe(e,t){const n=e.map((e=>{const{start:n,end:r}=re[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function ae(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&ne.test(a)){const e=a.match(ne).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=ee()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return oe(["js","jsBlock"],t);case"jsx":case"tsx":return oe(["js","jsBlock","jsx"],t);case"html":return oe(["js","jsBlock","html"],t);case"python":case"py":case"bash":return oe(["bash"],t);case"markdown":case"md":return oe(["html","jsx","bash"],t);default:return oe(Object.keys(re),t)}}(r,o),l=n.split("\n"),c=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let f=0;f<l.length;){const e=l[f].match(i);if(!e){f+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?c[s[t]].range+=`${f},`:u[t]?c[u[t]].start=f:d[t]&&(c[d[t]].range+=`${c[d[t]].start}-${f-1},`),l.splice(f,1)}n=l.join("\n");const p={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;ee()(n).forEach((e=>{p[e]??=[],p[e].push(t)}))})),{lineClassNames:p,code:n}}const ie="codeBlockContainer_Ckt0";function le(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(K());return r.createElement(t,(0,a.Z)({},n,{style:o,className:(0,l.Z)(n.className,ie,J.k.common.codeBlock)}))}const ce={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function se(e){let{children:t,className:n}=e;return r.createElement(le,{as:"pre",tabIndex:0,className:(0,l.Z)(ce.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:ce.codeBlockLines},t))}var ue=n(902);const de={attributes:!0,characterData:!0,childList:!0,subtree:!0};function pe(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=de);const o=(0,ue.zX)(t),a=(0,ue.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const fe="codeLine_lJS_",me="codeLineNumber_Tfdd",he="codeLineContent_feaV";function ge(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:i,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=i({line:t,className:(0,l.Z)(n,o&&fe)}),u=t.map(((e,t)=>r.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))));return r.createElement("span",s,o?r.createElement(r.Fragment,null,r.createElement("span",{className:me}),r.createElement("span",{className:he},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}const ye={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function ve(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),i=(0,r.useRef)(void 0),c=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection();let i=!1;a.rangeCount>0&&(i=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}r.remove(),i&&(a.removeAllRanges(),a.addRange(i)),o&&o.focus()}(t),a(!0),i.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,P.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,P.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,P.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,ye.copyButton,o&&ye.copyButtonCopied),onClick:c},r.createElement("span",{className:ye.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:ye.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:ye.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const be="wordWrapButtonIcon_Bwma",Ee="wordWrapButtonEnabled_EoeP";function ke(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,P.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&Ee),"aria-label":a,title:a},r.createElement("svg",{className:be,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function _e(e){let{children:t,className:n="",metastring:o,title:i,showLineNumbers:c,language:s}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,F.L)(),f=s??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??d,m=K(),h=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return pe(a,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:i}}(),g=function(e){var t;return(null==e||null==(t=e.match(te))?void 0:t.groups.title)??""}(o)||i,{lineClassNames:y,code:v}=ae(t,{metastring:o,language:f,magicComments:p}),b=c??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return r.createElement(le,{as:"div",className:(0,l.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},g&&r.createElement("div",{className:ce.codeBlockTitle},g),r.createElement("div",{className:ce.codeBlockContent},r.createElement(u.ZP,(0,a.Z)({},u.lG,{theme:m,code:v,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,l.Z)(t,ce.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(ce.codeBlockLines,b&&ce.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(ge,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:y[t],showLineNumbers:b})))))})),r.createElement("div",{className:ce.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&r.createElement(ke,{className:ce.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),r.createElement(ve,{className:ce.codeButton,code:v}))))}const Ce=(e=>function(t){return t.live?r.createElement(Y,(0,a.Z)({scope:X.Z},t)):r.createElement(e,t)})((function(e){let{children:t,...n}=e;const o=(0,c.Z)(),i=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof i?_e:se;return r.createElement(l,(0,a.Z)({key:String(o)},n),i)}));var Se=n(9960);var xe=n(6043);const we="details_lb9f",Ne="isBrowser_bmU9",Le="collapsibleContent_i85q";function Oe(e){return!!e&&("SUMMARY"===e.tagName||Oe(e.parentElement))}function je(e,t){return!!e&&(e===t||je(e.parentElement,t))}function Be(e){let{summary:t,children:n,...o}=e;const i=(0,c.Z)(),s=(0,r.useRef)(null),{collapsed:u,setCollapsed:d}=(0,xe.u)({initialState:!o.open}),[p,f]=(0,r.useState)(o.open);return r.createElement("details",(0,a.Z)({},o,{ref:s,open:p,"data-collapsed":u,className:(0,l.Z)(we,i&&Ne,o.className),onMouseDown:e=>{Oe(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Oe(t)&&je(t,s.current)&&(e.preventDefault(),u?(d(!1),f(!0)):d(!0))}}),t??r.createElement("summary",null,"Details"),r.createElement(xe.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),f(!e)}},r.createElement("div",{className:Le},n)))}const Ze="details_b_Ee";function Ie(e){let{...t}=e;return r.createElement(Be,(0,a.Z)({},t,{className:(0,l.Z)("alert alert--info",Ze,t.className)}))}var Te=n(2503);function Pe(e){return r.createElement(Te.Z,e)}const He="containsTaskList_mC6p";const Me="img_ev3q";const Ae={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(i.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(Ce,e)},a:function(e){return r.createElement(Se.Z,e)},pre:function(e){var t;return r.createElement(Ce,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(Ie,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,l.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&He))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,Me))}));var t},h1:e=>r.createElement(Pe,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(Pe,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(Pe,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(Pe,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(Pe,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(Pe,(0,a.Z)({as:"h6"},e)),admonition:n(3612).Z};function Fe(e){let{children:t}=e;return r.createElement(o.Zo,{components:Ae},t)}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7462),o=n(7294),a=n(6010),i=n(3743);const l="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar",t)},o.createElement(i.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(7462),o=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>c(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=s(l,{anchorTopOffset:n.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const f=o.memo(p);function m(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:p,...m}=e;const h=(0,a.L)(),g=u??h.tableOfContents.minHeadingLevel,y=p??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:g,maxHeadingLevel:y});return d((0,o.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:y}}),[c,s,g,y])),o.createElement(f,(0,r.Z)({toc:v,className:n,linkClassName:c},m))}},1632:(e,t,n)=>{n(5115),e.exports=n(5645).Object.assign},4963:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},7007:(e,t,n)=>{var r=n(5286);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},9315:(e,t,n)=>{var r=n(2110),o=n(875),a=n(2337);e.exports=function(e){return function(t,n,i){var l,c=r(t),s=o(c.length),u=a(i,s);if(e&&n!=n){for(;s>u;)if((l=c[u++])!=l)return!0}else for(;s>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}}},2032:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},5645:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},741:(e,t,n)=>{var r=n(4963);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},1355:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},7057:(e,t,n)=>{e.exports=!n(4253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2457:(e,t,n)=>{var r=n(5286),o=n(3816).document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},4430:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},2985:(e,t,n)=>{var r=n(3816),o=n(5645),a=n(7728),i=n(7234),l=n(741),c=function(e,t,n){var s,u,d,p,f=e&c.F,m=e&c.G,h=e&c.S,g=e&c.P,y=e&c.B,v=m?r:h?r[t]||(r[t]={}):(r[t]||{}).prototype,b=m?o:o[t]||(o[t]={}),E=b.prototype||(b.prototype={});for(s in m&&(n=t),n)d=((u=!f&&v&&void 0!==v[s])?v:n)[s],p=y&&u?l(d,r):g&&"function"==typeof d?l(Function.call,d):d,v&&i(v,s,d,e&c.U),b[s]!=d&&a(b,s,p),g&&E[s]!=d&&(E[s]=d)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},4253:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},18:(e,t,n)=>{e.exports=n(3825)("native-function-to-string",Function.toString)},3816:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},9181:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},7728:(e,t,n)=>{var r=n(9275),o=n(681);e.exports=n(7057)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},1734:(e,t,n)=>{e.exports=!n(7057)&&!n(4253)((function(){return 7!=Object.defineProperty(n(2457)("div"),"a",{get:function(){return 7}}).a}))},9797:(e,t,n)=>{var r=n(2032);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},5286:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},4461:e=>{e.exports=!1},5345:(e,t,n)=>{"use strict";var r=n(7057),o=n(7184),a=n(4548),i=n(4682),l=n(508),c=n(9797),s=Object.assign;e.exports=!s||n(4253)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=r}))?function(e,t){for(var n=l(e),s=arguments.length,u=1,d=a.f,p=i.f;s>u;)for(var f,m=c(arguments[u++]),h=d?o(m).concat(d(m)):o(m),g=h.length,y=0;g>y;)f=h[y++],r&&!p.call(m,f)||(n[f]=m[f]);return n}:s},9275:(e,t,n)=>{var r=n(7007),o=n(1734),a=n(1689),i=Object.defineProperty;t.f=n(7057)?Object.defineProperty:function(e,t,n){if(r(e),t=a(t,!0),r(n),o)try{return i(e,t,n)}catch(l){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},4548:(e,t)=>{t.f=Object.getOwnPropertySymbols},189:(e,t,n)=>{var r=n(9181),o=n(2110),a=n(9315)(!1),i=n(9335)("IE_PROTO");e.exports=function(e,t){var n,l=o(e),c=0,s=[];for(n in l)n!=i&&r(l,n)&&s.push(n);for(;t.length>c;)r(l,n=t[c++])&&(~a(s,n)||s.push(n));return s}},7184:(e,t,n)=>{var r=n(189),o=n(4430);e.exports=Object.keys||function(e){return r(e,o)}},4682:(e,t)=>{t.f={}.propertyIsEnumerable},681:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7234:(e,t,n)=>{var r=n(3816),o=n(7728),a=n(9181),i=n(3953)("src"),l=n(18),c="toString",s=(""+l).split(c);n(5645).inspectSource=function(e){return l.call(e)},(e.exports=function(e,t,n,l){var c="function"==typeof n;c&&(a(n,"name")||o(n,"name",t)),e[t]!==n&&(c&&(a(n,i)||o(n,i,e[t]?""+e[t]:s.join(String(t)))),e===r?e[t]=n:l?e[t]?e[t]=n:o(e,t,n):(delete e[t],o(e,t,n)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[i]||l.call(this)}))},9335:(e,t,n)=>{var r=n(3825)("keys"),o=n(3953);e.exports=function(e){return r[e]||(r[e]=o(e))}},3825:(e,t,n)=>{var r=n(5645),o=n(3816),a="__core-js_shared__",i=o[a]||(o[a]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(4461)?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},2337:(e,t,n)=>{var r=n(1467),o=Math.max,a=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):a(e,t)}},1467:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},2110:(e,t,n)=>{var r=n(9797),o=n(1355);e.exports=function(e){return r(o(e))}},875:(e,t,n)=>{var r=n(1467),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},508:(e,t,n)=>{var r=n(1355);e.exports=function(e){return Object(r(e))}},1689:(e,t,n)=>{var r=n(5286);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},3953:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},5115:(e,t,n)=>{var r=n(2985);r(r.S+r.F,"Object",{assign:n(5345)})},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);