declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: 'development' | 'production'
        PUBLIC_URL: string
        API_KEY_STATIC_FORM: string
    }
}