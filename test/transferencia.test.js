const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe('Transferências', () => {
  describe('POST /transferencias', () => {
    it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
      const token = await obterToken('julio.lima', '123456')

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Authorization', `Bearer ${token}`)
        .send({
          //essas contas estao na tabela contas do banco de dados
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11,
          token: ""
        })

      expect(resposta.status).to.equal(201)

    })

    it('Deve retornar falha com 422 com 201 quando o valor d atransferencia for abaixo de R$ 10,00', async () => {
      const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        })

      const token = respostaLogin.body.token

      const resposta = await request(process.env.BASE_URL)
        .post('/transferencias')
        .set('Authorization', `Bearer ${token}`)
        .send({
          //essas contas estao na tabela contas do banco de dados
          contaOrigem: 1,
          contaDestino: 2,
          valor: 7,
          token: ""
        })

      expect(resposta.status).to.equal(422)
    })
  })

})