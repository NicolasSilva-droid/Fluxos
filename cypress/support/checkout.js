export const checkout = {

    adicionarProdutoAoCarrinho() {
        cy.get('[class="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73"]').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click();
        cy.contains('[data-testid="goBackHome"]').should('Go Back Home')
    },
    preencherCheckout(nome, telefone, endereco, cidade, estado, cep) {
        cy.get('[data-testid="addNewAddress"]').click();
        cy.get('[placeholder="Enter your name"]').type(nome);
        cy.get('[placeholder="Enter your mobile number"]').type(telefone);
        cy.get('[placeholder="Enter your address"]').type(endereco);
        cy.get('[placeholder="City"]').type(cidade);
        cy.get('[placeholder="State"]').type(estado);
        cy.get('[placeholder="ZipCode"]').type(cep);
        cy.get('[data-testid="save"]').click();
        cy.get('[data-testid="goBackHome"').should()
    },
    removerProdutoCheckout(){
        cy.get('[class="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73"]').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.get('[data-testid="remove"]').click();
        cy.contains('[data-testid="emptyCart"]').should()
    },
    atualizarCheckout(){
        cy.get('[class="css-146c3p1 r-lrvibr"]').click();
        cy.get('[data-testid="back"]').click();
        cy.get('[class="css-146c3p1 r-lrvibr"]').click();

    }
}
