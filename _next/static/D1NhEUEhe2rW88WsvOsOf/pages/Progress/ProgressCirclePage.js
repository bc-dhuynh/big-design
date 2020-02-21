(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"3thp":function(e,n,r){r("wnlw"),e.exports=r("rFq9").Array.isArray},"6s5i":function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Progress/ProgressCirclePage",function(){return r("W2ft")}])},W2ft:function(e,n,r){"use strict";r.r(n);var t=r("d2TB"),i=r("ERkP"),a=r.n(i),l=r("lIm4"),o=r("GsAr"),s=r("pneb"),u=r("nFRM"),c=a.a.createElement,p=[{name:"error",types:"boolean",description:"Sets state to error."},{name:"percent",types:"number",description:"Sets the fill length from 0 to 100."},{name:"size",types:["xSmall","small","medium","large"],defaultValue:"medium",description:"Size of the component."}],d=function(e){return c(u.a,Object(s.a)({title:"ProgressCircle",propList:p},e))},m=a.a.createElement;n.default=function(){return m(a.a.Fragment,null,m(t.H0,null,"Progress Circle"),m(t.Text,null,m(t.Link,{href:"https://design.bigcommerce.com/components/progress-indicators",target:"_blank"},"Progress Indicator Design Guidelines"),"."),m(t.H1,null,"Determinant"),m(t.Text,null,"Determinant Progress represents a known amount of time or completeness for a task. A ",m(l.a,{primary:!0},"percent")," ","prop needs to be passed to render a determinate progress."),m(o.a,null,'<ProgressCircle error={false} percent={50} size="large" />'),m(t.H1,null,"Indeterminant"),m(t.Text,null,"Indeterminant Progress represents an unknown amount of time for a task to complete. Component will render an indeterminant progress when missing a ",m(l.a,{primary:!0},"percent")," prop."),m(o.a,null,'<ProgressCircle size="large" />'),m(t.H1,null,"API"),m(d,null))}},c2K2:function(e,n,r){"use strict";var t=r("d2TB"),i=r("XPf/"),a=r("BtTX"),l=r("ERkP"),o=r.n(l),s=r("j/s1"),u=Object(s.e)(t.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);r.d(n,"a",(function(){return p}));var c=o.a.createElement,p=function(e){var n=e.children,r=e.title,o=Object(l.useState)(!0),s=o[0],p=o[1],d=function(){return p(!s)};return c("div",null,c(u,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},s?c(i.a,{title:"Expand"}):c(a.a,{title:"Collapse"}),c(t.Text,null,r)),!s&&n)}},lIm4:function(e,n,r){"use strict";var t=r("ERkP"),i=r.n(t),a=r("j/s1"),l=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,r=e.primary,t=e.theme;return n&&!r&&Object(a.d)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,r=e.theme;return n&&Object(a.d)(["color:",";"],r.colors.primary70)}));r.d(n,"a",(function(){return s}));var o=i.a.createElement,s=function(e){return o(l,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,r){"use strict";r.d(n,"a",(function(){return p}));var t=r("ysci"),i=r.n(t),a=r("d2TB"),l=r("ERkP"),o=r.n(l),s=r("lIm4"),u=r("c2K2"),c=o.a.createElement,p=function(e){var n=e.collapsible,r=e.id,t=e.propList,i=e.title,l=function(){return c(a.TableFigure,null,c(a.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,r=e.required;return c(o.a.Fragment,null,c(s.a,{primary:!0},n),r?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return c(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return c(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return c(a.Text,null,n)}}],items:t}),c(a.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?c(u.a,{title:"".concat(i," Props")},l()):c(o.a.Fragment,null,c(a.H2,{id:r},i),l())},d=function(e){var n=e.types;return i()(n)?n.map((function(e,r){return c(o.a.Fragment,{key:e},e.type===a.Link?c(s.a,{highlight:!1},e):c(s.a,null,e),r<n.length-1?" | ":null)})):n.type===a.Link?c(s.a,{highlight:!1},n):c(s.a,null,n)}},wnlw:function(e,n,r){var t=r("IFjL");t(t.S,"Array",{isArray:r("gNE/")})},ysci:function(e,n,r){e.exports=r("3thp")}},[["6s5i",1,2,4,6,9,8,0,3,5,7]]]);