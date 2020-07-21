const API_KEY = '17518041-b69c9768f70601e4a7571331a'


export default {
    searchQuery:'',
    page: 1,


    fetchPictures () {

        const baseUrl ="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searchQuery+"&page="+this.page+"&per_page=12&key="+API_KEY+""
        
        
        return fetch(baseUrl)
        .then(response => response.json())
        .then(({hits}) => {
           this.incrementPage();    
            return hits;
        })
        .catch(error => console.log(error));
        
        },

        resetPage() {
            this.page = 1;
        },

        incrementPage(){
            this.page += 1;
        },

        get query() {
            return this.searchQuery
        },

        set query(value) {
            this.searchQuery = value;
        }


};