import React, { useState, useEffect } from 'react';
import TimeSelect from './TimeSelect';
import calculator from '../functions/calculator';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  const CalculatorPage = (props) => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const timeRates = [
        {label: "5:00 p.m.", index: 0, value: 17, rate: 12},
        {label: "6:00 p.m.", index: 1, value: 18, rate: 12},
        {label: "7:00 p.m.", index: 2, value: 19, rate: 12},
        {label: "8:00 p.m.", index: 3, value: 20, rate: 12},
        {label: "9:00 p.m.", index: 4, value: 21, rate: 8},
        {label: "10:00 p.m.", index: 5, value: 22,  rate: 8},
        {label: "11:00 p.m.", index: 6, value: 23, rate: 8},
        {label: "12:00 a.m.", index: 7, value: 0, rate: 16},
        {label: "1:00 a.m.", index: 8, value: 1, rate: 16},
        {label: "2:00 a.m.", index: 9, value: 2, rate: 16},
        {label: "3:00 a.m.", index: 10, value: 3, rate: 16},
        {label: "4:00 a.m.", index: 11, value: 4, rate: 0}
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
    let revenueString = calculator(start, end);
      return (
        <View style={styles.body}>
            <Text style={styles.title}>
                Babysitting Earnings
            </Text>
            <View style={styles.centered}>
            <TimeSelect current={start} type="start" updateParent={updateStart} />
            <TimeSelect current={end} type="end" updateParent={updateEnd} />
            <Text style={styles.title}>
                {revenueString && `Earnings: ${revenueString}`}
            </Text>
            </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      body: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#222",
      },
      centered: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: .9
      },
      title: {
          color: "white",
          fontSize: 20,
          marginTop: 15,
          fontFamily: 'monospace',
          fontWeight: "700"
      }
    });

export default CalculatorPage;