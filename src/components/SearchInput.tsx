import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { MagnifyingGlass } from "phosphor-react-native";

type SearchInputProps = TextInputProps & {
  onChangeText: (text: string) => void;
  value: string;
};

export function SearchInput({ onChangeText, value }: SearchInputProps) {
  return (
    <TouchableOpacity className="flex-row items-center gap-2 rounded-lg px-3 py-2 bg-black/5 justify-between">
      <TextInput
        placeholder="Ex.: Garrafa Pet"
        value={value}
        onChangeText={onChangeText}
      />
      <MagnifyingGlass size={25} color="#c1c1c1" />
    </TouchableOpacity>
  );
}
