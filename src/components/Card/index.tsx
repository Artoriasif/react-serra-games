import React, {useState} from "react";
import {CardContainer, BuyIcon, InfoIcon, ContainerIcon} from "./styles";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

interface GameProps{
    title: string;
    image: string;
    price: number;
    category: string;
    platform: string;
    describe: string;
}

const Card = ({image, title, price, category, platform, describe}: GameProps) => {
  
    const [modalIsOpen, setIsOpen] = React.useState(false);
     
    function openModal() {
    setIsOpen(true);
    }


  function closeModal() {
    setIsOpen(false);
  }

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
                            <button onClick={openModal}> <InfoIcon/> </button>        
                        </div>    
                    </ContainerIcon>
                </div>
            </div>    
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h1>teste</h1>
                <p>{describe}</p>
            </ReactModal>  
        </CardContainer>
        
    )
}

export default Card;