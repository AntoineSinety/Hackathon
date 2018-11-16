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
console.disableYellowBox = true;


export default class DenreeScreen extends React.Component {
  
  constructor() {
    super()
    this.state = {
      enable: false,
      enable1: false,
      enable2: false,
      enable3: false,
    };
  }
  
  static navigationOptions = {
    header: null,
  };
  
  prdt2() {
    return <View style={{ width: 300}}>
            <TextInput placeholder={'Nom du produit'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop:20, paddingLeft: 15 }}
            />
            <TextInput placeholder={'Poids'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop:20, paddingLeft: 15 }}
            />
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap:'wrap', marginTop:20 }}>
              <Text>DLC</Text>
              <TextInput placeholder={'JJ'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginLeft:20, textAlign: 'center'  }}
              />
              <TextInput placeholder={'MM'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginLeft:20, textAlign: 'center'  }}
              />
              <TextInput placeholder={'AA'}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 40, marginLeft:20, textAlign: 'center'  }}
              />
              <View style={{width: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.buttonOK}>
                  <Text style={styles.buttonOKT}>Valider</Text>
                </View>
                <View style={styles.buttonPlus}>
                  <Text style={styles.buttonPlusT}>Ajouter</Text>
                </View>
              </View>
            </View>
          </View>;
  }

  prdt1() {
    return <View style={{ width: 300}}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap:'wrap', marginTop:5 }}>
              <Text style={{ color: '#d82e56'}}>Produit non récupérable.</Text>
            </View>
            <View style={styles.buttonC}>
              <Text style={styles.buttonT}>En savoir plus.</Text>
            </View>
          </View>;
  }

  render() {
    const switch4 = this.state.enable;
    const switch1 = this.state.enable1;
    const switch2 = this.state.enable2;
    const switch3 = this.state.enable3;

    return (
      <View style={{flex: 1, padding: 20, backgroundColor:"#FFF"}}>
        <ScrollView>
          <Text style={styles.title}>Déclarer vos denrées</Text>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable: value }) } 
              value={ this.state.enable }  
              _thumbColor={'#FFF'} 
              trackColor={'#5959fc'}
            />
            <Text style={styles.switchT} >Produits décongelés</Text>
            <View style={styles.prdt}>{switch4 ? this.prdt1() :null}</View>


          </View>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable1: value }) } 
              value={ this.state.enable1 }  
              _thumbColor={'#FFF'} 
              trackColor={'#5959fc'}
            />
            <Text style={styles.switchT} >Produits sous vide</Text>
            <View style={styles.prdt}>{switch1 ? this.prdt2() :null}</View>
          </View>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable2: value }) } 
              value={ this.state.enable2 }  
              _thumbColor={'#FFF'} 
              trackColor={'#5959fc'} 
            />
            <Text style={styles.switchT} >Fruit & légumes</Text>
            
            <View style={styles.prdt}>{switch2 ? this.prdt2() :null}</View>

          </View>
          <View style={styles.wrapperSwitch}>
            <Switch 
              style={styles.switch} 
              onValueChange={ (value) => this.setState({ enable3: value }) } 
              value={ this.state.enable3 }  
              _thumbColor={'#FFF'} 
              trackColor={'#5959fc'}
            />
            <Text style={styles.switchT} >Produits secs</Text>
            <View style={styles.prdt}>{switch3 ? this.prdt2() :null}</View>

          </View>

          <View style={styles.donner}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PassageStack')}>
                <Text style={styles.donnerT}>Donner</Text>
              </TouchableOpacity>
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
  },
  buttonC: {
    backgroundColor: '#5959fc',
    color:"#FFF",
    padding: 10,
    borderRadius: 20,
    width:115,
    marginTop: 10
  },
  buttonT: {
    color:"#FFF",
  },
  buttonOK: {
    backgroundColor: '#5959fc',
    color:"#FFF",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20
  },
  buttonOKT: {
    color:"#FFF",
    textAlign:'center',
    textTransform: 'uppercase',
    fontSize:20
  },
  buttonPlus: {
    backgroundColor: '#5959fc',
    color:"#FFF",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 20
  },
  buttonPlusT: {
    color:"#FFF",
    textAlign:'center',
    textTransform: 'uppercase',
    fontSize:20
  },
  donner: {
    backgroundColor: '#5ae0d9',
    color:"#FFF",
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 150
  },
  donnerT: {
    color:"#000",
    textAlign:'center',
    textTransform: 'uppercase',
    fontSize:20

  }
});