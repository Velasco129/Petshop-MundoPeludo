let navegacion = `
<nav class="navi">
<div class="logo">
<a class="cont-link" href="./Index.html">
<img src="./img/Logosolo.png" alt="logode la marca" >
<h2>Patitas Sanas</h2></a> 
</div>
<div class="lio"><a class="link" href="./Productos.html">Productos</a>
<a class="link" href="./Servicios.html">Servicios</a>
<a class="link" href="./Nosotros.html">Nosotros</a>
<a class="link" href="./login.html">Ingrese</a></div>

</nav>`

let navegacionadmin =`<nav class="navi">
      <div class="logo">
        <a class="cont-link" href="./Index.html">
          <img src="./img/Logosolo.png" alt="logode la marca">
          <h2>Patitas Sanas</h2>
        </a>
      </div>
      <a class="" href="./Productos.html">Tienda</a>


      <div class="coco">
        <ul class="lolo">
          <li class="link"><a href="">Administracion</a></li>
          <ul class="sub">
            <li><a href="./crudproductos.html">Productos</a></li>
            <li><a href="./tipoproductos.html">Catergorias</a></li>
            <li><a href="./usuario.html">Usuarios</a></li>
          </ul>
        </ul>
      </div>
      <button type="button" class="linki" v-on:click="logout()">Salir</button>

    </nav>`
    
let pie = `<h2>Seguinos en las redes</h2>
 <a href="https://www.facebook.com/naturallifepet"><img src="./img/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/natural_life_pet/"><img src="./img/instagram.png" alt=""></a>
        <a href="https://api.whatsapp.com/send?phone=5491167026320"><img src="./img/whatsapp.png" alt=""></a><br>
  <a class="kiko" href="./Contacto.html">Contactenos</a>
<p>Sitio desarrollado en codo a codo</p>
`

document.querySelector("header").innerHTML = navegacion
document.querySelector("footer").innerHTML = pie

  if (sessionStorage.getItem("adm") !== "1") {
    document.querySelector("header").innerHTML = navegacion
  } else {
    document.querySelector("header").innerHTML = navegacionadmin
  }



