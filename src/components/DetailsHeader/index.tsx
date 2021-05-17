import { ClassifiedButton } from "../ClassifiedButton";

import logoImg from '../../assets/logo.svg';

import { Container } from "./styles";
import { BackButton } from "../BackButton";
import { Link } from "react-router-dom";

export function DetailsHeader() {
  return(
    <Container>
      <div>
        <div>
          <img src={logoImg} alt="Traveler" />
          <Link to="/explore">
            <BackButton />
          </Link>
        </div>

        <span>Cidade</span>

        <ClassifiedButton />
      </div>
    </Container>
  );
}