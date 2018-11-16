import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Switch,
  Button
} from 'react-native';

export default class DenreeScreen extends React.Component {
  
  constructor() {
    super()
    this.state = {
      enable: false,
      enable1: true,
      enable2: true,
      enable3: true,
    };
  }
  
  static navigationOptions = {
    header: null,
  };
  
  prdt2() {
    return <View style={{ width: 300}}>
            <TextInput placeholder={'Nom du produit'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop:20 }}
            />
            <TextInput placeholder={'Poids'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop:20 }}
            />
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap:'wrap', marginTop:20 }}>
              <Text>DLC</Text>
              <TextInput placeholder={'JJ'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginLeft:20  }}
              />
              <TextInput placeholder={'MM'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginLeft:20  }}
              />
              <TextInput placeholder={'AA'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginLeft:20  }}
              />
              <Button title="OK"/>
              <Button title="+"/>
            </View>
          </View>;
  }

  render() {
    const switch2 = this.state.enable2;

    return (
      <View style={{flex: 1, padding: 20, backgroundColor:"#FFF"}}>
        <ScrollView>
          <Text style={styles.title}>Déclarer vos denrées</Text>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable: value }) } 
              value={ this.state.enable }  
              thumbTintColor={'#FFF'} 
              onTintColor={'#5959fc'}
            />
            <Text style={styles.switchT} >Produits décongelés</Text>


          </View>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable1: value }) } 
              value={ this.state.enable1 }  
              thumbTintColor={'#FFF'} 
              onTintColor={'#5959fc'}
            />
            <Text style={styles.switchT} >Produits sous vide</Text>
          </View>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable2: value }) } 
              value={ this.state.enable2 }  
              thumbTintColor={'#FFF'} 
              onTintColor={'#5959fc'} 
            />
            <Text style={styles.switchT} >Fruit & légumes</Text>
            
            <View style={styles.prdt}>{switch2 ? this.prdt2() :null}</View>

          </View>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable3: value }) } 
              value={ this.state.enable3 }  
              thumbTintColor={'#FFF'} 
              onTintColor={'#5959fc'}
            />
            <Text style={styles.switchT} >Produits secs</Text>
          </View>

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
  title: {
    margin: 30,
    fontFamily: 'now',
    fontSize: 26,
    textAlign: 'center',
    color: '#464646'
  },
  switch:{
    marginRight: 20
  },
  switchT:{
    fontFamily: 'now',
    fontSize: 22,
    color: '#464646'
  },
  wrapperSwitch: {
    margin: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap'
  },
  prdt: {
    marginTop: 15
  }
});