import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import Onboarding from '../components/OnBoard/Onboarding';
import ScanOrEnter from '../pages/client/CodeorScan';
import Code from '../pages/client/Code';
import Menu from '../pages/client/Menu';
import Pay from '../pages/client/Pay';
import Wait from '../pages/client/Wait';
import Done from '../pages/client/Dones';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
      <Stack.Screen name="Pay" component={Pay} options={{headerShown: false}} />
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
