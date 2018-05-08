module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'AK_LAB',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ak lab' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#666666' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  vender:[
    'element-ui',
    'axios'
  ],

  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/charts' }
  ],
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': {
      target: 'http://localhost:5001',
      ws: false
    }
  },

  css: [
    // element样式全局引用
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/style/index.scss', lang: 'scss' }
  ]
 
}
