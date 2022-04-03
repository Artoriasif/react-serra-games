import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card";
import "./styles.scss";
interface indexProps {
    
}

interface GameListInterface{
     title: string;
     price: number;
     genre: string;
     link_image: string;
 }

export const Home: React.FC<indexProps> = () => {

    const [jogos, setJogos] = useState<GameListInterface[]>([]);
    const [selectedJogos, setSelectedJogos ] = useState<GameListInterface | undefined>(undefined);
    
   useEffect(() => {
        axios.get('https://jogo-library.herokuapp.com/jogo/')
        .then((response) => setJogos(response.data.results))
        .then((response) => console.log(response))
   }, [])

 
    return (
        <>
            <h1 className="titulo">Lista de Jogos</h1>
            <div id='container'>
                           
                {jogos.map((jogo) => <section id="card-position" onClick={() => setSelectedJogos(jogo)}>
                                
                    <Card
                        title={jogo.title} 
                        image={jogo.link_image} 
                        price={jogo.price} 
                        genre={jogo.genre}
                    />
                               
                </section>)}
                
            </div>
            <h2 className="titulo">Jogos selecionado: {selectedJogos?.title || undefined}</h2>
        </>
    );
};

 