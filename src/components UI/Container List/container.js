import React, {Fragment} from 'react'
import { ContainerStyled, Li, Label, InputContainer, Span } from './containerstyled'

const Container = (props) =>{
    return(
        <Fragment>
            <ContainerStyled>
                <Li>
                    <Label>
                        <InputContainer type="checkbox" />
                        <Span> {props.children}  </Span>
                    </Label>
                </Li>
            </ContainerStyled>
        </Fragment>        
    )
}

export default Container