const BASE_URL = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));

fetch('header.html')
.then(res=>res.text())
.then(data=>document.getElementById('header').innerHTML=data)

fetch('footer.html')
.then(res=>res.text())
.then(data=>document.getElementById('footer').innerHTML=data)

function cargarPaginas(url_pagina){
    fetch(`paginas/${url_pagina}.html`)
    .then(res=>res.text())
    .then(data=>{
        // Reemplazar rutas relativas con rutas absolutas
        const contenidoModificado = data.replace(/src="\.\.\/img\//g, 'src="./img/');
        document.getElementById('main').innerHTML = contenidoModificado;
    })
}
window.onload=() => cargarPaginas('perfil')//ruta por defecto