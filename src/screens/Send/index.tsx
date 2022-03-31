import React, { useState, useEffect, useCallback } from 'react';
import { Button, Image, View, Platform, Dimensions, ImageBackground} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

//@ts-ignore
import { ImageManipulator } from 'expo-image-crop';

const Send: React.FC = () => {
  const [image, setImage] = useState<any>(null);
  const [uri, setUri] = useState<any>();
  const [isVisible, setIsVisible] = useState(false);

  const { width, height } = Dimensions.get('window');

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

  const handleImportImage = useCallback(async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setUri(result.uri);
      setIsVisible(true);
    }
  }, []);

  const onToggleModal = () => {
    setIsVisible(!isVisible);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Seleciona foto do certificado" onPress={handleImportImage} />

      {uri && 
        <ImageBackground
          resizeMode="contain"
          style={{justifyContent: 'center', padding: 20, alignItems: 'center', height: 150, width: 200, backgroundColor: 'black',}}
          source={ uri }
          >
          <Button title="Open Image Editor" onPress={() => {setIsVisible(true)} } />
          <ImageManipulator
            photo={{ uri }}
            isVisible={isVisible}
            onPictureChoosed={(uriM: string) => {setUri(uriM)} }
            onToggleModal={onToggleModal}
            btnTexts={{crop: 'Cortar', done: 'Salvar', processing: 'Carregando...'}}
          />
        </ImageBackground>
      }

    </View>
  );
}

export default Send;