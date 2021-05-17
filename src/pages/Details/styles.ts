import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > img {
    width: 100%;
    max-height: 340px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const CityInformation = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-around;
`;

export const CityDescription = styled.div`
  max-width: 500px;

  strong {
    display: block;
    font-family: Barlow;
    font-weight: 600;
    font-size: 3.375rem;
    color: var(--title);
    margin-bottom: 2rem;
  }

  span {
    display: block;
    font-size: 1.375;
    line-height: 1.875rem;
    color: var(--title);
    margin-bottom: 2rem;
    max-width: 430px;
  }
  
  p {
    display: block;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text);
  }
`;

export const CityItinerary = styled.div`
  display: flex;
`;

export const Sightseeing = styled.div`
  width: 160px;
  height: 268px;
  border-radius: 16px;
  border: 1px solid #dce2e6;
  background: #fff;

  display: flex;
  flex-direction: column;

  > div {
    height: 35%;
    padding: 2rem 2rem 4.5rem 2rem;

    > svg {
      color: var(--orange);
    }
  }

  > div + div {
    height: 65%;
    width: 100%;
    padding: 2rem;
    border-top: 1px solid #dce2e6;

    > strong {
      display: block;
      color: var(--title);
      font-family: Barlow;
      font-weight: 600;
      font-size: 2.5rem;
    }

    > span {
      display: block;
      margin-top: 1rem;
    }
  }
`;

export const Food = styled.div`
  width: 160px;
  height: 268px;
  border-radius: 16px;
  border: 1px solid #dce2e6;
  background: #fff;
  margin-left: 1.5rem;

  display: flex;
  flex-direction: column;

  > div {
    height: 35%;
    padding: 2rem 2rem 4.5rem 2rem;

    > svg {
      color: var(--orange);
    }
  }

  > div + div {
    height: 65%;
    width: 100%;
    padding: 2rem;
    border-top: 1px solid #dce2e6;

    > strong {
      display: block;
      color: var(--title);
      font-family: Barlow;
      font-weight: 600;
      font-size: 2.5rem;
    }

    > span {
      display: block;
      margin-top: 1rem;
    }
  }
`;

export const Events = styled.div`
  width: 160px;
  height: 268px;
  border-radius: 16px;
  border: 1px solid #dce2e6;
  background: #fff;
  margin-left: 1.5rem;

  display: flex;
  flex-direction: column;

  > div {
    height: 35%;
    padding: 2rem 2rem 4.5rem 2rem;

    > svg {
      color: var(--orange);
    }
  }

  > div + div {
    height: 65%;
    width: 100%;
    padding: 2rem;
    border-top: 1px solid #dce2e6;

    > strong {
      display: block;
      color: var(--title);
      font-family: Barlow;
      font-weight: 600;
      font-size: 2.5rem;
    }

    > span {
      display: block;
      margin-top: 1rem;
    }
  }
`;

export const TopRated = styled.div`
  margin-top: 6rem;
  padding: 0 2rem 0 4rem;

  > strong {
    font-family: Barlow;
    font-weight: 600;
    color: var(--title);
    font-size: 2.125rem;
  }
`;

export const TopRatedItinerary = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Remarkable = styled.div`
  display: flex;
  margin-top: 6rem;
  padding: 0 4.5rem 0 4rem;

  > div {
    border-radius: 16px 0 0 16px;
    border: 1px solid #cde2e6;
    padding: 4rem 2rem 2rem 3rem;

    > div {
      background: var(--orange);
      height: 2rem;
      width: 7.4375rem;
      border-radius: 100px;

      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      > span {
        margin-left: 0.4rem;
      }
    }

    > strong {
      display: block;
      font-size: 2.25rem;
      color: var(--title);
      font-weight: 600;
      font-family: Barlow;
      margin-top: 2rem;
    }

    > p {
      display: block;
      margin-top: 1rem;
      line-height: 1.6rem;
    }
  }
`;

export const FullItinerary = styled.div`
  margin-top: 6rem;
  padding: 0 4rem;
  
  > div {
    display: flex;
    justify-content: space-between;

    > strong {
      font-weight: 600;
      font-family: Barlow;
      font-size: 2.125rem;
      color: var(--title);
    }
  }
`;

export const UnderlineButtons = styled.div`
  height: 3rem;
  border-bottom: 1px solid #DCE2E6;

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
`;

export const ItinerarySortByType = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.75rem;
  }
`;

export const Wrapper = styled.div`
  padding: 0 0 2rem 0;
`;