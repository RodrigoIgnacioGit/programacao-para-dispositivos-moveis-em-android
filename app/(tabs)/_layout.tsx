import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import TabTwoScreen from '@/app/(tabs)/estoque';
import TabTwoScreen2 from '@/app/(tabs)/estoque2';
import App from '@/app/(tabs)/mais';
import TabTwoScreen3 from '@/app/(tabs)/perguntas';
import HomeScreen from '.';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 47,
          width:690,
          backgroundColor: 'black',
          opacity: 0.9,
        },
        tabBarActiveBackgroundColor: '#282828',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={31} name="house.fill" color={color} />,
        }}
      />
      <Tab.Screen
        name="Solicitar"
        component={App}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={31} color={color} />,
        }}
      />
      <Tab.Screen
        name="Usuário"
        component={TabTwoScreen3}
        options={{
          tabBarIcon: ({ color }) => <AntDesign size={31} name="user" color={color} />,
        }}
      />

     
      <Tab.Screen
        name="Estoque"
        component={TabTwoScreen}
        options={{ tabBarButton: () => null }}  
      />
      <Tab.Screen
        name="Estoque 2"
        component={TabTwoScreen2}
        options={{ tabBarButton: () => null }}  
      />
    </Tab.Navigator>
  );
}

 
const styles = StyleSheet.create({
  container: { flex: 1,
     justifyContent: 'center', 
     alignItems: 'center', 
     backgroundColor: 'black' },
  title: { 
    color: 'white', 
    fontSize: 20, 
    marginBottom: 20 },
  button: { 
    backgroundColor: '#282828',
     padding: 15, 
     borderRadius: 10,
      marginBottom: 10 },
  buttonText: {
     color: 'white',
      fontSize: 16 },
});