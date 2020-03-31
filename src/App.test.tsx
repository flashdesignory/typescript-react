import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app with counter', () => {
    const { getByTestId } = render(<App />);
    const countDisplay = getByTestId('count-display');
    expect(countDisplay).toHaveTextContent('0');
  });

  it('increments counter on click', () => {
    const { getByTestId } = render(<App />);
    const countDisplay = getByTestId('count-display');
    const button = getByTestId('button-increment');
    fireEvent.click(button);
    expect(countDisplay).toHaveTextContent('1');
  });

  it('decrements counter on click', () => {
    const { getByTestId } = render(<App />);
    const countDisplay = getByTestId('count-display');
    const button = getByTestId('button-decrement');
    fireEvent.click(button);
    expect(countDisplay).toHaveTextContent('-1');
  })
})
