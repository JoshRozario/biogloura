import styled from "styled-components";


export const ButtonContainer = styled.p`
    text-transform: capitalize;
    display: inline-block;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0px;
    border-color: ${props => props.cart ? "rgb(119, 0, 156)":"rgb(119, 173, 156)"};
    font-family: Courier New;
    color: #ffffff;
    font-size: 21px;
    background: rgb(119, 173, 156);
    padding: 11px 20px 10px 20px;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    user-select: none
    &:hover {
        background: rgb(89, 129, 116);
        text-decoration: none;
        color: #fff;
    }
`