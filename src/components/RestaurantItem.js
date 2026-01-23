import React from 'react'
import { View, Text, Image , StyleSheet} from 'react-native';
import {elevation} from '../common/styles';

export default function RestaurantItem({ restaurant }) {
  

  return (
    <View style={[styles.container, styles.elevation]}>
        {photoUri && <Image source={{uri: photoUri}} style={styles.image} />}
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <View style={styles.details}>
                <Text>{restaurant.properties.address_line2}</Text>
                <Text>⭐ {restaurant.properties.rate || 'N/A'}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    elevation,
    container:{
        backgroundColor: '#fff',
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 50,
        marginVertical:10,
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal:10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
