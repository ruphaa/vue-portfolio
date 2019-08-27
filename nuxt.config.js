const path = require('path');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ruphaa Ganesh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ruphaa Ganesh | Web Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/avatar2.png' },
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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

      //add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader"
        }
      )
    }
  }
}

