import styled from "styled-components";

const LabelStyled = styled.label`
   width: 20%;
  font-size: 15px;
`;

function Label(props){
     return (
        <LabelStyled>{props.text}</LabelStyled>
     )
}

export default Label