import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const MainForm = ({title, description, onTitleChange, onDescriptionChange, onStatusChange, status, invalid, setInValidTitle}) => {
    const history = useHistory();

    const moveNextPage = () => { 
        if (title === '') {
            setInValidTitle(true)
            return
        }
        history.push('/contact')
    }
    return (
        <>  
            <div className="text-center">Основная информация</div>
            <Form>
                <div className="d-flex justify-content-end">
                    <Button onClick={moveNextPage} type="button" color="primary">Next</Button>
                </div>
                <FormGroup>
                    <Label for="title">Заголовок</Label>
                    <Input invalid={invalid} onChange={(e)=>onTitleChange(e)} required type="text" value={title} name="title" id="title" />
                    <FormFeedback>это поле обязательно для заполнения</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Описание</Label>
                    <Input onChange={(e)=>onDescriptionChange(e)} value={description} type="textarea" name="description" id="description" />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input name="status" checked={status} onChange={onStatusChange} type="checkbox" />
                    Статус
                    </Label>
                </FormGroup>
            </Form>
        </>
    )
}

export default MainForm;