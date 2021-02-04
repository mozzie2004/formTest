import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Jumbotron, Container, Alert } from 'reactstrap';
import MainForm from '../main-form/main-form';
import ContactForm from '../contact-form/contact-form';
import PhotoForm from '../photo-form/photo-form';
import Publications from '../publications/publications';

const App = () => {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [title, setTitle] = useState('');
    const [inValidTitle, setInValidTitle] = useState(false);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [phone, setPhone] = useState('');
    const [inValidPhone, setInValidPhone] = useState(false);
    const [email, setEmail] = useState('');
    const [files, setFiles] = useState([]);
    const [inValidFiles, setInValidFiles] = useState(false);

    const history = useHistory();

    const onDismiss = () => setVisibleAlert(false);

    const onTitleChange = (e) => {
        setTitle(e.target.value);
        if (e.target.value !== '') {
            setInValidTitle(false);
        } else {
            setInValidTitle(true);
        }
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const onStatusChange = () => {
        setStatus(!status)
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
        if (e.target.value !== '') {
            setInValidPhone(false);
        } else {
            setInValidPhone(true);
        }
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onFilesChange = (e) => {
        if (e.target.files.length > 5) {
            setInValidFiles(true)
        } else {
            setInValidFiles(false);
            setFiles(e.target.files);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const statusToString = status ? 'on' : 'off';
        formData.append('title', title);
        formData.append('description', description);
        formData.append('status', statusToString);
        formData.append('phone', phone);
        formData.append('email', email);

        for (let i = 0; i < files.length; i++) {
            formData.append('photo', files[i])
        }

        for (let elem of formData) {
            console.log(elem)
        }

        setTitle('');
        setDescription('');
        setStatus(false);
        setPhone('');
        setEmail('');
        setFiles([]);

        setVisibleAlert(true);
        history.push('/');
    }

    return (
        <Jumbotron>
            <Container>
                <Alert className="position-absolute" color="primary" isOpen={visibleAlert} toggle={onDismiss} fade={false}>
                    Данные сохранены
                </Alert>
                <Route exact path="/">
                    <MainForm
                        title={title}
                        onTitleChange={onTitleChange}
                        description={description}
                        onDescriptionChange={onDescriptionChange}
                        onStatusChange={onStatusChange}
                        status={status}
                        invalid={inValidTitle}
                        setInValidTitle={setInValidTitle} />
                </Route>
                <Route path="/contact">
                    <ContactForm
                        phone={phone}
                        onPhoneChange={onPhoneChange}
                        invalid={inValidPhone}
                        email={email}
                        onEmailChange={onEmailChange}
                        setInValidPhone={setInValidPhone} />
                </Route>
                <Route path="/photo">
                    <PhotoForm
                        files={files}
                        invalid={inValidFiles}
                        onFilesChange={onFilesChange}
                        setFiles={setFiles} />
                </Route>
                <Route path="/publications">
                    <Publications
                        onSubmit={onSubmit}
                        setFiles={setFiles} />
                </Route>
            </Container>
        </Jumbotron>
    )
}

export default App;