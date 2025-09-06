import React, { useRef } from 'react';
import Container from '../Container';
import shipping from '../../assets/shipping.mp4';

const Ship = () => {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = glowRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    glowRef.current.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(61, 31, 148, 0.4),
        rgba(0, 194, 168, 0.2),
        rgba(249, 168, 38, 0.3)
      )
    `;
  };

  return (
    <section className="bg-muted">
      <Container>
        <div
          ref={glowRef}
          onMouseMove={handleMouseMove}
          className="rounded-lg transition-all duration-300 md:p-5 p-2" 
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-lg w-full z-10"
          >
            <source src={shipping} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </section>
  );
};

export default Ship;