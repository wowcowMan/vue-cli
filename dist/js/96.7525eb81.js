"use strict";(self["webpackChunkstore_project"]=self["webpackChunkstore_project"]||[]).push([[96],{5096:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var s=r(3396);function o(e,t,r,o,a,i){return(0,s.wg)(),(0,s.iD)("div",null,"orders")}var a={data(){return{orders:[],isLoading:!1}},methods:{getOrder(){const e="https://vue3-course-api.hexschool.io/api/wowcowman-api/admin/orders";this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,e.data.success&&(console.log(e.data),this.orders=e.data.orders)}))}},created(){this.getOrder()}},i=r(89);const n=(0,i.Z)(a,[["render",o]]);var d=n}}]);
//# sourceMappingURL=96.7525eb81.js.map