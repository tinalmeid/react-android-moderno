module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.test.js"],
  collectCoverageFrom: [
    "src/core/**/*.js",
    "src/data/**/*.js",
    "!src/**/*.test.js",
    "!src/__tests__/**",
  ],
  coverageReporters: ["text", "lcov", "clover"],
  coverageDirectory: "coverage",
};
