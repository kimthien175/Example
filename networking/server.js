import React from 'react'
import { View } from "react-native";

const getAllItem = "http://localhost:3000/MyData"

async function getGunFromServer(){
    try{
        let res = await fetch(getAllItem);
        let resJSON= await res.json();
        return resJSON.data;
    } catch (err){
        console.log(JSON.stringify(err))
    }
}

export {getGunFromServer}