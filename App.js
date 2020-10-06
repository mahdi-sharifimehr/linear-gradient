/*
Programming with Mash
https://www.youtube.com/channel/UCkqNCi8euqXHHMk3XQ4luKw
*/

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient colors={['#373B44', '#4286f4', '#373B44']} style={styles.body}>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          locations={[0.0, 0.74]}
          colors={['#a40606', '#d98324']}
          style={styles.button}
          useAngle={true}
          angle={315}
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <Text style={styles.buttonText}>
            Amazing Button
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  button: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2c3e50',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default App;
