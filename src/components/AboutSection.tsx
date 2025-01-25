import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import FadeUp from "./animations/FadeUp";
import TechSkills from "./skills/TechSkills";
import { container } from "../styles/shared-styles";

const AboutContainer = styled.section`
  ${container}

  @media screen and (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const IntroHighlight = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
`;

const SocialWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: end;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const About = styled.div`
  order: 1;

  @media screen and (min-width: 768px) {
    max-width: 60rem;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <SectionHeading heading="About" />
      <FadeUp>
        <AboutWrapper>
          <About>
            <p>
              <IntroHighlight>Here is my story. </IntroHighlight>I have always
              been drawn to food and food services. My professional background
              lies within the food industry. However, once I stumbled upon
              coding and unlocked a new passion, it was clear what I wanted to
              pursue as a career.
            </p>
            <br />
            <FadeUp>
              <p>
                Ever since, I have developed this eagerness and willingness to
                learn and develop new skills in the tech industry. I spend most
                of my spare hours exploring the latest trends, crafting
                projects, and leveling up my skill set. I embrace every
                opportunity to expand my knowledge with a focus towards frontend
                development. Although, I enjoy exploring other facets of the
                tech world, from backend to design and more.
              </p>
            </FadeUp>
            <br />
            <FadeUp>
              <p>
                Beyond coding, I like to spend my time exercising, playing video
                game, crafting culinary delights, and cherishing quality moments
                with friends and family. I genuinely enjoy meeting new people
                and fostering meaningful connections.
              </p>
            </FadeUp>
            <FadeUp>
              <SocialWrapper>
                <SocialLinks />
              </SocialWrapper>
            </FadeUp>
          </About>
          <TechSkills />
        </AboutWrapper>
      </FadeUp>
    </AboutContainer>
  );
};

export default AboutSection;
