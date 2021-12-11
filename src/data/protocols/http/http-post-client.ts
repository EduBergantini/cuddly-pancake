export type HttpPostParams = {
  url: string
}

export interface IHttpPostClient {
  post: (httpPostParams: HttpPostParams) => Promise<void>
}
