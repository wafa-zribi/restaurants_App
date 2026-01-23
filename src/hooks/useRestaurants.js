import {useState} from 'react'
import geoapify from '../api/geoapify';

export default ()=> {
    const [results, setResults]= useState({
        data:null,
        loading:false,
        error:null,
    })
     const searchRestaurants = async (term)=>{
        setResults({
            data:null,
            loading: true,
            error: null
        })

       try {
         const params = {
                categories: 'catering.restaurant',
                filter: 'circle:-74.006,40.7128,5000',
                limit: 20,
                name: term,
            };
         const response = await geoapify.get('/v2/places', { params });
            setResults({
                data: response.data,
                loading: false,
                error: null
            })
       } catch (error) {
            console.log('API Error:', error);
            setResults({
                data: null,
                loading: false,
                error: error.message || 'Something went wrong'
            })
       }

        }
        return[results, searchRestaurants]
}
