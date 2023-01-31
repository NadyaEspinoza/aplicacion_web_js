Vue.createApp({
    data(){
        return {

            producto: '',
            carrito: [
                'cebolla',
                'tomates'
            ]
            
        
        }
      
    },
    methods:{
        agregar(){
            this.carrito.push(this.producto);
            this.producto = '';
        }
        
    }
    

}).mount('#app'); // "#" para mencionar una id