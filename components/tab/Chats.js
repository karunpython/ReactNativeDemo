import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import ChatCard from './chat/ChatCard'

function Chats() {
  return (
    <View>
      <ChatCard name='Karun' message="this is good boy" avatar='https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/ramesh_aravind_750.jpg?itok=fag1eLtj'/>
      <ChatCard name='Rish' message="this is good boy" avatar='https://i2.cinestaan.com/image-bank/1500-1500/119001-120000/119688.jpg'/>
      <ChatCard name='Mohan' message="this is good boy" avatar='https://i.ytimg.com/vi/kYyHXa8BUFs/maxresdefault.jpg'/>
      <ChatCard name='Sita' message="this is good boy" avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUMmKxIhlquhvlzYMyoop59pfmhDRk8tdIoVhgeP0BwSjyoXZ'/>
      <ChatCard name='Gita' message="this is good boy" avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUMmKxIhlquhvlzYMyoop59pfmhDRk8tdIoVhgeP0BwSjyoXZ'/>
      <ChatCard name='Shunita' message="this is good boy" avatar='https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/07/05/40565aec-9f15-11e9-baa5-dd214ed0de8f_image_hires_193205.JPG?itok=WKNjRYn6&v=1562326329'/>
      <ChatCard name='KATRINA' message="this is good boy" avatar='https://th.thgim.com/migration_catalog/article14202933.ece/alternates/FREE_300/23TH-KATRINA.AR+23TH_KATRINA.jpg.jpg'/>
    </View>
  )
}

export default Chats
