import React from 'react';
import * as lucid from 'lucide-react'
import Button from '../Button';

const Cta = ({flex}) => {
    return (
        <>
            <div className={`flex flex-${flex} justify-center items-center gap-3`}>
                <Button children="Get Started" to="/hero" variant="secondary" lucid>
                    <span>Get Started</span>
                    <span><lucid.ArrowRight /></span>
                </Button>
                <Button children="Learn Heroship" to="/docs" variant="primary" />
            </div>
        </>
    );
}

export default Cta;