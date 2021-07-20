import React from 'react'
import { shallow, mount } from 'enzyme'
import ProviderMock from '../../mocks/ProviderMock'
import ProductMock from '../../mocks/ProductMock'
import Product from '../../components/Product'

describe('Prubeas en el <Product />', () => {
  test('render del componente <Product />', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    )
    expect(product.length).toEqual(1)
  })
  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn()
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>
    )
    wrapper.find('button').simulate('click')
    expect(handleAddToCart).toHaveBeenCalledTimes(1)
  })
  
})
