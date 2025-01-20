import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import NasiGoreng from '../../assets/NasiGoreng.png'; // Adjust the path as needed

const Menu = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      title: 'Nasi Goreng Seafood',
      subtitle: 'Udang, Cumi, Bakso Ikan & Telur',
      price: 'Rp 30.000',
    },
    {
      title: 'Nasi Goreng Spesial',
      subtitle: 'Nasi + Telur + Ayam',
      price: 'Rp 30.000',
    },
    {
      title: 'Nasi Goreng Kampung',
      subtitle: 'Nasi + Telur + Sayur',
      price: 'Rp 28.000',
    },
    {
      title: 'Mie Goreng',
      subtitle: 'Mie + Telur + Sayur',
      price: 'Rp 25.000',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={24} color="#008C54" />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.rating}>
            <Icon name="star" size={24} color="#fbbf24" />
            <Text style={styles.ratingValue}>4/5</Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>DAPUR MALLIOBORO</Text>
          <Text style={styles.subtitle}>Jl Sayan No 10</Text>
        </View>
        <View style={styles.mainImageContainer}>
          <Image source={NasiGoreng} style={styles.mainImage} />
        </View>
        <View style={styles.recommendedSection}>
          <Text style={styles.recommendedTitle}>Recommended</Text>
          <View style={styles.recommendedItem}>
            <Image
              source={NasiGoreng}
              style={styles.recommendedImage}
            />
            <View style={styles.recommendedText}>
              <Text style={styles.recommendedName}>Nasi goreng seafood</Text>
              <Text style={styles.recommendedDescription}>Udang, Cumi, Bakso Ikan & Telur</Text>
              <Text style={styles.recommendedPrice}>Rp 30.000</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="edit" size={16} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={24} color="green" />
          </TouchableOpacity>
        </View>
        <View style={styles.listSection}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Image
                source={NasiGoreng}
                style={styles.listImage}
              />
              <View style={styles.listText}>
                <Text style={styles.listName}>{item.title}</Text>
                <Text style={styles.listDescription}>{item.subtitle}</Text>
                <Text style={styles.listPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.listEditButton}>
                <Text style={styles.listEditButtonText}>EDIT</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#008C54',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    color: '#fbbf24',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 4,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#6b7280',
  },
  mainImageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  mainImage: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  recommendedSection: {
    padding: 16,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recommendedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  recommendedImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  recommendedText: {
    flex: 1,
    marginLeft: 8,
  },
  recommendedName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recommendedDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  recommendedPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  editButton: {
    padding: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 16,
  },
  addButton: {
    marginTop: 8,
    alignSelf: 'center',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  listSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  listImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  listText: {
    flex: 1,
    marginLeft: 8,
  },
  listName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  listPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listEditButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#10b981',
    borderRadius: 8,
  },
  listEditButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Menu;