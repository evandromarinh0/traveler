import styled from 'styled-components';

export const Container = styled.div`
  width: 304px;
  height: 316px;
  background: #fff;
  border-radius: 20px;
  margin-bottom: 2rem;
  border: 1.17814px solid #DCE2E6;
  margin-left: 2rem;

  &:nth-of-type(2) {
    margin-top: 5rem;
  }

  &:nth-of-type(3) {
    margin-top: -5rem;
  }

  &:nth-of-type(5) {
    margin-top: -5rem;
  }

  > img {
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    > strong {
      color: var(--title);
      font-size: 1.375rem;
      font-weight: 600;
      font-family: Barlow;
      margin-bottom: 0.5rem;
    }

    > span {
      font-size: 1rem;
      font-family: Roboto;
      font-weight: 400;
      color: var(--text);
    }
  }
`;
