const { createApp } = Vue
createApp({
    data() {
        return {
            tipoproductos: [],
            url: 'https://cualquiera22.pythonanywhere.com/tipoproductos',
            error: false,
            cargando: true,
            /*alta*/
            id: 0,
            nombre: "",
            descripcion:""
        }
    },
    methods: {
        fetchData(url) {
             fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.tipoproductos = data;
                    // esto es para boton modificar
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.descripcion = data.descripcion;
                    this.cargando=false
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
                    location.reload();
                })
        },
        grabar() {
            let tipoproducto = {
                nombre: this.nombre,
                descripcion: this.descripcion
            }
            var options = {
                body: JSON.stringify(tipoproducto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./tipoproductos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")
                })
        },
        modificar() {
            let producto = {
                nombre: this.nombre,
                descripcion: this.descripcion
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url + "/" + location.search.substr(4), options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./tipoproductos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        if (location.search.substr(4) === "") // si no viene de la modificacion
            url = this.url
        else
            url = this.url + "/" + location.search.substr(4)  // para la modificacion
        // si viene de la modificacion le agrego "/<id>" del producto

        this.fetchData(url)
    },
}).mount('#app')


