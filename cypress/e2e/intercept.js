/// <reference types="cypress" />

const { email, senha } = require('../fixtures/conta.json')
const { homePage } = require("../support/pages/home.page.js");
const { checkout } = require("../support/checkout.js")

describe('Teste de Autenticação', () => {

    before(() => {
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.visit('/')
    });
  
    beforeEach(() => {
        cy.login(email, senha)
  });
  
  it('deve adicionar, remover e atualizar carrinho de compras', () => {
    checkout.adicionarProdutoAoCarrinho()
    checkout.removerProdutoCheckout()
    checkout.atualizarCheckout()
  });

})
