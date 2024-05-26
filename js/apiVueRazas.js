const { createApp } = Vue  //creo objeto VUE llamdo createApp
createApp({
  data() {
    return {
      url: "./js/razas.json",
      perrosTodos: [], 
      perros: [],                                                  

      tamanos:[],  

      tamano:"All"
    }
  },
  methods: {
    fetchData(url) {
      fetch(url) 
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
          this.perros=data
          this.perrosTodos=data
          this.cargarListasDesplegables()
        })
        .catch(error=>alert("Ups... se produjo un error: "+ error))
    },

    filtro() {

      this.perros = this.perrosTodos.filter( elemento=>
      (elemento.tamaño == this.tamano || this.tamano==="All"))

    },
    orden() {
      this.perros.sort((a, b) => { return (a.nombre > b.nombre ? 1 : -1) } ) 
    },
    cargarListasDesplegables() {
      this.tamanos =[]      
      for (elemento of this.perrosTodos) {
        if (elemento.tamaño !== '' && this.tamanos.indexOf(elemento.tamaño) < 0) {
          this.tamanos.push(elemento.tamaño)
        }        
       }
    }
  },
  created() {
    this.fetchData(this.url)                                                       
  }
}).mount('#app')