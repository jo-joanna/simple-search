'use client';

import { Bar } from '@/components/bar';
import { Search } from '@/components/search';
import { Suspense, useEffect, useState } from 'react';
import { SearchList } from '@/components/search-list';
import { SearchListLoading } from '@/components/card-skeleton';
import styled from 'styled-components';

const SearchListWrapper = styled.div`
	justify-items: right;
`;

export default function Home() {
	const [inputText, setInputText] = useState('');
	const [debouncedQuery, setDebouncedQuery] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedQuery(inputText);
		}, 100);

		return () => clearTimeout(timer);
	}, [inputText]);

	const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	return (
		<main style={{ width: '100%', maxWidth: '1440px' }}>
			<Bar>
				<Search inputHandler={searchHandler} inputText={inputText} />
			</Bar>
			<Suspense fallback={<SearchListLoading />}>
				<div style={{ marginTop: '20px' }}></div>
				<SearchListWrapper>
					{debouncedQuery.trim() !== '' && (
						<SearchList query={debouncedQuery} />
					)}
				</SearchListWrapper>
			</Suspense>
		</main>
	);
}
