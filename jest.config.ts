import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  preset: "ts-jest",
};

export default config;
