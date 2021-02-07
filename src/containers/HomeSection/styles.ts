import styled from 'styled-components'

export const HomeSection = styled.section`
  height: 100vh;

  row-gap: 1rem;

  max-width: 1024px;
  width: calc(100% - 2rem);

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`

export const HomeData = styled.div`
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`

export const HomeTitle = styled.h1`
  margin-top: var(--header-height);
  margin-bottom: var(--mb-5);

  font-size: var(--large-font-size);

  @media screen and (min-width: 520px) {
    width: 50%;
  }

  @media screen and (min-width: 1020px) and (min-height: 500px) {
    margin-top: 0;

    width: 100%;
  }

  @media screen and (min-width: 925px) and (min-height: 875px) {
    width: 100%;
  }
`

export const HomeTitleName = styled.span`
  color: var(--first-color);
`

export const HomeContactLink = styled.a`
  padding: 0.75rem 2.5rem;

  display: inline-block;

  color: #fff;
  font-weight: var(--font-semi);
  background-color: var(--first-color);
  border-radius: 0.5rem;

  :hover {
    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  }

  @media screen and (max-width: 425px) and (max-height: 490px) {
    width: 60%;

    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`

export const HomeDivSocialMedias = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) and (max-height: 490px) {
    width: 60%;

    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }
`

export const Icon = styled.a`
  width: max-content;

  margin-bottom: var(--mb-2);

  font-size: 1.5rem;
  color: var(--second-color);

  :hover {
    color: var(--first-color);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: var(--mb-4);
    font-size: 2rem;
  }
`

export const HomeDivImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 60%;

  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 425px) and (max-height: 490px) {
    visibility: hidden;
  }

  @media screen and (min-height: 575px) {
    width: 70%;
    max-width: 320px;
  }

  @media screen and (min-width: 768px) and (min-height: 650px) {
    bottom: 7%;

    max-width: 420px;
  }

  @media screen and (min-width: 1045px) and (min-height: 800px) {
    max-width: none;
  }
`

export const HomeImage = styled.img`
  border-radius: 19.3rem 7.5rem 9.3rem 5.6rem;
`
