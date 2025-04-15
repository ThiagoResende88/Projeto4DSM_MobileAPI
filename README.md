# GitViewer Mobile App

## 📱 Sobre o Projeto
GitViewer é um aplicativo mobile desenvolvido em React Native como projeto acadêmico para a disciplina de Desenvolvimento de Dispositivos Móveis do curso de Desenvolvimento de Software Multiplataforma (DSM) na Fatec Franca.

O aplicativo permite aos usuários:
- Fazer login e cadastro no sistema
- Buscar usuários do GitHub
- Visualizar informações de perfil dos usuários
- Ver repositórios favoritos (starred) de cada usuário
- Adicionar e remover usuários da lista

## 🔨 Tecnologias Utilizadas

- React Native com Expo
- React Navigation (Stack Navigator)
- Styled Components
- Axios para requisições HTTP
- AsyncStorage para persistência de dados locais
- Expo Vector Icons
- GitHub API

## 📋 Pré-requisitos

Para rodar este projeto, você precisará ter instalado:

- Node.js (v14 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)
- Um dispositivo móvel com o app Expo Go instalado ou um emulador Android/iOS

## ⚙️ Instalação e Execução

1. Clone este repositório:
```
git clone https://github.com/seu-usuario/Projeto4DSM_MobileAPI.git
```

2. Acesse a pasta do projeto:
```
cd Projeto4DSM_MobileAPI
```

3. Instale as dependências:
```
npm install
```
ou
```
yarn install
```

4. Inicie o projeto:
```
npx expo start
```

5. Escaneie o QR Code com o aplicativo Expo Go (Android) ou a câmera (iOS)

## 📱 Funcionalidades

### Autenticação
- Sistema de login e cadastro de usuários
- Armazenamento local de credenciais com AsyncStorage

### GitHub API Integration
- Busca de usuários do GitHub
- Visualização de detalhes do perfil
- Lista de repositórios favoritos (starred)

### Gerenciamento de Usuários
- Adicionar usuários à lista de favoritos
- Remover usuários da lista
- Persistência da lista utilizando AsyncStorage

## 🎯 Estrutura do Projeto

```
Projeto4DSM_MobileAPI/
├── assets/                  # Imagens e recursos estáticos
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── constants/           # Constantes e configurações
│   ├── pages/               # Telas do aplicativo
│   │   ├── cadastro.js      # Tela de cadastro
│   │   ├── login.js         # Tela de login
│   │   ├── main.js          # Tela principal (lista de usuários)
│   │   ├── users.js         # Detalhes do usuário
│   │   └── CardDetail.js    # Detalhes do card
│   ├── services/
│   │   └── api.js           # Configuração do Axios
│   ├── styles.js            # Estilos globais
│   └── routes.js            # Configuração de navegação
├── App.js
├── .gitignore
└── README.md
```

## 📱 Capturas de Tela

![WhatsApp Image 2025-04-15 at 16 45 37](https://github.com/user-attachments/assets/8319129a-d566-4af2-80f0-4b21f363b1e6)

## 📝 Autor

**Thiago Dias Resende**
- Curso: Desenvolvimento de Software Multiplataforma (DSM)
- Fatec Franca - 4º Semestre

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## 🔗 Links Úteis

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [GitHub API](https://docs.github.com/pt/rest)
