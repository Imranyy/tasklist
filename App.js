import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList,TouchableOpacity} from 'react-native';

export default function App() {
  const [task,setTask]=useState([
    {name:'imran',id:1},
    {name:'matano',id:2},
    {name:'mbiti',id:3},
    {name:'ngati',id:4},
    {name:'ngati',id:5},
    {name:'ngati',id:6},
    {name:'ngati',id:7},
    {name:'ngati',id:8},
    {name:'ngati',id:9},
  ]);
  const  pressHandler=(id)=>{
    setTask((prevTask)=>{
      return prevTask.filter(tas=>tas.id!=id)
    })
  }
  return (
    <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
              <FlatList
              style={{marginVertical:20,}}
              keyExtractor={(item)=>item.id}
                data={task}
                  renderItem={({item})=>(
                     <TouchableOpacity style={styles.item} onPress={()=>pressHandler(item.id)}>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                  )}/>
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
    marginTop:50,
  },
  item:{
    margin:10,
  },
  text:{
    color:'white',
    padding:10,
    backgroundColor:'#777'
  }
});

