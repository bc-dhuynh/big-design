(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{AwPv:function(e,n,t){var r=t("IFjL");r(r.P+r.R,"Map",{toJSON:t("KIy9")("Map")})},EfDG:function(e,n,t){"use strict";var r=t("zCrM"),i=t("S5Zg");e.exports=t("HKkr")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var n=r.getEntry(i(this,"Map"),e);return n&&n.v},set:function(e,n){return r.def(i(this,"Map"),0===e?0:e,n)}},r,!0)},"F//K":function(e,n,t){t("dUHx"),t("/r3m"),t("Fk9O"),t("EfDG"),t("AwPv"),t("SZul"),t("Lwwr"),e.exports=t("rFq9").Map},JeHL:function(e,n,t){e.exports=t("F//K")},KIy9:function(e,n,t){var r=t("M25K"),i=t("qiY+");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},KeDb:function(e,n,t){"use strict";var r=t("E1+a"),i=t("Z05o"),a=t("OY2S"),o=t("zBsc"),s=t("wt0f"),u=t("JeHL"),c=t("lpv4"),f=t("5Tpg");n.__esModule=!0,n.default=void 0;var l,p=t("EfWO"),h=f(t("ERkP")),d=c(t("7xIC")),g=t("fvxO");function v(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var m=new u,y=window.IntersectionObserver,M={};function k(){return l||(y?l=new y((function(e){e.forEach((function(e){if(m.has(e.target)){var n=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),m.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){function n(e){var t;return r(this,n),(t=a(this,o(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(i,a){if(r&&i===n&&a===t)return r;var o=e(i,a);return n=i,t=a,r=o,o}}((function(e,n){return{href:v(e),as:n?v(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,i=n.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),o=a.href,s=a.as;if(function(e){var n=(0,p.parse)(e,!1,!0),t=(0,p.parse)((0,g.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(o)){var u=window.location.pathname;o=(0,p.resolve)(u,o),s=s?(0,p.resolve)(u,s):o,e.preventDefault();var c=t.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](o,s,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return s(n,e),i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(e,n)}},{key:"handleRef",value:function(e){var n=this,t=M[this.getHref()];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),t||(this.cleanUpListeners=function(e,n){var t=k();return t?(t.observe(e),m.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}m.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();d.default.prefetch(e),M[e]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,i=t.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var a=h.Children.only(n),o={ref:function(n){e.handleRef(n),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(n):"object"===typeof a.ref&&(a.ref.current=n))},onMouseEnter:function(n){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(n),e.prefetch()},onClick:function(n){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=i||r),h.default.cloneElement(a,o)}}]),n}(h.Component);n.default=_},Lwwr:function(e,n,t){t("zjhQ")("Map")},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),i=t("jvFD"),a=t.n(i),o=t("ERkP"),s=t.n(o).a.createElement;function u(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,i=e.href;return s(a.a,{href:i,as:u(n)},"string"===typeof t?s(r.Link,{href:f(i)?i:""},t):t)};function f(e){return e&&"#"===e.charAt(0)}},SZul:function(e,n,t){t("iaOj")("Map")},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t("pneb"),i=t("ERkP"),a=t.n(i),o=t("R5dR"),s=t("nFRM"),u=a.a.createElement,c=[{name:"margin",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:u(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],f=function(e){return u(s.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";var r=t("d2TB"),i=t("XPf/"),a=t("BtTX"),o=t("ERkP"),s=t.n(o),u=t("j/s1"),c=Object(u.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);t.d(n,"a",(function(){return l}));var f=s.a.createElement,l=function(e){var n=e.children,t=e.title,s=Object(o.useState)(!0),u=s[0],l=s[1],p=function(){return l(!u)};return f("div",null,f(c,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},u?f(i.a,{title:"Expand"}):f(a.a,{title:"Collapse"}),f(r.Text,null,t)),!u&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";var r=t("ERkP"),i=t.n(r),a=t("j/s1"),o=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(a.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(a.d)(["color:",";"],t.colors.primary70)}));t.d(n,"a",(function(){return u}));var s=i.a.createElement,u=function(e){return s(o,e)};u.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ysci"),i=t.n(r),a=t("d2TB"),o=t("ERkP"),s=t.n(o),u=t("lIm4"),c=t("c2K2"),f=s.a.createElement,l=function(e){var n=e.collapsible,t=e.id,r=e.propList,i=e.title,o=function(){return f(a.TableFigure,null,f(a.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return f(s.a.Fragment,null,f(u.a,{primary:!0},n),t?f("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return f(p,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return f(u.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return f(a.Text,null,n)}}],items:r}),f(a.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?f(c.a,{title:"".concat(i," Props")},o()):f(s.a.Fragment,null,f(a.H2,{id:t},i),o())},p=function(e){var n=e.types;return i()(n)?n.map((function(e,t){return f(s.a.Fragment,{key:e},e.type===a.Link?f(u.a,{highlight:!1},e):f(u.a,null,e),t<n.length-1?" | ":null)})):n.type===a.Link?f(u.a,{highlight:!1},n):f(u.a,null,n)}},"qiY+":function(e,n,t){var r=t("9v8s");e.exports=function(e,n){var t=[];return r(e,!1,t.push,t,n),t}},zCrM:function(e,n,t){"use strict";var r=t("UwCj").f,i=t("yew7"),a=t("qa3O"),o=t("dWRk"),s=t("s0lH"),u=t("9v8s"),c=t("S49y"),f=t("MIMp"),l=t("Jn7W"),p=t("ObEa"),h=t("aRFn").fastKey,d=t("S5Zg"),g=p?"_s":"size",v=function(e,n){var t,r=h(n);if("F"!==r)return e._i[r];for(t=e._f;t;t=t.n)if(t.k==n)return t};e.exports={getConstructor:function(e,n,t,c){var f=e((function(e,r){s(e,f,n,"_i"),e._t=n,e._i=i(null),e._f=void 0,e._l=void 0,e[g]=0,void 0!=r&&u(r,t,e[c],e)}));return a(f.prototype,{clear:function(){for(var e=d(this,n),t=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete t[r.i];e._f=e._l=void 0,e[g]=0},delete:function(e){var t=d(this,n),r=v(t,e);if(r){var i=r.n,a=r.p;delete t._i[r.i],r.r=!0,a&&(a.n=i),i&&(i.p=a),t._f==r&&(t._f=i),t._l==r&&(t._l=a),t[g]--}return!!r},forEach:function(e){d(this,n);for(var t,r=o(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(r(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!v(d(this,n),e)}}),p&&r(f.prototype,"size",{get:function(){return d(this,n)[g]}}),f},def:function(e,n,t){var r,i,a=v(e,n);return a?a.v=t:(e._l=a={i:i=h(n,!0),k:n,v:t,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[g]++,"F"!==i&&(e._i[i]=a)),e},getEntry:v,setStrong:function(e,n,t){c(e,n,(function(e,t){this._t=d(e,n),this._k=t,this._l=void 0}),(function(){for(var e=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),t?"entries":"values",!t,!0),l(n)}}}}]);