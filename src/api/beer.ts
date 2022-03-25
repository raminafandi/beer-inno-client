import axios from "../config/axios";
import { BeerType } from "../types";
import { AxiosResponse } from "axios"

const getBeers = () => {
    return axios
        .get('/beers')
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}

const beer = { getBeers }
export default beer;