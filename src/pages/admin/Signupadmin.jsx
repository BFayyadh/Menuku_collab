import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginAdmin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Harap Isi Email dan Password');
      return;
    }
    navigation.navigate('Signupadmin');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Choose')}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>MenuKU</Text>
        <Text style={styles.subtitle}>Make your digital menu menu</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon
            name="mail-outline"
            size={25}
            color="#000"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon
            name="lock-closed-outline"
            size={25}
            color="#000"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Dont have an account?</Text>
      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('Signupadmin')}>
        Make your own digital menu
      </Text>
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
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#008C54',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 50,
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
  loginButton: {
    backgroundColor: '#008C54',
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  signUpText: {
    color: '#008f4c',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginAdmin;
