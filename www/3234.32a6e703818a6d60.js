"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3234],{3234:(w,v,l)=>{l.r(v),l.d(v,{HistorialpsicologoPageModule:()=>b});var f=l(177),E=l(4341),n=l(1075),h=l(9860),F=l(467),I=l(3207),t=l(4438),e=l(3366);function c(i,a){1&i&&(t.j41(0,"ion-content"),t.nrm(1,"ion-img",14),t.k0s())}function p(i,a){if(1&i){const s=t.RV6();t.j41(0,"ion-row")(1,"ion-col"),t.EFF(2),t.k0s(),t.j41(3,"ion-col"),t.EFF(4),t.k0s(),t.j41(5,"ion-col"),t.EFF(6),t.k0s(),t.j41(7,"p",17),t.EFF(8),t.k0s(),t.j41(9,"ion-col")(10,"ion-button",3),t.bIt("click",function(){const r=t.eBV(s).index,d=t.XpG(3);return t.Njj(d.verFicha(r))}),t.EFF(11,"Ver Ficha"),t.k0s()()()}if(2&i){const s=a.$implicit,o=a.index;t.R7$(2),t.JRh(s.FechaCita),t.R7$(2),t.JRh(s.HoraCita),t.R7$(2),t.JRh(s.Nombre_Paciente),t.R7$(),t.Mz_("id","id_paciente_",o,""),t.R7$(),t.JRh(s.IdPaciente)}}function g(i,a){if(1&i&&(t.j41(0,"ion-card-content")(1,"ion-grid")(2,"ion-row")(3,"ion-col"),t.EFF(4,"Fecha"),t.k0s(),t.j41(5,"ion-col"),t.EFF(6,"Hora"),t.k0s(),t.j41(7,"ion-col"),t.EFF(8,"Paciente"),t.k0s(),t.j41(9,"ion-col"),t.EFF(10,"Acciones"),t.k0s()(),t.DNE(11,p,12,6,"ion-row",16),t.k0s()()),2&i){const s=t.XpG(2);t.R7$(11),t.Y8G("ngForOf",s.historialCitas)}}function u(i,a){1&i&&(t.j41(0,"ion-card-content",18)(1,"p"),t.EFF(2,"No hay historial de citas asignadas."),t.k0s()())}function _(i,a){if(1&i&&(t.j41(0,"ion-content")(1,"div")(2,"ion-card")(3,"ion-card-header")(4,"ion-card-title"),t.EFF(5,"Historial de Atenciones"),t.k0s()(),t.DNE(6,g,12,1,"ion-card-content",7)(7,u,3,0,"ion-card-content",15),t.k0s()()()),2&i){const s=t.XpG();t.R7$(6),t.Y8G("ngIf",!s.showHistorialCitasEmptyMessage),t.R7$(),t.Y8G("ngIf",s.showHistorialCitasEmptyMessage)}}const P=[{path:"",component:(()=>{var i;class a{constructor(o,r){this.router=o,this.apiService=r,this.historialCitas=[],this.showHistorialCitasEmptyMessage=!1,this.loading=!1,this.isAlertOpen=!1,this.alertButtons=["OK"],this.error_mensaje="",this.login=!1,this.idPsicologo=0,this.idPaciente="",this.idPersona=0,this.correo="",this.idTipo=0,this.idUsuario=0}ngOnInit(){setTimeout(()=>{this.loading=!0},1500);let o=this.router.getCurrentNavigation();null!=o&&o.extras.state&&(this.idPsicologo=null==o?void 0:o.extras.state.idPsicologo,this.idTipo=null==o?void 0:o.extras.state.idTipoUsuario,this.idUsuario=null==o?void 0:o.extras.state.idUsuario,this.login=null==o?void 0:o.extras.state.login,this.correo=null==o?void 0:o.extras.state.correo,this.idPersona=null==o?void 0:o.extras.state.idPersona,console.log("Id Usuario:"+this.idUsuario)),this.login?this.obtenerHistorialPsicologo():this.router.navigate(["home"])}obtenerHistorialPsicologo(){var o=this;return(0,F.A)(function*(){const r=o.idPsicologo;try{const d=o.apiService.obtenerHistorialPsicologo(r),M=yield(0,I.s)(d);o.historialCitas=M,o.showHistorialCitasEmptyMessage=!o.historialCitas||0===o.historialCitas.length}catch(d){o.showHistorialCitasEmptyMessage=!0,o.isAlertOpen=!0,o.error_mensaje="Error al obtener el historial de citas",console.error("Error al obtener el historial de citas",d)}})()}setOpen(o){this.isAlertOpen=o}redirectTo(o){this.router.navigate([o])}verFicha(o){const r=document.getElementById("id_paciente_"+o),M=parseInt(r?r.textContent:null,10);this.idPaciente=M.toString();let T={state:{idPaciente:this.idPaciente,login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona}};console.log("idPaciente: "+this.idPaciente),this.router.navigate(["fichapsicologo"],T)}goHistorial(){this.login=!0,this.router.navigate(["historialpsicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goAtenciones(){this.login=!0,this.router.navigate(["atencionespsicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}logout(){this.login=!1,this.router.navigate(["home"],{state:{login:this.login},replaceUrl:!0})}goEditar(){console.log("Login: ",this.login),this.router.navigate(["editarpsicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0})}goHome(){this.login?this.router.navigate(["psicologo"],{state:{login:this.login,idPsicologo:this.idPsicologo,idUsuario:this.idUsuario,correo:this.correo,idTipo:this.idTipo,idPersona:this.idPersona},replaceUrl:!0}):this.router.navigate(["home"],{replaceUrl:!0})}}return(i=a).\u0275fac=function(o){return new(o||i)(t.rXU(h.Ix),t.rXU(e.G))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-historialpsicologo"]],decls:34,vars:2,consts:[[1,"toolbarheader"],["slot","start"],["slot","end"],[3,"click"],[1,"header-title"],[1,"logo-link",2,"color","#000000",3,"click"],["src","../../assets/icon/psicoagendalogo.png","alt","Logo",1,"header-logo"],[4,"ngIf"],[1,"footer-content"],[1,"footer-left"],[1,"footer-right"],[1,"logo-link"],["name","call-outline",1,"header-logo"],["name","logo-instagram",1,"header-logo"],["src","../../../assets/icon/loading (1).gif",1,"imagen_carga"],["class","center-content",4,"ngIf"],[4,"ngFor","ngForOf"],["hidden","",3,"id"],[1,"center-content"]],template:function(o,r){1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-buttons",2)(5,"ion-button",3),t.bIt("click",function(){return r.goEditar()}),t.EFF(6,"Editar datos"),t.k0s(),t.j41(7,"ion-button",3),t.bIt("click",function(){return r.goHistorial()}),t.EFF(8,"Mi Historial"),t.k0s(),t.j41(9,"ion-button",3),t.bIt("click",function(){return r.goAtenciones()}),t.EFF(10,"Mis Atenciones"),t.k0s(),t.j41(11,"ion-button",3),t.bIt("click",function(){return r.logout()}),t.EFF(12,"Cerrar sesi\xf3n"),t.k0s()(),t.j41(13,"ion-title",4)(14,"a",5),t.bIt("click",function(){return r.goHome()}),t.nrm(15,"img",6),t.EFF(16," PsicoAgenda "),t.k0s()()()(),t.DNE(17,c,2,0,"ion-content",7)(18,_,8,2,"ion-content",7),t.j41(19,"ion-footer")(20,"ion-toolbar")(21,"div",8)(22,"div",9)(23,"p"),t.EFF(24,"\xa92024 - PsicoAgenda APP"),t.k0s(),t.j41(25,"p"),t.EFF(26,"Todos los Derechos Reservados"),t.k0s()(),t.j41(27,"div",10)(28,"p",11),t.nrm(29,"ion-icon",12),t.EFF(30,"Tel\xe9fono Contacto: 920256865"),t.k0s(),t.j41(31,"p",11),t.nrm(32,"ion-icon",13),t.EFF(33,"www.instagram.com/psicoagenda"),t.k0s()()()()()),2&o&&(t.R7$(17),t.Y8G("ngIf",!r.loading),t.R7$(),t.Y8G("ngIf",r.loading))},dependencies:[f.Sq,f.bT,n.Jm,n.QW,n.b_,n.I9,n.ME,n.tN,n.hU,n.W9,n.M0,n.lO,n.eU,n.iq,n.KW,n.MC,n.ln,n.BC,n.ai],styles:['@charset "UTF-8";.imagen[_ngcontent-%COMP%]{max-width:80%;height:auto;width:100%;margin-left:200px}.options-list[_ngcontent-%COMP%]{flex-direction:column;width:100%;margin-top:5px}ion-title[_ngcontent-%COMP%]{text-decoration:none;color:inherit}ion-card[_ngcontent-%COMP%]{box-shadow:0 2px 5px #0000001a;width:75%;margin:20px auto}ion-grid[_ngcontent-%COMP%]{--ion-grid-padding: 0;width:100%}ion-row[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}ion-col[_ngcontent-%COMP%]{text-align:center;padding:8px;border-right:1px solid #ccc}ion-col[_ngcontent-%COMP%]:last-child{border-right:none}ion-card-header[_ngcontent-%COMP%]{background-color:#009688;color:#fff;text-align:center;padding:10px 0}ion-card-title[_ngcontent-%COMP%]{font-size:1.2rem}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;--background: #333;color:#fff;padding:1.5rem;font-size:.8rem;text-align:center}ion-footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{display:flexbox;justify-content:space-between;align-items:center;width:100%}ion-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%]{flex:1}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-text-color);text-decoration:none;position:absolute}ion-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--color: var(--ion-text-color)}ion-icon[_ngcontent-%COMP%]{font-size:2em;color:#009688;width:24px;height:24px}.center-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100px;text-align:center}.imagen_carga[_ngcontent-%COMP%]{width:10%;margin-left:auto;margin-right:auto;margin-top:15%}']}),a})()}];let m=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[h.iI.forChild(P),h.iI]}),a})(),b=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.MD,E.YN,n.bv,m]}),a})()},3366:(w,v,l)=>{l.d(v,{G:()=>n});var f=l(4438),E=l(1626);let n=(()=>{var h;class F{constructor(t){this.http=t,this.ruta="https://psicoagenda-api.azurewebsites.net/usuarios/login/",this.ruta_ps="https://psicoagenda-api.azurewebsites.net/psicologos/get_psicologos/",this.ruta_busqueda_ps="https://psicoagenda-api.azurewebsites.net/psicologos/datos_psicologo/",this.ruta_prestadores="https://prestadores.azurewebsites.net/profesionales/get_profesionales/",this.ruta_horas="https://psicoagenda-api.azurewebsites.net/psicologos/horas_psicologo/",this.ruta_detalles_citas="https://psicoagenda-api.azurewebsites.net/usuarios/get_citas_by_id",this.ruta_proxima_cita="https://psicoagenda-api.azurewebsites.net/usuarios/get_proxima_cita_by_id",this.ruta_citas_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_citas_psicologo",this.ruta_atenciones_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_atenciones_psicologo",this.ruta_historial_psicologo="https://psicoagenda-api.azurewebsites.net/psicologos/get_historial_psicologo",this.rutaId="https://psicoagenda-api.azurewebsites.net/usuarios/obtener_id/",this.rutaCita="https://psicoagenda-api.azurewebsites.net/paciente/agendarCita/",this.rutaRegistroPsicologo="https://psicoagenda-api.azurewebsites.net/usuarios/registro_psicologo/",this.rutaRecuperacion="https://psicoagenda-api.azurewebsites.net/usuarios/cambiar_contrasena/",this.rutaToken="https://psicoagenda-api.azurewebsites.net/usuarios/guadarToken/",this.rutaInsertarPaciente="https://psicoagenda-api.azurewebsites.net/usuarios/insertar_paciente/",this.rutaMantenedorCita="https://psicoagenda-api.azurewebsites.net/admin/buscarCita/",this.rutaBuscarUsuario="https://psicoagenda-api.azurewebsites.net/admin/buscarUsuario/",this.rutaBuscarComuna="https://psicoagenda-api.azurewebsites.net/usuarios/comuna/",this.rutaBuscarEspecialidad="https://psicoagenda-api.azurewebsites.net/psicologos/especialidad/",this.rutaEspecialidades="https://psicoagenda-api.azurewebsites.net/psicologos/allEspecialidades/",this.rutaBuscarPsicologos="https://psicoagenda-api.azurewebsites.net/psicologos/buscar_psicologos/",this.rutaComunas="https://psicoagenda-api.azurewebsites.net/usuarios/todasLasComunas/",this.rutaAsignadas="https://psicoagenda-api.azurewebsites.net/usuarios/citas_asignadas/",this.rutaPersona="https://psicoagenda-api.azurewebsites.net/usuarios/datosPaciente/",this.rutaFinalizarCita="https://psicoagenda-api.azurewebsites.net/paciente/finalizarCita/"}sendEmail(t,e,c,p){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/email/send",{to:t,subject:e,text:c,html:p})}adminCita(t,e){return this.http.get(this.rutaMantenedorCita+"?Criterio="+t+"&Dato="+e).pipe()}buscarPsicologos(t,e,c){return this.http.get(this.rutaBuscarPsicologos+"?Criterio="+t+"&Dato="+e+"&Dato2="+c).pipe()}buscarUsuario(t,e){return this.http.get(this.rutaBuscarUsuario+"?Criterio="+t+"&Dato="+e).pipe()}buscarComuna(t){return this.http.get(this.rutaBuscarComuna+"?NombreComuna="+t).pipe()}buscarEspecilidad(t){return this.http.get(this.rutaBuscarEspecialidad+"?NombreEspecialidad="+t).pipe()}citasAsignadas(t){return this.http.get(this.rutaAsignadas+"?IdPaciente="+t).pipe()}especilidades(){return this.http.get(this.rutaEspecialidades)}obtenerComunas(){return this.http.get(this.rutaComunas)}updatePaciente(t,e,c,p,g,u,_,C,P,m){return this.http.post("https://psicoagenda-api.azurewebsites.net/usuarios/patch_paciente/",{IdPersona:t,IdDireccion:e,Calle:c,Numero:p,IdComuna:g,Telefono:u,PrimerNombre:_,SegundoNombre:C,ApellidoPaterno:P,ApellidoMaterno:m})}updatePsicologo(t,e,c,p,g,u,_,C,P,m,b,i,a,s){return this.http.post("https://psicoagenda-api.azurewebsites.net/psicologos/patch_psicologo/",{IdUsuario:t,IdPersona:e,IdDireccion:c,Calle:p,Numero:g,IdComuna:u,ValorSesion:_,Telefono:C,Descripcion:P,IdEspecialidad:m,PrimerNombre:b,SegundoNombre:i,ApellidoPaterno:a,ApellidoMaterno:s})}recuperacionClave(t,e){return this.http.get(this.rutaRecuperacion+"?CorreoElectronico="+t+"&NuevaContrasena="+e).pipe()}obtenerUsuario(t,e){return this.http.get(this.ruta+"?CorreoElectronico="+t+"&Contrasena="+e).pipe()}obtenerHoras(t,e){return this.http.get(this.ruta_horas+"?IdPsicologo="+t+"&FechaCita="+e).pipe()}listaPsicologos(){return this.http.get(this.ruta_ps).pipe()}datosPsicologo(t){return this.http.get(this.ruta_busqueda_ps+"?IdPsicologo="+t).pipe()}validarPrestadores(t){return this.http.get(this.ruta_prestadores+"?Rut="+t).pipe()}obtenerDetallesCitas(t){return this.http.get(this.ruta_detalles_citas+"?IdPaciente="+t).pipe()}datosPersona(t){return this.http.get(this.rutaPersona+"?IdPersona="+t).pipe()}obtenerProximaCita(t){return this.http.get(this.ruta_proxima_cita+"?IdPaciente="+t).pipe()}obtenerCitaPsicologo(t){return this.http.get(this.ruta_citas_psicologo+"?IdPsicologo="+t).pipe()}obtenerHistorialPsicologo(t){return this.http.get(this.ruta_historial_psicologo+"?IdPsicologo="+t).pipe()}obtenerAtencionesPsicologo(t){return this.http.get(this.ruta_atenciones_psicologo+"?IdPsicologo="+t).pipe()}createTransaction(t,e,c,p){return this.http.post("https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/create",{buy_order:t,session_id:e,amount:c,return_url:p})}commitTransaction(t){return this.http.put(`https://psicoagenda-api.azurewebsites.net/api/v1/transbank/transaction/commit/${t}`,{token:t})}getId(t,e){return this.http.get(this.rutaId+"?IdTipoUsuario="+t+"&IdUsuario="+e).pipe()}confirmarCita(t,e,c){return this.http.get(this.rutaCita+"?IdPaciente="+t+"&IdEstadoCita="+e+"&IdCita="+c).pipe()}finalizarCita(t,e,c){return this.http.get(this.rutaFinalizarCita+"?Tratamiento="+t+"&Diagnostico="+e+"&IdCita="+c).pipe()}registrarPsicologo(t,e,c,p,g,u,_,C,P,m,b,i,a,s,o){return this.http.post(this.rutaRegistroPsicologo,{Calle:t,Numero:e,IdComuna:c,PrimerNombre:p,SegundoNombre:g,ApellidoPaterno:u,ApellidoMaterno:_,Telefono:C,FechaNacimiento:P,CorreoElectronico:m,Contrasena:b,IdTipoUsuario:i,Rut:a,ValorSesion:s,IdEspecialidad:o})}guardarToken(t,e){return this.http.get(this.rutaToken+"?Token="+t+"&CorreoElectronico="+e).pipe()}registrarPaciente(t,e,c,p,g,u,_,C,P,m,b,i,a){return this.http.post(this.rutaInsertarPaciente,{Calle:t,Numero:e,IdComuna:c,PrimerNombre:p,SegundoNombre:g,ApellidoPaterno:u,ApellidoMaterno:_,Telefono:C,FechaNacimiento:P,CorreoElectronico:m,Contrasena:b,IdTipoUsuario:i,Rut:a})}}return(h=F).\u0275fac=function(t){return new(t||h)(f.KVO(E.Qq))},h.\u0275prov=f.jDH({token:h,factory:h.\u0275fac,providedIn:"root"}),F})()}}]);