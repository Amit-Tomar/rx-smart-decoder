(this["webpackJsonprx-smart-decoder"]=this["webpackJsonprx-smart-decoder"]||[]).push([[0],{184:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),o=a(26),r=a.n(o),m=(a(47),a(36)),g=a(37),c=a(12),d=a(209),l=a(35),s=a.n(l),p=a(13),u=a(211),f=a(208),h=a(210),x=a(207),b=a(6),v=a(206),E=(a(27),a(7));a(52);function w(){var e=Object(c.a)(['\n  width: 300px;\n  margin: 0;\n  margin-top: 2px;\n  padding: 0;\n  position: absolute;\n  list-style: none;\n  background-color: #fff;\n  overflow: auto;\n  max-height: 250px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 1;\n\n  & li {\n    padding: 5px 12px;\n    display: flex;\n\n    & span {\n      flex-grow: 1;\n    }\n\n    & svg {\n      color: transparent;\n    }\n  }\n\n  & li[aria-selected="true"] {\n    background-color: #fafafa;\n    font-weight: 600;\n\n    & svg {\n      color: #1890ff;\n    }\n  }\n\n  & li[data-focus="true"] {\n    background-color: #e6f7ff;\n    cursor: pointer;\n\n    & svg {\n      color: #000;\n    }\n  }\n']);return w=function(){return e},e}function j(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin: 2px;\n  line-height: 22px;\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n  box-sizing: content-box;\n  padding: 0 4px 0 10px;\n  outline: 0;\n  overflow: hidden;\n\n  &:focus {\n    border-color: #40a9ff;\n    background-color: #e6f7ff;\n  }\n\n  & span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  & svg {\n    font-size: 18px;\n    cursor: pointer;\n    padding: 4px;\n  }\n"]);return j=function(){return e},e}function y(){var e=Object(c.a)(["\n  width: 95%;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n\n  &:hover {\n    border-color: #40a9ff;\n  }\n\n  &.focused {\n    border-color: #40a9ff;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n  }\n\n  & input {\n    font-size: 14px;\n    line-height: 26px;\n    padding: 2px 6px;\n    flex-grow: 1;\n    border: 0;\n    outline: 0;\n  }\n"]);return y=function(){return e},e}function z(){var e=Object(c.a)(["\n  padding: 0px 5px 0px 5px;\n  line-height: 1;\n  display: block;\n  position: absolute;\n  left: 10px;\n  top: -7px;\n  z-index: 1;\n  background-color: white;\n  font-size: 12px;\n"]);return z=function(){return e},e}function O(){var e=Object(c.a)(["\n  padding: 0 0 4px;\n  line-height: 1.5;\n  display: block;\n"]);return O=function(){return e},e}var k=Object(p.a)("label")(O()),I=Object(p.a)("label")(z()),D=Object(p.a)("div")(y()),S=Object(p.a)((function(e){var n=e.label,a=(e.onDelete,e.currentInputIndex),t=Object(g.a)(e,["label","onDelete","currentInputIndex"]);return i.a.createElement("div",t,0===a&&i.a.createElement(b.a,{icon:E.e}),1===a&&i.a.createElement(b.a,{icon:E.f}),2===a&&i.a.createElement(b.a,{icon:E.c}),3===a&&i.a.createElement(b.a,{icon:E.a}),a>=4&&i.a.createElement(b.a,{icon:E.d}),i.a.createElement("span",null,n))}))(j()),P=Object(p.a)("ul")(w()),N=[];var L=[{medicine:"Risperidone",dosage:["0.25mg","0.5mg","1mg","2mg","3mg","4mg"]},{medicine:"Olanzapine",dosage:["2.5mg","5mg","7.5mg","10mg","15mg","20mg"]},{medicine:"Clozapine",dosage:["12.5mg","25mg","50mg","100mg","200mg"]},{medicine:"Haloperidol",dosage:["0.5mg","1mg","2mg","5mg","10mg","20mg"]},{medicine:"Chlorpromazine",dosage:["10mg","25mg","50mg","100mg","200mg"]},{medicine:"Trihexyphenidyl",dosage:["2mg"]},{medicine:"Imipramine",dosage:["10mg","25mg","50mg"]},{medicine:"Amitriptyline",dosage:["10mg","25mg","50mg","75mg","100mg","150mg"]},{medicine:"Flouxetine",dosage:["10mg","20mg","40mg"]},{medicine:"Sertraline",dosage:["25mg","50mg","100mg"]},{medicine:"Paroxetine",dosage:["12.5mg","25mg","37.5mg","10mg","20mg","30mg","40mg"]},{medicine:"Sodium Valproate",dosage:["125mg","250mg","500mg","1gm"]},{medicine:"Carbamazepine",dosage:["100mg","200mg","300mg","400mg"]},{medicine:"Lithium",dosage:["300mg","400mg","350mg"]},{medicine:"Clonidine",dosage:["0.1mg","0.2mg","0.3mg"]},{medicine:"Atomoxetine",dosage:["10mg","18mg","25mg","60mg","60mg","80mg","100mg"]},{medicine:"Lorazepam",dosage:["0.5mg","1mg","2mg"]},{medicine:"Diazepam",dosage:["2mg","5mg","10mg"]},{medicine:"Oxazepam",dosage:["10mg","15mg","30mg"]},{medicine:"Disulfiram",dosage:["250mg","500mg"]},{medicine:"Naltrexone",dosage:["50mg"]},{medicine:"Acamprosate",dosage:["33mg"]},{medicine:"Nicotine Gums",dosage:["2mg","4mg"]},{medicine:"Varenicline",dosage:["0.5mg","1mg"]},{medicine:"Injection Fluphenazine",dosage:["12.5mg","25mg"]},{medicine:"Injection Haloperidol",dosage:["50mg","100mg"]},{medicine:"Injection Flupenthixol",dosage:["20mg","40mg"]},{medicine:"Injection Lorazepam",dosage:["2mg","4mg"]},{medicine:"Injection Diazepam",dosage:["5mg","10mg"]},{medicine:"Injection Promathazine",dosage:["12.5mg","25mg","50mg","100mg"]},{medicine:"Injection Thiamine/Multivitamin",dosage:["100mg/ml"]}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{filterOptions:e},n=Object(d.a)({id:"customized-hook-demo",defaultValue:null,multiple:!0,freeSolo:!0,options:N,getOptionLabel:function(e){return e}}),a=n.getRootProps,t=n.getInputLabelProps,o=n.getInputProps,r=n.getTagProps,g=n.getListboxProps,c=n.getOptionProps,l=n.groupedOptions,p=n.value,w=n.focused,j=n.setAnchorEl,y=p.length,z=i.a.useState(new Set),O=Object(m.a)(z,2),A=O[0];O[1],N.length=0;var B=o().value;console.log(o()),0===y?N=L.map((function(e){return e.medicine})):1===y?(L.forEach((function(e){e.medicine===p[0]&&(N=e.dosage.slice())})),B&&(N.push(B+"mg"),N.push(B+"ml"),N.push(B+"mg/ml"))):2===y?isNaN(B)||(B=B||1,N.push(B+"-"+B+"-"+B),N.push(B+"-"+B+"-"+B+"-"+B),N.push("0-"+B+"-"+B),N.push(B+"-0-"+B),N.push(B+"-"+B+"-0"),N.push("0-"+B+"-"+B+"-"+B),N.push(B+"-0-"+B+"-"+B),N.push(B+"-"+B+"-0-"+B),N.push(B+"-"+B+"-"+B+"-0")):3===y&&(isNaN(B)||(B=B||1,N.push(B+"day"),N.push(B+"week"),N.push(B+"month")));var T=function(e){return A.has(e)};return i.a.createElement("div",{style:{padding:"24px"}},i.a.createElement(v.a,{style:{padding:"10px"}},i.a.createElement(x.a,{variant:"h3",gutterBottom:!0,style:{fontSize:"2.5em"}},"Prescription for Amit Tomar"),i.a.createElement(x.a,{variant:"h6",gutterBottom:!0,style:{fontSize:"1em",color:"grey"}},"Dr. Robert N., General Physician"),i.a.createElement(x.a,{variant:"h6",gutterBottom:!0,style:{fontSize:"1em",color:"grey"}},"Last visited on : 2 Nov 2019")),i.a.createElement("div",{style:{padding:"10px"}},i.a.createElement(u.a,{activeStep:y},["Medicine","Dosage","Dosing Time","Duration","Remark"].map((function(e,n){e=n<4?e+"*":e;var a={};return T(n)&&(a.completed=!1),i.a.createElement(f.a,Object.assign({key:e},a),i.a.createElement(h.a,{},e))}))),i.a.createElement(k,Object.assign({},t(),{style:{paddingBottom:"10px"}}),"Press enter after input"),i.a.createElement("div",a(),i.a.createElement(D,{ref:j,className:w?"focused":""},i.a.createElement(I,t(),function(e){switch(e){case 0:return"Medicine";case 1:return"Dosage";case 2:return"Dosing Time";case 3:return"Duration";case 4:return"Suggestion";default:return i.a.createElement(b.a,{icon:E.b,color:"green"})}}(y)),p.map((function(e,n){return i.a.createElement(S,Object.assign({label:e||e,currentInputIndex:n},r({index:n})))})),y<5&&i.a.createElement("input",Object.assign({},o(),{placeholder:function(e){switch(e){case 0:return"Diazepam";case 1:return"10mg";case 2:return"1-1-1";case 3:return"4day";case 4:return"Suggestion";default:return i.a.createElement(b.a,{icon:E.b,color:"green"})}}(y),pattern:"[A-Z]"})))),l.length>0?i.a.createElement(P,g(),l.map((function(e,n){return i.a.createElement("li",c({option:e,index:n}),i.a.createElement("span",null,e),i.a.createElement(s.a,{fontSize:"small"}))}))):null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,n,a){e.exports=a(184)},47:function(e,n,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.678f82f3.chunk.js.map