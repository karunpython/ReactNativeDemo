import React from 'react'
import {Button} from 'react-native-paper'
import {StyleSheet,View,Text,ScrollView} from 'react-native'
import MyHeader from './MyHeader'
import MyCard from './MyCard'



export default class Search extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Search',
  }
  
   render(){
    return (
      <View >
           <MyHeader name="Search"/>
           <ScrollView> 
            <View style={styles.viewCantainer}>
               <Button style={styles.btn1}>
                 <Text style={{color:'white'}}>hii</Text>
               </Button>

               <Button style={styles.btn2}>
                 <Text style={{color:'green'}}>hii</Text>
               </Button>

            </View>
           <MyCard/>
           <MyCard/>
           <MyCard/>
           <View style={{marginBottom:80}}>
           <MyCard   />
           </View>
        </ScrollView>
        </View>
    )
   }
}


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
