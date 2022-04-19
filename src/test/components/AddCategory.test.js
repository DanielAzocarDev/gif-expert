import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"


describe('test <AddCategory/>', () => { 
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(()=> {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })
  test('should render the component', () => { 
    expect(wrapper).toMatchSnapshot()
  })
  test('should change input', () => { 
    const input = wrapper.find('input')
    const value = 'Hi!'
    input.simulate('change', {target:{value}})
  })
  test('should not submit data', () => { 
    const form = wrapper.find('form')

    form.simulate('submit', {preventDefault(){}})

    expect(setCategories).not.toHaveBeenCalled()
  })
  test('should submit data and make sure that input value is empty', () => { 
    const input = wrapper.find('input')
    let value = 'Hi!'
    input.simulate('change', {target:{value}})

    const form = wrapper.find('form')
    form.simulate('submit', {preventDefault(){}})

    expect(setCategories).toHaveBeenCalled()

    

    expect(wrapper.find('input').prop('value')).toBe('')
  })
 })