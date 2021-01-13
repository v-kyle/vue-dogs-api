(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-dogs/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";r("9c0c")},8906:function(e,t,r){"use strict";r("97e9")},"97e9":function(e,t,r){},"9c0c":function(e,t,r){},a57d:function(e,t,r){"use strict";r("b4f5")},b4f5:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("DogsPicker",{on:{input:e.pickerHandler}}),e._v(" | "),r("router-link",{attrs:{to:"/favorites"}},[e._v("Favorites")])],1),r("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBreed,expression:"selectedBreed"}],staticClass:"dogs-picker",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedBreed=t.target.multiple?r:r[0]}}},e._l(e.breeds,(function(t,n){return r("option",{key:n},[e._v(e._s(t))])})),0)},c=[],i=(r("96cf"),r("1da1")),u=r("5530"),l=r("2f62"),d=n["a"].extend({name:"DogsPicker",data:function(){return{selectedBreed:"random"}},computed:Object(u["a"])({},Object(l["b"])("breeds",{breeds:"dogsBreeds"})),watch:{selectedBreed:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e&&t.$emit("input",e);case 1:case"end":return r.stop()}}),r)})))()}}}),f=d,p=(r("a57d"),r("2877")),m=Object(p["a"])(f,s,c,!1,null,null,null),v=m.exports,g=n["a"].extend({name:"App",components:{DogsPicker:v},created:function(){this.$store.dispatch("breeds/loadAllBreeds"),this.$store.dispatch("favorites/loadSavedFavorites")},methods:{pickerHandler:function(e){this.$store.dispatch("breeds/updateSelectedBreed",e)}}}),h=g,b=(r("5c0b"),Object(p["a"])(h,a,o,!1,null,null,null)),w=b.exports,O=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ImagesGrid",{attrs:{items:e.dogs,"general-alt":"dog"}})},x=[],j=r("2909"),_=(r("99af"),r("4de4"),r("b64b"),r("bc3a")),k=r.n(_),B=k.a.create({baseURL:"https://dog.ceo/api/"});function S(e){return R.apply(this,arguments)}function R(){return R=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:40,e.next=3,B.get("random"!==t?"breed/".concat(t,"/images/random/").concat(r):"breeds/image/random/".concat(r));case 3:return n=e.sent,e.abrupt("return","success"===n.data.status?n.data.message:null);case 5:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function F(){return H.apply(this,arguments)}function H(){return H=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B.get("breeds/list/all");case 2:return t=e.sent,r=t.data,e.abrupt("return","success"===r.status?Object.keys(r.message).filter((function(e){return 0===r.message[e].length})):null);case 5:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}var $=r("2ef0"),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"images-grid"},[e._l(e.items,(function(t,n){return[r("div",{key:n,staticClass:"image-container",on:{click:function(){return e.clickHandler(t)}}},[r("img",{staticStyle:{width:"300px",height:"200px"},attrs:{src:t,alt:e.generalAlt}}),r("div",{staticClass:"image-icon"},[e._v("❤")])])]}))],2)},P=[],T={name:"ImagesGrid",props:{items:{type:Array,default:function(){return[]}},generalAlt:{type:String,default:"Image"}},computed:Object(u["a"])({},Object(l["b"])("favorites",{favorites:"favorites"})),methods:{clickHandler:function(e){console.log(e)}}},A=T,D=(r("8906"),Object(p["a"])(A,E,P,!1,null,null,null)),I=D.exports,C=n["a"].extend({name:"Home",components:{ImagesGrid:I},data:function(){return{dogs:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.addEventListener("scroll",e.debouncedScrollHandler()),t.next=3,e.loadDogs();case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("scroll",this.debouncedScrollHandler())},computed:Object(u["a"])({},Object(l["b"])("breeds",{selectedBreed:"selectedBreed"})),methods:{loadDogs:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S(e.selectedBreed);case 2:r=t.sent,r&&(n=e.dogs).push.apply(n,Object(j["a"])(r));case 4:case"end":return t.stop()}}),t)})))()},scrollHandler:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=document.documentElement.scrollTop+window.innerHeight>.95*document.documentElement.offsetHeight,!r){t.next=4;break}return t.next=4,e.loadDogs();case 4:case"end":return t.stop()}}),t)})))()},debouncedScrollHandler:function(){return Object($["debounce"])(this.scrollHandler,500)}},watch:{selectedBreed:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,S(e);case 2:n=r.sent,n&&(t.dogs=[],(a=t.dogs).push.apply(a,Object(j["a"])(n)));case 4:case"end":return r.stop()}}),r)})))()}}}),J=C,M=Object(p["a"])(J,y,x,!1,null,null,null),G=M.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("This is an favorites page")])])}],U=n["a"].extend({name:"Favorites"}),q=U,z=Object(p["a"])(q,L,N,!1,null,null,null),K=z.exports;n["a"].use(O["a"]);var Q=[{path:"/",name:"Home",component:G},{path:"/favorites",name:"Favorites",component:K}],V=new O["a"]({mode:"history",base:"/vue-dogs/",routes:Q}),W=V,X=function(){return{breeds:[],selectedBreed:"random"}},Y={dogsBreeds:function(e){return e.breeds},selectedBreed:function(e){return e.selectedBreed}},Z={loadAllBreeds:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,F();case 3:n=t.sent,n&&n.length&&n.push("random"),r("setBreeds",n&&n.length?n:[]);case 6:case"end":return t.stop()}}),t)})))()},updateSelectedBreed:function(e,t){var r=e.commit;r("setBreed",t)}},ee={setBreeds:function(e,t){e.breeds=Object(j["a"])(t)},setBreed:function(e,t){e.selectedBreed=t}},te={namespaced:!0,state:X,getters:Y,actions:Z,mutations:ee},re="favorites";function ne(e){localStorage.setItem(re,JSON.stringify(e))}function ae(){var e=localStorage.getItem(re);return e?JSON.parse(e):[]}var oe=function(){return{favorites:[]}},se={favorites:function(e){return e.favorites}},ce={loadSavedFavorites:function(e){var t=e.commit,r=ae();t("setFavorites",r)},addToFavorite:function(e,t){var r=e.commit;r("addToFavorite",t)},removeFromFavorites:function(e,t){var r=e.commit;r("removeFromFavorites",t)}},ie={setFavorites:function(e,t){e.favorites=t},addToFavorite:function(e,t){e.favorites.push(t),ne(e.favorites)}},ue={namespaced:!0,state:oe,getters:se,actions:ce,mutations:ie};n["a"].use(l["a"]);var le=new l["a"].Store({modules:{breeds:te,favorites:ue}});n["a"].config.productionTip=!1,new n["a"]({router:W,store:le,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.cff1e1f2.js.map