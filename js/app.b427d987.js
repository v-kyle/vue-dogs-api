(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-dogs-api/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"6f79":function(e,t,r){"use strict";r("e601")},8906:function(e,t,r){"use strict";r("97e9")},"97e9":function(e,t,r){},"9c0c":function(e,t,r){},a57d:function(e,t,r){"use strict";r("b4f5")},b4f5:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v(" Home ")]),r("DogsPicker"),e._v(" | "),r("router-link",{attrs:{to:"/favorites"}},[e._v(" Favorites ")])],1),r("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBreed,expression:"selectedBreed"}],staticClass:"dogs-picker",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedBreed=t.target.multiple?r:r[0]},e.updateBreed]}},e._l(e.breeds,(function(t,n){return r("option",{key:n},[e._v(e._s(t))])})),0)},i=[],c=r("5530"),u=r("2f62"),l=n["a"].extend({name:"DogsPicker",data:function(){return{selectedBreed:"random"}},computed:Object(c["a"])({},Object(u["b"])({breeds:function(e){return e.breeds.breeds}})),methods:{updateBreed:function(){this.$store.dispatch("breeds/updateSelectedBreed",this.selectedBreed)}}}),d=l,f=(r("a57d"),r("2877")),p=Object(f["a"])(d,s,i,!1,null,null,null),m=p.exports,v=n["a"].extend({name:"App",components:{DogsPicker:m},created:function(){this.$store.dispatch("breeds/loadAllBreeds"),this.$store.dispatch("favorites/loadSavedFavorites")}}),g=v,h=(r("5c0b"),Object(f["a"])(g,a,o,!1,null,null,null)),b=h.exports,w=r("8c4f"),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ImagesGrid",{attrs:{items:e.dogs,"general-alt":"dog"}})},x=[],y=r("2909"),j=(r("96cf"),r("1da1")),_=(r("99af"),r("4de4"),r("b64b"),r("bc3a")),k=r.n(_),F=k.a.create({baseURL:"https://dog.ceo/api/"});function B(e){return S.apply(this,arguments)}function S(){return S=Object(j["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,s,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:40,n="breed/".concat(t,"/images/random/").concat(r),a="breeds/image/random/".concat(r),o="random"===t?a:n,e.next=6,F.get(o);case 6:return s=e.sent,e.abrupt("return","success"===s.data.status?s.data.message:null);case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function R(){return H.apply(this,arguments)}function H(){return H=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.get("breeds/list/all");case 2:return t=e.sent,r=t.data,e.abrupt("return","success"===r.status?Object.keys(r.message).filter((function(e){return 0===r.message[e].length})):null);case 5:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}var I=r("2ef0"),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"images-grid"},[e._l(e.items,(function(t,n){return[r("ImageContainer",{key:n,attrs:{src:t,"general-alt":e.generalAlt}})]}))],2)},E=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image-container",on:{click:e.clickHandler}},[r("img",{staticStyle:{width:"300px",height:"200px"},attrs:{src:e.src,alt:e.generalAlt}}),r("div",{staticClass:"image-icon",class:{show:e.isFavorite}},[e._v("❤")])])},A=[],T=(r("caad"),r("2532"),n["a"].extend({name:"ImageContainer",props:{src:{type:String,required:!0},generalAlt:{type:String,default:"Image"}},computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])({favorites:function(e){return e.favorites.favorites}})),{},{isFavorite:function(){return this.favorites.includes(this.src)}}),methods:{clickHandler:function(){this.isFavorite?this.$store.dispatch("favorites/removeFromFavorites",this.src):this.$store.dispatch("favorites/addToFavorite",this.src)}}})),C=T,D=(r("6f79"),Object(f["a"])(C,P,A,!1,null,null,null)),G=D.exports,J=n["a"].extend({name:"ImagesGrid",components:{ImageContainer:G},props:{items:{type:Array,default:function(){return[]}},generalAlt:{type:String,default:"Image"}}}),M=J,L=(r("8906"),Object(f["a"])(M,$,E,!1,null,null,null)),N=L.exports,q=n["a"].extend({name:"Home",components:{ImagesGrid:N},data:function(){return{dogs:[]}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.addEventListener("scroll",e.debouncedScrollHandler()),t.next=3,e.loadDogs();case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("scroll",this.debouncedScrollHandler())},computed:Object(c["a"])({},Object(u["b"])({selectedBreed:function(e){return e.breeds.selectedBreed}})),methods:{loadDogs:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B(e.selectedBreed);case 2:r=t.sent,r&&(n=e.dogs).push.apply(n,Object(y["a"])(r));case 4:case"end":return t.stop()}}),t)})))()},scrollHandler:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=document.documentElement.scrollTop+window.innerHeight>.95*document.documentElement.offsetHeight,!r){t.next=4;break}return t.next=4,e.loadDogs();case 4:case"end":return t.stop()}}),t)})))()},debouncedScrollHandler:function(){return Object(I["debounce"])(this.scrollHandler,500)}},watch:{selectedBreed:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,B(e);case 2:n=r.sent,n&&(t.dogs=[],(a=t.dogs).push.apply(a,Object(y["a"])(n)));case 4:case"end":return r.stop()}}),r)})))()}}}),U=q,z=Object(f["a"])(U,O,x,!1,null,null,null),K=z.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ImagesGrid",{attrs:{items:e.dogs,"general-alt":"dog"}})},V=[],W=n["a"].extend({name:"Favorites",components:{ImagesGrid:N},computed:Object(c["a"])({},Object(u["b"])({dogs:function(e){return e.favorites.favorites}}))}),X=W,Y=Object(f["a"])(X,Q,V,!1,null,null,null),Z=Y.exports;n["a"].use(w["a"]);var ee=[{path:"/",name:"Home",component:K},{path:"/favorites",name:"Favorites",component:Z}],te=new w["a"]({mode:"history",base:"/vue-dogs-api/",routes:ee}),re=te,ne=function(){return{breeds:[],selectedBreed:"random"}},ae={},oe={loadAllBreeds:function(e){return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,R();case 3:n=t.sent,n&&n.length&&n.push("random"),r("setBreeds",n&&n.length?n:[]);case 6:case"end":return t.stop()}}),t)})))()},updateSelectedBreed:function(e,t){var r=e.commit;r("setBreed",t)}},se={setBreeds:function(e,t){e.breeds=Object(y["a"])(t)},setBreed:function(e,t){e.selectedBreed=t}},ie={namespaced:!0,state:ne,getters:ae,actions:oe,mutations:se},ce=(r("c975"),r("a434"),"favorites");function ue(e){localStorage.setItem(ce,JSON.stringify(e))}function le(){var e=localStorage.getItem(ce);return e?JSON.parse(e):[]}var de=function(){return{favorites:[]}},fe={},pe={loadSavedFavorites:function(e){var t=e.commit,r=le();t("setFavorites",r)},addToFavorite:function(e,t){var r=e.commit;r("addToFavorite",t)},removeFromFavorites:function(e,t){var r=e.commit;r("removeFromFavorites",t)}},me={setFavorites:function(e,t){e.favorites=t},addToFavorite:function(e,t){e.favorites.push(t),ue(e.favorites)},removeFromFavorites:function(e,t){var r=e.favorites.indexOf(t);r>-1&&e.favorites.splice(r,1),ue(e.favorites)}},ve={namespaced:!0,state:de,getters:fe,actions:pe,mutations:me};n["a"].use(u["a"]);var ge=new u["a"].Store({modules:{breeds:ie,favorites:ve}});n["a"].config.productionTip=!1,new n["a"]({router:re,store:ge,render:function(e){return e(b)}}).$mount("#app")},e601:function(e,t,r){}});
//# sourceMappingURL=app.b427d987.js.map