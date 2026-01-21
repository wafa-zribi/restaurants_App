import { FlatList } from "react-native";
import Category from "./Category";
export default function Categories({categories, setTerm, term}){
    return(
    <FlatList
              data={categories} setTerm={setTerm} term={term}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.name}
              renderItem={({ item, index }) => (
                <Category
                  name={item.name}
                  imageUrl={item.imageUrl}
                  index={index}
                  active={item.name === term}
                  handlePress={() => setTerm(item.name)}
                />
              )}
          />
    )
}