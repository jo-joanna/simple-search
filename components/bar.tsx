import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	height: 60px;
	background-color: #f2f2f2;
	display: flex;
	align-items: center;
	justify-content: right;
	font-weight: bold;
	padding-right: 8px;
`;

type BarProps = {
	children: ReactNode;
};

export const Bar = ({ children }: BarProps) => {
	return <Wrapper>{children}</Wrapper>;
};
