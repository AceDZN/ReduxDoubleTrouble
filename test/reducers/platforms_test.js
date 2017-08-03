import expect from 'expect'
import reducer from '../../src/js/reducers/vectors'

describe('vectors list reducer', () => {
  it('should return vectors list', () => {
    expect(
      reducer()
    ).toEqual(
      [
        {title: 'ReactJS'},
        {title: 'Redux'},
        {title: 'Gulp'}
      ]
    )
  })
})
