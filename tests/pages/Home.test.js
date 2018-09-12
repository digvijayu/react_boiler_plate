import React from 'react';
import Home from './../../src/pages/Home';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

describe('HOME - should render and test home page', () => {
  let store, homePage;

  beforeEach(() => {
    const initialState = { appReducer: { text: 'some text' } };
    const mockStore = configureStore();
    store = mockStore(initialState);
    homePage = shallow(<Home store={store} />);
  });

  it('should return the passed text value', () => {
    expect(homePage.props().text).toEqual('some text');
  });
});
