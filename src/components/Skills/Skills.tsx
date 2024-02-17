import React, { useState } from 'react';
import Container from '_components/common/Container';
import Accordion from './components/Accordion';
import { skills } from 'src/__fixtures__/skills';
import Image from 'next/image';

const Skills = () => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <Container className="Skills" title={'Compétences'} id="competences">
      <div className="flex flex-col items-center w-full justify-between">
        {skills.map((category) => (
          <Accordion
            key={category.id}
            id={category.id}
            title={category.name}
            isOpen={expanded === category.id}
            setExpanded={setExpanded}
          >
            {category.skills.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex 2xs:flex-col items-center fill-white gap-2"
                >
                  <Image
                    className="fill-white"
                    alt={`logo ${item.title}`}
                    src={item.logo}
                    width={20}
                  />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </Accordion>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
