export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
    '../src/module'
  ],
  // ssr: false,
  mdc: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'material-theme-palenight',
      },
      preload: [
        'sql'
      ]
    },
    remarkPlugins: {
      'remark-mdc': {
        options: {
          experimental: {
            autoUnwrap: true
          }
        }
      }
    }
  },
  devtools: {
    enabled: true
  }
})
