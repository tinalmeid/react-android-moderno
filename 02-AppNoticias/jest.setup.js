/**
 * @file Jest Setup File
 * @description Configuração global para testes com Jest e React Native
 */

// Mock de dependências nativas do React Native que não precisam funcionar em testes
jest.mock("react-native", () => {
  const React = require("react");
  return {
    View: "View",
    Text: "Text",
    Image: "Image",
    FlatList: ({ data = [], renderItem, testID, ...rest }) =>
      React.createElement(
        "FlatList",
        { testID, ...rest },
        data.map((item, index) => {
          const rendered = renderItem({ item, index });
          return React.cloneElement(rendered, { key: item?.id ?? index });
        })
      ),
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
  };
});

// Mock de Safe Area Context para evitar dependências nativas
jest.mock("react-native-safe-area-context", () => {
  const React = require("react");
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  };
});

// Mock da StatusBar do Expo
jest.mock("expo-status-bar", () => ({
  StatusBar: () => null,
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
        args[0].includes("setTimeout") ||
        args[0].includes("act("))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
