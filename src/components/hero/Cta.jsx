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
                <a href="https://github.com/mechseiko/heroship" target="_blank">
                    <button className='cursor-pointer md:px-6 md:py-3 p-2 rounded font-medium transition duration-300 bg-primary text-white hover:bg-indigo-800 hover:scale-105 hover:shadow-lg flex flex-row justify-between items-center'>
                        <span><lucid.Github /></span>
                        <span>Github</span>
                    </button>
                </a>
            </div>
        </>
    );
}

export default Cta;