/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PB_URL: string;
  readonly PUBLIC_WA_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
