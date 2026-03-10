'use client';

import { useSearchBooksQuery } from '@/data/openLibraryData';
import { Card } from '@/components/card';
import { SearchListLoading } from './card-skeleton';
import styled from 'styled-components';

type Book = {
	title: string;
	author_name?: string[];
	cover_i?: number;
	key: string;
};

const BooksList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const BookItem = styled.li`
	margin-bottom: 12px;
`;

export const SearchList = ({ query }: { query: string }) => {
	const { data, isFetching } = useSearchBooksQuery(query, {
		skip: query.length < 2,
	});

	if (isFetching) {
		return (
			<div role='status' aria-live='polite' aria-busy='true'>
				<SearchListLoading />
			</div>
		);
	}

	if (!data) return null;

	return (
		<section aria-live='polite' aria-atomic='true' aria-label='Search results'>
			<BooksList>
				{data.docs.slice(0, 20).map((book: Book, index: number) => {
					const imgUrl = book.cover_i
						? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
						: `data:image/png;base64,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`;
					const amazonLink = `https://www.amazon.co.uk/s?k=${encodeURIComponent(
						book.title
					)}`;

					return (
						<BookItem key={book.key}>
							<Card
								key={index}
								title={book.title}
								description={book.author_name?.join(', ') || 'Unknown author'}
								imgUrl={imgUrl}
								alt={`Cover of ${book.title}`}
								link={amazonLink}
							/>
						</BookItem>
					);
				})}
			</BooksList>
		</section>
	);
};
