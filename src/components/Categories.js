import React from 'react';
import { View, FlatList } from 'react-native';
import Category from './Category';

export default function Categories({ categories, term, setTerm }) {
  return (
    <View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <Category
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={term.toLowerCase().includes(item.name.toLowerCase())} // highlight selected
            handlePress={() => setTerm(item.name)}
          />
        )}
      />
    </View>
  );
}
