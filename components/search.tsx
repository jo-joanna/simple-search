'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const TextInput = styled.input`
	width: 238px;
	height: 42px;
	background-color: #e3e3e3;
	border: 1px solid #e3e3e3;
	border-radius: 2px;
	padding-left: 20px;
	&:focus-visible {
		outline: 2px solid #000;
		outline-offset: 2px;
	}
`;

const VisuallyHiddenLabel = styled.label`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`;

export const Search = ({
	inputHandler,
	inputText,
}: {
	inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputText: string;
}) => {
	return (
		<Wrapper role='search'>
			<VisuallyHiddenLabel htmlFor='site-search'>
				Quick search
			</VisuallyHiddenLabel>
			<TextInput
				id='quick-search'
				type='search'
				name='search'
				placeholder='Quick search...'
				onChange={inputHandler}
				value={inputText}
				autoComplete='off'
			></TextInput>
		</Wrapper>
	);
};
