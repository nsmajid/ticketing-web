export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME,

  APP_ENV: import.meta.env.VITE_APP_ENV,

  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,

  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT),
} as const
