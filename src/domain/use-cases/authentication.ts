import { AccountModel } from '../models/account-models'

type AuthenticationModel = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (model: AuthenticationModel) => Promise<AccountModel>
}
