import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// Se debe generar el build para que en el archivo dist aparezca el remoteEntry.js
// Tambien se pueden compartir stores como se muestra en el ejemplo
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./Store": "./src/store",
        "./LineChart": "./src/components/LineChart",
        "./Btn": "./src/components/btn/Button"
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
