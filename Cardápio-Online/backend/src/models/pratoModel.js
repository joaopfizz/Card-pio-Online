const db = require('../database/db');

const pratoModel = {
  create(prato, callback) {
    const { id, nome, descricao, preco, disponivel, categoria } = prato;
    db.run(
      `INSERT INTO pratos (id, nome, descricao, preco, disponivel, categoria) VALUES (?, ?, ?, ?, ?, ?)`,
      [id, nome, descricao, preco, disponivel ? 1 : 0, categoria],
      callback
    );
  },

  getAll(callback) {
    db.all('SELECT * FROM pratos', callback);
  },

  getById(id, callback) {
    db.get('SELECT * FROM pratos WHERE id = ?', [id], callback);
  },

  update(id, prato, callback) {
    const { nome, descricao, preco, disponivel, categoria } = prato;
    db.run(
      `UPDATE pratos SET nome = ?, descricao = ?, preco = ?, disponivel = ?, categoria = ? WHERE id = ?`,
      [nome, descricao, preco, disponivel ? 1 : 0, categoria, id],
      callback
    );
  },

  delete(id, callback) {
    db.run(`DELETE FROM pratos WHERE id = ?`, [id], callback);
  },
};

module.exports = pratoModel;
