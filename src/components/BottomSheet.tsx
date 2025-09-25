import { X } from "phosphor-react-native";
import { View, Text, TouchableOpacity } from "react-native";

type BottomSheetProps = {
  title?: string;
  recyclable?: boolean;
  degradation?: string;
  disposal?: string;
  onClose?: () => void;
};

export function BottomSheet({
  title,
  recyclable,
  degradation,
  disposal,
  onClose,
}: BottomSheetProps) {
  return (
    <>
      <View className="absolute bottom-0 h-1/3 w-full bg-white rounded-t-3xl drop-shadow-2xl p-10">
        <View className="flex-row justify-end mb-2">
          <TouchableOpacity
            className="p-2 bg-black/5 rounded-md items-center"
            onPress={onClose}
          >
            <X size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <Text className="font-bold text-xl mb-3">{title}</Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-lg text-black/70">Reciclável:</Text>

          <Text className="p-2  text-black rounded-md text-center font-bold">
            {recyclable ? "Não" : "Sim"}
          </Text>
        </View>

        <View className="h-[0.5px] bg-black/50 my-2" />

        <View className="flex-row items-center justify-between">
          <Text className="text-lg color-black/70">Tempo de degradação:</Text>
          <Text className="p-2  text-black rounded-md font-bold">
            {degradation}
          </Text>
        </View>
        <View className="h-[0.5px] bg-black/50 my-2" />

        <View className="flex-row items-center justify-between">
          <Text className="text-lg color-black/70">Descarte adequado:</Text>
          <Text className="p-2  text-black rounded-md font-bold">
            {disposal}
          </Text>
        </View>
      </View>
    </>
  );
}
