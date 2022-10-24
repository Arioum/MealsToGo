import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapsScreen } from "./src/features/restaurants/screens/maps.screen";
import { SettingsScreen } from "./src/features/restaurants/screens/settings.screen";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

// const createScreenOptions = ({ route }) => {
//   const TAB_ICON = ({ focused }) => ({
//     Restaurants: `${focused ? "restaurant" : "restaurant-outline"}`,
//     Maps: `${focused ? "ios-map" : "ios-map-outline"}`,
//     Settings: `${focused ? "ios-settings-sharp" : "ios-settings-outline"}`,
//   });
//   const iconName = TAB_ICON[route.name];
//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//   };
// };

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Restaurants") {
                    iconName = focused ? "restaurant" : "restaurant-outline";
                  } else if (route.name === "Maps") {
                    iconName = focused ? "ios-map" : "ios-map-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused
                      ? "ios-settings-sharp"
                      : "ios-settings-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              }}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Maps"
                component={MapsScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
