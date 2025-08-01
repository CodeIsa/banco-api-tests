import request from "supertest";
import { expect } from "chai";
import * as dotenv from "dotenv";
import postLogin from "../fixtures/postLogin.json" assert { type: "json" };

dotenv.config();

describe("Login", () => {
  describe("POST /login", () => {
    it("Deve retornar 200 com um token em string quando usar credenciais validas", async () => {
      const bodyLogin = { ...postLogin };

      const resposta = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(bodyLogin);

      //console.log(resposta.status)
      //console.log(resposta.body)
      expect(resposta.status).to.equal(200);
      expect(resposta.body.token).to.be.a("string");
    });
  });
});
