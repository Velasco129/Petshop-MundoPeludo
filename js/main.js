let meta = `  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mundo peludo</title>
<link rel="icon" href="./img/favicon4.ico"><!--Favicon-->
<link rel="stylesheet" href="./css/Estilos.css"><!--Hoja Stilo-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
`

/*let navegacion = `
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
`*/

let navegacion2 = `
<nav class="nav">
<div class="logo">
<a class="cont-link" href="./Index.html">
<img src="./img/Logosolo.png" alt="logode la marca" >
<h2>Patitas Sanas</h2></a> 
</div>
<a class="link" href="./Productos.html">Productos</a>
<a class="link" href="./Servicios.html">Servicios</a>
<a class="link" href="./Nosotros.html">Nosotros</a>
<a class="link" href="./Registro.html">Registrese</a>
</nav>`

let pie = `<h2>Seguinos en las redes</h2>
 <a href="https://www.facebook.com/naturallifepet"><img src="./img/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/natural_life_pet/"><img src="./img/instagram.png" alt=""></a>
        <a href="https://api.whatsapp.com/send?phone=5491167026320"><img src="./img/whatsapp.png" alt=""></a>
<p>Sitio desarrollado en codo a codo</p>`


document.querySelector("head").innerHTML = meta
document.querySelector("header").innerHTML = navegacion2
document.querySelector("footer").innerHTML = pie


/*------formulario-------*/
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      console.log('error')
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } 

    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      console.log('ok')
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
  });