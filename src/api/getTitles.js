import axios from 'axios';

const getTitles = () => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a5bf2e68ac98505ad392cb7cc10b4ca3&language=en-US&page=1")
    .then((res) => {
        const { results } = res;
        return results;
    })
    .then((err) => {
        console.error(err);
    });
}

export default getTitles;