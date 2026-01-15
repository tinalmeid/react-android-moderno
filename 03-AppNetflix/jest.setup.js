// jest.setup.js - Configuração inicial do Jest
globalThis.__DEV__ = true;

// Mock do LinearGradient - Jest não permite acesso a variáveis externas em jest.mock()
jest.mock("expo-linear-gradient", () => {
  const LinearGradient = ({ children, ...props }) => children;
  return { LinearGradient };
});
