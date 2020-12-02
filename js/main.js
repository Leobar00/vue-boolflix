const app = new Vue({
    el:'#root',
    data:{
       search:'',
       resultArray:[], 
    },
    mounted(){
       
        
    },
    methods:{
        filter(){
            this.resultArray = [];
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=518b31ac0cdefdc1e2ca95a2535a9e17&query=' + this.search)
                .then(r => {
                    r.data.results.forEach(el => {
                        this.resultArray.push(el)

                    })


                });
            
            this.search='';

        }
    }
})