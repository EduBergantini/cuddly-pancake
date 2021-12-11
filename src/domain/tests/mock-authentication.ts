import { AuthenticationModel } from '../use-cases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationModel => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
