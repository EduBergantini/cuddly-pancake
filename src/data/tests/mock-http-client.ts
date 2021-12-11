import { HttpPostParams, IHttpPostClient } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  body?: object

  async post (httpPostParams: HttpPostParams): Promise<void> {
    this.url = httpPostParams.url
    this.body = httpPostParams.body
    return await Promise.resolve()
  }
}
