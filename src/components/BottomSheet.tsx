import { View, Text } from "react-native";

type BottomSheetProps = {
  title?: string;
  recyclable?: boolean;
  degradation?: string;
  disposal?: string;
};

export function BottomSheet({
  title,
  recyclable,
  degradation,
  disposal,
}: BottomSheetProps) {
  return (
    <>
      <View className="absolute bottom-0 h-1/3 w-full bg-white rounded-t-3xl drop-shadow-2xl p-10">
        <Text className="font-bold text-2xl mb-3">{title}</Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-lg text-black/70">Reciclável:</Text>
          {recyclable === true ? (
            <Text className="p-2 bg-green-600/70 w-20 text-white rounded-md text-center font-bold">
              {recyclable ? "Sim" : "Não"}
            </Text>
          ) : (
            <Text className="p-2 bg-red-600/80 w-20 text-white rounded-md text-center font-bold">
              {recyclable ? "Sim" : "Não"}
            </Text>
          )}
        </View>

        <View className="h-[0.5px] bg-black/50 my-2" />

        <View className="flex-row items-center justify-between">
          <Text className="text-lg color-black/70">Tempo de degradação:</Text>
          <Text className="p-2 bg-red-600/80 w-20 color-white rounded-md  font-bold">
            {degradation}
          </Text>
        </View>

        <View className="h-[0.5px] bg-black/50 my-2" />

        <Text>Descarte adequado: {disposal}</Text>
      </View>
    </>
  );
}
