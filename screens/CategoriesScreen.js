import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}/>
} 

function CategorioesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem}/>
}

export default CategorioesScreen