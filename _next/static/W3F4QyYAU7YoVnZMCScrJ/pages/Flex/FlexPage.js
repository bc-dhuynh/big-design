(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"3tru":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Flex/FlexPage",function(){return n("hFvE")}])},aw6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("pneb"),r=n("ERkP"),l=n.n(r),i=n("R5dR"),o=n("nFRM"),p=l.a.createElement,s=[{name:"padding",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the padding to be applied."},{name:"paddingTop",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top padding to be applied."},{name:"paddingRight",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the right padding to be applied."},{name:"paddingBottom",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the bottom padding to be applied."},{name:"paddingLeft",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left padding to be applied."},{name:"paddingVertical",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top and bottom padding to be applied."},{name:"paddingHorizontal",types:p(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left and right padding to be applied."}],x=function(e){return p(o.a,Object(a.a)({title:"Padding",propList:s},e))}},hFvE:function(e,t,n){"use strict";n.r(t);var a=n("d2TB"),r=n("ERkP"),l=n.n(r),i=n("GsAr"),o=n("lIm4"),p=n("pneb"),s=n("nFRM"),x=l.a.createElement,d=[{name:"alignContent",types:["stretch","center","flex-start","flex-end","space-between","space-around"],defaultValue:"stretch",description:x(l.a.Fragment,null,"Modifies the behavior of the ",x(o.a,{highlight:!1},"flex-wrap")," property on the vertical axis. Same as the"," ",x(o.a,{highlight:!1},"align-content")," CSS property.")},{name:"alignItems",types:["normal","stretch","center","flex-start","flex-end","baseline"],defaultValue:"stretch",description:x(l.a.Fragment,null,"Specifies the default alignment for items in a flex container. Same as the"," ",x(o.a,{highlight:!1},"align-items")," CSS property.")},{name:"flexDirection",types:["row","column","row-reverse","column-reverse"],defaultValue:"row",description:x(l.a.Fragment,null,"Determines the direction of flex items. Same as the ",x(o.a,{highlight:!1},"flex-direction")," CSS property.")},{name:"justifyContent",types:["center","flex-start","flex-end","left","right","normal","space-between","space-around","space-evenly","stretch"],defaultValue:"flex-start",description:x(l.a.Fragment,null,"Modifies the behavior of the ",x(o.a,{highlight:!1},"flex-wrap")," property on the horizontal axis. Same as the ",x(o.a,{highlight:!1},"justify-content")," CSS property.")},{name:"flexWrap",types:["nowrap","wrap","wrap-reversed"],defaultValue:"nowrap",description:x(l.a.Fragment,null,"Controls whether flex items should wrap or not. Same as the ",x(o.a,{highlight:!1},"flex-wrap")," CSS property.")}],m=function(e){return x(s.a,Object(p.a)({title:"Flex",propList:d},e))},f=[{name:"alignSelf",types:["auto","flex-start","flex-end","center","baseline","stretch"],defaultValue:"auto",description:x(l.a.Fragment,null,"Overrides the flex items container ",x(o.a,{highlight:!1},"align-items")," property. Same as the"," ",x(o.a,{highlight:!1},"align-self")," CSS property.")},{name:"flexBasis",types:["auto","fill","min-content","max-content","fit-content","content","string"],defaultValue:"auto",description:x(l.a.Fragment,null,"Specifies the inital length of a flex item. Same as the ",x(o.a,{highlight:!1},"flex-basis")," CSS property.")},{name:"flexGrow",types:"number",defaultValue:"0",description:x(l.a.Fragment,null,"Determines how much a flex item can grow relitive to the rest of the flex items. Same as the"," ",x(o.a,{highlight:!1},"flex-grow")," CSS property.")},{name:"flexOrder",types:"number",defaultValue:"0",description:x(l.a.Fragment,null,"Modifies which order a flex item will appear relative to the other flex items in the container. Same as the"," ",x(o.a,{highlight:!1},"order")," CSS property.")},{name:"flexShrink",types:"number",defaultValue:"1",description:x(l.a.Fragment,null,"Determines how much a flex item can shrink relitive to the rest of the flex items. Same as the"," ",x(o.a,{highlight:!1},"flex-shrink")," CSS property.")}],c=function(e){return x(s.a,Object(p.a)({title:"FlexItem",propList:f},e))},h=n("osqn"),g=n("tGwT"),u=n("akZe"),b=n("aw6n"),y=l.a.createElement,F=function(e){var t=e.children,n=e.vertical;return y(a.Box,{backgroundColor:"secondary20",border:"box",marginVertical:n?"xSmall":"none",marginHorizontal:n?"none":"xSmall",padding:"small"},t)};t.default=function(){return y(l.a.Fragment,null,y(a.H0,null,"Flex"),y(a.Text,null,"A flex container used for customizable layouts."),y(i.a,{scope:{ExampleBox:F}},'<Flex\n  alignContent="stretch"\n  alignItems="stretch"\n  flexDirection="row"\n  justifyContent="flex-start"\n  flexWrap="nowrap"\n>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>'),y(a.H1,null,"API"),y(m,null),y(c,null),y(a.H2,null,"Inherited Props"),y(h.a,{collapsible:!0}),y(g.a,{collapsible:!0}),y(u.a,{collapsible:!0}),y(b.a,{collapsible:!0}),y(a.H1,null,"Examples"),y(a.Text,null,"Flex container's can space their element with uniform spacing in-between each flex item using the"," ",y(o.a,{primary:!0},"justifyContent")," prop."),y(i.a,{scope:{ExampleBox:F}},'<Flex justifyContent="space-between">\n  <FlexItem>\n    <ExampleBox>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem>\n    <ExampleBox>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem>\n    <ExampleBox>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem>\n    <ExampleBox>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>'),y(a.Text,null,"One way of creating a column based layout is using a combination of the ",y(o.a,{primary:!0},"flexWrap")," prop on the flex container with an additional ",y(o.a,{primary:!0},"flexBasis")," prop on the flex items."),y(i.a,{scope:{ExampleBox:F}},'<Flex flexWrap="wrap">\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>'),y(a.Text,null,"Using the ",y(o.a,{primary:!0},"flexOrder")," prop you can reorganize content based on the size generated by setting the ",y(o.a,{primary:!0},"flexGrow")," prop. ",y(o.a,{primary:!0},"flexGrow")," allows the flex items to grow relative to the flex container's width."),y(i.a,{scope:{ExampleBox:F}},"<Flex>\n  <FlexItem flexGrow={2} flexOrder={2}>\n    <ExampleBox>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem flexOrder={4}>\n    <ExampleBox>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem flexGrow={4} flexOrder={1}>\n    <ExampleBox>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem flexGrow={1} flexOrder={3}>\n    <ExampleBox>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>"))}},osqn:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("pneb"),r=n("ERkP"),l=n.n(r),i=n("R5dR"),o=n("nFRM"),p=l.a.createElement,s=[{name:"as",types:["string","React.ComponentType<any>"],description:"Use a different HTML tag or a different custom component"},{name:"backgroundColor",types:p(i.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color"),description:p(l.a.Fragment,null,"Sets the background color given a color name from our"," ",p(i.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),".")},{name:"shadow",types:["floating","raised"],description:"Determines the type of shadow to be applied."},{name:"border",types:["box","boxError","none"],description:"Determines type of border to be applied."},{name:"borderBottom",types:["box","boxError","none"],description:"Determines type of bottom border to be applied."},{name:"borderLeft",types:["box","boxError","none"],description:"Determines type of left border to be applied."},{name:"borderRight",types:["box","boxError","none"],description:"Determines type of right border to be applied."},{name:"borderTop",types:["box","boxError","none"],description:"Determines type of top border to be applied."},{name:"borderRadius",types:["normal","circle","none"],description:"Determines type of border radius to be applied."}],x=function(e){return p(o.a,Object(a.a)({title:"Box",propList:s},e))}},tGwT:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("pneb"),r=n("ERkP"),l=n.n(r),i=n("nFRM"),o=l.a.createElement,p=[{name:"display",types:["block","inline-block","inline","inline-flex","flex","grid","inline-grid","none"],description:"Sets the CSS display property of a component."}],s=function(e){return o(i.a,Object(a.a)({title:"Display",propList:p},e))}}},[["3tru",1,2,4,6,9,8,0,55,56,57,58,59,60]]]);