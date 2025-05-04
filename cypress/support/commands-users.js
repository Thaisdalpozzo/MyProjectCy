Cypress.Commands.add('userLocked', (username = 'locked_out_user', password = 'secret_sauce') => {

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
      
      // verifica se a mensagem de erro de bloqueio de usuário é exibida
      cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.');
    });
  });
  
  Cypress.Commands.add('problemUser', (username = 'problem_user', password = 'secret_sauce') => {

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
    });
  });
  
  Cypress.Commands.add('performanceUser', (username = 'performance_glitch_user', password = 'secret_sauce') => {

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
    });
  });
  