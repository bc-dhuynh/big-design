(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/XES":function(t,e,n){"use strict";var o=n("45mK"),r=n.n(o),i=n("Gozm"),c=n.n(i);function a(t){return(a="function"===typeof c.a&&"symbol"===typeof r.a?function(t){return typeof t}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":typeof t})(t)}function u(t){return(u="function"===typeof c.a&&"symbol"===a(r.a)?function(t){return a(t)}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":a(t)})(t)}function s(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return s}))},"/r3m":function(t,e,n){"use strict";var o=n("S7IX")(!0);n("S49y")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},"/zo1":function(t,e,n){var o=n("IFjL");o(o.S,"Object",{setPrototypeOf:n("Eqmn").set})},"45mK":function(t,e,n){t.exports=n("6XsV")},"4iaB":function(t,e,n){n("nX7j");var o=n("rFq9").Object;t.exports=function(t,e){return o.create(t,e)}},"5KiJ":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/GettingStarted/GettingStartedPage",function(){return n("hZl/")}])},"6XsV":function(t,e,n){n("/r3m"),n("Fk9O"),t.exports=n("dWcX").f("iterator")},Eqmn:function(t,e,n){var o=n("vbc5"),r=n("8fQz"),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n("dWRk")(Function.call,n("VeTy").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},Fayl:function(t,e,n){"use strict";var o=n("Tqks"),r=n.n(o),i=n("U9rZ"),c=n.n(i);function a(t,e){return(a=c.a||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=r()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return u}))},Fk9O:function(t,e,n){n("j/aJ");for(var o=n("hR4s"),r=n("b95h"),i=n("tReM"),c=n("eD9m")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var s=a[u],l=o[s],p=l&&l.prototype;p&&!p[c]&&r(p,c,s),i[s]=i.Array}},Gozm:function(t,e,n){t.exports=n("IkCb")},IkCb:function(t,e,n){n("CrJZ"),n("dUHx"),n("PkSp"),n("zZTv"),t.exports=n("rFq9").Symbol},MIMp:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},OoA2:function(t,e,n){n("/zo1"),t.exports=n("rFq9").Object.setPrototypeOf},PkSp:function(t,e,n){n("9YHp")("asyncIterator")},S49y:function(t,e,n){"use strict";var o=n("UtsQ"),r=n("IFjL"),i=n("Eolq"),c=n("b95h"),a=n("tReM"),u=n("zjfI"),s=n("KnMe"),l=n("ax0Y"),p=n("eD9m")("iterator"),f=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,h,g,d,y){u(n,e,h);var b,v,x,S=function(t){if(!f&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",_="values"==g,L=!1,w=t.prototype,j=w[p]||w["@@iterator"]||g&&w[g],O=j||S(g),I=g?_?S("entries"):O:void 0,T="Array"==e&&w.entries||j;if(T&&(x=l(T.call(new t)))!==Object.prototype&&x.next&&(s(x,k,!0),o||"function"==typeof x[p]||c(x,p,m)),_&&j&&"values"!==j.name&&(L=!0,O=function(){return j.call(this)}),o&&!y||!f&&!L&&w[p]||c(w,p,O),a[e]=O,a[k]=m,g)if(b={values:_?O:S("values"),keys:d?O:S("keys"),entries:I},y)for(v in b)v in w||i(w,v,b[v]);else r(r.P+r.F*(f||L),e,b);return b}},S7IX:function(t,e,n){var o=n("Jo0e"),r=n("rU52");t.exports=function(t){return function(e,n){var i,c,a=String(r(e)),u=o(n),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}}},Tqks:function(t,e,n){t.exports=n("4iaB")},U9rZ:function(t,e,n){t.exports=n("OoA2")},ax0Y:function(t,e,n){var o=n("YVtA"),r=n("MrWc"),i=n("ubhL")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},dUHx:function(t,e){},h7sq:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},"hZl/":function(t,e,n){"use strict";n.r(e);var o=n("d2TB"),r=n("ERkP"),i=n.n(r),c=n("j/s1"),a=n("plWM"),u=n("lS4U"),s=n("lIm4"),l=i.a.createElement;e.default=function(){var t=Object(r.useContext)(c.a).spacing;return l(o.Flex,{flexDirection:"column"},l("figure",{style:{textAlign:"center"}},l("img",{src:"".concat("/big-design","/logo.svg"),alt:"BigDesign Logo",style:{width:200}})),l(o.FlexItem,{alignSelf:"center"},l(o.H1,null,"BigDesign Developer Playground")),l(o.Text,null,"BigCommerce\u2019s library of React components lets developers build stylish apps that have a native BigCommerce feel at their core. Our components implement BigDesign principles to allow you to create an empathetic and frictionless user experience. The documentation will demonstrate the visual style and behavior of each component. Each component has props that you can pass to the components for further configuration."),l(o.FlexItem,{alignSelf:"center"},l(o.H2,{marginBottom:"none"},"Helpful Resources")),l(o.FlexItem,{alignSelf:"center"},l(a.a,{columnCount:2,columnGap:t.xxxLarge},l(a.a.Item,null,l(o.Link,{href:"https://design.bigcommerce.com/components",target:"_blank"},"Design Guidelines")),l(a.a.Item,null,l(o.Link,{href:"https://github.com/bigcommerce/big-design",target:"_blank"},"GitHub Repo")),l(a.a.Item,null,l(o.Link,{href:"https://medium.com/bigcommerce-developer-blog/bigdesign-build-native-looking-uis-with-the-bigcommerce-design-system-fb06a01a24f2",target:"_blank"},"Dev Blog Demo")),l(a.a.Item,null,l(o.Link,{href:"https://support.bigcommerce.com/s/group/0F91B000000bnqoSAA/bigdesign-beta",target:"_blank"},"Beta Community Group")),l(a.a.Item,null,l(o.Link,{href:"https://www.figma.com/file/jTVuUkiZ1j3rux8WHG4IKK/BigDesign-UI-Kit",target:"_blank"},"Figma UI Kit")),l(a.a.Item,null,l(o.Link,{href:"https://github.com/bigcommerce/channels-app",target:"_blank"},"Sample App")),l(a.a.Item,null,l(o.Link,{href:"https://codesandbox.io/s/github/bigcommerce/big-design/tree/%40bigcommerce/examples%400.3.0/packages/examples",target:"_blank"},"CodeSandbox Example")),l(a.a.Item,null,l(o.Link,{href:"https://developer.bigcommerce.com",target:"_blank"},"Dev Center")),l(a.a.Item,null,l(o.Link,{href:"https://developer.bigcommerce.com/api-docs/getting-started/building-apps-bigcommerce/building-apps",target:"_blank"},"Building an App")))),l(o.H2,null,"Getting Started"),l(o.Text,null,"Add BigDesign and styled-components to your project:"),l(u.a,{showControls:!1,language:"bash"},"npm install @bigcommerce/big-design styled-components"),l(o.Text,null,"Import the ",l(s.a,null,"GlobalStyles")," component and use it once in your app. This will set a few styles globally, including a base font family,"," ",l(o.Link,{href:"https://fonts.google.com/specimen/Source+Sans+Pro",target:"_blank"},"Source Sans Pro")," ","and"," ",l(o.Link,{href:"https://github.com/necolas/normalize.css/",target:"_blank"},"normalize.css"),". We recommend placing it close to your root component. Then import any component, such as ",l(s.a,null,"Button"),", to use it anywhere in your app."),l(u.a,null,"\n        import { Button, GlobalStyles } from '@bigcommerce/big-design';\n\n        // ...\n\n        <App>\n          <GlobalStyles />\n          <Button>Click me</Button>\n        </App>\n      "),l(o.H2,null,"Using this Documentation"),l(o.Text,{marginBottom:"none"},"This documentation uses the React components in the BigDesign library so you can edit them and preview them in real time."),l(a.a,null,l(a.a.Item,null,"Select an element or utility in the left menu to view their props, types and descriptions below, including examples."),l(a.a.Item,null,"Type directly in the code editor to make changes. Click the time icon to restore the component to default."),l(a.a.Item,null,"Click the clipboard icon to copy the code snippet to your clipboard. Click the dual color icon to change the background color of the code editor.")))}},"j/aJ":function(t,e,n){"use strict";var o=n("wOJj"),r=n("MIMp"),i=n("tReM"),c=n("Hs7Z");t.exports=n("S49y")(Array,"Array",(function(t,e){this._t=c(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},jPfo:function(t,e,n){t.exports=n("uBMx")},lIm4:function(t,e,n){"use strict";var o=n("ERkP"),r=n.n(o),i=n("j/s1"),c=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(t){return t.theme.colors.secondary70}),(function(t){var e=t.highlight,n=t.primary,o=t.theme;return e&&!n&&Object(i.d)(["background-color:",";padding:",";"],o.colors.warning10,o.spacing.xxSmall)}),(function(t){var e=t.primary,n=t.theme;return e&&Object(i.d)(["color:",";"],n.colors.primary70)}));n.d(e,"a",(function(){return u}));var a=r.a.createElement,u=function(t){return a(c,t)};u.defaultProps={highlight:!0}},lS4U:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n("d2TB"),r=n("/U4Q"),i=n.n(r),c=n("ERkP"),a=n.n(c),u=n("/QLj"),s=n("+Jfu"),l=n("Bhrl"),p=a.a.createElement;var f=function(t){var e=t.children,n=t.language,r=t.showControls,a=Object(c.useContext)(l.a).theme,f=function(t){if("string"!==typeof t)throw new Error("<CodeSnippet> children must be of type string");return function(t){var e=t.split("\n");""===e[0].trim()&&e.splice(0,1),""===e[e.length-1].trim()&&e.pop();var n=e[0].search(/\S|$/);return e.map((function(t){return t.substr(n)})).join("\n")}(t)}(e);return p(o.Box,{border:"box",marginBottom:"xxLarge"},r&&p(s.a,{copyToClipboard:function(){return i()(f)},helperText:"Code example"}),p(u.a,{code:f,theme:a,language:n,disabled:!0}))};f.defaultProps={language:"jsx",showControls:!0}},nX7j:function(t,e,n){var o=n("IFjL");o(o.S,"Object",{create:n("yew7")})},plWM:function(t,e,n){"use strict";var o=n("h7sq"),r=n("tS02"),i=n("/XES"),c=n("ztBH"),a=n("Fayl"),u=n("znL5"),s=n("ERkP"),l=n.n(s),p=n("j/s1"),f=Object(p.d)(["color:",";font-size:",";font-weight:",";line-height:",";padding-left:",";","{column-count:",";column-gap:",";}"],(function(t){return t.theme.colors.secondary70}),(function(t){return t.theme.typography.fontSize.medium}),(function(t){return t.theme.typography.fontWeight.regular}),(function(t){return t.theme.lineHeight.medium}),(function(t){return t.theme.spacing.xLarge}),(function(t){return t.theme.breakpoints.tablet}),(function(t){return t.columnCount}),(function(t){return t.columnGap})),m=p.e.ol.withConfig({displayName:"styled__StyledOrderedList",componentId:"un4gt8-0"})(["",";list-style-type:",";"],f,(function(t){var e=t.bulleted;return"".concat(e?"decimal":"none")})),h=p.e.ul.withConfig({displayName:"styled__StyledUnorderedList",componentId:"un4gt8-1"})([""," list-style-type:",""],f,(function(t){var e=t.bulleted;return"".concat(e?"disc":"none")})),g=n("pneb"),d=l.a.createElement;n.d(e,"a",(function(){return b}));var y=l.a.createElement,b=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(a.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.ordered;return y(n?m:h,this.props,e)}}]),e}(l.a.PureComponent);Object(u.a)(b,"defaultProps",{columnCount:1,columnGap:"normal",ordered:!1,bulleted:!0}),Object(u.a)(b,"Item",(function(t){var e=Object(g.a)({},t);return d("li",e)}))},tReM:function(t,e){t.exports={}},tS02:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("LcAa"),r=n.n(o);function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r()(t,o.key,o)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},uBMx:function(t,e,n){n("zJWi"),t.exports=n("rFq9").Object.getPrototypeOf},wOJj:function(t,e){t.exports=function(){}},zJWi:function(t,e,n){var o=n("MrWc"),r=n("ax0Y");n("2qJG")("getPrototypeOf",(function(){return function(t){return r(o(t))}}))},zZTv:function(t,e,n){n("9YHp")("observable")},zjfI:function(t,e,n){"use strict";var o=n("yew7"),r=n("jHgz"),i=n("KnMe"),c={};n("b95h")(c,n("eD9m")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(c,{next:r(1,n)}),i(t,e+" Iterator")}},ztBH:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("jPfo"),r=n.n(o),i=n("U9rZ"),c=n.n(i);function a(t){return(a=c.a?r.a:function(t){return t.__proto__||r()(t)})(t)}}},[["5KiJ",1,2,4,0,3,5]]]);