import styled from 'styled-components';

export const Header = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-height: 640px;

    > strong {
      font-size: 5rem;
      font-weight: 600;
      line-height: 4.625rem;
      font-family: Barlow;
      color: var(--title);
      max-width: 320px;
      display: block;

      margin-bottom: 2rem;
    }

    > p {
      font-size: 1.25rem;
      line-height: 1.875rem;
      max-width: 320px;
      display: block;
      margin-bottom: 4rem;
    }

    > a {
      > button {
        height: 79px;
        width: 329px;
        background: var(--orange);
        border-radius: 10px;
        color: #fff;
        font-size: 1.25rem;
        transition: 0.2s all;
        border: 0;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  > div + div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
