import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import ShippingAddress from './ShippingAddress';
export default function TabAddresses() {

const isPrimaryContact = false

  return (
    <View style={styles.TabAddressesContainer}>

       {/*  */}
        <View style={styles.nameContainer}>
            <Text style={styles.name}>
                FirstName LastName
            </Text>
        </View>

        {/*  */}
        <View style={styles.addressAndContactContainer}>
            <View style={styles.addressContainer}>
               <Text style={styles.details}>
               Blk, 3 Lot 8 Jardin De Madrid Villas Habay I, Bacoor Cavite, City of Bacoor, Cavite
               </Text>
            </View>
            <View style={styles.contactContainer}>
                <Text style={styles.details}>+63497453856</Text>
                <Text style={styles.details}>narcyalcantara001@gmail.com</Text>
            </View>
        </View>
        <Text style={isPrimaryContact?styles.primaryGreen : styles.primaryGray }>Primary</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    TabAddressesContainer:{
         flex:1, width:"100%", alignItems: "baseline", flexDirection: "column", borderBottomWidth: 1, borderBottomColor: "#cdcdcd", paddingBottom: 15, paddingHorizontal: 10,
    },
    name:{
        fontSize: 14, fontWeight: "bold"
    },
    //
    addressAndContactContainer:{
        flex:1, width: "100%", flexDirection: "row",
    },
    addressContainer:{
        width: 170,
    },
    contactContainer:{
        width: 200,
    },
    details:{
        color: "#444", fontSize: 12, fontWeight: "normal"
    },
    primaryGreen:{
    color: "#fff", backgroundColor:"green", fontSize: 10, fontWeight: "bold", marginTop: 5, padding: 4, borderRadius: 10
    },
    primaryGray:{
        color: "#fff", backgroundColor:"#cccd", fontSize: 10, fontWeight: "bold", marginTop: 5, padding: 4, borderRadius: 10
        }
})