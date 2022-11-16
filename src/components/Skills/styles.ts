import styled from 'styled-components'

interface IPercentage {
  percentage: string
}

export const Container = styled.li`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: var(--font-semi);

  border-radius: 0.5rem;
  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);

  font-size: 1.4rem;
`

export const DivName = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
`

export const SkillIcon = styled.img`
  height: 2rem;
  width: 2rem;

  color: ${(props) => props.theme.colors.primary};
`

export const SkillName = styled.span``

export const SkillPercentage = styled.span``

export const SkillBar = styled.div<IPercentage>`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 0.25rem;
  width: ${(props) => props.percentage};

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
`
