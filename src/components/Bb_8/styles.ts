import styled from 'styled-components'

export const Artboard = styled.main`
  position: relative;

  width: 800px;
  height: 600px;

  background: var(--bb_8-bg);
  box-shadow: 0px 3px 20px rgba(0,0,0,0.2);
  border-radius: 3px;
  margin: 50px auto;
  border: 20px white solid;
  `

export const bb_8 = styled.div`
  position: absolute;
  top: 222px;
  left: 180px;

  width: 13.75rem;
  height: 13.75rem;

  background: fade-out(pink, 0.5);
`

export const Body = styled.div`
  position: absolute;

  width: 13.75rem;
  height: 13.75rem;

  background: var(--bb_8-base);
  border-radius: 50%;
  border: solid 8px var(--bb_8-stroke);

  overflow: hidden;
`

export const Circle = styled.div`
  position: absolute;

  width: 7.5rem;
  height: 7.5rem;

  border: 8px solid var(--bb_8-stroke);
  background-color: var(--bb_8-orange);
  border-radius: 50%;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    height: 35%;
    width: 35%;

    display: block;

    background: var(--bb_8-base);

    border: 8px solid var(--bb_8-stroke);
    border-radius: 50%;

    transform: translate(-50%, -50%);
  }

  :nth-child(3) {
    top: 0;
    left: -40px;
  }
  :nth-child(4) {
    top: 123px;
    left: 90px;
  }
  :nth-child(5) {
    height: 300px;
    width: 300px;
    left: 120px;
    top: -180px;
  }
`

export const Doty = styled.div`
  position: absolute;

  height: 18px;
  width: 18px;

  background: var(--bb_8-stroke);

  border-radius: 50%;

  :nth-child(1) {
    top: 79px;
    left: 113px;
  }
  :nth-child(2) {
    top: 145px;
    left: 40px;
  }
`

export const Line = styled.div`
  position: absolute;

  height: 8px;
  width: 100px;
  background: var(--bb_8-stroke);


  :nth-child(1) {
    transform: rotate(40deg);
    top: 40px;
    left: -70px;
  }
  :nth-child(2) {
    transform: rotate(160deg);
    top: -45px;
    left: -60px;
  }
  :nth-child(3) {
    transform: rotate(-60deg);
    top: 25px;
    left: 10px;
  }
`

export const BodyShadowCrop = styled.div`
  width: 220px;
  height: 220px;
  position: absolute;
  border-radius: 50%;
  border: solid 8px var(--bb_8-stroke);
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
`

export const BodyShadow = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 60px rgba(0,0,0,0.4);
  left: -50px;
  top: -20px;
`

export const Head = styled.div``

// export const Container = styled.main``

// export const Container = styled.main``
