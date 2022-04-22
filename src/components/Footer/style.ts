import styled from "styled-components";
import {AiFillLinkedin} from "react-icons/ai";


export const ContainerFooter = styled.section`
    display: flex;
    justify-content:flex-end;
`

export const Footer = styled.footer`
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    background-color:#222;
    padding:10px 20px 10px 20px;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;

    img{
        width:50px;
        height:50px;
        margin-top:10px;
    }

    .descricao{
        text-align: center;
        font-size:17px;
        color: #bdbfbf;
    }

    .line{
        width:200px;
        height: 3px;
        border-radius:100%;
        background-color: #bdbfbf;
        margin-top:5px;
    
    }

    .sociais{
        font-size:18px;
        width:300px;
        display: flex;
        justify-content:space-between;
        margin-bottom: 10px;

       > a{
            display: flex;
            text-decoration:none;
            color: #bdbfbf;
            font-weight:500;
        }
    }

    .info{
        width:100%;
        text-align: center;
        color: #bdbfbf;
    }

    @media (max-width: 500px) {
        img{
            width:40px;
            height:40px;
            margin-top:10px;
        }

        .descricao{
            text-align: center;
            font-size:16px;
            color: #bdbfbf;
        }
        .line{
            width:200px;
            height: 4px;
            border-radius:100%;
            background-color: #bdbfbf;
            margin-top:5px;
            margin-bottom:5px;
        }

    }


`;

export const Linkedin = styled(AiFillLinkedin)`
    width: 25px;
    height: 25px;
    color: #bdbfbf;
`;