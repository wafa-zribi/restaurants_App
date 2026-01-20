
import { StatusBar } from 'expo-status-bar';
import {View,Text ,StyleSheet, FlatList } from 'react-native';
import Header from "./src/components/Header";
import Search from './src/components/Search';
import Category from './src/components/Category';
export default function App() {
  const commonCategories= [
    {
      name:"Burger",
      imageUrl:require('./src/assets/images/Hamburger.png')
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

  ]
  return (
    <View >
      <Header/>
      <Search/>
      <FlatList
        data={commonCategories}
        renderItem={({ item }) => (
          <Category name={item.name} imageUrl={item.imageUrl} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
      />

       <StatusBar/>
    </View>
   
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
}) */