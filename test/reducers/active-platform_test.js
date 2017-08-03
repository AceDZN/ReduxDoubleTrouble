import expect from 'expect'
import reducer from '../../src/js/reducers/active-vector'

describe('active-vector reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(null)
  })
  it('should return the Selected ReactJS obj as state', () => {
    expect(
      reducer([], {
        type: 'VECTOR_SELECTED',
        payload: {title: 'ReactJS'}
      })
    ).toEqual(
      {title: 'ReactJS'}
    )
  })
  it('should return the Selected ReactJS obj as state', () => {
    expect(
      reducer([], {
        type: 'VECTOR_SELECTED',
        payload: {title: 'Redux'}
      })
    ).toEqual(
      {title: 'Redux'}
    )
  })
})
