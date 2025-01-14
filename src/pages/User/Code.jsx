import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Menggunakan Ionicons sebagai contoh
import { useNavigation } from '@react-navigation/native';

const CodeInputScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const navigation = useNavigation();

  const handleInputChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      // Pindah ke input berikutnya
      inputs[index + 1].focus();
    }
  };

  const inputs = [];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#fff" onPress={() => navigation.navigate('Choose')}/>
      </TouchableOpacity>
      <Text style={styles.title}>Enter the code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs[index] = input)}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008C54',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight:'500'
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  confirmButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  confirmText: {
    color: '#008C54',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CodeInputScreen;
