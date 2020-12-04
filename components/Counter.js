import React, { useEffect, useRef, useState } from 'react';
import {Button, Text, View} from 'react-native';

const Counter = ()=>{
    const [count, setCount]=useState(0);
    const id = useRef(null);

    const clear = ()=>{
        clearInterval(id.current);
    }

    useEffect(()=>{
        id.current=setInterval(()=>{
            setCount(c=>c+1);
            console.log(JSON.stringify(id.current));
        },1000);

        return clear;
    },[]);

    return (
    <View>
        <Text>{count}</Text>
        <Text>{id.current}</Text>
        <Button title={"Clear Count"} onPress={clear}/>
    </View>)
}

export default Counter;