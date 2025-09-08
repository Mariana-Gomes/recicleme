import { View, Text } from "react-native";

type ItemTagProps = {
  label: string;
  color: string;
};

export function ItemTag({ label, color }: ItemTagProps) {
  return (
    <View className={`py-1 px-2 rounded-md ${color}`}>
      <Text className="font-bold color-white">{label}</Text>
    </View>
  );
}
