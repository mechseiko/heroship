import React from 'react';
import logo from '../assets/logo.png'

const Alert = ({message, closeAlertBox}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-1000 font-inter">
      <div className=" p-6 rounded-[30px] shadow-lg text-center max-w-[400px] w-[90%] border-[3px] border-secondary bg-dark">
        <img
          src={logo}
          alt="Heroship Logo"
          className="mx-auto mb-4 size-15"
        />
        <p className="text-2xl text-muted mb-5">{message}</p>
        <button
          onClick={closeAlertBox}
          className="bg-primary text-muted px-5 py-2 rounded font-semibold text-[15px] transition"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Alert;
