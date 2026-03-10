import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '@/components/search';

describe('Search component', () => {
	it('renders the search input with the correct value', () => {
		const inputHandler = jest.fn();
		render(<Search inputHandler={inputHandler} inputText='initial value' />);

		const input = screen.getByPlaceholderText(
			'Quick search...'
		) as HTMLInputElement;
		expect(input).toBeInTheDocument();
		expect(input.value).toBe('initial value');
	});

	it('calls inputHandler when typing', () => {
		const inputHandler = jest.fn();
		render(<Search inputHandler={inputHandler} inputText='' />);

		const input = screen.getByPlaceholderText(
			'Quick search...'
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: 'Hello' } });
		expect(inputHandler).toHaveBeenCalledTimes(1);
	});

	it('has a wrapper with role search', () => {
		const inputHandler = jest.fn();
		render(<Search inputHandler={inputHandler} inputText='' />);
		const wrapper = screen.getByRole('search');
		expect(wrapper).toBeInTheDocument();
	});
});
