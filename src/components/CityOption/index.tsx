import { Link } from 'react-router-dom';
import testImg from '../../assets/test2.png';

import { Container } from "./styles";

export function CityOption() {
  return(
    <Container>
      <Link to="/details">
        <img src={testImg} alt="teste" />
        <div>
          <strong>Águas mornas</strong>
          <span>13 locais</span>
        </div>
      </Link>
    </Container>
  );
}