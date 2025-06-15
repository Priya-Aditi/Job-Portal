import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ThemeToggle from '../ThemeToggle';
import { ThemeContext } from '../../Context/ThemeContext';

describe('ThemeToggle', () => {
  it('renders light mode icon when theme is light', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: vi.fn() }}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );
    expect(screen.getByText(/switch to dark mode/i)).toBeInTheDocument();
  });

  it('calls toggleTheme on click', () => {
    const mockToggle = vi.fn();
    render(
      <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: mockToggle }}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    fireEvent.click(screen.getByText(/switch to light mode/i));
    expect(mockToggle).toHaveBeenCalled();
  });
});
