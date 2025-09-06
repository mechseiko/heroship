import React from 'react';
import Button from '../Button';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import * as lucid from 'lucide-react'

function Join(props) {
    return (
        <section className='bg-muted'>
            <Container>
                <section className="bg-accent rounded-3xl space-y-5">
                    <Container>
                        <h1 className='text-left text-5xl mb-5'>So, what are we shipping today?</h1>
                        <input placeholder='Your email...' className='mb-5 size-20 outline-none text-dark text-xl bg-muted opacity-50 p-5 w-full rounded-xl'/>
                        <Button children="Get Started" to="/hero" variant="secondary" lucid>
                            <span>Get Started</span>
                            <span><lucid.ArrowRight /></span>
                        </Button>
                    </Container>
                    
                </section>
            </Container>
        </section>
    );
}

export default Join;