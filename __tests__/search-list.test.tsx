import { render, screen } from '@testing-library/react';
import { SearchList } from '@/components/search-list';
import { useSearchBooksQuery } from '@/data/openLibraryData';

beforeEach(() => {
	jest.clearAllMocks();
});

afterEach(() => {
	jest.resetAllMocks();
});

// Mock the RTK Query hook
jest.mock('../data/openLibraryData', () => ({
	useSearchBooksQuery: jest.fn(),
}));


describe('SearchList component', () => {
	const mockData = {
		docs: [
			{
				key: '1',
				title: 'Book One',
				author_name: ['Author One'],
				cover_i: 123,
			},
			{
				key: '2',
				title: 'Book Two',
				author_name: ['Author Two'],
				cover_i: 456,
			},
		],
	};

	it('renders SearchListLoading when fetching', () => {
		(useSearchBooksQuery as jest.Mock).mockReturnValue({
			data: null,
			isFetching: true,
		});

		render(<SearchList query='abc' />);
		const statuses = screen.getAllByRole('status');
		expect(statuses).toHaveLength(2);
		expect(screen.getByText(/loading search results/i)).toBeInTheDocument();
	});

	it('renders nothing if no data', () => {
		(useSearchBooksQuery as jest.Mock).mockReturnValue({
			data: null,
			isFetching: false,
		});

		const { container } = render(<SearchList query='abc' />);
		expect(container.firstChild).toBeNull();
	});

	it('renders cards when data exists', () => {
		(useSearchBooksQuery as jest.Mock).mockReturnValue({
			data: mockData,
			isFetching: false,
		});

		render(<SearchList query='abc' />);
		const section = screen.getByRole('region', { name: /search results/i });
		expect(section).toBeInTheDocument();

		expect(screen.getByText('Book One')).toBeInTheDocument();
		expect(screen.getByText('Book Two')).toBeInTheDocument();

		expect(screen.getByText('Author One')).toBeInTheDocument();
		expect(screen.getByText('Author Two')).toBeInTheDocument();
	});
});
