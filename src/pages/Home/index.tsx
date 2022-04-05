import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card";
import "./styles.scss";
import SearchInput from "../../components/Input/SearchInput";
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

const api = "https://jogo-library.herokuapp.com/jogo/"

export const Home: React.FC<indexProps> = () => {

    const [jogos, setJogos] = useState<GameListInterface[]>([]);
    const [selectedJogos, setSelectedJogos ] = useState<GameListInterface | undefined>(undefined);
    const [text, setText] = useState("");
    
   useEffect(() => {
       const getJogos = async () => {
           try {
               const response = await axios.get(`${api}filter?title=${text}`)
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
    
        
   }, [text])

 
    return (
        <>
            
            <SearchInput value={text} onChange={(search:any) => setText(search)} />
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

 