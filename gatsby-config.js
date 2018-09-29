module.exports = {
  siteMetadata: {
    title: 'Design+Code',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.',
    keywords: 'react course, react for designers'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '4lx5ac5q6pys',
        accessToken: '58165d649f83eabb0f5cd3da9125bba0d6b2d0543e5df16e1f2f9c88cfec3ebe'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-designcode.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
