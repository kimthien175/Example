import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MyData from '../data/MyData.json';

import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/AntDesign';


const rowTranslateAnimatedValues = {};
Array(20)
    .fill('')
    .forEach((_, i) => {
        rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    });

const Item = ({ id, title, content, imageUri }) => {
  //   Image.getSize(imageUri, (width, height) => {
  //     console.log(`${width}   ${height}`);
  //   });
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
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  );
};


const SwipeListViewTest = () => {
  const [deleteItems, setDeleteItems] = useState([]);
  const [mainData, setData] = useState(MyData);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView>
        <Animated.View>
          <SwipeListView
            data={mainData}
            renderItem={(data, rowMap) => (
              <Item
                id={data.item.id}
                title={data.item.title}
                content={data.item.content}
                imageUri={data.item.imageUri}
              />
            )}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <View
                  style={{
                    width: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>Left</Text>
                </View>
                <View
                  style={{
                    width: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      //setDeleteItems(deleteItems.push(data.id));
                      Animated.timing(
                        rowTranslateAnimatedValues[data.item.id],
                        {
                          toValue: 0,
                          duration: 200,
                        },
                      ).start(() => {
                        const newData = [...mainData];
                        const prevIndex = mainData.findIndex(
                          (item) => item.id === data.item.id,
                        );
                        newData.splice(prevIndex, 1);
                        setData(newData);
                      });
                    }}>
                    <Icon name="delete" size={30} color="tomato" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    resizeMode: 'cover',
    height: 100,
    marginRight: 5,
  },
});

export default SwipeListViewTest;
