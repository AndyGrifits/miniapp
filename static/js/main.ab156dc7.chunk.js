(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(8),c=n.n(o);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);var r=n(2),u=n(3),i=n(5),l=n(4),d=n(6),h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={count:0},n.whenPressedPlus=function(){n.setState({count:n.state.count+1})},n.whenPressedMinus=function(){n.state.count>0&&n.setState({count:n.state.count-1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("input",{type:"text",placeholder:"item"}),s.a.createElement("button",{onClick:this.whenPressedMinus,className:"btn btn-secondary btn-sm"},"-"),s.a.createElement("button",{onClick:this.whenPressedPlus,className:"btn btn-secondary btn-sm"},"+"),s.a.createElement("span",{className:this.getBadgeStyle()},this.formatCount()))}},{key:"getBadgeStyle",value:function(){var e="badge m-2 badge-";return 0===this.state.count?e+="warning":e+="primary",e}},{key:"formatCount",value:function(){return 0===this.state.count?"Zero":this.state.count}}]),t}(a.Component),p=n(1),m=n.n(p),b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={counters:[{id:1,value:0,name:""}],fetchedUser:null},n.newItem=function(){n.setState({counters:n.state.counters.concat({id:n.state.counters.length+1,value:0})}),console.log(n.state.counters),n.getUserProfile(),console.log(n.state.fetchedUser.sex)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getUserProfile",value:function(){var e=this;m.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":e.setState({authToken:t.detail.data.access_token}),e.getItems();break;default:console.log(t.detail.type)}})),m.a.send("VKWebAppGetUserInfo",{}),m.a.send("VKWebAppGetAuthToken",{app_id:6906999,scope:"market"})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.newItem,className:"btn btn-primary btn-sm"},"Add"),this.state.counters.map((function(e){return s.a.createElement(h,{key:e.id,value:e.value,selected:!0})})))}}]),t}(a.Component);m.a.send("VKWebAppInit",{}),c.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ab156dc7.chunk.js.map