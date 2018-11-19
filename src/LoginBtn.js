import React,{Component} from 'react'
import {TouchableOpacity,Dimensions,Text} from 'react-native'

const width=Dimensions.get('window').width
const height = Dimensions.get('window').height
export default class LoginBtn  extends Component{
     
    loginAction=()=>{
        if(this.props.pwd== "Admin" && this.props.UName == "Admin")
        {
           this.props.navigation.navigate("ShoppingList")
        }
        else 
        {
            alert("failure")
        }
       
        
    }
    render(){
        return(
            <TouchableOpacity 
            style={{ width:0.9*width,height:0.1*height,backgroundColor:"black",flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={this.loginAction}>
            <Text style={{color:"white",fontWeight:'600',fontSize:18,}}>Login</Text>
            </TouchableOpacity>
            )
    }
}