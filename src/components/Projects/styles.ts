import styled from 'styled-components'

export const WorksContainer = styled.div`
  width: calc(100% - 2rem);
  max-width: 1024px;

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  row-gap: 2rem;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Container = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);
  overflow: hidden;
`
export const Span = styled.span`
  transition: .5s;

  :nth-child(1) {
    position:absolute;
    top: 0;
    left: 0;

    height: 3px;
    width: 100%;

    background: linear-gradient(to right, transparent , #1779ff);
    animation: animate1 1.2s linear infinite;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%)
    }
    100% {
      transform: translateX(100%)
    }
  }

  :nth-child(2) {
    position:absolute;
    top: 0;
    right: 0;

    height: 100%;
    width: 3px;

    background: linear-gradient(to bottom, transparent , #1779ff);
    animation: animate2 1.2s linear infinite;
    animation-delay: 1.8s;
  }

  @keyframes animate2 {
    0% {
      transform: translateY(-100%)
    }
    100% {
      transform: translateY(100%)
    }
  }

  :nth-child(3) {
    position:absolute;
    bottom: 0;
    left: 0;

    height: 3px;
    width: 100%;

    background: linear-gradient(to left, transparent , #1779ff);
    animation: animate3 1.2s linear infinite;
  }

  @keyframes animate3 {
    0% {
      transform: translatex(100%)
    }
    100% {
      transform: translatex(-100%)
    }
  }

  :nth-child(4) {
    position:absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 3px;

    background: linear-gradient(to top, transparent , #1779ff);
    animation: animate4 1.2s linear infinite;
    animation-delay: 1.8s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%)
    }
    100% {
      transform: translateY(-100%)
    }
  }
`

export const WorkImage = styled.img`
  transition: 1.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
`
