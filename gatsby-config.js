module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Health Outreach Partners",
        short_name: "Health Outreach Partners",
        start_url: "/",
        background_color: "#406486",
        theme_color: "#00305e",
        display: "minimal-ui",
        icon: "src/images/qul-squares.png", 
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "sites.library.queensu.ca/health-outreach",
        protocol: "https",
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-88346038-1",
        head: false,
        anonymize: true,
        respectDNT: true 
      }
    },
    "gatsby-plugin-offline"
  ]
}