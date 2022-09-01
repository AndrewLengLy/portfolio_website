import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <SectionText>
      Ive worked with many of the most modern front-end technolgies to date
    </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          HTML <br />
          CSS <br />
          JavaScript <br/>
          React <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Node and <br/> 
          Databases
        </ListParagraph>
      </ListContainer>
    </ListItem><ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>UX/UI</ListTitle>
        <ListParagraph>
          Figma <br />
          Adobe XD <br />
          Miro <br />
          Zeplin <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
