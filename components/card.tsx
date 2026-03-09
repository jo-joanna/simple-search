'use client';

import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

const Group = styled.dl`
	width: 406px;
	min-height: 73px;
	margin-block: 16px;
	margin-inline: 8px;
	padding-inline-end: 8px;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 15px;
	align-items: start;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 2);
`;

const StyledImage = styled(Image)`
	object-fit: cover;
	min-width: 100px;
	min-height: 130px;
`;

const Title = styled.dt`
	display: unset;
	font-size: 1.25rem;
	font-weight: 700;
	margin: 0 0 8px 0;
	color: #1f2937;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* Limits to 3 lines */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Description = styled.dd`
	display: unset;
	font-size: 1rem;
	color: #4b5563;
	padding: 2px;
	display: -webkit-box;
	-webkit-line-clamp: 3; /* Limits to 3 lines */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const AmazonLink = styled.a`
	display: unset;
	font-size: 1rem;
	font-weight: 800;
	color: black;
	padding: 10px 2px;
`;

const TextWrap = styled.div`
	margin: unset;
	margin-inline-start: unset;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

type CardProps = {
	title: string;
	description: string;
	imgUrl: string;
	alt: string;
	link: string;
};

type PhotoProps = Omit<ImageProps, 'className'> & {
	width?: number;
	height?: number;
};

const Photo = ({ src, alt, width = 100, height = 130 }: PhotoProps) => {
	return <StyledImage src={src} alt={alt} width={width} height={height} />;
};

export const Card = ({ title, imgUrl, description, alt, link }: CardProps) => {
	return (
		<Group>
			<Photo src={imgUrl} alt={alt} />
			<TextWrap>
				<Title> {title}</Title>
				<Description> {description}</Description>
				<AmazonLink href={link} target='_blank' rel='noopener noreferrer'>
					Search on Amazon
				</AmazonLink>
			</TextWrap>
		</Group>
	);
};
