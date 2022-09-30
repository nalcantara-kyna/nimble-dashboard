import React from "react";
import { StatusBar } from "expo-status-bar";
import { AtAGlance } from "./components/AtAGlance";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MostRecentLead } from "./components/MostRecentLead";
import { MostRecentLeadCompactCard } from "./components/MostRecentLeadCompactCard";
import { LeadsProfile } from "./components/LeadsProfile";
import TabProperties from "./components/TabProperties";
import TabAddresses from "./components/TabAddresses";
import ShippingAddress from "./components/ShippingAddress";
import TabActivities from "./components/TabActivities";
import LeadsOrangeCard from "./components/LeadsOrangeCard";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Dashboard</Text> */}
        {/* <Text style={styles.dashboardTitles}>At a glance</Text> */}

        {/* At a Glance Component */}
        {/* <AtAGlance /> */}
        {/* <Text style={styles.dashboardTitles}>Most recent Lead</Text> */}

        {/* Most Recent Lead Component*/}
        {/* <MostRecentLead /> */}
        {/* <Text style={styles.dashboardTitles}>Lead list</Text> */}

         {/* Most Recent Lead Compact Card Component*/}
         {/* <MostRecentLeadCompactCard /> */}

         {/* Leads Profile*/}
         {/* <Text style={styles.dashboardTitles}>Leads Profile</Text> */}
         {/* <LeadsProfile/> */}

         {/* <Text style={styles.tabs}>Properties</Text>
         <TabProperties /> */}
         
         {/* <Text style={styles.tabs}>Addresses</Text>
         <TabAddresses />
         <ShippingAddress/> */}
         

          {/* <Text style={styles.tabs}>Activities</Text>
          <TabActivities/> */}

          <LeadsOrangeCard/>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // app styles
  container: {
    backgroundColor: "#fff", justifyContent: "center", alignItems: "baseline", marginTop: 40, marginHorizontal: 15
  },
  heading: {
    color: "#d19999", fontSize: 30,  marginLeft: 30
  },
  dashboardTitles: {
    fontSize: 20, fontWeight: "bold", color: "#777", marginTop: 10, marginBottom: 20, marginLeft: 30
  },
  tabs:{
    fontSize: 20, fontWeight: "bold", color: "#777", marginTop: 1, marginBottom: 20, marginLeft: 10
  }
});
