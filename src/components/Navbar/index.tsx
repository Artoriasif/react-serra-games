import React from 'react';
import {HeaderPage} from "./styles";
import iconeGame from "../../assets/image/icone-game.png"
import {AiOutlineSearch} from "react-icons/ai";


const Header: React.FC = () => {
  return(
    <HeaderPage>
      <div className="logo">
        <img src={iconeGame} alt="Icone de controle de um video game"/>
        <span>Serra</span>Games
      </div>
       <div className="buttons">
        <div className="dropdown">
          <span>Categorias</span>
          <div className="dropdown-content">
            <button>Acao</button>
            <button>RPG</button>
            <button>Aventura</button>
            <button>Corrrida</button>
            <button>FPS</button>
          </div>
        </div>
      </div>
      <div className="search">
        <label><AiOutlineSearch/></label>
        <input type='text' placeholder='Digite o nome do jogo'/>
      </div>
    </HeaderPage>
  )
}

export default Header;
