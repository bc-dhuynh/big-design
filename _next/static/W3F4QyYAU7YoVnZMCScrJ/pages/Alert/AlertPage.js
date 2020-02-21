(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{Ggzw:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n("pneb"),a=n("ERkP"),i=n.n(a),l=n("R5dR"),o=n("lIm4"),s=n("nFRM"),u=i.a.createElement,c=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:u(l.a,{href:"#message-item-prop-table"},"MessageItem"),description:u(i.a.Fragment,null,"See ",u(l.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],p=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:u(l.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:u(i.a.Fragment,null,"See ",u(l.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],d=[{name:"external",types:"boolean",description:u(i.a.Fragment,null,"Shows an external icons when the ",u(o.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],m=function(e){return u(s.a,Object(r.a)({title:"",propList:p},e,{id:"message-item-prop-table"}))},h=function(e){return u(s.a,Object(r.a)({title:"",propList:d},e,{id:"message-link-item-prop-table"}))}},TPTi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Alert/AlertPage",function(){return n("l3ku")}])},c2K2:function(e,t,n){"use strict";var r=n("d2TB"),a=n("XPf/"),i=n("BtTX"),l=n("ERkP"),o=n.n(l),s=n("j/s1"),u=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);n.d(t,"a",(function(){return p}));var c=o.a.createElement,p=function(e){var t=e.children,n=e.title,o=Object(l.useState)(!0),s=o[0],p=o[1],d=function(){return p(!s)};return c("div",null,c(u,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},s?c(a.a,{title:"Expand"}):c(i.a,{title:"Collapse"}),c(r.Text,null,n)),!s&&t)}},l3ku:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),a=n.n(r),i=n("d2TB"),l=n("GsAr"),o=n("lIm4"),s=n("lS4U"),u=n("plWM"),c=n("wk2l"),p=n("U6/q"),d=n("j/s1").e.span.withConfig({displayName:"styled__StyledMethodBadge",componentId:"sc-1kqf53h-0"})(["",";background-color:",";border-radius:",";color:",";display:inline-block;font-size:",";font-weight:",";line-height:",";text-transform:uppercase;padding:0 ",";"],Object(p.b)(),(function(e){return e.theme.colors.secondary70}),(function(e){return e.theme.borderRadius.normal}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.typography.fontSize.small}),(function(e){return e.theme.typography.fontWeight.semiBold}),(function(e){return e.theme.lineHeight.medium}),(function(e){return e.theme.spacing.xSmall})),m=a.a.createElement,h=function(e){e.className,e.style;var t=e.label,n=Object(c.a)(e,["className","style","label"]);return m(d,n,t)},g=a.a.createElement,f=function(e){var t=e.name,n=e.intro,r=e.usage,l=e.parameterList,c=e.returnDescription;return g(a.a.Fragment,null,g(i.H3,null,g(o.a,{primary:!0},t)),g(i.Text,null,n),g(s.a,{language:"javascript",showControls:!1,children:r}),l&&l.length>0&&g(a.a.Fragment,null,g(h,{label:"Parameters"}),g(u.a,{bulleted:!1},l.map((function(e,t){var n=e.param,r=e.description,a=e.required;return g(u.a.Item,{key:t},g(i.Text,null,g(o.a,null,n),!a&&g(i.Text,{as:"span",bold:!0},"(optional)"),": ",r))})))),g(h,{label:"Return Value",marginBottom:"medium"}),g(i.Text,null,c))},y=a.a.createElement,b=function(){return y(f,{name:"add",intro:"Adds an alert to the manager with an optional callback on dismiss.",usage:"alertsManager.add({ messages: [{ text: 'error' }] }, () => null)",parameterList:[{param:"alert",description:"An object with the same key/values as the alert props.",required:!0},{param:"dismissCallback",description:y(a.a.Fragment,null,"Callback function to run when the alert is dismissed. Runs before the ",y(o.a,null,"onClose")," function in the passed in alert.")}],returnDescription:"The value of the alert key. If no key is provided, then an auto-generated one will be provided."})},w=function(){return y(f,{name:"remove",intro:"Removes an alert by key and displays the next alert, if available.",usage:"alertsManager.remove(key)",parameterList:[{param:"key",description:"Key of the alert to remove.",required:!0}],returnDescription:"Contains the alert removed."})},k=function(){return y(f,{name:"subscribe",intro:"Subscribe the the alerts manager.",usage:"alertsManager.subscribe((alert) => {})",parameterList:[{param:"callback",description:"Callback function to run when the alerts list changes. Will pass the alert to display, or null.",required:!0}],returnDescription:"An unsubscribe method for the subscibed method."})},x=n("Ggzw"),v=n("pneb"),T=n("ysci"),M=n.n(T);var A=n("Td7S"),j=n.n(A),C=n("5A7e"),E=n.n(C);var P,S=n("nFRM"),L=a.a.createElement,I=[].concat(function(e){if(M()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(P=x.c)||function(e){if(E()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return j()(e)}(P)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),[{name:"key",types:"string",description:"Key used to identify alert."}]),F=function(e){return L(S.a,Object(v.a)({title:"Alert",propList:I},e))},B=n("cha2"),R=a.a.createElement;t.default=function(){return R(a.a.Fragment,null,R(i.H0,null,"Alerts"),R(i.Text,null,"An alert appears at the top right of the interface notifying the user after an action."),R(l.a,{scope:{alertsManager:B.alertsManager}},"function Example() {\n  const alert = {\n    header: 'Optional Headline',\n    messages: [\n      {\n        text: 'Required description copy.',\n        link: {\n          text: 'Optional Link',\n          href: '#',\n        },\n      },\n    ],\n    type: 'success',\n    onClose: () => null,\n  } as AlertProps;\n\n  return <Button onClick={() => alertsManager.add(alert)}>Trigger Alert</Button>;\n}"),R(i.Message,{type:"warning",messages:[{text:"Note: You should not use the Alert component directly. Instead, inject the AlertsManager component into your app and use the instance created by the createAlertsManager utility function to control which Alerts are displayed."}],marginBottom:"large"}),R(i.H1,null,"API"),R(F,null),R(x.a,{title:"Alert[MessageItem]"}),R(x.b,{title:"Alert[MessageLinkItem]"}),R(i.H1,null,"Alerts Manager"),R(i.H2,null,"AlertsManager Component"),R(i.Text,null,"Big Design comes with an ",R(o.a,{primary:!0},"AlertsManager")," component that will manage and display which alerts to display and in which order by type. The order of priority from highest to lowest is ",R(o.a,null,"error"),","," ",R(o.a,null,"warning"),", ",R(o.a,null,"success"),", ",R(o.a,null,"info"),"."),R(i.Text,null,"To use this component, wrap your app with this component:"),R(s.a,null,"function App() {\n  return (\n    <>\n      {/* ... */}\n      <AlertsManager manager={alertsManager} />\n      {/* ... */}\n    </>\n  );\n}}\n"),R(i.Text,null,"This works in conjunction with an instance created by ",R(o.a,null,"createAlertsManager")," function below."),R(i.H2,null,"createAlertsManager"),R(i.Text,null,"The ",R(o.a,null,"createAlertsManager")," function returns an instance for managing which alert to display."),R(s.a,{showControls:!1},"const alertsManager = createAlertsManager();"),R(b,null),R(w,null),R(k,null))}},lIm4:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("j/s1"),l=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,r=e.theme;return t&&!n&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(i.d)(["color:",";"],n.colors.primary70)}));n.d(t,"a",(function(){return s}));var o=a.a.createElement,s=function(e){return o(l,e)};s.defaultProps={highlight:!0}},lS4U:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("d2TB"),a=n("/U4Q"),i=n.n(a),l=n("ERkP"),o=n.n(l),s=n("/QLj"),u=n("+Jfu"),c=n("Bhrl"),p=o.a.createElement;var d=function(e){var t=e.children,n=e.language,a=e.showControls,o=Object(l.useContext)(c.a).theme,d=function(e){if("string"!==typeof e)throw new Error("<CodeSnippet> children must be of type string");return function(e){var t=e.split("\n");""===t[0].trim()&&t.splice(0,1),""===t[t.length-1].trim()&&t.pop();var n=t[0].search(/\S|$/);return t.map((function(e){return e.substr(n)})).join("\n")}(e)}(t);return p(r.Box,{border:"box",marginBottom:"xxLarge"},a&&p(u.a,{copyToClipboard:function(){return i()(d)},helperText:"Code example"}),p(s.a,{code:d,theme:o,language:n,disabled:!0}))};d.defaultProps={language:"jsx",showControls:!0}},nFRM:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("ysci"),a=n.n(r),i=n("d2TB"),l=n("ERkP"),o=n.n(l),s=n("lIm4"),u=n("c2K2"),c=o.a.createElement,p=function(e){var t=e.collapsible,n=e.id,r=e.propList,a=e.title,l=function(){return c(i.TableFigure,null,c(i.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var t=e.name,n=e.required;return c(o.a.Fragment,null,c(s.a,{primary:!0},t),n?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var t=e.types;return c(d,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return c(s.a,{highlight:!1},t)}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return c(i.Text,null,t)}}],items:r}),c(i.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return t?c(u.a,{title:"".concat(a," Props")},l()):c(o.a.Fragment,null,c(i.H2,{id:n},a),l())},d=function(e){var t=e.types;return a()(t)?t.map((function(e,n){return c(o.a.Fragment,{key:e},e.type===i.Link?c(s.a,{highlight:!1},e):c(s.a,null,e),n<t.length-1?" | ":null)})):t.type===i.Link?c(s.a,{highlight:!1},t):c(s.a,null,t)}}},[["TPTi",1,2,4,6,9,8,0,55,56,57,58,59,61]]]);