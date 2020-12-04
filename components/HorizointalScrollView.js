import React from 'react'
import { ScrollView, View, Text, Dimensions } from "react-native";
import coalesceNonElementChildren from 'react-native-button/coalesceNonElementChildren';

const HorizontalScrollView = ()=>{
    return(
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            style={{flex:1}}
            showsHorizontalScrollIndicator={true}
            onScrollBeginDrag={()=>{console.log("Begin Scroll")}}
            onScrollEndDrag={()=>{console.log("End Scroll")}}
            onScroll={(event)=>{
                let logData = `x=${event.nativeEvent.contentOffset.x}   y=${event.nativeEvent.contentOffset.y}`
                console.log(logData)
            }}
        >
            <View style={{flex:1, width:Dimensions.get('window').width, backgroundColor:'palegreen', justifyContent:'center', alignItems:'center'}}>
                <Text>Page 1</Text>
            </View>
            <View style={{flex:1, width:Dimensions.get('window').width,backgroundColor:'steelblue', justifyContent:'center', alignItems:'center'}}>
                <Text>Page 2</Text>
            </View>
            <View style={{flex:1, width:Dimensions.get('window').width,backgroundColor:'dimgray', justifyContent:'center', alignItems:'center'}}>
                <Text>Page 3</Text>
            </View>
        </ScrollView>
    );    
}

export default HorizontalScrollView;