import React from "react"
import tw from "twin.macro";
import styled from '@emotion/styled';

export default function MatterPresskit() {
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

  const Area = styled.div`
    ${tw`mb-6 mx-3`}

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

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

  return (
    <>
      <Header>
        <h1>Matter</h1>
        <div>Presskit</div>
      </Header>
      <Area>
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
      <Area>
        <h2>Description</h2>
        <div>
          <p>Escape from the ruines of an advanced civilization in an unexplored planet with no special skills or resources, just an strange device that generates matter.</p>
          <p>Solve puzles and challenges, master the matter device and their powers, survive and be careful about the traps this abandoned place has.</p>
        </div>
      </Area>
      <Area>
        <h2>History</h2>
        <div>
          <p>In 2016, Juan Barba, a peruvian Software developer started his journey as an indie game developer, and started to make prototypes for a game in which you could manipulate your environment by creating your own way out of nothing, something like Marvel's Iceman or The Incredibles' Frozone.</p>
          <p>The idea was to use this power to sovle puzzles, the first prototype was a 3d FPS game, but it soon was noticeable that doing puzzles in 3d only having this device would be difficult and not fun, so a 2d prototype was made, with art inspired by games like Hyper Light Drifter.</p>
          <p>Nowadays this game has evolved to a platformer with multiple challenges, puzzles and powerups. This game was displayed in Unity Day Colombia at 2018 and shown in Unity meetups at Panama</p>
          <p>In 2020, Inti Voxel was born as a Solo Game company focused on fun and inmersive experiences.</p>
        </div>
      </Area>
      <Area>
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
      <Area>
        <h2>Videos</h2>
      </Area>
      <Area>
        <h2>Images</h2>
        <a href="#">Download all screenshots & photos as .zip</a>
      </Area>
      <Area>
        <h2>Monetization Permission</h2>
        <div>Inti Voxel Games allows for the contents of Matter to be published through video broadcasting services for any commercial or non-commercial purposes. Monetization of videos created containing assets from Matter is legally & explicitly allowed by Inti Voxel Games.</div>
      </Area>
      <Area>
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
      <Area>
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
    </>
  )
}
