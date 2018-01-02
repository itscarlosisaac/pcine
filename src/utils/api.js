import axios from 'axios';

module.exports = {
    fetchMovies: function () {
        const URL = "http://cine.awesomemedia.do/api/movies"
        return axios.get(URL)
            .then((response) => {
                return response.data.result
            })
            .catch((e) => {
                console.log(`Something went wrong ${e}`)
            })
    },
    filterMovies: function(searchText, movieArray){
        return movieArray.filter( (item) => item.title.toLowerCase().includes(searchText.toLowerCase()) );
    }
}