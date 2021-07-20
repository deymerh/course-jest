import reducer from '../../reducers/'
import ProductMock from '../../mocks/ProductMock'

describe('Reducers', () => {
  test('Retornar estado inicial', () => {
    expect(reducer({}, {})).toEqual({})
  })
  test('ADD_TO_CART', () => {
    const InitialState = {
      cart: []
    }
    const payload = ProductMock
    const action = {
      type: 'ADD_TO_CART',
      payload
    }
    const expected = {
      cart:[ProductMock]
    }
    expect(reducer(InitialState, action)).toEqual(expected)
  })
  
})
