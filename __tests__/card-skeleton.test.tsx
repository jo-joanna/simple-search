import { render, screen } from '@testing-library/react';
import { CardSkeleton, SearchListLoading } from '@/components/card-skeleton';

describe('CardSkeleton component', () => {
	it('renders CardSkeleton wrapper', () => {
		render(<CardSkeleton />);
		const wrapper =
			screen.getByTestId('skeleton')
		expect(wrapper).toBeInTheDocument();
	});
});

describe('SearchListLoading component', () => {
	it('renders loading search results for screen readers', () => {
		render(<SearchListLoading />);
		const status = screen.getByText('Loading search results');
		expect(status).toBeInTheDocument();
	});

	it('renders loading status', () => {
    render(<SearchListLoading />);
    const status = screen.getByRole('status');
    expect(status).toBeInTheDocument();
  });
});
