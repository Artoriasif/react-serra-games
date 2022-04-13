import React from "react";
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
                            <InfoIcon onClick={openModal}/>       
                        </div>    
                    </ContainerIcon>
                </div>
            </div>   
            <div className="modal">
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(17, 17, 17, 0.678)'
                    },
                    content: {
                      display: "flex",
                      justifyContent: 'space-between',
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '4px solid #202020',
                      background: '#474747',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '15px',
                      outline: 'none',
                      padding: '15px',
                      width: '1200px',
                      height: '700px',
                    }
                  }}
                >
                <div className="img-modal">
                    <img style={{width:'500px', height:'660px', borderRadius:'15px', marginRight: '15px'}}src={image} alt="Capa do game"/>
                </div>
                <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <p style={{textAlign: 'center', fontSize:'30px', fontWeight:'bold',}}>{title}</p>
                    <div className="infos" style={{display: 'flex', justifyContent: 'space-around', fontSize:'20px'}}>
                        <p style={{border: '1px solid #000', padding: '5px', borderRadius: '15px'}}>{category}</p>
                        <p style={{border: '1px solid #000', padding: '5px', borderRadius: '15px'}}>{platform}</p>
                        <p style={{border: '1px solid #000', padding: '5px', borderRadius: '15px'}}><span style={{fontWeight:'bold'}}>R$</span>{price}</p>
                    </div>
                    <div className="descricao" style={{ background:'#3b3b3b', textAlign:'center', padding:'20px', borderRadius:'15px', fontSize:'18px'}}>
                        <p>{describe}</p>
                    </div> 
                </div> 
            </ReactModal>     
            </div>
                    
             
        </CardContainer>
        
    )
}

export default Card;