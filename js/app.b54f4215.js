(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0edd":function(t,e,n){"use strict";var a=n("e309"),o=n.n(a);o.a},1752:function(t,e,n){t.exports=n.p+"img/mail.eade4ed6.svg"},2823:function(t,e,n){},4912:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{backgroundColor:t.value,color:t.value},attrs:{id:"app"}},[!1===t.loading?n("Logo"):t._e(),!0===t.loading?n("Loader"):t._e(),!1===t.aboutOpen&&!1===t.loading?n("Home",{on:{inputChange:t.handleChange}}):t._e(),t.aboutOpen?n("About",{on:{closeAbout:function(e){t.aboutOpen=!1}}}):t._e(),!1===t.aboutOpen?n("div",{staticClass:"about-btn",on:{click:t.handleAboutOpen}},[n("span",{staticClass:"undrln"},[t._v("about.me")])]):t._e()],1)},r=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo",attrs:{href:""}},[n("div",{staticClass:"color"},[t._v("color")]),n("div",{staticClass:"ing"},[t._v("ing")])])}],c={name:"Logo"},u=c,l=(n("0edd"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"a998e454",null),d=f.exports,p=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"banner"},[a("div",{attrs:{id:"displayText"}},[e._v(" "+e._s(e.textDisplay)+" "),a("input",{attrs:{type:"text",placeholder:"color"},on:{input:function(e){return t.$emit("inputChange",e)}}}),e._v(" .")])])},v=[],m=["It’s all about","I like this","What a gorgeous","The style is nice, but do you have it in a different"],h=m[0],b=(m[1],m[2],m[3],m[4],"");function g(){b=1===performance.navigation.type?m[Math.floor(4*Math.random())]:h}g(),console.log(b);var _={name:"Home",props:{backgroundColor:String},data:function(){return{textDisplay:b}}},y=_,x=(n("dd08"),Object(l["a"])(y,p,v,!1,null,"d34b2520",null)),O=x.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boxwrapper"},[a("div",{staticClass:"boxmodel"},[a("img",{attrs:{src:n("c3e7")}}),a("h1",[t._v("Hi, my name is Adrian.")]),t._m(0),a("div",{staticClass:"socialbar"},[t._m(1),a("button",{attrs:{id:"item-center"}},[a("img",{attrs:{src:n("fbe8")}}),a("span",[t._v("+"+t._s(t.likeNum))])]),t._m(2)])]),a("div",{staticClass:"homeme",on:{click:function(e){return t.$emit("closeAbout")}}},[a("span",{staticClass:"undrln"},[t._v("home")])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Play with your color by typing them in the selected input. Next features are planned in the future. App made for fun. I hope you "),n("span",{staticClass:"heart-txt"},[t._v("like it")]),t._v(". Feel free to contact me using links below. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{id:"item-left",href:"mailto:vansmoe@hotmail.com"}},[a("img",{attrs:{src:n("1752")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{id:"item-right",href:"https://github.com/vansmoe"}},[a("img",{attrs:{src:n("aea7")}})])}],w={name:"About",data:function(){return{likeNum:10}}},$=w,k=(n("8a53"),Object(l["a"])($,C,j,!1,null,"6e6bb7c3",null)),A=k.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"load-page"},[a("img",{attrs:{id:"load-logo",src:n("9b19")}}),a("div",{staticClass:"loader"},[a("div"),a("div"),a("div"),a("div")])])}],P={name:"Loader"},M=P,S=(n("cd91"),Object(l["a"])(M,E,L,!1,null,"12afe279",null)),T=S.exports,H={name:"App",components:{Logo:d,Home:O,About:A,Loader:T},data:function(){return{loading:!0,aboutOpen:!1,value:""}},mounted:function(){setTimeout(this.handleLoading,2e3),console.log(this.loading)},methods:{handleAboutOpen:function(){this.aboutOpen=!0},handleChange:function(t){var e=t.target.value;this.value=e},handleLoading:function(){this.loading=!1}}},I=H,N=(n("5c0b"),Object(l["a"])(I,o,r,!1,null,null,null)),D=N.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},6854:function(t,e,n){},"8a53":function(t,e,n){"use strict";var a=n("2823"),o=n.n(a);o.a},"9b19":function(t,e,n){t.exports=n.p+"img/logo.a17390f9.svg"},"9c0c":function(t,e,n){},aea7:function(t,e,n){t.exports=n.p+"img/git.8b23db5f.svg"},c3e7:function(t,e,n){t.exports=n.p+"img/profile.39ec8e65.png"},cd91:function(t,e,n){"use strict";var a=n("6854"),o=n.n(a);o.a},dd08:function(t,e,n){"use strict";var a=n("4912"),o=n.n(a);o.a},e309:function(t,e,n){},fbe8:function(t,e,n){t.exports=n.p+"img/heart.6b74c474.svg"}});
//# sourceMappingURL=app.b54f4215.js.map