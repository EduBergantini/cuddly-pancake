import { IHttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationModel, IAuthentication } from '@/domain/use-cases/authentication'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { AccountModel } from '@/domain/models/account-models'

export class RemoteAuthentication implements IAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<AuthenticationModel, AccountModel>
  ) {}

  async auth (model: AuthenticationModel): Promise<AccountModel> {
    const response = await this.httpPostClient.post({ url: this.url, body: model })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
