import React from "react";
import {CardContainer, BuyIcon, InfoIcon, ContainerIcon} from "./styles";



interface GameProps{
    title: string;
    image: string;
    price: number;
    category: string;

}



const Card = ({image, title, price, category}: GameProps) => {
    return(
        <CardContainer>
            <div className="container">
                <div>
                    <img src={image} alt="capa do jogo"/>
                </div>
                <div className="info">
                    <p className="titulo">{title}</p>
                    <div className="cards">
                        <p className="price"><span>R$</span>{price}</p>
                        <p className="genre">{category}</p>

                    </div> 
                    <ContainerIcon>
                        <BuyIcon/>
                        <InfoIcon/>
                    </ContainerIcon>
                </div>
            </div>    
        </CardContainer>
        
    )
}

export default Card;