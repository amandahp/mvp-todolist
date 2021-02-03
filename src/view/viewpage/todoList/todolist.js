import React, {Fragment} from 'react';
import Button from '../../../components UI/Button/button';
import Container from '../../../components UI/Container List/container';
import Input from '../../../components UI/Input/input'

const TodoList = ({todosPage, inputPage, handleOnClickPage, handleInputChangePage }) => {
    console.log(handleOnClickPage)
    return(
        <Fragment>
            <Container>
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
            </Container>

        </Fragment>

    )
}

export default TodoList




