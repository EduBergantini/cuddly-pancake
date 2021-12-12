import axios from 'axios'
import faker from 'faker'

export const makeMockedAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const mockedAxiosResult = {
    data: faker.random.objectElement(),
    status: faker.datatype.number({ min: 100, max: 599 })
  }
  mockedAxios.post.mockResolvedValue(mockedAxiosResult)

  return mockedAxios
}
