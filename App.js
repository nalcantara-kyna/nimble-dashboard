import React from "react";
import { StatusBar } from "expo-status-bar";
import { AtAGlance } from "./components/AtAGlance";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MostRecentLead } from "./components/MostRecentLead";

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
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // app styles
  container: {
    flex: 1, width: "100%", padding: 30, backgroundColor: "#fff", alignItems: "baseline", justifyContent: "center", marginTop: 40,
  },
  heading: {
    color: "#d19999", fontSize: 30,
  },
  dashboardTitles: {
    fontSize: 20, fontWeight: "bold", color: "#777", marginTop: 30, marginBottom: 10,
  },
});
