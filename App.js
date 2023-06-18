import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Icon, View } from 'react-native';
import Home from "./screens/Home";
import Menu from "./screens/Menu";

const Stack = createNativeStackNavigator();

//Every screen will follow these styles for their headers
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#FF5B5B" },
  headerTitleStyle: { color: "black" },
  headerTintColor: "black",
};

//Titles in functions
function HeaderTitle({navigation}) {
  return (
    <Text style={{fontSize: 25}}>Disaster-Ready</Text>
  )
}

function MenuTitle({navigation}) {
  return (
    <Text style={{fontSize: 25}}>Menu</Text>
  )
}

export default function App() {
  return (
    //Screens
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={({navigation}) => {
              return {
                headerTitle: () => <HeaderTitle navigation={navigation} />
              }
            }}
          />
          <Stack.Screen 
            name="Menu" 
            component={Menu} 
            options={({navigation}) => {
              return {
                headerTitle: () => <MenuTitle navigation={navigation} />,
              }
            }}
          />
      </Stack.Navigator>
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
