import { HttpResponse } from '@/data/protocols/http/http-response'

export type HttpPostParams<TBody> = {
  url: string
  body: TBody
}

export interface IHttpPostClient<TRequest, TResponse> {
  post: (httpPostParams: HttpPostParams<TRequest>) => Promise<HttpResponse<TResponse>>
}
