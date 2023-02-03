Vue.createApp({
    data(){
        return {
            Camilo: ''
        
        }
      
    },
    computed:{
        CamiloFotos(){
            if(this.Camilo=="CamiloN"){
                return "https://scontent.fgym1-1.fna.fbcdn.net/v/t39.30808-6/323926424_680694453545795_4773661947439601292_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aupgVOdgdXsAX-hVQi_&_nc_ht=scontent.fgym1-1.fna&oh=00_AfA9WYHOqejh1WnbAQqZogQrlr5tssUyxZJbK733FSIyew&oe=63E027E3"
            }else if(this.Camilo=="CamiloM"){
                return"https://scontent.fgym1-1.fna.fbcdn.net/v/t39.30808-6/323896159_1216702762594301_6401358815368187897_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wyG0DhIXRyQAX8Tr7PZ&_nc_oc=AQliUqksCBwoTGOnwlfcQfph1FkOYCnA7jB2BQOunpG-3ZoQ9HnJYFlhduABwotGooc&tn=YI1cFWdNpAh_CnfS&_nc_ht=scontent.fgym1-1.fna&oh=00_AfA2uHVCHiV4sJbE6I55VbospvKALEdwHikmfrSOsAhphA&oe=63DEA592"

            }else if(this.Camilo=="CamiloP"){
                return"https://scontent.fgym1-1.fna.fbcdn.net/v/t39.30808-6/325405269_6592305757453345_2995851505217505799_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=fPVJZ7anYrsAX9lQ1bX&_nc_ht=scontent.fgym1-1.fna&oh=00_AfC-9nfcA-8C6wc9k6QZeo_jngBpaAs4H7PWtxwhuHkAXw&oe=63DFE432"
            }
        }
    }

}).mount('#app');