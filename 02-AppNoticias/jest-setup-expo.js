/**
 * @file Expo Jest Setup
 * @description Mock completo e agressivo de Expo para testes
 */

// Previne que react-native/jest/setup.js tente redefinir window
if (globalThis.window === undefined) {
  globalThis.window = {};
  globalThis.window.navigator = {};
}

// Adiciona funções de timer que podem estar faltando
if (!globalThis.setTimeout) {
  globalThis.setTimeout = jest.fn((callback) => callback());
}
if (!globalThis.setInterval) {
  globalThis.setInterval = jest.fn();
}
if (!globalThis.clearTimeout) {
  globalThis.clearTimeout = jest.fn();
}
if (!globalThis.clearInterval) {
  globalThis.clearInterval = jest.fn();
}

// Bloqueia completamente a carga de expo antes de qualquer coisa
if (!globalThis.__EXPO_TESTING__) {
  Object.defineProperty(globalThis, "__EXPO_TESTING__", {
    value: true,
    writable: false,
    configurable: false,
  });
}

if (!globalThis.__DEV__) {
  Object.defineProperty(globalThis, "__DEV__", {
    value: true,
    writable: false,
    configurable: false,
  });
}

// Mock de expo - DEVE ser feito antes de qualquer import
const Module = require("node:module");
const originalRequire = Module.prototype.require;

Module.prototype.require = function (id) {
  if (id.includes("expo/src/winter")) {
    return {};
  }
  if (id === "expo") {
    return { __esModule: true, default: {} };
  }
  return originalRequire.apply(this, arguments);
};

// Mais mocks explícitos
jest.mock("expo", () => ({
  __esModule: true,
  default: {},
}));

jest.mock("expo/src/winter/installGlobal", () => ({}));
jest.mock("expo/src/winter/runtime.native", () => ({}));
jest.mock("expo/src/winter/runtime", () => ({}));
