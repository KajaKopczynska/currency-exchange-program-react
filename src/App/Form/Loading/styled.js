import styled, { keyframes } from "styled-components";
import { ReactComponent as Puff } from "./puff.svg";

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    display: grid;
    justify-items: center;
`;

export const Icon = styled(Puff)`
    margin-top: 20px;
`;