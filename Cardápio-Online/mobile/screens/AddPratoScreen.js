import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function AddPratoScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', descricao: '', preco: '', disponivel: true, categoria: '' });

  const handleSubmit = () => {
    axios.post('http://<SEU_IP>:3001/pratos', { ...form, preco: parseFloat(form.preco) })
      .then(() => navigation.goBack())
      .catch(err => console.error(err));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nome" onChangeText={nome => setForm({ ...form, nome })} />
      <TextInput placeholder="Descrição" onChangeText={descricao => setForm({ ...form, descricao })} />
      <TextInput placeholder="Preço" keyboardType="numeric" onChangeText={preco => setForm({ ...form, preco })} />
      <TextInput placeholder="Categoria" onChangeText={categoria => setForm({ ...form, categoria })} />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}
