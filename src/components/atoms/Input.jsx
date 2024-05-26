import styled from "styled-components";

const InputStyled = styled.input`
width: 100%;
  height: 25px;
  border: 1px gray solid;
  border-radius: 5px;
  color: #000000;
  font-size: 15px;
  display:  block;
`;

function Input(props){
    const handlerOnChange = (event) =>{
        props.fnVal(event.target.value)
    }
    return (
        <InputStyled type={props.type} placeholder={props.placeholder} value={props.val} onChange={handlerOnChange}></InputStyled>
    )
}

export default Input