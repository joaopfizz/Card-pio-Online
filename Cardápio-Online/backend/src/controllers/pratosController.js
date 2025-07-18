const { v4: uuidv4 } = require('uuid');
const model = require('../models/pratoModel');

exports.create = (req, res) => {
  const { nome, descricao, preco, disponivel, categoria } = req.body;
  if (!nome || preco <= 0) return res.status(400).json({ erro: "Dados inválidos" });

  const prato = { id: uuidv4(), nome, descricao, preco, disponivel, categoria };
  model.create(prato, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json(prato);
  });
};

exports.list = (req, res) => {
  model.getAll((err, pratos) => {
    if (err) return res.status(500).json(err);
    res.json(pratos);
  });
};

exports.get = (req, res) => {
  model.getById(req.params.id, (err, prato) => {
    if (err) return res.status(500).json(err);
    if (!prato) return res.status(404).json({ erro: 'Não encontrado' });
    res.json(prato);
  });
};

exports.update = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ sucesso: true });
  });
};

exports.delete = (req, res) => {
  model.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ sucesso: true });
  });
};
