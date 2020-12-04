import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import MyData from '../data/MyData.json';

const Item = ({ id, title, content, imageUri }) => {
  Image.getSize(imageUri, (width, height) => {
    console.log(`${width}   ${height}`);
  });
  return (
    <View
      style={{
        flex: 1,
        height: 100,
        backgroundColor: '#BFE3B4',
        flexDirection: 'row',
        marginBottom: 1,
      }}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={{ flex: 1, justifyContent: 'space-around',  }}>
        <Text>
          {title}
        </Text>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

const MyFlatlist = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <SafeAreaView>
        <FlatList
          data={MyData}
          renderItem={({ item, index }) => (
            <Item
              id={item.id}
              title={item.title}
              content={item.content}
              imageUri={item.imageUri}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width:200,
    resizeMode: 'cover',
    height: 100,
    marginRight:5
  },
});

export default MyFlatlist;
