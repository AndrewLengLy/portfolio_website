import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi there! < br/>
      I'm Andrew
      </SectionTitle>
      <SectionText>
        Im a full stack developer with a deep passion for all things web development related!
      </SectionText>
      <Button onClick={() => window.location = ''}>Lets Connect!</Button>
    </LeftSection>
  </Section>
);

export default Hero;