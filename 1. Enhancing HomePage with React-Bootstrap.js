// Task 1
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import './homepage.css'; // Task 2 Location


const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Button variant="primary" size="lg">
                Shop Now
            </Button>
        </div>
    );
};
export default HomePage;

// Task 2
// imported css page for details

// Task 3

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const styles = {
        container: {
            backgroundColor: '#e9f7fc',
            color: '#034f84',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #034f84',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            borderRadius: '10px',
        },
        button: {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to Our Store</h1>
            <Button style={styles.button} variant="primary" size="lg">
                Shop Now
            </Button>
            <Card style={{ width: '18rem', marginTop: '30px' }}>
                <Card.Body>
                    <Card.Title>Featured Product</Card.Title>
                    <Card.Text>
                        Explore our exclusive range of products and grab them at amazing discounts!
                    </Card.Text>
                    <Button variant="success">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomePage;

// Task 4
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome-image.jpg'; // Adjust the path as needed

const HomePage = () => {
    const styles = {
        container: {
            backgroundColor: '#e9f7fc',
            color: '#034f84',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #034f84',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            borderRadius: '10px',
        },
        button: {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginTop: '20px',
        },
        image: {
            marginBottom: '20px',
            maxWidth: '100%',
            height: 'auto',
        },
    };

    return (
        <div style={styles.container}>
            <Image src={welcomeImage} style={styles.image} fluid />
            <h1>Welcome to Our Store</h1>
            <Button style={styles.button} variant="primary" size="lg">
                Shop Now
            </Button>
            <Card style={{ width: '18rem', marginTop: '30px' }}>
                <Card.Body>
                    <Card.Title>Featured Product</Card.Title>
                    <Card.Text>
                        Explore our exclusive range of products and grab them at amazing discounts!
                    </Card.Text>
                    <Button variant="success">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomePage;

