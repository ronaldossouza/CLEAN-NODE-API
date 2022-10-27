import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const httpRequest = sut.handle(httpRequest)
    expect(httpRequest.statusCode).toBe(400)
  })
})
