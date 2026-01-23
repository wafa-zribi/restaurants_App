// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';

export default function HomeScreen() {
  const [term, setTerm] = useState('Burger');

  const commonCategories = [
    { name: 'Burger', imageUrl: require('../assets/images/hamburger.png') },
    { name: 'Pizza', imageUrl: require('../assets/images/pizza.png') },
    { name: 'Dessert', imageUrl: require('../assets/images/strawberry-cake.png') },
    { name: 'Pasta', imageUrl: require('../assets/images/ramen.png') },
    { name: 'Drinks', imageUrl: require('../assets/images/smoothie.png') },
    { name: 'Steak', imageUrl: require('../assets/images/protein.png') },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        categories={commonCategories}
        term={term}
        setTerm={setTerm}
      />
      <Restaurants term={term} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
