require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

const siteMetadata = {
  title: "COSTANZA DICORRADO",
  titleTemplate: "%s · Make Up Artist Catania | Beauty Content Creator",
  description:
    "Disponibile per Servizi Make Up in tutta Italia: Trucco Sposa, 18°, Cerimonie, Beauty, Fashion, Fotografico, Shooting, Cinematografico, Teatrale, Artistico, Body Painting.",
  siteUrl: "https://www.costanzadicorrado.com", // No trailing slash allowed!
  image: "/cdp.jpg", // Path to your image you placed in the 'static' folder
  twitterUsername: "@PaoroCatarano",
  siteLanguage: `it`,
  siteLocale: `it`,
  authorName: `Paolo Catalano`,
  favicon: `./static/favicon.png`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "600"],
            },
            {
              family: "Open Sans Condensed",
              variants: ["300", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `p4kk0nzgp2en`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Costanza Dicorrado MUA`,
        short_name: `CostanzaMUA`,
        start_url: `/`,
        background_color: `#f7ede8`,
        theme_color: `#c4a69b`,
        display: `standalone`,
        icon: siteMetadata.favicon,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icons*"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
