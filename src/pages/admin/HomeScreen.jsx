import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NasiGoreng from '../../assets/NasiGoreng.png';

const HomeScreen = () => {
  const recommendedItems = [
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
          <Text style={styles.title}>Warung Pak Agus</Text>
          <Text style={styles.subtitle}>Jl Sayur No 10</Text>
        </View>
        <Image
          source={NasiGoreng}
          style={styles.mainImage}
        />
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedTitle}>Recommended</Text>
          <FlatList
            data={recommendedItems}
            horizontal
            keyExtractor={(item, index) => `${item.title}-${index}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.recommendedItem}>
                <Image source={NasiGoreng} style={styles.recommendedImage} />
                <View style={styles.recommendedItemTextContainer}>
                  <Text style={styles.recommendedItemTitle}>{item.title}</Text>
                  <Text style={styles.recommendedItemSubtitle}>{item.subtitle}</Text>
                  <Text style={styles.recommendedItemPrice}>{item.price}</Text>
                </View>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>EDIT</Text>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={
              <View style={styles.addButtonContainer}>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={24} color="green" />
                </TouchableOpacity>
              </View>
            }
          />
        </View>
        <View style={styles.listSection}>
          <View style={styles.listItem}>
            <Image
              source={NasiGoreng}
              style={styles.listImage}
            />
            <View style={styles.listText}>
              <Text style={styles.listName}>Nasi Goreng Seafood</Text>
              <Text style={styles.listDescription}>Udang, Cumi, Bakso Ikan & Telur</Text>
              <Text style={styles.listPrice}>Rp 30.000</Text>
            </View>
            <TouchableOpacity style={styles.listEditButton}>
              <Text style={styles.listEditButtonText}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listItem}>
            <Image
              source={NasiGoreng}
              style={styles.listImage}
            />
            <View style={styles.listText}>
              <Text style={styles.listName}>Nasi Goreng Seafood</Text>
              <Text style={styles.listDescription}>Udang, Cumi, Bakso Ikan & Telur</Text>
              <Text style={styles.listPrice}>Rp 30.000</Text>
            </View>
            <TouchableOpacity style={styles.listEditButton}>
              <Text style={styles.listEditButtonText}>EDIT</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 14,
  },
  mainImage: {
    width: '90%',
    height: 200,
    borderRadius: 16,
    marginVertical: 16,
    marginHorizontal:20,
  },
  recommendedContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  recommendedItems: {
    flexDirection: 'row',
    marginTop: 8,
  },
  recommendedItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    width: 150,
    marginRight: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'space-between',
  },
  recommendedImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  recommendedItemTextContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  recommendedItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111827',
  },
  recommendedItemSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  recommendedItemPrice: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
    color: '#111827',
  },
  editButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#10b981',
    borderRadius: 8,
    marginTop: 8,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginTop: 50,
  },
  addButton: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#111827',
  },
  listDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  listPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
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
    fontSize: 12,
  },
});

export default HomeScreen;  