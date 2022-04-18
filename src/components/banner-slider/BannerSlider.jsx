import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const { Item, Caption } = Carousel

const BannerSlider = ({ banners }) => {

  const renderBanners = () => (
    banners.map(({ imageSrc, title, text }, index) => {
      return (
        <Item key={index}>
          <img
            className="d-block w-100"
            src={imageSrc}
            alt="banner-img"
          />
          <Caption>
            <h3>{title}</h3>
            <p>{text}</p>
          </Caption>
        </Item>
      )
    })
  )

  return (
    <div>
      <Carousel>
        {renderBanners()}
      </Carousel>
    </div>
  );
};

BannerSlider.propTypes = {
  banners: PropTypes.array,
};

export default BannerSlider;