import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 8px;
    background-color: rgb(245, 249, 255);
    padding: 5px;
    width: 320px;
    min-height: 500px;
    border-radius: 20px;
    background: #E4EDFD;
    box-shadow: 10px 10px 49px #c2c9d7,
        -10px -10px 49px #ffffff;
`;

export const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const Currency = styled.select`
    margin: 10px;
    padding: 5px;
    width: 80px;
    height: 30px;
    border: none;
    color: #84878b;
    border-radius: 5px;
    background: #EAF3FF;
    box-shadow: 5px 5px 12px #c7cfd9,
        -5px -5px 12px #ffffff;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 10px;
    font-weight: normal;
    border-radius: 5px;
    color: #84878b;
    border-radius: 5px;
    width: 200px;
    background: #EAF3FF;
    box-shadow: 5px 5px 12px #c7cfd9,
        -5px -5px 12px #ffffff;
    transition: 0.3s;

    &:hover {
    color: #eee;
    border-radius: 5px;
    background: #7E9BFF;
    box-shadow: inset 5px 5px 12px #6b84d9,
        inset -5px -5px 12px #91b2ff;
    }
`;

export const Amount = styled.input`
    border-radius: 5px;
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: #EAF3FF;
    color: #84878b;
    padding-left: 15px;
    box-shadow: inset 6px 6px 12px #cdd5e4,
        inset -6px -6px 12px #fbffff;
`;

export const StyledResult = styled.p`
    margin: 0 auto;
    padding: 10px;
    width: 200px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 20px;
    margin-top: 20px;
    color: #eee;
    border-radius: 10px;
    background: #7E9BFF;
    box-shadow: inset 5px 5px 12px #6b84d9,
        inset -5px -5px 12px #91b2ff;
`;

export const Footer = styled.p`
    margin: 0 auto;
    max-width: 400px;
    font-size: 12px;
    font-style: italic;
    line-height: 1.5;
`;

export const Loading = styled.p`
    color: rgb(1, 101, 81);
`;

export const Failure = styled.p`
    color: crimson;
`;