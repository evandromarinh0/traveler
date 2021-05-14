import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  border-bottom: 1px solid #DCE2E6;


  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const InputSearch = styled.div`
  width: 416px;
  height: 48px;
  background: var(--background);
  border: 1px solid #DCE2E6;
  border-radius: 10px;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  &::placeholder {
    color: var(--light-text);
  }

  > svg {
    margin-right: 1rem;
  }

  > input {
    border: 0;
    outline: 0;
    background: transparent;
    flex: 1;
    color: var(--title);
  }

`;