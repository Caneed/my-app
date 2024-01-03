/// <reference types="vite/client" />

// 定义自定义环境变量的类型
interface ImportMetaEnv {
    // app标题
    readonly VITE_APP_TITLE: string
    // axios配置项超时时间
    readonly VITE_REQUEST_TIMEOUT:number
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }