/*const { createApp } = Vue
createApp({
    data() {
        return {
            url: "./js/Petshop.json",
            error: false,
            datos: [],
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                        console.log(data)
                        this.datos = data
                    }
                );
        }
    },
    created() {
        this.fetchData(this.url)
    }


}).mount('#app')*/

const { createApp } = Vue
createApp({
    data() {
        return {
            url: "https://cualquiera22.pythonanywhere.com/productos",
            error: false,
            datos: [],
            tipo1: [],
            tipo2: [],
            tipo3: []
        }
    },

    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.datos = data
                    this.tipo1 = this.datos.filter(elemento => elemento.tipoproducto === 1);
                    this.tipo2 = this.datos.filter(elemento => elemento.tipoproducto === 2);
                    this.tipo3 = this.datos.filter(elemento => elemento.tipoproducto === 3)
                }
                );
        }
    },



    created() {
        this.fetchData(this.url)
    }


}).mount('#app')