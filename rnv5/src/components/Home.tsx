import React, { useContext } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { AuthContext } from './../navigation/AuthProvider'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
  const { logout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Wellcome to the Homepage!</Text>
      <Button title="Log out" onPress={() => {
        logout()
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'green'
  }
})