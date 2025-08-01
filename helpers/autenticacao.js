import request from "supertest";
import postLogin from "../fixtures/postLogin.json" assert { type: "json" };

export const obterToken = async (usuario, senha) => {
  const bodyLogin = { username: usuario, senha: senha };
  const respostaLogin = await request(process.env.BASE_URL)
    .post("/login")
    .set("Content-Type", "application/json")
    .send(bodyLogin);

  return respostaLogin.body.token;
};
