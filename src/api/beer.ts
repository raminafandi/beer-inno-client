import axios from "../config/axios";

const getBeers = () => {
    return axios
        .get('/beers')
        .then(({ data }) => {
            return { response: data };
        })
        .catch((error) => {
            return { error };
        });
}

const beer = { getBeers }
export default beer;