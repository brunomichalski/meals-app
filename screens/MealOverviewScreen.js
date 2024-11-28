import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { View, FlatList, Text, StyleSheet } from "react-native";

function MealOverviewScreen({ route }) {

    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title}/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
});