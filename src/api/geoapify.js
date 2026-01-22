import axios from 'axios';
import {GEOAPIFY_API_KEY} from '@env';

export default axios.create({
    baseURL: 'https://api.geoapify.com/v2/places',
    params:{
        apiKey: GEOAPIFY_API_KEY,
    },

})