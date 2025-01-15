import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NasiGoreng from '../../assets/NasiGoreng.png';

const App = () => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.title]) {
        newCart[item.title].quantity += 1;
      } else {
        newCart[item.title] = { ...item, quantity: 1 };
      }
      return newCart;
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.title]) {
        newCart[item.title].quantity -= 1;
        if (newCart[item.title].quantity === 0) {
          delete newCart[item.title];
        }
      }
      return newCart;
    });
  };

  const getTotalQuantity = () => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  const menuItems = [
    { title: 'Nasi Goreng Seafood', subtitle: 'Udang, Cumi, Bakso Ikan & Telur', price: 'Rp 30.000' },
    { title: 'Nasi Goreng Spesial', subtitle: 'Nasi + Telur + Ayam', price: 'Rp 30.000' },
    { title: 'Nasi Goreng Kampung', subtitle: 'Nasi + Telur + Sayur', price: 'Rp 28.000' },
  ];

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
          <Image source={NasiGoreng} style={styles.mainImage} />
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedTitle}>Recommended</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedItems}>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.recommendedItem}>
                <Image source={NasiGoreng} style={styles.recommendedImage} />
                <Text style={styles.recommendedItemTitle}>{item.title}</Text>
                <Text style={styles.recommendedItemSubtitle}>{item.subtitle}</Text>
                <Text style={styles.recommendedItemPrice}>{item.price}</Text>
                {cart[item.title] ? (
                  <View style={styles.cartButtons}>
                    <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.cartButton}>
                      <Text style={styles.cartButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.cartQuantity}>{cart[item.title].quantity}</Text>
                    <TouchableOpacity onPress={() => addToCart(item)} style={styles.cartButton}>
                      <Text style={styles.cartButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.divider} />
        <View style={styles.menuScroll}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Image source={NasiGoreng} style={styles.menuItemImage} />
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
              {cart[item.title] ? (
                <View style={styles.cartButtons}>
                  <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.cartQuantity}>{cart[item.title].quantity}</Text>
                  <TouchableOpacity onPress={() => addToCart(item)} style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      {getTotalQuantity() > 0 && (
        <View style={styles.cartIconContainer}>
          <TouchableOpacity style={styles.cartIcon}>
            <Icon name="cart" size={24} color="#fff" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{getTotalQuantity()}</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 16,
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
    textAlign: 'center',
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
  cartButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#10b981',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  cartQuantity: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  cartIconContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  cartIcon: {
    backgroundColor: '#10b981',
    borderRadius: 50,
    padding: 16,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#fbbf24',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default App;