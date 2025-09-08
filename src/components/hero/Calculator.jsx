import React, { useState, useEffect } from 'react';
import SectionHeader from '../SectionHeader';
import Container from '../Container';

const stats = {
  centered: {
    label: "Centered Hero",
    times: {
      junior: 180,
      mid: 90,
      senior: 45,
      yourApp: 5
    }
  },
  'left-image': {
    label: "Left Text, Right Image",
    times: {
      junior: 300,
      mid: 150,
      senior: 90,
      yourApp: 7
    }
  },
  fullscreen: {
    label: "Full-Screen with CTA",
    times: {
      junior: 240,
      mid: 150,
      senior: 90,
      yourApp: 6
    }
  }
};

const roles = {
  junior: { label: 'Junior Developer' },
  mid: { label: 'Mid-level Developer' },
  senior: { label: 'Senior Developer' }
};

const Calculator = () => {
  const [selectedRole, setSelectedRole] = useState('junior');
  const [selectedLayout, setSelectedLayout] = useState('centered');
  const [customTime, setCustomTime] = useState(stats['centered'].times['junior']);

  useEffect(() => {
    const defaultTime = stats[selectedLayout].times[selectedRole];
    setCustomTime(defaultTime);
  }, [selectedRole, selectedLayout]);

  const yourAppTime = stats[selectedLayout].times.yourApp;

  return (
    <section className="bg-muted text-dark opacity-95">
      <Container>
        <SectionHeader
          title="Stay the course, save your time"
          theme="muted"
        />

        <div className="mx-auto mt-5 text-center">

          <div className='mb-15'>
            <p className="text-[#525B61] text-xl leading-7 font-normal">Normally, you'd spend</p>
            <div className='flex justify-center items-center text-center mb-5 gap-2'>
              <input
                type="number"
                min="0"
                max="500"
                readOnly
                value={`${customTime}`}
                onChange={(e) => setCustomTime(Number(e.target.value))}
                className="no-spinner outline-none text-center text-6xl font-extrabold"
              />
              <p className="text-xl lg:text-2xl leading-6 lg:leading-9  font-extrabold">Minutes</p>
            </div>


            <div className="flex md:gap-5 gap-0 justify-center">
              <div>
                <label htmlFor="role" className='text-lg'>As a</label>
                <select
                  value={selectedRole}
                  id="role"
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="text-primary outline-none lg:text-lg text-md"
                >
                  {Object.entries(roles).map(([key, { label }]) => (
                    <>
                    <option key={key} value={key}>{label}</option>
                    </>
                    
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="hero" className='text-lg'>Writing a </label>
                <select
                  value={selectedLayout}
                  onChange={(e) => setSelectedLayout(e.target.value)}
                  id="hero"
                  className="text-primary outline-none lg:text-lg text-md"
                >
                  {Object.entries(stats).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <p className="text-[#525B61] text-xl leading-7 font-normal">But with Heroship, you'd spend</p>
          <div className='flex justify-center items-center text-center'>
            <input
              type="number"
              min="0"
              max="500"
              readOnly
              value={yourAppTime}
              className="no-spinner outline-none text-center text-6xl font-extrabold"
            />
            <p className="text-xl lg:text-2xl leading-6 lg:leading-9 font-extrabold">Minutes</p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Calculator;
