const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `Agencia Web`,
    description: `Agencia Web`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Agencia Web`,
        short_name: `AgenciaWeb`,
        start_url: `/`,
        background_color: `#2579bc`,
        theme_color: `#2579bc`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
