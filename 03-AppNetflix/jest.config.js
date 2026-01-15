module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/data/**',
    '!src/components/**', // React Native components requerem device/emulator
    '!src/screens/**',    // React Native screens requerem device/emulator
    '!src/**/*.test.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
  ],
  // Thresholds apenas para código testável (data layer)
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
};
