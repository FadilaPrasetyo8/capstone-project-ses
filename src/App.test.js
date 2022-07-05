import { render, screen } from '@testing-library/react';
import App from './App';
import {createMemoryHistory} from 'history'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

describe('it should be redirec element navbar', () => {
  it('should redirect Home and update Dom', () => {
    render(<MockNavbar />);
  
    userEvent.click(screen.getByText(/Home/));
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  })

  it('should redirect Edukasi and update Dom', () => {
    render(<MockNavbar />);  
    userEvent.click(screen.getByText(/Edukasi/));
    expect(screen.getByText(/Edukasi/i)).toBeInTheDocument();
  
  })

  it('should redirect Artikel and update Dom', () => {
    render(<MockNavbar />);  
    userEvent.click(screen.getByText(/Artikel/));
    expect(screen.getByText(/Artikel/i)).toBeInTheDocument();
  
  })


})
