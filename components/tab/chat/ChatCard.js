import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

function ChatCard(props) {
  return (
    <View style={{ margin: 10 }}>

      <View style={styles.view1}>

        <View>
             <Image style={styles.imageView}
              source={{uri:props.avatar}} />
            </View>

        <View style={styles.contentView}>
          <Card.Content>
            <Title>{props.name}</Title>
            <Paragraph>{props.message}</Paragraph>
          </Card.Content>
        
        </View>
      </View>
      <View style = {styles.lineStyle} />
    </View>
  )
}

export default ChatCard

const styles = StyleSheet.create({

  view1: {
    flexDirection: 'row',
  },
  imageView: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'#b7b7b7',
    marginStart:74
}

});
