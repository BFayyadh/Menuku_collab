import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
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
import Loginadmin from '../pages/admin/Loginadmin';
import Signupadmin from '../pages/admin/Signupadmin';
import Addmenu from '../pages/admin/Addmenu';
import Editmenu from '../pages/admin/HomeScreen';
import BottomTabNavigator from '../components/BottomNav/BottomTabNavigator';
import AdminScreen from '../pages/admin/Adminscreen';
import EditMenus from '../pages/admin/Editmenu';

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
      <Stack.Screen
        name="Loginadmin"
        component={Loginadmin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signupadmin"
        component={Signupadmin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Addmenu"
        component={Addmenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editmenu"
        component={Editmenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Adminscreen"
        component={AdminScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editmenus"
        component={EditMenus}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
