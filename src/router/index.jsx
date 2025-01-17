import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Setting, Shop} from '../pages';
import Splash from '../pages/Splash';
import BottomNav from '../components/BottomNav';
import Onboarding from '../components/OnBoard/Onboarding';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Choose from '../pages/Choose';
import ScanOrEnter from '../pages/client/CodeorScan';
import Code from '../pages/client/Code';
import Menu from '../pages/client/Menu';
import Pay from '../pages/client/Pay';
import Wait from '../pages/client/Wait';
import Done from '../pages/client/Dones';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Shop" component={Shop} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Choose"
        component={Choose}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scan"
        component={ScanOrEnter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Code"
        component={Code}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen 
      name="Pay" 
      component={Pay} 
      options={{headerShown: false}} />
      <Stack.Screen
        name="Wait"
        component={Wait}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Done"
        component={Done}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
