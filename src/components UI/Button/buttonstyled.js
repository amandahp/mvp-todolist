import styled from 'styled-components'

const ButtonStyled = styled.button`
    background: ${props => props.main};
    box-shadow: 5px 2.5px 2.5px black;
    border: none;
    border-radius: 3px;
    color: ${props => props.color};
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    &:focus{
        outline: none;
    &:hover{
        background: ${props => props.mainhover};
        color: ${props => props.colorhover};
    }
;`

export default ButtonStyled
