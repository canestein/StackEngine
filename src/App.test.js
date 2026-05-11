// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StackEngine title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StackEngine/i);
    expect(titleElement).toBeInTheDocument();
});
