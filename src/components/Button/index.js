import styled from "styled-components";

const Button = styled.button`
color: var(--white);
border: 2px solid #FFD908;
background: var(--black);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 20px;
text-decoration: none;
display: inline-block;
transition: opacity .5s;

&:hover,
&:focus {
opacity: .5;
}
@media(max-width: 800px) {
    background-color: var(--primary);
    border: 0;
    border-radius: 0;
    botton: 0;
    color: black;
    left: 0;
    right: 0;
    position: fixed;
    outline: 0;
    texte-align: center;

}
`;

export default Button

