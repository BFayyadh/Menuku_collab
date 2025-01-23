import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../../pages/admin/HomeScreen';
import AdminScreen from '../../pages/admin/Adminscreen';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Admin') {
            iconName = 'user-shield';
          }
          return (
            <View style={styles.iconContainer}>
              <FontAwesome5 name={iconName} size={size} color={color} />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          );
        },
        tabBarLabel: ({color, focused}) => {
          let label;
          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Admin') {
            label = 'Admin';
          }
          return (
            <Text
              style={[styles.label, {color: focused ? '#34D399' : '#9CA3AF'}]}>
              {label}
            </Text>
          );
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#34D399',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarShowLabel: true,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Admin" component={AdminScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 10,
    height: 60,
    paddingBottom: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#34D399',
    marginTop: 2,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default BottomTabNavigator;
