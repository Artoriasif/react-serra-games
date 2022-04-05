import styled from "styled-components";
import {BsSearch} from "react-icons/bs"

export const SearchContainer = styled.div`
display: flex;
justify-content:center;
width:100%;

    .input-container{
        display: flex;
        width:350px; 
        justify-content:flex-start;
        flex-wrap: wrap;
        align-items: center;
        
        label{
            margin-left:2px;
            position: absolute;
            display: flex;
        }
        
        > input{
            border: 2px solid #eee;
            padding: 5px 10px 5px 35px;
            font-size:15px;
            line-height:15px;
            display: block;
            width:100%;
            outline: 0;
            border-radius:15px
        }
    }



`

export const IconSearch = styled(BsSearch)`
    width: 20px;
    height: 20px;
    color: #222;
    
`