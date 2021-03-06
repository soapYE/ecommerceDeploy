(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593cd2c8"],{2049:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.onsubmit(e)}}},[o("va-input",{attrs:{type:"text",label:"username",error:!!t.usrErrors.length,"error-messages":t.usrErrors},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),o("va-input",{attrs:{type:"password",label:t.$t("auth.password"),error:!!t.passwordErrors.length,"error-messages":t.passwordErrors},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("div",{staticClass:"row"},[o("va-input",{staticClass:"flex lg5",attrs:{type:"text",label:"Code",error:!!t.codeErrors.length,"error-messages":t.codeErrors},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),o("img",{staticClass:"flex offset--lg3 lg2 img",attrs:{src:t.codeUrl,alt:"Code"},on:{click:t.change_code}}),o("div",{staticClass:"flex lg1 refresh",staticStyle:{width:"30px"},on:{click:t.change_code}},[o("va-button",{attrs:{icon:"fa fa-refresh",small:""}})],1)],1),o("div",{staticClass:"auth-layout__options d-flex align--center justify--space-between"},[o("va-checkbox",{staticClass:"mb-0",attrs:{label:t.$t("auth.keep_logged_in")},model:{value:t.keepLoggedIn,callback:function(e){t.keepLoggedIn=e},expression:"keepLoggedIn"}}),o("router-link",{staticClass:"ml-1 link",attrs:{to:{name:"recover-password"}}},[t._v(t._s(t.$t("auth.recover_password")))])],1),o("div",{staticClass:"d-flex justify--center mt-3"},[o("va-button",{staticClass:"my-0",attrs:{type:"submit"}},[t._v(t._s(t.$t("auth.login")))])],1)],1)},n=[],s=o("7522"),a={name:"login",data:function(){return{username:"",password:"",code:"",codeUrl:"",keepLoggedIn:!1,usrErrors:[],passwordErrors:[],codeErrors:[]}},created:function(){var t=this;localStorage.removeItem("token"),console.log("created"),Object(s["m"])(this).then((function(e){console.log(e),t.codeUrl="data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce((function(t,e){return t+String.fromCharCode(e)}),"")),console.log(t.codeUrl)}))},computed:{formReady:function(){return!this.usrErrors.length&&!this.passwordErrors.length&&!this.codeErrors.length}},methods:{onsubmit:function(){var t=this;if(console.log("go"),this.usrErrors=this.username?[]:["Username is required"],this.passwordErrors=this.password?[]:["Password is required"],this.codeErrors=this.code?[]:["Code is required"],this.formReady){var e={username:this.username,password:this.password,code:this.code};Object(s["u"])(this,e).then((function(e){if(console.log(e),500===e.data.status)return console.log("Wrong!"),void t.showToast("Wrong password or code!",{icon:"fa-warning",position:"top-right",duration:2500,fullWidth:!1});var o=e.data.data;if(t.$store.commit("changeUserPermissions",o.permissions),t.$store.commit("changeUserRoleId",o.role.roleId),console.log(t.$store.state.user.roleId),e.data.data){console.log("login successful!"),"bvo"==o.role.name?(t.$store.commit("BVO_login",o),console.log("usrId: "+t.$store.state.bvo.bvo_usrId),console.log("permission: "+t.$store.state.bvo.permissions)):"mvo"==o.role.name&&(t.$store.commit("loginChange",o),console.log(t.$store.state.mvo.permissions));var r=new FormData;r.append("grant_type","password"),r.append("client_id","app"),r.append("client_secret","app"),r.append("username",t.username),r.append("password",t.password),Object(s["t"])(t,r).then((function(e){console.log(e),t.$store.commit("changeToken",e.data.access_token),window.localStorage["token"]=e.data.access_token,3==t.$store.state.user.roleId?t.$router.push({name:"audit-wallet"}):2==t.$store.state.user.roleId?t.$router.push({name:"BVO_info"}):t.$router.push({name:"mvo-main"})})).catch((function(t){console.log(t)}))}else console.log("Wrong!")}))}},change_code:function(){var t=this;Object(s["m"])(this).then((function(e){console.log(e),t.codeUrl="data:image/png;base64,"+btoa(new Uint8Array(e.data).reduce((function(t,e){return t+String.fromCharCode(e)}),""))}))}}},u=a,i=(o("531a"),o("2877")),c=Object(i["a"])(u,r,n,!1,null,null,null);e["default"]=c.exports},"531a":function(t,e,o){"use strict";var r=o("d454"),n=o.n(r);n.a},7522:function(t,e,o){"use strict";o.d(e,"u",(function(){return a})),o.d(e,"m",(function(){return u})),o.d(e,"t",(function(){return i})),o.d(e,"v",(function(){return c})),o.d(e,"d",(function(){return d})),o.d(e,"q",(function(){return l})),o.d(e,"e",(function(){return p})),o.d(e,"r",(function(){return f})),o.d(e,"s",(function(){return g})),o.d(e,"j",(function(){return m})),o.d(e,"g",(function(){return h})),o.d(e,"c",(function(){return v})),o.d(e,"k",(function(){return $})),o.d(e,"o",(function(){return b})),o.d(e,"w",(function(){return w})),o.d(e,"f",(function(){return k})),o.d(e,"i",(function(){return y})),o.d(e,"h",(function(){return _})),o.d(e,"a",(function(){return C})),o.d(e,"b",(function(){return U})),o.d(e,"n",(function(){return E})),o.d(e,"l",(function(){return x})),o.d(e,"z",(function(){return I})),o.d(e,"y",(function(){return j})),o.d(e,"x",(function(){return S})),o.d(e,"p",(function(){return O}));var r="39.106.57.246",n="4396",s="http://"+r+":"+n;function a(t,e){return console.log(t.$http.post(s+"/user/login",e)),t.$http.post(s+"/user/login",e)}function u(t){return t.$http.get(s+"/user/code",{responseType:"arraybuffer"})}function i(t,e){return t.tokenGet.post(s+"/oauth/token",e)}function c(t,e){return t.$http.post(s+"/user/register",e)}function d(t,e){return t.$http.post(s+"/pro/bvo/wishlist/add",e)}function l(t,e){return t.$http.get(s+"/pro/mvo/product/detail/get",{params:e})}function p(t,e){return t.$http.post(s+"/order/product/buy",e)}function f(t,e){return t.$http.get(s+"/pro/mvo/product/get",{params:e})}function g(t,e){return t.$http.get(s+"/pro/mvo/product/all",{params:e})}function m(t,e){return t.$http.post(s+"/pro/mvo/product/delete",e)}function h(t,e){return t.$http.post(s+"/pro/mvo/product/status/update",e)}function v(t,e){return t.$http.post(s+"/pro/mvo/product/add",e)}function $(t,e){return t.$http.post(s+"/pro/mvo/product/detail/update",e)}function b(t,e){return t.$http.get(s+"/order/info/get",{params:e})}function w(t,e){return t.$http.post(s+"/order/ship",e)}function k(t,e){return t.$http.post(s+"/order/ship/cancel",e)}function y(t,e){return t.$http.post(s+"/info/company/delete",e)}function _(t,e){return t.$http.post(s+"/info/brand/delete",e)}function C(t,e){return t.$http.post(s+"/info/brand/add",e)}function U(t,e){return t.$http.post(s+"/info/company/add",e)}function E(t,e){return console.log(t.$http.get(s+"/info/company/get",{params:e})),t.$http.get(s+"/info/company/get",{params:e})}function x(t,e){return t.$http.get(s+"/info/brand/get",{params:e})}function I(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(s+"/pro/mvo/product/image/upload",e)}function j(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(s+"/info/company/image/upload",e)}function S(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(s+"/info/brand/image/upload",e)}function O(t,e){return t.$http.get(s+"/info/brand/getAllByUserId",{params:e})}},d454:function(t,e,o){}}]);
//# sourceMappingURL=chunk-593cd2c8.69764b08.js.map