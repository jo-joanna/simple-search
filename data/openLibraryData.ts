import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openLibraryData = createApi({
	reducerPath: 'openLibraryData',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://openlibrary.org/',
	}),
	endpoints: (builder) => ({
		searchBooks: builder.query({
			query: (query: string) => `search.json?q=${encodeURIComponent(query)}`,
		}),
	}),
});

export const { useSearchBooksQuery } = openLibraryData;
