import React,{useState}from 'react'; 
import { View, Text,StyleSheet,SafeAreaView,TextInput,Button,FlatList,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const AddRemovesc = ({route}) => {

  const [allTopic,setallTopic]=useState([]);
  const [newTopic,setnewTopic]=useState('');
  const navigation = useNavigation();



  const handleaddtopic=()=>{
    if(newTopic && !allTopic.includes(newTopic)){
      setallTopic([...allTopic,newTopic]);
      setnewTopic('');
    }
  }

  const handleremovetopic=(topic)=>{
    setallTopic(allTopic.filter(t=> t!==topic));
  }




  return (
     <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>

     
       <Text style={styles.title}>Add DataStructure and Algorithm Topic :- </Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter the topic'
          value={newTopic}
          onChangeText={setnewTopic}    />
          <Button title="Add topic" onPress={handleaddtopic} />


      <FlatList 
          data={allTopic}
          keyExtractor={(item)=>item}
          renderItem={({item})=>(
            <View style={styles.topic_container}>

            <Text style={styles.topic}> {item}</Text>
            <Button title="remove" onPress={()=>handleremovetopic(item)} />
            </View>
          )}
      />
      {allTopic.length>0 && (
        <Button title='go to randomize' onPress={()=>navigation.navigate('Randomizesc',{allTopic})}/>
      )

      }
      




    </View>
    </ScrollView>
  )
}

export default AddRemovesc;



const styles=StyleSheet.create({
   scrollContainer:{
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
    container:{
    // flex:1,
      width:'100',
      marginTop:80,
      justifyContent:'center',
      alignItems: 'center',
      padding: 20
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:20,
 
    },
    input:{
      height:50,
       borderRadius:10,
      borderColor:'gray',
      borderWidth:2,
      marginBottom:20,
       paddingHorizontal: 20,
      width: '100%'

    },
    topic_container:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 15,
    },
    topic:{
      fontSize:20,
      padding:10,
      textAlign:'center',

    },
});

