import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card";
import "./styles.scss";
interface indexProps{
    
}


interface GameListInterface{
    id: number;
    title: string;
    link_image: string;
    price: number;
    platform: string;
    categories: [
        {
            category: string,
            id: number
        }
    ]
}

export const Home: React.FC<indexProps> = () => {

    const [jogos, setJogos] = useState<GameListInterface[]>([]);
    const [selectedJogos, setSelectedJogos ] = useState<GameListInterface | undefined>(undefined);

    
   useEffect(() => {
       const getJogos = async () => {
           try {
               const response = await axios.get('https://jogo-library.herokuapp.com/jogo/')
               if(response != null){
                    setJogos(response.data.results)
                    console.log("jogos", response.data.results)
                    // setCategoria(response.data.results.categories.category)
                    console.log("Teste", response.data.results[0].categories[0].category);
               }
            }catch (error) {
               console.log(error);
           }
       }
       getJogos();
    
        
   }, [])

 
    return (
        <>
            <h1 className="titulo">Lista de Jogos</h1>
            <div id='container'>
                    {jogos.map((jogo) => <section onClick={() => setSelectedJogos(jogo)}>       
                    <Card
                        key={jogo.id}
                        title={jogo.title} 
                        image={jogo.link_image} 
                        price={jogo.price}
                        platform={jogo.platform}
                        category = {jogo.categories[0].category} 
                    />             
                </section>)}           
            </div>
            <h2 className="titulo">Jogos selecionado: {selectedJogos?.title || undefined}</h2>
        </>
    );
};

 