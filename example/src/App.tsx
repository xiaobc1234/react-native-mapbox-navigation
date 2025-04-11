import { Button, StyleSheet, Text, View } from 'react-native';

import MapboxNavigation from '@cniot/react-native-mapbox-navigation';
import { useState } from 'react';

export default function App() {
  const [navigating, setNavigating] = useState(false);

  if (!navigating) {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.heading}>
            Hit below button to start navigating
          </Text>
          <Button
            onPress={() => setNavigating(true)}
            title="Start Navigation"
          />
        </View>
      </View>
    );
  }

  return (
    <MapboxNavigation
      // startOrigin={{ latitude: 30.699239, longitude: 76.6905161 }}
      startOrigin={{
        latitude: 30.265128345296805,
        longitude: 119.96226512303575,
      }}
      // destination={{ latitude: 30.6590196, longitude: 76.8185852 }}
      // destination={{
      //   latitude: 30.709241,
      //   longitude: 76.695669,
      //   title: 'Pickup',
      // }}
      destination={{
        latitude: 30.28585862068176,
        longitude: 119.9985793993648,
        // title: 'Pickup',
      }}
      travelMode="driving-traffic"
      style={styles.container}
      shouldSimulateRoute={true}
      showCancelButton={true}
      // exclude="point(119.9705482540415 30.273991623149275),point(119.97414684181423 30.27502439273032)"

      // customPath="119.95800616438402,30.26483376562888;119.9580233257933,30.262892012461037;119.96152425348652,30.262877189770336;119.96420143348672,30.26747211679475;119.96720468028093,30.267590692710726;119.97117326430771,30.268046136038535;119.97522928550563,30.268707955631342;119.9862781150128,30.26821008241059;119.99185937798075,30.26793781282953;119.9950357095679,30.268417893863855;120.00139277615835,30.26930772367912;120.00696779071257,30.270102886319847;120.00709931609856,30.275498407551808;120.00600327122436,30.279852471582316;120.00433727678745,30.283827760278612;120.00232055421941,30.28814359734413;119.99652467968093,30.28632762463387;119.99704464631708,30.284387014517037;119.99909807388173,30.284950175916023;120.00062272181543,30.285414401125337;120.00045527493228,30.286350455112583;119.99902756993083,30.28577208134574"
      // waypoints={[
      //   { latitude: 30.726848, longitude: 76.733758 },
      //   { latitude: 30.738819, longitude: 76.757902 },
      // ]}
      // waypoints={[
      //   {
      //     latitude: 30.701982,
      //     longitude: 76.693183,
      //     name: 'Waypoint 1',
      //     separatesLegs: true,
      //   },
      //   {
      //     latitude: 30.704476,
      //     longitude: 76.690653,
      //     name: 'Waypoint 2',
      //     separatesLegs: false,
      //   },
      // ]}
      language="en"
      distanceUnit="metric"
      onCancelNavigation={() => {
        setNavigating(false);
      }}
      onArrive={(point) => {
        console.log('onArrive', point);
      }}
      onError={(error) => {
        console.log('onError', error);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    marginTop: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
