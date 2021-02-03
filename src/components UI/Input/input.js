import React from 'react'
import InputStyled from './inputstyled'


const Input = ({inputValue, inputPlaceHolder, onChangeHandleInput}) => {
    return(
        <InputStyled
        type='text'
        placeholder={inputPlaceHolder}
        value={inputValue}
        onChange={ (event) => onChangeHandleInput(event.target.value) }
        />
    )
}

export default Input