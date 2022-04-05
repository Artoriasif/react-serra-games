import React from 'react';
import {HeaderPage} from "./styles";
import iconeGame from "../../assets/image/icone-game.png"
import {BsChevronDown} from 'react-icons/bs';

const Header: React.FC = () => {
  return(
    <HeaderPage>
      <div className="logo">
        <img src={iconeGame} alt="Icone de controle de um video game"/>
        <span>Serra</span>Games
      </div>

      <div className="opcoes">
        <div className="buttons">
          <div className="dropdown">
            <span>Categorias<BsChevronDown/></span>
            <div className="dropdown-content">
              <ul>
                <li>Acao</li>
                <li>Aventura</li>
                <li>FPS</li>
                <li>RPG</li>
                <li>Terror</li>
                <li>Plataforma</li>
                <li>Corrida</li>
                <li>Zombie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HeaderPage>
  )
}

export default Header;
