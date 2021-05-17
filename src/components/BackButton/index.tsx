import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton() {
  return(
    <Container>
      <FiArrowLeft size={20} color='#a0acb3' />
    </Container>
  ); 
}