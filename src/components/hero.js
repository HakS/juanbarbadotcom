import React from "react"
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
      <div tw="relative bg-gray-100 mx-auto flex items-center w-full h-screen justify-center">
        <div>
          <div tw="mt-16 md:mt-32 flex flex-wrap items-center justify-center">
            <Img tw="w-auto" fixed={data.file.childImageSharp.fixed} alt="Juan Barba" />
            <div tw="w-full mt-8 md:mt-0 md:w-auto text-center md:text-left md:ml-4">
              <div tw="ml-1 mt-0 text-2xl">Hello! My name is</div>
              <h1 tw="mt-0 mb-2 text-5xl sm:text-6xl">Juan Barba</h1>
            </div>
          </div>
          <h2 tw="leading-9 mt-10 md:mt-12 p-5 md:p-6 text-center mb-0 border-t border-gray-300">
            I'm a full-stack Web Developer
            <br/>
            remotely available based in UTC-5
          </h2>
        </div>
      </div>
    </>
  )
}
