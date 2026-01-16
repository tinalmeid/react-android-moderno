/**
 * @file Jest Setup File
 * @description Configuração global para testes com Jest e React Native
 */
// 1. Mock do Vector Icons (para não quebrar com ícones)
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "",
  MaterialIcons: "",
}));

// 2. Mock do SafeAreaContext (essencial para layouts modernos)
jest.mock("react-native-safe-area-context", () => ({
  SafeAreaProvider: ({ children }) => children,
  SafeAreaView: ({ children }) => children,
  useSafeAreaInsets: () => ({ top: 0, left: 0, right: 0, bottom: 0 }),
}));
