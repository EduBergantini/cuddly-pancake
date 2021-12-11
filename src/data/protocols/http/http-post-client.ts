import { HttpResponse } from '@/data/protocols/http/http-response'

export type HttpPostParams = {
  url: string
  body: object
}

export interface IHttpPostClient {
  post: (httpPostParams: HttpPostParams) => Promise<HttpResponse>
}
