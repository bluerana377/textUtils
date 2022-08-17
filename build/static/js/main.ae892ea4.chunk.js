(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},27:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(13),c=t.n(o),r=(t(25),t(7)),s=(t(27),t(6)),i=t.n(s),d=t(9);function m(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("form",{className:"d-flex"},n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefaullt"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked"},"Enable Dark mode")))))))}function u(e){var a=Object(l.useState)("Enter text here"),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to uppercase","success")}},"Convert to Upercase"),n.a.createElement("button",{className:"btn btn-success mx-1",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-danger mx-1",onClick:function(){c(""),e.showAlert("Text Cleared","success")}},"Clear text"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var a=document.getElementById("myBox");a.select(),a.setSelectionRange(0,9999),navigator.clipboard.writeText(a.value),e.showAlert("Copied clipboard","success")}},"Copy text"),n.a.createElement("button",{className:"btn btn-info mx-1",onClick:function(){var a=o.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra spaces removed","success")}},"Remove extra spaces")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h2",null,"Text Summery "),n.a.createElement("p",null,o.split(" ").length," word and ",o.length," cherecter"),n.a.createElement("p",null,.008*o.split(" ").length," Minutes to read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter something in the textbox to preview it here")))}function h(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Light Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",{className:"my-3"},n.a.createElement("button",{onClick:function(){"black"===t.color?(o({color:"White",backgroundColor:"black",border:"1px solid white"}),d("Enable Dark Mode")):(o({color:"black",backgroundColor:"white"}),d("Enable Light Mode"))},type:"button",className:"btn btn-primary"},i)))}m.protoTypes={title:i.a.string.isRequired,aboutText:i.a.string},m.defaultProps={title:"set title here",aboutText:"about"};var b=function(e){return e.alert&&n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),e.alert.msg))},p=t(0);var g=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),s=Object(r.a)(c,2),i=s[0],g=s[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(m,{title:"textUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#042743",E("Dark mode has been enable","success"),document.title="TextUtils - Dark Mode"):(o("light"),document.body.style.backgroundColor="white",E("Dark mode has been enable","success"),document.title="TextUtils - Light Mode")}}),n.a.createElement(b,{alert:i}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/about"},n.a.createElement(h,null)),n.a.createElement(p.a,{exact:!0,path:"/"},n.a.createElement(u,{showAlert:E,heading:"Enter the text to analyze bellow",mode:t}))))))},E=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,37)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null))),E()}},[[16,3,2]]]);
//# sourceMappingURL=main.ae892ea4.chunk.js.map