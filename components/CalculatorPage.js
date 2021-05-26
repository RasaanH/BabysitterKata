import React, { useState, useEffect } from 'react';
import TimeSelect from './TimeSelect';
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
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const timeRates = [
        {label: "5:00 p.m.", index: 0, value: 17, rate: 12},
        {label: "6:00 p.m.", index: 1, value: 18, rate: 12},
        {label: "7:00 p.m.", index: 2, value: 19, rate: 12},
        {label: "8:00 p.m.", index: 3, value: 20, rate: 12},
        {label: "9:00 p.m.", index: 4, value: 21, rate: 12},
        {label: "10:00 p.m.", index: 5, value: 22,  rate: 12},
        {label: "11:00 p.m.", index: 6, value: 23, rate: 12},
        {label: "12:00 a.m.", index: 7, value: 0, rate: 12},
        {label: "1:00 a.m.", index: 8, value: 1, rate: 12},
        {label: "2:00 a.m.", index: 9, value: 2, rate: 12},
        {label: "3:00 a.m.", index: 10, value: 3, rate: 12},
        {label: "4:00 a.m.", index: 10, value: 3, rate: 12}
    ]
    let updateStart = (startValue) => {
        setStart(startValue);
    };
    let updateEnd = (endValue) => {
        setEnd(endValue);
    };
    useEffect(() => {
        //console.log("useEffect Running");
        if (!start.index || !end.index) {return}
        if (start.index > end.index) {
            //reverse start and end times if they choose start after end or vice versa
            setStart(timeRates[end.index]);
            setEnd(timeRates[start.index]);
        }
    }, [start, end])
      return (
        <View style={styles.body}>
            <Text style={styles.title}>
                Babysitting Earnings
            </Text>
            <TimeSelect current={start} type="start" updateParent={updateStart} />
            <TimeSelect current={end} type="end" updateParent={updateEnd} />
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