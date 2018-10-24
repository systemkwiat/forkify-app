import Search from './models/Search';
/* Global state of the att 
- Search object
- current recipe object 
- shopping list object
- linked recipes
*/
const state = {};

const controlSearch = async () => {
    // 1. get the query from the view
    const query = 'pizza'; //TODO
    
    if(query) {
        // 2. New search object and add it to stat
        state.search = new Search(query);

        // 3. Prepare UI for the result 

        // 4. search for recipes
        await state.search.getResults();

        // 5. render result on UI
        console.log(state.search.result)
    }

}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


