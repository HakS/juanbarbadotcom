import React from "react";
import tw, { theme } from "twin.macro";
import Layout from '../../components/layout';
import Zone from "../../components/zone";
import styled from '@emotion/styled';

import "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faDocker, faGit, faGithub, faGoogle, faHtml5, faJs, faLaravel, faLinkedin, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBezierCurve, faCode, faDatabase, faEnvelope, faMobile, faPaintBrush, faPalette } from "@fortawesome/free-solid-svg-icons";

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

  const Contact = styled.div`
    display: block;

    a {
      background: white;
      display: block;
      padding: 0.3rem;
      border-radius: 5px;
      margin-bottom: 1rem;
      color: rgba(74,85,104,1);
      transition: background-color 1s;
      font-size: 1.3rem;

      &:hover {
        background: ${theme`colors.gray.200`};
        text-decoration: none;
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
              <li><FontAwesomeIcon icon={faDocker}/>Docker</li>
              <li><FontAwesomeIcon icon={faGit}/>Git</li>
              <li><FontAwesomeIcon icon={faCode}/>VSCode</li>
              <li><FontAwesomeIcon icon={faPaintBrush}/>Photoshop</li>
              <li><FontAwesomeIcon icon={faBezierCurve}/>Illustrator</li>
              <li><FontAwesomeIcon icon={faPalette}/>Krita</li>
            </ul>
          </Skill>
        </div>
      </Zone>

      <Zone title="About" color="#54d0fb" text={theme`colors.gray.700`}>
        <div tw="flex flex-wrap">
          <div tw="order-2 md:order-1 w-full md:w-auto">
            <p>A full-stack software engineer with over {new Date().getFullYear() - 2011} years of experience.</p>

            <p>
              I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.
            </p>

            <p>
              I can help you with all the sides of your project:
            </p>

            <ul>
              <li>verifying good UI/UX design,</li>
              <li>leading/co-developing the back-end and front-end,</li>
              <li>setting up the CI/CD,</li>
              <li>mentoring the team,</li>
              <li>estimating tasks,</li>
              <li>researching possible techs,</li>
              <li>leading, launching and monitoring the project.</li>
            </ul>
          </div>
          <div tw="order-1">Image</div>
        </div>
      </Zone>

      <Zone title="Get in touch" color="#98fe71" text={theme`colors.gray.700`}>
        <div tw="flex justify-center">
          <div tw="w-full md:w-1/2 text-center">
            <p>If you wanna get in touch, talk to me about a project collaboration or just say hi send an email to <a href="mailto:juan.barba.o@gmail.com">juan.barba.o@gmail.com</a> and let's talk.</p>

            <Contact>
              <a rel="noreferrer noopener" target="_blank" href="mailto:juan.barba.o@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> Mail me!
              </a>
            </Contact>
            <Contact>
              <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/jbarba109/">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </Contact>
            <Contact>
              <a rel="noreferrer noopener" target="_blank" href="https://github.com/haks">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </Contact>
          </div>
        </div>
      </Zone>
    </Layout>
  )
}
