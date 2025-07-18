# Cardápio Online - API (Node.js + Express + SQLite)

## Como rodar a API localmente

### Passo a passo

1. Acesse a pasta `backend`:

```bash
cd backend
```

2. Instale as dependências

```bash
npm install
```

3. Inicie a API

```bash
npm start
```

### Endpoints disponíveis

| Método | Rota         | Descrição                |
|--------|--------------|--------------------------|
| POST   | /pratos      | Cadastrar novo prato     |
| GET    | /pratos      | Listar todos os pratos   |
| GET    | /pratos/:id  | Consultar prato por ID   |
| PUT    | /pratos/:id  | Atualizar prato por ID   |
| DELETE | /pratos/:id  | Remover prato por ID     |


### Exemplo para criação de prato (POST)

```json
{
  "nome": "Feijoada",
  "descricao": "Feijoada completa com arroz, farofa e laranja",
  "preco": 29.90,
  "disponivel": true,
  "categoria": "Prato Principal"
}
```

### Tecnologias utilizadas:

- Node.js
- Express
- SQLite
- UUID
- CORS

### Importante:

- `nome` é obrigatório
- `preco` deve ser maior que 0