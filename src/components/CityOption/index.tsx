import testImg from '../../assets/test2.png';

import { Container } from "./styles";

export function CityOption() {
  return(
    <Container>
        <img src={testImg} alt="teste" />
        <div>
          <strong>Águas mornas</strong>
          <span>13 locais</span>
        </div>
    </Container>
  );
}