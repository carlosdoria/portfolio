import styled from 'styled-components'

interface IPercentage {
  percentage: string;
}

export const Container = styled.div`
  position: relative;

  margin-bottom: var(--mb-4);
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: var(--font-semi);

  border-radius: 0.5rem;
  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);
`

export const DivName = styled.div`
  display: flex;
  align-items: center;
`

export const SkillIcon = styled.img`
  height: 2rem;
  width: 2rem;

  margin-right: var(--mb-2);

  color: var(--first-color);
`

export const SkillName = styled.span``

export const SkillPercentage = styled.span``

export const SkillBar = styled.div<IPercentage>`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: var(--z-back);

  height: 0.25rem;
  width: ${props => props.percentage};

  background-color: var(--first-color);
  border-radius: 0.5rem;
`
