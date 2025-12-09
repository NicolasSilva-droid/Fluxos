export function adicionarProdutoAoCarrinho() {
    cy.get('[data-testid="category-Categoria Requisito 1764601228266"]').click()
    cy.get('[data-testid="productDetails"]').click();
    cy.get('[data-testid="addToCart"]').click();

}

export function preencherCheckout(nome, telefone, endereco, cidade, estado, cep) {
    cy.get('[data-testid="addNewAddress"]').click();
    cy.get('[placeholder="Enter your name"]').type(nome);
    cy.get('[placeholder="Enter your mobile number"]').type(telefone);
    cy.get('[placeholder="Enter your address"]').type(endereco);
    cy.get('[placeholder="City"]').type(cidade);
    cy.get('[placeholder="State"]').type(estado);
    cy.get('[placeholder="ZipCode"]').type(cep);
    cy.get('[data-testid="save"]').click();

}

export function irParaCarrinho() {
  cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
}

export function finalizarCompra() {
    cy.get('[data-testid="completeCheckout"]').click()
}

