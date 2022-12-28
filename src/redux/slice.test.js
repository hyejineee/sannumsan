import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadCourseGPX,
  setCourseGPX,
} from './slice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('service/courseGPX');

describe('action', () => {
  let store;

  describe('loadCourseGPX', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setCourseGPX', async () => {
      await store.dispatch(loadCourseGPX(1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCourseGPX(''));
    });
  });
});
