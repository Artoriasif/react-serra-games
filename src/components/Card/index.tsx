import React from "react";
import {CardContainer, BuyIcon, InfoIcon, ContainerIcon} from "./styles";



interface GameProps{
    title: string;
    image: string;
    price: number;
    category: string;
    platform: string;

}



const Card = ({image, title, price, category, platform}: GameProps) => {
    return(
        <CardContainer>
            <div className="container">
                <div>
                    <img src={image} alt="capa do jogo"/>
                </div>
                <div className="info">
                    <p className="titulo">{title}</p>
                    <div className="cards">
                        <p className="genre">{category}</p>
                        <p className="platform">{platform}</p>
                    </div> 
                    <ContainerIcon>
                        <p className="price"><span>R$</span>{price}</p>
                        <div className="icons">
                            <BuyIcon/>
                            <InfoIcon/>
                        </div>         
                    </ContainerIcon>
                </div>
            </div>    
        </CardContainer>
        
    )
}

export default Card;