(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b97f029"],{"547f":function(t,e,r){},"5f9e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.onsubmit()}}},[r("div",{staticClass:"layout gutter--md fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"flex lg6"},[r("va-input",{attrs:{type:"text",label:"Username",error:!!t.usrErrors.length,"error-messages":t.usrErrors},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),r("div",{staticClass:"flex lg6"},[r("va-input",{attrs:{type:"text",label:"Realname",error:!!t.realnameErrors.length,"error-messages":t.realnameErrors},model:{value:t.realname,callback:function(e){t.realname=e},expression:"realname"}})],1)])]),r("div",{staticClass:"layout gutter--md fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"flex lg6"},[r("va-input",{attrs:{type:"text",label:"Phone number",error:!!t.phonenumErrors.length,"error-messages":t.phonenumErrors},model:{value:t.phone_num,callback:function(e){t.phone_num=e},expression:"phone_num"}})],1),r("div",{staticClass:"flex lg6"},[r("va-input",{attrs:{type:"email",label:t.$t("auth.email"),error:!!t.emailErrors.length,"error-messages":t.emailErrors},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)])]),r("div",{staticClass:"layout gutter--md fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"flex lg6"},[r("va-input",{attrs:{type:"password",label:t.$t("auth.password"),error:!!t.passwordErrors.length,"error-messages":t.passwordErrors},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("div",{staticClass:"flex lg6"},[r("va-select",{attrs:{label:"Select your role",textBy:"description",options:t.simpleOptions,clearable:"false",noClear:""},model:{value:t.SelectModel,callback:function(e){t.SelectModel=e},expression:"SelectModel"}})],1)])]),r("div",{staticClass:"layout gutter--md fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"flex lg1",on:{mouseenter:t.visible_,mouseleave:t.invisible_}},[r("va-icon",{staticStyle:{width:"30px"},attrs:{slot:"prepend",color:"gray",name:"fa fa-question-circle-o"},slot:"prepend"})],1),r("div",{staticClass:"flex lg5"},[r("va-input",{attrs:{type:"text",label:"Wallet username",error:!!t.walletUsrErrors.length,"error-messages":t.walletUsrErrors},model:{value:t.walletUsr,callback:function(e){t.walletUsr=e},expression:"walletUsr"}})],1),r("div",{staticClass:"flex lg6"},[r("va-input",{attrs:{type:"password",label:"Wallet password",error:!!t.walletPwdErrors.length,"error-messages":t.walletPwdErrors},model:{value:t.walletPwd,callback:function(e){t.walletPwd=e},expression:"walletPwd"}})],1)])]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.seen,expression:"seen"}],staticClass:"hint"},[t._v("No wallet account now? Register one! click the button on the top right corner~ ")]),r("div",{staticClass:"auth-layout__options d-flex align--center justify--space-between"},[r("va-checkbox",{staticClass:"mb-0",attrs:{error:!!t.agreedToTermsErrors.length,errorMessages:t.agreedToTermsErrors},model:{value:t.agreedToTerms,callback:function(e){t.agreedToTerms=e},expression:"agreedToTerms"}},[r("template",{slot:"label"},[t._v(" "+t._s(t.$t("auth.agree"))+" "),r("span",{staticClass:"link"},[t._v(t._s(t.$t("auth.termsOfUse")))])])],2),r("router-link",{staticClass:"ml-1 link",attrs:{to:{name:"recover-password"}}},[t._v(" "+t._s(t.$t("auth.recover_password"))+" ")])],1),r("div",{staticClass:"d-flex justify--center mt-3"},[r("va-button",{staticClass:"my-0",attrs:{type:"submit"}},[t._v(t._s(t.$t("auth.sign_up")))])],1)])},o=[],s=r("b933"),a=r("7522"),i={name:"signup",data:function(){return{username:"",realname:"",phone_num:"",email:"",password:"",walletUsr:"",walletPwd:"",agreedToTerms:!1,emailErrors:[],passwordErrors:[],agreedToTermsErrors:[],usrErrors:[],realnameErrors:[],phonenumErrors:[],walletUsrErrors:"",walletPwdErrors:"",SelectModel:"mvo",seen:!1,simpleOptions:[{id:1,description:"mvo"},{id:2,description:"bvo"}]}},methods:{onsubmit:function(){var t=this;if(this.emailErrors=this.email?[]:["Email is required"],this.passwordErrors=this.password?[]:["Password is required"],this.usrErrors=this.username?[]:["Username is required"],this.phonenumErrors=this.phone_num?[]:["Phone number is required"],this.realnameErrors=this.realname?[]:["Realname is required"],this.agreedToTermsErrors=this.agreedToTerms?[]:["You must agree to the terms of use to continue"],this.walletUsrErrors=this.walletUsr?[]:["Wallet username is required"],this.walletPwdErrors=this.walletPwd?[]:["Wallet password is required"],this.formReady){var e={username:this.walletUsr,password:this.walletPwd};Object(s["d"])(this,e).then((function(e){if(console.log(e),200===e.data.status){console.log("wallet good!");var r={username:t.username,password:t.password,name:t.realname,email:t.email,phone:t.phone_num,roleId:"mvo"===t.SelectModel?"1":"0",walletId:e.data.data.walletId};console.log(r),Object(a["v"])(t,r).then((function(e){console.log(e),t.showToast("Sign up success!",{theme:"success",icon:"fa-check",position:"top-right",duration:2e3,fullWidth:!1}),t.$router.push({name:"login"})}))}else console.log("Status not 200."),t.showToast("Wrong wallet username or password!",{theme:"danger",icon:"fa-warning",position:"top-right",duration:3e3,fullWidth:!1})}))}},visible_:function(){this.seen=!0},invisible_:function(){this.seen=!1}},computed:{formReady:function(){return!(this.emailErrors.length||this.passwordErrors.length||this.agreedToTermsErrors.length||this.walletUsrErrors.length||this.walletPwdErrors.length)}}},l=i,u=(r("a09b"),r("2877")),c=Object(u["a"])(l,n,o,!1,null,"b840e98e",null);e["default"]=c.exports},7522:function(t,e,r){"use strict";r.d(e,"u",(function(){return a})),r.d(e,"m",(function(){return i})),r.d(e,"t",(function(){return l})),r.d(e,"v",(function(){return u})),r.d(e,"d",(function(){return c})),r.d(e,"q",(function(){return d})),r.d(e,"e",(function(){return p})),r.d(e,"r",(function(){return f})),r.d(e,"s",(function(){return m})),r.d(e,"j",(function(){return h})),r.d(e,"g",(function(){return g})),r.d(e,"c",(function(){return w})),r.d(e,"k",(function(){return v})),r.d(e,"o",(function(){return b})),r.d(e,"w",(function(){return $})),r.d(e,"f",(function(){return E})),r.d(e,"i",(function(){return y})),r.d(e,"h",(function(){return x})),r.d(e,"a",(function(){return C})),r.d(e,"b",(function(){return _})),r.d(e,"n",(function(){return k})),r.d(e,"l",(function(){return T})),r.d(e,"z",(function(){return U})),r.d(e,"y",(function(){return P})),r.d(e,"x",(function(){return S})),r.d(e,"p",(function(){return q}));var n="39.106.57.246",o="4396",s="http://"+n+":"+o;function a(t,e){return console.log(t.$http.post(s+"/user/login",e)),t.$http.post(s+"/user/login",e)}function i(t){return t.$http.get(s+"/user/code",{responseType:"arraybuffer"})}function l(t,e){return t.tokenGet.post(s+"/oauth/token",e)}function u(t,e){return t.$http.post(s+"/user/register",e)}function c(t,e){return t.$http.post(s+"/pro/bvo/wishlist/add",e)}function d(t,e){return t.$http.get(s+"/pro/mvo/product/detail/get",{params:e})}function p(t,e){return t.$http.post(s+"/order/product/buy",e)}function f(t,e){return t.$http.get(s+"/pro/mvo/product/get",{params:e})}function m(t,e){return t.$http.get(s+"/pro/mvo/product/all",{params:e})}function h(t,e){return t.$http.post(s+"/pro/mvo/product/delete",e)}function g(t,e){return t.$http.post(s+"/pro/mvo/product/status/update",e)}function w(t,e){return t.$http.post(s+"/pro/mvo/product/add",e)}function v(t,e){return t.$http.post(s+"/pro/mvo/product/detail/update",e)}function b(t,e){return t.$http.get(s+"/order/info/get",{params:e})}function $(t,e){return t.$http.post(s+"/order/ship",e)}function E(t,e){return t.$http.post(s+"/order/ship/cancel",e)}function y(t,e){return t.$http.post(s+"/info/company/delete",e)}function x(t,e){return t.$http.post(s+"/info/brand/delete",e)}function C(t,e){return t.$http.post(s+"/info/brand/add",e)}function _(t,e){return t.$http.post(s+"/info/company/add",e)}function k(t,e){return console.log(t.$http.get(s+"/info/company/get",{params:e})),t.$http.get(s+"/info/company/get",{params:e})}function T(t,e){return t.$http.get(s+"/info/brand/get",{params:e})}function U(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(s+"/pro/mvo/product/image/upload",e)}function P(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(s+"/info/company/image/upload",e)}function S(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(s+"/info/brand/image/upload",e)}function q(t,e){return t.$http.get(s+"/info/brand/getAllByUserId",{params:e})}},a09b:function(t,e,r){"use strict";var n=r("547f"),o=r.n(n);o.a},b933:function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"g",(function(){return i})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return c})),r.d(e,"f",(function(){return d})),r.d(e,"h",(function(){return p})),r.d(e,"e",(function(){return f}));var n="39.106.57.246",o="4396",s="http://"+n+":"+o;function a(t,e){return t.$http.post(s+"/wallet/login",e)}function i(t,e){return t.$http.post(s+"/wallet/register",e)}function l(t,e){return t.$http.get(s+"/wallet/info/get",{params:e})}function u(t,e){return t.$http.get(s+"/wallet/transaction",{params:e})}function c(t,e){return t.$http.post(s+"/wallet/info/update",e)}function d(t,e){return t.$http.post(s+"/wallet/recharge",e)}function p(t,e){return t.$http.post(s+"/wallet/withdraw",e)}function f(t,e){return t.$http.post(s+"/order/pay ",e)}}}]);
//# sourceMappingURL=chunk-4b97f029.353e8bd6.js.map