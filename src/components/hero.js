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
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <div tw="bg-gray-100 mx-auto flex items-center w-full h-screen justify-center">
        <div tw="flex flex-wrap items-center justify-center">
          <Img tw="w-auto" fixed={data.file.childImageSharp.fixed} alt="Juan Barba" />
          <div tw="w-full mt-8 md:mt-0 md:w-auto text-center md:text-left md:ml-4">
            <div tw="ml-2 mt-0 text-2xl">Hello! My name is</div>
            <h1 tw="my-0 text-5xl sm:text-6xl">Juan Barba</h1>
          </div>
        </div>
      </div>
    </>
  )
}
