const app = new Vue({
    el:'#root',
    data:{
        allElementCall:[], 
        search:'',      //barra di ricerca
        resultArray:[],    // array con film
        serieTv:[],        //arrau con serie tv
        apiKey:'518b31ac0cdefdc1e2ca95a2535a9e17', //chiave api
        pageSelect:1,     //selezione per la pagina 
    },
    methods:{
        filter(){           //filtrare i risultati in base alla input
            this.resultArray= []
            // prima chiamata per film
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params:{
                    'api_key':this.apiKey,
                    'query':this.search,

                }
            })
            .then(r => {
                this.allElementCall= r.data.total_pages;
                r.data.results.forEach(el => {
                    this.resultArray.push(el);
                })

            });
            this.serieTv = []
            // seconda chiamata
            axios.get('https://api.themoviedb.org/3/search/tv',{
                params:{
                    'api_key':this.apiKey,
                    'query':this.search
                }
            })
            .then(s =>{
                s.data.results.forEach(movie =>{
                    this.serieTv.push(movie)
                })

            })
            
            
            this.search='';

        },
        visibleTitle(){
            if(this.resultArray.length > 0 && this.serieTv.length > 0){
               return true
            }else{
                return false
            }
        },
        // valutazioni
        starsEmpty(n){
            return Math.ceil(n/2);
        },
        
        
        // handleImgNotFound(e){
        //     e.target.src='img'
        // }
        
        
    }
})