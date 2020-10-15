import React from "react";
import tw, { theme } from "twin.macro";
import Layout from '../../components/layout';
import Zone from "../../components/zone";
import styled from '@emotion/styled';

import "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGit, faGoogle, faHtml5, faJs, faLaravel, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBrush, faCode, faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function WebAbout() {
  const Skill = styled.div`
    ${tw`w-full md:w-1/3`}
    ul {
      margin: 0 0 1.3rem;

      @media (min-width: ${theme`screens.md`}) {
        margin: 0;
      }
    }

    li {
      display: inline-block;
      margin-right: .8rem;

      svg {
        margin-right: 0.3rem;
      }

      @media (min-width: ${theme`screens.md`}) {
        margin-right: 0;
        display: block;

        svg {
          margin-right: 0.5rem;
        }
      }
    }
  `;

  return (
    <Layout>
      <Zone title="Skills" color="#ff852c">
        <div tw="flex flex-wrap">
          <Skill>
            <h3>Frontend</h3>
            <ul>
              <li><FontAwesomeIcon icon={faJs}/> Javascript</li>
              <li><FontAwesomeIcon icon={faReact}/>React</li>
              <li><FontAwesomeIcon icon={faAngular}/>Angular 5+</li>
              <li><FontAwesomeIcon icon={faCss3}/>CSS 3</li>
              <li><FontAwesomeIcon icon={faHtml5}/>HTML 5</li>
              <li><FontAwesomeIcon icon={faHtml5}/>HTML Canvas</li>
              <li><FontAwesomeIcon icon={faGoogle}/>SEO</li>
              <li><FontAwesomeIcon icon={faMobile}/>Responsive design</li>
            </ul>
          </Skill>
          <Skill>
            <h3>Backend</h3>
            <ul>
              <li><FontAwesomeIcon icon={faPhp}/>PHP</li>
              <li><FontAwesomeIcon icon={faLaravel}/>Laravel</li>
              <li><FontAwesomeIcon icon={faNodeJs}/>NodeJS</li>
              <li><FontAwesomeIcon icon={faDatabase}/>MySQL</li>
            </ul>
          </Skill>
          <Skill>
            <h3>Tools</h3>
            <ul>
              <li><FontAwesomeIcon icon={faGit}/>Git</li>
              <li><FontAwesomeIcon icon={faCode}/>VSCode</li>
              <li><FontAwesomeIcon icon={faBrush}/>Photoshop</li>
              <li><FontAwesomeIcon icon={faBrush}/>Illustrator</li>
              <li><FontAwesomeIcon icon={faBrush}/>Krita</li>
            </ul>
          </Skill>
        </div>
      </Zone>

      <Zone title="About" color="#54d0fb" text="#000000">
      </Zone>

      <Zone title="Contact" color="#98fe71" text="#000000">
      </Zone>
    </Layout>
  )
}
