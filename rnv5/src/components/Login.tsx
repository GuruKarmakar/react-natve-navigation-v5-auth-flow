import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from './../navigation/AuthProvider';
import { AuthNavProps } from './../navigation/AuthParamList'

export const Login = ({ navigation, route }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Button color="red" title="Login" onPress={() => { login() }} />
      <Text>Go to register screem</Text>
      <Button title="go to Register" onPress={() => {
        navigation.navigate('Register')
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 21
  }
})