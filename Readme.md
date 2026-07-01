# ⚽ API Champions
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-FF6C37?style=for-the-badge)

> API REST para gerenciamento de jogadores e clubes da Champions League, desenvolvida com **Node.js**, **Express** e **TypeScript**, aplicando arquitetura em camadas para organização e escalabilidade do projeto.

---

## 📖 Sobre o projeto

A **API Champions** foi desenvolvida durante um curso da **DIO (Digital Innovation One)** com o objetivo de praticar a construção de APIs REST utilizando TypeScript, além de aplicar conceitos como separação de responsabilidades, arquitetura em camadas e organização de código.

A API disponibiliza um **CRUD completo de jogadores** e uma rota para consulta dos **clubes** participantes.

---

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- tsx
- tsup
- TypeScript Compiler (tsc)

---


## 🏛️ Arquitetura

O projeto segue uma arquitetura em camadas, dividindo as responsabilidades da aplicação para facilitar manutenção e evolução.

```text
src/
├── controllers/
├── data/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
│
├── app.ts
└── server.ts

```

### Responsabilidades

| Camada | Descrição |
|---------|-----------|
| Controllers | Recebem as requisições HTTP e retornam as respostas. |
| Services | Contêm as regras de negócio da aplicação. |
| Repositories | Responsáveis pelo acesso aos dados. |
| Data | Armazena os dados utilizados pela aplicação. |
| Models | Define as entidades e interfaces. |

---

## 📌 Funcionalidades

### Players

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/players` | Lista todos os jogadores |
| GET | `/players/:id` | Busca jogador por ID |
| POST | `/players` | Cria um novo jogador |
| PUT | `/players/:id` | Atualiza um jogador |
| DELETE | `/players/:id` | Remove um jogador |

### Clubs

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/clubs` | Lista todos os clubes |

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/marcosviniciosscarvalhodev/api-champions.git
```

Entre na pasta:

```bash
cd api-champions
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

Modo desenvolvimento:

```bash
npm run start:dev
ou
npm run start:watch
```

Gerar build:

```bash
npm run dist
```

Executar produção:

```bash
npm run start:dist
```

---

## 📄 Exemplo de resposta

```json
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "França",
    "position": "Forward",
    "statistics": {
      "overall": 91,
      "pacing": 97,
      "shooting": 90,
      "passing": 81,
      "dribbling": 92,
      "defending": 36,
      "physical": 78
    }
}
```

---

## 🎯 Objetivos do projeto

- Praticar Node.js com TypeScript
- Desenvolver uma API REST
- Aplicar arquitetura em camadas
- Implementar operações CRUD
- Organizar o código seguindo boas práticas

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Organização de projetos Node.js
- Express.js
- TypeScript
- Controllers
- Services
- Repositories
- Arquitetura em camadas
- Rotas REST
- Manipulação de dados

---

## 👨‍💻 Autor

Desenvolvido por **Marcos Vinicios**.

Projeto desenvolvido durante os estudos na **Digital Innovation One (DIO)**.