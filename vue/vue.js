Vue.createApp({
    data(){
        return{
            contador: 0

        }
    },
    methods:{
      incrementar(){
        this.contador++; //para incrementar
        console.log('Hola estoy en el metodo')
      },
      decrementar(){
        if(this.contador > 0){

            this.contador--; 
            console.log('Se está decrementando')  
        }
       
        
    }
      
    }

}).mount('#app'); // "#" para mencionar una id
   