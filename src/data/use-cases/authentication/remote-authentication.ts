import { IHttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AuthenticationModel, IAuthentication } from '@/domain/use-cases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

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
