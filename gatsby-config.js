module.exports = {
  siteMetadata: {
    title: "AudioC0re",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "Dc3rauBKul2X6ZkLA5ENl2BACvVXBqP3IvisBFfRk6o",
        spaceId: "uuo2d7lwjwj6",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
