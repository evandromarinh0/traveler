import { DetailsHeader } from "../../components/DetailsHeader";
import { TopRatedItem } from "../../components/TopRatedItem";
import { FiCalendar, FiCamera, FiCoffee, FiInfo } from "react-icons/fi";

import imgDetail from '../../assets/imgdetail.png';
import remarkImg from '../../assets/remark.png';

import { 
  Container,
  Content,
  CityInformation,
  CityDescription,
  CityItinerary,
  Sightseeing,
  Food,
  Events,
  TopRated,
  TopRatedItinerary,
  Remarkable,
  FullItinerary,
  UnderlineButtons,
  ItinerarySortByType,
  Wrapper
} from "./styles";

export function Details() {
  return(
    <Container>
      <DetailsHeader />
      <img src={imgDetail} alt="Imagem de Detalhe" />

      <Content>
        <CityInformation>
          <CityDescription>
            <strong>Florianópolis</strong>
            <span>Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.</span>
            <p>É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.</p>
          </CityDescription>

          <CityItinerary>
            <Sightseeing>
              <div>
                <FiCamera size={40} />
              </div>
              <div>
                <strong>67</strong>
                <span>Pontos Turísticos</span>
              </div>
            </Sightseeing>
            <Food>
              <div>
                <FiCoffee size={40} />
              </div>
              <div>
                <strong>20</strong>
                <span>Pontos Turísticos</span>
              </div>
            </Food>
            <Events>
              <div>
                <FiCalendar size={40} />
              </div>
              <div>
                <strong>11</strong>
                <span>Pontos Turísticos</span>
              </div>
            </Events>
          </CityItinerary>
        </CityInformation>

        <TopRated>
          <strong>Top avaliados</strong>
          <TopRatedItinerary>
            <TopRatedItem />
            <TopRatedItem />
            <TopRatedItem />
            <TopRatedItem />
          </TopRatedItinerary>
        </TopRated>

        <Remarkable>
          <div>
            <div>
              <FiInfo />
              <span>Destaque</span>
            </div>
            <strong>Praia dos ingleses</strong>
            <p>
              Uma parte do paraíso na terra. Frequentemente com águas
              claras em tons verdes e azuis. Um dos locais mais preferidos
              por turistas e viajantes.
            </p>
          </div>
          <img src={remarkImg} alt="Destaque" />
        </Remarkable>

        <FullItinerary>
          <div>
            <strong>Selecione uma cidade</strong>
            <UnderlineButtons>
              <button className='active' type='button'>Todos</button>
              <button type='button'>Pontos turísticos</button>
              <button type='button'>Comida & Bebida</button>
              <button type='button'>Eventos organizados</button>
            </UnderlineButtons>
          </div>

          <ItinerarySortByType>
            <Wrapper>
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
              <TopRatedItem />
            </Wrapper>
          </ItinerarySortByType>
        </FullItinerary>
      </Content>
    </Container>
  );
}