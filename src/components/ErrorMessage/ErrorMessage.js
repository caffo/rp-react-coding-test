import React from 'react';
import { errorMessageShape } from '../../types';

import './ErrorMessage.css';

const ErrorMessage = ({ message }) => (
  <div className="ErrorMessage">
    <div>
      {message}
    </div>
  </div>
);

ErrorMessage.propTypes = errorMessageShape.isRequired;

export default ErrorMessage;
