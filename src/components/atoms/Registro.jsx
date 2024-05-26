import styled from "styled-components"


const RegistroDiv = styled.div`

`;

function Registro({listArray}){
    return (
        <RegistroDiv>
            <p>{listArray.join(',')}</p>
        </RegistroDiv>
    )
}

export default Registro