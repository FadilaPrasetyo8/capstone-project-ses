import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';

import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('full app rendering/navigating', () => {
//   render(<App />)
//   userEvent.click(screen.getByText(/edukasi/i))
//   expect(screen.getByText(/edukasi/i)).toBeInTheDocument()
// })

it("navigates home when click the home", () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>,
      root
    );
})

it("navigates edukasi when click the edukasi", () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <MemoryRouter initialEntries={['/edukasi']}>
        <App />
      </MemoryRouter>,
      root
    );
})