'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './cache';

type ProvidersProps = {
	children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
	return <Provider store={store}>{children}</Provider>;
};
