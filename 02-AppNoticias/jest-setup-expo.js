/**
 * @file Expo Jest Setup
 * @description Mock completo e agressivo de Expo para testes
 */

// Bloqueia completamente a carga de expo antes de qualquer coisa
Object.defineProperty(global, "__EXPO_TESTING__", {
  value: true,
  writable: false,
  configurable: false,
});

Object.defineProperty(global, "__DEV__", {
  value: true,
  writable: false,
  configurable: false,
});

// Mock de expo - DEVE ser feito antes de qualquer import
const Module = require("module");
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
