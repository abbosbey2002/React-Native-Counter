import React, {useState} from 'react'
import {View, Button, Text, StyleSheet} from 'react-native'
import { increment, decrement } from '../context/actions/CounterAction'
import { connect } from 'react-redux'


function Counter({count, increment, decrement}) {
  
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{count}</Text>
    <View style={styles.buttonContainer}>
      <Button title="Decriment" onPress={decrement} />
      <Button title="Incriment" onPress={increment} />
    </View>
  </View>
  )
}

const mapStateProps = (state) =>({
  count: state.counter.count
})

const mapDispatchToProps = {
  increment,
  decrement
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 5,
    },
  });

export default connect(mapStateProps, mapDispatchToProps) (Counter);
