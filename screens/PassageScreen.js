import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MapView } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
        mapRegion: null,
        lastLat: null,
        lastLong: null,
    }
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    }, (error)=>console.log(error));
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#FFF'}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}>
          <MapView.Marker
            coordinate={{
              latitude: (this.state.lastLat - 0.00550) || -36.82339,
              longitude: (this.state.lastLong + 0.00250) || -73.03569,
            }}
            title="FoodLuck"
            description="Ouvert de 18h à 22h"
            image="https://image.ibb.co/iJqLEf/foodtruck-camion.png">
          </MapView.Marker>
        </MapView>
        <Text style={styles.heure}>Heure de passage: 13h45</Text>
        <Text style={styles.rouge}>Une urgence ?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    paddingTop: 15,
    backgroundColor: '#fff',
    height: 400
  },
  heure: {
    margin: 30,
    fontFamily: 'now',
    fontSize: 24,
    textAlign: 'center',
    color: '#464646'
  },
  rouge: {
    marginTop:15,
    fontFamily: 'now',
    fontSize: 16,
    textAlign: 'center',
    color: '#d82e56'
  }
});
