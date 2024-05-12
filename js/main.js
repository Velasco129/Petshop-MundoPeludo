let navegacion=`
<div class="logo">
<a href="./Index.html"><img src="./img/Logo.jpg" alt="logode la marca" ></a> 
</div>
<nav>
 <ul class="nav-link">
     <li><a href="./Servicios.html">Servicios</a></li>
     <li><a href="./Sucursales.html">Sucursales</a></li>
     <li><a href="./Nosotros.html">Nosotros</a></li>
 </ul>
</nav>
<a href="./Registro.html" class="btn"><button>Registrese</button></a>
`
document.querySelector("header").innerHTML=navegacion

let pie=`
<p>Sitio desarrollado en codo a codo</p>
        <a href="https://www.facebook.com/naturallifepet"><img src="./img/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/natural_life_pet/"><img src="./img/instagram.png" alt=""></a>
        <a href="https://api.whatsapp.com/send?phone=5491167026320"><img src="./img/whatsapp.png" alt=""></a>
`

document.querySelector("footer").innerHTML=pie