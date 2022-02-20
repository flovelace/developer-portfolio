import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Thanks for stopping by. My name is Fairfax Lovelace, and I am a full stack web developer! I also compose and produce music in my spare time!
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/fairfax-lovelace-resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
