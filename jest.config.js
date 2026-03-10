/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./__tests__/setup.ts'],
	testMatch: ['**/__tests__/**/*.test.ts?(x)'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'\\.(css|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
};
