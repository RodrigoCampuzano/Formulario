import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 40%;
    height: 40px;
    border: 1px gray solid;
    border-radius: 5px;
    color: #000000;
    font-size: 20px;
    &:hover{
        background-color : #ff0000a0;
        color: aliceblue;
}
`;

function Button({title, onclick}){
    return (
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button