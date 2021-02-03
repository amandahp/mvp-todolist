import React, {Fragment} from 'react'
import ContainerGeralStyled  from './containerstyled'

const ContainerGeral = (props) => {
    return(
        <Fragment>
            <ContainerGeralStyled>
                {props.children}
            </ContainerGeralStyled>
        </Fragment>
    )
}

export default ContainerGeral