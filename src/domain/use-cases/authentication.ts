import { AccountModel } from '@/domain/models'

export type AuthenticationModel = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (model: AuthenticationModel) => Promise<AccountModel>
}
