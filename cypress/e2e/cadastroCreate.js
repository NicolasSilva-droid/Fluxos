/// <reference types="cypress" />

const {homePage} = require ("../support/pages/home.page")
const cadastroPage = require ("../support/pages/cadastro.page")
const {nome, sobrenome, telefone, email, senha, resenha} = require("../fixtures/conta.json");
const { profilePage } = require("../support/pages/profile.page");

describe('Teste de criação de conta', () => {
    
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.visit('/')
    });

    it('deve criar conta com sucesso', () => {
        homePage.openMenu('Account')
        cadastroPage.cadastro(nome, sobrenome, telefone, email, senha, resenha)
        homePage.openMenu('Account')
        profilePage.customerName().should('have.text', 'Miguel  Carlos')
    });

});