import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ScanOrEnter = () => {
  const navigation = useNavigation();

  const handleScan = () => {
    Alert.alert('Scan', 'Coming Soon');
  };

  const handleEnterCode = () => {
    navigation.navigate('Code');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Choose')}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleScan}>
          <Icon name="qrcode-scan" size={80} color="#fff" style={styles.icon} />
          <Text style={styles.iconText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleEnterCode}>
          <Icon
            name="dots-horizontal"
            size={80}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.iconText}>Enter Code</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.instructionText}>Scan here or enter the code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008C54',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008C54',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 30,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#147A51',
    borderRadius: 15,
    padding: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginHorizontal: 10,
    transform: [{scale: 1.05}],
  },
  icon: {
    marginBottom: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  instructionText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});

export default ScanOrEnter;
