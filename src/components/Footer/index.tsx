import React from "react";
import { Footer, Linkedin } from "./styles";
import logo from "../../assets/image/icone-game.png";


const Card = () => {
    return(
        <Footer>
            <div className="logo">
                <img src={logo} alt="icone da pagina"/>
            </div>
            <p className="descricao">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In inventore nostrum quidem veritatis, 
                similique necessitatibus nam numquam eaque dolores qui magni deleniti mollitia rerum cupiditate 
                molestias perferendis? Repellendus, cupiditate ex.
            </p>
            <div className="line">
               
            </div>
            <div className="sociais">
                <a href="#"><Linkedin/>Pedro</a>
                <a href="#"><Linkedin/>Marcos</a>
            </div>
            <div className="info">2022 © SerraGames</div>
        </Footer>
    )
}

export default Card;