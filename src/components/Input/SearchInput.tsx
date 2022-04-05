import React from "react";
import {SearchContainer, IconSearch} from './styles';

const SearchInput = ({ value, onChange }: any) => {
  function handleChange(event:any) {
    onChange(event.target.value);
  }

  return (
    <SearchContainer>
       <div className="input-container">
            <label><IconSearch/></label>
            <input type="search" value={value} onChange={handleChange} placeholder="Digite o nome do jogo..." />
       </div> 
     
    </SearchContainer>
  );
};

export default SearchInput;
