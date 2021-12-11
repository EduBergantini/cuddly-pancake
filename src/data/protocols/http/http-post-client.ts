import { HttpResponse } from '.'

export type HttpPostParams<TBody> = {
  url: string
  body: TBody
}

export interface IHttpPostClient<TRequest, TResponse> {
  post: (httpPostParams: HttpPostParams<TRequest>) => Promise<HttpResponse<TResponse>>
}
