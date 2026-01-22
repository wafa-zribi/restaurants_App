
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import {useEffect} from 'react';

export default function Restaurants({ term }) {
   const [results, searchRestaurants] = useRestaurants();
   const { data, loading, error } = results;

    useEffect(() => {
        searchRestaurants(term);
    }, [term]);

    console.log({data, loading, error});

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#08081c" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Restaurants</Text>
            <FlatList
                data={data?.features || []}
                keyExtractor={(item) => item.properties.place_id}
                renderItem={({ item }) => (
                    <View style={styles.restaurantItem}>
                        <Text style={styles.restaurantName}>{item.properties.name}</Text>
                        <Text>{item.properties.address_line2}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,

    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    },
    restaurantItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
