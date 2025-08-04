describe('Funcional', () => {
  it('Não deve adicionar uma tarefa sem nome', () => {
    cy.visit('http://127.0.0.1:5500/aula2-desafio/index.html')

    cy.get('#taskInput').should('have.value', '')

    cy.get('#addTaskButton').click()

    cy.get('#warnMessage')
      .should('have.text', 'Por favor, preencha a tarefa antes de adicionar.')
      // Adicionando mais parâmetros com o .and
      .and('be.visible')

    cy.get('#taskInput')
      .type('Nova tarefa')
      .should('have.value', 'Nova tarefa')

    cy.get('[any-property="teste"]').click()

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Tarefa adicionada com sucesso!')
    })

    // Verificando que a mensagem de aviso foi removida após cadastro com sucesso
    cy.get('#warnMessage').should('not.be.visible')
  })

  it('Deve adicionar uma nova tarefa', () => {
    cy.visit('http://127.0.0.1:5500/aula2-desafio/index.html')

    cy.get('#taskInput')
      .type('Nova tarefa')
      .should('have.value', 'Nova tarefa')

    cy.get('[any-property="teste"]').click()

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Tarefa adicionada com sucesso!')
    })
  })
})