
import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')

describe('test <GifGrid />', () => {
  
  const category = 'Goku'
  

  test('should render component', () => {
    const gifs = []
    useFetchGifs.mockReturnValue({data: gifs, loading: true});
    const wrapper = shallow(<GifGrid category={category}/>)

    expect(wrapper).toMatchSnapshot()
  })

  test('should show components', () => {
    const gifs = [{
      id: 12,
      title: 'hola',
      url: 'https//:www.hola.com',
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category}/>)
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})