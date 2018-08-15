module.exports = {
  pathPrefix: `/health-outreach/`,
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `health-outreach.library.queensu.ca`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        excludedRoutes: [
          "/akismet/**",
          "/jetpack/**",
          "/wp/v2/jp_pay_order/**",
          "/wp/v2/users/**"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/qul-squares.png",

        // WebApp Manifest Configuration
        appName: "Gatsby site",
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-88346038-1",
        head: false,
        anonymize: true,
        respectDNT: true 
      }
    }
  ]
}