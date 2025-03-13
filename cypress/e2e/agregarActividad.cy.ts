import { e2e } from '../support/constantes'
describe('Agregar una Actividad', () => {
  it('Verificar que se pueda agregar una nueva actividad a la lista.', () => {
    //Visitar la pagina principal
    cy.visit('/')
    cy.validacionInicial();

     //Agregar una actividad 
     cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de prueba');
     cy.get(e2e.BOTON_AGREGAR).click();
  
     cy.get('[data-cy="u3dd97"]').should('have.text', 'Actividad de prueba');
  })
})