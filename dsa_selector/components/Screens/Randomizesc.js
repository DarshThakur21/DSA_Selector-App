import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Randomizesc = ({ route }) => {
  const {allTopic}=route.params;

  const [numTopic, setnumTopic] = useState('');
  const [selectedTopic, setselectedTopic] = useState([]);
  const [completedTopic, setcompletedTopic] = useState([]);

  const handlerandomize = () => {
    const shuffled = [...allTopic].sort(() => 0.5 - Math.random());
    setselectedTopic(shuffled.slice(0, parseInt(numTopic)));
    setcompletedTopic([]);
  };

  const handletoggle=(topic)=>{
    if(completedTopic.includes(topic)){
      setcompletedTopic(completedTopic.filter(t=>t!==topic))
    }
    else{
      setcompletedTopic([...completedTopic,topic])
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Randomize the data Structure topic </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the number to practice"
        keyboardType="numeric"
        value={numTopic}
        onChangeText={setnumTopic}
      />

      <Button title="randomize" onPress={handlerandomize} />

      <FlatList
        data={selectedTopic}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handletoggle(item)}>
            <Text
              style={[
                styles.topic,
                completedTopic.includes(item) && styles.completedTopic,
              ]}>
            
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Randomizesc;

const styles = StyleSheet.create({
  container: {
    width: '100',
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '80%',
  },
  topic: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  completedTopic: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
