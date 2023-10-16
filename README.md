### QA Assignment

Hello and congratulations on reaching this stage! Here, we have a small challenge for you (if you enjoy being challenged). The objective of this assignment is to:

1. Develop unit tests with Jest.
2. Develop e2e tests with Cypress.

## **Simple Calculator Service**

We possess a straightforward calculator, and we want to be certain of its operation.

## **How to Run**

```
yarn
yarn dev
```

## **1. Unit Tests**

The core computation part of our service is located at `/src/service/calculator.js`. 

It is expected that you:
- Add a unit test file and develop `./test/calculator.test.js`.
- Cover most edge cases.
- Run and pass the tests using the `yarn test` command.

## **2. E2E Tests**

After launching the project, you can view the UI at [this address](http://localhost:3000). 

It is expected that you:
- Develop E2E tests in `/cypress/e2e/calculator/calculator.cy.js`.
- Cover most behaviors.
- Run and pass the tests using the `yarn cypress` command.

## **Note**

- All dependencies have already been added to the project. Therefore, there shouldn't be a need to introduce additional dependencies. However, if you do require more, please include them and provide an explanation.
- Fork the repo
- Create a branch for your work and commit regularly, rather than pushing all changes at once.
- Conclude by creating a pull request.