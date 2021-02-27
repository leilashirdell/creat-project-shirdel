import * as React from 'react';
import { Button, View, Text, StyleSheet, ListView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', marginTop: 50, margin: 20 }}>
      <View style={{ margin: 5 }}>
        <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
      </View>
      <View style={{ margin: 5 }}>
        <Button title="Photos" onPress={() => navigation.navigate('Photo')} />
      </View>
      <View style={{ margin: 5 }}>
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
      </View>
    </View>
  );
}

