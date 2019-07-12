import React from 'react'
import {Button} from 'react-native-paper'
import {StyleSheet,View,Text,ScrollView} from 'react-native'
import MyHeader from '../MyHeader'
import {createAppContainer,createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation'
import Chats from './Chats'
import Status from './Status'
import Calls from './Calls'
import { Ionicons, Entypo } from '@expo/vector-icons';


class Tab extends React.Component{

  static navigationOptions = {
    drawerLabel: 'Tab',
  }
  
   render(){
    return (
       <View>
           <MyHeader name="TabBar"/>
        </View>
    )
   }
}

const myTabs = createMaterialTopTabNavigator({
  chats:Chats,
  status:Status,
  calls:Calls
},{
  tabBarOptions:{
    style:{
      backgroundColor:'#047a6c',
    }
  }

})

const myStack =createStackNavigator({
  home:myTabs
},
{
  defaultNavigationOptions:{
    title:'WhatsApp',
    headerStyle:{
      backgroundColor:'#047a6c',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:"bold"
    },
    headerRight:(
      <View style={{flexDirection:"row", padding:20}}>
        <Ionicons name="md-search" size={32} color='white'/>
        <Entypo name="dots-three-vertical" size={23} color='white' style={{marginLeft:10}} />
      </View>
    )
  }
})

export default createAppContainer(myStack)





const styles = StyleSheet.create({

  btn1:{
    backgroundColor:'#17aa30'
  }, 
  btn2:{
    backgroundColor:'white',
    borderColor:'#17aa30',
    borderWidth:1
  },
  viewCantainer:{
    marginTop:40,
    marginBottom:30,
    flexDirection:'row',
    justifyContent:'space-around'
  },


});
