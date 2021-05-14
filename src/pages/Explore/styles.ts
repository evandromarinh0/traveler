import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;

    > strong {
      font-weight: 600;
      font-family: Barlow;
      font-size: 2.125rem;
      color: var(--title);
    }

    > div {
      border-bottom: 1px solid #DCE2E6;
      height: 3rem;

      button {
        border: 0;
        background: transparent;
        color: var(--text);
        height: 3rem;

        & + button {
          margin-left: 2rem;
        }

        &.active {
          color: var(--title);
          font-weight: 700;
          border-bottom: 2px solid var(--orange);
        }
      }
    }
  }
`;

export const ExploreCities = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  padding: 3rem 1rem 1rem 1rem;
`;