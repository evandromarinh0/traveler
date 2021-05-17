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

    > div {
      display: flex;
      align-items: center;
    }

    > span {
      font-family: Barlow;
      font-weight: 500;
      font-size: 1.325rem;
      color: var(--light-text);
    }
  }
`;