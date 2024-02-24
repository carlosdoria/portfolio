'use client'

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
import { Skill } from 'components/Skills/styles'

interface ISkill {
  name: string
  percentage: string
  link: string
}

export const SkillsSection = () => {
  const skillsFront = [
    {
      name: 'React',
      color: '#61DAFB',
      svg: <IconReact />
    },
    {
      name: 'TypeScript',
      color: '#3178C6',
      svg: <IconTypeScript />
    },
    {
      name: 'Next JS',
      color: '##000000',
      svg: <IconNextJs />
    },
    {
      name: 'Storybook',
      color: '#FF4785',
      svg: <IconStorybook />
    },
    {
      name: 'Bootstrap',
      color: '#7952B3',
      svg: <IconBootstrap />
    },

    {
      name: 'Styled Components',
      color: '#DB7093',
      svg: <IconStyledComponents />
    },
    {
      name: 'Tailwind CSS',
      color: '#06B6D4',
      svg: <IconTailwindCss />
    }
  ]

  const skillsBack = [
    {
      name: 'Node JS',
      color: '#339933',
      svg: <IconNodeJs />
    },
    {
      name: 'TypeScript',
      color: '#3178C6',
      svg: <IconTypeScript />
    },
    {
      name: 'Express',
      color: '#000000',
      svg: <IconExpress />
    },
    {
      name: 'Swagger',
      color: '#85EA2D',
      svg: <IconSwagger />
    },
    {
      name: 'Postgre SQL',
      color: '#4169E1',
      svg: <IconPostgre />
    },
    {
      name: 'Oracle',
      color: '#F80000',
      svg: <IconOracle />
    },
    {
      name: 'Mongo DB',
      color: '#47A248',
      svg: <IconMongoDB />
    }
  ]

  const skillsStudying = [
    {
      name: 'React Native',
      color: '#61DAFB',
      svg: <IconReact />
    },
    {
      name: 'Jest',
      color: '#C21325',
      svg: <IconJest />
    },
    {
      name: 'Python',
      color: '#3776AB',
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
                  <Skill color={skill.color} key={skill.name}>
                    {skill.svg}
                    {skill.name}
                  </Skill>
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
                  <Skill color={skill.color} key={skill.name}>
                    {skill.svg}
                    {skill.name}
                  </Skill>
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
                  <Skill color={skill.color} key={skill.name}>
                    {skill.svg}
                    {skill.name}
                  </Skill>
                ))}
              </S.SkillsWrapper>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </S.Content>
    </Section>
  )
}
