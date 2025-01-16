import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Choose = () => {
  const navigation = useNavigation();
  const handleCreateMenu = () => {
    Alert.alert('Create Menu', 'Navigating to Create Digital Menu');
  };

  const handleViewMenu = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.section, styles.leftSection]}
        onPress={handleCreateMenu}>
        <View style={styles.content}>
          <MaterialCommunityIcons
            name="book-open-page-variant"
            size={70}
            color="#007d34"
            style={styles.icon}
          />
          <Text style={[styles.text, styles.leftText]}>
            Create Your Digital Menu
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.section, styles.rightSection]}
        onPress={handleViewMenu}>
        <View style={styles.content}>
          <MaterialIcons
            name="qr-code"
            size={70}
            color="#ffffff"
            style={styles.icon}
          />
          <Text style={[styles.text, styles.rightText]}>View Digital Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  leftSection: {
    backgroundColor: '#ffffff',
  },
  rightSection: {
    backgroundColor: '#008C54',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  leftText: {
    color: '#008C54',
  },
  rightText: {
    color: '#ffffff',
  },
});

export default Choose;
