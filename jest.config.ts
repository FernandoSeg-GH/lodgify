import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest to handle TypeScript
  testEnvironment: "jsdom", // Provides DOM APIs like document for React components
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest to process TS/TSX files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Match imports like @/components
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Set up testing-library
};

export default config;
