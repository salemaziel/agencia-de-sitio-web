const config = require("./config/site");

module.exports = {
  siteMetadata: {
    title: `Via Del Web`,
    description: `Digital Marketing and Website Design`,
    author: `@salemaziel`,
    siteUrl: `https://www.viadelweb.com`,
    ...config,
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2159413,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "viadelweb.com",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://viadelweb.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.viadelweb.com',
        sitemap: 'https://www.viadelweb.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "5fe2b633a8a254155ab5ab88",
        // get this from the tawk script widget
      },
    },
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
