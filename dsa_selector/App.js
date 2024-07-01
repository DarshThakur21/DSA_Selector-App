import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import supported modules from npm
import AddRemovesc from './components/Screens/AddRemovesc'
import Randomizesc from './components/Screens/Randomizesc'

 
const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddRemovesc">
        <Stack.Screen name="AddRemovesc" component={AddRemovesc} options={{ title: 'Add/Remove Topics' }} />
        <Stack.Screen name="Randomizesc" component={Randomizesc} options={{ title: 'Randomizer' }} />

      </Stack.Navigator>
      </NavigationContainer>
    //  <Randomizesc/>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   marginRight:1,
  //   // backgroundColor: '#ecf01',
  //   padding: 8,
  // },
   
});
