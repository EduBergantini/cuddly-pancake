import { HttpPostParams, IHttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (httpPostParams: HttpPostParams): Promise<HttpResponse> {
    this.url = httpPostParams.url
    this.body = httpPostParams.body
    return this.response
  }
}
