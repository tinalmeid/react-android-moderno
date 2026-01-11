/**
 * @file Jest Setup File
 * @description Configuração global para testes com Jest e React Native
 */

// Mock de dependências nativas do React Native que não precisam funcionar em testes
jest.mock("react-native", () => ({
  View: "View",
  Text: "Text",
  Image: "Image",
  StyleSheet: {
    create: (styles) => styles,
    flatten: (style) => style,
  },
  SafeAreaView: "SafeAreaView",
  ScrollView: "ScrollView",
  TouchableOpacity: "TouchableOpacity",
  AccessibilityInfo: {
    announceForAccessibility: jest.fn(),
  },
}));

// Suppress console warnings during tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes(
        "Non-serializable values were found in the navigation state"
      ) ||
        args[0].includes("import") ||
        args[0].includes("scope") ||
        args[0].includes("deprecated") ||
        args[0].includes("setTimeout"))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
