import { useRef, useState } from "react";

import { ClassifiedButton } from "../ClassifiedButton";
import { FiSearch } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, InputSearch } from "./styles";

export function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);

    if(inputRef.current?.value) {
      setIsFilled(true);
      setIsFocused(true);
    } else {
      setIsFilled(false);
      setIsFocused(false);
    }
  }

  return(
    <Container>
      <div>
        <img src={logoImg} alt="Traveler" />

        <InputSearch>

          { isFocused ? (
            <FiSearch size={20} color='#F25D27' />
          ) : (
            <FiSearch size={20} />
          )}
          
          <input ref={inputRef} onFocus={handleInputFocus} onBlur={handleInputBlur} placeholder='Qual cidade você procura?' />
        </InputSearch>

        <ClassifiedButton />
      </div>
    </Container>
  );
}