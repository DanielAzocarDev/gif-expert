import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('tests useFetchGifs',  () => { 
  test('should return initial state', async () => {
    const category = 'naruto'

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category))
    
    const {data, loading} = result.current
    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test('should return an array of imgs', async () => {
    const category = 'naruto'

    const { result,waitForNextUpdate } = renderHook(() => useFetchGifs(category))
    await waitForNextUpdate()

    const {data, loading} = result.current

    expect(data.length).toBe(data.length)
    expect(loading).toBe(false)
  })
 })