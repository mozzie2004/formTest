import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const ContactForm = ({phone, invalid, onPhoneChange, email, onEmailChange, setInValidPhone}) => {
    const history = useHistory();

    const moveNextPage = () => { 
        if (phone === '') {
            setInValidPhone(true)
            return
        }
        history.push('/photo')
    }

    return (
    <>  
        <div className="text-center">Контактная информация</div>
        <Form>
            <div className="d-flex justify-content-end">
                <Button onClick={()=>history.push('/')} className="mr-1" type="button" color="primary">Prev</Button>
                <Button onClick={moveNextPage} type="button" color="primary">Next</Button>
            </div>
            <FormGroup>
                <Label for="phone">Номер телефона</Label>
                <Input onChange={(e)=>onPhoneChange(e)} invalid={invalid} value={phone} required type="text"  name="phone" id="phone" />
                <FormFeedback>это поле обязательно для заполнения</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label value={email} for="email">Емайл</Label>
                <Input onChange={(e)=>onEmailChange(e)} type="text" name="email" id="email" />
            </FormGroup>
        </Form>
    </>
    )
}

export default ContactForm;