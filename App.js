import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import SearchScreen from "./pages/SearchScreen";
import DetailScreen from "./pages/DetailScreen";
import SplashScreen from "./pages/SplashScreen"; // Import the SplashScreen component

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      {/* Add other screens here if needed */}
    </Stack.Navigator>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., checking authentication, fetching initial data)
    const fakeAsyncOperation = async () => {
      // Simulate a delay (you should replace this with your actual async operation)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fakeAsyncOperation();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            marginHorizontal: 16,
            borderRadius: 24,
            height: 64,
            marginBottom: 16,
            shadowOpacity: 0,
            elevation: 1,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Search") {
              iconName = "search";
              color = focused ? "black" : "lightgray";
            }

            return <Octicons name={iconName} size={24} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
