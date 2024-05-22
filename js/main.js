let meta = `  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mundo peludo</title>
<link rel="stylesheet" href="./css/Estilos.css"><!--Hoja Stilo-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&display=swap" rel="stylesheet">`

let navegacion = `
<div class="logo">
<a href="./Index.html"><img src="./img/Logo.jpg" alt="logode la marca" ></a> 
</div>
<nav>
 <ul class="nav-link">
     <li><a href="./Productos.html">Productos</a></li>
     <li><a href="./Servicios.html">Servicios</a></li>
     <li><a href="./Sucursales.html">Sucursales</a></li>
     <li><a href="./Nosotros.html">Nosotros</a></li>
 </ul>
</nav>
<a href="./Registro.html" class="btn"><button>Contactenos</button></a>
`
let navegacion2 = `<div class="logo">
<a href="./Index.html"><img src="./img/Logo.jpg" alt="logode la marca" ></a> 
</div>
<nav class="nav">
<a href="./Productos.html">Productos</a>
<a href="./Servicios.html">Servicios</a>
<a href="./Sucursales.html">Sucursales</a>
<a href="./Nosotros.html">Nosotros</a>
<a href="./Registro.html">Contactenos</a>
</nav>`

let pie = `<h2>Seguinos en las redes</h2>
 <a href="https://www.facebook.com/naturallifepet"><img src="./img/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/natural_life_pet/"><img src="./img/instagram.png" alt=""></a>
        <a href="https://api.whatsapp.com/send?phone=5491167026320"><img src="./img/whatsapp.png" alt=""></a>
<p>Sitio desarrollado en codo a codo</p>
       
        
`

document.querySelector("head").innerHTML = meta
document.querySelector("header").innerHTML = navegacion2
document.querySelector("footer").innerHTML = pie
