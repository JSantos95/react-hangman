import axios from 'axios';

const getTitles = () => {
    return axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then(({ data }) => {
            return data;
        })
        .catch(( err ) => {
            console.error(err);
        });
}

export default getTitles;