import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const PhotoForm = ({onFilesChange, invalid, setFiles}) => {
    const history = useHistory();

    return (
        <Form>
            <div className="text-center">Фотография</div>
            <div className="d-flex justify-content-end">
                <Button onClick={()=>{history.push('/contact'); setFiles([])}} className="mr-1" type="button" color="primary">Prev</Button>
                <Button onClick={()=>history.push('/publications')} type="button" color="primary">Next</Button>
            </div>
            <FormGroup>
                <Label  for="exampleFile">Выбрать фото</Label>
                <Input invalid={invalid} onChange={(e)=>onFilesChange(e)} multiple accept="image/*" type="file" name="file" id="exampleFile" />
                <FormFeedback>Не более 5 фото(файлы не сохранены)</FormFeedback>
            </FormGroup>
        </Form>
    )
}

export default PhotoForm;