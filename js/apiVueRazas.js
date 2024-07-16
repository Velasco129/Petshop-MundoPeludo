const { createApp } = Vue  //creo objeto VUE llamdo createApp
createApp({
  data() {
    return {
      url: "https://cualquiera22.pythonanywhere.com/razas",
      perrosTodos: [], 
      perros: [],                                                  
      tamanosfiltro:[],  
      tamanofiltro:"All"
    }
  },
  methods: {
    fetchData(url) {
      fetch(url) 
        .then(response => response.json()) 
        .then(data => {
          this.perros=data
          this.perrosTodos=data
          this.cargarListasDesplegables()
        })
        .catch(error=>alert("Se produjo un error al cargar la pagina: Actualize la pagina"))
    },

    filtro() {

      this.perros = this.perrosTodos.filter( elemento=>
      (elemento.tamano == this.tamanofiltro || this.tamanofiltro==="All"))

    },
    orden() {
      this.perros.sort((a, b) => { return (a.nombre > b.nombre ? 1 : -1) } ) 
    },
    cargarListasDesplegables() {
      this.tamanosfiltro =[]      
      for (elemento of this.perrosTodos) {
        if (elemento.tamano !== '' && this.tamanosfiltro.indexOf(elemento.tamano) < 0) {
          this.tamanosfiltro.push(elemento.tamano)
        }        
       }
    }
  },
  created() {
    this.fetchData(this.url)                                                       
  }
}).mount('#appk')