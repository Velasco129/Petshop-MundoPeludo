console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4) // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            tipoproductos: [],
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            precio: 0,
            tipoproducto: 0,
            url: 'https://cualquiera22.pythonanywhere.com/productos/' + id,
            urltipoproducto: 'https://cualquiera22.pythonanywhere.com/tipoproductos'
        }

    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.imagen = data.imagen
                    this.stock = data.stock
                    this.tipoproducto = data.tipoproducto
                    this.precio = data.precio
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })

            fetch(this.urltipoproducto)
                .then(response => response.json())
                .then(data2 => {
                    console.log(data2)
                    this.tipoproductos = data2
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
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
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./crudproductos.html" // navega a productos.html
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
}).mount("#app")