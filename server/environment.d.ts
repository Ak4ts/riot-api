declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE: string,
      API_KEY: string,
      BR1_URL: string,
      PORT: number
    }
  }
}
export {};
