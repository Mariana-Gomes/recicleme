import { View, Text } from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import {
  Martini,
  BeerBottle,
  Hammer,
  Carrot,
  Scroll,
  BatteryCharging,
} from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  getRecyclableItems,
  RecyclableItem,
} from "../../service/getRecyclableItems";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CategoryKey } from "../utils/constants";

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
        <Card
          className="bg-green-600/70"
          icon={<Martini color="white" size={32} />}
          title="Vidro"
          category="glass"
          onPress={() => handleCategory("glass")}
        />
        <Card
          className="bg-red-600/70"
          icon={<BeerBottle color="white" size={32} />}
          category="plastic"
          title="Plástico"
          onPress={() => handleCategory("plastic")}
        />
        <Card
          className="bg-yellow-600/70"
          icon={<Hammer color="white" size={32} />}
          category="steel"
          title="Metal"
          onPress={() => handleCategory("steel")}
        />
        <Card
          className="bg-amber-950/60"
          icon={<Carrot color="white" size={32} />}
          category="organic"
          title="Orgânico"
          onPress={() => handleCategory("organic")}
        />
        <Card
          className="bg-blue-600/60"
          icon={<Scroll color="white" size={32} />}
          category="paper"
          title="Papel"
          onPress={() => handleCategory("paper")}
        />
        <Card
          className="bg-gray-600/60"
          icon={<BatteryCharging color="white" size={32} />}
          title="Não reciclável"
        />
      </View>
    </View>
  );
}
