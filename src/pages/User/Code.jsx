import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons as an example
import {useNavigation} from '@react-navigation/native';

const CodeInputScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const navigation = useNavigation();
  const inputs = useRef([]);

  const handleInputChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      // Move to the next input
      inputs.current[index + 1].focus();
    } else if (!text && index > 0) {
      // Move to the previous input if the current input is cleared
      inputs.current[index - 1].focus();
    }
  };

  const handleConfirm = () => {
    if (code.every(digit => digit !== '')) {
      // Only navigate if all inputs are filled
      navigation.navigate('Menu');
    } else {
      // Optionally, you can show an alert or a message to inform the user
      alert('Please enter all digits of the code.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon
          name="arrow-back"
          size={24}
          color="#fff"
          onPress={() => navigation.navigate('Choose')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Enter the code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={input => (inputs.current[index] = input)}
            style={styles.input}
            value={digit}
            onChangeText={text => handleInputChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
    fontWeight: '500',
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
