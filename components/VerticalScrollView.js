import React from 'react';
import {
  ScrollView,
  StyleSheet,
  AppRegistry,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  View,
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';

const imgUri = require('../resources/cyberpunk.jpg');

const VerticalScrollView = () => {
  const scrWidth = Dimensions.get('window').width;
  const scrHeight = Dimensions.get('window').height;
  const { width, height } = Image.resolveAssetSource(imgUri);
  var w = 300;
  var h = 300;
  Image.getSize(
    'https://azcd.harveynorman.com.au/media/catalog/product/m/o/mon-msi-g27c4_1.jpg',
    (width, height) => {
      w = width;
      h = height;
      console.log('w=' + w);
      console.log('h=' + h);
    },
    (err) => {
      console.log('Load Image size failed'+err);
    },
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView 
      maximumZoomScale={3}
      minimumZoomScale={0.2}
      keyboardDismissMode="on-drag"
      style={styles.container} >
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <Image style={{width: scrWidth, height: scrWidth/width*height }} source={imgUri}/>
        <TextInput style={{width:scrWidth, height:100, borderWidth:1, borderColor:'green'}} placeholder="Enter your text"/>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VerticalScrollView;
