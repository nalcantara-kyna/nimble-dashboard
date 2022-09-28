import React from "react";
import { StatusBar } from "expo-status-bar";
import { AtAGlance } from "./components/AtAGlance";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MostRecentLead } from "./components/MostRecentLead";
import { MostRecentLeadCompactCard } from "./components/MostRecentLeadCompactCard";
import { LeadsProfile } from "./components/LeadsProfile";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Dashboard</Text>
        <Text style={styles.dashboardTitles}>At a glance</Text>

        {/* At a Glance Component */}
        <AtAGlance />
        <Text style={styles.dashboardTitles}>Most recent Lead</Text>

        {/* Most Recent Lead Component*/}
        <MostRecentLead />
        <Text style={styles.dashboardTitles}>Lead list</Text>

         {/* Most Recent Lead Compact Card Component*/}
         <MostRecentLeadCompactCard />

         {/* Leads Profile*/}
         <Text style={styles.dashboardTitles}>Leads Profile</Text>
         <LeadsProfile/>

        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // app styles
  container: {
    flex: 1, width: "100%", backgroundColor: "#fff", alignItems: "baseline", justifyContent: "center", marginTop: 40,
  },
  heading: {
    color: "#d19999", fontSize: 30,  marginLeft: 30
  },
  dashboardTitles: {
    fontSize: 20, fontWeight: "bold", color: "#777", marginTop: 30, marginBottom: 10, marginLeft: 30
  },
});
