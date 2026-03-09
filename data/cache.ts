import { configureStore } from '@reduxjs/toolkit';
import { openLibraryData } from './openLibraryData';

export const store = configureStore({
	reducer: {
		[openLibraryData.reducerPath]: openLibraryData.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(openLibraryData.middleware),
});
