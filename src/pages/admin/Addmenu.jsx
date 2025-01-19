import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

const AddMenu = ({ navigation }) => {
  const [menuType, setMenuType] = useState('');
  const [menuName, setMenuName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleFinish = () => {
    if (!menuType || !menuName || !price || !description) {
      Alert.alert('Error', 'Harap isi semua kolom');
      return;
    }
    Alert.alert('Success', 'Menu added successfully');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>Menu KU</Text>
        <Text style={styles.subtitle}>Make your own digital menu in here</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Jenis Menu</Text>
        <View style={styles.inputWrapper}>
          <Icon name="fast-food-outline" size={25} color="#000" style={styles.icon} />
          <Picker
            selectedValue={menuType}
            style={styles.picker}
            onValueChange={(itemValue) => setMenuType(itemValue)}
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Drink" value="drink" />
          </Picker>
        </View>
        <Text style={styles.label}>Nama Menu</Text>
        <View style={styles.inputWrapper}>
          <Icon name="pencil-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nama Menu"
            placeholderTextColor="#aaa"
            value={menuName}
            onChangeText={setMenuName}
          />
        </View>
        <Text style={styles.label}>Harga</Text>
        <View style={styles.inputWrapper}>
          <Icon name="cash-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Harga"
            placeholderTextColor="#aaa"
            value={price}
            onChangeText={setPrice}
          />
        </View>
        <Text style={styles.label}>Deskripsi Menu</Text>
        <View style={styles.inputWrapper}>
          <Icon name="document-text-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.textArea}
            placeholder="Deskripsi Menu"
            placeholderTextColor="#aaa"
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={3}
          />
        </View>
        <Text style={styles.label}>Foto Menu</Text>
        <TouchableOpacity style={styles.imageUpload}>
          <Text style={styles.imageUploadText}>Choose Image</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#008C54',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 30,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
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
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  imageUpload: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageUploadText: {
    color: '#aaa',
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#008C54',
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddMenu;