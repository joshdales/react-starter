/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REPO_NAME?: string
}

interface ImportMeta {
  readonly env?: ImportMetaEnv
}
