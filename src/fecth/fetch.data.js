import Axios from 'axios';

const URL = "http://cine.awesomemedia.do/api/movies"

const getData = () => {
    return Axios({
            method: 'get',
            url: URL
        })
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {
            console.log(`Something went wrong ${e}`)
        })
}

export default getData;