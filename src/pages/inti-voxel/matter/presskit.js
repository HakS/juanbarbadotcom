import React from "react"
import tw from "twin.macro";
import styled from '@emotion/styled';

export default function MatterPresskit() {
  const Presskit = styled.div`
    p {
      margin-bottom: 1rem;
    }

    ul {
      list-style: disc;
      li {
        margin-left: 1.15rem;
      }
    }
  `;

  const Header = styled.div`
    ${tw`mx-3 mb-8 mt-4`}
    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      line-height: 2.3rem;
    }

    div {
      font-size: 0.9rem;
    }
  `;

  const StickyBar = styled.div`
    position: sticky;
    top: 30px;
    align-self: flex-start;
  `;

  const Area = styled.div`
    ${tw`mb-6`}

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  `;

  return (
    <Presskit>
      <Header>
        <h1>Matter</h1>
        <div>Presskit</div>
      </Header>
      <div tw="flex flex-no-wrap gap-8 mx-3">
        <StickyBar tw="flex-grow-0 flex-shrink-0">
          <ul>
            <li><a href="#factsheet">Factsheet</a></li>
            <li><a href="#description">Description</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#images">Images</a></li>
            <li><a href="#monetization">Monetization & Permission</a></li>
            <li><a href="#team">Team & Repeating Collaborators</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </StickyBar>
        <div>
          <div tw="flex flex-no-wrap gap-6">
            <Area id="factsheet" tw="flex-grow-0 flex-shrink-0 w-1/3">
              <h2>Factsheet</h2>
              <ul>
                <li><b>Developer:</b> Inti Voxel Games</li>
                <li><b>Release Date:</b> January 30th, 2022 (PC/Mac/Linux), TBD (Nintendo Switch)</li>
                <li><b>Platforms:</b> <a href="https://jbarba109.itch.io/matter" target="_blank" rel="noreferrer">PC/Mac/Linux</a>, Nintendo Switch</li>
                <li><b>Website:</b> <a href="https://jbarba109.itch.io/matter" target="_blank" rel="noreferrer">Matter [Demo] by Juan Barba</a>, Nintendo Switch</li>
                <li><b>Languages:</b> English, Spanish, Portuguese</li>
                <li><b>Press / Business Contact:</b> <a href="mailto:juan.barba.o@gmail.com">juan.barba.o@gmail.com</a></li>
                <li>
                  <div><b>Social:</b></div>
                  <ul>
                    <li><a href="https://www.instagram.com/intivoxel" target="_blank" rel="noreferrer">Instagram</a></li>
                    <li><a href="https://twitter.com/intiVoxel" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://www.facebook.com/intiVoxel" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="http://discord.gg/MRH8FySDbY" target="_blank" rel="noreferrer">Discord</a></li>
                  </ul>
                </li>
              </ul>
            </Area>
            <div>
              <Area id="description">
                <h2>Description</h2>
                <div>
                  <p>Escape from the ruines of an advanced civilization in an unexplored planet with no special skills or resources, just an strange device that generates matter.</p>
                  <p>Solve puzles and challenges, master the matter device and their powers, survive and be careful about the traps this abandoned place has.</p>
                </div>
              </Area>
              <Area id="history">
                <h2>History</h2>
                <div>
                  <p>In 2016, Juan Barba, a peruvian Software developer started his journey as an indie game developer.</p>
                  <p>The first Matter prototype was a 3d FPS game, but we noticed that doing puzzles in 3d only having this device won't be fun, so a 2d prototype was made.</p>
                  <p>The game has grown in features and in 2018 this game was showed in some events, including Unity Day Colombia</p>
                  <p>In 2020, Inti Voxel was born as a Solo Game company focused on fun and inmersive experiences.</p>
                </div>
              </Area>
            </div>
          </div>
          <Area id="features">
            <h2>Features</h2>
            <ul>
              <li>With the Matter Device, you will be able to manipulate your environment! Create yoru own platforms, walls, shields, reach unreachable places, master this device to move around challenging and dangerous places</li>
              <li>It's hi-res pixel-art will make you fell more inmerse in this strange world. The artwork is inspired by pixel art designs, but with a modern touch, based on gradients and dynamic lights.</li>
              <li>Animations on the characters and objects are focused to feel realistic and authentic, this includes detailed pixel-art animations and well handled physics.</li>
              <li>Powerups for the matter device would allow you to destroy your environment, solve more puzzles, and give you a feeling that this place is yours.</li>
              <li>Sound effects for every single item in the game to improve realism and inmersion.</li>
              <li>Backstory telled by the world itself will encourage you to explore deeper each corner of this deranged world.</li>
            </ul>
          </Area>
          <Area id="videos">
            <h2>Videos</h2>
          </Area>
          <Area id="images">
            <h2>Images</h2>
            <a href="#">Download all screenshots & photos as .zip</a>
          </Area>
          <Area id="monetization">
            <h2>Monetization & Permission</h2>
            <div>Inti Voxel Games allows for the contents of Matter to be published through video broadcasting services for any commercial or non-commercial purposes. Monetization of videos created containing assets from Matter is legally & explicitly allowed by Inti Voxel Games.</div>
          </Area>
          <div tw="flex gap-8">
            <Area id="team">
              <h2>Team & Repeating Collaborators</h2>
              <ul>
                <li>
                  <div><b>Juan Barba</b></div>
                  <div>Indie Game Developer</div>
                </li>
                <li>
                  <div><b>Jorge Acosta</b></div>
                  <div>2D Animator</div>
                </li>
              </ul>
            </Area>
            <Area id="contact">
              <h2>Contact</h2>
              <ul>
                <li>
                  <div><b>Email</b></div>
                  <div><a target="_blank" rel="noreferrer" href="mailto:juan.barba.o@gmail.com">juan.barba.o@gmail.com</a></div>
                </li>
                <li>
                  <div><b>Instagram</b></div>
                  <div><a target="_blank" rel="noreferrer" href="https://www.instagram.com/intivoxel">https://www.instagram.com/intivoxel</a></div>
                </li>
                <li>
                  <div><b>Twitter</b></div>
                  <div><a target="_blank" rel="noreferrer" href="https://twitter.com/intiVoxel">https://twitter.com/intiVoxel</a></div>
                </li>
                <li>
                  <div><b>Facebook</b></div>
                  <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/intiVoxel">https://www.facebook.com/intiVoxel</a></div>
                </li>
                <li>
                  <div><b>Discord</b></div>
                  <div><a target="_blank" rel="noreferrer" href="http://discord.gg/MRH8FySDbY">http://discord.gg/MRH8FySDbY</a></div>
                </li>
              </ul>
            </Area>
          </div>
        </div>
      </div>
    </Presskit>
  )
}
