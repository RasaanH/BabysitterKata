import React, {useState, useEffect} from 'react';
import TimeSelect from './TimeSelect';
import calculator from '../functions/calculator';
import ratesReturn from '../functions/ratesReturn';
import {StyleSheet, View, Text} from 'react-native';

const CalculatorPage = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const timeRates = ratesReturn();
  let updateStart = startValue => {
    setStart(startValue);
  };
  let updateEnd = endValue => {
    setEnd(endValue);
  };
  useEffect(() => {
    if (!start.index || !end.index) {
      return;
    }
    if (start.index > end.index) {
      //reverse start and end times if they choose start after end or vice versa
      setStart(timeRates[end.index]);
      setEnd(timeRates[start.index]);
    }
  }, [start, end, timeRates]);
  let revenueString = calculator(start, end);
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Babysitting Earnings</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  centered: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.9,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'monospace',
    fontWeight: '700',
  },
});

export default CalculatorPage;
