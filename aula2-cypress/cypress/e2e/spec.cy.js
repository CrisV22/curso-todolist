describe('Funcional', () => {
  it('Deve adicionar uma nova tarefa', () => {
    cy.visit('http://127.0.0.1:5500/aula2-cypress/index.html')
    
    cy.get('#taskInput')
      .type('Nova tarefa')
      .should('have.value', 'Nova tarefa')
    
    cy.get('[any-property="teste"]').click()
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Tarefa adicionada com sucesso!')
    })

  })

    it('Não deve adicionar uma tarefa sem nome', () => {
    cy.visit('http://127.0.0.1:5500/aula2-cypress/index.html')
    
    cy.get('#taskInput')
    cy.get('#addTaskButton').click()
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha a tarefa antes de adicionar.')
    })

  })
})