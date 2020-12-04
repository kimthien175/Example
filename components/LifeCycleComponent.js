import React from 'react'
import { Text, View, Button } from "react-native";

export default class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            numberOfRefresh:0
        }
    }

    UNSAFE_componentWillMount(){
        console.log(`${Date.now()} componentWillMount`)
    }

    componentDidMount(){
        console.log(`${Date.now()} componentDidMount`)
    }

    componentDidUpdate(){
        console.log(`${Date.now()} componentDidUpdate`)
        
    }

    shouldComponentUpdate(){
        console.log(`${Date.now()} shouldComponentUpdate ${this.state.numberOfRefresh}`)
        return false
    }

    UNSAFE_componentWillUpdate(){
        console.log(`${Date.now()} componentWillUpdate`)
    }

    render(){
        console.log(`${Date.now()} render`)
        return (
            <View style={{flex:1, backgroundColor:'deepseagreen'}}>
                <Text>{this.state.numberOfRefresh}</Text>
                <Button title="Refresh" onPress={()=>{this.setState({numberOfRefresh:this.state.numberOfRefresh+1})}}/>
            </View>
        )
    }
}