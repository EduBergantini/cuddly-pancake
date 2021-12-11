import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('Axios Http Client', () => {
  test('Should call axios with correct url and http verb', async () => {
    const sut = makeSut()
    const url = faker.internet.url()
    await sut.post({
      url,
      body: undefined
    })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
