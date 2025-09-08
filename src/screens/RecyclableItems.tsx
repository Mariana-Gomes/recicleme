import { View, Text, FlatList } from "react-native";

import { categories, CategoryKey } from "../utils/constants";

import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { ListItem } from "../components/ListItem";

type RecyclableItemsRouteProp = RouteProp<
  RootStackParamList,
  "RecyclableItems"
>;

type RecyclableItemsProps = {
  route: RecyclableItemsRouteProp;
};

export function RecyclableItems({ route }: RecyclableItemsProps) {
  const { items, category } = route.params;

  const renderItem = ({ item }: { item: { title: string; type: string } }) => {
    return <ListItem title={item.title} category={item.type as CategoryKey} />;
  };

  return (
    <View className="m-4">
      <View className="my-4 p-2">
        <Text className="font-bold text-xl my-10">
          {categories[category].label}
        </Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
