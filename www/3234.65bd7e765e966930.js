"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3234],{3234:(E,g,r)=>{r.r(g),r.d(g,{HistorialpsicologoPageModule:()=>k});var d=r(177),p=r(4341),n=r(1075),c=r(9860),u=r(467),h=r(3207),o=r(4438),F=r(3366);function m(t,s){if(1&t&&(o.j41(0,"ion-row")(1,"ion-col"),o.EFF(2),o.k0s(),o.j41(3,"ion-col"),o.EFF(4),o.k0s(),o.j41(5,"ion-col"),o.EFF(6),o.k0s(),o.j41(7,"ion-col"),o.EFF(8),o.k0s(),o.j41(9,"ion-col"),o.EFF(10),o.k0s(),o.j41(11,"ion-col"),o.EFF(12),o.k0s()()),2&t){const e=s.$implicit;o.R7$(2),o.JRh(e.FechaCita),o.R7$(2),o.JRh(e.HoraCita),o.R7$(2),o.JRh(e.IdCita),o.R7$(2),o.JRh(e.Nombre_Paciente),o.R7$(2),o.JRh(e.Diagnostico),o.R7$(2),o.JRh(e.Tratamiento)}}const P=[{path:"",component:(()=>{var t;class s{constructor(i,a){this.router=i,this.apiService=a,this.historialCitas=[],this.isAlertOpen=!1,this.alertButtons=["OK"],this.error_mensaje="",this.login=!1,this.idPsicologo=0}ngOnInit(){let i=this.router.getCurrentNavigation();null!=i&&i.extras.state&&(this.idPsicologo=null==i?void 0:i.extras.state.idPsicologo,this.login=null==i?void 0:i.extras.state.login),this.obtenerHistorialPsicologo()}obtenerHistorialPsicologo(){var i=this;return(0,u.A)(function*(){const a=i.idPsicologo;try{const l=i.apiService.obtenerHistorialPsicologo(a),b=yield(0,h.s)(l);i.historialCitas=b}catch(l){i.isAlertOpen=!0,i.error_mensaje="Error al obtener el historial de citas",console.error("Error al obtener el historial de citas",l)}})()}setOpen(i){this.isAlertOpen=i}redirectTo(i){this.router.navigate([i])}}return(t=s).\u0275fac=function(i){return new(i||t)(o.rXU(c.Ix),o.rXU(F.G))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-historialpsicologo"]],decls:55,vars:1,consts:[[1,"toolbarheader"],["slot","start"],["slot","end"],[3,"click"],[2,"text-decoration","none"],["routerLink","/home",2,"text-decoration","none"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",2,"height","40px","margin-right","8px"],[4,"ngFor","ngForOf"],[1,"toolbarfooter"],[1,"footer-content"],[1,"footer-left"],[1,"footer-right"],["name","call-outline"],["name","logo-instagram"]],template:function(i,a){1&i&&(o.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o.nrm(3,"ion-menu-button"),o.k0s(),o.j41(4,"ion-buttons",2)(5,"ion-button",3),o.bIt("click",function(){return a.redirectTo("/home")}),o.EFF(6,"Editar datos"),o.k0s(),o.j41(7,"ion-button",3),o.bIt("click",function(){return a.redirectTo("/historialpsicologo")}),o.EFF(8,"Mi Historial"),o.k0s(),o.j41(9,"ion-button",3),o.bIt("click",function(){return a.redirectTo("/atencionespsicologo")}),o.EFF(10,"Mis Atenciones"),o.k0s(),o.j41(11,"ion-button",3),o.bIt("click",function(){return a.redirectTo("/fichapsicologo")}),o.EFF(12,"Fichas clinicas"),o.k0s(),o.j41(13,"ion-button",3),o.bIt("click",function(){return a.redirectTo("/home")}),o.EFF(14,"Cerrar sesi\xf3n"),o.k0s()(),o.j41(15,"ion-title",4)(16,"a",5),o.nrm(17,"img",6),o.k0s(),o.EFF(18," PsicoAgenda "),o.k0s()()(),o.j41(19,"ion-content")(20,"ion-card")(21,"ion-card-header")(22,"ion-card-title"),o.EFF(23,"Historial de Atenciones"),o.k0s()(),o.j41(24,"ion-card-content")(25,"ion-grid")(26,"ion-row")(27,"ion-col"),o.EFF(28,"Fecha"),o.k0s(),o.j41(29,"ion-col"),o.EFF(30,"Hora"),o.k0s(),o.j41(31,"ion-col"),o.EFF(32,"ID Cita"),o.k0s(),o.j41(33,"ion-col"),o.EFF(34,"Paciente"),o.k0s(),o.j41(35,"ion-col"),o.EFF(36,"Diagn\xf3stico"),o.k0s(),o.j41(37,"ion-col"),o.EFF(38,"Tratamiento"),o.k0s()(),o.DNE(39,m,13,6,"ion-row",7),o.k0s()()()(),o.j41(40,"ion-footer")(41,"ion-toolbar",8)(42,"div",9)(43,"div",10)(44,"p"),o.EFF(45,"\xa92024 - PsicoAgenda APP"),o.k0s(),o.j41(46,"p"),o.EFF(47,"Todos los Derechos Reservados"),o.k0s()(),o.j41(48,"div",11)(49,"p"),o.nrm(50,"ion-icon",12),o.EFF(51," Tel\xe9fono Contacto: 920256865"),o.k0s(),o.j41(52,"p"),o.nrm(53,"ion-icon",13),o.EFF(54," www.instagram.com/psicoagenda"),o.k0s()()()()()),2&i&&(o.R7$(39),o.Y8G("ngForOf",a.historialCitas))},dependencies:[d.Sq,n.Jm,n.QW,n.b_,n.I9,n.ME,n.tN,n.hU,n.W9,n.M0,n.lO,n.eU,n.iq,n.MC,n.ln,n.BC,n.ai,n.oY,c.Wk],styles:['@charset "UTF-8";ion-icon[_ngcontent-%COMP%]{font-size:2em;margin-right:8px;color:#009688}.imagen[_ngcontent-%COMP%]{max-width:80%;height:auto;width:100%;margin-left:200px}.options-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;margin-top:5px}ion-title[_ngcontent-%COMP%]{text-decoration:none;color:inherit}ion-card[_ngcontent-%COMP%]{box-shadow:0 2px 5px #0000001a;width:75%;margin:20px auto}ion-grid[_ngcontent-%COMP%]{--ion-grid-padding: 0;width:100%}ion-row[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}ion-col[_ngcontent-%COMP%]{text-align:center;padding:8px;border-right:1px solid #ccc}ion-col[_ngcontent-%COMP%]:last-child{border-right:none}ion-card-header[_ngcontent-%COMP%]{background-color:#009688;color:#fff;text-align:center;padding:10px 0}ion-card-title[_ngcontent-%COMP%]{font-size:1.2rem}']}),s})()}];let f=(()=>{var t;class s{}return(t=s).\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[c.iI.forChild(P),c.iI]}),s})(),k=(()=>{var t;class s{}return(t=s).\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.$C({type:t}),t.\u0275inj=o.G2t({imports:[d.MD,p.YN,n.bv,f]}),s})()}}]);