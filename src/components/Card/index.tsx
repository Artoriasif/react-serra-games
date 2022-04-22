import React from "react";
import {CardContainer, BuyIcon, InfoIcon, ContainerIcon} from "./styles";
import ReactModal from 'react-modal'
import './modal.scss';
import { AiFillCloseCircle } from "react-icons/ai";



ReactModal.setAppElement('#root')

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
            <div id="modalContainer">
            <ReactModal
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
                    <img src={image} alt="Capa do game"/>
                </div>
                <div className="informacoes">
                    <p className="titulo">{title}</p>
                    <div className="tags">
                        <p className="tag">{category}</p>
                        <p className="tag">{platform}</p>
                        <p className="tag"><span>R$</span>{price}</p>
                    </div>
                    <div className="infoExtra">
                        <p>O jogo pesa: {storage}GB</p>
                        <p>Ano de lançamento: {year}</p>
                    </div>
                    <div className="descricao">
                        <p>{describe}</p>
                    </div> 
                    
                </div> 
                <button onClick={closeModal}><AiFillCloseCircle size="25" color="white"/></button>
            </ReactModal>     
            </div>
            </div>
            
                    
             
        </CardContainer>
        
    )
}

export default Card;