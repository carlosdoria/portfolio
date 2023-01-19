import styled from 'styled-components'

type IMist = {
  value: number;
}

export const Container = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: end;
`

export const Cup = styled.div`
  position: relative;

  height: 18.75rem;
  width: 17.5rem;

  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
`

export const Top = styled.div`
  position: absolute;
  top: -30px;
  left: 0;

  height: 3.75rem;
  width: 100%;

  background: linear-gradient(to right, #f9f9f9, #d9d9d9);
  border-radius: 50%;
`

export const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;

  height: 3.125rem;
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

  background: linear-gradient(to left, #242222, #242222);
  border-radius: 50%;
`

export const Handle = styled.div`
  position: absolute;
  top: 25px;
  right: -70px;

  height: 11.25rem;
  width: 10rem;

  border: 25px solid #dcdcdc;
  border-radius: 50%;
  border-bottom: 25px solid transparent;
  border-left: 25px solid transparent;

  transform: rotate(42deg);
`

export const Plate = styled.div`
  position: absolute;
  bottom: -50px;
  left: -350px;

  height: 12.5rem;
  width: 31.25rem;

  background: linear-gradient(to right, #f9f9f9, #e7e7e7);

  border-radius: 50%;
  box-shadow: 0 35px 35px rgba(0, 0, 0, .2);

  transform: translateX(50%);

  ::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;

    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }

  ::after {
    content: '';
    position: absolute;
    top: 30px;
    right: 30px;
    bottom: 30px;
    left: 30px;

    background: radial-gradient(rgba(0, 0, 0, .2) 25%, transparent, transparent);

    border-radius: 50%;
  }
`

export const Vapour = styled.div`
  position: relative;
  z-index: 1;

  padding: 0 20px;

  display: flex;
`

export const Mist = styled.div<IMist>`
  position: relative;
  bottom: 50px;

  height: 7.5rem;
  min-width: .5rem;

  margin: 0 2px 50px;

  display: block;

  background: #fff;

  border-radius: 50%;

  animation: disperse 3s linear infinite;
  opacity: 0;
  filter: blur(8px);
  animation-delay:${ props => `calc( ${props.value} * -0.5s)` }  ;

  @keyframes disperse {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    50% {
      transform: translateY(-100px) scaleX(5);
    }

    90% {
      opacity: 0;
    }

    100% {
      transform: translateY(-200px) scaleX(10);
    }
  }
`
