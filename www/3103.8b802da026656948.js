"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3103],{3103:(b,c,g)=>{g.r(c),g.d(c,{RegistropacientePageModule:()=>M});var p=g(177),m=g(4341),a=g(1075),d=g(9860),e=g(4438),u=g(3366);function _(t,l){if(1&t){const s=e.RV6();e.j41(0,"ion-list")(1,"ion-item",6),e.bIt("click",function(){e.eBV(s);const n=e.XpG();return e.Njj(n.redirectTo("/login"))}),e.EFF(2,"Ingresa"),e.k0s(),e.j41(3,"ion-item",6),e.bIt("click",function(){e.eBV(s);const n=e.XpG();return e.Njj(n.redirectTo("/registropsico"))}),e.EFF(4,"Registrate"),e.k0s()()}}const h=[{path:"",component:(()=>{var t;class l{constructor(r,n){this.router=r,this.apiService=n,this.showOptions=!1,this.mdl_rut="",this.mdl_calle="",this.mdl_numero=0,this.idComuna=1,this.mdl_primerNombre="",this.mdl_segundoNombre="",this.mdl_apellidoPaterno="",this.mdl_apellidoMaterno="",this.mdl_telefono="",this.mdl_fechaNacimiento="",this.mdl_correo="",this.mdl_contrasena="",this.isAlertOpen=!1,this.isAlertOpen2=!1,this.isAlertOpen3=!1,this.alertButtons=["OK"]}ngOnInit(){}register(){const n=(i=>this.mdl_fechaNacimiento.split("-").reverse().join("-"))();this.apiService.registrarPaciente(this.mdl_calle,this.mdl_numero,this.idComuna,this.mdl_primerNombre,this.mdl_segundoNombre,this.mdl_apellidoPaterno,this.mdl_apellidoMaterno,this.mdl_telefono,n,this.mdl_correo,this.mdl_contrasena,2,this.mdl_rut).subscribe(i=>{console.log("Paciente registrado correctamente",i),this.isAlertOpen3=!0},i=>{console.error("Error al registrar paciente",i)})}goHome(){this.router.navigate(["home"],{replaceUrl:!0})}toggleOptions(){this.showOptions=!this.showOptions}redirectTo(r){this.router.navigate([r])}}return(t=l).\u0275fac=function(r){return new(r||t)(e.rXU(d.Ix),e.rXU(u.G))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-registropaciente"]],decls:89,vars:12,consts:[[1,"toolbarheader"],["slot","start"],[1,"header-title"],[1,"logo-link",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],["slot","end"],[3,"click"],[4,"ngIf"],[2,"--background","url(../../../assets/icon/psicologia.png) no-repeat center center / cover"],[1,"form-container"],[1,"titulo-formulario"],[3,"ngSubmit"],["position","floating"],["type","text","name","rut",3,"ngModelChange","ngModel"],["type","text","name","calle",3,"ngModelChange","ngModel"],["type","text","name","numero",3,"ngModelChange","ngModel"],["type","text"],["type","text","name","primerNombre",3,"ngModelChange","ngModel"],["type","text","name","segundoNombre",3,"ngModelChange","ngModel"],["type","text","name","apellidoPaterno",3,"ngModelChange","ngModel"],["type","text","name","apellidoMaterno",3,"ngModelChange","ngModel"],["type","text","name","telefono",3,"ngModelChange","ngModel"],["type","text","name","fechaNacimiento",3,"ngModelChange","ngModel"],["type","email","name","correo",3,"ngModelChange","ngModel"],["type","password","name","contrasena",3,"ngModelChange","ngModel"],["expand","block","type","submit"],[1,"toolbarfooter"],[1,"footer-content"],[1,"footer-left"],[1,"footer-center"],[1,"footer-right"],["href","phone"],["name","call-outline"],["href","www.instagram.com/psicoagenda"],["name","logo-instagram"]],template:function(r,n){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-title",2)(5,"a",3),e.bIt("click",function(){return n.goHome()}),e.nrm(6,"img",4),e.EFF(7," PsicoAgenda "),e.k0s()(),e.j41(8,"ion-buttons",5)(9,"ion-button",6),e.bIt("click",function(){return n.redirectTo("/login")}),e.EFF(10,"Entrar"),e.k0s(),e.j41(11,"ion-button",6),e.bIt("click",function(){return n.redirectTo("/registropaciente")}),e.EFF(12,"Registrarse"),e.k0s(),e.j41(13,"ion-button",6),e.bIt("click",function(){return n.toggleOptions()}),e.EFF(14,"Profesionales"),e.k0s(),e.DNE(15,_,5,0,"ion-list",7),e.k0s()()(),e.j41(16,"ion-content",8)(17,"div",9)(18,"ion-title",10),e.EFF(19,"\xdanete como paciente"),e.k0s(),e.j41(20,"form",11),e.bIt("ngSubmit",function(){return n.register()}),e.j41(21,"ion-item")(22,"ion-label",12),e.EFF(23,"Rut"),e.k0s(),e.j41(24,"ion-input",13),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_rut,o)||(n.mdl_rut=o),o}),e.k0s()(),e.j41(25,"ion-item")(26,"ion-label",12),e.EFF(27,"Calle"),e.k0s(),e.j41(28,"ion-input",14),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_calle,o)||(n.mdl_calle=o),o}),e.k0s()(),e.j41(29,"ion-item")(30,"ion-label",12),e.EFF(31,"N\xfamero"),e.k0s(),e.j41(32,"ion-input",15),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_numero,o)||(n.mdl_numero=o),o}),e.k0s()(),e.j41(33,"ion-item")(34,"ion-label",12),e.EFF(35,"Comuna"),e.k0s(),e.nrm(36,"ion-input",16),e.k0s(),e.j41(37,"ion-item")(38,"ion-label",12),e.EFF(39,"Primer Nombre"),e.k0s(),e.j41(40,"ion-input",17),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_primerNombre,o)||(n.mdl_primerNombre=o),o}),e.k0s()(),e.j41(41,"ion-item")(42,"ion-label",12),e.EFF(43,"Segundo Nombre"),e.k0s(),e.j41(44,"ion-input",18),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_segundoNombre,o)||(n.mdl_segundoNombre=o),o}),e.k0s()(),e.j41(45,"ion-item")(46,"ion-label",12),e.EFF(47,"Apellido Paterno"),e.k0s(),e.j41(48,"ion-input",19),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_apellidoPaterno,o)||(n.mdl_apellidoPaterno=o),o}),e.k0s()(),e.j41(49,"ion-item")(50,"ion-label",12),e.EFF(51,"Apellido Materno"),e.k0s(),e.j41(52,"ion-input",20),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_apellidoMaterno,o)||(n.mdl_apellidoMaterno=o),o}),e.k0s()(),e.j41(53,"ion-item")(54,"ion-label",12),e.EFF(55,"Tel\xe9fono"),e.k0s(),e.j41(56,"ion-input",21),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_telefono,o)||(n.mdl_telefono=o),o}),e.k0s()(),e.j41(57,"ion-item")(58,"ion-label",12),e.EFF(59,"Fecha de Nacimiento"),e.k0s(),e.j41(60,"ion-input",22),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_fechaNacimiento,o)||(n.mdl_fechaNacimiento=o),o}),e.k0s()(),e.j41(61,"ion-item")(62,"ion-label",12),e.EFF(63,"Correo Electr\xf3nico"),e.k0s(),e.j41(64,"ion-input",23),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_correo,o)||(n.mdl_correo=o),o}),e.k0s()(),e.j41(65,"ion-item")(66,"ion-label",12),e.EFF(67,"Contrase\xf1a"),e.k0s(),e.j41(68,"ion-input",24),e.mxI("ngModelChange",function(o){return e.DH7(n.mdl_contrasena,o)||(n.mdl_contrasena=o),o}),e.k0s()(),e.j41(69,"ion-button",25),e.EFF(70,"Registrar"),e.k0s()()()(),e.j41(71,"ion-footer")(72,"ion-toolbar",26)(73,"div",27)(74,"div",28)(75,"p"),e.EFF(76,"\xa92024 - PsicoAgenda APP"),e.k0s(),e.j41(77,"p"),e.EFF(78,"Todos los Derechos Reservados"),e.k0s()(),e.nrm(79,"div",29),e.j41(80,"div",30)(81,"p")(82,"a",31),e.nrm(83,"ion-icon",32),e.EFF(84," Telefono Contacto: 920256865"),e.k0s()(),e.j41(85,"p")(86,"a",33),e.nrm(87,"ion-icon",34),e.EFF(88," www.instagram.com/psicoagenda"),e.k0s()()()()()()),2&r&&(e.R7$(15),e.Y8G("ngIf",n.showOptions),e.R7$(9),e.R50("ngModel",n.mdl_rut),e.R7$(4),e.R50("ngModel",n.mdl_calle),e.R7$(4),e.R50("ngModel",n.mdl_numero),e.R7$(8),e.R50("ngModel",n.mdl_primerNombre),e.R7$(4),e.R50("ngModel",n.mdl_segundoNombre),e.R7$(4),e.R50("ngModel",n.mdl_apellidoPaterno),e.R7$(4),e.R50("ngModel",n.mdl_apellidoMaterno),e.R7$(4),e.R50("ngModel",n.mdl_telefono),e.R7$(4),e.R50("ngModel",n.mdl_fechaNacimiento),e.R7$(4),e.R50("ngModel",n.mdl_correo),e.R7$(4),e.R50("ngModel",n.mdl_contrasena))},dependencies:[p.bT,m.qT,m.BC,m.cb,m.vS,m.cV,a.Jm,a.QW,a.W9,a.M0,a.eU,a.iq,a.$w,a.uz,a.he,a.nf,a.MC,a.BC,a.ai,a.Gw],styles:['@charset "UTF-8";[_ngcontent-%COMP%]:root{--ion-color-primary: #4a90e2;--ion-background-color: #f5f5f5}.main-banner[_ngcontent-%COMP%]{background-color:#009688;color:#000;padding:5rem;text-align:center}.main-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:2.2rem;font-weight:700}.main-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2rem;font-size:1rem}ion-form[_ngcontent-%COMP%]{background-color:var(--ion-background-color);padding:20px;border-radius:10px}ion-item[_ngcontent-%COMP%]{--border-color: #fff;--background: #fff;--color: var(--ion-color-primary);--placeholder-color: var(--ion-color-primary);--placeholder-opacity: .8;margin-bottom:10px;border-radius:8px;border:1px solid #ccc}ion-input[_ngcontent-%COMP%]{--border-color: #fff;--padding-start: 10px;--padding-end: 10px;--placeholder-color: var(--ion-input-placeholder-color)}.ion-button-registar[_ngcontent-%COMP%]{--background: #009688;color:#fff}.ion-button-registar[_ngcontent-%COMP%]:hover{--background: #004d40}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:600px;margin:20px auto;padding:20px;box-sizing:border-box;background-color:#fff;box-shadow:0 2px 5px #0000001a;border-radius:10px}ion-icon[_ngcontent-%COMP%]{font-size:2em;margin-right:8px;color:#009688}.options-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;margin-top:5px}ion-title[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.titulo-formulario[_ngcontent-%COMP%]{margin-bottom:30px;font-size:28px}']}),l})()}];let f=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.iI.forChild(h),d.iI]}),l})(),M=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.MD,m.YN,m.X1,a.bv,f]}),l})()}}]);