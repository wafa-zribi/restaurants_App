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
         const response = await geoapify.get('/v2/places', {
                params: {
                categories: 'catering.restaurant',
                filter: 'circle:-74.006,40.7128,5000', // New York + 5km radius
                limit: 20,
                name: term,
                },
            });
            setResults({
                data: response.data,
                loading: false,
                error: null
            })
       } catch (error) {
            setResults({
                data: null,
                loading: false,
                error: 'Something went wrong'
            })
       }
     
        }
        return[results, searchRestaurants]
}
