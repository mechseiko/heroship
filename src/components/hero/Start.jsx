import React from 'react';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import { useState, useEffect } from 'react';
import * as lucid from 'lucide-react'
import Cta from './Cta';

function Start(props) {
    return (
        <div>
            <section className='relative justify-center items-center text-center bg-muted text-dark mx-auto'>
                <Container>
                    <div className='py-10'>
                        <SectionHeader title={"Stop wasting hours writing, designing and reviewing hero sections."} subtitle={"Join developers all over the world and start using heroship today!"} theme="muted"/>
                    </div>
                    
                    <Cta flex={"row"}/>
                </Container>
            </section>
        </div>
    );
}

export default Start;