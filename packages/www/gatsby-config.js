module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
