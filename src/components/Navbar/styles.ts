import styled from "styled-components";

export const HeaderPage = styled.header`
    padding: 10px 20px;
    margin-bottom:20px;
    margin-top:0;
    background-color: #222;
    color:white;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;

    & img{
        height: 25px;
        width: 25px;
        margin-right: 5px;
    }

    .logo{
        font-size:21px;
        font-weight: 300;
        display: flex;


        > span {
            font-weight: 500;
            background: #145;
            border:1px solid #145;
            border-right-width: 5px;
            border-bottom-right-radius:20px;
            padding:1px;
            margin-right: 2px;
        }
    }

    .search{
        display: flex;
        align-items: center;
        width:200px;
        margin-right: 15px;

        > label{
            color: black;
            font-size: 20px;
            position: absolute;
            display: flex;
        }

        & input{
            border: 2px solid #eee;
            padding: 5px 10px 5px 20px;
            font-size:15px;
            line-height:15px;
            display: block;
            width:100%;
            outline: 0;
            border-radius:15px
        }
    }

    .buttons{

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
            z-index: 1;
        }

        .dropdown:hover .dropdown-content {
        display: block;
        }
    }

    @media(max-width: 500px) {
        justify-content:center;
        align-items: center;

            .search{
            display: flex;
            align-items: center;
            width:150px;
            margin-right: 15px;

            > label{
                color: black;
                font-size: 20px;
                position: absolute;
                display: flex;
            }

            & input{
                border: 2px solid #eee;
                padding: 5px 10px 5px 20px;
                font-size:15px;
                line-height:15px;
                display: block;
                width:100%;
                outline: 0;
                border-radius:15px
            }
        }
    
    }
    
`;