import { HttpPostParams, IHttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy<TRequest, TResponse> implements IHttpPostClient<TRequest, TResponse> {
  url?: string
  body?: TRequest
  response: HttpResponse<TResponse> = {
    statusCode: HttpStatusCode.ok
  }

  async post (httpPostParams: HttpPostParams<TRequest>): Promise<HttpResponse<TResponse>> {
    this.url = httpPostParams.url
    this.body = httpPostParams.body
    return this.response
  }
}
