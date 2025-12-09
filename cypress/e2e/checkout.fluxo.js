import {
  adicionarProdutoAoCarrinho,
  preencherCheckout,
  irParaCarrinho,
  finalizarCompra
} from '../support/checkout';

describe('fluxo de checkout', () => {
  it('deve realizar o checkout com sucesso', () => {
    adicionarProdutoAoCarrinho(); 
    preencherCheckout('Alberto', 48993468152, 'rua jardim', 'metropolis', 'santa rica', '44471-000');
    irParaCarrinho();
    finalizarCompra();
    cy.contains('[data-testid="goBackHome"]').should('Go Back Home');
  });
});