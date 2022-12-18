import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './Screens/Chat.js';
import Login from './Screens/Login.js';
import Signup from './Screens/Signup.js';
import Channels from './Screens/Channels.js';
import Verify from './Screens/Verify.js';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Channels" component={Channels} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
