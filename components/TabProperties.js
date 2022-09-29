import React from 'react'
import { StyleSheet, Text, View, ScrollView } from "react-native";
export default function TabProperties() {
  return (
    <View style={styles.tabPropertiesContainer}>
      {/*  */}
        <View style={styles.circleContainer}>
          <Text style={styles.circle}>SHD</Text>
        </View>
        {/*  */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Condominium: Fully Furnished Studio</Text>
          <View style={styles.wrapDetailsPrice}>
            <View style={styles.propertyDetails}>
              <Text style={styles.sqm}>Tower 1 • 22.85 sqm • T1R35B</Text>
              <Text style={styles.created}>Created: Sep 19, 2022 5:02 pm</Text>
            </View>
            <View style={styles.pricesContainer}>
              <Text style={styles.price}>Price: <Text style={styles.peso}>P 5,046,698.62</Text></Text>
              <Text style={styles.price}>Price: <Text style={styles.dollar}>$ 100,933.97</Text></Text>
            </View>
          </View>
        </View>
        {/*  */}
    </View>
  )
}
const styles = StyleSheet.create({
  tabPropertiesContainer: {
   flex:1, width:"100%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#eeee", marginBottom: 15, paddingBottom: 15
  },
  //
  circleContainer:{
     justifyContent: "center",
  },
  circle:{
    color: "#fff", fontWeight: "bold",backgroundColor: "#cdcdcd", paddingHorizontal: 7, paddingVertical: 10, borderRadius: 50, margin: 10, fontSize: 10
  },
  //
  propertyDetails:{
     marginRight: 10
  },
  title:{
    fontSize: 14, fontWeight: "bold"
  },
  sqm:{
    color: "#444", fontSize: 12
  },
  created:{
    color: "#444", fontSize: 12
  },
  // 
  detailsContainer: {
   width: "100%", flexDirection: "column",
  },
  //
  wrapDetailsPrice:{
     flexDirection: "row", 
  },


  // 
  // pricesContainer:{
    
  // },

  //
  price:{
    fontSize: 12, fontWeight: "bold"
  },
  peso: {
    color: "#444", fontSize: 12, fontWeight: "normal"
  },
  dollar:{
    color: "#444", fontSize: 12, fontWeight: "normal"
  }
})