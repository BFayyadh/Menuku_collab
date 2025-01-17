import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import NasiGoreng from '../../assets/NasiGoreng.png';

const Pay = ({ navigation }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const cartItems = [
      { id: 1, title: 'Ayam Lalapan', description: 'Ayam, Sambal, Timun, Tahu', price: 20000, quantity: 1 },
      { id: 2, title: 'Nasi Goreng Seafood', description: 'Udang, Cumi, Bakso Ikan & Telur', price: 30000, quantity: 1 },
    ];
    setOrders(cartItems);
  }, []);

  const handleQuantityChange = (id, delta) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? {
              ...order,
              quantity: Math.max(order.quantity + delta, 1), // Prevent negative quantities
            }
          : order
      )
    );
  };

  const handleRemoveItem = (id) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleDecreaseQuantity = (id) => {
    const order = orders.find((order) => order.id === id);
    if (order.quantity === 1) {
      handleRemoveItem(id);
    } else {
      handleQuantityChange(id, -1);
    }
  };

  const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>My order</Text>
      <ScrollView style={styles.scrollView}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderItem}>
            <Image source={NasiGoreng} style={styles.image} />
            <View style={styles.orderDetails}>
              <Text style={styles.orderTitle}>{order.title}</Text>
              <Text style={styles.orderDescription}>{order.description}</Text>
              <Text style={styles.orderPrice}>Rp {order.price.toLocaleString('id-ID')}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecreaseQuantity(order.id)}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{order.quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(order.id, 1)}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>Rp {totalAmount.toLocaleString('id-ID')}</Text>
        </View>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
  },
  backButton: {
    backgroundColor: '#008C54',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '17%',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  orderDetails: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDescription: {
    color: '#6b7280',
    paddingRight: 20,
  },
  orderPrice: {
    color: '#111827',
    fontWeight: 'bold',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#008C54',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  quantityButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
  },
  totalText: {
    color: '#6b7280',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008C54',
  },
  payButton: {
    backgroundColor: '#008C54',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Pay;
