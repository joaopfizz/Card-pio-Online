import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function PratoDetailsScreen({ route }) {
  const { id } = route.params;
  const [prato, setPrato] = useState(null);

  useEffect(() => {
    axios.get(`http://<SEU_IP>:3001/pratos/${id}`)
      .then(res => setPrato(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!prato) return <Text>Carregando...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{prato.nome}</Text>
      <Text>{prato.descricao}</Text>
      <Text>R$ {prato.preco}</Text>
      <Text>{prato.disponivel ? 'Disponível' : 'Indisponível'}</Text>
      <Text>Categoria: {prato.categoria}</Text>
    </View>
  );
}
