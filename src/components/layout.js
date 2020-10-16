import React from "react"
import { Helmet } from "react-helmet";
import { GlobalStyles } from "twin.macro";
import Hero from './hero';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

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
      <Helmet 
        title={data.site.siteMetadata.title}
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
