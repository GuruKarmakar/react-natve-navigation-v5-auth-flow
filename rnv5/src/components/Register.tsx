import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { AuthNavProps } from './../navigation/AuthParamList'

interface RegisterProps {

}

export const Register = ({ navigation }: AuthNavProps<"Register">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <Button title="GO to login screen" onPress={() => { navigation.navigate('Login') }} />
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