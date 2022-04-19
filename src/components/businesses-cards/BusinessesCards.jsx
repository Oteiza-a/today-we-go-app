import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './BusinessesCards.css'

import PropTypes from 'prop-types';

const BusinessesCards = ({ title, businesses }) => {

  const renderBusinesses = () => {
    return businesses.map(({ name, image_url: imageUrl, categories, distance }, index) => (
      <div className="masonry-item" key={index}>
        <Card className="business-card">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title className="dark-text">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{categories[0]?.title}</Card.Subtitle>
            {distance 
              ? <Card.Text className="dark-text"> {`${Math.trunc(distance)}m away`}</Card.Text> 
              : ""
            }
            <div className="w-100 d-flex justify-content-end">
              <Button variant="custom-secondary">{"See more >"}</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    ))
  }
  

  return (
    <div className="section-spacing">
      <h3 className="dark-text mb-4">{title}</h3>
      <div className="masonry-container">
        {renderBusinesses()}
      </div>
    </div>
  );
};

BusinessesCards.propTypes = {
  title: PropTypes.string,
  businesses: PropTypes.array
};

export default BusinessesCards;