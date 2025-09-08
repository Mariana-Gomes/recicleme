import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { categories } from "../utils/constants";
import { ItemTag } from "./ItemTag";

type ListItemProps = TouchableOpacityProps & {
  title: string;
  category: keyof typeof categories;
};

export function ListItem({ title, category, ...rest }: ListItemProps) {
  return (
    <TouchableOpacity
      className="flex-row justify-between items-center border p-4 mb-2 rounded-md border-gray-400/20 bg-gray-200/20"
      {...rest}
    >
      <Text className="font-bold">{title}</Text>
      <ItemTag
        label={categories[category].label}
        color={categories[category].color}
      />
    </TouchableOpacity>
  );
}
