import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.js';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Main App', () => {

  it('renders main App without crashing', () => {
    const div = document.createElement('div');
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>, div);
  });

  it('has a Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Top-100 Podcasts/i);
    expect(linkElement).toBeInTheDocument();
  });
});
