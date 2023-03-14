import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spot from './Screens/Spot.js';
import Login from './Screens/Login.js';
import Signup from './Screens/Signup.js';
import Spots from './Screens/Spots.js';
import User from './Screens/User.js';
import Verify from './Screens/Verify.js';
import Test from './Screens/Test.js';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Spots" component={Spots} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Spot" component={Spot} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
