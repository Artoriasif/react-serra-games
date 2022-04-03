import styled from "styled-components";
import {AiOutlineShoppingCart, AiFillPlusCircle } from "react-icons/ai"

export const CardContainer = styled.section`

   .container{
       background-color:#313333;
       display: flex;
       padding:10px;
       margin-bottom:10px;
       border-radius:10px;
       width:400px;
       height: 220px;
       box-shadow: 0 8px 32px 0 rgba(3, 38, 135, 0.37);
       margin:25px;
        
       


        img{
           height:200px;
           width:150px;
           border-radius: 10px;
       };

       img:hover{
        box-shadow: 0 8px 32px 0 rgba(189, 198, 201, 0.37);
        transition: 0.2s;
       }


       .info{
           display: flex;
           flex-direction:column;

           .titulo{
                text-align: center;
           };

           .cards{
               

               .price{
                
               };

               .genre{
                   
               };
               
           };
        };     
   };

   @media (max-width: 500px) {
       background-color:#313333;
       display: flex;
       flex-direction: column;
       padding:9px;
       margin-bottom:10px;
       border-radius:10px;
       width:350px;
       height: 200px;
       box-shadow: 0 8px 32px 0 rgba(3, 38, 135, 0.37);
       margin:20px;

        img{
           height:150px;
           width:140px;
           border-radius: 10px;
       };
   }
   
`;


export const ContainerIcon = styled.div`
    display: flex;
    justify-content:flex-end;
`

export const BuyIcon = styled(AiOutlineShoppingCart)`
    width: 25px;
    height: 25px;
    color: #bdbfbf;
    cursor:pointer;
`;


export const InfoIcon = styled( AiFillPlusCircle)`
    width: 25px;
    height: 25px;
    color: #bdbfbf;
    margin-left:5px;
    cursor:pointer;
`;


