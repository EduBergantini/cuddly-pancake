import { HttpPostParams, IHttpPostClient } from '../data/protocols/http/http-post-client'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string

  async post (httpPostParams: HttpPostParams): Promise<void> {
    this.url = httpPostParams.url
    return await Promise.resolve()
  }
}
