import { useState } from 'react';
import geoapify from '../api/geoapify';

export default function useRestaurants() {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term = '') => {
    setState({ data: [], loading: true, error: null });

    try {
      const response = await geoapify.get('/places', {
        params: {
          categories: 'catering.restaurant',
          filter: 'circle:10.7603,34.7406,5000', // Sfax
          bias: 'proximity:10.7603,34.7406',
          limit: 20,
          name: term || undefined, // only if searching
        },
      });

      setState({
        data: response.data.features,
        loading: false,
        error: null,
      });
    } catch (err) {
      console.log('GEOAPIFY ERROR:', err.response?.data || err.message);

      setState({
        data: [],
        loading: false,
        error: 'Failed to load restaurants',
      });
    }
  };

  return [state, searchRestaurants];
}
