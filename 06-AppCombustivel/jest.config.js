module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.tests.js"],
  collectCoverageFrom: ["core/**/*.js", "!**/*.tests.js", "!**/__tests__/**"],
  coverageReporters: ["text", "lcov", "clover"],
  coverageDirectory: "coverage",
};
