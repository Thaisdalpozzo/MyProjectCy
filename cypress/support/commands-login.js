/// <reference path="./commands.d.ts" />

Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {

  // usa a sessão para evitar o login a cada vez
  cy.session([username, password], () => {
    // visita a página inicial do Sauce Demo
    cy.visit('https://www.saucedemo.com/');

    // preenche o campo de nome de usuário
    cy.get('[data-test="username"]').type(username);
    
    // preenche o campo de senha
    cy.get('[data-test="password"]').type(password);
    
    // clica no botão de login
    cy.get('[data-test="login-button"]').click();
    
    // verifica se a URL da página inclui '/inventory.html', indicando que o login foi bem-sucedido
    cy.url().should('include', '/inventory.html');
  });
});

Cypress.Commands.add('logout', () => {

  // clica no botão do menu hambúrguer (menu de navegação)
  cy.get('#react-burger-menu-btn').click();
  
  // clica na opção de logout
  cy.get('[data-test="logout-sidebar-link"]').click();
  
  // verifica se a URL da página é a inicial do site, indicando que o logout foi bem-sucedido
  cy.url().should('eq', 'https://www.saucedemo.com/');
});

Cypress.Commands.add('loginWithoutCredentials', () => {

  // clica no botão de login sem preencher o nome de usuário
  cy.get('[data-test="login-button"]').click();
  
  // verifica se o erro "Username is required" é exibido
  cy.get('[data-test="error"]').should('contain', 'Username is required');
});

Cypress.Commands.add('loginWithoutPassword', (username = 'standard_user') => {

  // preenche o campo de nome de usuário
  cy.get('[data-test="username"]').type(username);
  
  // clica no botão de login sem preencher a senha
  cy.get('[data-test="login-button"]').click();
  
  // verifica se o erro "Password is required" é exibido
  cy.get('[data-test="error"]').should('contain', 'Password is required');
});

Cypress.Commands.add('loginWithInvalidData', () => {

  // limpa o campo de nome de usuário e preenche com um valor inválido
  cy.get('[data-test="username"]').clear().type('Teste');
  
  // preenche o campo de senha com um valor inválido
  cy.get('[data-test="password"]').type('QualquerSenha');
  
  // clica no botão de login
  cy.get('[data-test="login-button"]').click();
  
  // verifica se o erro "Username and password do not match" é exibido
  cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
});

Cypress.Commands.add('verifyWrongImage', (username = 'problem_user', password = 'secret_sauce') => {

  // valida se a imagem do Backpack está trocada
  cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
    .should('have.attr', 'src')
    .then((src) => {
      // define a imagem errada (com cachorro e bolinha)
      const imageErrada = 'static/media/sl-404.168b1cce.jpg';  
      // define a imagem certa (do produto)
      const imageCerta = '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'; 

      if (src.includes(imageErrada)) {
        // loga quando a imagem errada for detectada
        cy.log('Imagem errada detectada!', { filename: 'test-log.txt' });
        console.error('Imagem errada: ' + src);
        
        // dispara uma falha no teste
        assert.fail('A imagem do Backpack está errada!');
      } else if (src.includes(imageCerta)) {
        // loga quando a imagem correta for detectada
        cy.log('Imagem correta detectada: ' + imageCerta);
      } else {
        // se a imagem não for nem a errada nem a correta, loga um aviso
        cy.log('Imagem desconhecida detectada!');
        console.warn('Imagem desconhecida: ' + src);
      }
    });
});





