import React from "react";
import {CardContainer, BuyIcon, InfoIcon, ContainerIcon} from "./styles";


export interface GameProps{
    image: string;
    title: string;
    price: number;
    genre: string;
}

const Card = ({image, title, price, genre}: GameProps) => {
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
                            <p className="genre">{genre}</p>
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