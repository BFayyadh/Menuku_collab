import React from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';

export default function Paginator({data, scrollX}) {
  const {width} = useWindowDimensions();

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008C54',
    width: '100%',
    paddingHorizontal: 20, //
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 8,
  },
});
