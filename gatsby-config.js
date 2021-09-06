module.exports = {
  siteMetadata: {
    siteUrl: "https://renaudamsellem.com",
    title: "Portfolio Renaud Amsellem",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
      },
    },
  ],
};
