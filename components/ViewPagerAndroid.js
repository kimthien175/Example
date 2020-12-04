import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const ViewPagerAndroid = () => {
  return (
    <ViewPager style={styles.viewPager} initialPage={1}>
      <View key="1">
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={true}
          onScrollBeginDrag={() => {
            console.log('Begin Scroll');
          }}
          onScrollEndDrag={() => {
            console.log('End Scroll');
          }}
          onScroll={(event) => {
            let logData = `x=${event.nativeEvent.contentOffset.x}   y=${event.nativeEvent.contentOffset.y}`;
            console.log(logData);
          }}>
          <View
            style={{
              flex: 1,
              width: Dimensions.get('window').width,
              backgroundColor: 'palegreen',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Page 1</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Dimensions.get('window').width,
              backgroundColor: 'steelblue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Page 2</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Dimensions.get('window').width,
              backgroundColor: 'dimgray',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Page 3</Text>
          </View>
        </ScrollView>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default ViewPagerAndroid;
