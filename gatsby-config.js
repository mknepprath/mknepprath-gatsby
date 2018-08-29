module.exports = {
  siteMetadata: {
    title: 'M. Knepprath',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#7DBB9F',
        theme_color: '#7DBB9F',
        display: 'minimal-ui',
        icon: 'src/images/mk-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
