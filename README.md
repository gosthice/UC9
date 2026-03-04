# 📌 Atividade - Crud
### API REST simples para gerenciamento de eventos, utilizando arquitetura modular com separação de responsabilidades (Controller, Model, Routes e Config).

## 🏗️ Estrutura do Projeto

```
atividade-crud/
│
├── src/
│   ├── config/
│   │   └── configDB.js          # Configuração da conexão com o banco
│   │
│   ├── modules/
│   │   └── eventos/
│   │       ├── controller/
│   │       │   └── eventoController.js   # Regras de negócio
│   │       │
│   │       ├── model/
│   │       │   └── eventoModel.js        # Estrutura e operações no banco
│   │       │
│   │       └── routes/
│   │           └── eventoRoute.js        # Definição das rotas da API
│
├── index.js                     # Arquivo principal da aplicação
├── README.md
```

## 🧠 Arquitetura Utilizada

#### O projeto segue o padrão:

* **Model** → Responsável pela comunicação com o banco de dados
* **Controller** → Contém as regras de negócio
* **Routes** → Define os endpoints da API
* **Config** → Configuração de conexão com banco

#### Essa organização facilita:

* Escalabilidade
* Manutenção
* Separação de responsabilidades

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* Banco de Dados


## 📡 Endpoints

| Método | Rota         | Descrição              |
|--------|--------------|------------------------|
| GET    | /listar     | Lista todos os eventos |
| GET    | /listar/:id | Busca evento por ID    |
| POST   | /criar     | Cria novo evento       |
| PUT    | /editar/:id | Atualiza evento        |
| DELETE | /deletar/:id | Remove evento          |
