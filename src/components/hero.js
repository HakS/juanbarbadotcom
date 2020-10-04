import React from "react"
// import tw, { styled } from "twin.macro"
import tw from "twin.macro"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div tw="bg-gray-100 flex mx-auto items-center flex-wrap w-full h-screen justify-center">
        <Img css={{
          minWidth: '180px',
          maxWidth: '240px'
        }} tw="w-full sm:w-auto" fluid={[data.file.childImageSharp.fluid]} alt="Juan Barba" />
        <div tw="ml-4">
          <div tw="ml-2 mt-0 text-2xl">Hello! My name is</div>
          <h1 tw="my-0 text-6xl">Juan Barba</h1>
        </div>
      </div>
    </>
  )
}
