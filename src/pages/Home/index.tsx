import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card";
import "./styles.scss";
import SearchInput from "../../components/Input/SearchInput";
import { start } from 'repl';

interface indexProps{
    
}


interface GameListInterface{
    id: number;
    count: number;
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
    describe: string;
    
}

const LIMIT = 50;
const api = "https://jogo-library.herokuapp.com/jogo/"

export const Home: React.FC<indexProps> = () => {

    const [jogos, setJogos] = useState<GameListInterface[]>([]);
    const [selectedJogos, setSelectedJogos ] = useState<GameListInterface | undefined>(undefined);
    const [text, setText] = useState("");
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);



    const pages = Math.ceil(jogos.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentJogos = jogos.slice(startIndex, endIndex);

   useEffect(() => {
       const getJogos = async () => {
           try {
               const response = await axios.get(`${api}filter?title=${text}&limit=${LIMIT}`)
               if(response != null){
                    setJogos(response.data.results)
                    console.log("jogos", response.data.next)
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
                    {currentJogos.map((jogo) => <section>       
                    <Card
                        key={jogo.id}
                        title={jogo.title} 
                        image={jogo.link_image} 
                        price={jogo.price}
                        platform={jogo.platform}
                        category = {jogo.categories[0].category}
                        describe={jogo.describe}
                    />             
                </section>)}           
            </div>
            <div>
            {Array.from(Array(pages), (jogo, index) => {
                return <button key={index} value={index} onClick={(event) => setCurrentPage(Number(event.currentTarget.value))}>{index}</button>
            })}
            </div>

        </>
    );
};

 