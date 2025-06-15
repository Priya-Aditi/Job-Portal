import { render, screen } from '@testing-library/react';
import JobCard from '../JobCard';

const mockJob = {
  id: 1,
  title: 'Frontend Developer',
  company_name: 'TechCorp',
  posted: '2 days ago',
  languages: ['React', 'TypeScript', 'CSS'],
  employment_type: 'Full-time',
};

describe('JobCard', () => {
  it('renders job title and company', () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('TechCorp')).toBeInTheDocument();
  });

  it('renders languages as comma-separated string', () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getByText('React, TypeScript, CSS')).toBeInTheDocument();
  });

  it('renders posted date and employment type', () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getByText('2 days ago')).toBeInTheDocument();
    expect(screen.getByText('Full-time')).toBeInTheDocument();
  });
});
