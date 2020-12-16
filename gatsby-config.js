const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `Via Del Web`,
    description: `Digital Marketing and Website Design`,
    author: `@salemaziel`,
    siteUrl: `https://agencia-web.rblart.design`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
//     {
//      resolve: 'gatsby-plugin-robots-txt',
//      options: {
//        host: 'https://salemaziel.com',
//        sitemap: 'https://salemaziel.com/sitemap.xml',
//      }
//    },
{
  resolve: `gatsby-plugin-hotjar`,
  options: {
    includeInDevelopment: false, // optional parameter to include script in development
    id: 2159413,
    sv: 6,
  },
},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Via Del Web Digital Marketing`,
        short_name: `Via Del Web`,
        start_url: `/`,
        background_color: `#2579bc`,
        theme_color: `#2579bc`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
//    { 
//      resolve: `gatsby-plugin-purgecss`,
//      options: {
//        printRejected: true, // Print removed selectors and processed file names
//        develop: true, // Enable while using `gatsby develop`
//        // tailwind: true, // Enable tailwindcss support
//        whitelist: ['body.is-preload *',' body.is-preload *:before',' body.is-preload *:after','NoDesktop'], // Don't remove this selector
//         whitelistPatterns: [/btn/, /container/, /row/, /col/, /card/, /body/, /form/, /input/, /NoDesktop/, /is-preload/, /nav/, /navbar/ ]
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['bootstrap/'], // Purge only these files/folders
//      }
//    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
};
