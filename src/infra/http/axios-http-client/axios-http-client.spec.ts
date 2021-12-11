import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Axios Http Client', () => {
  test('Should call axios with correct url', async () => {
    const sut = new AxiosHttpClient()
    const url = faker.internet.url()
    await sut.post({
      url,
      body: undefined
    })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
