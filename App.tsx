import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  getRecyclableItems,
  RecyclableItem,
} from "./service/getRecyclableItems";

type ListItemProps = {
  item: RecyclableItem;
};

export default function App() {
  const [recyclableItems, setRecyclableItems] = useState<RecyclableItem[]>([]);

  async function fetchItems() {
    const data = await getRecyclableItems();
    setRecyclableItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const renderItem = ({ item }: ListItemProps) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={recyclableItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
