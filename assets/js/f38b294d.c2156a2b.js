"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[235],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2815:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Serializer",sidebar_label:"Serializer"},c=void 0,p={unversionedId:"serializer",id:"serializer",isDocsHomePage:!1,title:"Serializer",description:"The serializer enables you to serialize some Boxed values (e.g. to store in LocalStorage).",source:"@site/docs/serializer.md",sourceDirName:".",slug:"/serializer",permalink:"/boxed/serializer",editUrl:"https://github.com/bloodyowl/rescript-test/edit/main/docs/docs/serializer.md",version:"current",frontMatter:{title:"Serializer",sidebar_label:"Serializer"},sidebar:"docs",previous:{title:"Lazy",permalink:"/boxed/lazy"},next:{title:"React Request",permalink:"/boxed/react-request"}},u=[{value:"Serializer.encode(value)",id:"serializerencodevalue",children:[]},{value:"Serializer.decode(value)",id:"serializerdecodevalue",children:[]}],s={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The serializer enables you to serialize some Boxed values (e.g. to store in ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalStorage"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Serializer } from "@swan-io/boxed";\n')),(0,i.kt)("h2",{id:"serializerencodevalue"},"Serializer.encode(value)"),(0,i.kt)("p",null,"Stringifies the input to JSON, managing the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncData"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," types properly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'Serializer.encode({\n  data: AsyncData.Done({\n    name: Option.None(),\n  }),\n});\n// {"data":{"__boxed_type":"AsyncData","tag":"Done","value":{"name":{"__boxed_type": "Option","tag":"None"}}}}\n')),(0,i.kt)("h2",{id:"serializerdecodevalue"},"Serializer.decode(value)"),(0,i.kt)("p",null,"Parse the JSON input, reviving the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncData"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," types properly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'Serializer.decode(`{"__boxed_type": "Option","tag":"None"}`); // Option.None();\n')))}d.isMDXComponent=!0}}]);