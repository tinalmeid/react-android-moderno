module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest-setup-expo.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@expo/vector-icons$": "<rootDir>/__mocks__/expo-vector-icons.js",
    "^expo(/.*)?$": "<rootDir>/__mocks__/expo.js",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx}",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/data/**/*.{js,jsx,ts,tsx}",
    "src/components/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.test.{js,jsx}",
    "!**/index.js",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/.expo/"],
  coverageReporters: ["text", "lcov", "html", "json-summary"],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 0,
      functions: 0,
      lines: 40,
    },
  },
};
