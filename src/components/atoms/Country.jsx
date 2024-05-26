import styled from "styled-components";

const InputCountryStyled = styled.input`
width: 100%;
  height: 25px;
  border: 1px gray solid;
  border-radius: 5px;
  color: #000000;
  font-size: 15px;
  display:  block;
`;

function Country(props){
    const handlerOnChange = (event) =>{
        props.fnVal(event.target.value)
    }
    
    return (
        <div>
            <InputCountryStyled type={props.type} placeholder={props.placeholder} value={props.val} onChange={handlerOnChange} list="countries"></InputCountryStyled>
            <datalist id="countries">
                <option value="Estados Unidos"/>
                <option value="Reino Unido"/>
                <option value="China"/>
                <option value="Japón"/>
                <option value="Alemania"/>
                <option value="Francia"/>
                <option value="Brasil"/>
                <option value="India"/>
                <option value="Rusia"/>
                <option value="Canadá"/>
                <option value="México"/> 
            </datalist>
        </div>
        )
}

export default Country