import { AuthenticationModel } from '@/domain/use-cases/authentication'
import faker from 'faker'
import { AccountModel } from '@/domain/models/account-models'

export const mockAuthentication = (): AuthenticationModel => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric(1024)
})
