import 'jest';
import * as React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App, { AppState } from '../App';

describe('App.tsx', () => {
  const app = renderer.create(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
