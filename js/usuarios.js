const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://cualquiera22.pythonanywhere.com/usuarios',   // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            usuario: "",
            clave: "",
            rol: 0,
            oculto:[]


        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false
                    this.oculto= this.usuarios.forEach(usuario => {
                        // Agrega una nueva clave-valor 'estado' a cada usuario
                        usuario.oculto = true;
                    });
                    console.log(this.usuarios)
                    console.log(this.oculto)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(id) {
            const url = this.url + '/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar() {
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol: this.rol
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    if(sessionStorage.getItem("add") !==1){
                        window.location.href = "./Index.html"
                    }else{
                    window.location.href = "./usuario.html";  // recarga productos.html
                }})
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })
        },

        login() {
            const usuario = this.usuario;
            sessionStorage.setItem("adm", 0);
            let i = 0
            while (i < this.usuarios.length && this.usuarios[i].usuario !== this.usuario) {
                i++;
            }
            if (i < this.usuarios.length) {
                if (this.usuarios[i].clave === this.clave) {
                    if (this.usuarios[i].rol === 1) {
                        sessionStorage.setItem("adm", 1);

                    }
                    window.location.href = "./index.html";

                } else {
                    alert('Clave erronea');
                }
            } else {
                alert('Usuario erronea');
            }
        },

        logout() {
            sessionStorage.setItem("adm", 0);
        },

        ocultar(){
            

        }

    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
