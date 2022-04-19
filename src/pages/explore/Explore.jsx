import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Explore.css'

// Components
import Header from '../../components/header/Header';
import Loading from '../../components/loading/Loading';
import BusinessesCards from '../../components/businesses-cards/BusinessesCards';
import Footer from '../../components/footer/Footer';

// Clients
import { getBusinesses } from '../../clients/businesses';

const Explore = () => {
  const [searchAddress, setSearchAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [businesses, setBusinesses] = useState([])

  const onSearch = async () => {
    if (!searchAddress || searchAddress?.length < 5) return
    setLoading(true)

    const businessesRes = await getBusinesses({location: searchAddress})
    if (businessesRes?.businesses) setBusinesses(businessesRes.businesses)
    setLoading(false)
  }

  const renderSearchSection = () => {
    return (
      <div className="search-background">
        <div className="search-content">
          <h1 htmlFor="address" className="mb-3">Discover interesting places to visit!</h1>
          <Form.Control
            type="text"
            id="address"
            placeholder="Enter an address"
            className="search-input"
            onChange={(e) => { setSearchAddress(e.target.value) }}
          />
          <small className="d-block mt-2">
            Remember to add the commune, region and city names.
          </small>
          {loading 
            ? <Loading />
            : <Button 
                variant="custom-primary" 
                className="mt-3"
                onClick={onSearch}
              >
                Discover
              </Button>
            }
        </div>
      </div>
    )
  }

  const renderBusinesses = () => {
    return (
      <div>
        <div className="search-loaded-section section-spacing pb-0">
          <Form.Label htmlFor="address-2" className="dark-text">Search again</Form.Label>
          <Form.Control
            type="text"
            id="address-2"
            placeholder="Adress"
            className="search-input"
            onChange={(e) => { setSearchAddress(e.target.value) }}
          />
          <small className="d-block mt-2 dark-text">
            Remember to add the commune, region and city names.
          </small>
          {loading 
            ? <Loading />
            : <Button 
                variant="custom-primary" 
                className="mt-3"
                onClick={onSearch}
              >
                Discover
              </Button>
            }
        </div>
        <BusinessesCards title="Results" businesses={businesses}/>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div>
          {businesses?.length
            ? renderBusinesses()
            : renderSearchSection()
          }
      </div>

      <Footer />
    </div>
  );
};

export default Explore;