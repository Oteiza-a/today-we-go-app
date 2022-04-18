import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './BusinessesCards.css'

import PropTypes from 'prop-types';

const BusinessesCards = ({ businesses }) => {

  const renderBusinesses = () => (
    businesses.map((business, index) => {
      const { name, image_url: imageUrl } = business
      return (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )
    })
  )
  

  return (
    <div className="section-spacing">
      <h3>Places that may interest you</h3>
      {renderBusinesses()}
    </div>
  );
};

BusinessesCards.propTypes = {
  businesses: PropTypes.array
};

export default BusinessesCards;