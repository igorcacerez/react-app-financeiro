import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';
import Inicio from './src/screens/Inicio';
import Perfil from './src/screens/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Inicio" 
          component={Inicio}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen 
          name="Registro" 
          component={Perfil}
          options={{
            tabBarLabel: 'Registro',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cash-multiple" color={color} size={size} />
            ),
          }}
        />  

        <Tab.Screen 
          name="Perfil" 
          component={Perfil}
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
