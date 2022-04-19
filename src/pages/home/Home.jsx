import React, { useEffect, useState } from 'react';

// Components
import Header from '../../components/header/Header';
import BannerSlider from '../../components/banner-slider/BannerSlider';
import BusinessesCards from '../../components/businesses-cards/BusinessesCards';
import Loading from '../../components/loading/Loading';
import Footer from '../../components/footer/Footer';

// Fixed Data
import { BANNERS } from '../../fixedData/banners'
import { DEFAULT_COORS } from '../../fixedData/defaultCoors'

// Helpers
import { getLocalstorageObject } from '../../helpers/localstorage.jsx'

// Clients
import { getBusinesses } from '../../clients/businesses';

const Home = () => {
  const [coors, setCoors] = useState(null)
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    getUserCoors()
  }, [])

  useEffect(() => {
    fetchBusinesses()
  }, [coors])

  const getUserCoors = async () => {
    const localCoors = getLocalstorageObject('coors')

    if (localCoors) {
      setCoors(localCoors)

    } else {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        const coors = { latitude, longitude }
        localStorage.setItem('coors', JSON.stringify(coors))
        setCoors(coors)

      }, () => {
        setCoors(DEFAULT_COORS)
      });
    }
  }

  const fetchBusinesses = async () => {
    if (!coors) return
    const businessesRes = await getBusinesses(coors)
    if (businessesRes?.businesses) setBusinesses(businessesRes.businesses)
  }

  return (
    <div>
      <Header />
      <div>
        <BannerSlider banners={BANNERS}/>

        {businesses?.length 
          ? <BusinessesCards 
              title="Places that may interest you" 
              businesses={businesses}
            />
          : <Loading />
        }
      </div>
      <Footer />
    </div>
  );
};


export default Home;