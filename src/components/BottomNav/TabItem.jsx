import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Tombol = () => {
    if (label === 'Home')
      return isFocused ? (
        <Icon name="home" size={30} color="teal" />
      ) : (
        <Icon name="home" size={30} color="teal" />
      );
    if (label === 'Shop') {
      return isFocused ? (
        <Icon name="shopping-cart" size={30} color="teal" />
      ) : (
        <Icon name="shopping-cart" size={30} color="teal" />
      );
    }
    if (label === 'Setting') {
      return isFocused ? (
        <Icon name="gear" size={30} color="teal" />
      ) : (
        <Icon name="gear" size={30} color="teal" />
      );
    }
    return <Icon name="home" size={30} color="black" />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1, alignItems:'center'}}>
      <Tombol />
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
