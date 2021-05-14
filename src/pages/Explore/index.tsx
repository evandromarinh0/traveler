import { FiChevronDown } from "react-icons/fi";
import { CityOption } from "../../components/CityOption";
import { Header } from "../../components/Header";

import { Container, Content, ExploreCities } from "./styles";


export function Explore() {
  return(
    <Container>
      <Header />
      <Content>
        <div>
          <strong>Selecione uma cidade</strong>
          <div>
            <button className='active' type='button'>Todas</button>
            <button type='button'>Mais acessadas</button>
            <button type='button'>A - Z <FiChevronDown color='#F25D27' size={10} /> </button>
          </div>
        </div>
      </Content>
      <ExploreCities>
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
        <CityOption />
      </ExploreCities>
    </Container>
  );
}