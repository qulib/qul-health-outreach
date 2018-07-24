module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `qul.wordpress`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
