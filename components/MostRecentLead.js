import React, { useState, useEffect } from "react";
import { leadsDatas } from "./leadsData";
import { StyleSheet, Text, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { Provider as PaperProvider} from  "react-native-paper";
export const MostRecentLead = () => {
  const [leads, setLeads] = useState([]);
  const [showDropDown, setShowDropDown] = useState();
  const [drops, setDrops] = useState("")
  

const  dropDownSample =[
  {
    label: "drop1",
    value: "drop1",
  },
  {
    label: "drop2",
    value: "drop2",
  },
  {
    label: "drop3",
    value: "drop3",
  },
]

  useEffect(() => {
    setLeads(leadsDatas)
    console.log("leads data render")
  }, [leads])
  
  return (
    <View style={styles.leadsContainer}>
      {/* Most Recent Lead Cards */}
      <View style={styles.leadsCards}>
    
        {leads.map((item) => (
         <PaperProvider  key={item.id}>
          <View key={item.id} style={styles.leads}>
            <View style={styles.leadsProfileandDropdown}>
              <Text style={styles.leadsNameProfile}>
                {item.firstName.split(" ").map((word) => word[0])}
                {item.lastName.split(" ").map((word) => word[0])}
              </Text>
                {/* <DropDown
                 key={item.id}
                label={"--"}
                mode={"outlined"}
                visible = {showDropDown === item.id}
                showDropDown={() => {
                  setShowDropDown(item.id)
                }}
                onDismiss={ () => {
                  setShowDropDown("")
                }}
                value={drops}
                setValue={setDrops}
                list={dropDownSample}
              /> */}
            </View>
            <Text style={styles.leadsName}>{item.firstName} {item.lastName}</Text>
            {/* <Text style={styles.leadsInfo}>{item.email}</Text> */}
            {/* <Text style={styles.leadsInfo}>{item.phoneNumber}</Text> */}
            <View style={styles.spacerStyle} />
            { item.dateCreated? <Text style={styles.leadsInfo}>Created: {item.dateCreated}</Text> : null }
            { item.dateUpdated? <Text style={styles.leadsInfo}>Updated: {item.dateUpdated}</Text> : null }

            {/* <View style={styles.spacerStyle} /> */}
            {/* <Text style={styles.leadStages}>{item.leadStages}</Text> */}
            {/* <View style={styles.spacerStyle} /> */}
            {/* <Text style={styles.leadsInfo}>Remaning Days:  <Text style={styles.leadStages}>{item.remainingDays}</Text></Text> */}
          </View>
          </PaperProvider>
        ))}
          
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  // Most recent leads styles
  leadsContainer: {
    width: "100%", alignItems: "baseline", flexDirection: "column", justifyContent: "center", padding: 30
  },
  spacerStyle: {
    marginBottom: 10,
  },
  leadsCards: {
    flex: 1, width: "100%",
  },
  leads: {
    flex: 1, flexDirection: "column", alignItems: "baseline", width: "100%", borderColor: "#cdcdcd", paddingVertical: 20, paddingHorizontal: 15, borderWidth: 1, marginBottom: 15, borderRadius: 3,
  },
  leadsProfileandDropdown: {
    flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between",
  },
  leadsNameProfile: {
    backgroundColor: "#cdcdcd", color: "#fff", fontSize: 15, letterSpacing: 2, fontWeight: "bold", padding: 23, marginLeft: 20, marginBottom: 10, borderRadius: 50,
  },
  leadsName: {
    fontSize: 20, fontWeight: "bold", marginBottom: 10,
  },
  leadsInfo: {
    color: "#777", fontWeight: "bold", fontSize: 12,
  },
  leadStages: {
    fontSize: 15, color: "#444", fontWeight: "bold",
  },
});
