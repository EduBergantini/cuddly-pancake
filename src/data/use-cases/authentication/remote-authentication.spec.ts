import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '@/data/tests/mock-http-client'
import faker from 'faker'
import { mockAuthentication } from '@/domain/tests/mock-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('Remote Authentication', () => {
  test('Should call IHttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call IHttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationModel = mockAuthentication()
    await sut.auth(authenticationModel)
    expect(httpPostClientSpy.body).toEqual(authenticationModel)
  })
})
