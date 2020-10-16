import React from "react"
import tw, { theme } from "twin.macro"
import styled from '@emotion/styled';

export default function Zone({title, color = theme`colors.gray.700`, text = "#ffffff", children}) {
  const Zone = styled.div`
    ${tw`relative w-full mx-auto bg-gray-600`}
    padding: 1rem 0 4rem;
    background-color: ${color};
    color: ${text};

    &::before {
      content: ' ';
      border-top: 0 solid transparent;
      border-bottom: 50px solid ${color};
      border-left: 0 solid transparent;
      border-right: 100vw solid transparent;
      position: absolute;
      top: -50px;
    }

    h1, h2, h3 {
      color: ${text};
    }

    h2 {
      font-size: 4.7rem;
      letter-spacing: -0.1rem;
      margin-bottom: 2rem;
    }

    h3 {
      letter-spacing: -0.03rem;
    }

  `;

  return (
    <Zone>
      <div tw="w-full max-w-screen-xl mx-auto px-5">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </Zone>
  );
}