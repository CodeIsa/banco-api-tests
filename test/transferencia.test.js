import request from "supertest";
import { expect } from "chai";
import * as dotenv from "dotenv";

dotenv.config();
import { obterToken } from "../helpers/autenticacao.js";
import postTransferencias from "../fixtures/postTransferencias.json" assert { type: "json" };

describe("Transferências", () => {
  let token;

  beforeEach(async () => {
    token = await obterToken("julio.lima", "123456");
  });

  describe("POST /transferencias", () => {
    it("Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00", async () => {
      //usamos shalow copy quando temos esses 3 pontos, é uma copia superficial, usamos quando as propriedade não tem subniveis
      const bodyTransferencias = { ...postTransferencias };

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Authorization", `Bearer ${token}`)
        .set("Content-Type", "application/json")
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(201);
    });

    it("Deve retornar falha com 422 com 201 quando o valor d atransferencia for abaixo de R$ 10,00", async () => {
      const bodyTransferencias = { ...postTransferencias };
      bodyTransferencias.valor = 7;

      const resposta = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Authorization", `Bearer ${token}`)
        .set("Content-Type", "application/json")
        .send(bodyTransferencias);

      expect(resposta.status).to.equal(422);
    });
  });

  describe("GET /transferencias/{id}", () => {
    it("Deve retornar 200 e dados iguais ao registro de transferencia contido no banco de dados quando o ID for valido", async () => {
      const resposta = await request(process.env.BASE_URL)
        .get("/transferencias/1")
        .set("Authorization", `Bearer ${token}`)
        .set("Content-Type", "application/json");

      console.log(resposta.status);
      console.log(resposta.body);
      expect(resposta.status).to.equal(200);
      expect(resposta.body.id).to.equal(1);
      expect(resposta.body.id).to.be.a("number");
    });
  });

  describe("GET /transferencias", () => {
    it("Deve retornar 10 elementos na paginacao quando informar limite de 10 registros", async () => {
      const resposta = await request(process.env.BASE_URL)
        .get("/transferencias?page=1&limit=10")
        .set("Authorization", `Bearer ${token}`)
        .set("Content-Type", "application/json");

      console.log(resposta.body);
      expect(resposta.status).to.equal(200);
      expect(resposta.body.limit).to.equal(10);
      expect(resposta.body.transferencias).to.have.lengthOf(10);
    });
  });
});
