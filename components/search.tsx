'use client';

import styled from 'styled-components';

const TextInput = styled.input`
	width: 238px;
	height: 42px;
	background-color: #e3e3e3;
	border: 1px solid #e3e3e3;
	border-radius: 2px;
	display: flex;
	align-items: center;
	padding-left: 20px;
`;

export const Search = ({
	inputHandler,
	inputText,
}: {
	inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputText: string;
}) => {
	return (
		<TextInput
			type='text'
			placeholder='Quick search...'
			onChange={inputHandler}
			value={inputText}
		></TextInput>
	);
};
