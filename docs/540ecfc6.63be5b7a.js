(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var o=n(3),i=n(7),r=(n(0),n(163)),a={title:"Timeouts",slug:"timeouts.html"},c={unversionedId:"framework/timeout",id:"framework/timeout",isDocsHomePage:!1,title:"Timeouts",description:"Tests have two types of timeout that can be applied. The first is the overall time for all invocations of a test. This is just called timeout.",source:"@site/docs/framework/timeout.md",slug:"/framework/timeouts.html",permalink:"/docs/framework/timeouts.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/timeout.md",version:"current",sidebar:"framework",previous:{title:"Test Factories",permalink:"/docs/framework/test-factories.html"}},s=[{value:"Test Level Timeouts",id:"test-level-timeouts",children:[]},{value:"Spec Level Timeouts",id:"spec-level-timeouts",children:[]},{value:"Global Timeouts",id:"global-timeouts",children:[{value:"System Property",id:"system-property",children:[]},{value:"Project Config",id:"project-config",children:[]}]}],l={rightToc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tests have two types of timeout that can be applied. The first is the overall time for all invocations of a test. This is just called ",Object(r.b)("em",{parentName:"p"},"timeout"),".\nThe second is per individual run of a test, and this is called ",Object(r.b)("em",{parentName:"p"},"invocation timeout"),"."),Object(r.b)("p",null,"Kotest can be configured to invoke a test multiple times. For example,"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("run me three times").config(invocations = 3) {\n            // some slow network test that takes 1500 millis\n        }\n   }\n\n})\n')),Object(r.b)("p",null,"In this case, a ",Object(r.b)("em",{parentName:"p"},"timeout")," of 2000 millis would cause the test to fail, because the total run time would be 4500 millis.\nWhereas an ",Object(r.b)("em",{parentName:"p"},"invocation timeout")," of 2000 millis would not cause the test to fail, because each individual run is 1500 millis."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The time taken for a test includes the execution time taken for nested tests, so factor this into your timeouts."))),Object(r.b)("p",null,"We can specify the timeout at three levels."),Object(r.b)("h2",{id:"test-level-timeouts"},"Test Level Timeouts"),Object(r.b)("p",null,"The most finely grained location for timeouts it on leaf tests directly."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class TimeoutTest : DescribeSpec({\n\n   describe("my test context") {\n        it("timeout after 750ms").config(timeout = 750.milliseconds, invocationTimeout = 250.milliseconds) {\n        }\n   }\n\n})\n')),Object(r.b)("h2",{id:"spec-level-timeouts"},"Spec Level Timeouts"),Object(r.b)("p",null,"Timeouts can be specified at the spec level for every test in that spec, unless overriden by the test case itself."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class TimeoutTest : DescribeSpec({\n\n   timeout = 1250.milliseconds\n\n   describe("I will timeout in 1250 millis") {\n      it("And so will I") { }\n      it("But I\'m a little faster").config(timeout = 500.milliseconds) { }\n   }\n\n})\n')),Object(r.b)("h2",{id:"global-timeouts"},"Global Timeouts"),Object(r.b)("p",null,"We can set global config in two ways - via system properties or by project config."),Object(r.b)("h3",{id:"system-property"},"System Property"),Object(r.b)("p",null,"To set the global timeout or invocation timeout at the command line, use the system property ",Object(r.b)("inlineCode",{parentName:"p"},"kotest.framework.timeout")," and ",Object(r.b)("inlineCode",{parentName:"p"},"kotest.framework.invocation.timeout")," with a value in milliseconds."),Object(r.b)("h3",{id:"project-config"},"Project Config"),Object(r.b)("p",null,"We can set a global default for both timeout and invocationTimeout inside ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),"object ProjectConfig : AbstractProjectConfig {\n    override val timeout = 2.seconds\n    override val invocationTimeout = 1.second\n}\n")),Object(r.b)("p",null,"Global config is overridden by spec level and test case level values."))}m.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,d=u["".concat(a,".").concat(p)]||u[p]||b[p]||r;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);