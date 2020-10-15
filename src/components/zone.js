import React from "react"
import tw, { theme } from "twin.macro"
import styled from '@emotion/styled';

export default function Zone({title, color, text = "#ffffff", children}) {
  const Zone = styled.div`
    ${tw`w-full mx-auto bg-gray-600`}
    padding: 1.5rem 0;
    background-color: ${color};
    color: ${text};

    @media (min-width: ${theme`screens.md`}) {
      padding: 2rem 0;
    }

    h1, h2, h3 {
      color: ${text};
    }

    h2 {
      font-size: 4.7rem;
      letter-spacing: -0.1rem;
    }

    h3 {
      letter-spacing: -0.03rem;
    }

  `;

  return (
    <Zone>
      <div tw="w-full max-w-screen-xl mx-auto px-5">
        {title && (
          <h2>{title}</h2>
        )}
        {children}
      </div>
    </Zone>
  );
}