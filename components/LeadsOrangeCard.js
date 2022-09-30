import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";

export default function LeadsOrangeCard() {
  return (
    <View style={styles.leadsOrangeCardContainer}>
        <View style={styles.QRandCodeContainer}>
            <Image style={styles.qrcodephoto} source={require('../assets/qrcodephoto.png')}/>
            <View style={styles.activationCodeContainer}>
                <View style={styles.logocontainer}>
                    <Image style={styles.logo} source={require('../assets/logo.jpg')}/>
                    <Text style={styles.nimbleText}>Nimble</Text>
                </View>
                <Text style={styles.activationCode}>AK69485323</Text>
                <Text style={styles.cardText}>Activation Code</Text>
            </View>
        </View>
        <View style={styles.verifiedContainer}>
                <View style={styles.verifiedMargin}>
                    <Text style={styles.totalVerifiedUnverified}>13</Text>
                    <Text style={styles.cardText}>Total Verified Members</Text>
                </View>
                <View>
                    <Text style={styles.totalVerifiedUnverified}>0</Text>
                    <Text style={styles.cardText}>Unverified Members</Text>
                </View>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
    leadsOrangeCardContainer:{
    flex:1, width: "100%",backgroundColor: "#d19999", padding: 20, flexDirection: "column", borderRadius: 10
    },
    QRandCodeContainer:{
    flexDirection: "row",alignItems: "center"
    },
    qrcodephoto:{
        width: 100, height: 100, borderRadius: 5, marginRight: 10
    },
    activationCodeContainer:{
        padding: 10,
    },
    logocontainer:{
        flexDirection: "row", alignItems: "center",
    },
    logo:{
        width: 30, height: 30, marginRight: 10
    },
    nimbleText:{
        fontSize: 20, fontWeight: "bold"
    },

    activationCode:{
        marginTop: 10, fontSize: 20, letterSpacing: 2
    },
    verifiedContainer:{
        marginTop: 10, flexDirection: "row",
    },
    verifiedMargin:{
        marginRight: 10
    },
    cardText:{
        fontSize: 12
    },
    totalVerifiedUnverified:{
        fontSize: 20, fontWeight: "bold"
    }
    

})
