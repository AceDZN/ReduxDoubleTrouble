import expect from 'expect'
import * as actions from '../../src/js/actions/index'

describe('actions', () => {
  it('action should get ReactJS object', () => {
    const vector = {title: 'ReactJS'};
    const expectedAction = {
      type: 'VECTOR_SELECTED',
      payload: vector
    }
    expect(actions.selectVector(vector)).toEqual(expectedAction)
  });
  it('action should get Redux object', () => {
    const vector = {title: 'Redux'};
    const expectedAction = {
      type: 'VECTOR_SELECTED',
      payload: vector
    }
    expect(actions.selectVector(vector)).toEqual(expectedAction)
  })
  it('action should get Gulp object', () => {
    const vector = {title: 'Gulp'};
    const expectedAction = {
      type: 'VECTOR_SELECTED',
      payload: vector
    }
    expect(actions.selectVector(vector)).toEqual(expectedAction)
  })
})
