import React, {useState} from 'react';
import {View, Text ,StyleSheet} from "react-native"
import Header from '../components/Header';

function Home(props) {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Home page</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    
  });

export default Home;