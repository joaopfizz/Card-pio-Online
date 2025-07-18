const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/menu.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS pratos (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    descricao TEXT,
    preco REAL NOT NULL,
    disponivel INTEGER NOT NULL,
    categoria TEXT
  )`);
});

module.exports = db;
