
import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet } from 'react-native';
import Header from "./src/components/Header";
import Search from './src/components/Search';
import {useState} from 'react';
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';
export default function App() {
  const[term, setTerm] = useState("Burger");
  const commonCategories= [
    {
      name:"Burger",
      imageUrl:require('./src/assets/images/hamburger.png')
    },
    {
      name:"Pizza",
      imageUrl:require('./src/assets/images/pizza.png')
    },
    {
      name:"Dessert",
      imageUrl:require('./src/assets/images/strawberry-cake.png')
    },
    {
      name:"pasta",
      imageUrl:require('./src/assets/images/ramen.png')
    },
    {
      name:"smoothie",
      imageUrl:require('./src/assets/images/smoothie.png')
    },
    {
      name:"Steak",
      imageUrl:require('./src/assets/images/protein.png')
    }

  ];

  return (
    <View >
      <Header/>
      <Search 
      setTerm={setTerm}
      />
      <Categories
      categories={commonCategories}
      setTerm={setTerm}
      term={term}
      />
      <Restaurants term={term} />
       <StatusBar/>
    </View>
   
  );
}

