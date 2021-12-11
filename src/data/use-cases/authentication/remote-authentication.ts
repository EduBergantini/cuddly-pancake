import { IHttpPostClient } from 'data/protocols/http/http-post-client'
import { AuthenticationModel } from '../../../domain/use-cases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async auth (model: AuthenticationModel): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: model })
  }
}
