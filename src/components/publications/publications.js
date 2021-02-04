import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Publications = ({onSubmit, setFiles}) => {
    const history = useHistory();
    return(
        <>
        <Form onSubmit={(e)=>onSubmit(e)}>
            <div className="text-center">Публикация</div>
            <div className="d-flex justify-content-end">
                <Button onClick={()=>{history.push('/photo'); setFiles([])}} className="mr-1" type="button" color="primary">Prev</Button>
                <Button  type="submit" color="primary">Save</Button>
            </div>
            <FormGroup check>
                <Label check>
                <Input name="service1" type="checkbox" />
                Услуга 1
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input name="service2" type="checkbox" />
                Услуга 2
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input name="service3" type="checkbox" />
                Услуга 3
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input name="service4" type="checkbox" />
                Услуга 4
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input name="service5" type="checkbox" />
                Услуга 5
                </Label>
            </FormGroup>
        </Form>
        </>
        
    )
}
export default Publications;