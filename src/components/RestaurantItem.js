import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { elevation } from '../common/styles';

function RestaurantItem({ restaurant }) {
  const navigation = useNavigation();

  const photoUri = restaurant.properties?.datasource?.raw?.image;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurants', {
          restaurantId: restaurant.properties.place_id,
        })
      }
    >
      <View style={[styles.container, styles.elevation]}>
        {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{restaurant.properties.name}</Text>

          <View style={styles.details}>
            <Text>{restaurant.properties.address_line2}</Text>
            <Text>⭐ {restaurant.properties.rate || 'N/A'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
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
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RestaurantItem;
