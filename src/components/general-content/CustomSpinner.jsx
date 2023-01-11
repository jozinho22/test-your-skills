import { Container, Spinner } from 'react-bootstrap';

const CustomSpinner = () => {
    return (
        <Container className="RelativeContainer">
            <div className="LoadingSpinner">
                <p>Loading...</p>
                <Spinner animation="border" />
            </div> 
        </Container>
    );
}

export default CustomSpinner;