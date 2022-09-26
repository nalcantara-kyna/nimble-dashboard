import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export const AtAGlance = () => {
  const [leadStage, setLeadStage] = useState(0);
  const [prospect, setProspect] = useState(8);
  const [siteVisit, setSiteVisit] = useState(3);
  const [reservation, setReservation] = useState(8);

  // SAMPLE DATA:
  // lead stage
  const leadStageCurrentMonth = 18;
  const leadStagePreviousMonth = 1;
  // prospect
  const prospectCurrentMonth = 10;
  const propectPreviousMonth = 15;
  // site visit
  const siteVisitCurrentMonth = 49;
  const siteVisitPreviousMonth = 67;
   // reservation
  const reservationCurrentMonth = 22;
  const reservationtPreviousMonth = 15;
  //
  const [leadStageMonthly, setLeadStageMonthly] = useState(0);
  const [prospectMonthly, setProspectMonthly] = useState(0);
  const [siteVisitMonthly, setSiteVisitMonthly] = useState(0);
  const [reservationMonthly, setReservationMonthly] = useState(0);

  useEffect(() => {
    // lead stage
    if (leadStageCurrentMonth > leadStagePreviousMonth) {
      var leadStageResult = `▲   ${leadStageCurrentMonth}`;
    } else {
      var leadStageResult = `▼   ${leadStageCurrentMonth}`;
    }
    setLeadStageMonthly(leadStageResult);
    // prospect
    if (prospectCurrentMonth > propectPreviousMonth) {
      var prospectResult = `▲   ${prospectCurrentMonth}`;
    } else {
      var prospectResult = `▼   ${prospectCurrentMonth}`;
    }
    setProspectMonthly(prospectResult);
    // site visit
    if (siteVisitCurrentMonth > siteVisitPreviousMonth) {
      var siteVisitResult = `▲   ${siteVisitCurrentMonth}`;
    } else {
      var siteVisitResult = `▼   ${siteVisitCurrentMonth}`;
    }
    setSiteVisitMonthly(siteVisitResult);
    // reservation
    if (reservationCurrentMonth > reservationtPreviousMonth) {
      var reservationResult = `▲   ${reservationCurrentMonth}`;
    } else {
      var reservationResult = `▼   ${reservationCurrentMonth}`;
    }
    setReservationMonthly(reservationResult);
    console.log("monthly output render");
  }, [leadStageMonthly, prospectMonthly, siteVisitMonthly, reservationMonthly]);

  return (
    <View style={styles.glanceContainer}>
      {/* lead stage */}
      <View style={styles.glanceCard}>
        <View style={styles.glanceCountandRating}>
          <Text style={styles.glanceNumber}>{leadStage}</Text>
          <Text style={leadStageCurrentMonth>leadStagePreviousMonth?styles.glanceRatingGreen:styles.glanceRatingRed}>{leadStageMonthly}</Text>
        </View>
        <Text style={styles.glanceSub}>Lead Stage</Text>
      </View>
      {/* propect */}
      <View style={styles.glanceCard}>
        <View style={styles.glanceCountandRating}>
          <Text style={styles.glanceNumber}>{prospect}</Text>
          <Text style={prospectCurrentMonth>propectPreviousMonth?styles.glanceRatingGreen:styles.glanceRatingRed}>{prospectMonthly}</Text>
        </View>
        <Text style={styles.glanceSub}>Propect</Text>
      </View>
      {/* site visit */}
      <View style={styles.glanceCard}>
        <View style={styles.glanceCountandRating}>
          <Text style={styles.glanceNumber}>{siteVisit}</Text>
          <Text style={siteVisitCurrentMonth>siteVisitPreviousMonth?styles.glanceRatingGreen:styles.glanceRatingRed}>{siteVisitMonthly}</Text>
        </View>
        <Text style={styles.glanceSub}>Site Visit</Text>
      </View>
      {/* reservation */}
      <View style={styles.glanceCard}>
        <View style={styles.glanceCountandRating}>
          <Text style={styles.glanceNumber}>{reservation}</Text>
          <Text style={reservationCurrentMonth>reservationtPreviousMonth?styles.glanceRatingGreen:styles.glanceRatingRed}>{reservationMonthly}
          </Text></View>
        <Text style={styles.glanceSub}>Reservation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // at a glance styles
  glanceContainer: {
    height: "auto", flexDirection: "column", alignItems: "baseline",
  },
  glanceCard: {
    flexDirection: "column", alignItems: "baseline", marginBottom: 15,
  },
  glanceCountandRating: {
    alignItems: "center", flexDirection: "row",
  },
  glanceNumber: {
    fontSize: 35, fontWeight: "bold",
  },
  glanceRatingRed: {
    color: "#444", fontSize: 12, fontWeight: "bold", backgroundColor: "#d19999", paddingHorizontal: 10, paddingVertical: 2, marginLeft: 10, borderRadius: 3,
  },
  glanceRatingGreen: {
    color: "#444", fontSize: 12, fontWeight: "bold", backgroundColor: "#80b0a3", paddingHorizontal: 10, paddingVertical: 2, marginLeft: 10, borderRadius: 3,
  },
  glanceSub: {
    color: "#999", fontWeight: "bold",
  },
});
