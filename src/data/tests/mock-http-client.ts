import { HttpPostParams, IHttpPostClient, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

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
