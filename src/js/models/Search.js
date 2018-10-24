import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = "f4f144ca91edf4ad5c012c0e146a5bb0";
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
           //console.log(this.result);
        } catch(error) {
            alert(error);
        }
    
    }
}






