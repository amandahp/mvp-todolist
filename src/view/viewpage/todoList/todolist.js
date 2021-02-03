import React, {Fragment} from 'react';
import Button from '../../../components UI/Button/button';
import Container from '../../../components UI/Container List/container';
import ContainerGeral from '../../../components UI/Container/container'
import Input from '../../../components UI/Input/input'
import { GlobalStyle } from './todoliststyled'

const TodoList = ({todosPage, inputPage, handleOnClickPage, handleInputChangePage }) => {
    console.log(handleOnClickPage)
    return(
        <Fragment>
            <GlobalStyle />
            <ContainerGeral>
                    <h1>Todo List</h1>
                    <Input 
                        inputValue={inputPage} 
                        inputPlaceHolder={'Adicione uma tarefa'} 
                        onChangeHandleInput={handleInputChangePage}
                    />
                    <Button
                        onClickButton={handleOnClickPage}
                        main={'black'}
                        color={'white'}
                        mainhover={'white'}
                        colorhover={'black'}
                    >+ADD</Button>
                    {todosPage.map(todo => {
                        return (
                            <Container>
                                {todo}
                            </Container>
                        )
                    })}
            </ContainerGeral>

        </Fragment>

    )
}

export default TodoList




