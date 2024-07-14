import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ phrase: 'sample', author: 'author' }),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

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

test('displays inspiring text on button click', async () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me/i);
  
  await act(async () => {
    fireEvent.click(buttonElement);
  });

  const inspiringText = await waitFor(() => screen.getByText(/"sample" - author/i));
  expect(inspiringText).toBeInTheDocument();
});

test('displays error message on fetch failure', async () => {
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: false,
    })
  );

  render(<App />);
  const buttonElement = screen.getByText(/Click me/i);

  await act(async () => {
    fireEvent.click(buttonElement);
  });

  const errorText = await waitFor(() => screen.getByText(/Failed to fetch inspiring text/i));
  expect(errorText).toBeInTheDocument();
});