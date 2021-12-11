import { AccountModel } from '@/domain/models/account-models'

export type AuthenticationModel = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (model: AuthenticationModel) => Promise<AccountModel>
}
