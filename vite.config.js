// vite.config.(js|ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { copyFileSync, existsSync, readFileSync } from 'fs'

export default defineConfig({
  base: "/",
  build: { 
    outDir: "docs",
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep PDF files in root with original name (no hashing, no assets folder)
          if (assetInfo.name && assetInfo.name.endsWith('.pdf')) {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  plugins: [
    react(), 
    tailwindcss(),
    // Custom plugin to ensure PDF is preserved
    {
      name: 'preserve-pdf',
      configureServer(server) {
        // In dev mode, serve PDF directly from public directory
        server.middlewares.use((req, res, next) => {
          if (req.url === '/ZiadElnagar_Resume.pdf') {
            const pdfPath = path.resolve(__dirname, 'public/ZiadElnagar_Resume.pdf')
            if (existsSync(pdfPath)) {
              res.setHeader('Content-Type', 'application/pdf')
              const pdfContent = readFileSync(pdfPath)
              res.end(pdfContent)
              return
            }
          }
          next()
        })
      },
      closeBundle() {
        // After build, ensure PDF is copied correctly
        const srcPdf = path.resolve(__dirname, 'public/ZiadElnagar_Resume.pdf')
        const destPdf = path.resolve(__dirname, 'docs/ZiadElnagar_Resume.pdf')
        if (existsSync(srcPdf) && existsSync(path.resolve(__dirname, 'docs'))) {
          try {
            copyFileSync(srcPdf, destPdf)
            console.log('✓ Resume PDF preserved')
          } catch (err) {
            console.error('Failed to copy PDF:', err)
          }
        }
      }
    }
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  publicDir: 'public',
  assetsInclude: ['**/*.pdf']
})
