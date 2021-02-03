import React from 'react'
import ButtonStyled from './buttonstyled'

const Button = (props) => {
    
    return(
        <ButtonStyled 
            main={props.main}
            color={props.color}
            mainhover={props.mainhover}
            colorhover={props.colorhover}
            onClick={props.onClickButton}
        >
        {props.children}
        </ButtonStyled>
    )

}

export default Button