import { getDada } from '../../utils/getData'

describe('Pruebas en la funcion getData', () => {
  beforeEach(()=>{
    fetch.resetMocks()
  })
  test('Llamar a una api y retonar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({data: '123'}))
    getDada('https://google.com')
      .then((response) => {
        return expect(response.data).toEqual('123')
      })
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
  })
})
