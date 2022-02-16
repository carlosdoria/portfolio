import styled from 'styled-components'

export const Main = styled.main`
  padding-top: var(--header-height);
`

export const Test = styled.div`
    height: 300px;
    width: 100px;
    background: red;
    visibility: hidden;
    /* opacity: 0; */
    animation-name: test-animation;
    animation-duration: 5s;
    cursor: pointer;

  &:hover {
    width: 200px;
    height: 1000px;

    background: green;
  }


@keyframes test-animation {
    from {
      height:0px;
    }

    to {
      height:2000px;
    }
}
`
