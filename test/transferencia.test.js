const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const { obterToken } = require("../helpers/autenticacao");
const postTransferencias = require("../fixtures/postTransferencias.json");

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token;

    beforeEach(async () => {
      token = await obterToken("julio.lima", "123456");
    });

    it("Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00", async () => {
      //usamos shalow copy quando temos esses 3 pontos, é uma copia superficial, usamos quando as propriedade não tem subniveis
      const bodyTransferencias = { ...postTransferencias };

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(201);
    });

    it("Deve retornar falha com 422 com 201 quando o valor d atransferencia for abaixo de R$ 10,00", async () => {
      const bodyTransferencias = { ...postTransferencias };
      bodyTransferencias.valor = 7;

      const respostaLogin = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "julio.lima",
          senha: "123456",
        });

      const token = respostaLogin.body.token;

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(422);
    });
  });
});
