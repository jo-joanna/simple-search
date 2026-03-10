import { render} from '@testing-library/react';
import { Bar } from '@/components/bar';

describe('Bar component', () => {
	it('renders children', () => {
		const { getByText } = render(
			<Bar>
				<button>Click Me</button>
			</Bar>
		);

		const buttonText = getByText('Click Me');

		// Check that child button is in the document
		expect(buttonText).toBeInTheDocument();
	});

	it('sets default aria-label', () => {
		const { getByRole } = render(
			<Bar>
				<span>Child</span>
			</Bar>
		);

		const toolbar = getByRole('toolbar');
		expect(toolbar).toHaveAttribute('aria-label', 'Toolbar');
	});

	it('accepts a custom aria-label', () => {
		const { getByRole } = render(
			<Bar ariaLabel='Custom Label'>
				<span>Child</span>
			</Bar>
		);

		const toolbar = getByRole('toolbar');
		expect(toolbar).toHaveAttribute('aria-label', 'Custom Label');
	});
});


