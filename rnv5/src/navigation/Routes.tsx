import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { View, Text, AsyncStorage, StyleSheet, ActivityIndicator } from 'react-native';
import { AuthStack } from './AuthStack';
import { AuthContext } from './AuthProvider';
import { Home } from './../components/Home';
interface RoutesProps {

}

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    //check if user is looged in or not
    AsyncStorage.getItem('user')
      .then(user => {
        if (user) {
          login()
        }
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  //set loading
  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  }

  return (
    <NavigationContainer>
      {user ? <Home /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})