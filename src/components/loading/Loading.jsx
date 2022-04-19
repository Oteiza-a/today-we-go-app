import React from 'react';
import './Loading.css'

// Components
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="grow" />
    </div>
  );
};

export default Loading;