import React from "react";
import tw, { theme } from "twin.macro";
import Layout from '../../components/layout';
import Zone from "../../components/zone";
import styled from '@emotion/styled';

import "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faDocker, faGit, faGithub, faGoogle, faHtml5, faJs, faLaravel, faLinkedin, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBezierCurve, faCode, faDatabase, faEnvelope, faMobile, faPaintBrush, faPalette } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

export default function WebAbout() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-pic.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const Skillset = styled.div`
    ${tw`w-full md:w-1/3 lg:px-5`}

    h3 {
      ${tw`lg:text-center mb-8`}
    }

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

      @media (min-width: ${theme`screens.lg`}) {
        margin-right: 0;
        display: inline-block;
        width: 33.333%;
        text-align: center;
        vertical-align: top;

        svg {
          margin-right: 0.5rem;
          display: block;

          &.svg-inline--fa {
            width: 100%;
            height: 60px;
          }
        }

        span {
          width: 100%;
          display: block;
          line-height: 1.2rem;
          margin-top: 0.5rem;
          font-size: 0.7rem;
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
          <Skillset>
            <h3>Frontend</h3>
            <ul>
              <li><FontAwesomeIcon icon={faJs}/><span> Javascript</span></li>
              <li><FontAwesomeIcon icon={faReact}/><span>React</span></li>
              <li><FontAwesomeIcon icon={faAngular}/><span>Angular 5+</span></li>
              <li><FontAwesomeIcon icon={faCss3}/><span>CSS 3</span></li>
              <li><FontAwesomeIcon icon={faHtml5}/><span>HTML 5</span></li>
              <li><FontAwesomeIcon icon={faHtml5}/><span>HTML Canvas</span></li>
              <li><FontAwesomeIcon icon={faGoogle}/><span>SEO</span></li>
              <li><FontAwesomeIcon icon={faMobile}/><span>Responsive design</span></li>
            </ul>
          </Skillset>
          <Skillset>
            <h3>Backend</h3>
            <ul>
              <li><FontAwesomeIcon icon={faPhp}/><span>PHP</span></li>
              <li><FontAwesomeIcon icon={faLaravel}/><span>Laravel</span></li>
              <li><FontAwesomeIcon icon={faNodeJs}/><span>NodeJS</span></li>
              <li><FontAwesomeIcon icon={faDatabase}/><span>MySQL</span></li>
            </ul>
          </Skillset>
          <Skillset>
            <h3>Tools</h3>
            <ul>
              <li><FontAwesomeIcon icon={faDocker}/><span>Docker</span></li>
              <li><FontAwesomeIcon icon={faGit}/><span>Git</span></li>
              <li><FontAwesomeIcon icon={faCode}/><span>VSCode</span></li>
              <li><FontAwesomeIcon icon={faPaintBrush}/><span>Photoshop</span></li>
              <li><FontAwesomeIcon icon={faBezierCurve}/><span>Illustrator</span></li>
              <li><FontAwesomeIcon icon={faPalette}/><span>Krita</span></li>
            </ul>
          </Skillset>
        </div>
      </Zone>

      <Zone title="About" color="#98fe71" text={theme`colors.gray.700`}>
        <div tw="flex flex-wrap md:flex-no-wrap">
          <div tw="order-2 md:order-1 w-full md:w-auto">
            <p>Full-stack software engineer with over {new Date().getFullYear() - 2011} years of experience.</p>

            <p>
              I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.
            </p>

            <p>
              I can help you with all the sides of your project:
            </p>

            <ul tw="list-disc">
              <li>Verifying/co-designing good UI/UX design</li>
              <li>Leading/co-developing front-end</li>
              <li>Developing back-end</li>
              <li>Estimating tasks</li>
              <li>Researching possible techs</li>
              <li>Colabirating with production deployment</li>
            </ul>
          </div>
          <div tw="order-1 w-full md:w-auto text-center mb-6 md:mb-0 ml-0 md:ml-6">
            <Img tw="w-full rounded-full" fixed={data.file.childImageSharp.fixed} alt="Juan Barba photo on his appartment in Barranquilla" />
          </div>
        </div>
      </Zone>

      <Zone title="Get in touch" color="#54d0fb" text={theme`colors.gray.700`}>
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
