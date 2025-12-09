/// <reference types="cypress" />

class cadastroPage {
    get #nome() {return cy.get('[data-testid="firstName"]')}
    get #sobrenome() {return cy.get('[data-testid="lastName"]')}
    get #telefone() {return cy.get('[data-testid="phone"]')}
    get #email() {return cy.get('[data-testid="email"]')}
    get #senha() {return cy.get('[data-testid="password"]')}
    get #resenha() {return cy.get('[data-testid="repassword"]')}
    get #btnCreate() {return cy.get('[data-testid="create"]')}

    cadastro(nome, sobrenome, telefone, email, senha, resenha){
        this.#nome.type(nome)
        this.#sobrenome.type(sobrenome)
        this.#telefone.type(telefone)
        this.#email.type(email)
        this.#senha.type(senha)
        this.#resenha.type(resenha)
        this.#btnCreate.click()
    }
}

module.exports = new cadastroPage();