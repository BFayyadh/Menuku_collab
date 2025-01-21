import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from '../../assets/Profile.png';
import BackgroundImage from '../../assets/Backgroundprofile.png';

const AdminScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleQrMenuPress = () => {
    Alert.alert('QR Code', 'Coming Soon');
  };

  const handleCodeMenuPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Background */}
      <View style={styles.headerBackgroundContainer}>
        <Image source={BackgroundImage} style={styles.headerBackground} />
        <View style={styles.header}>
          {/* QR Menu Icon */}
          <TouchableOpacity style={styles.iconContainer} onPress={handleQrMenuPress} activeOpacity={0.7}>
            <Icon name="qrcode" size={40} color="white" />
            <Text style={styles.iconText}>Your Qr Menu</Text>
          </TouchableOpacity>
          {/* Code Menu Icon */}
          <TouchableOpacity style={styles.iconContainer} onPress={handleCodeMenuPress} activeOpacity={0.7}>
            <MaterialCommunityIcons name="dots-horizontal" size={40} color="white" />
            <Text style={styles.iconText}>Your Code Menu</Text>
          </TouchableOpacity>
        </View>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image source={ProfileIcon} style={styles.profileImage} />
          <View style={styles.editIcon}>
            <Icon name="pencil" size={16} color="white" />
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Warung Pak Agus</Text>

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItemTall} activeOpacity={0.7}>
          <Icon name="line-chart" size={40} color="white" />
          <Text style={styles.menuText}>Income</Text>
        </TouchableOpacity>
        <View style={styles.menuColumn}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <Icon name="plus" size={40} color="white" />
            <Text style={styles.menuText}>Add Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemSquare} activeOpacity={0.7}>
            <Icon name="edit" size={40} color="#008C54" />
            <Text style={styles.menuTextGreen}>Edit Menu</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal transparent={true} visible={isModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Your Code</Text>
            <Text style={styles.modalCode}>12345</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerBackgroundContainer: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 30,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
  profileContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#008C54',
    padding: 5,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '84%',
    marginBottom: 20,
  },
  menuColumn: {
    justifyContent: 'space-between',
    height: 240,
    width: 160,
  },
  menuItem: {
    backgroundColor: '#008C54',
    width: 160,
    height: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemTall: {
    backgroundColor: '#008C54',
    width: 160,
    height: 340,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemSquare: {
    backgroundColor: 'white',
    width: 160,
    height: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#008C54',
    marginTop: 20,
  },
  menuText: {
    color: 'white',
    marginTop: 10,
  },
  menuTextGreen: {
    color: '#008C54',
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 140,
  },
  logoutText: {
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalCode: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008C54',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#008C54',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AdminScreen;
