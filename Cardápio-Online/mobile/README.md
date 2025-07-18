# Cardápio Online - App Mobile (React Native + Expo)

Este é o aplicativo mobile que consome a API RESTful do projeto Cardápio Online. Desenvolvido com **React Native** e **Expo**, permite listar, cadastrar e visualizar detalhes dos pratos cadastrados no backend.



## Como rodar o app mobile

### Pré-requisitos

- Node.js instalado
- Expo CLI instalada globalmente (se ainda não tiver):

npm install -g expo-cli

- Ter um emulador Android ou IOS ou o aplicativo Expo GO instalado no celular

### Passo a passo

1. Acesse a pasta mobile:

```bash
cd mobile
```
2. Instale as dependencias:

```bash
npm install
```
3. Inicie o app com Expo:
```bash
npx expo start
```
4. Use o QR code no terminal ou no navegador para abrir seu celular com o app Expo GO, ou abra no emulador do seu celular

### Configurar a URL da API

Para que o app se conecte a sua API local, edite os arquivos abaixo e substitua http://<IP>:3001 pelo IP da sua máquina na rede local (exemplo: http://192.168.0.10:3001):

screens/HomeScreen.js

screens/AddPratoScreen.js

screens/PratoDetailsScreen.js

Obs: Use o comando ipconfig (Windows) ou ifconfig (Linux/macOS) para encontrar seu IP local

### Funcionalidades implementadas:

- Listar pratos (GET)
- Cadastrar novo prato (POST)
- Ver detalhes de um prato (GET por ID)
- Navegação entre telas com React Navigation
- Comunicação com a API via Axios

# Tecnologias utilizadas:

- React Native
- Expo
- Axios
- React Navigation
- Hooks (useEffect, useState)





