import styled from 'styled-components';

export const Container = styled.div`
  width: 295px;
  height: 280px;
  background: #fff;
  border-radius: 16px;
  margin-bottom: 2rem;
  border: 1.175px solid #DCE2E6;

  > img {
    border-radius: 16px 16px 0 0;
    width: 100%;
    height: 177px;
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
