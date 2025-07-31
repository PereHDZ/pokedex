declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URL: string;
    MONGODB_TEST_URL: string;
    PORT: string;
    JWT_SECRET: string;
    JWT_EXP: string;
  }
}