import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  Keyboard,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from 'react-native-button';
import coalesceNonElementChildren from 'react-native-button/coalesceNonElementChildren';

const Touchable = () => {
  const [state, setstate] = useState('NULL');
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setstate('Keyboard Shown');
      console.log('keyboard shown');
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setstate('Keyboard Hidden');
      console.log('keyboard hidden');
    });
    return () => {
      console.log('useEffect returned');
    };
  }, []);

  const _pressHandler = () => {
    console.log('button pressed!');
  };

  const RandomHexColor = () => {
    return '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
  };

  const [isOverFlow, setOverFlow] = useState(true);
  const [randColor, setRandColor] = useState(RandomHexColor());

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        {/* <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          contextMenuHidden={true}
          onChangeText={(text) => {
            setstate(text);
          }}
          value={state}
          secureTextEntry={true}
        />
        <Text>{state}</Text>
        <TextInput style={{width:'80%', height:'20%', backgroundColor:'#abd7ed', padding:10}}multiline={true}/> */}

        <Button
          style={{ fontSize: 21, color: '#1d785f' }}
          onPress={_pressHandler}>
          Press Me!
        </Button>
        <TouchableHighlight
          style={{ backgroundColor: 'green', width: 100, height: 50 }}
          underlayColor="blue"
          onPress={() => {
            console.log('TouchableHightlight Pressed');
          }}>
          <View style={{ flex: 1 }}></View>
        </TouchableHighlight>

        <TouchableNativeFeedback
          onPress={() => {
            setOverFlow(!isOverFlow);
            setRandColor(RandomHexColor());
            console.log('TouchableNativeFeedback OnPress');
          }}
          onPressIn={() => {
            console.log('TouchableNativeFeedback OnPressIn');
          }}
          onPressOut={() => {
            console.log('TouachableNativeFeedback OnPressOut');
          }}
          useForeground={true}
          background={TouchableNativeFeedback.Ripple(randColor, isOverFlow)}>
          <View
            style={{
              width: '80%',
              height: '10%',
              borderColor: 'black',
              borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            console.log('TouchableWithoutFeedback OnPress');
          }}
          onPressIn={() => {
            console.log('TouchableWithoutFeedBack OnPressIn');
          }}
          onPressOut={() => {
            console.log('TouchableWithoutFeedBack OnPressOut');
          }}>
          <View
            style={{
              width: '80%',
              height: '10%',
              borderColor: 'black',
              borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={{
            width: '80%',
            height: '10%',
            backgroundColor: '#1d785f',
            alignItems: 'center',
          }}
          activeOpacity={0.1}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d5f5ee',
  },

  textInput: {
    height: 50,
    width: '80%',
    backgroundColor: '#abd7ed',
    paddingHorizontal: 10,
  },
});
export default Touchable;
