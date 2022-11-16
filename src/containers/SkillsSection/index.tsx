import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { IoIosArrowDown } from 'react-icons/io'

import * as S from './styles'
import {
  IconBootstrap,
  IconNextJs,
  IconStyledComponents,
  IconTailwindCss,
  IconTypeScript,
  Section,
  SectionTitle,
  IconStorybook,
  IconReact,
  IconNodeJs,
  IconExpress,
  IconSwagger,
  IconOracle,
  IconPostgre,
  IconMongoDB,
  IconHeroku,
  IconVercel,
  IconNetlify,
  IconJest,
  IconPython
} from 'components'

interface ISkill {
  name: string
  percentage: string
  link: string
}

export const SkillsSection = () => {
  const skillsFront = [
    {
      name: 'React',
      svg: <IconReact />
    },
    {
      name: 'TypeScript',
      svg: <IconTypeScript />
    },
    {
      name: 'Next JS',
      svg: <IconNextJs />
    },
    {
      name: 'Storybook',
      svg: <IconStorybook />
    },
    {
      name: 'Bootstrap',
      svg: <IconBootstrap />
    },

    {
      name: 'Styled Components',
      svg: <IconStyledComponents />
    },
    {
      name: 'Tailwind CSS',
      svg: <IconTailwindCss />
    }
  ]

  const skillsBack = [
    {
      name: 'Node JS',
      svg: <IconNodeJs />
    },
    {
      name: 'TypeScript',
      svg: <IconTypeScript />
    },
    {
      name: 'Express',
      svg: <IconExpress />
    },
    {
      name: 'Swagger',
      svg: <IconSwagger />
    },
    {
      name: 'Postgre SQL',
      svg: <IconPostgre />
    },
    {
      name: 'Oracle',
      svg: <IconOracle />
    },
    {
      name: 'Mongo DB',
      svg: <IconMongoDB />
    }
  ]

  const skillsStudying = [
    {
      name: 'React Native',
      svg: <IconReact />
    },
    {
      name: 'Jest',
      svg: <IconJest />
    },
    {
      name: 'Python',
      svg: <IconPython />
    }
  ]

  return (
    <Section id='skills'>
      <SectionTitle title='Skills e ferramentas' />

      <S.Content>
        <Accordion.Root
          className='AccordionRoot'
          type='single'
          defaultValue='frontend'
          collapsible
        >
          <Accordion.Item className='AccordionItem' value='frontend'>
            <Accordion.Header className='AccordionHeader'>
              <Accordion.Trigger>
                <S.SkillsSubtitle>
                  Front-end
                  <IoIosArrowDown />
                </S.SkillsSubtitle>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className='AccordionContent'>
              <S.SkillsWrapper>
                {skillsFront.map((skill, index) => (
                  <S.Skill key={skill.name}>
                    {skill.svg}
                    {skill.name}
                  </S.Skill>
                ))}
              </S.SkillsWrapper>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <Accordion.Root
          className='AccordionRoot'
          type='single'
          defaultValue='backend'
          collapsible
        >
          <Accordion.Item className='AccordionItem' value='backend'>
            <Accordion.Header className='AccordionHeader'>
              <Accordion.Trigger>
                <S.SkillsSubtitle>
                  Back-end
                  <IoIosArrowDown />
                </S.SkillsSubtitle>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className='AccordionContent'>
              <S.SkillsWrapper>
                {skillsBack.map((skill, index) => (
                  <S.Skill key={skill.name}>
                    {skill.svg}
                    {skill.name}
                  </S.Skill>
                ))}
              </S.SkillsWrapper>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <Accordion.Root
          className='AccordionRoot'
          type='single'
          defaultValue='studying'
          collapsible
        >
          <Accordion.Item className='AccordionItem' value='studying'>
            <Accordion.Header className='AccordionHeader'>
              <Accordion.Trigger>
                <S.SkillsSubtitle>
                  Estudando
                  <IoIosArrowDown />
                </S.SkillsSubtitle>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className='AccordionContent'>
              <S.SkillsWrapper>
                {skillsStudying.map((skill, index) => (
                  <S.Skill key={skill.name}>
                    {skill.svg}
                    {skill.name}
                  </S.Skill>
                ))}
              </S.SkillsWrapper>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </S.Content>
    </Section>
  )
}
