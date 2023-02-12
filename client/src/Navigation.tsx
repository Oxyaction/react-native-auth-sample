import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import UserScreen from './screens/UserScreen';
import {useAuth} from './context/AuthContext';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const GuestStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="User" component={UserScreen} />
    </AuthStack.Navigator>
  );
}

function GuestStackScreen() {
  return (
    <GuestStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <GuestStack.Screen name="SignIn" component={SignInScreen} />
    </GuestStack.Navigator>
  );
}

function Navigation(): JSX.Element {
  const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthStackScreen /> : <GuestStackScreen />}
    </NavigationContainer>
  );
}

export default Navigation;
