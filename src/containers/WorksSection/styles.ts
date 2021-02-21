import styled from 'styled-components'

export const SectionTitle = styled.h2`
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-top: var(--mb-3);
  margin-bottom: var(--mb-4);
  text-align: center;

  :after {
    position: absolute;
    content: '';
    width: 64px;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2.4rem;
    background-color: var(--first-color);
  }
  @media screen and (min-width: 600px) {
    margin-bottom: var(--mb-6);

    :after {
      width: 100px;
      top: 3.2rem;
    }
  }
`

export const WorksSection = styled.section`
  min-height: 100vh;
`

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
  top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cup = styled.div`
  position: relative;
  height: 300px;
  width: 280px;

  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
`
export const Top = styled.div`
  position: absolute;
  top: -30px;
  left: 0;

  height: 60px;
  width: 100%;

  border-radius: 50%;
  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
`

export const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;

  height: 50px;
  width: calc(100% - 20px);

  background: linear-gradient(to left, #f9f9f9, #d9d9d9);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
`

export const Tea = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  height: 100%;
  width: 100%;

  background: linear-gradient(#c57e65, #e28462);
  border-radius: 50%;
`

export const Handle = styled.div`
  position: absolute;
  right: -70px;
  top: 30px;

  height: 180px;
  width: 160px;

  border: 25px solid #dcdcdc;
  border-left: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-radius: 50%;
  transform: rotate(42deg);
`

export const Plate = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;

  transform: translateX(-50%);
  height: 200px;
  width: 500px;

  background: linear-gradient(to right, #f9f9f9, #e7e7e7);
  border-radius: 50%;
  box-shadow: 0 35px 35px rgba(0, 0, 0, .2);

  ::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;

    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }

  ::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;

    background: radial-gradient(rgba(0, 0, 0, .2) 25% ,transparent, transparent);
    border-radius: 50%;
  }
`

export const Vapour = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  padding: 0 20px;
`

export const Span = styled.span`
  position: relative;
  bottom: 50px;

  height: 120px;
  min-width: 8px;

  margin: 0 2px 50px;

  display: block;

  background: #fff;
  border-radius: 50%;

  animation: animate 5s linear infinite;
  filter: blur(8px);
  animation-delay: calc(${props => props.n} * 0.5s);

  @keyframes animate {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    50% {
      transform: translateY(-150px) scaleX(5);
    }
    95% {
      opacity: 0;
    }
    100% {
      transform: translateY(-250px) scaleX(10);
      opacity: 0;
    }
  }
`
