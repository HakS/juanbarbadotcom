import React from "react"
// import { Helmet } from "react-helmet";
import { GlobalStyles } from "twin.macro";
import Hero from './hero';

// import "tailwindcss/dist/base.min.css"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
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
