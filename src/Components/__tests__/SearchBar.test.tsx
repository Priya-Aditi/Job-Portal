import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  it('renders input with placeholder', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search by title/i)).toBeInTheDocument();
  });

  it('calls onSearch on input change', () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);
    
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'React' } });

    expect(mockSearch).toHaveBeenCalledWith('React');
  });
});
