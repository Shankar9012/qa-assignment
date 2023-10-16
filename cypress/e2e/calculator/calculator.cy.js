import { HomePage } from "../Pages/home_page";

const homePage = new HomePage()

describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('performs addition with positive numbers', () => {
    homePage.enter_first_number(2);
    homePage.enter_second_number(3);
    homePage.click_add();
    cy.wait(2000); // wait is introduced just to visualize assertion steps clearly if run in visual browser mode
    cy.get('#result').should('contain', '5');
  });

  it('performs addition with negative numbers', () => {
    homePage.enter_first_number(5)
    homePage.enter_second_number(-3)
    homePage.click_add();
    cy.wait(2000) 
    cy.get('#result').should('contain','2')
  });

  it('performs addition with both negative number', () => {
    homePage.enter_first_number(-7)
    homePage.enter_second_number(-3)
    homePage.click_add();
    cy.wait(2000) 
    cy.get('#result').should('contain','-10')
  });
  it('performs addition with zero', () => {
    homePage.enter_first_number(2)
    homePage.enter_second_number(0)
    homePage.click_add();
    cy.wait(2000) 
    cy.get('#result').should('contain','2')
  });

  it('performs division with positive numbers', () => {
    homePage.enter_first_number(10)
    homePage.enter_second_number(2)
    homePage.click_divide();
    cy.wait(2000) 
    cy.get('#result').should('contain','5')
  });

  it('handles division by zero', () => {
    homePage.enter_first_number(10)
    homePage.enter_second_number(0)
    homePage.click_divide();
    cy.wait(2000) 
    cy.get('#result').should('have.text','Result: Infinity')
    
  });

  it('handles division with negative numbers', () => {
    homePage.enter_first_number(10)
    homePage.enter_second_number(-2)
    homePage.click_divide();
    cy.wait(2000) 
    cy.get('#result').should('contain','-5')
   
  });

  it('handles division with both negative numbers', () => {
    homePage.enter_first_number(-10)
    homePage.enter_second_number(-2)
    homePage.click_divide();
    cy.wait(2000) 
    cy.get('#result').should('contain','5')
  });

  it('handles rounding in division', () => {
    homePage.enter_first_number(5)
    homePage.enter_second_number(3)
    homePage.click_divide();
    cy.wait(2000) 
    cy.get('#result').should('contain','1.6666666666666667')
  });

  it('handles of floating-point addition', () => {
    homePage.enter_first_number(2.25625)
    homePage.enter_second_number(523.2365222)
    homePage.click_add();
    cy.wait(2000) 
    cy.get('#result').should('contain','525.4927722')
    
  });

  it('handles large numbers', () => {
    homePage.enter_first_number(1000000000000000000)
    homePage.enter_second_number(85223523572752782578)
    homePage.click_add();
    cy.wait(2000) 
    cy.get('#result').should('contain','86223523572752780000')
    
  });

  
}); 
