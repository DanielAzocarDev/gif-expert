import { shallow } from "enzyme"
import GifGridItem from '../../components/GifGridItem';


describe('Test <GifGridItem/>',() => {

  const title = 'Hola test'
  const url = 'https//:localhost.3000/algo'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have a <p> with title', () => {
    const p = wrapper.find('p')

    expect(p.text().trim()).toBe(title)
  })

  test('should have img with props url and title', () => {
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('should have a div with class animate__fadeIn', () => {
    const div = wrapper.find('div')

    const className =div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  })
})