import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NasiGoreng from '../assets/NasiGoreng.png';

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleAddToCart = () => {
    setCartVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#10b981" />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.rating}>
            <Icon name="star" size={24} color="#fbbf24" />
            <Text style={styles.ratingValue}>4/5</Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Warung Pak Agus</Text>
          <Text style={styles.subtitle}>Jl Sayan No 10</Text>
        </View>
        <View style={styles.mainImageContainer}>
          <Image
            source={NasiGoreng}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedTitle}>Recommended</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedItems}>
            <View style={styles.recommendedItem}>
              <Image
                source={NasiGoreng}
                style={styles.recommendedImage}
              />
              <Text style={styles.recommendedItemTitle}>Ayam Lalapan</Text>
              <Text style={styles.recommendedItemSubtitle}>Ayam + sambal + timun</Text>
              <Text style={styles.recommendedItemPrice}>Rp. 20.000</Text>
              <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recommendedItem}>
              <Image
                source={NasiGoreng}
                style={styles.recommendedImage}
              />
              <Text style={styles.recommendedItemTitle}>Ayam saos telur asin</Text>
              <Text style={styles.recommendedItemSubtitle}>Ayam + saos telur asin</Text>
              <Text style={styles.recommendedItemPrice}>Rp. 25.000</Text>
              <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recommendedItem}>
              <Image
                source={NasiGoreng}
                style={styles.recommendedImage}
              />
              <Text style={styles.recommendedItemTitle}>Nasi Goreng Spesial</Text>
              <Text style={styles.recommendedItemSubtitle}>Nasi + Telur + Ayam</Text>
              <Text style={styles.recommendedItemPrice}>Rp. 30.000</Text>
              <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recommendedItem}>
              <Image
                source={NasiGoreng}
                style={styles.recommendedImage}
              />
              <Text style={styles.recommendedItemTitle}>Nasi Goreng Kampung</Text>
              <Text style={styles.recommendedItemSubtitle}>Nasi + Telur + Sayur</Text>
              <Text style={styles.recommendedItemPrice}>Rp. 28.000</Text>
              <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.divider} />
        <ScrollView style={styles.menuScroll}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View key={index} style={styles.menuItem}>
              <Image
                source={NasiGoreng}
                style={styles.menuItemImage}
              />
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemTitle}>Nasi Goreng Seafood</Text>
                <Text style={styles.menuItemSubtitle}>Udang, Cumi, Bakso Ikan & Telur</Text>
                <Text style={styles.menuItemPrice}>Rp 30.000</Text>
              </View>
              <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      {cartVisible && (
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="cart" size={24} color="#fff" />
        </TouchableOpacity>
      )}
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
    color: '#10b981',
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 16,
    textAlign: 'center',
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
  recommendedContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: '600',
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
  },
  recommendedImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  recommendedItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
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
  },
  addButton: {
    backgroundColor: '#10b981',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 16,
  },
  menuScroll: {
    paddingHorizontal: 16,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  menuItemDetails: {
    flex: 1,
    marginLeft: 8,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  menuItemSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: '600',
  },
  cartButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#10b981',
    borderRadius: 50,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});

export default App;