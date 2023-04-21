import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MissionLabel from '../components/missionLabel';

describe('MissionLabel', () => {
  it('should render "NOT A MEMBER" when isReserved is false', () => {
    const { getByText } = render(<MissionLabel isReserved={false} />);
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
  });

  it('should render "Active Member" when isReserved is true', () => {
    const { getByText } = render(<MissionLabel isReserved />);
    expect(getByText('Active Member')).toBeInTheDocument();
  });

  it('should have a green background when isReserved is true', () => {
    const { getByText } = render(<MissionLabel isReserved />);
    expect(getByText('Active Member')).toHaveStyle('background-color: #18a2b8');
  });

  it('should have a red background when isReserved is false', () => {
    const { getByText } = render(<MissionLabel isReserved={false} />);
    expect(getByText('NOT A MEMBER')).toHaveStyle('background-color: #6d757d');
  });
});
