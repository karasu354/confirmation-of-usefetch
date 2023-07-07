const errorResponse = {
  statusCode: 500,
  body: { message: 'Sorry, something went wrong.' }
}

it('check', () => {
  cy.intercept(`http://localhost:3000/api*`, errorResponse)
  cy.visit('http://localhost:3000/')
})