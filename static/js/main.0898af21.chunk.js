(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{27:function(e){e.exports=JSON.parse("[]")},35:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(26),i=a.n(s),o=(a(35),a(18)),j=a(8),l=a(9),b=a(12),u=a(10),h=(a(36),a(4)),d=a(2),p=a(27),O=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"estiloCompleto",value:function(){return{fontSize:"20px",color:this.props.tarea.hecha?"gray":"black",textDecoration:this.props.tarea.hecha?"line-through":"none"}}},{key:"render",value:function(){var e=this.props.tarea;return Object(n.jsxs)("div",{style:this.estiloCompleto(),children:[Object(n.jsxs)("h1",{children:[" ",e.id,"-",e.titulo]}),Object(n.jsxs)("h2",{children:[e.descripcion,e.Hecha,Object(n.jsx)("input",{type:"checkbox",onChange:this.props.tareaHecha.bind(this,e.id)}),Object(n.jsx)("button",{style:m,onClick:this.props.borrarTarea.bind(this,e.id),children:"x"})]})]})}}]),a}(r.Component),m={background:"red",fontSize:"18px",cursor:"pointer",borderRadius:"10px",border:"none"},x=O,f=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.props.tareas.map((function(t){return Object(n.jsx)(x,{tarea:t,borrarTarea:e.props.borrarTarea,tareaHecha:e.props.tareaHecha},t.id)}))}}]),a}(r.Component),v=a(14),g=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={titulo:"",descripcion:""},e.metodoEnviar=function(t){e.props.agregarTarea(e.state.titulo,e.state.descripcion),t.preventDefault()},e.cambioAlEscribir=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e}return Object(l.a)(a,[{key:"estilosFormulario",value:function(){return{margin:"20px",fontSize:"20px"}}},{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.metodoEnviar,style:this.estilosFormulario(),children:[Object(n.jsx)("input",{className:"input",type:"text",name:"titulo",placeholder:"Escribe una tarea",onChange:this.cambioAlEscribir,value:this.state.titulo}),Object(n.jsx)("textarea",{className:"input",name:"descripcion",placeholder:"Escribe una descripci\xf3n de la tarea",onChange:this.cambioAlEscribir,value:this.state.descripcion}),Object(n.jsx)("button",{className:"botonenviar",type:"submit",children:"Agregue la nueva tarea"})]})}}]),a}(r.Component),N=a(21),k=a.n(N),y=a(28),C=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={post:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({post:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Posts"}),this.state.post.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:e.title}),Object(n.jsx)("p",{children:e.body})]},e.id)}))]})}}]),a}(r.Component),F=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"principal",children:Object(n.jsx)(h.b,{to:"/home",className:"titulo",children:Object(n.jsx)("h1",{children:"React\ud83c\udf10"})})}),Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(h.b,{className:"links",to:"/home"}),Object(n.jsx)(h.b,{className:"links",to:"/tareas",children:"Tareas"}),Object(n.jsx)(h.b,{className:"links",to:"/posts",children:"Post"}),Object(n.jsx)(h.b,{className:"links",to:"/contador",children:"Contador"}),Object(n.jsx)(h.b,{className:"links",to:"/jsx",children:"Jsx"}),Object(n.jsx)(h.b,{className:"links",to:"/Lista",children:"Lista"}),Object(n.jsx)(h.b,{className:"links",to:"/Formulario",children:"Form"}),Object(n.jsx)(h.b,{className:"links",to:"/Tarea1",children:"Tarea1"}),Object(n.jsx)(h.b,{className:"links",to:"/Saludo",children:"Saludo"}),Object(n.jsx)(h.b,{className:"links",to:"/Comentario",children:"Comentario"}),Object(n.jsx)(h.b,{className:"links",to:"/Boton",children:"Boton"})]})]})},S=a(11),T=function(){var e=Object(r.useState)(0),t=Object(S.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{className:"divContador",children:[Object(n.jsx)("button",{className:"input",onClick:function(){c(a+1)},children:"+"}),Object(n.jsx)("h3",{children:a}),Object(n.jsx)("button",{className:"input",onClick:function(){c(a-1)},children:"-"}),Object(n.jsx)("div",{id:"whatsapp-icon",children:Object(n.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+5492612482384",children:Object(n.jsx)("img",{alt:"logo Whatsapp",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png",width:"50",height:"50"})})})]})},w=function(){var e=Object(r.useState)(21),t=Object(S.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Frio o calor?"}),Object(n.jsx)("button",{className:"input",onClick:function(){c(a+1)},children:"+"}),Object(n.jsx)("button",{className:"input",onClick:function(){c(a-1)},children:"-"}),Object(n.jsxs)("div",{children:["La temperatura es: ",a]}),Object(n.jsx)("h2",{children:a>=24?"Hace calor":"Hace frio"})]})},A=function(){var e=Object(r.useState)([1]),t=Object(S.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h2",{children:"Lista"}),Object(n.jsx)("button",{className:"input",onClick:function(){c([].concat(Object(o.a)(a),[a.length+1]))},children:"Agregar"}),a.map((function(e,t){return Object(n.jsx)("p",{children:e},t)}))]})},E=a(24),H=function(){var e=Object(r.useState)({nombre:"",apellido:""}),t=Object(S.a)(e,2),a=t[0],c=t[1],s=function(e){c(Object(E.a)(Object(E.a)({},a),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h1",{children:"Formulario"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Usuario Ingresado: "+a.nombre+" "+a.apellido)},children:[Object(n.jsx)("input",{onChange:s,name:"nombre",type:"text",className:"input",placeholder:"Nombre"}),Object(n.jsx)("input",{onChange:s,name:"apellido",type:"text",className:"input",placeholder:"Apellido"}),Object(n.jsx)("button",{className:"botonenviar",type:"submit",children:"Enviar"})]})]})},J=function(e){return Object(n.jsx)(r.Fragment,{children:Object(n.jsxs)("div",{className:"tarjeta",children:[Object(n.jsxs)("header",{className:"tarjeta-data-header",children:[Object(n.jsx)("h2",{children:e.nombre}),Object(n.jsx)("h4",{children:e.profesion})]}),Object(n.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/14203988?s=460&v=4",alt:"Foto de perfil",className:"tarjeta-img"}),Object(n.jsx)("div",{className:"tarjeta-data"})]})})},L=function(e){return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)("div",{children:Object(n.jsxs)("h2",{children:["Hola ",e.persona," tu edad es ",e.edad]})})})},D=function(e){return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)("div",{className:"comentarios",children:Object(n.jsxs)("div",{className:"div",children:[Object(n.jsx)("img",{className:"imagen",src:"https://via.placeholder.com/64",alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{className:"tituloComentario",children:e.nombre}),e.comentario]})]})})})},P=function(){var e=Object(r.useState)(!0),t=Object(S.a)(e,2),a=t[0],c=t[1];return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)("button",{onClick:function(){return c(!a)},className:a?"likebutton":"likebutton2",children:a?"Le diste me gusta":"Dale me gusta"})})},z=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={tareas:p},e.agregarTarea=function(t,a){var n={titulo:t,descripcion:a,id:e.state.tareas.length+1};e.setState({tareas:[].concat(Object(o.a)(e.state.tareas),[n])})},e.borrarTarea=function(t){var a=e.state.tareas.filter((function(e){return e.id!==t}));e.setState({tareas:a})},e.tareaHecha=function(t){var a=e.state.tareas.map((function(e){return e.id===t&&(e.hecha=!e.hecha),e}));e.setState({tareas:a})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"alineado",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(d.a,{component:F}),Object(n.jsx)(d.a,{path:"/tareas",render:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(g,{agregarTarea:e.agregarTarea}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(f,{tareas:e.state.tareas,borrarTarea:e.borrarTarea,tareaHecha:e.tareaHecha})]})}}),Object(n.jsx)(d.a,{path:"/posts",component:C}),Object(n.jsx)(d.a,{path:"/contador",component:T}),Object(n.jsx)(d.a,{path:"/jsx",component:w}),Object(n.jsx)(d.a,{path:"/Lista",component:A}),Object(n.jsx)(d.a,{path:"/Formulario",component:H}),Object(n.jsx)(d.a,{path:"/Tarea1",render:function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(J,{nombre:"Juan Manuel Diez",profesion:"Front End developer"}),Object(n.jsx)(J,{nombre:"Jimena Gomez",profesion:"Psicologa"})]})}}),Object(n.jsx)(d.a,{path:"/Saludo",render:function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(L,{persona:"Juanma",edad:25}),Object(n.jsx)(L,{persona:"Jimena",edad:24})]})}}),Object(n.jsx)(d.a,{path:"/Comentario",render:function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h2",{children:"Comentarios"}),Object(n.jsx)(D,{nombre:"Juan Manuel",comentario:"Cras sit amet nibh libero, in gravida nulla."}),Object(n.jsx)(D,{nombre:"Pablo",comentario:"Cras sit amet nibh libero, in gravida nulla."})]})}}),Object(n.jsx)(d.a,{path:"/Boton",component:P})]})})}}]),a}(r.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),B()}},[[43,1,2]]]);
//# sourceMappingURL=main.0898af21.chunk.js.map