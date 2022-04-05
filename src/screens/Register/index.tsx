import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Modal, ActionSheetIOS, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';


import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import Feather from '@expo/vector-icons/build/Feather';
import * as DocumentPicker from 'expo-document-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../../Componets/Forms/Button';
import Input from '../../Componets/Forms/Input';
import InputSelect from '../../Componets/Forms/InputSelect';
import InputDropZone from '../../Componets/InputDropZone';
import { CategorySelect } from '../CategorySelect';
import Camera from '../../Componets/Camera';

import truncateStrings from '../../utils/truncateStrings';

export interface IPhotoCameraProps {
  height: number;
  uri: string;
  width: number;
}

import { Container, Header, TitleHeader, Title, Form, FormControl, Fields, CloseModalButton, ImageCertificate, Label, LabelName } from './styles';

const Register: React.FC = () => {
  const { user } = useAuth();
  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();
  const [theKey, setTheKey] = useState(0);

  const [loading, setLoading] = useState(false);

  const [matricula, setMatricula] = useState('');

  const [codigo, setCodigo] = useState('123');
  
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [attached, setAttached] = useState(false);
  const [attachedName, setAttachedName] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [currentCertificateObj, setCurrentCertificateObj] = useState<any>();

  const [fileName, setFileName] = useState('');

  const [category, setCategory] = useState({
    value: '',
    display: 'Categoria'
  });

  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('LOCATION!!!!:::::::', location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  const scannerRef = useRef();

  const handleImportImage = useCallback(async() => {
    setIsOpen(true);
  }, []);

  const handleOpenMenu = () => ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ['Tirar foto', 'Cancelar'],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 1,
    },
    buttonIndex => {
      if (buttonIndex === 0) {
        // Abrir camera (tirar foto)
        handleImportImage();
      } else if (buttonIndex === 2) {
        // cancel action
      }
    }
  );

  const handleClearForm = useCallback(() => {
    console.log('DEVE LIMPAR O FORM!');
    setMatricula('');

    setCategory({...category});
    setAttached(false);
    setCurrentCertificateObj(undefined);
  }, []);


  const handleValidateForm = useCallback(async () => {
    setLoading(true);
    setTimeout(async() => {
      if(matricula === '' || codigo === "" || category.value === "") {
        Alert.alert('Por favor, preencha todos os campos! 😢');
        setLoading(false);
      } else {
        const ext = currentCertificateObj.uri.split('.')[1];
        setFileName(`${codigo}_${matricula}_${category.value.trim().replaceAll(' ', '_')}_${location.coords.latitude}._${location.coords.longitude}.${ext}`);

        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status != 'granted') {
          return;
        } ;
        
        // 1. Check if "photos" directory exists, if not, create it
        const USER_PHOTO_DIR = FileSystem.documentDirectory + 'photos';
        const folderInfo = await FileSystem.getInfoAsync(USER_PHOTO_DIR);
          if (!folderInfo.exists) {
            await FileSystem.makeDirectoryAsync(USER_PHOTO_DIR);
          }

        // 2. Rename the image and define its new uri
        const imageName = `${Date.now()}.jpg`;
        const NEW_PHOTO_URI = `${USER_PHOTO_DIR}/${imageName}`;

        // 3. Copy image to new location
        await FileSystem.copyAsync({
          from: currentCertificateObj.uri,
          to: NEW_PHOTO_URI
        })
        .then(() => {
          console.log(`File ${currentCertificateObj.uri} was saved as ${NEW_PHOTO_URI}`)
        })
        .catch(error => {console.error(error)})

        MediaLibrary.saveToLibraryAsync(currentCertificateObj.uri).then(() => {
          console.log('sucess2')
        }).catch((e) => {
          console.log(e);
        })

        //handleSubmitForm();
        //handleClearForm();
        setLoading(false);
      }
    }, 200);

  }, [matricula, codigo, category.value, currentCertificateObj]);

  
  const handleSubmitForm = useCallback(async() => {
    const ext = currentCertificateObj.uri.split('.')[1];
    const final = {
      ...currentCertificateObj, 
      name: `${matricula}_${codigo}_${category.value}.` + ext
    } 
    console.log('final: ', final);

    // Save on device
    //MediaLibrary.saveToLibraryAsync(final)

    try {
      console.log("=========== SUBMTED==========")
      console.log(matricula, codigo, category.value, final)
      Alert.alert('Enviado com sucesso!');
    } catch (error: any) {
      console.log('erro ao submeter!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.log(error.response);
    }
    finally {
      setLoading(false);
    }
  }, [matricula, codigo, category.value]);
    
  return (
    <Container>
      <Header colors={['#6e61c6', '#a98ef3']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}}>
        <Title>AppLeiturista</Title>
      </Header>
      <KeyboardAwareScrollView extraHeight={150}>
        <Form>
          <Fields>
            <FormControl>
              <Label>Código</Label>
              <Input 
                placeholder="Código" 
                value={codigo} 
                onChangeText={(text) => setCodigo(text)} 
                keyboardType="number-pad" 
                editable={false}
                disabledd
              />
            </FormControl>
            <FormControl>
              <Label>Matrícula</Label>
              <Input 
                placeholder="Matrícula" 
                value={matricula} 
                onChangeText={(text) => setMatricula(text)} 
                clearButtonMode="always" 
              />
            </FormControl>
            <FormControl>
              <Label>Categoria</Label>
              <InputSelect title={category.display} onPress={handleOpenSelectCategoryModal} />
            </FormControl>
            <FormControl>
              <InputDropZone onPress={handleOpenMenu} icon={attached ? 'file' : 'camera'} title={attached ? truncateStrings(attachedName, 60) : ''}>
                {currentCertificateObj && currentCertificateObj.uri.split('.')[1] !== 'pdf' && (
                  <ImageCertificate source={{ uri: currentCertificateObj.uri }} />)
                }
              </InputDropZone>
            </FormControl>
          </Fields>

          <FormControl>
            <Button title="Submeter leitura!" background="primary" onPress={handleValidateForm} loading={loading} />
          </FormControl>
          <LabelName>result: {fileName}</LabelName>
        </Form>
      </KeyboardAwareScrollView>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          //@ts-ignore
          category={category}
          //@ts-ignore
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>

      {isOpen && <Modal visible={isOpen}>
        <Header colors={['#6e61c6', '#a98ef3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <TitleHeader>Anexar certificado</TitleHeader>
        </Header>
        <CloseModalButton onPress={() => {setIsOpen(false)}}><Feather size={22} color="#fff" name="x" /></CloseModalButton>
        <Camera setIsOpen={setIsOpen} setCurrentCertificateObj={setCurrentCertificateObj} />
      </Modal>}
    </Container>
  );
}

export default Register;