(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2HG5":function(n,e,t){"use strict";t.r(e);var r=t("ERkP"),i=t.n(r),o=t("d2TB"),a=t("lIm4"),l=t("GsAr"),s=t("R5dR"),u=t("tGwT"),c=i.a.createElement;e.default=function(){return c(i.a.Fragment,null,c(o.H0,null,"Display"),c(o.Text,null,"A few of our components expose a ",c(a.a,{primary:!0},"display")," prop in order to change the CSS display property."),c(l.a,null,'<Box display="inline-block" backgroundColor="secondary20" border="box" padding="medium">\n  Boxed content\n</Box>'),c(o.Text,null,"It's also possible to use the prop with responsive"," ",c(s.a,{href:"/Breakpoint/BreakpointPage",as:"/breakpoints"},"breakpoints"),":"),c(l.a,null,'<>\n  <Box\n    display={{ mobile: \'none\', tablet: \'inline-block\' }}\n    backgroundColor="secondary20"\n    border="box"\n    padding="medium"\n  >\n    Boxed content hidden on mobile.\n  </Box>\n  <Box display={{ mobile: \'block\', tablet: \'none\' }} backgroundColor="primary10" border="box" padding="medium">\n    Boxed content hidden on tablet.\n  </Box>\n</>'),c(u.a,null))}},"53v8":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Display/DisplayPage",function(){return t("2HG5")}])},AwPv:function(n,e,t){var r=t("IFjL");r(r.P+r.R,"Map",{toJSON:t("KIy9")("Map")})},EfDG:function(n,e,t){"use strict";var r=t("zCrM"),i=t("S5Zg");n.exports=t("HKkr")("Map",(function(n){return function(){return n(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(n){var e=r.getEntry(i(this,"Map"),n);return e&&e.v},set:function(n,e){return r.def(i(this,"Map"),0===n?0:n,e)}},r,!0)},"F//K":function(n,e,t){t("dUHx"),t("/r3m"),t("Fk9O"),t("EfDG"),t("AwPv"),t("SZul"),t("Lwwr"),n.exports=t("rFq9").Map},JeHL:function(n,e,t){n.exports=t("F//K")},KIy9:function(n,e,t){var r=t("M25K"),i=t("qiY+");n.exports=function(n){return function(){if(r(this)!=n)throw TypeError(n+"#toJSON isn't generic");return i(this)}}},KeDb:function(n,e,t){"use strict";var r=t("E1+a"),i=t("Z05o"),o=t("OY2S"),a=t("zBsc"),l=t("wt0f"),s=t("JeHL"),u=t("lpv4"),c=t("5Tpg");e.__esModule=!0,e.default=void 0;var f,p=t("EfWO"),d=c(t("ERkP")),h=u(t("7xIC")),v=t("fvxO");function y(n){return n&&"object"===typeof n?(0,v.formatWithValidation)(n):n}var g=new s,m=window.IntersectionObserver,k={};function b(){return f||(m?f=new m((function(n){n.forEach((function(n){if(g.has(n.target)){var e=g.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(f.unobserve(n.target),g.delete(n.target),e())}}))}),{rootMargin:"200px"}):void 0)}var _=function(n){function e(n){var t;return r(this,e),(t=o(this,a(e).call(this,n))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(n){var e=null,t=null,r=null;return function(i,o){if(r&&i===e&&o===t)return r;var a=n(i,o);return e=i,t=o,r=a,a}}((function(n,e){return{href:y(n),as:e?y(e):e}})),t.linkClicked=function(n){var e=n.currentTarget,r=e.nodeName,i=e.target;if("A"!==r||!(i&&"_self"!==i||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),a=o.href,l=o.as;if(function(n){var e=(0,p.parse)(n,!1,!0),t=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===t.protocol&&e.host===t.host}(a)){var s=window.location.pathname;a=(0,p.resolve)(s,a),l=l?(0,p.resolve)(s,l):a,n.preventDefault();var u=t.props.scroll;null==u&&(u=l.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](a,l,{shallow:t.props.shallow}).then((function(n){n&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==n.prefetch,t}return l(e,n),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var n=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(n,e)}},{key:"handleRef",value:function(n){var e=this,t=k[this.getHref()];this.p&&m&&n&&n.tagName&&(this.cleanUpListeners(),t||(this.cleanUpListeners=function(n,e){var t=b();return t?(t.observe(n),g.set(n,e),function(){try{t.unobserve(n)}catch(e){console.error(e)}g.delete(n)}):function(){}}(n,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var n=this.getHref();h.default.prefetch(n),k[n]=!0}}},{key:"render",value:function(){var n=this,e=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,i=t.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var o=d.Children.only(e),a={ref:function(e){n.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),n.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||n.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),d.default.cloneElement(o,a)}}]),e}(d.Component);e.default=_},Lwwr:function(n,e,t){t("zjhQ")("Map")},R5dR:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("d2TB"),i=t("jvFD"),o=t.n(i),a=t("ERkP"),l=t.n(a).a.createElement;function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var u=function(n){var e=n.as,t=n.children,i=n.href;return l(o.a,{href:i,as:s(e)},"string"===typeof t?l(r.Link,{href:c(i)?i:""},t):t)};function c(n){return n&&"#"===n.charAt(0)}},SZul:function(n,e,t){t("iaOj")("Map")},c2K2:function(n,e,t){"use strict";var r=t("d2TB"),i=t("XPf/"),o=t("BtTX"),a=t("ERkP"),l=t.n(a),s=t("j/s1"),u=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);t.d(e,"a",(function(){return f}));var c=l.a.createElement,f=function(n){var e=n.children,t=n.title,l=Object(a.useState)(!0),s=l[0],f=l[1],p=function(){return f(!s)};return c("div",null,c(u,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(n){"Enter"!==n.key&&" "!==n.key||p()},tabIndex:0},s?c(i.a,{title:"Expand"}):c(o.a,{title:"Collapse"}),c(r.Text,null,t)),!s&&e)}},jvFD:function(n,e,t){n.exports=t("KeDb")},lIm4:function(n,e,t){"use strict";var r=t("ERkP"),i=t.n(r),o=t("j/s1"),a=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(n){return n.theme.colors.secondary70}),(function(n){var e=n.highlight,t=n.primary,r=n.theme;return e&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(n){var e=n.primary,t=n.theme;return e&&Object(o.d)(["color:",";"],t.colors.primary70)}));t.d(e,"a",(function(){return s}));var l=i.a.createElement,s=function(n){return l(a,n)};s.defaultProps={highlight:!0}},nFRM:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t("ysci"),i=t.n(r),o=t("d2TB"),a=t("ERkP"),l=t.n(a),s=t("lIm4"),u=t("c2K2"),c=l.a.createElement,f=function(n){var e=n.collapsible,t=n.id,r=n.propList,i=n.title,a=function(){return c(o.TableFigure,null,c(o.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(n){var e=n.name,t=n.required;return c(l.a.Fragment,null,c(s.a,{primary:!0},e),t?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(n){var e=n.types;return c(p,{types:e})}},{header:"Default",hash:"default",render:function(n){var e=n.defaultValue;return c(s.a,{highlight:!1},e)}},{header:"Description",hash:"description",width:"50%",render:function(n){var e=n.description;return c(o.Text,null,e)}}],items:r}),c(o.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return e?c(u.a,{title:"".concat(i," Props")},a()):c(l.a.Fragment,null,c(o.H2,{id:t},i),a())},p=function(n){var e=n.types;return i()(e)?e.map((function(n,t){return c(l.a.Fragment,{key:n},n.type===o.Link?c(s.a,{highlight:!1},n):c(s.a,null,n),t<e.length-1?" | ":null)})):e.type===o.Link?c(s.a,{highlight:!1},e):c(s.a,null,e)}},"qiY+":function(n,e,t){var r=t("9v8s");n.exports=function(n,e){var t=[];return r(n,!1,t.push,t,e),t}},tGwT:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("pneb"),i=t("ERkP"),o=t.n(i),a=t("nFRM"),l=o.a.createElement,s=[{name:"display",types:["block","inline-block","inline","inline-flex","flex","grid","inline-grid","none"],description:"Sets the CSS display property of a component."}],u=function(n){return l(a.a,Object(r.a)({title:"Display",propList:s},n))}},zCrM:function(n,e,t){"use strict";var r=t("UwCj").f,i=t("yew7"),o=t("qa3O"),a=t("dWRk"),l=t("s0lH"),s=t("9v8s"),u=t("S49y"),c=t("MIMp"),f=t("Jn7W"),p=t("ObEa"),d=t("aRFn").fastKey,h=t("S5Zg"),v=p?"_s":"size",y=function(n,e){var t,r=d(e);if("F"!==r)return n._i[r];for(t=n._f;t;t=t.n)if(t.k==e)return t};n.exports={getConstructor:function(n,e,t,u){var c=n((function(n,r){l(n,c,e,"_i"),n._t=e,n._i=i(null),n._f=void 0,n._l=void 0,n[v]=0,void 0!=r&&s(r,t,n[u],n)}));return o(c.prototype,{clear:function(){for(var n=h(this,e),t=n._i,r=n._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete t[r.i];n._f=n._l=void 0,n[v]=0},delete:function(n){var t=h(this,e),r=y(t,n);if(r){var i=r.n,o=r.p;delete t._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),t._f==r&&(t._f=i),t._l==r&&(t._l=o),t[v]--}return!!r},forEach:function(n){h(this,e);for(var t,r=a(n,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(r(t.v,t.k,this);t&&t.r;)t=t.p},has:function(n){return!!y(h(this,e),n)}}),p&&r(c.prototype,"size",{get:function(){return h(this,e)[v]}}),c},def:function(n,e,t){var r,i,o=y(n,e);return o?o.v=t:(n._l=o={i:i=d(e,!0),k:e,v:t,p:r=n._l,n:void 0,r:!1},n._f||(n._f=o),r&&(r.n=o),n[v]++,"F"!==i&&(n._i[i]=o)),n},getEntry:y,setStrong:function(n,e,t){u(n,e,(function(n,t){this._t=h(n,e),this._k=t,this._l=void 0}),(function(){for(var n=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),t?"entries":"values",!t,!0),f(e)}}}},[["53v8",1,2,4,6,9,8,0,3,5,7,10,11]]]);