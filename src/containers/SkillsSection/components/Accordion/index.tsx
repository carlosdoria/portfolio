import * as RadixAccordion from '@radix-ui/react-accordion'
import { Skill } from 'components'
import { IoIosArrowDown } from 'react-icons/io'
import * as S from './styles'
import { ISkill } from 'containers/SkillsSection'

interface AccordionProps {
  list: Array<ISkill>
  title: string
}

export function Accordion({ title, list }: AccordionProps) {
  return (
    <RadixAccordion.Root type='single' defaultValue='frontend' collapsible>
      <RadixAccordion.Item value='frontend'>
        <RadixAccordion.Header className='AccordionHeader'>
          <RadixAccordion.Trigger className='AccordionTrigger'>
            <S.SkillTitle>
              {title}
              <IoIosArrowDown className='AccordionIcon' aria-hidden />
            </S.SkillTitle>
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>

        <RadixAccordion.Content className='AccordionContent'>
          <S.SkillsWrapper>
            {list.map((skill) => (
              <Skill key={skill.name} icon={skill.svg} text={skill.name} />
            ))}
          </S.SkillsWrapper>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  )
}
