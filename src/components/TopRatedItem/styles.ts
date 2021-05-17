import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2.9rem;
  width: 256px;
  height: 307px;
  border-radius: 16px;
  border: 1px solid #dce2e6;
  background: #fff;

  position: relative;

  > div {
    > img {
      object-fit: cover;
      width: 100%;
    }

    > strong {
      padding: 1.5rem 1rem;
      display: block;
      color: var(--title);
      border-bottom: 1px solid #dce2e6;
    }
  }

  > div + div {
    padding: 1.5rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      color: var(--orange);
    }
  }
`;

export const Rate = styled.div`
  width: 54px;
  height: 90px;
  border-radius: 16px;
  background: var(--orange);

  flex-direction: column;

  position: absolute;
  top: -15px;
  left: 7.5%;

  > span {
    display: block;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: Barlow;
    color: #fff;
  }
`;