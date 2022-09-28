import React from "react";
import { StyleSheet, Text, View, Image , TouchableOpacity} from "react-native";

export const LeadsProfile = () => {

  return (
   <View style={styles.leadsProfileContainer}>

    {/* cover */}
     <View style={styles.LeadscoverPhotoContainer}>
      <Image style={styles.LeadscoverPhoto} source={require('../assets/coverPhoto.jpg')}/>
     </View>

    {/* photo */}
     <View style={styles.leadsProfilePhotoContainer}>
     <Image style={styles.leadsProfilePhoto} source={require('../assets/profilePhoto.png')}/>
     </View>

    {/* leads profile info */}
     <View style={styles.leadsProfileInfo}>
      <Text style={styles.leadsProfileName}>FirstName LastName</Text>
      <Text style={styles.leadsIndividualCreatedUpdated}>Individual • Created • Updated</Text>
      <Text style={styles.leadsProfileEmail}>sampleEmail@gmail.com</Text>
      <Text style={styles.leadsProfileContact}>+62948265624</Text>
     </View>

     {/* Profile Tabs */}
     <View style={styles.leadsProfileTabContainer}>
      <TouchableOpacity>
        <Text style={styles.tab}>Properties</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.tab}>Addresses</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.tab}>Activities</Text>
      </TouchableOpacity>
      
      {/*  */}
     </View>




   </View>
  );
};

const styles = StyleSheet.create({
  // Most recent leads styles
  leadsProfileContainer: {
    width: "100%", alignItems: "baseline", flexDirection: "column", justifyContent: "center", 
  },
  // cover photo
  LeadscoverPhotoContainer:{
    flex:1, width: "100%",
  },
  LeadscoverPhoto:{
    height: 100, width: "100%", position: "relative"
  },
  
  // leads profile photo
  leadsProfilePhotoContainer:{
    position: "absolute",   top: 50, 
  },
  leadsProfilePhoto:{
    position: "absolute",
    width: 100, height: 100, left: 15, borderColor: "#fff", borderWidth: 4, borderRadius: 50, 
  },

  // profile info
  leadsProfileInfo:{
  width: "100%", marginTop: 35,padding: 20,
  },
  leadsProfileName:{
    fontSize: 22, fontWeight: "bold"
  },
  leadsIndividualCreatedUpdated:{
    fontSize: 16, color: "#333"
  },
  leadsProfileEmail:{
    color: "#444", marginTop: 5
  },
  leadsProfileContact:{
    color: "#444",
  },

  // profile tab
  leadsProfileTabContainer:{
    flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-around", marginTop: 10, marginBottom: 30
  },
  tab:{
   flex:1, width:100, color: "#333", fontSize: 15, fontWeight: "bold",padding: 8, backgroundColor: "#fbfbfb", 
  },
});


