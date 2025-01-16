import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import TabItem from './TabItem';

const BottomNav = ({state, descriptors, navigation}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:10, paddingVertical:15}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              label={label}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
            />
          );
        })}
      </View>
    </View>
  );
};

export default BottomNav;
