"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6432],{6432:(E,m,c)=>{c.r(m),c.d(m,{CalendarioPageModule:()=>k});var u=c(177),g=c(4341),r=c(1075),f=c(9860),h=c(467),p=c(3207),e=c(4438),_=c(3366);function P(n,l){if(1&n&&(e.j41(0,"ion-card",24)(1,"ion-card-header")(2,"ion-card-title",25),e.EFF(3),e.k0s(),e.nrm(4,"ion-img",26),e.k0s(),e.j41(5,"ion-card-content")(6,"p"),e.EFF(7),e.k0s()(),e.j41(8,"ion-card-content")(9,"p"),e.EFF(10),e.k0s()()()),2&n){const s=l.$implicit;e.R7$(3),e.JRh(s.Nombre),e.R7$(4),e.JRh(s.Descripcion),e.R7$(3),e.SpI("Valor Consulta: $",s.ValorSesion,"")}}function b(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"Horas Disponibles"),e.k0s())}function F(n,l){1&n&&(e.j41(0,"p"),e.EFF(1,"No hay horas disponibles este d\xeda"),e.k0s())}function v(n,l){if(1&n){const s=e.RV6();e.j41(0,"ion-button",3),e.bIt("click",function(){const o=e.eBV(s).index,a=e.XpG();return e.Njj(a.confirmarCita(o))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s(),e.j41(3,"p",27),e.EFF(4),e.k0s()()}if(2&n){const s=l.$implicit,t=l.index;e.R7$(2),e.JRh(s.HoraCita),e.R7$(),e.Mz_("id","id_cita_",t,""),e.R7$(),e.JRh(s.IdCita)}}function M(n,l){1&n&&(e.j41(0,"ion-button",28),e.EFF(1,"Reservar Hora"),e.k0s())}const O=[{path:"",component:(()=>{var n;class l{constructor(t,o){this.router=t,this.apiService=o,this.selectedDate="",this.fechaFinal="",this.availableTimes=[],this.showOptions=!1,this.titulo=!1,this.horas=!1,this.idPsicologoString="",this.idPsicologo=0,this.idCita="",this.lista_respuesta=[],this.validadorHora=1,this.botonPago=!1,this.monto=0,this.idPaciente=0,this.login=!1}ngOnInit(){var t=this;return(0,h.A)(function*(){const o=new Date,a=6e4*o.getTimezoneOffset();t.selectedDate=new Date(o.getTime()-a).toISOString().slice(0,-1);let i=t.router.getCurrentNavigation();null!=i&&i.extras.state&&(t.idPsicologoString=null==i?void 0:i.extras.state.idPsicologo,t.idPsicologo=parseInt(t.idPsicologoString,10),t.idPaciente=null==i?void 0:i.extras.state.idPaciente,t.login=null==i?void 0:i.extras.state.login,console.log("El ID del usuario es:",t.idPsicologo));let T=t.apiService.datosPsicologo(t.idPsicologo),j=yield(0,p.s)(T),I=JSON.stringify(j),C=JSON.parse(I);for(let d=0;d<C.length;d++)t.lista_respuesta.push(C[d]),t.monto=t.lista_respuesta[d].ValorSesion,console.log(t.monto),console.log(t.lista_respuesta)})()}formatDate(t){const o=new Date(t),a=`${("0"+o.getDate()).slice(-2)}-${("0"+(o.getMonth()+1)).slice(-2)}-${o.getFullYear()}`;this.fechaFinal=a}loadAvailableTimes(){var t=this;return(0,h.A)(function*(){if(t.horas=!1,t.availableTimes=[],t.titulo=!1,console.log("Fecha seleccionada:",t.selectedDate),t.formatDate(t.selectedDate),console.log("Id Psicologo:",t.idPsicologo),console.log("Fecha formateada:",t.fechaFinal),t.selectedDate){t.botonPago=!1;let o=t.apiService.obtenerHoras(t.idPsicologo,t.fechaFinal),a=yield(0,p.s)(o);console.log("Respuesta completa de la API:",a),Array.isArray(a)?0===a.length?(t.horas=!0,console.log("No hay horas disponibles.")):(t.titulo=!0,a.forEach(i=>{t.availableTimes.push(i),console.log("Hora disponible:",i)}),t.availableTimes.length>0&&(t.validadorHora=t.availableTimes[0].IdCita)):console.log("Respuesta no es un arreglo. Revisar el formato de los datos recibidos de la API.")}})()}scheduleAppointment(t){console.log("Cita agendada para",this.selectedDate,"a las",t)}toggleOptions(){this.showOptions=!this.showOptions}redirectTo(t){this.router.navigate([t])}goHome(){this.router.navigate(["home"],{replaceUrl:!0})}confirmarCita(t){const o=document.getElementById("id_cita_"+t),i=parseInt(o?o.textContent:null,10);this.idCita=i.toString(),console.log(this.idCita),this.botonPago=!0}getRandomInt(t,o){return Math.floor(Math.random()*(o-t+1))+t}webpay_plus_create(){console.log("Webpay Plus Transaction.create");const t=this.getRandomInt(1e6,99999999).toString(),o=this.getRandomInt(1e6,99999999).toString();console.log(t),console.log(o);const a=`${window.location.origin}/commitpay`;this.apiService.createTransaction(t,o,this.monto,a).subscribe(i=>{console.log("Transaction response:",i),i.token&&i.url?(localStorage.setItem("idCita",JSON.stringify(this.idCita)),localStorage.setItem("idPaciente",JSON.stringify(this.idPaciente)),localStorage.setItem("login",JSON.stringify(this.login)),window.location.href=i.url+"?token_ws="+i.token):console.error("Error creating transaction")},i=>{console.error("Error creating transaction",i)})}}return(n=l).\u0275fac=function(t){return new(t||n)(e.rXU(f.Ix),e.rXU(_.G))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-calendario"]],decls:44,vars:6,consts:[[1,"toolbarheader"],["slot","start"],["slot","end"],[3,"click"],[1,"header-title"],[1,"logo-link",2,"color","#000000",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],[1,"center-content"],[1,"horizontal-layout"],["class","custom-card",4,"ngFor","ngForOf"],[1,"calendario"],["displayFormat","MM/DD/YYYY","presentation","date",3,"ngModelChange","ionChange","ngModel"],[1,"calendario-lista"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"submit"],["class","botonpago","type","submit",4,"ngIf"],[1,"footer-content"],[1,"footer-left"],[1,"footer-center"],[1,"footer-right"],[1,"logo-link"],["name","call-outline",1,"header-logo"],["name","logo-instagram",1,"header-logo"],[1,"custom-card"],[2,"--color","#027f99","font-weight","bold"],["src","../../../assets/icon/User_Circle.png",1,"imagen1"],["hidden","",3,"id"],["type","submit",1,"botonpago"]],template:function(t,o){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-buttons",2)(5,"ion-button",3),e.bIt("click",function(){return o.redirectTo("/home")}),e.EFF(6,"Editar datos"),e.k0s(),e.j41(7,"ion-button",3),e.bIt("click",function(){return o.redirectTo("/atencionespaciente")}),e.EFF(8,"Historial de atenciones"),e.k0s(),e.j41(9,"ion-button",3),e.bIt("click",function(){return o.redirectTo("/fichapaciente")}),e.EFF(10,"Fichas clinicas"),e.k0s(),e.j41(11,"ion-button",3),e.bIt("click",function(){return o.redirectTo("/home")}),e.EFF(12,"Cerrar sesi\xf3n"),e.k0s()(),e.j41(13,"ion-title",4)(14,"a",5),e.bIt("click",function(){return o.goHome()}),e.nrm(15,"img",6),e.EFF(16," PsicoAgenda "),e.k0s()()()(),e.j41(17,"ion-content",7)(18,"div",8),e.DNE(19,P,11,3,"ion-card",9),e.j41(20,"ion-item",10)(21,"ion-datetime",11),e.mxI("ngModelChange",function(i){return e.DH7(o.selectedDate,i)||(o.selectedDate=i),i}),e.bIt("ionChange",function(){return o.loadAvailableTimes()}),e.k0s()()(),e.j41(22,"ion-list",12),e.DNE(23,b,2,0,"p",13)(24,F,2,0,"p",13)(25,v,5,4,"ion-button",14),e.j41(26,"form",15),e.bIt("submit",function(){return o.webpay_plus_create()}),e.DNE(27,M,2,0,"ion-button",16),e.k0s()()(),e.j41(28,"ion-footer")(29,"ion-toolbar")(30,"div",17)(31,"div",18)(32,"p"),e.EFF(33,"\xa92024 - PsicoAgenda APP"),e.k0s(),e.j41(34,"p"),e.EFF(35,"Todos los Derechos Reservados"),e.k0s()(),e.nrm(36,"div",19),e.j41(37,"div",20)(38,"p",21),e.nrm(39,"ion-icon",22),e.EFF(40,"Tel\xe9fono Contacto: 920256865 "),e.k0s(),e.j41(41,"p",21),e.nrm(42,"ion-icon",23),e.EFF(43,"www.instagram.com/psicoagenda"),e.k0s()()()()()),2&t&&(e.R7$(19),e.Y8G("ngForOf",o.lista_respuesta),e.R7$(2),e.R50("ngModel",o.selectedDate),e.R7$(2),e.Y8G("ngIf",o.titulo),e.R7$(),e.Y8G("ngIf",o.horas),e.R7$(),e.Y8G("ngForOf",o.availableTimes),e.R7$(2),e.Y8G("ngIf",o.botonPago))},dependencies:[u.Sq,u.bT,g.qT,g.BC,g.cb,g.vS,g.cV,r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.W9,r.A9,r.M0,r.eU,r.iq,r.KW,r.uz,r.he,r.nf,r.MC,r.BC,r.ai,r.Je],styles:['@charset "UTF-8";ion-footer[_ngcontent-%COMP%]{--background: var(--ion-footer-background);color:var(--ion-footer-text-color);width:100%;padding:0;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;position:relative}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;--background: #333;color:#fff;padding:1.5rem;font-size:.8rem;text-align:center}ion-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{display:flexbox;justify-content:space-between;align-items:center;width:100%}ion-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]{flex:1;text-align:center;display:flex;flex-direction:column;justify-content:center}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right;position:absolute}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-text-color);text-decoration:none}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--color: var(--ion-text-color)}ion-icon[_ngcontent-%COMP%]{font-size:2em;color:#009688;width:24px;height:24px}ion-toolbar[_ngcontent-%COMP%]{--padding-start: 16px;--padding-end: 16px;--background: #32E0C4}.center-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%;flex-direction:column}.horizontal-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:stretch;width:100%;gap:1px}.card-content-md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:400;line-height:1.5}.custom-card[_ngcontent-%COMP%]{--background: url(1600w-9JEcmfgB4FU.39aaa5c7fb12f91d.png) no-repeat center center / cover;flex:.5;margin:1%;width:100%;text-align:center}.calendario[_ngcontent-%COMP%]{margin:1%}.calendario-lista[_ngcontent-%COMP%]{margin-top:0;width:100%;text-align:center}.imagen1[_ngcontent-%COMP%]{max-width:20%;margin-left:auto;margin-right:auto;margin-top:5%}ion-card-header[_ngcontent-%COMP%]{margin-top:6%}.botonpago[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;justify-content:center;align-items:center;display:flex;max-width:20%;--background: #32E0C4;margin-top:1rem;margin-bottom:1rem}']}),l})()}];let y=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[f.iI.forChild(O),f.iI]}),l})(),k=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[u.MD,g.YN,r.bv,y]}),l})()}}]);