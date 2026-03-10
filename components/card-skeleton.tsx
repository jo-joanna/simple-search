'use client';

import styled, { keyframes } from 'styled-components';

// Shimmer animation
const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

// Skeleton for the entire card
const CardSkeletonWrapper = styled.div`
	width: 406px;
	min-height: 73px;
	margin-block: 16px;
	margin-inline: 8px;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 15px;
	align-items: start;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	overflow: hidden;
	opacity: 0.7;
	animation: fadeIn 0.3s ease-in-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.7;
		}
	}
`;

// Skeleton for the image
const ImageSkeleton = styled.div`
	width: 100px;
	height: 130px;
	border-radius: 2px;
	background: linear-gradient(90deg, #f3f3f3 25%, #e0e0e0 37%, #f3f3f3 63%);
	background-size: 400% 100%;
	animation: ${shimmer} 1.4s ease infinite;

	//avoid motion sickness
	@media (prefers-reduced-motion: reduce) {
		animation: none;
`;

// Skeleton for the text
const TextSkeleton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	> div {
		height: 16px;
		border-radius: 2px;
		background: linear-gradient(90deg, #f3f3f3 25%, #e0e0e0 37%, #f3f3f3 63%);
		background-size: 400% 100%;
		animation: ${shimmer} 1.4s ease infinite;
		margin-bottom: 8px;
	}

	> div:first-child {
		width: 70%; // title
		height: 20px;
	}

	> div:last-child {
		width: 100%; // description
		height: 16px;
		margin-bottom: 0;
	}
`;

export const CardSkeleton = () => {
	return (
		<CardSkeletonWrapper data-testid='skeleton' aria-hidden='true'>
			<ImageSkeleton />
			<TextSkeleton>
				<div />
				<div />
			</TextSkeleton>
		</CardSkeletonWrapper>
	);
};

export const SearchListLoading = () => {
	return (
		<div role='status' aria-live='polite'>
			<span className='sr-only'>Loading search results</span>
			{[1, 2, 3].map((id) => (
				<CardSkeleton key={id} />
			))}
		</div>
	);
};
