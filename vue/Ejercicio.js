Vue.createApp({
    data(){
        return {
            rango: 0
            
        
        }
      
    },
    computed: {
        color(){
            if (this.valor > 0 && this.valor <= 40) {
                return 'success';
            }
        }
    }

}).mount('#app');