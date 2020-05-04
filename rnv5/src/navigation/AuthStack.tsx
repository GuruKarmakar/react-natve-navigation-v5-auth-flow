import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthParamList } from './AuthParamList';
import { Login } from './../components/Login';
import { Register } from './../components/Register';

interface AuthStackProps {

}
//create a stack
const Stack = createStackNavigator<AuthParamList>()
export const AuthStack: React.FC<AuthStackProps> = ({ }) => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}