export class HomePage{
    
    enter_first_number(number1) {
     cy.get('#a').type(number1)

    }

    enter_second_number(number2) {
    cy.get('#b').type(number2)

    }
    click_add() {
        cy.get('#addBtn').click()

    }

    click_divide() {
    cy.get('#devideBtn').click()

    }
}