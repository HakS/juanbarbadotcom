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
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div css={tw`inline-flex w-full py-40`}>
      <div css={tw`inline-flex mx-auto items-center`}>
        <Img fixed={data.file.childImageSharp.fixed} alt="Juan Barba" />
        <div css={tw`ml-6`}>
          <div css={tw`mt-0 text-2xl`}>I am</div>
          <h1 css={tw`mt-0 text-6xl`}>Juan Barba</h1>
        </div>
      </div>
    </div>
  )
}
