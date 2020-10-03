import React from "react"
// import { Helmet } from "react-helmet";
import { GlobalStyles } from "twin.macro";
import Hero from './hero';
import { TypographyStyle, GoogleFont } from 'react-typography';

import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

const typography = new Typography(moragaTheme)

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <TypographyStyle typography={ typography } />
      <GoogleFont typography={ typography } />
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Juan Barba</title>
        <link rel="canonical" href="http://juanbarba.com" />
      </Helmet> */}
      <Hero></Hero>
      {children}
    </>
  )
}
