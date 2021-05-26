import React from "react";
import { Picker } from 'react-native-woodpicker';
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

  const TimeSelect = (props) => {
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
        {label: "4:00 a.m.", index: 11, value: 4, rate: 12}
    ]
    const timeRatesEnd = [...timeRates]
    timeRatesEnd.shift(); //so you can't choose to end at 5:00 p.m.
    const timeRatesStart = [...timeRates]
    timeRatesStart.pop(); // so you can't choose to start at 4:00 a.m.
    let updateTime = (time) => {
        props.updateParent(time);
    };
    
    let titleVar = props.type === "start" ? "Start Time" : "End Time";
    let dataVar = props.type === "start" ? timeRatesStart : timeRatesEnd;
      return (
        <View style={{width: 160, justifyContent: "center"}}>
             <Picker
                onItemChange={updateTime/*setStart*/}
                style={{
                    backgroundColor: "#ffffff", paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20,
                     borderRadius: 5
                    
                }}
                textInputStyle={{color: "#222", fontFamily: "monospace", textAlign: "center"}}
                items={dataVar}
                title={titleVar}
                placeholder="Select Time"
                item={props.current}
                isNullable
                //backdropAnimation={{ opactity: 0 }}
                //mode="dropdown"
                //isNullable
                //disable
            />
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

export default TimeSelect;