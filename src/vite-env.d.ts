interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_ENV: string
  readonly VITE_APP_VERSION: string

  readonly VITE_API_URL: string
  readonly VITE_API_TIMEOUT: string

  readonly VITE_AUTH_STORAGE: string

  readonly VITE_ENABLE_DEVTOOLS: string
  readonly VITE_ENABLE_LOGGER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
