import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, TouchableOpacity, StackNavigator } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

// Bothered by this warning  !!
console.ignoredYellowBox = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoadingComplete: false,
  };


  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.logo} source={require('./assets/images/FoodLuck-logo.png')}  />
          </View>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator style={styles.tabNav} />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'now': require('./assets/fonts/Now-Regular.ttf'),
        'nowalt': require('./assets/fonts/NowAlt-Regular.ttf'),
        'nowbold': require('./assets/fonts/Now-Bold.otf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    width: '100%', 
    height: 70, 
    backgroundColor: '#5959fc', 
    alignItems: 'center', 
    justifyContent: 'flex-end',
    marginTop: 20,
    flexDirection: 'row'
  },
  logo: {
    flex: 1,
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  param: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  vide: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    opacity: 0
  },
});
