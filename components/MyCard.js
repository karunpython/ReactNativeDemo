import React from 'react'
import {Appbar, Card, Title, Paragraph, Button} from 'react-native-paper'
import {StyleSheet,View,Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function MyCard() {
    return (
         <View style={{margin:10}}>
                <Card style={{elevation:5}}>
                   <View style={styles.view1}>
                       <View style={styles.circleView}/>
                        <View>
                            <Card.Content>
                            <Title>Karun</Title>
                            <Paragraph style={styles.paragraph}>This is paragraph</Paragraph>
                            <Paragraph>Book</Paragraph>
                            </Card.Content>
                        </View>

                       <View>
                            <Card.Content>
                                <Paragraph>available date</Paragraph>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons name="md-calendar" size={20} color="green"/>
                                        <Text style={styles.textDate}>28/01/2013</Text>
                                    </View>
                            </Card.Content>
                       </View>
                   </View>

                   <View style={styles.view2}>
                       <Button mode='contained' style={styles.btn1}>View Profile</Button>
                       <Button mode='contained' style={styles.btn1}>Book Mark</Button>
                   </View>

                </Card>

            </View>
    )
}

export default MyCard


const styles = StyleSheet.create({

     view1:{
         flexDirection:'row',
         padding:10,
     },
     view2:{
         flexDirection:'row',
         justifyContent:'space-around',
         padding:10,
     },
     circleView:{
         height:80,
         width:80,
         borderRadius:40,
         backgroundColor:'orange'
     },
     paragraph: {
       color:'green'
     },
     textDate: {
        marginTop:2,
       fontSize:12,
       fontWeight:'bold',
       marginLeft:3,
     },
     btn1: {
       backgroundColor:'orange',
       borderRadius:40
     },

   });
   