import { shallow } from "enzyme"
import GifExpertApp from '../../GifExpertApp'

describe('test <GifExpertApp/>', () => {

  

  test('should render component', () => {
    const wrapper = shallow(<GifExpertApp/>)

    expect(wrapper).toMatchSnapshot()
  })

  test('should have 2 categories', () => {

    const categories = ['goku', 'naruto']

    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})