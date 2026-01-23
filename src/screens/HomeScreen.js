import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native';
import Header from "../components/Header";
import Search from '../components/Search';
import {useState} from 'react';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';
export default function HomeScreen() {
     const[term, setTerm] = useState("Burger");
  const commonCategories= [
    {
      name:"Burger",
      imageUrl:require('../assets/images/hamburger.png')
    },
    {
      name:"Pizza",
      imageUrl:require('../assets/images/pizza.png')
    },
    {
      name:"Dessert",
      imageUrl:require('../assets/images/strawberry-cake.png')
    },
    {
      name:"pasta",
      imageUrl:require('../assets/images/ramen.png')
    },
    {
      name:"drinks",
      imageUrl:require('../assets/images/smoothie.png')
    },
    {
      name:"Steak",
      imageUrl:require('../assets/images/protein.png')
    }

  ];
  
  return (
        <View style={styles.container}>
          <Header/>
          <Search
          setTerm={setTerm}
          />
          <Categories style= {styles.categoriesContainer}
          categories={commonCategories}
          setTerm={setTerm}
          term={term}
          />
          <Restaurants style= {styles.restaurantsContainer} term={term} />
           <StatusBar/>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253,253,253)',

  },
  categoriesContainer:{
    marginTop:10,
    marginBottom:10,
    height:120,
  },
  restaurantsContainer:{
    //flex:1,
    marginTop:10,
    marginBottom:10,
    height:500,
  }
});
