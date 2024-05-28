/*let meta = `  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mundo peludo</title>
<link rel="icon" href="./img/favicon4.ico"><!--Favicon-->
<link rel="stylesheet" href="./css/Estilos.css"><!--Hoja Stilo-->
<link rel="preconnect" href="https://fonts.googleapis.com">!---google font-->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>!---carrusel-->
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&display=swap" rel="stylesheet">!---google fonts-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">!---animaciones-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">!---carrusel-->
`*/

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


/*document.querySelector("head").innerHTML = meta*/
document.querySelector("header").innerHTML = navegacion2
document.querySelector("footer").innerHTML = pie


/*------formulario-------*/

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  edad = id("edad"),
  Captcha = id("captcha"),
  form = id("form"),
  sucursales = id("sucursales")

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
let validateCaptcha = () => {
  const correctAnswer = "8";
  if (captcha.value.trim() !== correctAnswer) {
    errorMsg[5].innerHTML = "Respuesta de CAPTCHA incorrecta";
    captcha.style.border = "2px solid red";
    failureIcon[5].style.opacity = "1";
    successIcon[5].style.opacity = "0";
    return false;
  } else {
    errorMsg[5].innerHTML = "";
    captcha.style.border = "2px solid green";
    failureIcon[5].style.opacity = "0";
    successIcon[5].style.opacity = "1";
    return true;
  }
};

let validateForm = () => {
  engine(username, 0, "Nombre y apellido no puede estar en blanco");
  engine(email, 1, "Correo Electrónico no puede estar en blanco");
  engine(edad, 2, "Edad no puede estar en blanco");

  validateCheckbox("especie-de-mascota", 3, "Debe seleccionar al menos una especie de mascota");
  validateRadio("tipo-de-servicio", 4, "Debe seleccionar un tipo de servicio");
  if (validateCaptcha()) {
    // Enviar formulario o realizar cualquier otra acción si el CAPTCHA es correcto
    alert("Formulario enviado correctamente");
  }
};

let validateCheckbox = (name, serial, message) => {
  let checkboxes = document.getElementsByName(name);
  let checked = false;

  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    errorMsg[serial].innerHTML = message;
    for (let checkbox of checkboxes) {
      checkbox.style.outline = "2px solid red";
    }
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    for (let checkbox of checkboxes) {
      checkbox.style.outline = "none";
    }
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

let validateRadio = (name, serial, message) => {
  let radios = document.getElementsByName(name);
  let checked = false;
  for (let radio of radios) {
    if (radio.checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    errorMsg[serial].innerHTML = message;
    for (let radio of radios) {
      radio.style.outline = "2px solid red";
    }
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    for (let radio of radios) {
      radio.style.outline = "none";
    }
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Nombre y apellido no puede estar en blanco");
  engine(email, 1, "Correo electrónico no puede estar en blanco");
  engine(edad, 2, "Edad no puede estar en blanco");
  engine(sucursal, 5, "Debe seleccionar una sucursal");

  // Obtener los valores de los checkboxes de especies de mascotas
  let speciesValues = Array.from(document.querySelectorAll('input[name="especie-de-mascota"]:checked')).map(el => el.value);

  // Obtener el valor del radio seleccionado de tipo de servicio
  let serviceType = document.querySelector('input[name="tipo-de-servicio"]:checked');

  // Imprimir los valores en la consola
  if (speciesValues.length > 0 && serviceType) {
    console.log("Nombre y apellido:", username.value);
    console.log("Correo electrónico:", email.value);
    console.log("Edad:", edad.value);
    console.log("Especie de mascota:", speciesValues);
    console.log("Tipo de servicio:", serviceType.value);
    console.log("Sucursal:", sucursal.value);
  } else {
    if (speciesValues.length === 0) {
      console.log("Especie de mascota no puede estar en blanco");
    }
    if (!serviceType) {
      console.log("Tipo de servicio no puede estar en blanco");
    }
  }
});
