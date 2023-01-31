Vue.createApp({
    data() {
        return{
            activo: true 
        
        }
    },
    methods: {
        mostrar() {
            this.activo = true; 

        },
        ocultar(){
            this.activo= false;
        }
    },
}).mount('#app')