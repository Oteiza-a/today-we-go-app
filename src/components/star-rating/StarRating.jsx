import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {

  const renderRating = () => {
    
  }

  return (
    <div className="rating-container">
      {renderRating()}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number
};

export default StarRating;