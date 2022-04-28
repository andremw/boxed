"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[109],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2250:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Nested optional values",sidebar_label:"Nested optional values"},p=void 0,u={unversionedId:"nested-optional-values",id:"nested-optional-values",title:"Nested optional values",description:"Managing optionality with undefined and null can lead to tedious code, especially when dealing with default values.",source:"@site/docs/nested-optional-values.md",sourceDirName:".",slug:"/nested-optional-values",permalink:"/boxed/nested-optional-values",editUrl:"https://github.com/swan-io/boxed/edit/main/docs/docs/nested-optional-values.md",tags:[],version:"current",frontMatter:{title:"Nested optional values",sidebar_label:"Nested optional values"},sidebar:"docs",previous:{title:"Form Validation",permalink:"/boxed/form-validation"},next:{title:"Cancellable Request",permalink:"/boxed/cancellable-request"}},s={},d=[],c={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Managing optionality with ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," can lead to tedious code, especially when dealing with default values."),(0,i.kt)("p",null,"Let's assume that we have the following values in scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare var input: string | undefined;\ndeclare function parseInput(input: string): Array<string>;\ndeclare function transform(input: Array<string>): Array<string> | undefined;\ndeclare function print(input: Array<string>): string;\ndeclare function prettify(input: string): string;\n")),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"parse")," always returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," can return either an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("p",null,"Handling this using ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," values would lead to code like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const parsed = input != undefined ? parseInput(input) : undefined;\n// Keep the `parsed` value if `transform` doesn\'t output\nconst transformed =\n  parsed != undefined ? transform(parsed) ?? parsed : undefined;\n// Fallback at the end\nconst printed = transformed != undefined ? print(transformed) : undefined;\nconst value = printed != undefined ? prettify(printed) : "fallback";\n')),(0,i.kt)("p",null,"We lose a lot of the code intent, as we're distracted with some unnecessary complexity."),(0,i.kt)("p",null,"Now, let's tweak our values so that we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," type instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare var input: Option<string>;\ndeclare function parseInput(input: string): Array<string>;\ndeclare function transform(input: Array<string>): Option<Array<string>>;\ndeclare function print(input: Array<string>): string;\ndeclare function prettify(input: string): string;\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"Option"),", the same code as above can be written as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'input\n  .map(parseInput)\n  .flatMap(transform)\n  .map(print)\n  .map(prettify)\n  .getWithDefault("fallback");\n')),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("strong",{parentName:"p"},"intent")," of the code is clearly represented, making it much easier to follow."),(0,i.kt)("p",null,"If we need quick interop with existing code returning ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," values, Boxed provides transformers:"),(0,i.kt)("p",null,"If we were to assume again that we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare var input: string | undefined;\ndeclare function parseInput(input: string): Array<string>;\ndeclare function transform(input: Array<string>): Array<string> | undefined;\ndeclare function print(input: Array<string>): string;\ndeclare function prettify(input: string): string;\n")),(0,i.kt)("p",null,"We'd simplfy need to write the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'Option.fromNullable(input)\n  .map(parseInput)\n  .flatMap((input) => Option.fromNullable(transform(input)))\n  .map(print)\n  .map(prettify)\n  .getWithDefault("fallback");\n')))}f.isMDXComponent=!0}}]);