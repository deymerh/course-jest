import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import ProviderMock from '../../mocks/ProviderMock'
import Header from '../../components/Header'

describe('Pruebas en el <Header/>', () => {
  test('debe renderizar el componente', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
    expect(header.length).toEqual(1)
  })
  test('renderizar el título', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
   expect(header.find('.Header-title').text()).toEqual('Platzi Store') 
  })
})

describe('Header SnapShot', () => {
  test('Comprobar el Snapshot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )
    expect(header.toJSON()).toMatchSnapshot()
    
  })
  
})

