import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('Pruebas en el componente <Footer/>', () => {
  const footer = mount(<Footer />)
  test('render componente Footer', () => {
    expect(footer.length).toEqual(1)
  })
  test('Renderizar el título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
  })  
})

describe('Snapshot del componente <Footer />', () => {
  test('Comprobar UI del compoente Footer', () => {
    const footer = create(<Footer/>)
    expect(footer.toJSON()).toMatchSnapshot()
  })
  
})

