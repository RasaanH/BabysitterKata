import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Platform,
    Alert
  } from 'react-native';

  const CalculatorPage = (props) => {
      return (
        <View style={styles.body}>
            <Text style={styles.title}>
                Babysitting Earnings
            </Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      body: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        // height: "100%",
        backgroundColor: /*"#ffffff"*/"#222",
      },
      title: {
          color: "white",
          fontSize: 20,
          marginTop: 5,
          fontFamily: 'monospace',
          fontWeight: "700"
      }
    });

export default CalculatorPage;