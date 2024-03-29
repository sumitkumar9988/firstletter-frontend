import React from 'react';

const Alert = ({ type, children }) => {
  let color;
  if (type === 'error') {
    color = 'bg-red-500';
  } else {
    color = 'bg-green-400';
  }
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <div className="pr-9 pl-9">
      {showAlert ? (
        <div className={'text-white px-9 py-4 border-0 rounded relative p-1 m- mb-1 ' + color}>
          <span className="text-xl inline pl-10-block mr-9 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle  mr-8">
            <b className="capitalize">{type}!</b> {children}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default function ClosingAlert({ color, type, message }) {
  return (
    <>
      <Alert color={color} type={type}>
        {message}
      </Alert>
      ;
    </>
  );
}
