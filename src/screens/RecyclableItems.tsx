import { View, Text, FlatList } from "react-native";

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

  const recyclableItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <View className="m-4">
        <View className="my-4 p-2">
          <FlatList
            data={recyclableItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
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
              </>
            }
          />
        </View>
      </View>

      {isVisible && (
        <BottomSheet
          title={selectedItem?.title}
          recyclable={selectedItem?.recyclable === false}
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
