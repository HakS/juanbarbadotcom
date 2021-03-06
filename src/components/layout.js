import React from "react"
import { GlobalStyles } from "twin.macro";
import Hero from './hero';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';
import { graphql, useStaticQuery } from "gatsby";
import Zone from "./zone";
import verticalRhythm from "compass-vertical-rhythm";

const theme = {...moragaTheme};
theme.baseFontSize = '22px';
theme.includeNormalize = false;
theme.headerWeight = 300;
theme.overrideStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => {
  const vr = verticalRhythm({
    baseFontSize: "19px",
    baseLineHeight: "30.65px",
  })
  return {
    [MOBILE_MEDIA_QUERY]: {
      html: {
        ...vr.establishBaseline(),
      },
    },
  }
};

const typography = new Typography(theme);

const Layout = ({ children }) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <GlobalStyles />
      <TypographyStyle typography={ typography } />
      <GoogleFont typography={ typography } />
      <GatsbySeo
        title={data.site.siteMetadata.title}
        description='Juan Barba is a Peruvian full-stack Web developer based mostly in UTC-5, develops clean looking sites a from complex forms and e-commerce sites to HTML videogames'
      />
      <Hero></Hero>
      {children}

      <Zone>
        <footer tw="text-center mt-6 md:mt-4">
          Juan Barba © {new Date().getFullYear()}
        </footer>
      </Zone>
    </>
  )
}

export default Layout
