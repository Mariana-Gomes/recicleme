import { View, TouchableOpacity, Text } from "react-native";
import { TouchableOpacityProps } from "react-native";

type CardProps = TouchableOpacityProps & {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  category?: string;
};

export function Card({ className, icon, title, category, ...rest }: CardProps) {
  return (
    <TouchableOpacity {...rest}>
      <View
        className={`w-32 h-32 p-4 rounded-md items-center justify-center ${className} `}
      >
        {icon}
        <Text className="font-bold color-white text-center">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
