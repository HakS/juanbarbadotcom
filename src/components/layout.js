import React from "react"
import { Helmet } from "react-helmet";
import { GlobalStyles } from "twin.macro";
import Hero from './hero';
import { TypographyStyle, GoogleFont } from 'react-typography';

import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';
import { graphql, useStaticQuery } from "gatsby";
import Zone from "./zone";

const typography = new Typography(moragaTheme)

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
        <footer tw="text-center">
          Juan Barba © {new Date().getFullYear()}
        </footer>
      </Zone>
    </>
  )
}

export default Layout
