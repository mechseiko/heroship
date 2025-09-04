import React from 'react';
import Container from '../Container';
import shipping from '../../assets/shipping.mp4'

const Ship = () => {
    return (
        <>
            <section className='bg-muted '>
                <Container>
                    <div className='video-container'>
                        <video autoPlay muted loop playsInline>
                            <source src={shipping} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Ship;