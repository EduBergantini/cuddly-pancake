import { AxiosHttpClient } from './axios-http-client'
import { makeMockedAxios } from '../tests'
import axios from 'axios'
import { makeMockedHttpPostRequest } from '@/data/tests'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const mockedAxios = makeMockedAxios()
  const sut = new AxiosHttpClient()

  return { sut, mockedAxios }
}

describe('Axios Http Client', () => {
  test('Should call axios post verb with correct values', async () => {
    const { sut, mockedAxios } = makeSut()
    const request = makeMockedHttpPostRequest()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct status code and body', () => {
    const { sut, mockedAxios } = makeSut()
    const httpResponsePromise = sut.post(makeMockedHttpPostRequest())
    expect(httpResponsePromise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
