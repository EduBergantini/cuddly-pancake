export type HttpPostParams = {
  url: string
  body: object
}

export interface IHttpPostClient {
  post: (httpPostParams: HttpPostParams) => Promise<void>
}
