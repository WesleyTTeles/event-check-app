import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/BottomTabNavigation/routes";

export default function App() {
  const [isFontsLoader] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoader) {
    return null;
  }
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
