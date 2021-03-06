import actions from '../../actions/'
import ProductMock from '../../mocks/ProductMock'

describe('Actions', () => {
  test('AdToCart Actions', () => {
    const payload = ProductMock
    const expected = {
      type: 'ADD_TO_CART',
      payload
    }
    expect(actions.addToCart(payload)).toEqual(expected)
  })
  test('RemoveCart Actions', () => {
    const payload = ProductMock
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload
    }
    expect(actions.removeFromCart(payload)).toEqual(expected)
  })
  
})
