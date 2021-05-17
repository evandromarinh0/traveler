import { Container, Rate } from "./styles";

import rateImg from '../../assets/rateImg.png';
import starIcon from '../../assets/star.svg';
import { FiCoffee } from "react-icons/fi";

export function TopRatedItem() {
  return(
    <Container>
      <div>
        <img src={rateImg} alt="Top" />
        <strong>Doce & Companhia</strong>
      </div>
      <div>
        <span>Comida e Bebida</span>
        <FiCoffee size={24} />
      </div>
      <Rate>
        <div>
          <img src={starIcon} alt="Estrela" />
        </div>
        <span>4.7</span>
      </Rate>
    </Container>
  );
}