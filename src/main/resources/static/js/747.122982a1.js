"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[747],{2747:function(e,s,t){t.r(s),t.d(s,{default:function(){return W}});var a=t(6768);function o(e,s,t,o,l,n){const i=(0,a.g2)("account-comp");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(i)])}var l=t(4232);const n={class:"container"},i=(0,a.Fv)('<div class="page-header"><div class="row align-items-end"><div class="col"><div class="page-pretitle">계정 설정</div><h2 class="page-title" style="height:25px;">계정 정보</h2></div></div></div><div style="margin:10px 0 0 0;"></div>',2),r={class:"page-body mt-0"},c={class:"card border"},d={class:"row g-0"},m={class:"col-md-2 border-end"},u={class:"card-body"},p=(0,a.Lk)("h1",{class:"subheader"},"목록",-1),v={class:"list-group list-group-transparent"},b={class:"col-12 col-md-10 d-flex flex-column"};function h(e,s,t,o,h,w){const f=(0,a.g2)("profile-comp");return(0,a.uX)(),(0,a.CE)("div",n,[i,(0,a.Lk)("div",r,[(0,a.Lk)("div",c,[(0,a.Lk)("div",d,[(0,a.Lk)("div",m,[(0,a.Lk)("div",u,[p,(0,a.Lk)("div",v,[(0,a.Lk)("a",{class:(0,l.C4)(["list-group-item list-group-item-action d-flex align-items-center","profile-comp"===h.currMenu?"active":""]),onClick:s[0]||(s[0]=e=>w.openMenu("profile-comp"))},"유저 정보",2),(0,a.Lk)("a",{class:(0,l.C4)(["list-group-item list-group-item-action d-flex align-items-center","notifications-page"===h.currMenu?"active":""]),onClick:s[1]||(s[1]=e=>w.openMenu("notifications-page"))},"Q&A",2)])])]),(0,a.Lk)("div",b,[(0,a.bF)(f)])])])])])}const w={class:"card-body"},f=(0,a.Fv)('<div class="page-pretitle">Profile</div><h2 class="mb-4">기본 정보</h2><div class="row g-3 mt-2"><div class="col-md"><div class="form-label">이름</div><input type="text" class="form-control" disabled=""></div><div class="col-md"><div class="form-label">학과</div><input type="text" class="form-control" disabled=""></div><div class="col-md"><div class="form-label">학년</div><input type="text" class="form-control" disabled=""></div><div class="col-md"><div class="form-label">학번</div><input type="text" class="form-control" disabled=""></div></div>',3),k={style:{margin:"30px","align-items":"center"}},g={class:"col-auto",style:{"margin-left":"40%","margin-right":"40%"}},L=(0,a.Lk)("div",{class:"card-footer bg-transparent mt-auto d-none"},[(0,a.Lk)("div",{class:"btn-list justify-content-end"},[(0,a.Lk)("a",{href:"#",class:"btn"}," 취소 "),(0,a.Lk)("a",{href:"#",class:"btn btn-primary"}," 저장 ")])],-1);function y(e,s,t,o,l,n){const i=(0,a.g2)("PwResetAccount");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",w,[f,(0,a.Lk)("div",k,[(0,a.Lk)("div",g,[(0,a.bF)(i,{btnLabel:"비밀번호 변경하기"})])])]),L])}t(4114);var P=t(5130);const x={type:"button",class:"w-100 btn","data-bs-toggle":"modal","data-bs-target":"#pwreset_modal"},C={class:"modal",id:"pwreset_modal",tabindex:"-1"},A={class:"modal-dialog modal-m modal-dialog-centered",role:"document"},$={class:"modal-content"},E=(0,a.Lk)("div",{class:"modal-header"},[(0,a.Lk)("h5",{class:"modal-title"},"비밀번호 변경"),(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},F={class:"mb-3"},X=(0,a.Lk)("label",{class:"form-label"},"현재 비밀번호",-1),I={class:"mb-3"},J=(0,a.Lk)("label",{class:"form-label"},"새로운 비밀번호",-1),U={class:"mb-3"},V=(0,a.Lk)("label",{class:"form-label"},"새로운 비밀번호 확인",-1),_={class:"modal-footer"},R=(0,a.Lk)("a",{class:"btn","data-bs-dismiss":"modal","aria-label":"Close"}," 취소 ",-1);function S(e,s,t,o,n,i){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("button",x,(0,l.v_)(t.btnLabel),1),(0,a.Lk)("div",C,[(0,a.Lk)("div",A,[(0,a.Lk)("div",$,[E,(0,a.Lk)("div",M,[(0,a.Lk)("div",F,[X,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.curPw=e),type:"text",class:"form-control",name:"example-text-input",placeholder:"비밀번호를 입력해주세요"},null,512),[[P.Jo,n.curPw]])]),(0,a.Lk)("div",I,[J,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.newPw=e),type:"text",class:"form-control",name:"example-text-input",placeholder:"비밀번호를 입력해주세요"},null,512),[[P.Jo,n.newPw]])]),(0,a.Lk)("div",U,[V,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>n.newPwConfirm=e),type:"text",class:"form-control",name:"example-text-input",placeholder:"비밀번호를 입력해주세요"},null,512),[[P.Jo,n.newPwConfirm]])])]),(0,a.Lk)("div",_,[R,(0,a.Lk)("a",{onClick:s[3]||(s[3]=(...e)=>i.showAlert&&i.showAlert(...e)),class:"btn btn-primary ms-auto","data-bs-dismiss":"modal"}," 확인 ")])])])])])}var j={name:"password-reset",components:{},props:{btnLabel:String},data(){return{selectedEmploy:{},newPw:"",newPwConfirm:"",curPw:"",userEmail:"",urlApi:""}},mounted(){},methods:{async showAlert(){this.userEmail=this.$store.getters.userEmail;const e=this.$store.getters.userId;var s=!0;s?this.newPw!==this.newPwConfirm||""===this.newPw?(this.curPw="",this.newPw="",this.newPwConfirm="",this.$swal("비밀번호를 확인해주세요","","warning")):this.$axios.post(`${this.urlApi}`,{},{params:{userId:e,password:this.newPw}}).then((()=>{this.$swal("비밀번호가 변경되었습니다.","","success")})).catch((e=>{console.log(e)})):(this.$swal("현재 비밀번호를 확인해주세요.","","warning"),this.curPw="")},checkPassword(){return new Promise(((e,s)=>{this.$axios.get().then((s=>{s.data[0].userPassword===this.curPw?e(!0):e(!1)})).catch((e=>{console.error(e),s(e)}))}))}},watch:{}},N=t(1241);const Q=(0,N.A)(j,[["render",S]]);var q=Q,z={name:"profile-comp",props:{},components:{PwResetAccount:q},data(){return{employees:[],mode:{userId:0,tableName:"",type:"",image:""}}},mounted(){},methods:{logout(){this.$store.commit("deleteSession"),this.$router.push("/signin")}},watch:{}};const B=(0,N.A)(z,[["render",y]]);var D=B,G={name:"account-comp",components:{"profile-comp":D},props:{},data(){return{currMenu:"profile-comp"}},mounted(){},methods:{openMenu(e){this.currMenu=e}},watch:{}};const H=(0,N.A)(G,[["render",h]]);var K=H,O={name:"my-account",components:{"account-comp":K},props:{},data(){return{}},mounted(){},methods:{},watch:{}};const T=(0,N.A)(O,[["render",o]]);var W=T}}]);
//# sourceMappingURL=747.122982a1.js.map