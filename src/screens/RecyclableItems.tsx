import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { categories, CategoryKey } from "../utils/constants";

import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { ListItem } from "../components/ListItem";
import { BottomSheet } from "../components/BottomSheet";
import { useState } from "react";

import { RecyclableItem } from "../../service/getRecyclableItems";
import { SearchInput } from "../components/SearchInput";

type RecyclableItemsRouteProp = RouteProp<
  RootStackParamList,
  "RecyclableItems"
>;

type RecyclableItemsProps = {
  route: RecyclableItemsRouteProp;
};

export function RecyclableItems({ route }: RecyclableItemsProps) {
  const { items, category } = route.params;

  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RecyclableItem | null>(null);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState(items);

  const renderItem = ({ item }: { item: { title: string; type: string } }) => {
    return (
      <ListItem
        title={item.title}
        category={item.type as CategoryKey}
        onPress={() => handleItemPress(item)}
      />
    );
  };

  function handleItemPress(item: any) {
    setSelectedItem(item);
    setIsVisible(true);
  }

  function filterItems(text: string) {
    const filteredData = items.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setFilterData(filteredData);
  }

  return (
    <>
      <View className="m-4">
        <View className="my-4 p-2">
          <Text className="font-bold text-xl my-8">
            {categories[category].label}
          </Text>
          <View className="mb-6">
            <SearchInput
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                filterItems(text);
              }}
            />
          </View>
          <FlatList
            data={items.filter((item) =>
              item.title.toLowerCase().includes(searchText.toLowerCase())
            )}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setIsVisible(false)}
        className="flex-1"
        activeOpacity={1}
      />
      {isVisible && (
        <BottomSheet
          title={selectedItem?.title}
          recyclable={selectedItem?.recyclable ? "Sim" : "Não"}
          degradation={
            selectedItem?.degradation?.value +
            " " +
            selectedItem?.degradation?.unit
          }
          onClose={() => setIsVisible(false)}
          disposal={selectedItem?.disposal}
        />
      )}
    </>
  );
}
