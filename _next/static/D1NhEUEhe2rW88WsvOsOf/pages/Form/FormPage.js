(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3thp":function(e,n,r){r("wnlw"),e.exports=r("rFq9").Array.isArray},XWwo:function(e,n,r){"use strict";r.r(n);var t=r("d2TB"),l=r("ERkP"),a=r.n(l),o=r("lIm4"),i=r("GsAr"),u=r("pneb"),p=r("nFRM"),s=a.a.createElement,c=function(e){var n=e.id;return s(a.a.Fragment,null,s(t.H2,{id:n},"FormControlError"),s(t.Text,null,"Supports all native ",s(o.a,null,"<p />")," element attributes."))},d=[{name:"fullWidth",types:"boolean",defaultValue:"false",description:"Sets the form width to 100%"}],m=[{name:"description",types:["string","FieldsetDescription"],description:"Pass in a description to display in the fieldset. Will render nothing if not the correct type."},{name:"legend",types:["string","FieldsetLegend"],description:"Pass in a legend to display in the fieldset. Will render nothing if not the correct type."}],h=function(e){return s(p.a,Object(u.a)({title:"Fieldset",propList:m},e))},g=function(e){var n=e.id;return s(a.a.Fragment,null,s(t.H2,{id:n},"FormControlLabel"),s(t.Text,null,"Supports all native ",s(o.a,null,"<label />")," element attributes."))},F=function(e){var n=e.id;return s(a.a.Fragment,null,s(t.H2,{id:n},"FormControlDescription"),s(t.Text,null,"Supports all native ",s(o.a,null,"<p />")," element attributes."))},f=[{name:"errors",types:["React.ReactChild","React.ReactChild[]"],description:"Pass error(s) into the form group to override child input errors."}],b=function(e){return s(a.a.Fragment,null,s(t.Text,null,"Supports all native ",s(o.a,null,"<form />")," element attributes."),s(p.a,Object(u.a)({title:"Form",propList:d},e)))},y=function(e){return s(p.a,Object(u.a)({title:"FormGroup",propList:f},e))},v=a.a.createElement;n.default=function(){return v(a.a.Fragment,null,v(t.H0,null,"Forms"),v(t.Text,null,"Form fields are essential to any website or web application. ",v(o.a,null,"id"),"'s' will be auto-generated for input/textarea and labels ",v(o.a,null,"for")," attribute, unless manually specifying one."," ",v(t.Link,{href:"https://design.bigcommerce.com/components/forms",target:"_blank"},"Form Fields Design Guidelines"),"."),v(i.a,null,'<Form>\n  <FormGroup>\n    <Input\n      label="Email"\n      type="email"\n      description="Please provide a valid email address."\n      placeholder="Email address"\n    />\n  </FormGroup>\n  <FormGroup>\n    <Input label="Password" type="password" placeholder="Password" />\n  </FormGroup>\n  <Box marginTop="xxLarge">\n    <Button>Sign In</Button>\n  </Box>\n</Form>'),v(t.H1,null,"API"),v(b,null),v(c,{id:"error"}),v(g,{id:"label"}),v(F,{id:"label"}),v(y,null),v(h,null),v(t.H1,null,"Input Types"),v(t.Text,null,"BigDesign comes with various input types: ",v(o.a,null,"Input"),", ",v(o.a,null,"Checkbox"),", ",v(o.a,null,"Radio"),","," ",v(o.a,null,"Select"),", and ",v(o.a,null,"Textarea"),"."),v(i.a,null,'<Form>\n  <FormGroup>\n    <Input label="Example Input" placeholder="Example" />\n  </FormGroup>\n  <FormGroup>\n    <Checkbox checked={true} onChange={() => null} label="Example Checkbox" />\n  </FormGroup>\n  <FormGroup>\n    <Radio checked={true} onChange={() => null} label="Example Radio" />\n  </FormGroup>\n  <FormGroup>\n    <Select\n      label="Example Select"\n      onOptionChange={() => null}\n      options={[\n        { value: 1, content: \'Option\' },\n        { value: 2, content: \'Option\' },\n        { value: 3, content: \'Option\' },\n        { value: 4, content: \'Option\' },\n      ]}\n      placeholder="Example"\n    />\n  </FormGroup>\n  <FormGroup>\n    <Textarea label="Example Textarea" placeholder="Example" />\n  </FormGroup>\n</Form>'),v(t.H1,null,"Layout"),v(t.Text,null,"You can up to 3 ",v(o.a,null,"Input")," components in row to add more dimension to a ",v(o.a,null,"FormGroup"),"."," ",v(o.a,null,"Radio")," and ",v(o.a,null,"Checkbox")," components will never display inline inside a ",v(o.a,null,"FormGroup"),"."),v(i.a,null,'<Form>\n  <FormGroup>\n    <Input label="Company" placeholder="BigCommerce" required />\n  </FormGroup>\n  <FormGroup>\n    <Input label="First Name" placeholder="John" required />\n    <Input label="Last Name" placeholder="Doe" required />\n  </FormGroup>\n  <FormGroup>\n    <Input label="City" placeholder="Austin" required />\n    <Input label="State" placeholder="Texas" required />\n    <Input label="Postal Code" placeholder="78726" required />\n  </FormGroup>\n  <Fieldset legend="Shipping Method">\n    <FormGroup>\n      <Radio label="Free \u2013 Three Day Shipping" checked onChange={() => null} />\n      <Radio label="$4.99 \u2013 Two Day Shipping" />\n      <Radio label="$9.99 \u2013 One Day Shipping" />\n    </FormGroup>\n  </Fieldset>\n</Form>'),v(t.H1,null,"Validation"),v(t.Text,null,"All form controls are tied to ",v(o.a,{primary:!0},"onChange")," or equivalent event handlers. Validation messages can be passed through the ",v(o.a,null,"error")," prop. All input errors in an ",v(o.a,null,"FormGroup")," will appear at the bottom of the group component component."),v(i.a,null,'function Example() {\n  const ERROR_MSG = \'Must be less than or equal to 3 characters long.\';\n\n  const [value, setValue] = React.useState(\'BigCommerce\');\n  const [error, setError] = React.useState(ERROR_MSG);\n\n  const handleSubmit = event => {\n    const form = event.currentTarget;\n\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n  };\n\n  const handleChange = event => {\n    const { target } = event;\n    const regex = RegExp(target.pattern, \'g\');\n\n    regex.test(target.value) ? setError(\'\') : setError(ERROR_MSG);\n\n    setValue(target.value);\n  };\n\n  return (\n    <Form onSubmit={handleSubmit}>\n      <FormGroup>\n        <Input\n          label="Example"\n          description="Remove characters to preview validation."\n          value={value}\n          error={error}\n          onChange={handleChange}\n          pattern="^.{1,3}$"\n          required\n        />\n      </FormGroup>\n      <FormGroup>\n        <Input label="City" error="You must enter a valid City." placeholder="Austin" required />\n        <Input label="State" placeholder="Texas" required />\n        <Input label="Postal Code" error="You must enter a valid Postal Code." placeholder="78726" required />\n      </FormGroup>\n    </Form>\n  );\n}'))}},c2K2:function(e,n,r){"use strict";var t=r("d2TB"),l=r("XPf/"),a=r("BtTX"),o=r("ERkP"),i=r.n(o),u=r("j/s1"),p=Object(u.e)(t.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);r.d(n,"a",(function(){return c}));var s=i.a.createElement,c=function(e){var n=e.children,r=e.title,i=Object(o.useState)(!0),u=i[0],c=i[1],d=function(){return c(!u)};return s("div",null,s(p,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},u?s(l.a,{title:"Expand"}):s(a.a,{title:"Collapse"}),s(t.Text,null,r)),!u&&n)}},lIm4:function(e,n,r){"use strict";var t=r("ERkP"),l=r.n(t),a=r("j/s1"),o=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,r=e.primary,t=e.theme;return n&&!r&&Object(a.d)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,r=e.theme;return n&&Object(a.d)(["color:",";"],r.colors.primary70)}));r.d(n,"a",(function(){return u}));var i=l.a.createElement,u=function(e){return i(o,e)};u.defaultProps={highlight:!0}},nFRM:function(e,n,r){"use strict";r.d(n,"a",(function(){return c}));var t=r("ysci"),l=r.n(t),a=r("d2TB"),o=r("ERkP"),i=r.n(o),u=r("lIm4"),p=r("c2K2"),s=i.a.createElement,c=function(e){var n=e.collapsible,r=e.id,t=e.propList,l=e.title,o=function(){return s(a.TableFigure,null,s(a.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,r=e.required;return s(i.a.Fragment,null,s(u.a,{primary:!0},n),r?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(u.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(a.Text,null,n)}}],items:t}),s(a.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(p.a,{title:"".concat(l," Props")},o()):s(i.a.Fragment,null,s(a.H2,{id:r},l),o())},d=function(e){var n=e.types;return l()(n)?n.map((function(e,r){return s(i.a.Fragment,{key:e},e.type===a.Link?s(u.a,{highlight:!1},e):s(u.a,null,e),r<n.length-1?" | ":null)})):n.type===a.Link?s(u.a,{highlight:!1},n):s(u.a,null,n)}},wnlw:function(e,n,r){var t=r("IFjL");t(t.S,"Array",{isArray:r("gNE/")})},ybwp:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Form/FormPage",function(){return r("XWwo")}])},ysci:function(e,n,r){e.exports=r("3thp")}},[["ybwp",1,2,4,6,9,8,0,3,5,7]]]);