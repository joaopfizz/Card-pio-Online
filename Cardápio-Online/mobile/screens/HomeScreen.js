import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    axios.get('http://<SEU_IP>:3001/pratos')
      .then(res => setPratos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={pratos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
            <Text style={{ fontSize: 18 }}>{item.nome} - R${item.preco}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
