import React from "react"
import tw, { styled } from "twin.macro"

export default function Hero() {
  const Hero = styled.div`
    ${tw`w-full text-center py-40`}
  `

  const Button = styled.button`
    margin-top: 10px;
    ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
  `

  return (
    <Hero>
      <h1>Juan Barba</h1>
      <Button>Activate</Button>
    </Hero>
  )
}
