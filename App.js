import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.sectionTitle}>Todays task</Text>
          <View style={styles.items}>
            {/* list items /tasks */}
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  wrapper:{
    paddingTop:80,
    paddingHorizontal:20, 
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{

  },
});

