import React from "react";
import { Picker } from 'react-native-woodpicker';
import ratesReturn from '../functions/ratesReturn';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

  const TimeSelect = (props) => {
    const timeRates = ratesReturn();
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
        <View style={styles.viewWrapper}>
            <Text style={styles.label}>{titleVar}</Text>
             <Picker
                onItemChange={updateTime/*setStart*/}
                style={styles.pickerStyle}
                textInputStyle={styles.inputStyle}
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
      title: {
          color: "#ffffff",
          fontSize: 20,
          marginTop: 5,
          fontFamily: 'monospace',
          fontWeight: "700"
      },
      pickerStyle: {
        backgroundColor: "#ffffff", 
        paddingTop: 15, 
        paddingBottom: 15, 
        paddingLeft: 20, 
        paddingRight: 20,
        borderRadius: 5
      },
      inputStyle: {
        color: "#222", 
        fontFamily: "monospace", 
        textAlign: "center"
      },
      viewWrapper: {
        width: 160, 
        justifyContent: "center"
      },
      label: {
          color: "#ffffff",
          fontFamily: "monospace",
          marginBottom: 4,
          marginTop: 15
      }
    });

export default TimeSelect;