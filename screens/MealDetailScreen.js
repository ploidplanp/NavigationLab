import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const catId = props.navigation.getParam("id");

  const selectedMeals = MEALS.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Dish: {selectedMeals.title}</Text>
      <Text>Ingredients: {selectedMeals.ingredients}</Text>
      <Text>Steps: {selectedMeals.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const catId = navigationData.navigation.getParam("id");

  const selectedMeals = MEALS.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedMeals.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
