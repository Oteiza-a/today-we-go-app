import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import './BannerSlider.css'

const { Item, Caption } = Carousel

const BannerSlider = ({ banners }) => {

  const renderBanners = () => (
    banners.map(({ imageSrc, title, text }, index) => {
      return (
        <Item key={index} className="banner-carousel-item">
          <div style={{ background: `url(${imageSrc})` }} className="banner-img-box"/>
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