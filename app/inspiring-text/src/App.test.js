import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders Inspiring Text Generator header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Inspiring Text Generator/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Click me button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders initial placeholder text', () => {
  render(<App />);
  const placeholderText = screen.getByText(/Your text appear here/i);
  expect(placeholderText).toBeInTheDocument();
});

test('displays inspiring text on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me/i);
  
  act(() => {
    fireEvent.click(buttonElement);
  });

  const inspiringText = screen.getByText(/Your inspiring text goes here/i);
  expect(inspiringText).toBeInTheDocument();
});