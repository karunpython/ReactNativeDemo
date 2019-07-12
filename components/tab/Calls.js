import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

function Calls() {
    return (
        <View style={styles.container}>
           <Text>Calls...</Text>
           </View>
    )
}

export default Calls

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       marginTop:120 
     }
   });
   