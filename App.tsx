import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-2xl font-bold dark:text-white/80">
        Namaste World!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
