/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';





const App: () => React$Node = () => {
  return(
<View>
  <Text style={styles.welcome}>Hola Mundo</Text>
  <Text style={[styles.welcome, {flex:1}]}>Hola Mundo</Text>
  <Text style={styles.welcome}>Hola Mundo</Text>
  <Text style={styles.welcome}>Hola Mundo</Text>
</View>
  );
}
  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //margin: 10,
    backgroundColor:'orange',
    justifyContent: 'space-around',
    },
  welcome:{
    backgroundColor: 'pink',    
    fontSize:20,
    textAlign: 'center',
    margin: 10,
    flex: 2,
  },
});

export default App;
