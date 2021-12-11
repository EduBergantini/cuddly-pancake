import { AuthenticationModel } from '@/domain/use-cases'
import { AccountModel } from '@/domain/models'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationModel => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric(1024)
})
