import React from 'react';
import { StyleSheet, View} from 'react-native';
import { BottomNavigation, Text,} from 'react-native-paper';
import Home from './Home';
import Profile from './Profile';
import Notification from './Notification';
import Homes from './Homes';
import MyHeader from './components/MyHeader'
import MyBody from './components/Home'
import Navi from './components/Navi'

const HomeRoute = () => {
  return  <Notification/>
}

const StoreRoute = () => <Text>Albums</Text>;

const NotificationRoute = () => {
  return <Notification/>
}

const MusicRoute = () => <Text>Music</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const ProfileRoute = () => {
  return  <Profile/>
}


export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'store', title: 'Store', icon: 'store' },
      { key: 'notification', title: 'Notification', icon: 'notifications' },
      { key: 'recents', title: 'Recents', icon: 'history' },
      { key: 'profile', title: 'Profile', icon: 'person' },

    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    store: StoreRoute,
    notification: NotificationRoute,
    music: MusicRoute,
    recents: RecentsRoute,
    profile: ProfileRoute,

  });

  render() {
    return (<Navi/>)
        
      

       {/* <Appbar.Header>
               <Appbar.Content
                 title={this.state.routes[this.state.index].title}
               />
        </Appbar.Header>
      
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      /> */}

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
