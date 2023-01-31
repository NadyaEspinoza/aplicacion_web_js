Vue.createApp({
    data() {
        return{
           edad: true
        
        }
    },
    methods: {
        edad(){
            if(this.edad >= 18){
                
                this.edad = true;
            }
            else if 
            (this.edad < 18 ) {
            this.edad = false;
        } 

        }
       
    },
    methods: {
        edad(){
            this.edad= prompt;
        }
    }
}).mount('#app')