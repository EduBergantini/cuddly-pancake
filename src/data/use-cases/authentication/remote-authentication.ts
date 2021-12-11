import { IHttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationModel } from '@/domain/use-cases/authentication'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/errors/unexpected-error'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async auth (model: AuthenticationModel): Promise<void> {
    const response = await this.httpPostClient.post({ url: this.url, body: model })

    switch (response.statusCode) {
      case HttpStatusCode.ok: return await Promise.resolve()
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
