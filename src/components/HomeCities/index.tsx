import testImg from '../../assets/test.png';
import { Container } from './styles';

export function HomeCities() {
  return(
    <Container>
      <img src={testImg} alt="Floripa" />
      <div>
        <strong>Florianópolis</strong>
        <span>98 locais</span>
      </div>
    </Container>
  );
}