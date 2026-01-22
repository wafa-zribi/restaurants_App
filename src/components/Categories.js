import { FlatList, View } from "react-native";
import Category from "./Category";
export default function Categories({categories, setTerm, term}){
    return(
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
                  active={item.name.toLowerCase() === term.toLowerCase()}
                  handlePress={() => setTerm(item.name)}
                />
              )}
          />
    </View>
    )
}
