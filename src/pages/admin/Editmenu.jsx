import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { useFocusEffect } from '@react-navigation/native';
import NasiGoreng from '../../assets/NasiGoreng.png';

const EditMenu = ({ navigation }) => {
  const [menuType, setMenuType] = useState('food');
  const [menuName, setMenuName] = useState('Nasi Goreng Seafood');
  const [price, setPrice] = useState('Rp 30.000');
  const [description, setDescription] = useState('Udang, Cumi, Bakso Ikan & Telur');
  const [imageUri, setImageUri] = useState(NasiGoreng);
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
          console.log('User  cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          if (isMounted.current && isFocused.current) {
            Alert.alert('Error', 'An error occurred while selecting the image. Please try again.');
          }
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (isMounted.current && isFocused.current) {
            setImageUri({ uri });
          }
        }
      });
    }
  };

  const handleRemoveImage = () => {
    Alert.alert(
      'Confirm Removal',
      'Are you sure you want to remove the image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => setImageUri(null),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
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
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
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
            {imageUri ? (
              <View style={styles.imageWrapper}>
                <Image
                  source={imageUri}
                  style={styles.imagePreview}
                  alt="Preview of the selected menu image"
                />
                <TouchableOpacity style={styles.removeButton} onPress={handleRemoveImage}>
                  <Text style={styles.removeButtonText}>REMOVE</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity style={styles.imageUpload} onPress={chooseImage}>
                <Icon name="add-outline" size={30} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
          <Text style={styles.finishButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#16a34a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
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
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    position: 'absolute',
    bottom: -30,
    left: '66%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#dc2626',
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
    height: 26,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  imageUpload: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16a34a',
    flexDirection: 'row',
    width: 100,
    height: 100,
  },
  finishButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default EditMenu;