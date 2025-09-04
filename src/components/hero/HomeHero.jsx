import { useState, useEffect, useRef } from 'react';
import Container from '../Container';
import Cta from './Cta';

function HomeHero(props) {
    const [text, setText] = useState("Beautiful");
    const indexRef = useRef(0);
    const keys = ["Beautiful", "Stunning", "Breathtaking", "Creative", "Extra-ordinary"];
    const [position, setPosition] = useState({ 
        y: window.innerHeight/2,
        x: window.innerWidth/2 
    });

    useEffect(() => {
        const textInterval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % keys.length;
            setText(keys[indexRef.current]);
            }, 2500);
        const move = (mouse) => {
            setPosition({ x: mouse.clientX, y: mouse.clientY });
        };
        window.addEventListener("mousemove", move);
        const clearBg = () => {
            clearInterval(textInterval);
            window.removeEventListener("mousemove", move);
        }
    return clearBg
    }, []);
    return (
        <div className='checker-background '>
        {
        <style>
            {`
            .checker-background::before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                // opacity: 50%;
                background-image: linear-gradient(#00C2A8 1px, transparent 1px),
                linear-gradient(90deg,  #F9A826 1px, transparent 1px);
                background-size: 5em 5em;
                mask-image: radial-gradient(ellipse at ${Math.round((position.x/100))}0% ${Math.round((position.y/100))}0%, red 0%, transparent 50%);
                z-index: -1;
                background-position-x: center;
            }
            `}
        </style>
        }
            <Container>
                <section className="relative justify-center items-center text-center text-white">
                    <div className="max-w-4xl mx-auto z-10 mb-3">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-muted mb-6 leading-tight">
                            Everything you need to build <span className="text-secondary">{text} hero sections.</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl opacity-80 mb-10 max-w-xl mx-auto">
                            Create stunning website hero sections in minutes. Just answer a few questions and instantly generate a beautiful, ready-to-use design.
                        </p>

                        <Cta flex={"row"}/>
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default HomeHero;