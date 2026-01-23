import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRestaurant } from '../hooks/useRestaurant';
export default function RestaurantsScreen({ route }) {
    const { restaurantId } = route.params;
    const [{data, loading, error}, searchRestaurants] = useRestaurant();
    useEffect(() => {
        searchRestaurants(restaurantId);
    }, []);
    if (loading) {
        return (
            <Text>Loading...</Text>
        );
    }
    if (error){ return(<Text>Error: {error}</Text>)}
    return (
        <View>
            <Text>
                {restaurantId}
            </Text>
        </View>
    );
}
