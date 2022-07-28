import React from 'react'
import { InfoSection } from '../../components';
import { projectsObject } from '../../constants/Data';
 

const Home = () => {
  return (
    <>
        <InfoSection {...projectsObject}/>
    </>
  );
};

export default Home;