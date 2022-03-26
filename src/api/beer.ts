import axios from "../config/axios";

const getBeers = async () => {
    try {
        const { data } = await axios.get("/beers");
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

const beer = { getBeers }
export default beer;