(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(14),a(1)),s=a(2),i=a(4),u=a(3),m=a(7),h=a.n(m),p=a(8),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).ubdatequery=function(e){n.setState({query:e.trim()})},n.clearquery=function(){n.setState({query:""})},n.state={query:"",value:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.onsale,l=a.open,c=a.ondeletebtn,o=a.library,s=this.state.query;if(s){var i=new RegExp(h()(s," i"));e=o.filter((function(e){return i.test(e.name)}))}else e=o;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){return t.ubdatequery(e.target.value)},value:this.state.query,placeholder:"Search for By Name",className:"search"}),e.length!==o.length&&r.a.createElement("div",null,r.a.createElement("span",{className:"showing"},"showing ",e.length," of ",o.length),r.a.createElement("button",{onClick:this.clearquery,className:"showingbtn"}," ","SHOW ALL"),";"),l?e.map((function(e){return r.a.createElement("section",{key:e.id,className:"book-list"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.Avatar,")")},className:"myimage"}),r.a.createElement(p.a,{className:"rating",value:t.state.value,size:"20px",activeColor:"red",onChange:function(e){return t.setState({value:e})}}),r.a.createElement("h3",{className:"sale"},n?"SalE!":""),r.a.createElement("h3",{className:"bookname"},e.name),r.a.createElement("small",{className:"bookwriter"},e.Writer),r.a.createElement("h4",{className:"before"}," ",e.pricebefore," "),r.a.createElement("h4",null,e.priceafter),r.a.createElement("button",{className:"MOREDETILS"}," MORE DETAILS..."),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"ADDTOCART"},"ADD TO CART",r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"1",className:"qty"}),r.a.createElement("br",null),r.a.createElement("button",{className:"checkout"},"proceed to checkout"),r.a.createElement("button",{onClick:function(){return c(e)}},"Remove")),r.a.createElement("hr",null))})):r.a.createElement("h3",null,"we are closed"))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sale:!0,open:!0,library:[{id:"one",name:"Book to Die For",Writer:"Agatha Christie",pricebefore:"\u20ac17.00",priceafter:"\u20ac11.00",SALE:"!PRODUCT ON SALE",Avatar:"https://themedemos.webmandesign.eu/angelica/wp-content/uploads/sites/24/WMDEMO__canva-13-240x383.jpg"},{id:"two",name:"Replied As Even Let",Writer:"Alexander Dumas",pricebefore:"\u20ac17.00 ",priceafter:"\u20ac13.00",SALE:"!PRODUCT ON SALE",Avatar:"https://themedemos.webmandesign.eu/angelica/wp-content/uploads/sites/24/WMDEMO__canva-10-240x383.jpg"},{id:"three",name:"Charles Dickens",Writer:"Alexander Dumas",pricebefore:" \u20ac13.00",priceafter:"\u20ac11.00",SALE:"!PRODUCT ON SALE",Avatar:"https://themedemos.webmandesign.eu/angelica/wp-content/uploads/sites/24/WMDEMO__canva-15-240x383.jpg"}]},e.removebtn=function(t){e.setState={library:e.state.library.filter((function(e){return e.id!==t}))}},e.removebtn=function(t){e.setState({library:e.state.library.filter((function(e){return e.id!==t.id}))})},e.changestatues=function(){e.setState({open:!e.state.open})},e.changesale=function(){e.setState({sale:!e.state.sale})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.changesale},"Sale today"),r.a.createElement(b,{ondeletebtn:this.removebtn,library:this.state.library,onsale:this.state.sale,open:this.state.open}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.54292dd8.chunk.js.map