const { createApp } = Vue
createApp({
    data() {
        return {
            productos: [],
            tipoproductos: [],
            url: 'https://cualquiera22.pythonanywhere.com/productos',   // si ya lo subieron a pythonanywhere
            urltipoproducto: 'https://cualquiera22.pythonanywhere.com/tipoproductos',
            error: false,
            cargando: true,
            /*alta*/
            id: 0,
            nombre: "",
            precio: 0,
            stock: 0,
            tipoproducto:0,
            imagen: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;//
                    this.cargando = false

                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })

            fetch(this.urltipoproducto)
                .then(response => response.json())
                .then(data => {
                    this.tipoproductos = data;
                    this.cargando = false
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
                .then(res => res.text()) 
                .then(res => {
                    alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
            grabar() {
            let producto = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                tipoproducto: this.tipoproducto,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./crudproductos.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })
        },
        modificar() {
            let producto = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                tipoproducto: this.tipoproducto,
                imagen: this.imagen

            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url + "/" + id, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        },
        async comprar(id) {
            const url = this.url + '/' + id;
            await fetch(url)
                .then(response => response.json())
                .then(data => {


                    this.id = data.id
                    this.nombre = data.nombre;
                    this.precio = data.precio
                    this.stock = data.stock
                    this.tipoproducto = data.tipoproducto
                    this.imagen = data.imagen


                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })

            let producto = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock - 1,
                tipoproducto: this.tipoproducto,
                imagen: this.imagen,

            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url + "/" + id, options)
                .then(function () {
                    //alert("Registro modificado")
                    window.location.href = "./index.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })


        }

    },
    created() {

        this.fetchData(this.url)
    },
}).mount('#app')

