# banco-api-tests

Automação de testes para a API REST do projeto [banco-api](https://github.com/CodeIsa/banco-api).

## 📌 Objetivo

Este projeto tem como objetivo testar os endpoints da API REST do projeto [banco-api](https://github.com/CodeIsa/banco-api), contribuindo com a validação de respostas, status codes, contratos e fluxos principais. Os testes cobrem cenários de sucesso e falha com foco em integridade e confiabilidade da aplicação.

## 🛠️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Asserções:** [Chai](https://www.chaijs.com/)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Dotenv:** [dotenv](https://github.com/motdotla/dotenv) para gerenciamento de variáveis de ambiente

## 📁 Estrutura de Diretórios

```bash
banco-api-tests/
├── test/                 # Diretório com os arquivos de teste organizados por recurso
│   ├── login.test.js
│   └── transferencias.test.js
├── mochawesome-report/   # Relatórios HTML gerados automaticamente (após execução)
├── .env                  # Arquivo com variáveis de ambiente (não incluso no repositório)
├── .gitignore
├── package.json
└── README.md
```

## 🔐 Arquivo `.env`

Você precisará criar um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
BASE_URL=http://localhost:3000
```

> Essa URL deve apontar para a instância da API do projeto [banco-api](https://github.com/CodeIsa/banco-api).

## ▶️ Executando os testes

Instale as dependências:

```bash
npm install
```

Execute os testes com o seguinte comando:

```bash
npm test
```

> Isso executará os testes com o Mocha e gerará o relatório HTML automaticamente usando o Mochawesome.

## 📊 Acessando o Relatório de Testes

Após a execução dos testes, abra o relatório em HTML:

```bash
open mochawesome-report/mochawesome.html
```

Ou no Linux:

```bash
xdg-open mochawesome-report/mochawesome.html
```

## 📚 Documentação das Bibliotecas

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)

---

> Para dúvidas, melhorias ou contribuições, sinta-se à vontade para abrir uma issue ou pull request. 🚀
