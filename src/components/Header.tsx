import { View, Text, Image } from "react-native";
import logo from "../assets/recicleme.png";

export function Header() {
  return (
    <View className="flex-row items-center gap-3">
      <Image source={logo} className="w-12 h-12" />
      <Text className="font-bold text-xl">RecicleMe</Text>
    </View>
  );
}
