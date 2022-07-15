module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Golden Shoe`,
        short_name: 'G Shoe',
        start_url: '/',
        icon: 'src/images/shoe.svg'
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ 
        }
      }
    },
],
  siteMetadata: {
    title: `Will Cowen`,
    siteUrl: `http://www.willcowen.co.uk`,
    description: `Will's personal website`,
  },
}
