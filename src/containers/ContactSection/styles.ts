import styled from 'styled-components';

export const ContactSection = styled.section`
  min-height: 100vh;
`;

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
`;

const SectionContainer = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContactContainer = styled(SectionContainer)`
  /* row-gap: 2rem;
justify-items: center; */
  @media screen and (min-width: 768px) {
    justify-items: center;
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    width: 560px;
  }
`;

export const InputText = styled.input`
  width: 100%;

  margin-bottom: var(--mb-4);

  padding: 1rem;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  border: 1.5px solid var(--second-color);
  border-radius: 0.5rem;
  outline: none;
`;

export const InputEmail = styled.input`
  width: 100%;

  margin-bottom: var(--mb-4);

  padding: 1rem;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  border: 1.5px solid var(--second-color);
  border-radius: 0.5rem;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;

  margin-bottom: var(--mb-4);

  padding: 1rem;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  border: 1.5px solid var(--second-color);
  border-radius: 0.5rem;
  outline: none;
`;

export const InputButton = styled.input`
  margin-left: auto;

  padding: 0.75rem 2.5rem;

  display: block;

  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);

  color: #fff;
  background-color: var(--first-color);

  border: none;
  border-radius: 0.5rem;
  outline: none;

  cursor: pointer;

  :hover {
    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  }
`;
