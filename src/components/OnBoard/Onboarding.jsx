import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import Slides from '../../Slides';
import OnboardingItems from './OnboardingItems';
import Paginator from './Paginator';

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  if (!Slides || Slides.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No slides available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({item}) => <OnboardingItems item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={Slides} currentIndex={currentIndex} scrollX={scrollX}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
