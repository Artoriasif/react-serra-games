import React from "react";
import {CardContainer, BuyIcon, InfoIcon, ContainerIcon, Reactmodal} from "./styles";

import "./stylesModal.css";
import { AiFillCloseCircle } from "react-icons/ai";



Reactmodal.setAppElement('#root')

interface GameProps{
    title: string;
    image: string;
    price: number;
    category: string;
    platform: string;
    describe: string;
    storage: number;
    year: number;
}

const Card = ({image, title, price, category, platform, describe, storage, year}: GameProps) => {
  
    const [modalIsOpen, setIsOpen] = React.useState(false);
     
    function openModal() {
    setIsOpen(true);
    }


  function closeModal() {
    setIsOpen(false);
  }

    return(
        <CardContainer>
            <div className="posicionamento">
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
                            <InfoIcon onClick={openModal}/>       
                        </div>    
                    </ContainerIcon>
                </div>
            </div>   
            {!openModal ? null : <div id="modalContainer">
            <Reactmodal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                style={{
                    overlay:{
                      backgroundColor: 'rgba(17, 17, 17, 0.678)'
                    }
                }}
                >
                <div className="imgModal">
                    <img className="imagem-modal" src={image} alt="Capa do game"/>
                </div>
                <div className="informacoes"> 
                    <div className="tags">
                        <p className="titulo">{title}</p>
                        <div className="tagControll">
                            <p className="tag">{category}</p>
                            <p className="tag">{platform}</p>
                            <p className="tag"><span>R$</span>{price}</p>
                        </div>
                    </div>
                    <div className="infoExtra">
                        <div className="infoControll">                          
                            <p className="info">Storage: <span className="info-api">{storage}GB</span></p>
                            <p className="info">Ano do lançamento: <span className="info-api">{year}</span></p>
                        </div>
                        <div className="descricao">
                        <p>{describe}</p>
                    </div> 
                    </div>
                </div> 
                <div className="botao-posicao">
                    <button className="botao-modal" onClick={closeModal}><AiFillCloseCircle size="25" color="white"/></button>
                </div>   
            </Reactmodal>     
            </div>}
            </div>
            
                    
             
        </CardContainer>
        
    )
}

export default Card;