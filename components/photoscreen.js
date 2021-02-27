import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import Constants from 'expo-constants';

export default function PhotoScreen({navigation}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      await Sharing.shareAsync(result.uri);
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{margin:5}}>
       <Button title="Pick Image & Share It" onPress={pickImage} />
      </View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <View style={{margin:5}}><Button title="Back To Home" onPress={() => navigation.goBack()} /></View>
    </View>


  );
}
