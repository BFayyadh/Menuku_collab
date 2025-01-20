import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';

const AddMenu = ({ navigation }) => {
  const [menuType, setMenuType] = useState('');
  const [menuName, setMenuName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const isMounted = useRef(true);
  const isFocused = useRef(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      isFocused.current = true;
      return () => {
        isFocused.current = false;
      };
    }, [])
  );

  const chooseImage = () => {
    if (isMounted.current && isFocused.current) {
      launchImageLibrary({ mediaType: 'photo' }, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          if (isMounted.current && isFocused.current) {
            Alert.alert('Error', 'An error occurred while selecting the image. Please try again.');
          }
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (isMounted.current && isFocused.current) {
            setImageUri(uri);
          }
        }
      });
    }
  };

  const handleFinish = () => {
    if (!menuType || !menuName || !price || !description) {
      if (isMounted.current && isFocused.current) {
        Alert.alert('Error', 'Please fill in all fields');
      }
      return;
    }
    navigation.navigate('Main');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Menu KU</Text>
          <Text style={styles.subtitle}>Make your own digital menu in here</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="fast-food-outline" size={25} color="#000" style={styles.icon} />
            <Picker
              selectedValue={menuType}
              style={styles.picker}
              onValueChange={(itemValue) => setMenuType(itemValue)}
            >
              <Picker.Item label="Select Menu Type" value="" />
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Drink" value="drink" />
            </Picker>
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="pencil-outline" size={25} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Menu Name"
              placeholderTextColor="#aaa"
              value={menuName}
              onChangeText={setMenuName}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="cash-outline" size={25} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Price"
              placeholderTextColor="#aaa"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="document-text-outline" size={25} color="#000" style={styles.icon} />
            <TextInput
              style={styles.textArea}
              placeholder="Menu Description"
              placeholderTextColor="#aaa"
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={3}
            />
          </View>
          <View style={styles.imageContainer}>
            {imageUri && (
              <Image
                source={{ uri: imageUri }}
                style={styles.imagePreview}
                alt="Preview of the selected menu image"
              />
            )}
            <TouchableOpacity style={styles.imageUpload} onPress={chooseImage}>
              <Icon name="add-outline" size={30} color="#fff" />
              <Text style={styles.imageUploadText}>Add Image</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#008C54',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#008C54',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    fontWeight: '700',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  textArea: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    height: 80,
    textAlignVertical: 'top',
  },
  picker: {
    flex: 1,
    height: 50,
  },
  addImageLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageUpload: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008C54',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginLeft: 10,
    flexDirection: 'row',
  },
  imageUploadText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  finishButton: {
    backgroundColor: '#008C54',
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 130,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddMenu;