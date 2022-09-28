import React, { useState, useEffect } from "react";
import { leadsDatas } from "./leadsData";
import { StyleSheet, Text, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { Provider as PaperProvider} from  "react-native-paper";
export const MostRecentLeadCompactCard = () => {
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

            {/* name profile */}
            <View style={styles.leadsNameProfileWrap}>
              <Text style={styles.leadsNameProfile}>
                {item.firstName.split(" ").map((word) => word[0])}
                {item.lastName.split(" ").map((word) => word[0])}
              </Text>
            </View>

            {/* leads info */}
            <View  style={styles.leadsInfoWrap}>
                <View style={styles.leadsNameRemainingDaysContainer}>
                    <Text style={styles.leadsName}>{item.firstName} {item.lastName}</Text>
                    <Text style={styles.leadsInfo}>Remaning Days: <Text style={styles.leadsRemaningDays}>{item.remainingDays}</Text></Text>
                </View>
                {/* <Text style={styles.leadsInfo}>{item.email} | {item.phoneNumber}</Text> */}

                {/* <View style={styles.spacerStyle} /> */}
                { item.dateCreated? <Text style={styles.leadsInfo}>Created: {item.dateCreated}</Text> : null }
                { item.dateUpdated? <Text style={styles.leadsInfo}>Updated: {item.dateUpdated}</Text> : null }
                {/* <View style={styles.spacerStyle} /> */}
                {/* <Text style={styles.leadStages}>{item.leadStages}</Text>
                <View style={styles.spacerStyle} /> */}
                <Text style={styles.leadsStatus}>Active</Text>
                
            </View>
            
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
    width: "100%", alignItems: "baseline", flexDirection: "column", justifyContent: "center",
  },
//   spacerStyle: {
//     marginBottom: 1,
//   },
  leadsCards: {
    flex: 1, width: "100%",
  },
  leads: {
    flexDirection: "row", alignItems: "baseline", width: "100%", paddingVertical: 10, paddingHorizontal: 10, marginBottom: 5,
  },
  //
  leadsNameProfileWrap:{
   justifyContent: "center", marginRight: 10, 
  },
  leadsNameProfile: {
    backgroundColor: "#cdcdcd", color: "#fff", fontSize: 14, letterSpacing: 2, fontWeight: "bold", padding: 12, borderRadius: 50,
   },
   //
  leadsInfoWrap:{
  flex:1, width: "10%", alignItems: "baseline",
},
  leadsNameRemainingDaysContainer:{
  width:"100%", flexDirection: "row", justifyContent: "space-between",
  },

  leadsName: {
    fontSize: 15, fontWeight: "bold",
  },
  leadsInfo: {
    color: "#777", fontSize: 12, fontWeight: "bold",
  },
  leadsRemaningDays:{
    fontSize: 15,fontWeight: "bold",
  },
  leadStages: {
    fontSize: 15, color: "#444", fontWeight: "bold",
  },
  leadsStatus:{
   flex: 1, fontSize: 10,fontWeight: "bold", color:"#fff", backgroundColor: "green", paddingHorizontal: 6, paddingVertical: 3, marginTop: 8, borderRadius: 8,
  }
});
