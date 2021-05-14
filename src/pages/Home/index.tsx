import { HomeCities } from "../../components/HomeCities";
import { ClassifiedButton } from '../../components/ClassifiedButton';

import logoImg from '../../assets/logo.svg';

import { Container, Header, Content } from "./styles";
import { Link } from "react-router-dom";

export function Home() {
  return(
    <Container>
      <Header>
        <div>
          <img src={logoImg} alt="Traveler" />
          <ClassifiedButton />
        </div>
      </Header>

      <Content>
        <div>
          <strong>Viva uma grande aventura</strong>
          <p>Descubra locais incríveis para se visitar em cidades maravilhosas de Santa Catarina.</p>
          <Link to='/explore'>
            <button type='button'>Descobrir todos os lugares</button>
          </Link>
        </div>

        <div>
          <HomeCities />
          <HomeCities />
          <HomeCities />
          <HomeCities />
          <HomeCities />
        </div>
      </Content>
    </Container>
  );
}