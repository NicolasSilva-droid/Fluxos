import {
  adicionarProdutoAoCarrinho,
  preencherCheckout
} from '../support/checkout';

describe('fluxo de checkout', () => {
  it('deve realizar o checkout com sucesso', () => {
    adicionarProdutoAoCarrinho(); 
    preencherCheckout('Alberto', 48993468152, 'rua jardim', 'metropolis', 'santa rica', '44471-000');
    cy.contains('[data-testid="goBackHome"]').should('Go Back Home');
  });
});
