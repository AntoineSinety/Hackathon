import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1, padding: 20, backgroundColor:"#FFF"}}>
        <ScrollView>
        <Text style={styles.title}>Votre contribution</Text>
          <Image style={styles.contribImg}  source={require("../assets/images/contribution.png")} />
          <Text style={styles.homContrib}><Text style={styles.bold}>15g</Text> de nourriture ont été sauvés. <Text style={styles.bold}>53</Text> repas fabriqués</Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  contribImg: {
    flex: 1,
    height: 200,
    margin:'auto',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    color: "#5ae0d9",
    fontWeight: 'bold'
  },
  homContrib: {
    marginTop: 30,
    fontFamily: 'now',
    fontSize: 26,
    textAlign: 'center',
    color: '#464646'
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'now',
    fontSize: 26,
    textAlign: 'center',
    color: '#5959fc',
    textTransform: 'uppercase'
  }
});