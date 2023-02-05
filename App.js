import React, {useState} from 'react';
import { StyleSheet,Platform, TextInput, View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]=useState();
  const [taskItem,setTaskItem]=useState([]);

  const handleText=()=>{
    Keyboard.dismiss()
    setTaskItem([...taskItem, task]);
    setTask(null)
  }
  const completeTask=(index)=>{
    let itemCopy=[...taskItem];
    itemCopy.splice(index, 1);
    setTaskItem(itemCopy);
  }
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>

          <ScrollView style={styles.items}>
            {/* list items /tasks */}
            {
              taskItem.map((i,index)=>(
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                    <Task text={i}/>
                </TouchableOpacity>
              ))
            }
          </ScrollView>

        </View>

        <KeyboardAvoidingView 
          behavior={Platform.OS==='io'? "padding":"height"}
          style={styles.writeTaskWrapper}
          >
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>
            <TouchableOpacity onPress={()=>handleText()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:20,
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    paddingVertical:10,
    paddingHorizontal:15,
    paddingLeft:10,
    width:'80%',
    backgroundColor:'#55BCF6',
    borderRadius:20,
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addWrapper:{
    width:50,
    height:50,
    backgroundColor:'#55BCF6',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
  },
  addText:{},
});

