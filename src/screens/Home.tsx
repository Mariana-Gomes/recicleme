import { View, Text } from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

import { useNavigation } from "@react-navigation/native";
import {
  getRecyclableItems,
  RecyclableItem,
} from "../../service/getRecyclableItems";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { categories, categoriesData, CategoryKey } from "../utils/constants";

type NavigationProps<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

export function Home() {
  const navigation = useNavigation<NavigationProps<"Home">>();

  const [recyclableItems, setRecyclableItems] = useState<RecyclableItem[]>([]);

  async function fetchItems() {
    const data = await getRecyclableItems();
    setRecyclableItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  function handleCategory(category: CategoryKey) {
    const filteredItems = recyclableItems.filter(
      (item) => item.type === category
    );

    if (category === "no-recyclable") {
      const nonRecyclableItems = recyclableItems.filter(
        (item) => item.recyclable === false
      );
      return navigation.navigate("RecyclableItems", {
        items: nonRecyclableItems,
        category,
      });
    }

    navigation.navigate("RecyclableItems", { items: filteredItems, category });
  }

  return (
    <View className="m-4">
      <View className="mt-10 p-2">
        <Header />
      </View>
      <View className="my-4 p-2">
        <Text className="font-bold text-xl">Categorias</Text>
        <Text className="font-normal text-base text-left color-neutral-900/40 mt-2">
          Você pode selecionar uma categoria para ver os itens listados
        </Text>
      </View>

      <View className="flex-row flex-wrap justify-center gap-2">
        {categoriesData.map(({ category, icon: Icon }) => (
          <Card
            key={category}
            className={categories[category].color}
            icon={<Icon color="white" size={32} />}
            title={categories[category].label}
            category={category}
            onPress={() => handleCategory(category)}
          />
        ))}
      </View>
    </View>
  );
}
