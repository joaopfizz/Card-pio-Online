import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddPratoScreen from './screens/AddPratoScreen';
import PratoDetailsScreen from './screens/PratoDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pratos" component={HomeScreen} />
        <Stack.Screen name="Cadastrar" component={AddPratoScreen} />
        <Stack.Screen name="Details" component={PratoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
