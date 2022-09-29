import React from 'react'
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function TabActivities() {

    const description = "TAN1"
    const projectCode = "TAN1"
    const unitCode = "L305"
    const daysAgo = 6
  return (
    <View style={styles.tabContainer}>
        <Text style={styles.tabTitle}>Property has been added</Text>
        <View style={styles.daysAgoContainer}>
            <Text style={styles.daysAgoText}>{daysAgo} days ago </Text>
            <Text style={styles.leadActivity}>Lead Activity</Text>
        </View>
        
        <View>
            <Text style={styles.text}>Description: <Text style={styles.textDescription}>{description}</Text> </Text>
            <Text style={styles.text}>Project Code: <Text style={styles.textDescription}>{projectCode}</Text> <Text  style={styles.text}>Unit Code: <Text  style={styles.textDescription}>{unitCode}</Text></Text></Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    tabContainer:{
        flex: 1, width: "100%", paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: "#eeee", paddingBottom:15, marginBottom: 15,
    },
    tabTitle:{
        fontSize: 17, fontWeight: "bold"
    },
    daysAgoContainer:{
        flex: 1, width: "100%", flexDirection: "row", marginVertical: 5
    },
    daysAgoText:{
    color: "#777", fontSize: 14, fontWeight: "bold",
    },
    leadActivity:{
     color: "#fff", fontWeight: "bold",fontSize: 10, backgroundColor: "#1b7ced", paddingHorizontal: 4, paddingVertical: 3, marginLeft: 5, borderRadius: 5
    },
    text:{
        color: "#555", fontSize: 14, fontWeight: "bold"
    },
    textDescription:{
        color: "#777",fontSize: 14, fontWeight: "bold"
    },

})