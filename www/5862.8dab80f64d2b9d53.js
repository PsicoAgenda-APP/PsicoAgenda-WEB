"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5862],{5862:(I,F,l)=>{l.r(F),l.d(F,{FichapsicologoPageModule:()=>_});var b=l(177),C=l(4341),r=l(1075),g=l(9860),f=l(467),v=l(3207),t=l(4438),i=l(3366);function n(e,a){if(1&e&&(t.j41(0,"ion-row")(1,"ion-col"),t.EFF(2),t.k0s(),t.j41(3,"ion-col"),t.EFF(4),t.k0s(),t.j41(5,"ion-col"),t.EFF(6),t.k0s(),t.j41(7,"ion-col"),t.EFF(8),t.k0s(),t.j41(9,"ion-col"),t.EFF(10),t.k0s()()),2&e){const s=a.$implicit;t.R7$(2),t.JRh(s.fecha),t.R7$(2),t.JRh(s.hora),t.R7$(2),t.JRh(s.nombre_psicologo),t.R7$(2),t.JRh(s.Diagnostico),t.R7$(2),t.JRh(s.Tratamiento)}}function p(e,a){if(1&e&&(t.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t.EFF(3),t.k0s()(),t.j41(4,"ion-card-content")(5,"ion-grid")(6,"ion-row")(7,"ion-col")(8,"strong"),t.EFF(9,"Fecha"),t.k0s()(),t.j41(10,"ion-col")(11,"strong"),t.EFF(12,"Hora"),t.k0s()(),t.j41(13,"ion-col")(14,"strong"),t.EFF(15,"Psic\xf3logo"),t.k0s()(),t.j41(16,"ion-col")(17,"strong"),t.EFF(18,"Diagn\xf3stico"),t.k0s()(),t.j41(19,"ion-col")(20,"strong"),t.EFF(21,"Tratamiento"),t.k0s()()(),t.DNE(22,n,11,5,"ion-row",14),t.k0s()()()),2&e){const s=t.XpG();t.R7$(3),t.SpI("Ficha Paciente: ",s.fichasPaciente[0].nombre_paciente,""),t.R7$(19),t.Y8G("ngForOf",s.fichasPaciente)}}function u(e,a){1&e&&(t.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t.EFF(3,"Ficha Paciente"),t.k0s()(),t.j41(4,"ion-card-content"),t.EFF(5," No se encontraron fichas para el paciente seleccionado. "),t.k0s()())}const P=[{path:"",component:(()=>{var e;class a{constructor(o,c){this.router=o,this.apiService=c,this.login=!1,this.idTipo=0,this.idUsuario=0,this.fichasPaciente=[],this.isAlertOpen=!1,this.alertButtons=["OK"],this.error_mensaje="",this.idPaciente=0,this.idPsicologo=0,this.idPersona=0,this.correo=""}ngOnInit(){let o=this.router.getCurrentNavigation();null!=o&&o.extras.state&&(this.idPsicologo=null==o?void 0:o.extras.state.idPsicologo,this.idTipo=null==o?void 0:o.extras.state.idTipoUsuario,this.idUsuario=null==o?void 0:o.extras.state.idUsuario,this.login=null==o?void 0:o.extras.state.login,this.correo=null==o?void 0:o.extras.state.correo,this.idPersona=null==o?void 0:o.extras.state.idPersona,this.idPaciente=null==o?void 0:o.extras.state.idPaciente,console.log("Id Usuario:"+this.idUsuario),console.log("Id Paciente:"+this.idPaciente)),this.login?this.obtenerFichasPaciente():this.router.navigate(["home"])}obtenerFichasPaciente(){var o=this;return(0,f.A)(function*(){try{const c=o.apiService.obtenerDetallesCitas(o.idPaciente),d=yield(0,v.s)(c);o.fichasPaciente=d}catch(c){o.isAlertOpen=!0,o.error_mensaje="Error al obtener las fichas del paciente",console.error("Error al obtener las fichas del paciente",c)}})()}setOpen(o){this.isAlertOpen=o}redirectTo(o){this.router.navigate([o])}goHistorial(){this.login=!0,this.router.navigate(["historialpsicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goAtenciones(){this.login=!0,this.router.navigate(["atencionespsicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}logout(){this.login=!1,this.router.navigate(["home"],{state:{login:this.login},replaceUrl:!0})}goEditar(){console.log("Login: ",this.login),this.router.navigate(["editarpsicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goHome(){this.login?this.router.navigate(["psicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0}):this.router.navigate(["home"],{replaceUrl:!0})}}return(e=a).\u0275fac=function(o){return new(o||e)(t.rXU(g.Ix),t.rXU(i.G))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-fichapsicologo"]],decls:35,vars:2,consts:[[1,"toolbarheader"],["slot","start"],["slot","end"],[3,"click"],[1,"header-title"],[1,"logo-link",2,"color","#000000",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],[4,"ngIf"],[1,"footer-content"],[1,"footer-left"],[1,"footer-right"],[1,"logo-link"],["name","call-outline",1,"header-logo"],["name","logo-instagram",1,"header-logo"],[4,"ngFor","ngForOf"]],template:function(o,c){1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-buttons",2)(5,"ion-button",3),t.bIt("click",function(){return c.goEditar()}),t.EFF(6,"Editar datos"),t.k0s(),t.j41(7,"ion-button",3),t.bIt("click",function(){return c.goHistorial()}),t.EFF(8,"Mi Historial"),t.k0s(),t.j41(9,"ion-button",3),t.bIt("click",function(){return c.goAtenciones()}),t.EFF(10,"Mis Atenciones"),t.k0s(),t.j41(11,"ion-button",3),t.bIt("click",function(){return c.logout()}),t.EFF(12,"Cerrar sesi\xf3n"),t.k0s()(),t.j41(13,"ion-title",4)(14,"a",5),t.bIt("click",function(){return c.goHome()}),t.nrm(15,"img",6),t.EFF(16," PsicoAgenda "),t.k0s()()()(),t.j41(17,"ion-content"),t.DNE(18,p,23,2,"ion-card",7)(19,u,6,0,"ion-card",7),t.k0s(),t.j41(20,"ion-footer")(21,"ion-toolbar")(22,"div",8)(23,"div",9)(24,"p"),t.EFF(25,"\xa92024 - PsicoAgenda APP"),t.k0s(),t.j41(26,"p"),t.EFF(27,"Todos los Derechos Reservados"),t.k0s()(),t.j41(28,"div",10)(29,"p",11),t.nrm(30,"ion-icon",12),t.EFF(31,"Tel\xe9fono Contacto: 920256865"),t.k0s(),t.j41(32,"p",11),t.nrm(33,"ion-icon",13),t.EFF(34,"www.instagram.com/psicoagenda"),t.k0s()()()()()),2&o&&(t.R7$(18),t.Y8G("ngIf",c.fichasPaciente.length>0),t.R7$(),t.Y8G("ngIf",0===c.fichasPaciente.length))},dependencies:[b.Sq,b.bT,r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.hU,r.W9,r.M0,r.lO,r.eU,r.iq,r.MC,r.ln,r.BC,r.ai],styles:['@charset "UTF-8";ion-icon[_ngcontent-%COMP%]{font-size:2em;margin-right:8px;color:#009688}.imagen[_ngcontent-%COMP%]{max-width:80%;height:auto;width:100%;margin-left:200px}.options-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;margin-top:5px}ion-title[_ngcontent-%COMP%]{text-decoration:none;color:inherit}ion-card[_ngcontent-%COMP%]{box-shadow:0 2px 5px #0000001a;width:75%;margin:20px auto}ion-grid[_ngcontent-%COMP%]{--ion-grid-padding: 0;width:100%}ion-row[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}ion-col[_ngcontent-%COMP%]{text-align:center;padding:8px;border-right:1px solid #ccc}ion-col[_ngcontent-%COMP%]:last-child{border-right:none}ion-card-header[_ngcontent-%COMP%]{background-color:#009688;color:#fff;text-align:center;padding:10px 0}ion-card-title[_ngcontent-%COMP%]{font-size:1.2rem}']}),a})()}];let m=(()=>{var e;class a{}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[g.iI.forChild(P),g.iI]}),a})(),_=(()=>{var e;class a{}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[b.MD,C.YN,r.bv,m]}),a})()},3366:(I,F,l)=>{l.d(F,{G:()=>r});var b=l(4438),C=l(1626);let r=(()=>{var g;class f{constructor(t){this.http=t,this.ruta="https://psicoagenda-api.azurewebsites.net/usuarios/login/",this.ruta_ps="https://psicoagenda-api.azurewebsites.net/psicologos/get_psicologos/",this.ruta_busqueda_ps="https://psicoagenda-api.azurewebsites.net/psicologos/datos_psicologo/",this.ruta_prestadores="https://prestadores.azurewebsites.net/profesionales/get_profesionales/",this.ruta_horas="https://psicoagenda-api.azurewebsites.net/psicologos/horas_psicologo/",this.ruta_detalles_citas="https://psicoagenda-api.azurewebsites.net/usuarios/get_citas_by_id",this.ruta_proxima_cita="https://psicoagenda-api.azurewebsites.net/usuarios/get_proxima_cita_by_id",this.ruta_citas_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_citas_psicologo",this.ruta_atenciones_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_atenciones_psicologo",this.ruta_historial_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_historial_psicologo",this.rutaId="https://psicoagenda-api.azurewebsites.net/usuarios/obtener_id/",this.rutaCita="https://psicoagenda-api.azurewebsites.net/paciente/agendarCita/",this.rutaRegistroPsicologo="https://psicoagenda-api.azurewebsites.net/usuarios/registro_psicologo/",this.rutaRecuperacion="https://psicoagenda-api.azurewebsites.net/usuarios/cambiar_contrasena/",this.rutaToken="https://psicoagenda-api.azurewebsites.net/usuarios/guadarToken/",this.rutaInsertarPaciente="https://psicoagenda-api.azurewebsites.net/usuarios/insertar_paciente/",this.rutaMantenedorCita="https://psicoagenda-api.azurewebsites.net/admin/buscarCita/",this.rutaBuscarUsuario="https://psicoagenda-api.azurewebsites.net/admin/buscarUsuario/",this.rutaBuscarComuna="https://psicoagenda-api.azurewebsites.net/usuarios/comuna/",this.rutaBuscarEspecialidad="https://psicoagenda-api.azurewebsites.net/psicologos/especialidad/",this.rutaEspecialidades="https://psicoagenda-api.azurewebsites.net/psicologos/allEspecialidades/",this.rutaBuscarPsicologos="https://psicoagenda-api.azurewebsites.net/psicologos/buscar_psicologos/",this.rutaComunas="https://psicoagenda-api.azurewebsites.net/usuarios/todasLasComunas/",this.rutaAsignadas="https://psicoagenda-api.azurewebsites.net/usuarios/citas_asignadas/",this.rutaPersona="https://psicoagenda-api.azurewebsites.net/usuarios/datosPaciente/",this.rutaFinalizarCita="https://psicoagenda-api.azurewebsites.net/paciente/finalizarCita/"}sendEmail(t,i,n,p){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/email/send",{to:t,subject:i,text:n,html:p})}adminCita(t,i){return this.http.get(this.rutaMantenedorCita+"?Criterio="+t+"&Dato="+i).pipe()}buscarPsicologos(t,i,n){return this.http.get(this.rutaBuscarPsicologos+"?Criterio="+t+"&Dato="+i+"&Dato2="+n).pipe()}buscarUsuario(t,i){return this.http.get(this.rutaBuscarUsuario+"?Criterio="+t+"&Dato="+i).pipe()}buscarComuna(t){return this.http.get(this.rutaBuscarComuna+"?NombreComuna="+t).pipe()}buscarEspecilidad(t){return this.http.get(this.rutaBuscarEspecialidad+"?NombreEspecialidad="+t).pipe()}citasAsignadas(t){return this.http.get(this.rutaAsignadas+"?IdPaciente="+t).pipe()}especilidades(){return this.http.get(this.rutaEspecialidades)}obtenerComunas(){return this.http.get(this.rutaComunas)}updatePaciente(t,i,n,p,u,h,P,m,_,e){return this.http.post("https://psicoagenda-api.azurewebsites.net/usuarios/patch_paciente/",{IdPersona:t,IdDireccion:i,Calle:n,Numero:p,IdComuna:u,Telefono:h,PrimerNombre:P,SegundoNombre:m,ApellidoPaterno:_,ApellidoMaterno:e})}updatePsicologo(t,i,n,p,u,h,P,m,_,e,a,s,o,c){return this.http.post("https://psicoagenda-api.azurewebsites.net/psicologos/patch_psicologo/",{IdUsuario:t,IdPersona:i,IdDireccion:n,Calle:p,Numero:u,IdComuna:h,ValorSesion:P,Telefono:m,Descripcion:_,IdEspecialidad:e,PrimerNombre:a,SegundoNombre:s,ApellidoPaterno:o,ApellidoMaterno:c})}recuperacionClave(t,i){return this.http.get(this.rutaRecuperacion+"?CorreoElectronico="+t+"&NuevaContrasena="+i).pipe()}obtenerUsuario(t,i){return this.http.get(this.ruta+"?CorreoElectronico="+t+"&Contrasena="+i).pipe()}obtenerHoras(t,i){return this.http.get(this.ruta_horas+"?IdPsicologo="+t+"&FechaCita="+i).pipe()}listaPsicologos(){return this.http.get(this.ruta_ps).pipe()}datosPsicologo(t){return this.http.get(this.ruta_busqueda_ps+"?IdPsicologo="+t).pipe()}validarPrestadores(t){return this.http.get(this.ruta_prestadores+"?Rut="+t).pipe()}obtenerDetallesCitas(t){return this.http.get(this.ruta_detalles_citas+"?IdPaciente="+t).pipe()}datosPersona(t){return this.http.get(this.rutaPersona+"?IdPersona="+t).pipe()}obtenerProximaCita(t){return this.http.get(this.ruta_proxima_cita+"?IdPaciente="+t).pipe()}obtenerCitaPsicologo(t){return this.http.get(this.ruta_citas_psicologo+"?IdPsicologo="+t).pipe()}obtenerHistorialPsicologo(t){return this.http.get(this.ruta_historial_psicologo+"?IdPsicologo="+t).pipe()}obtenerAtencionesPsicologo(t){return this.http.get(this.ruta_atenciones_psicologo+"?IdPsicologo="+t).pipe()}createTransaction(t,i,n,p){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/create",{buy_order:t,session_id:i,amount:n,return_url:p})}commitTransaction(t){return this.http.put(`https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/commit/${t}`,{token:t})}getId(t,i){return this.http.get(this.rutaId+"?IdTipoUsuario="+t+"&IdUsuario="+i).pipe()}confirmarCita(t,i,n){return this.http.get(this.rutaCita+"?IdPaciente="+t+"&IdEstadoCita="+i+"&IdCita="+n).pipe()}finalizarCita(t,i,n){return this.http.get(this.rutaFinalizarCita+"?Tratamiento="+t+"&Diagnostico="+i+"&IdCita="+n).pipe()}registrarPsicologo(t,i,n,p,u,h,P,m,_,e,a,s,o,c,d){return this.http.post(this.rutaRegistroPsicologo,{Calle:t,Numero:i,IdComuna:n,PrimerNombre:p,SegundoNombre:u,ApellidoPaterno:h,ApellidoMaterno:P,Telefono:m,FechaNacimiento:_,CorreoElectronico:e,Contrasena:a,IdTipoUsuario:s,Rut:o,ValorSesion:c,IdEspecialidad:d})}guardarToken(t,i){return this.http.get(this.rutaToken+"?Token="+t+"&CorreoElectronico="+i).pipe()}registrarPaciente(t,i,n,p,u,h,P,m,_,e,a,s,o){return this.http.post(this.rutaInsertarPaciente,{Calle:t,Numero:i,IdComuna:n,PrimerNombre:p,SegundoNombre:u,ApellidoPaterno:h,ApellidoMaterno:P,Telefono:m,FechaNacimiento:_,CorreoElectronico:e,Contrasena:a,IdTipoUsuario:s,Rut:o})}}return(g=f).\u0275fac=function(t){return new(t||g)(b.KVO(C.Qq))},g.\u0275prov=b.jDH({token:g,factory:g.\u0275fac,providedIn:"root"}),f})()}}]);