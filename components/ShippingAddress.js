import React from 'react'
import { StyleSheet, Text, View, Button } from "react-native";
export default function ShippingAddress() {
  return (
    <View style={styles.shippingAddressContainer}>
        <Text  style={styles.shippingTitle}>Shipping Address</Text>
        <Text style={styles.toShipText}>(Ship to)</Text>
        <Text style={styles.toProvideText}>Please provide your shipping address</Text>

        <Button
        style={styles.addAddressButton}
        title="Add Shipping Address"
        color="#d19999"
        onPress={() => console.log('Button pressed')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    shippingAddressContainer: {
         flex: 1,  width: "100%", alignItems: "baseline", paddingLeft: 10, marginVertical: 20
  },
  shippingTitle:{
    fontSize: 20, fontWeight: "bold"
  },
  toShipText:{
    color: "#777", fontSize: 12, fontWeight: "bold"
  },
  toProvideText:{
   color: "#777", fontSize: 15, fontWeight: "bold",marginVertical: 10,
  },
  


})